"use client";
import { SignUpForm } from "@/Components/SignChild/SignUpForm";
import { useState } from "react";

export function Sign() {
    const [open, setOpen] = useState(false);

    return (
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
            {open && <SignUpForm onClose={() => setOpen(false)} />}
        </div>
    );
}
