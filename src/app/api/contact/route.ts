import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = "Lionz Roofing <noreply@contacts.lionzroofing.com>";
const TO_INTERNAL = "contacts@lionzroofing.com";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      firstName, lastName, phone, email,
      service, location, message, smsConsent,
      recaptchaToken,
    } = body;

    // Basic server-side validation
    if (!firstName || !lastName || !phone || !email) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    // Verify reCAPTCHA
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (secretKey && recaptchaToken) {
      const verify = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`,
        { method: "POST" }
      );
      const verifyData = await verify.json();
      if (!verifyData.success) {
        return NextResponse.json({ error: "reCAPTCHA verification failed." }, { status: 400 });
      }
    }

    const submittedAt = new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
      dateStyle: "medium",
      timeStyle: "short",
    });

    const withTimeout = <T>(promise: Promise<T>, ms: number): Promise<T> =>
      Promise.race([promise, new Promise<never>((_, reject) => setTimeout(() => reject(new Error("Email timeout")), ms))]);

    // Email 1 — internal notification to Lionz Roofing
    await withTimeout(resend.emails.send({
      from: FROM,
      to: TO_INTERNAL,
      subject: `New Quote Request — ${firstName} ${lastName}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f9f9f9;border-radius:8px;">
          <div style="background:#001B44;padding:20px 24px;border-radius:8px 8px 0 0;">
            <img src="https://lionzroofing.com/images/logo/logo.webp" alt="Lionz Roofing" style="height:50px;width:auto;display:block;margin-bottom:12px;" />
            <h1 style="color:#E0B000;margin:0;font-size:22px;">New Quote Request</h1>
            <p style="color:#ffffff;margin:4px 0 0;font-size:13px;">Submitted via Contact Form</p>
          </div>
          <div style="background:#ffffff;padding:24px;border-radius:0 0 8px 8px;border:1px solid #e0e0e0;border-top:none;">
            <table style="width:100%;border-collapse:collapse;font-size:14px;">
              <tr style="border-bottom:1px solid #f0f0f0;">
                <td style="padding:10px 0;color:#666;width:130px;font-weight:bold;">Name</td>
                <td style="padding:10px 0;color:#111;">${firstName} ${lastName}</td>
              </tr>
              <tr style="border-bottom:1px solid #f0f0f0;">
                <td style="padding:10px 0;color:#666;font-weight:bold;">Phone</td>
                <td style="padding:10px 0;color:#111;">${phone}</td>
              </tr>
              <tr style="border-bottom:1px solid #f0f0f0;">
                <td style="padding:10px 0;color:#666;font-weight:bold;">Email</td>
                <td style="padding:10px 0;color:#111;">${email}</td>
              </tr>
              <tr style="border-bottom:1px solid #f0f0f0;">
                <td style="padding:10px 0;color:#666;font-weight:bold;">Service</td>
                <td style="padding:10px 0;color:#111;">${service || "Not specified"}</td>
              </tr>
              <tr style="border-bottom:1px solid #f0f0f0;">
                <td style="padding:10px 0;color:#666;font-weight:bold;">Location</td>
                <td style="padding:10px 0;color:#111;">${location || "Not specified"}</td>
              </tr>
              <tr style="border-bottom:1px solid #f0f0f0;">
                <td style="padding:10px 0;color:#666;font-weight:bold;">SMS Opt-in</td>
                <td style="padding:10px 0;color:#111;">${smsConsent ? "Yes" : "No"}</td>
              </tr>
              ${message ? `
              <tr>
                <td style="padding:10px 0;color:#666;font-weight:bold;vertical-align:top;">Message</td>
                <td style="padding:10px 0;color:#111;">${message}</td>
              </tr>` : ""}
            </table>
            <div style="margin-top:20px;padding:12px;background:#f5f5f5;border-radius:6px;font-size:12px;color:#888;">
              Submitted: ${submittedAt} EST
            </div>
            <div style="margin-top:16px;text-align:center;">
              <a href="tel:${phone}" style="display:inline-block;background:#E0B000;color:#001B44;font-weight:bold;padding:12px 28px;border-radius:8px;text-decoration:none;font-size:14px;">
                Call ${firstName} Now
              </a>
            </div>
          </div>
        </div>
      `,
    }), 10000);

    // Email 2 — auto-reply to client
    await withTimeout(resend.emails.send({
      from: FROM,
      to: email,
      subject: "We received your request — Lionz Roofing",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f9f9f9;border-radius:8px;">
          <div style="background:#001B44;padding:20px 24px;border-radius:8px 8px 0 0;text-align:center;">
            <img src="https://lionzroofing.com/images/logo/logo.webp" alt="Lionz Roofing" style="height:60px;width:auto;display:block;margin:0 auto 8px;" />
            <p style="color:#ffffff;margin:4px 0 0;font-size:13px;">South Florida Roofing Contractors</p>
          </div>
          <div style="background:#ffffff;padding:32px 24px;border-radius:0 0 8px 8px;border:1px solid #e0e0e0;border-top:none;text-align:center;">
            <h2 style="color:#001B44;font-size:20px;margin:0 0 12px;">Thanks, ${firstName}! We got your request.</h2>
            <p style="color:#555;font-size:14px;line-height:1.6;margin:0 0 20px;">
              Our team will review your request and get back to you within a few hours.<br/>
              If you need immediate assistance, feel free to call us directly.
            </p>
            <a href="tel:(954) 637-6835" style="display:inline-block;background:#E0B000;color:#001B44;font-weight:bold;padding:12px 28px;border-radius:8px;text-decoration:none;font-size:15px;">
              📞 (954) 637-6835
            </a>
            <div style="margin-top:32px;padding-top:20px;border-top:1px solid #f0f0f0;">
              <p style="color:#999;font-size:12px;margin:0;">
                5200 NW 33rd Ave Suite 200, Fort Lauderdale, FL 33309<br/>
                License # CCC1336828
              </p>
            </div>
          </div>
        </div>
      `,
    }), 10000);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Server error. Please try again." }, { status: 500 });
  }
}
