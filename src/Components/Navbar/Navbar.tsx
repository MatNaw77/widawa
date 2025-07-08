"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // ikony menu

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold text-gray-800">
            <Image
                src="/logo.svg"
                alt="Logo klubu"
                width={80}
                height={25}
                priority
            />
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <Link href="/o-nas" className="hover:text-green-600">O klubie</Link>
          <Link href="/dzieci" className="hover:text-green-600">Sekcja dziecięca</Link>
          <Link href="/stowarzyszenie" className="hover:text-green-600">Stowarzyszenie</Link>
          <Link href="/kontakt" className="hover:text-green-600">Kontakt</Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow-md">
          <nav className="flex flex-col space-y-2 text-sm font-medium">
            <Link href="/o-nas" className="hover:text-green-600" onClick={() => setMenuOpen(false)}>O klubie</Link>
            <Link href="/dzieci" className="hover:text-green-600" onClick={() => setMenuOpen(false)}>Sekcja dziecięca</Link>
            <Link href="/stowarzyszenie" className="hover:text-green-600" onClick={() => setMenuOpen(false)}>Stowarzyszenie</Link>
            <Link href="/kontakt" className="hover:text-green-600" onClick={() => setMenuOpen(false)}>Kontakt</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
