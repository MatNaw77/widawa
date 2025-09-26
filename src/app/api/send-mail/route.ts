import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    try {
        const { parentName, childName, age, email, phoneNumber, notes } = await req.json();
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_EMAIL,
                pass: process.env.GMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: process.env.GMAIL_EMAIL,
            to: "ks.widawa.wroclaw@gmail.com",
            subject: `Nowe zgłoszenie do sekcji: ${childName}`,
            html: `
                <h2>Nowy formularz zgłoszeniowy</h2>
                <p><strong>Rodzic:</strong> ${parentName}</p>
                <p><strong>Dziecko:</strong> ${childName}</p>
                <p><strong>Wiek:</strong> ${age}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Telefon:</strong> ${phoneNumber}</p>
                <p><strong>Uwagi:</strong> ${notes}</p>
      `,
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Nie udało się wysłać maila" }, { status: 500 });
    }
}
