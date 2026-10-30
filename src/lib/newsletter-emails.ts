// ─────────────────────────────────────────────────────────────────────────────
//  src/lib/newsletter-emails.ts — email templates (table layout = safe in Gmail/Outlook)
// ─────────────────────────────────────────────────────────────────────────────

import { SITE_URL } from '@/lib/constants'

const esc = (s: string) => s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!)

export function confirmEmail({ confirmUrl, unsubscribeUrl }: { confirmUrl: string; unsubscribeUrl: string }) {
    const subject = 'Please confirm your FlavorNest newsletter subscription'
    const text = [
        'Xin chào!',
        '',
        'Thanks for signing up to the FlavorNest Vietnam newsletter.',
        'Please confirm your email address by opening this link:',
        confirmUrl,
        '',
        'If you did not sign up, simply ignore this email — you will not hear from us again.',
        '',
        '— Huy, FlavorNest Vietnam',
    ].join('\n')

    const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(subject)}</title></head>
<body style="margin:0;padding:0;background:#F5EDE3;">
<div style="display:none;max-height:0;overflow:hidden;">One click to confirm — then new Vietnamese recipes come straight to your inbox.</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F5EDE3;padding:32px 12px;">
<tr><td align="center">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background:#ffffff;border-radius:20px;overflow:hidden;">
    <tr><td style="background:#2D1A0E;padding:26px 32px;text-align:left;">
      <img src="${SITE_URL}/logo.png" width="40" height="40" alt="" style="vertical-align:middle;border-radius:10px;">
      <span style="vertical-align:middle;margin-left:10px;font-family:Georgia,'Times New Roman',serif;font-size:22px;font-weight:bold;color:#F5EDE3;">FlavorNest</span>
      <div style="font-family:Arial,sans-serif;font-size:10px;letter-spacing:3px;color:#F59E0B;margin:6px 0 0 50px;">VIETNAM GOURMET</div>
    </td></tr>
    <tr><td style="padding:34px 32px 8px;font-family:Arial,sans-serif;">
      <p style="margin:0 0 6px;font-size:12px;letter-spacing:2px;color:#D97706;font-weight:bold;">ONE LAST STEP</p>
      <h1 style="margin:0 0 14px;font-family:Georgia,'Times New Roman',serif;font-size:28px;line-height:1.2;color:#2D1A0E;">Confirm your subscription</h1>
      <p style="margin:0 0 26px;font-size:16px;line-height:1.65;color:#5C4636;">Xin chào! Thanks for joining the FlavorNest kitchen. Tap the button below and we will start sending you authentic Vietnamese recipes and the stories behind them.</p>
      <table role="presentation" cellpadding="0" cellspacing="0"><tr><td style="border-radius:999px;background:#D97706;">
        <a href="${confirmUrl}" style="display:inline-block;padding:15px 30px;font-size:16px;font-weight:bold;color:#ffffff;text-decoration:none;border-radius:999px;">Yes, confirm my email →</a>
      </td></tr></table>
      <p style="margin:26px 0 0;font-size:13px;line-height:1.6;color:#8A6E58;">Button not working? Copy this link into your browser:<br><a href="${confirmUrl}" style="color:#B45309;word-break:break-all;">${confirmUrl}</a></p>
    </td></tr>
    <tr><td style="padding:26px 32px 30px;font-family:Arial,sans-serif;">
      <p style="margin:0;font-size:13px;line-height:1.6;color:#8A6E58;">Didn’t sign up? Just ignore this email — you won’t hear from us again.</p>
    </td></tr>
    <tr><td style="background:#FBF8F4;padding:18px 32px;font-family:Arial,sans-serif;font-size:12px;line-height:1.6;color:#A08B78;">
      FlavorNest Vietnam · Authentic Vietnamese recipes from a small kitchen in Germany<br>
      <a href="${unsubscribeUrl}" style="color:#A08B78;">Unsubscribe</a> · <a href="${SITE_URL}/privacy" style="color:#A08B78;">Privacy</a> · <a href="${SITE_URL}/impressum" style="color:#A08B78;">Impressum</a>
    </td></tr>
  </table>
</td></tr></table>
</body></html>`
    return { subject, html, text }
}
