import { NextResponse } from "next/server";

const required = ["fullName", "company", "email", "phone", "location", "storeSize", "storeCount", "consent"];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const missing = required.filter(field => !body?.[field]);
    if (missing.length > 0) {
      return NextResponse.json({ ok: false, error: "Missing required fields", missing }, { status: 400 });
    }

    // Production integration point:
    // 1. Send `body` to your CRM / email tool.
    // 2. Use LEAD_WEBHOOK_URL from environment variables.
    // 3. Do not log personal data in production.
    if (process.env.LEAD_WEBHOOK_URL) {
      const webhookResponse = await fetch(process.env.LEAD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      if (!webhookResponse.ok) {
        return NextResponse.json({ ok: false, error: "Webhook failed" }, { status: 502 });
      }
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
}
