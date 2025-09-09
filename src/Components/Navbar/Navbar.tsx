"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/o-nas", label: "O klubie" },
  { href: "/dzieci", label: "Sekcja dziecięca" },
  { href: "/stowarzyszenie", label: "Stowarzyszenie" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="Logo klubu"
            width={100}
            height={35}
            priority
          />
          <span
            className={`text-2xl font-bold tracking-wide transition-colors ${
              scrolled ? "text-red-600" : "text-white"
            }`}
          >
            Tomtex Widawa Wrocław
          </span>
        </Link>

        <nav
          className={`hidden md:flex space-x-10 text-lg font-semibold transition-colors ${
            scrolled ? "text-red-600" : "text-white"
          }`}
        >
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:underline">
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className={`md:hidden transition-colors ${
            scrolled ? "text-red-600" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-6 shadow-md">
          <nav className="flex flex-col space-y-4 text-lg font-semibold text-red-600">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
