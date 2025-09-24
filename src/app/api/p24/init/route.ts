import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  const { amount, description, email, currency } = await req.json();

  const merchantId = Number(process.env.P24_MERCHANT_ID!);
  const crc = process.env.P24_CRC!;
  const secret = process.env.P24_SECRET!;
  const urlReturn = process.env.P24_URL_RETURN!;
  const urlStatus = process.env.P24_URL_STATUS!;

  // 1️⃣ Generowanie unikalnego sessionId
  const preSessionId = new Date().toISOString(); // np. "2025-09-24T12:34:56.789Z"
  const sessionId = crypto.createHash("md5").update(preSessionId).digest("hex");

  // 2️⃣ Generowanie sumy kontrolnej (sign)
  const sign = crypto
    .createHash("sha384")
    .update(
      JSON.stringify({
        sessionId,
        merchantId,
        amount: amount * 100, // P24 w groszach
        currency,
        crc,
      })
    )
    .digest("hex");

  // 3️⃣ Payload do /register
  const payload = {
    merchantId,
    posId: merchantId, // jak w PHP
    sessionId,
    amount: amount * 100,
    currency,
    description,
    email,
    regulationAccept: false,
    urlReturn,
    urlStatus,
    country: "PL",
    language: "pl",
    sign,
  };

  // 4️⃣ Basic Auth: posId:secret
  const basicAuth = Buffer.from(`${merchantId}:${secret}`).toString("base64");

  // 5️⃣ Wywołanie P24 /register
  const response = await fetch("https://secure.przelewy24.pl/api/v1/transaction/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${basicAuth}`,
    },
    body: JSON.stringify(payload),
  });

  const result = await response.json();

  // 6️⃣ Jeśli token jest zwrócony, przekieruj
  if (result.data?.token) {
    return NextResponse.redirect(`https://secure.przelewy24.pl/trnRequest/${result.data.token}`);
  }

  return NextResponse.json({ error: result.error || "Unknown error", result });
}
