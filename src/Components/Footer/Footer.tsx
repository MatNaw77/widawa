import Link from "next/link";
import { FaFacebook, FaEnvelope, FaPhone } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white px-6 py-4 mt-0">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-20 text-sm text-center">
                <div className="flex-1">
                    <h3 className="text-base font-semibold mb-3">📞 Kontakt</h3>
                    <p className="flex items-center gap-2 mb-1 justify-center">
                        <FaEnvelope /> ks.widawa.wroclaw@gmail.com
                    </p>
                    <p className="flex items-center gap-2 mb-1 justify-center">
                        <FaPhone /> 791 250 904
                    </p>
                    <p className="mt-2">📍 Kominiarska 26 / Wrocław</p>
                    <div className="flex gap-4 mt-4 justify-center">
                        <a
                            href="https://www.facebook.com/TomtexWidawaWroclaw"
                            aria-label="Facebook"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebook size={20} />
                        </a>
                    </div>
                </div>

                <div className="flex-1">
                    <h3 className="text-base font-semibold mb-3">🔗 Linki</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/o-nas" className="hover:underline">
                                O klubie
                            </Link>
                        </li>
                        <li>
                            <Link href="/dzieci" className="hover:underline">
                                Sekcja dziecięca
                            </Link>
                        </li>
                        <li>
                            <Link href="/stowarzyszenie" className="hover:underline">
                                Stowarzyszenie
                            </Link>
                        </li>
                        <li>
                            <Link href="/kontakt" className="hover:underline">
                                Kontakt
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="flex-1">
                    <h3 className="text-base font-semibold mb-3">💚 Wsparcie</h3>
                    <p>Nr konta do darowizn:</p>
                    <p className="font-mono mt-1 break-words">
                        85 1090 2398 0000 0001 5254 9079
                    </p>
                    <p className="text-sm mt-1">Tytuł: Darowizna na cele statutowe</p>
                </div>

                <div className="flex-1">
                    <h3 className="text-base font-semibold mb-3">📑 Dokumenty</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/polityka-prywatnosci" className="hover:underline">
                                Polityka prywatności
                            </Link>
                        </li>
                        <li>
                            <Link href="/polityka-platnosci" className="hover:underline">
                                Polityka płatności
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mt-6 text-center text-xs text-gray-400">
                © {new Date().getFullYear()} Stowarzyszenie Futbolu Widawa Wrocław – wszystkie prawa
                zastrzeżone.
            </div>
        </footer>

    );
}