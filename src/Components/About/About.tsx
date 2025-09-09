"use client";
import Image from "next/image";

export function About() {
    return (
        <section className="max-w-6xl w-full px-4 py-16 grid md:grid-cols-2 gap-30 items-center">
            <div>
                <h2 className="text-2xl font-bold mb-6">O nas</h2>
                <ul className="space-y-4 text-lg">
                    <li>⚽ 2 drużyny seniorskie</li>
                    <li>👦 25 dzieci w sekcji</li>
                    <li>💯 100% zaangażowania społecznego</li>
                    <li>🤝 Działamy jako stowarzyszenie, bez etatów, z pasji</li>
                </ul>
            </div>
            <Image
                src="/widawa_dorosli.jpg" // podmień na swoje zdjęcie
                alt="Piłkarz w akcji"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg object-cover"
            />
      </section>
    );
}
