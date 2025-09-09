"use client";
import Image from "next/image";

export function MainBanner() {
    return (
        <section className="relative w-full h-[800px] flex items-center justify-center text-center text-white bg-gray-900">
            <Image
                src="/widawa_dzieci.png" // podmień na swoje zdjęcie
                alt="Dzieci grające w piłkę"
                fill
                className="object-cover opacity-60"
            />
            <div className="relative z-10 max-w-3xl px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Tworzymy piłkę nożną z pasją – <br />
                    dla dzieci, młodzieży i dorosłych
                </h1>
                <p className="mb-8 text-lg">
                    Amatorski klub z sercem i ambicją. Rozwijamy piłkę lokalnie dzięki
                    własnym środkom i ogromnemu zaangażowaniu.
                </p>
                <div className="flex gap-4 justify-center">
                    <button className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 font-semibold">
                        Wesprzyj nas
                    </button>
                    <button className="px-6 py-3 rounded-2xl bg-white text-blue-600 hover:bg-gray-100 font-semibold">
                        Zapisz dziecko
                    </button>
                </div>
            </div>
      </section>
    );
}
