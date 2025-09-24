const crypto = require("crypto");

const merchantId = Number(process.env.P24_MERCHANT_ID!);
const crc = process.env.P24_CRC!;
const secret = process.env.P24_SECRET!;
const urlReturn = process.env.P24_URL_RETURN!;
const urlStatus = process.env.P24_URL_STATUS!;

export function preparePayload(
  amount: number,
  email: string,
  description: string,
  sign: string,
  sessionId: string
) {
  const payload = {
    merchantId,
    posId: merchantId,
    sessionId,
    amount: amount * 100,
    currency: "PLN",
    description: "Darowizna na cele statutowe",
    email,
    regulationAccept: false,
    urlReturn,
    urlStatus,
    country: "PL",
    language: "pl",
    sign,
  };

  return payload;
}

export function createSign(
  sessionId: string,
  merchantId: number,
  amount: number,
  crc: string
): string {
  const sign = crypto
    .createHash("sha384")
    .update(
      JSON.stringify({
        sessionId,
        merchantId,
        amount: amount * 100,
        currency: "PLN",
        crc,
      })
    )
    .digest("hex");

  return sign;
}
