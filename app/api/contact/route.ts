import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

// ---- Simple in-memory rate limit (good for MVP) ----
const rateLimit = new Map<string, number>()
const RATE_LIMIT_TIME = 60_000 // 1 minute

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      inquiryType,
      firstName,
      lastName,
      email,
      organization,
      message,
      honeypot,
    } = body

    // 🛑 Honeypot spam protection
    if (honeypot) {
      return NextResponse.json({ success: true })
    }

    // 🛑 Rate limiting
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] || "unknown"
    const lastRequest = rateLimit.get(ip)

    if (lastRequest && Date.now() - lastRequest < RATE_LIMIT_TIME) {
      return NextResponse.json(
        { success: false, error: "Too many requests" },
        { status: 429 }
      )
    }

    rateLimit.set(ip, Date.now())

    // ---- SMTP Transport (Hostinger) ----
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 587,
      secure: false,
      auth: {
        user: "connect@adkaro.online",
        pass: process.env.EMAIL_PASSWORD!,
      },
      tls: {
        rejectUnauthorized: false,
      },
    })

    // ---- Admin HTML Email ----
    const adminHtml = `
<!DOCTYPE html>
<html>
<body style="font-family: Arial, sans-serif; background:#f8f8f8; padding:24px;">
  <div style="max-width:600px; background:#ffffff; border-radius:12px; padding:24px;">
    <h2>New Contact Inquiry</h2>
    <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Organization:</strong> ${organization || "—"}</p>
    <hr style="margin:24px 0;" />
    <p><strong>Message:</strong></p>
    <p style="white-space:pre-line;">${message}</p>
  </div>
</body>
</html>
`

    // ---- User Auto-Reply HTML ----
    const userHtml = `
<!DOCTYPE html>
<html>
<body style="margin:0; padding:0; background:#f8f8f8; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:520px; background:#ffffff; border-radius:16px; padding:32px;">
          <tr>
            <td style="font-size:24px; font-weight:600;">AdKaro</td>
          </tr>
          <tr>
            <td style="padding:16px 0;">
              <div style="height:1px; background:#e5e5e5;"></div>
            </td>
          </tr>
          <tr>
            <td style="font-size:16px; line-height:1.6; color:#222;">
              Hi ${firstName},
              <br /><br />
              Thanks for reaching out to <strong>AdKaro</strong>.
              <br /><br />
              We’ve received your message and will get back to you within
              <strong>2–3 business days</strong>.
            </td>
          </tr>
          <tr>
            <td style="padding:24px 0;">
              <div style="background:#f5f5f5; border-radius:12px; padding:16px; font-size:14px; line-height:1.6;">
                <strong>Your message:</strong><br /><br />
                ${message.replace(/\n/g, "<br />")}
              </div>
            </td>
          </tr>
          <tr>
            <td style="font-size:14px; line-height:1.6; color:#555;">
              If your inquiry is urgent, you can reply directly to this email.
              <br /><br />
              Warm regards,<br />
              <strong>Team AdKaro</strong><br />
              <span style="color:#888;">Advertising that respects attention.</span>
            </td>
          </tr>
        </table>
        <div style="max-width:520px; text-align:center; font-size:12px; color:#999; margin-top:16px;">
          © ${new Date().getFullYear()} AdKaro
        </div>
      </td>
    </tr>
  </table>
</body>
</html>
`

    // ---- Send Admin Email ----
    await transporter.sendMail({
      from: `"AdKaro Website" <connect@adkaro.online>`,
      to: "connect@adkaro.online",
      replyTo: email,
      subject: `New Contact Inquiry — ${inquiryType}`,
      html: adminHtml,
    })

    // ---- Send User Auto-Reply ----
    await transporter.sendMail({
      from: `"AdKaro" <connect@adkaro.online>`,
      to: email,
      subject: "We’ve received your message — AdKaro",
      html: userHtml,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("SMTP ERROR:", error)
    return NextResponse.json(
      { success: false, error: "Failed to send message" },
      { status: 500 }
    )
  }
}
