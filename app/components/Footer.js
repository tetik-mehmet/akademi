import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-black/10 bg-white/80 backdrop-blur relative overflow-hidden">
      {/* Arka plan renk aksanları */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-16 -top-10 h-40 w-40 rounded-full bg-orange-200/50 blur-3xl" />
        <div className="absolute -right-10 -bottom-16 h-44 w-44 rounded-full bg-rose-200/50 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Marka / Kısa açıklama */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/deneme.png"
                alt="TEGA - Türkiye Eğitim ve Gelişim Akademisi"
                width={44}
                height={44}
                className="h-11 w-auto"
              />
              <div>
                <span className="text-lg font-extrabold tracking-tight">
                  <span className="bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">
                    TEGA
                  </span>
                </span>
                <p className="text-xs text-black/60 font-medium">
                  TÜRKİYE EĞİTİM VE GELİŞİM AKADEMİSİ
                </p>
              </div>
            </Link>
            <p className="mt-4 max-w-xl text-sm text-black/70">
              0–17 yaş için güvenli, eğlenceli ve ölçülebilir öğrenme deneyimi.
              Günlük 15 dakikalık içeriklerle okuma, odak ve İngilizce
              temelleri.
            </p>
            <div className="mt-5 inline-flex items-center gap-3 rounded-xl border border-black/10 bg-white px-4 py-2 text-sm shadow-sm">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-orange-600/10">
                ✨
              </span>
              <span className="text-black/70">
                Pedagojik içerik • Reklamsız platform
              </span>
            </div>
          </div>

          {/* Keşfet */}
          <div>
            <h3 className="text-sm font-semibold text-black/80">Keşfet</h3>
            <nav className="mt-3 grid gap-2 text-sm">
              <Link
                href="/sayfalar/kurslar"
                className="text-black/70 hover:text-orange-700"
              >
                Kurslar
              </Link>
              <Link
                href="/sayfalar/hakkimizda"
                className="text-black/70 hover:text-orange-700"
              >
                Hakkımızda
              </Link>
              <Link
                href="/sayfalar/programlar"
                className="text-black/70 hover:text-orange-700"
              >
                Eğitim Programlarımız
              </Link>
              <Link
                href="/ing-ornek"
                className="text-black/70 hover:text-orange-700"
              >
                Ünite Örneği
              </Link>
            </nav>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-sm font-semibold text-black/80">İletişim</h3>
            <div className="mt-3 space-y-2 text-sm text-black/70">
              <a
                href="https://wa.me/903129999807?text=Merhaba%20Tega%20Akademi%2C%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 hover:text-green-700"
                aria-label="WhatsApp ile yaz"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm ring-1 ring-black/10 transition group-hover:brightness-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-3.5 w-3.5"
                    aria-hidden
                  >
                    <path d="M13.601 2.326A7.2 7.2 0 0 0 8.017 0C3.608 0 .063 3.546.063 7.955c0 1.401.367 2.76 1.06 3.967L0 16l4.159-1.095a7.9 7.9 0 0 0 3.858.986h.003c4.409 0 7.955-3.546 7.955-7.955a7.89 7.89 0 0 0-2.334-5.61zM8.02 14.5a6.54 6.54 0 0 1-3.356-.92l-.24-.143-2.477.651.662-2.414-.156-.248A6.53 6.53 0 0 1 1.48 7.955c0-3.608 2.935-6.543 6.544-6.543 1.748 0 3.392.682 4.623 1.914a6.52 6.52 0 0 1 1.914 4.629c0 3.608-2.935 6.545-6.544 6.545zm3.57-4.934c-.195-.098-1.153-.568-1.333-.633-.18-.065-.311-.098-.442.098-.13.195-.506.632-.62.761-.115.13-.23.146-.425.049-.195-.098-.823-.303-1.567-.966-.58-.518-.97-1.158-1.085-1.353-.115-.195-.012-.301.086-.399.089-.088.195-.23.293-.344.098-.115.13-.195.195-.325.065-.13.033-.244-.016-.342-.049-.098-.442-1.068-.606-1.468-.16-.387-.323-.335-.442-.341l-.377-.007c-.13 0-.342.049-.52.244-.18.195-.682.666-.682 1.626s.698 1.885.795 2.015c.098.13 1.374 2.101 3.333 2.949.466.201.83.321 1.114.41.468.149.894.128 1.231.078.375-.056 1.153-.471 1.316-.926.162-.455.162-.846.114-.926-.049-.081-.18-.13-.375-.228z" />
                  </svg>
                </span>
                WhatsApp ile yazın
              </a>
              <Link
                href="/sayfalar/iletisim"
                className="block hover:text-orange-700"
              >
                İletişim Sayfası
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-black/10">
        <div className="mx-auto max-w-7xl px-4 py-4 text-xs text-black/60 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>© {year} TEGA. Tüm hakları saklıdır.</p>
          <p className="hidden md:block">
            Çocukların güvenli dijital öğrenme alanı.
          </p>
        </div>
      </div>
    </footer>
  );
}
