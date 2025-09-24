import { NextResponse } from "next/server";
import crypto from "crypto";

function generateP24Sign(params: {
  sessionId: string;
  merchantId: number;
  amount: number;
  currency: string;
  crc: string;
}): string {
  const jsonString = JSON.stringify(params); // JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES
  return crypto.createHash("sha384").update(jsonString).digest("hex");
}

export async function POST(req: Request) {
  try {
    const { amount, email } = await req.json();
    if (!amount || !email) {
      return NextResponse.json({ error: "Amount and email are required" });
    }

    const merchantId = Number(process.env.P24_MERCHANT_ID!);
    const posId = Number(process.env.P24_POS_ID!);
    const crc = process.env.P24_CRC!;
    const secret = process.env.P24_SECRET!;
    const sandboxUrl =
      "https://sandbox.przelewy24.pl/api/v1/transaction/register";

    const sessionId = `${Date.now()}-${Math.floor(Math.random() * 1000000)}`;
    const amountInGroszach = amount * 100;

    const controlParams = {
      sessionId,
      merchantId,
      amount: amountInGroszach,
      currency: "PLN",
      crc,
    };
    const sign = generateP24Sign(controlParams);

    const payload = {
      merchantId,
      posId,
      sessionId,
      amount: amountInGroszach,
      currency: "PLN",
      description: "Darowizna online",
      email,
      country: "PL",
      language: "pl",
      urlReturn: process.env.P24_URL_RETURN!,
      timeLimit: 15,
      sign,
    };

    const basicAuth = Buffer.from(`${process.env.P24_MERCHANT_ID}:${secret}`).toString("base64");
    const response = await fetch(sandboxUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${basicAuth}`,
      },
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
