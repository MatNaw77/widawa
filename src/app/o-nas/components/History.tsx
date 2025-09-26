import React from "react";

export function History() {
    return (
        <section className="mt-16 bg-gray-900 text-gray-100 px-6 py-12 rounded-2xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
                <div>
                    <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
                        📖 Skąd się wzięła piłka na Widawie?
                    </h2>
                    <p className="mb-4">
                        Historia futbolu na naszym osiedlu sięga 1948 roku, kiedy powstał Ludowy
                        Zespół Sportowy Widawa – klub wielosekcyjny z sekcjami: 🏃 lekkoatletyczną,
                        🥊 bokserską, 🚴 kolarską i 🏋️ podnoszenia ciężarów.
                    </p>
                    <p className="mb-4">
                        Przez ponad 60 lat LZS Widawa był dumą mieszkańców, wychował wielu
                        sportowców i stał się centrum życia społecznego. Mecze były wydarzeniem dla
                        całego osiedla.
                    </p>
                    <p>
                        Niestety, pod koniec lat 90. klub zaczął podupadać. W 2009 roku LZS
                        zakończył działalność.
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-4">🟡 Widawa Psary</h2>
                    <p className="mb-4">
                        Po rozwiązaniu LZS-u część działaczy przeniosła się do pobliskich Psar,
                        gdzie powstał LZS Widawa Psary. Klub działał do 2013 roku, pokazując, jak
                        bardzo brakowało drużyny związanej naprawdę z osiedlem Widawa.
                    </p>
                    <h2 className="text-2xl font-semibold mb-4">🔵 Era Tracza (2009–2011)</h2>
                    <p>
                        Sponsor Tracz z ul. Fryzjerskiej wsparł drużynę, która przez dwa sezony
                        grała jako Tracz Widawa Wrocław w C-klasie. Choć projekt zakończył się po
                        dwóch latach, pozostaje ważnym dowodem, że futbol na Widawie miał zawsze
                        swoich ludzi i pasjonatów.
                    </p>
                </div>
            </div>
        </section>
    );
}
