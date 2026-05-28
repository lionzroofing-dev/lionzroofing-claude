import { NextResponse } from "next/server";

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

    // Forward to webhook (Zapier / Make / n8n)
    const webhookUrl = process.env.FORM_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName, lastName, phone, email,
          service, location, message, smsConsent,
          submittedAt: new Date().toISOString(),
          source: "lionzroofing.com/contact",
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error. Please try again." }, { status: 500 });
  }
}
