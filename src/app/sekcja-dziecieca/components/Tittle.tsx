"use client";
import React, { useState } from "react";
import { User, MapPin, Phone, Mail } from "lucide-react";
import SignChild from "@/Components/SignChild/SignChildButton";
import { FacebookLink } from "@/Components/FacebookLink/FacebookLink";
import { SignUpForm } from "@/Components/SignChild/SignUpForm";

export function ChildrenSection() {
    const images = ["/michal.jpg", "/milosz.jpg", "/pawel.jpg"];
    const [open, setOpen] = useState(false);

    return (
        <section className="w-full py-16 space-y-16">
            {/* Nagłówek */}
            <div className="text-center max-w-3xl mx-auto px-6">
                <h1 className="text-4xl md:text-5xl font-extrabold text-red-700 drop-shadow-lg animate-fadeInDown mb-6">
                    🧒 Sekcja dziecięca – tu zaczyna się przyszłość
                </h1>
                <p className="text-gray-700 text-lg md:text-xl animate-fadeIn delay-100">
                    W sekcji dziecięcej KS Tomtex Widawa Wrocław wierzymy, że sport kształtuje
                    charakter. Nasza oferta to nie tylko treningi piłki nożnej — to miejsce rozwoju,
                    zabawy, współpracy i więzi lokalnej społeczności.
                </p>
            </div>

            {/* Promowane wartości */}
            <div className="max-w-5xl mx-auto px-6 animate-fadeIn delay-200">
                <h2 className="text-2xl font-semibold mb-4">Promujemy:</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>aktywność fizyczną i zdrowy styl życia</li>
                    <li>zasady fair play i szacunek</li>
                    <li>rozwój motoryczny, techniczny i mentalny dzieci</li>
                    <li>integrację i przynależność do klubu i osiedla</li>
                </ul>
            </div>

            {/* Galeria zdjęć */}
            <div className="max-w-5xl mx-auto px-6 animate-fadeIn delay-250">
                <h2 className="text-2xl font-semibold mb-6">Chwile, które kształtują przyszłość</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {images.map((src, idx) => (
                        <div
                            key={idx}
                            className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transform transition duration-300"
                        >
                            <img
                                src={src}
                                alt={`Trening ${idx + 1}`}
                                className="w-full h-56 object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Grupy treningowe */}
            <div className="max-w-5xl mx-auto px-6 animate-fadeIn delay-300">
                <h2 className="text-2xl font-semibold mb-4">Grupy treningowe</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300 divide-y divide-gray-200 text-gray-700">
                        <thead className="bg-red-50">
                            <tr>
                                <th className="px-4 py-2 text-left">Grupa</th>
                                <th className="px-4 py-2 text-left">Wiek uczestników</th>
                                <th className="px-4 py-2 text-left">Treningi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            <tr>
                                <td className="px-4 py-2">Skrzat / Żak</td>
                                <td className="px-4 py-2">5–7 lat</td>
                                <td className="px-4 py-2">2 razy w tygodniu</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Orlik</td>
                                <td className="px-4 py-2">8–10 lat</td>
                                <td className="px-4 py-2">2 razy w tygodniu</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-gray-700 mt-2 italic">
                    * Dokładny harmonogram (dni, godziny, miejsce) publikujemy na naszym profilu
                    Facebook. <FacebookLink inline={true} />
                </p>
            </div>

            {/* Zapis dziecka */}
            <div className="max-w-5xl mx-auto px-6 animate-fadeIn delay-400">
                <h2 className="text-2xl font-semibold mb-4">Zapis dziecka – co trzeba zrobić</h2>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6">
                    <li
                        onClick={() => setOpen(true)}
                        className="text-blue-600 hover:underline cursor-pointer"
                    >
                        Wypełnij formularz zgłoszeniowy.
                    </li>
                    <li>
                        Pobierz i wypełnij dokumenty zgłoszeniowe i przynieś je na pierwsze zajęcia.
                    </li>
                    <li>
                        Skontaktuj się z koordynatorem sekcji, aby potwierdzić termin treningów i
                        przypisaną grupę dziecka.
                    </li>
                    <li>
                        Przyjdź na trening – dziecko powinno mieć strój sportowy, buty piłkarskie i
                        ochraniacze (zalecane).
                    </li>
                </ol>
            </div>

            {/* Kontakt */}
            <div className="max-w-5xl mx-auto px-6 animate-fadeIn delay-500">
                <h2 className="text-2xl font-semibold mb-4">Kontakt dla zainteresowanych</h2>
                <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                        <User className="w-5 h-5" /> Michał Pondel – Koordynator drużyn dziecięcych
                    </li>
                    <li className="flex items-center gap-2">
                        <Phone className="w-5 h-5" /> +48 784 909 948
                    </li>
                    <li className="flex items-center gap-2">
                        <Mail className="w-5 h-5" /> ks.widawa.wroclaw@gmail.com
                    </li>
                    <li className="flex items-center gap-2">
                        <MapPin className="w-5 h-5" /> Boisko KS Widawa, ul. Kominiarska 26, Wrocław
                    </li>
                </ul>
            </div>

            {/* Pliki do pobrania */}
            <div className="max-w-5xl mx-auto px-6 animate-fadeIn delay-600">
                <h2 className="text-2xl font-semibold mb-4">📂 Pliki do pobrania dla rodziców</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Regulamin udziału w treningach</li>
                    <li>Oświadczenie rodziców / opiekunów (zgoda na udział)</li>
                    <li>Oświadczenie zdrowotne</li>
                    <li>Zgoda na ubezpieczenie NNW</li>
                    <li>Polityka prywatności / zgoda na przetwarzanie danych</li>
                </ul>
            </div>
            {open && <SignUpForm onClose={() => setOpen(false)} />}
        </section>
    );
}
