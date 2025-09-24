import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  const body = await req.json();
  const crc = process.env.P24_CRC!;
  const {
    p24_session_id,
    p24_amount,
    p24_currency,
    p24_order_id,
    p24_sign,
    p24_status,
  } = body;

  // weryfikacja sygnatury P24
  const signString = `${p24_session_id}|${p24_order_id}|${p24_amount}|${p24_currency}|${crc}`;
  const sign = crypto.createHash("sha384").update(signString).digest("hex");

  if (sign !== p24_sign) {
    return NextResponse.json({ error: "Invalid sign" }, { status: 400 });
  }

  // Tutaj możesz zapisać w DB status płatności
  console.log("Payment status:", p24_status);

  return NextResponse.json({ ok: true });
}
