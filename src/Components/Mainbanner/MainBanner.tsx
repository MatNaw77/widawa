"use client";
import Image from "next/image";
import SupportButton from "@/Components/SupportButton/SupportButton";
import SignChild from "@/Components/SignChild/SignChild";

export function MainBanner() {
    return (
        <section className="relative w-full h-[800px] flex items-center justify-center text-center text-white bg-gray-900">
            <Image
                src="/widawa_dzieci.png" // podmień na swoje zdjęcie
                alt="Dzieci grające w piłkę"
                fill
                priority
                className="object-cover opacity-60"
            />
            <div className="relative z-10 max-w-3xl px-4 font-sans">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Tworzymy piłkę nożną z pasją - <br />
                    dla dzieci, młodzieży i dorosłych
                </h1>
                <p className="mb-8 text-lg md:text-lg font-normal">
                    Amatorski klub z sercem i ambicją. Rozwijamy piłkę lokalnie dzięki
                    własnym środkom i ogromnemu zaangażowaniu.
                </p>
                <div className="flex gap-4 justify-center">
                    <SupportButton />
                    <SignChild />
                </div>
            </div>
        </section>
    );
}
