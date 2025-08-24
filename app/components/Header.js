"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ease-out relative overflow-hidden ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-black/5"
          : "bg-white/80 backdrop-blur-md shadow-sm border-b border-black/10"
      }`}
    >
      {/* Enhanced background effects */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className={`absolute -left-16 -top-20 h-40 w-40 rounded-full bg-orange-200/60 blur-3xl transition-all duration-700 ${
            isScrolled ? "scale-110 opacity-80" : "scale-100 opacity-100"
          }`}
        />
        <div
          className={`absolute -right-10 -bottom-16 h-44 w-44 rounded-full bg-rose-200/60 blur-3xl transition-all duration-700 ${
            isScrolled ? "scale-110 opacity-80" : "scale-100 opacity-100"
          }`}
        />
        {/* Additional subtle effects */}
        <div className="absolute top-1/2 left-1/4 h-32 w-32 rounded-full bg-blue-100/30 blur-2xl animate-pulse" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "h-20" : "h-24"
          }`}
        >
          {/* Enhanced Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative">
              <Image
                src="/deneme.png"
                alt="TEGA - Türkiye Eğitim ve Gelişim Akademisi"
                width={48}
                height={48}
                className={`transition-all duration-300 group-hover:scale-110 ${
                  isScrolled ? "h-12 w-12" : "h-14 w-14"
                }`}
              />
              {/* Logo glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400/20 to-rose-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="hidden sm:block">
              <span
                className={`font-bold tracking-tight transition-all duration-300 ${
                  isScrolled ? "text-xl" : "text-2xl"
                }`}
              >
                <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-rose-600 bg-clip-text text-transparent">
                  TEGA
                </span>
              </span>
              <p
                className={`text-black/60 font-medium transition-all duration-300 ${
                  isScrolled ? "text-xs" : "text-sm"
                }`}
              >
                TÜRKİYE EĞİTİM VE GELİŞİM AKADEMİSİ
              </p>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden items-center gap-1 xl:flex">
            {[
              { href: "/sayfalar/kurslar", label: "Kurslar" },
              { href: "/sayfalar/hakkimizda", label: "Hakkımızda" },
              { href: "/sayfalar/programlar", label: "Eğitim Programlarımız" },
              { href: "/sayfalar/ekstra-paketler", label: "Paketlerimiz" },
              { href: "/sayfalar/iletisim", label: "İletişim" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-black/70 hover:text-orange-700 transition-all duration-200 group"
              >
                {item.label}
                {/* Hover underline effect */}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-rose-500 transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </Link>
            ))}

            {/* Enhanced CTA Button */}
            <Link
              href="/platform"
              className="ml-4 inline-flex items-center rounded-full bg-gradient-to-r from-orange-600 via-orange-500 to-rose-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 transition-all duration-300 group"
            >
              <span className="inline-flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-200"
                  aria-hidden
                >
                  <path d="M11.25 3a.75.75 0 0 1 .75-.75h5.25A2.25 2.25 0 0 1 19.5 4.5v15A2.25 2.25 0 0 1 17.25 21H12a.75.75 0 0 1 0-1.5h5.25a.75.75 0 0 0 .75-.75v-15a.75.75 0 0 0-.75-.75H12a.75.75 0 0 1-.75-.75Z" />
                  <path d="M12.53 15.28a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 1 1 1.06 1.06L10.31 11H18a.75.75 0 0 1 0 1.5h-7.69l2.22 2.22a.75.75 0 0 1 0 1.06Z" />
                </svg>
                <span>Platforma Giriş</span>
              </span>
            </Link>
          </nav>

          {/* Enhanced Mobile toggle */}
          <button
            aria-label="Menüyü Aç/Kapat"
            className="inline-flex items-center justify-center rounded-xl border border-black/10 p-2.5 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 hover:bg-orange-50 transition-all duration-200"
            onClick={() => setIsOpen((v) => !v)}
            aria-expanded={isOpen}
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute inset-0 transform transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-0" : "-translate-y-1"
                }`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16"
                  />
                </svg>
              </span>
              <span
                className={`absolute inset-0 transform transition-all duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 12h16"
                  />
                </svg>
              </span>
              <span
                className={`absolute inset-0 transform transition-all duration-300 ${
                  isOpen ? "-rotate-45 translate-y-0" : "translate-y-1"
                }`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 18h16"
                  />
                </svg>
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Enhanced Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          isOpen
            ? "border-t border-black/10 max-h-[500px] opacity-100 pointer-events-auto"
            : "border-t border-transparent max-h-0 opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        <div
          className={`mx-auto max-w-7xl px-4 transition-[padding] duration-500 ease-out ${
            isOpen ? "py-6" : "py-0"
          }`}
        >
          {/* Mobile Navigation */}
          <nav className="flex flex-col gap-1">
            {[
              { href: "/sayfalar/kurslar", label: "Kurslar", icon: "📚" },
              { href: "/sayfalar/hakkimizda", label: "Hakkımızda", icon: "🏢" },
              {
                href: "/sayfalar/programlar",
                label: "Eğitim Programlarımız",
                icon: "🎯",
              },
              {
                href: "/sayfalar/ekstra-paketler",
                label: "Paketlerimiz",
                icon: "📦",
              },
              { href: "/sayfalar/iletisim", label: "İletişim", icon: "📞" },
            ].map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium text-black/70 hover:bg-orange-50 hover:text-orange-700 transition-all duration-200 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-lg opacity-60 group-hover:opacity-100 transition-opacity duration-200">
                  {item.icon}
                </span>
                {item.label}
              </Link>
            ))}

            {/* Mobile CTA Button */}
            <Link
              href="/platform"
              className="mt-4 rounded-xl bg-gradient-to-r from-orange-600 via-orange-500 to-rose-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-lg hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 transition-all duration-200"
            >
              <span className="inline-flex items-center justify-center gap-2">
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
