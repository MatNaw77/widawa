import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  const { amount, email } = await req.json();

  const merchantId = Number(process.env.P24_MERCHANT_ID!);
  const posId = Number(process.env.P24_POS_ID!);
  const crc = process.env.P24_CRC!;
  const sandboxUrl =
    "https://sandbox.przelewy24.pl/api/v1/transaction/register";

  const sessionId = `${Date.now()}-${Math.random()}`;

  const data = {
    merchantId,
    posId,
    sessionId,
    amount,
    currency: "PLN",
    description: "Darowizna online",
    email,
    client: "",
    address: "",
    zip: "",
    city: "",
    country: "PL",
    phone: "",
    language: "pl",
    method: 0,
    urlReturn: process.env.P24_URL_RETURN!,
    urlStatus: process.env.P24_URL_STATUS!,
    timeLimit: 15,
    channel: 1,
    waitForResult: true,
    regulationAccept: true, // zaznaczone przez checkbox
    shipping: 0,
    transferLabel: "",
    mobileLib: 1,
    sdkVersion: "1.0",
    sign: crypto
      .createHash("sha384")
      .update(
        `${sessionId}|${process.env.P24_MERCHANT_ID}|${amount}|PLN|${process.env.P24_URL_RETURN}|${process.env.P24_CRC}`
      )
      .digest("hex"),
    encoding: "UTF-8",
    methodRefId: "",
    cart: [],
    additional: {
      shipping: {},
      PSU: {},
    },
  };

  // podpis do autoryzacji
  const signString = `${data.sessionId}|${data.merchantId}|${data.amount}|${data.currency}|${data.urlReturn}|${crc}`;
  const sign = crypto.createHash("sha384").update(signString).digest("hex");

  const payload = { ...data, sign };

  try {
    const response = await fetch(sandboxUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const result = await response.json();

    if (result.error) {
      return NextResponse.json({ error: result.error });
    }

    return NextResponse.json(result);
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message });
  }
}
