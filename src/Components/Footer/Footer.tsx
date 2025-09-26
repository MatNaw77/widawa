import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";
import { FacebookLink } from "@/Components/FacebookLink/FacebookLink";
const footerLinks = {
    klub: [
        { href: "/o-nas", label: "O nas" },
        { href: "/seniorzy", label: "Seniorzy" },
        { href: "/sekcja-dziecieca", label: "Sekcja dziecięca" },
        { href: "/stowarzyszenie", label: "Stowarzyszenie" },
        { href: "/kontakt", label: "Kontakt" },
    ],
    dokumenty: [
        { href: "/polityka-prywatnosci", label: "Polityka prywatności" },
        { href: "/polityka-platnosci", label: "Regulamin wpłat" },
    ],
};

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white px-6 py-4 mt-0">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-20 text-sm text-center">
                {/* Kontakt */}
                <div className="flex-1">
                    <h3 className="text-base font-semibold mb-3">📞 Kontakt</h3>
                    <p className="flex items-center gap-2 mb-1 justify-center">
                        <FaEnvelope /> ks.widawa.wroclaw@gmail.com
                    </p>
                    <p className="mt-2">📍 Kominiarska 26 / Wrocław</p>
                    <FacebookLink />
                </div>

                {/* Linki */}
                <div className="flex-1">
                    <h3 className="text-base font-semibold mb-3">🔗 Linki</h3>
                    <ul className="space-y-2">
                        {footerLinks.klub.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href} className="hover:underline">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Wsparcie */}
                <div className="flex-1">
                    <h3 className="text-base font-semibold mb-3">💚 Wsparcie</h3>
                    <p>Nr konta do darowizn:</p>
                    <p className="font-mono mt-1 break-words">85 1090 2398 0000 0001 5254 9079</p>
                    <p className="text-sm mt-1">Tytuł: Darowizna na cele statutowe</p>
                </div>

                {/* Dokumenty */}
                <div className="flex-1">
                    <h3 className="text-base font-semibold mb-3">📑 Dokumenty</h3>
                    <ul className="space-y-2">
                        {footerLinks.dokumenty.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href} className="hover:underline">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="mt-6 text-center text-xs text-gray-400">
                © {new Date().getFullYear()} Stowarzyszenie Futbolu Widawa Wrocław – wszystkie
                prawa zastrzeżone.
            </div>
        </footer>
    );
}
