"use client";
import { FC, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

const links = [
    { href: "/klub", label: "O klubie" },
    { href: "/dzieci", label: "Sekcja dziecięca" },
    { href: "/stowarzyszenie", label: "Stowarzyszenie" },
    { href: "/kontakt", label: "Kontakt" },
];

export const Navbar: FC = () => {
    const pathname = usePathname();
    const isHome = pathname === "/";
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        if (!isHome) return;
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isHome]);

    const isScrolled = scrolled || !isHome;

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${isScrolled ? "bg-white shadow-md" : "bg-transparent md:bg-transparent"}`}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between h-20">
                <div className="flex items-center gap-3">
                    <button
                        className={`md:hidden transition-colors ${isScrolled ? "text-red-600" : "text-white"
                            }`}
                        onClick={() => setMenuOpen(true)}
                        aria-label="Toggle menu"
                    >
                        <Menu size={30} />
                    </button>

                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/logo.svg"
                            alt="Logo klubu"
                            width={100}
                            height={35}
                        />
                        <span
                            className={`font-bold tracking-wide transition-colors 
                            ${isScrolled ? "text-red-600" : "text-white md:text-white"} 
                            text-xl md:text-2xl`}
                        >
                            K.S. Tomtex Widawa Wrocław
                        </span>
                    </Link>
                </div>

                <nav
                    className={`hidden md:flex space-x-10 text-lg font-semibold transition-colors ${isScrolled ? "text-red-600" : "text-white"
                        }`}
                >
                    {links.map((link) => (
                        <Link key={link.href} href={link.href} className="hover:underline">
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>

            <div
                className={`fixed inset-0 z-40 transition-opacity duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            >
                <div
                    className="absolute inset-0 bg-gray-200 opacity-50"
                    onClick={() => setMenuOpen(false)}
                />

                <div
                    className={`absolute top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
            ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
                >
                    <div className="flex items-center gap-3 p-6 border-b border-gray-200">
                        <Image src="/logo.svg" alt="Logo klubu" width={60} height={30} />
                        <span className="text-lg font-bold text-red-600 leading-tight">
                            K.S. Tomtex Widawa
                            <br />
                            Wrocław
                        </span>
                    </div>

                    <nav className="flex flex-col space-y-4 text-lg font-semibold text-red-600 p-6">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
};
