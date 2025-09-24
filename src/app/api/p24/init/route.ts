import { NextResponse } from "next/server";
import crypto from "crypto";
import { preparePayload, createSign } from "./functions";

export async function POST(req: Request) {
  try {
    const { amount, email } = await req.json();
    const description = "Darowizna na cele statutowe";
    const merchantId = Number(process.env.P24_MERCHANT_ID!);
    const crc = process.env.P24_CRC!;
    const secret = process.env.P24_SECRET!;

    const preSessionId = new Date().toISOString();
    const sessionId = crypto
      .createHash("md5")
      .update(preSessionId)
      .digest("hex");

    const sign = createSign(sessionId, merchantId, amount, crc);
    const payload = preparePayload(amount, email, description, sign, sessionId);

    const basicAuth = Buffer.from(
      `${merchantId.toString()}:${secret}`
    ).toString("base64");

    const response = await fetch(
      "https://secure.przelewy24.pl/api/v1/transaction/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${basicAuth}`,
        },
        body: JSON.stringify(payload),
      }
    );

    const result = await response.json();

    if (result.data?.token) {
      return NextResponse.json({
        token: result.data.token,
        sessionId,
      });
    }

    return NextResponse.json({ error: result.error || "Unknown error" });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message });
  }
}
