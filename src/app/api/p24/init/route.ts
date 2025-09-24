import { NextResponse } from "next/server";
import crypto from "crypto";

function generateP24Sign(params: {
  sessionId: string;
  merchantId: number;
  amount: number;
  currency: string;
  crc: string;
}): string {
  // JSON encode bez escape unicode i slashes
  const jsonString = JSON.stringify(params); // w Node.js JSON.stringify nie escapeuje slash ani unicode

  console.log(jsonString);
  // SHA384 sum
  const sign = crypto.createHash("sha384").update(jsonString).digest("hex");
  console.log(sign);
  return sign;
}

export async function POST(req: Request) {
  const { amount, email } = await req.json();
  const amountInGroszach = amount * 100;
  const merchantId = Number(process.env.P24_MERCHANT_ID!);
  const posId = Number(process.env.P24_POS_ID!);
  const crc = process.env.P24_CRC!;
  const sandboxUrl =
    "https://sandbox.przelewy24.pl/api/v1/transaction/register";

  const sessionId = `34iu123iubfdu23h-83421urh3bb`;
  const data = {
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
  };

  const controlParams = {
    sessionId,
    merchantId,
    amount: amountInGroszach,
    currency: "PLN",
    crc,
  };
  const sign = generateP24Sign(controlParams);

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
