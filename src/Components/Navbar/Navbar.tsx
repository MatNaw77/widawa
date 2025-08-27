"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="Logo klubu"
            width={100}
            height={35}
            priority
          />
          <span className="text-2xl font-bold text-white tracking-wide">
            Tomtex Widawa Wrocław
          </span>
        </Link>

        <nav className="hidden md:flex space-x-10 text-lg font-semibold text-white">
          <Link href="/o-nas" className="hover:bg-black hover:text-white px-3 py-1 rounded-md transition">O klubie</Link>
          <Link href="/dzieci" className="hover:bg-black hover:text-white px-3 py-1 rounded-md transition">Sekcja dziecięca</Link>
          <Link href="/stowarzyszenie" className="hover:bg-black hover:text-white px-3 py-1 rounded-md transition">Stowarzyszenie</Link>
          <Link href="/kontakt" className="hover:bg-black hover:text-white px-3 py-1 rounded-md transition">Kontakt</Link>
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black/80 px-6 pb-6">
          <nav className="flex flex-col space-y-4 text-lg font-semibold text-white">
            <Link href="/o-nas" className="hover:text-green-400" onClick={() => setMenuOpen(false)}>O klubie</Link>
            <Link href="/dzieci" className="hover:text-green-400" onClick={() => setMenuOpen(false)}>Sekcja dziecięca</Link>
            <Link href="/stowarzyszenie" className="hover:text-green-400" onClick={() => setMenuOpen(false)}>Stowarzyszenie</Link>
            <Link href="/kontakt" className="hover:text-green-400" onClick={() => setMenuOpen(false)}>Kontakt</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
