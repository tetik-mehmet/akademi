"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur shadow-sm relative overflow-hidden">
      {/* Blurred background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-16 -top-20 h-40 w-40 rounded-full bg-orange-200/60 blur-3xl" />
        <div className="absolute -right-10 -bottom-16 h-44 w-44 rounded-full bg-rose-200/60 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/deneme.png"
              alt="TEGA - Türkiye Eğitim ve Gelişim Akademisi"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <div className="hidden sm:block">
              <span className="text-lg font-bold tracking-tight">
                <span className="bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">
                  TEGA
                </span>
              </span>
              <p className="text-xs text-black/60 font-medium">
                TÜRKİYE EĞİTİM VE GELİŞİM AKADEMİSİ
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 md:flex">
            <Link
              href="/sayfalar/kurslar"
              className="text-base font-medium text-black/70 hover:text-orange-700"
            >
              Kurslar
            </Link>
            <Link
              href="/sayfalar/hakkimizda"
              className="text-base font-medium text-black/70 hover:text-orange-700"
            >
              Hakkımızda
            </Link>
            <Link
              href="/sayfalar/programlar"
              className="text-base font-medium text-black/70 hover:text-orange-700"
            >
              Eğitim Programlarımız
            </Link>
            <Link
              href="/sayfalar/ekstra-paketler"
              className="text-base font-medium text-black/70 hover:text-orange-700"
            >
              Paketlerimiz
            </Link>
            <Link
              href="/sayfalar/iletisim"
              className="text-base font-medium text-black/70 hover:text-orange-700"
            >
              İletişim
            </Link>
            <Link
              href="/platform"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-orange-600 to-rose-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:from-orange-700 hover:to-rose-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
            >
              <span className="inline-flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                  aria-hidden
                >
                  <path d="M11.25 3a.75.75 0 0 1 .75-.75h5.25A2.25 2.25 0 0 1 19.5 4.5v15A2.25 2.25 0 0 1 17.25 21H12a.75.75 0 0 1 0-1.5h5.25a.75.75 0 0 0 .75-.75v-15a.75.75 0 0 0-.75-.75H12a.75.75 0 0 1-.75-.75Z" />
                  <path d="M12.53 15.28a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 1 1 1.06 1.06L10.31 11H18a.75.75 0 0 1 0 1.5h-7.69l2.22 2.22a.75.75 0 0 1 0 1.06Z" />
                </svg>
                <span>Platforma Giriş</span>
              </span>
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            aria-label="Menüyü Aç/Kapat"
            className="inline-flex items-center justify-center rounded-md border border-black/10 p-2 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
            onClick={() => setIsOpen((v) => !v)}
            aria-expanded={isOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="h-5 w-5"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          isOpen
            ? "border-t border-black/10 max-h-[480px] opacity-100 pointer-events-auto"
            : "border-t border-transparent max-h-0 opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        <div
          className={`mx-auto max-w-7xl px-4 transition-[padding] duration-300 ease-out ${
            isOpen ? "py-3" : "py-0"
          }`}
        >
          <nav className="flex flex-col gap-2">
            <Link
              href="/sayfalar/kurslar"
              className="rounded-md px-2 py-2 text-base font-medium hover:bg-orange-50"
            >
              Kurslar
            </Link>
            <Link
              href="/sayfalar/hakkimizda"
              className="rounded-md px-2 py-2 text-base font-medium hover:bg-orange-50"
            >
              Hakkımızda
            </Link>
            <Link
              href="/sayfalar/programlar"
              className="rounded-md px-2 py-2 text-base font-medium hover:bg-orange-50"
            >
              Eğitim Programlarımız
            </Link>
            <Link
              href="/sayfalar/ekstra-paketler"
              className="rounded-md px-2 py-2 text-base font-medium hover:bg-orange-50"
            >
              Paketlerimiz
            </Link>
            <Link
              href="/sayfalar/iletisim"
              className="rounded-md px-2 py-2 text-base font-medium hover:bg-orange-50"
            >
              İletişim
            </Link>
            <Link
              href="/platform"
              className="mt-2 rounded-md bg-gradient-to-r from-orange-600 to-rose-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:from-orange-700 hover:to-rose-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
            >
              <span className="inline-flex items-center justify-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                  aria-hidden
                >
                  <path d="M11.25 3a.75.75 0 0 1 .75-.75h5.25A2.25 2.25 0 0 1 19.5 4.5v15A2.25 2.25 0 0 1 17.25 21H12a.75.75 0 0 1 0-1.5h5.25a.75.75 0 0 0 .75-.75v-15a.75.75 0 0 0-.75-.75H12a.75.75 0 0 1-.75-.75Z" />
                  <path d="M12.53 15.28a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 1 1 1.06 1.06L10.31 11H18a.75.75 0 0 1 0 1.5h-7.69l2.22 2.22a.75.75 0 0 1 0 1.06Z" />
                </svg>
                <span>Platforma Giriş</span>
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
