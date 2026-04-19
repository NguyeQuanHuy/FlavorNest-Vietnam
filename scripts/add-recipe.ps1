# ─────────────────────────────────────────────────────────────
#  scripts/add-recipe.ps1
#  FlavorNest Vietnam — Interactive recipe draft generator
#
#  Usage:
#    .\scripts\add-recipe.ps1
#    → prompts for slug, creates draft from template, opens in VS Code
#
#  OR with slug argument:
#    .\scripts\add-recipe.ps1 -Slug "banh-mi-thit-nuong"
# ─────────────────────────────────────────────────────────────

param(
    [string]$Slug = ""
)

# ── Color helpers ──
function Write-Success {
    param([string]$Message)
    Write-Host "[OK] $Message" -ForegroundColor Green
}

function Write-Info {
    param([string]$Message)
    Write-Host "[i]  $Message" -ForegroundColor Cyan
}

function Write-Warn {
    param([string]$Message)
    Write-Host "[!]  $Message" -ForegroundColor Yellow
}

function Write-Err {
    param([string]$Message)
    Write-Host "[X]  $Message" -ForegroundColor Red
}

Write-Host ""
Write-Host "---------------------------------------------" -ForegroundColor DarkGray
Write-Host "  FlavorNest Vietnam - Recipe Draft Creator  " -ForegroundColor White
Write-Host "---------------------------------------------" -ForegroundColor DarkGray
Write-Host ""

# ── Paths ──
$repoRoot = Split-Path -Parent $PSScriptRoot
$templatePath = Join-Path $repoRoot "docs\RECIPE_TEMPLATE.md"
$draftsDir = Join-Path $repoRoot "docs\drafts"

# ── Verify template exists ──
if (-not (Test-Path $templatePath)) {
    Write-Err "Template not found at: $templatePath"
    Write-Info "Make sure docs/RECIPE_TEMPLATE.md exists before running this script."
    exit 1
}

# ── Ensure drafts folder exists ──
if (-not (Test-Path $draftsDir)) {
    New-Item -Path $draftsDir -ItemType Directory -Force | Out-Null
    Write-Success "Created drafts folder: docs/drafts/"
}

# ── Prompt for slug if not provided ──
if ([string]::IsNullOrWhiteSpace($Slug)) {
    Write-Host "Enter recipe slug (kebab-case English no spaces):" -ForegroundColor White
    Write-Host "  Examples: banh-mi-thit-nuong / pho-bo-ha-noi / goi-cuon-tom-thit" -ForegroundColor DarkGray
    Write-Host ""
    $Slug = Read-Host "Slug"
}

# ── Validate slug ──
$Slug = $Slug.Trim().ToLower()

if ([string]::IsNullOrWhiteSpace($Slug)) {
    Write-Err "Slug cannot be empty."
    exit 1
}

if ($Slug -notmatch '^[a-z0-9]+(-[a-z0-9]+)*$') {
    Write-Err "Invalid slug format: '$Slug'"
    Write-Info "Slug must be lowercase kebab-case (letters numbers hyphens only)."
    Write-Info "Examples of valid slugs: 'banh-mi' or 'pho-bo-ha-noi' or 'bun-cha-2'"
    exit 1
}

# ── Check for existing draft ──
$draftPath = Join-Path $draftsDir "$Slug.md"

if (Test-Path $draftPath) {
    Write-Warn "A draft already exists: docs/drafts/$Slug.md"
    Write-Host ""
    $confirm = Read-Host "Overwrite? (y/N)"
    if ($confirm -ne 'y' -and $confirm -ne 'Y') {
        Write-Info "Cancelled. Opening existing draft instead."
        code -r $draftPath
        exit 0
    }
}

# ── Copy template to draft ──
try {
    $templateContent = Get-Content -LiteralPath $templatePath -Raw -Encoding UTF8
    
    # Pre-fill slug field in the draft
    $templateContent = $templateContent -replace '(?m)^- \*\*slug\*\*: ``', "- **slug**: ``$Slug``"
    
    # Pre-fill datePublished with today (ISO format)
    $today = Get-Date -Format "yyyy-MM-dd"
    $templateContent = $templateContent -replace '(?m)^- \*\*datePublished\*\*: ``', "- **datePublished**: ``$today``"
    
    # Write draft
    [System.IO.File]::WriteAllText($draftPath, $templateContent, [System.Text.UTF8Encoding]::new($false))
    
    Write-Success "Draft created: docs/drafts/$Slug.md"
    Write-Success "Pre-filled: slug=$Slug  datePublished=$today"
}
catch {
    Write-Err "Failed to create draft: $_"
    exit 1
}

# ── Check existing recipes for duplicates ──
$detailedPath = Join-Path $repoRoot "src\data\recipes-detailed.ts"
if (Test-Path $detailedPath) {
    $detailedContent = Get-Content -LiteralPath $detailedPath -Raw -Encoding UTF8
    if ($detailedContent -match "slug:\s*[`"']$Slug[`"']") {
        Write-Host ""
        Write-Warn "Slug '$Slug' already exists in recipes-detailed.ts"
        Write-Info "You'll need to either rename this recipe or update the existing one."
    }
}

# ── Open in VS Code ──
Write-Host ""
Write-Info "Opening draft in VS Code..."
code -r $draftPath

Write-Host ""
Write-Host "---------------------------------------------" -ForegroundColor DarkGray
Write-Host "  Next steps:" -ForegroundColor White
Write-Host "---------------------------------------------" -ForegroundColor DarkGray
Write-Host ""
Write-Host "  1. Fill in the draft following docs/RECIPE_CONTENT_GUIDE.md" -ForegroundColor White
Write-Host "  2. When done paste the filled draft to Claude and say:" -ForegroundColor White
Write-Host "     'Convert this recipe to TypeScript and add to recipes-detailed.ts'" -ForegroundColor Cyan
Write-Host "  3. Claude returns code - paste into src/data/recipes-detailed.ts" -ForegroundColor White
Write-Host "  4. Run: npm run build" -ForegroundColor White
Write-Host "  5. Commit and push." -ForegroundColor White
Write-Host ""
Write-Success "Happy writing!"
Write-Host ""