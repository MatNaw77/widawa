import React from "react";

export function History() {
    return (
        <section className="mt-16 bg-gray-900 text-gray-100 px-6 py-12 rounded-2xl shadow-lg">
            <div className="max-w-5xl mx-auto space-y-10">
                <div>
                    <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
                        📖 Historia futbolu na Widawie
                    </h2>
                    <p className="mb-4">
                        Historia futbolu na naszym osiedlu sięga 1948 roku, kiedy powstał Ludowy
                        Zespół Sportowy Widawa – klub wielosekcyjny.
                    </p>
                    <p className="mb-4">Oprócz piłki nożnej działały w nim sekcje:</p>
                    <ul className="list-disc list-inside mb-4 space-y-1">
                        <li>🏃 lekkoatletyczna</li>
                        <li>🥊 bokserska</li>
                        <li>🚴 kolarska</li>
                        <li>🏋️ podnoszenia ciężarów</li>
                    </ul>
                    <p className="mb-4">
                        Przez ponad 60 lat LZS Widawa był dumą mieszkańców. Wychował wielu
                        sportowców, głównie piłkarzy, i stał się centrum życia społecznego.
                    </p>
                    <p className="mb-4">
                        ⚽ Mecze były wydarzeniem dla całego osiedla, a boisko miejscem spotkań
                        młodych i starszych.
                    </p>
                    <p>
                        Niestety, pod koniec lat 90. i na początku 2000. klub zaczął podupadać.
                        Pojawiały się konflikty działaczy, brakowało zawodników, a organizacja
                        słabła. W 2009 roku LZS zakończył działalność.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-4">🟡 Widawa Psary</h2>
                    <p className="mb-4">
                        Po rozwiązaniu LZS-u część działaczy i właścicieli przeniosła się do
                        pobliskich Psar. Tam powstał LZS Widawa Psary, który działał do 2013 roku.
                    </p>
                    <p className="mb-4">
                        Był to dowód, że pasja do piłki była silna, ale też znak, jak bardzo
                        brakowało drużyny naprawdę związanej z osiedlem Widawa.
                    </p>

                    <h2 className="text-2xl font-semibold mb-4">🔵 Era Tracza (2009–2011)</h2>
                    <p className="mb-4">
                        W 2009 roku na osiedlu pojawił się sponsor – firma Tracz z ul. Fryzjerskiej.
                        Dzięki jego wsparciu przez dwa sezony drużyna grała jako Tracz Widawa
                        Wrocław w rozgrywkach wrocławskiej C-klasy.
                    </p>
                    <p className="mb-4">
                        👕 W zespole grali byli juniorzy LZS-u, mieszkańcy osiedla, ale też
                        zawodnicy z Karłowic i centrum Wrocławia. Była więc lokalna baza,
                        uzupełniana przez „importowanych” piłkarzy.
                    </p>
                    <p>
                        Choć finansowanie pozwoliło chwilowo odbudować drużynę, brak
                        satysfakcjonujących wyników, walkowery i trudności organizacyjne sprawiły,
                        że projekt zakończył się po dwóch latach. Mimo to Era Tracza pozostaje
                        ważnym rozdziałem – dowodem, że futbol na Widawie miał zawsze swoich ludzi i
                        pasjonatów.
                    </p>
                </div>
            </div>
        </section>
    );
}
