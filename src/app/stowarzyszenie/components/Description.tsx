import { FC } from "react";
import Link from "next/link";
import { CalendarDays, Users, MapPin, Heart } from "lucide-react";

export const Description: FC = () => (
    <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Misja */}
        <div className="mt-16 grid md:grid-cols-2 gap-10 items-start">
            <div>
                <h2 className="text-2xl font-semibold mb-4">🎯 Nasza misja</h2>
                <blockquote className="p-4 bg-gray-50 border-l-4 border-green-500 rounded-md text-gray-700 italic">
                    „Piłka nożna dla wszystkich – niezależnie od wieku, umiejętności czy ambicji
                    sportowych."
                </blockquote>
                <p className="mt-4 text-gray-700">
                    Naszą największą dumą są dzieci i młodzież, w których drzemie przyszłość
                    futbolu. Wspieramy talenty, ale równie mocno stawiamy na tych, którzy po prostu
                    chcą aktywnie spędzać czas i być częścią drużyny.
                </p>
            </div>
            <div>
                <h2 className="text-2xl font-semibold mb-4">🔑 Nasze wartości</h2>
                <ul className="space-y-4 text-gray-700">
                    <li>
                        <span className="font-medium">⚽ Rozwój przez sport</span>
                        <p className="text-sm">
                            Treningi, mecze i turnieje to dla nas narzędzie do kształtowania
                            charakteru i wytrwałości.
                        </p>
                    </li>
                    <li>
                        <span className="font-medium">💚 Zdrowy styl życia</span>
                        <p className="text-sm">
                            Sport uczy dobrych nawyków i daje energię na co dzień — od najmłodszych
                            lat.
                        </p>
                    </li>
                    <li>
                        <span className="font-medium">🤝 Wspólnota</span>
                        <p className="text-sm">
                            Klub to rodzina. Każdy znajdzie w niej swoje miejsce, wsparcie i
                            przyjaciół.
                        </p>
                    </li>
                    <li>
                        <span className="font-medium">🌍 Fair Play</span>
                        <p className="text-sm">
                            Szacunek, odpowiedzialność i uczciwa gra — wartości, które przenosimy z
                            boiska do życia codziennego.
                        </p>
                    </li>
                </ul>
            </div>
        </div>

        {/* Jak działamy */}
        <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-4">📌 Jak działamy?</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Prowadzimy drużyny w różnych kategoriach wiekowych.</li>
                <li>Organizujemy treningi, turnieje i wydarzenia dla lokalnej społeczności.</li>
                <li>Wspieramy talenty, ale też otwieramy drzwi każdemu, kto chce grać.</li>
                <li>Realizujemy inicjatywy sportowe i edukacyjne w naszej dzielnicy.</li>
            </ul>
        </div>

        {/* W skrócie */}
        <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-6">📊 W skrócie</h2>
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
                <div className="flex items-center gap-3">
                    <CalendarDays className="w-5 h-5 text-green-600" />
                    <div>
                        <dt className="font-medium">2013</dt>
                        <dd className="text-sm">Rok założenia</dd>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-blue-600" />
                    <div>
                        <dt className="font-medium">Drużyny</dt>
                        <dd className="text-sm">Dziecięce i seniorskie</dd>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-red-600" />
                    <div>
                        <dt className="font-medium">Siedziba</dt>
                        <dd className="text-sm">ul. Kominiarska 26, Wrocław</dd>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-pink-600" />
                    <div>
                        <dt className="font-medium">Non-profit</dt>
                        <dd className="text-sm">Działamy z pasji, przejrzyście i społecznie</dd>
                    </div>
                </div>
            </dl>
        </div>

        <div className="mt-16 text-center">
            <h2 className="text-2xl font-semibold mb-4">🤲 Dołącz i wesprzyj</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
                Każda złotówka i każdy gest pomocy wraca do młodych piłkarzy i naszej społeczności.
                Działamy społecznie — bez etatów, z pasji.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
                <Link
                    href="#join"
                    className="px-6 py-3 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition"
                >
                    Zostań członkiem / zapisz dziecko
                </Link>
                <Link
                    href="#donate"
                    className="px-6 py-3 rounded-lg bg-yellow-400 text-black font-medium hover:bg-yellow-500 transition"
                >
                    Cegiełka wsparcia
                </Link>
            </div>
        </div>
    </div>
);
