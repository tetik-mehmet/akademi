"use client";

import Link from "next/link";
import Image from "next/image";
import { memo } from "react";

// SVG bileşenleri ayrı olarak tanımlandı
const InstagramIcon = memo(function InstagramIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
});

const YouTubeIcon = memo(function YouTubeIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
});

const FacebookIcon = memo(function FacebookIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
});

const WhatsAppIcon = memo(function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className="h-3.5 w-3.5"
      aria-hidden
    >
      <path d="M13.601 2.326A7.2 7.2 0 0 0 8.017 0C3.608 0 .063 3.546.063 7.955c0 1.401.367 2.76 1.06 3.967L0 16l4.159-1.095a7.9 7.9 0 0 0 3.858.986h.003c4.409 0 7.955-3.546 7.955-7.955a7.89 7.89 0 0 0-2.334-5.61zM8.02 14.5a6.54 6.54 0 0 1-3.356-.92l-.24-.143-2.477.651.662-2.414-.156-.248A6.53 6.53 0 0 1 1.48 7.955c0-3.608 2.935-6.543 6.544-6.543 1.748 0 3.392.682 4.623 1.914a6.52 6.52 0 0 1 1.914 4.629c0 3.608-2.935 6.545-6.544 6.545zm3.57-4.934c-.195-.098-1.153-.568-1.333-.633-.18-.065-.311-.098-.442.098-.13.195-.506.632-.62.761-.115.13-.23.146-.425.049-.195-.098-.823-.303-1.567-.966-.58-.518-.97-1.158-1.085-1.353-.115-.195-.012-.301.086-.399.089-.088.195-.23.293-.344.098-.115.13-.195.195-.325.065-.13.033-.244-.016-.342-.049-.098-.442-1.068-.606-1.468-.16-.387-.323-.335-.442-.341l-.377-.007c-.13 0-.342.049-.52.244-.18.195-.682.666-.682 1.626s.698 1.885.795 2.015c.098.13 1.374 2.101 3.333 2.949.466.201.83.321 1.114.41.468.149.894.128 1.231.078.375-.056 1.153-.471 1.316-.926.162-.455.162-.846.114-.926-.049-.081-.18-.13-.375-.228z" />
    </svg>
  );
});

// Sosyal medya linkleri memo ile optimize edildi
const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com/tegaakademi",
    icon: <InstagramIcon />,
    color: "hover:text-pink-600",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@tegaakademi",
    icon: <YouTubeIcon />,
    color: "hover:text-red-600",
  },
  {
    name: "Facebook",
    href: "https://facebook.com/tegaakademi",
    icon: <FacebookIcon />,
    color: "hover:text-blue-600",
  },
];

// Navigasyon linkleri memo ile optimize edildi
const navigationLinks = [
  { href: "/sayfalar/kurslar", label: "Kurslar", icon: "📚" },
  { href: "/sayfalar/hakkimizda", label: "Hakkımızda", icon: "🏫" },
  { href: "/sayfalar/programlar", label: "Eğitim Programlarımız", icon: "🎯" },
  { href: "/ing-ornek", label: "Ünite Örneği", icon: "🔍" },
];

// Footer bileşeni memo ile optimize edildi
const Footer = memo(function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-16 border-t border-black/10 bg-gradient-to-b from-white/90 to-white/70 backdrop-blur-xl overflow-hidden">
      {/* Arka plan renk aksanları - geliştirilmiş */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-16 -top-10 h-40 w-40 rounded-full bg-orange-200/50 blur-3xl animate-pulse" />
        <div className="absolute -right-10 -bottom-16 h-44 w-44 rounded-full bg-rose-200/50 blur-3xl animate-pulse" />
        <div className="absolute left-1/2 top-1/2 h-32 w-32 rounded-full bg-blue-200/30 blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Marka / Kısa açıklama - genişletilmiş */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 transition-transform hover:scale-105"
            >
              <div className="relative">
                <Image
                  src="/deneme.png"
                  alt="TEGA - Türkiye Eğitim ve Gelişim Akademisi"
                  width={48}
                  height={48}
                  className="h-12 w-auto transition-all duration-300 group-hover:rotate-3"
                  priority
                />
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-400/20 to-rose-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight">
                  <span className="bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">
                    TEGA
                  </span>
                </span>
                <p className="text-xs text-black/60 font-medium">
                  TÜRKİYE EĞİTİM VE GELİŞİM AKADEMİSİ
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-black/70">
              7–17 yaş için güvenli, eğlenceli ve ölçülebilir öğrenme deneyimi.
              Günlük 15 dakikalık içeriklerle okuma, odak ve İngilizce
              temelleri.
            </p>

            {/* Özellik rozetleri - geliştirilmiş */}
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white/80 px-4 py-2.5 text-sm shadow-sm backdrop-blur-sm transition-all hover:scale-105 hover:shadow-md">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-orange-600/10 text-orange-600">
                  ✨
                </span>
                <span className="text-black/70 font-medium">
                  Pedagojik İçerik
                </span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white/80 px-4 py-2.5 text-sm shadow-sm backdrop-blur-sm transition-all hover:scale-105 hover:shadow-md">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-600/10 text-green-600">
                  🚫
                </span>
                <span className="text-black/70 font-medium">
                  Reklamsız Platform
                </span>
              </div>
            </div>

            {/* Sosyal medya linkleri */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-black/80 mb-3">
                Bizi Takip Edin
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/80 text-black/60 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-md ${social.color}`}
                    aria-label={`${social.name} sayfasını ziyaret et`}
                  >
                    <div className="transition-transform duration-300 group-hover:scale-110">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Keşfet - geliştirilmiş */}
          <div>
            <h3 className="text-sm font-semibold text-black/80 mb-4">Keşfet</h3>
            <nav className="space-y-3">
              {navigationLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-2 text-sm text-black/70 transition-all duration-300 hover:text-orange-700 hover:translate-x-1"
                >
                  <span className="text-base opacity-0 transition-all duration-300 group-hover:opacity-100">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* İletişim ve Newsletter - yeni */}
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-black/80 mb-4">
                İletişim
              </h3>
              <div className="space-y-3">
                <a
                  href="https://wa.me/905443177895?text=Merhaba%20Tega%20Akademi%2C%20bilgi%20almak%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm text-black/70 transition-all duration-300 hover:text-green-700 hover:scale-105"
                  aria-label="WhatsApp ile yaz"
                >
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm ring-1 ring-black/10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                    <WhatsAppIcon />
                  </span>
                  WhatsApp ile yazın
                </a>
                <Link
                  href="/sayfalar/iletisim"
                  className="group inline-flex items-center gap-2 text-sm text-black/70 transition-all duration-300 hover:text-orange-700 hover:scale-105"
                >
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-orange-600/10 text-orange-600">
                    📞
                  </span>
                  İletişim Sayfası
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alt kısım - geliştirilmiş */}
      <div className="border-t border-black/10 bg-white/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
              <p className="text-sm text-black/60">
                © {year} TEGA. Tüm hakları saklıdır.
              </p>
              <div className="flex gap-4 text-xs text-black/50">
                <Link
                  href="/gizlilik"
                  className="hover:text-orange-700 transition-colors"
                >
                  Gizlilik Politikası
                </Link>
                <Link
                  href="/kullanim-kosullari"
                  className="hover:text-orange-700 transition-colors"
                >
                  Kullanım Koşulları
                </Link>
              </div>
            </div>
            <p className="text-sm text-black/60 font-medium">
              Çocukların güvenli dijital öğrenme alanı. 🚀
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
