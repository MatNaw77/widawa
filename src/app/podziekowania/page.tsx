"use client";
import Link from "next/link";

export default function ThankYouPage() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-white animate-fadeIn">
            <div className="text-red-600 mb-6">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-40 h-40 drop-shadow-xl"
                >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 
                        6 4 4 6.5 4c1.74 0 3.41 1 4.22 2.44h.56C10.09 
                        5 11.76 4 13.5 4 16 4 18 6 18 8.5c0 3.78-3.4 
                        6.86-8.55 11.54L12 21.35z" />
                </svg>
            </div>

            <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Dziękujemy za Twoje wsparcie! ❤️
            </h1>

            <p className="text-lg text-gray-600 max-w-xl mb-8">
                Dzięki Twojej pomocy możemy dalej rozwijać nasz klub, szkolić dzieci i młodzież,
                organizować treningi oraz budować przyszłość lokalnego sportu.  
                Jesteś częścią naszej drużyny!
            </p>

            <Link
                href="/"
                className="mt-4 inline-block px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl shadow-md transition"
            >
                Wróć na stronę główną
            </Link>
        </section>
    );
}
