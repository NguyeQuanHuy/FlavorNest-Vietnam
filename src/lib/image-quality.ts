// ─────────────────────────────────────────────────────────────────────────────
//  src/lib/image-quality.ts  (server-only, build time)
//  Reads the pixel width of a local image straight from its file header
//  (JPEG / PNG / WebP) — no dependencies, synchronous, cached.
//  Used to keep low-resolution photos out of large, prominent spots.
// ─────────────────────────────────────────────────────────────────────────────

import fs from 'fs'
import path from 'path'

const PUBLIC = path.join(process.cwd(), 'public')
const cache = new Map<string, number>()

function readHead(file: string, bytes = 256 * 1024): Buffer | null {
    let fd: number | null = null
    try {
        fd = fs.openSync(file, 'r')
        const buf = Buffer.alloc(bytes)
        const n = fs.readSync(fd, buf, 0, bytes, 0)
        return buf.subarray(0, n)
    } catch { return null } finally { if (fd !== null) fs.closeSync(fd) }
}

function widthFromBuffer(b: Buffer): number {
    // PNG
    if (b.length > 24 && b.readUInt32BE(0) === 0x89504e47) return b.readUInt32BE(16)
    // WebP
    if (b.length > 30 && b.toString('ascii', 0, 4) === 'RIFF' && b.toString('ascii', 8, 12) === 'WEBP') {
        const kind = b.toString('ascii', 12, 16)
        if (kind === 'VP8 ') return b.readUInt16LE(26) & 0x3fff
        if (kind === 'VP8L') return 1 + (((b[22] & 0x3f) << 8) | b[21])
        if (kind === 'VP8X') return 1 + b.readUIntLE(24, 3)
        return 0
    }
    // JPEG: walk segments until a Start-Of-Frame marker
    if (b.length > 4 && b[0] === 0xff && b[1] === 0xd8) {
        let i = 2
        while (i + 9 < b.length) {
            if (b[i] !== 0xff) { i++; continue }
            const m = b[i + 1]
            if (m >= 0xc0 && m <= 0xcf && m !== 0xc4 && m !== 0xc8 && m !== 0xcc) return b.readUInt16BE(i + 7)
            if (m === 0xd8 || m === 0x01 || (m >= 0xd0 && m <= 0xd7)) { i += 2; continue }
            i += 2 + b.readUInt16BE(i + 2)
        }
    }
    return 0
}

/** Pixel width of /images/... (0 if missing or unreadable). Remote URLs count as large. */
export function imageWidth(src?: string): number {
    if (!src) return 0
    if (src.startsWith('http')) return 2000
    const hit = cache.get(src)
    if (hit !== undefined) return hit
    const head = readHead(path.join(PUBLIC, src))
    const w = head ? widthFromBuffer(head) : 0
    cache.set(src, w)
    return w
}

/** Sharp enough for a card ~360px wide on a 2× screen */
export const SHARP_MIN_WIDTH = 700
export const isSharp = (src?: string) => imageWidth(src) >= SHARP_MIN_WIDTH
