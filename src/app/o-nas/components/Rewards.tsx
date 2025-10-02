import { Trophy, Calendar, Users, Star } from "lucide-react";
import Image from "next/image";

export function Rewards() {
    const milestones = [
        {
            year: "2011",
            text: "start w rozgrywkach wrocławskiej C-klasy",
            icon: <Calendar className="w-5 h-5 text-red-600" />,
        },
        { year: "2013", text: "awans do B-klasy", icon: <Star className="w-5 h-5 text-red-500" /> },
        {
            year: "2015",
            text: "3. miejsce w Pucharze Sołtysa Zawoni",
            icon: <Star className="w-5 h-5 text-red-500" />,
        },
        {
            year: "2021",
            text: "powstanie drużyny rezerw w B-klasie",
            icon: <Users className="w-5 h-5 text-blue-500" />,
        },
        {
            year: "2022",
            text: "awans do A-klasy (obecnie 4. sezon z rzędu)",
            icon: <Trophy className="w-5 h-5 text-yellow-500" />,
        },
        {
            year: "2022/23",
            text: "IV runda Okręgowego Pucharu Polski (porażka z Piastem Żmigród)",
            icon: <Trophy className="w-5 h-5 text-yellow-400" />,
        },
    ];

    return (
        <section className="w-full bg-gradient-to-tr from-red-50 via-red-100 to-red-50 py-16 shadow-inner rounded-2xl animate-fadeIn mt-20">
            <div className="max-w-5xl mx-auto px-6 space-y-8">
                <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-red-700">
                    <Trophy className="w-7 h-7 text-yellow-400" /> ⚽ Tomtex Widawa Wrocław 2011 –
                    do dziś
                </h2>
                <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                        src="/o/awans.jpg" // zamień na swoją ścieżkę
                        alt="Zawodnicy cieszą się z sukcesu"
                        fill
                        className="object-cover w-full h-full"
                        priority
                    />
                </div>
                <ul className="space-y-4 mt-6">
                    {milestones.map((m) => (
                        <li
                            key={m.year}
                            className="flex items-start gap-3 text-gray-800 bg-white/30 backdrop-blur-sm rounded-lg p-4 shadow hover:scale-105 transition-transform"
                        >
                            <div className="mt-1">{m.icon}</div>
                            <div>
                                <span className="font-semibold text-red-600">{m.year}</span> –{" "}
                                {m.text}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
