import { NextResponse } from "next/server"

const WEBHOOK_URL = "https://n8n-webhook.axmxa0.easypanel.host/webhook/rx-digital-lp"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      cache: "no-store",
    })

    if (!response.ok) {
      return NextResponse.json(
        { ok: false, error: "Webhook retornou erro" },
        { status: 502 },
      )
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Erro no endpoint de lead:", error)
    return NextResponse.json(
      { ok: false, error: "Falha ao processar lead" },
      { status: 500 },
    )
  }
}
