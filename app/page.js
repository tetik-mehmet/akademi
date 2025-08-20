import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/70 via-rose-50/50 to-transparent">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            {/* TEGA Logo */}
            <div className="mb-6 flex justify-center md:justify-start">
              <Image
                src="/deneme.png"
                alt="TEGA - Türkiye Eğitim ve Gelişim Akademisi"
                width={220}
                height={220}
                className="h-44 w-auto rounded-3xl"
              />
            </div>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-orange-600/20 bg-orange-50 px-3 py-1 text-sm font-medium text-orange-700">
              0–17 Yaş İçin Akıllı Öğrenme
            </p>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Tega ile{" "}
              <span className="bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">
                Hızlı Okuma
              </span>
              , Odak ve Temel İngilizce
            </h1>
            <p className="mt-4 text-lg text-black/70 md:text-xl">
              Günlük 15 dakikalık mikro derslerle çocukların okuma hızını
              artırın, odak becerisini güçlendirin ve İngilizce temellerini
              eğlenceli içeriklerle sağlamlaştırın.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="https://www.google.com"
                className="rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:shadow-md hover:brightness-105"
              >
                Platforma Giriş
              </Link>
              <Link
                href="#kurslar"
                className="rounded-full border border-orange-200 px-5 py-3 text-base font-semibold text-orange-700 transition hover:border-orange-300 hover:text-orange-800"
              >
                Kursları İncele
              </Link>
            </div>
            <div className="mt-6 flex items-center gap-6 text-base text-black/60">
              <span>Pedagojik içerik</span>
              <span>Uzmanlarca hazırlanmış program</span>
              <span>Veliler için haftalık rapor</span>
            </div>
          </div>
          <div className="relative">
            <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-orange-200/50 blur-3xl md:-left-10 md:-top-10"></div>
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-rose-200/50 blur-3xl"></div>
            <div className="relative rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-600/10 text-xl">
                    ✨
                  </span>
                  <div>
                    <p className="text-base font-semibold">
                      Kişiselleştirilmiş Yolculuk
                    </p>
                    <p className="text-sm text-black/60">
                      Seviyeye göre otomatik uyum
                    </p>
                  </div>
                </div>
                <Image
                  src="/globe.svg"
                  width={48}
                  height={48}
                  alt="Öğrenme görseli"
                  className="opacity-70"
                />
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-xl border border-black/10 p-3">
                  <p className="text-2xl font-bold">15dk</p>
                  <p className="text-sm text-black/60">Günlük</p>
                </div>
                <div className="rounded-xl border border-black/10 p-3">
                  <p className="text-2xl font-bold">+10</p>
                  <p className="text-sm text-black/60">Modül</p>
                </div>
                <div className="rounded-xl border border-black/10 p-3">
                  <p className="text-2xl font-bold">%92</p>
                  <p className="text-sm text-black/60">Veli memnuniyeti</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Yaş Grupları */}
      <section className="bg-orange-50/50 py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center text-2xl font-bold md:text-3xl">
            Yaşa Uygun Öğrenme Yolları
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-black/70 text-lg md:text-xl">
            Her yaş aralığına uygun içerikler: oyunlaştırılmış etkinlikler, kısa
            videolar ve etkileşimli alıştırmalar.
          </p>
          <div className="mt-6 flex justify-center">
            <Image
              src="/kid1.png"
              width={480}
              height={300}
              alt="Kitap okuyan çocuk"
              className="h-56 w-auto rounded-xl object-cover shadow-sm md:h-72"
            />
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "0–5 Yaş", desc: "Duyu ve dil gelişimi", emoji: "🧸" },
              { title: "6–10 Yaş", desc: "Okuma temelleri", emoji: "📚" },
              { title: "11–14 Yaş", desc: "Hız & Anlama", emoji: "⚡" },
              { title: "15–17 Yaş", desc: "Sınav ve odak", emoji: "🎯" },
            ].map((a, i) => (
              <div
                key={i}
                className="rounded-2xl border border-black/10 bg-white p-5 transition hover:shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-orange-600/10 text-lg">
                    {a.emoji}
                  </span>
                  <p className="text-base font-semibold md:text-lg">
                    {a.title}
                  </p>
                </div>
                <p className="mt-2 text-base text-black/70">{a.desc}</p>
                <Link
                  href="/kayit"
                  className="mt-4 inline-block text-base font-semibold text-orange-700 hover:text-orange-800"
                >
                  Planı Gör
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kurslar */}
      <section id="kurslar" className="py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Kurslarımız</h2>
              <p className="mt-2 max-w-2xl text-black/70 text-lg md:text-xl">
                Tega üç temel beceriye odaklanır. Her biri kısa, ölçülebilir ve
                eğlenceli oturumlar içerir.
              </p>
            </div>
            <Link
              href="/kayit"
              className="hidden rounded-full border border-black/10 px-4 py-2 text-base font-semibold hover:border-black/30 md:inline-block"
            >
              Ücretsiz Deneme
            </Link>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {/* Hızlı Okuma */}
            <div className="rounded-2xl border border-black/10 p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-600/10 text-xl">
                  ⚡
                </span>
                <p className="text-lg font-semibold">Hızlı Okuma</p>
              </div>
              <p className="mt-2 text-base text-black/70">
                Göz kası egzersizleri, satır takibi, hız ve anlama denge
                çalışmaları.
              </p>
              <ul className="mt-4 space-y-2 text-base text-black/80">
                <li>• Metronomlu ritim çalışmaları</li>
                <li>• Anlama soruları ile pekiştirme</li>
                <li>• Haftalık gelişim raporu</li>
              </ul>
              <img
                src="/reading.gif"
                alt="Hızlı okuma çalışma örneği"
                className="mt-4 mx-auto w-full max-w-[260px] md:max-w-[320px] rounded-3xl border border-black/10 shadow-sm"
                loading="lazy"
              />
              <Link
                href="/kayit"
                className="mt-5 inline-block text-base font-semibold text-rose-700 hover:text-rose-800"
              >
                Programa Katıl
              </Link>
            </div>

            {/* Odak */}
            <div className="rounded-2xl border border-black/10 p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-600/10 text-xl">
                  🎯
                </span>
                <p className="text-lg font-semibold">Odak</p>
              </div>
              <p className="mt-2 text-base text-black/70">
                Dikkat süresini artıran oyunlaştırılmış egzersizler ve nefes
                teknikleri.
              </p>
              <ul className="mt-4 space-y-2 text-base text-black/80">
                <li>• Zamanlı görevler</li>
                <li>• Sesli/ görsel dikkat çalışmaları</li>
                <li>• Günlük mini rutinler</li>
              </ul>
              <img
                src="/target.gif"
                alt="Odak çalışma örneği"
                className="mt-4 mx-auto w-full max-w-[260px] md:max-w-[320px] rounded-3xl border border-black/10 shadow-sm"
                loading="lazy"
              />
              <Link
                href="/kayit"
                className="mt-5 inline-block text-base font-semibold text-orange-700 hover:text-orange-800"
              >
                Programa Katıl
              </Link>
            </div>

            {/* Temel İngilizce */}
            <div className="rounded-2xl border border-black/10 p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-600/10 text-xl">
                  🔤
                </span>
                <p className="text-lg font-semibold">Temel İngilizce</p>
              </div>
              <p className="mt-2 text-base text-black/70">
                Kelime, telaffuz ve basit dilbilgisi; kısa videolar ve
                alıştırmalarla.
              </p>
              <ul className="mt-4 space-y-2 text-base text-black/80">
                <li>• Görsel destekli kelime çalışmaları</li>
                <li>• Sesli telaffuz alıştırmaları</li>
                <li>• Günlük tekrar planı</li>
              </ul>
              <img
                src="/english.gif"
                alt="Temel İngilizce çalışma örneği"
                className="mt-4 mx-auto w-full max-w-[260px] md:max-w-[320px] rounded-3xl border border-black/10 shadow-sm"
                loading="lazy"
              />
              <Link
                href="/ing-ornek"
                className="mt-5 inline-block text-base font-semibold text-amber-700 hover:text-amber-800"
              >
                Ünite Örneği
              </Link>
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <Image
              src="/teacher.png"
              width={360}
              height={240}
              alt="Sınıfta öğretmen"
              className="h-56 w-auto rounded-xl object-cover shadow-sm md:h-72"
            />
          </div>
        </div>
      </section>

      {/* Hakkımızda / Güven */}
      <section id="hakkimizda" className="bg-rose-50/50 py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold">Aile Dostu ve Güvenli</h3>
              <p className="mt-2 text-black/70 text-lg md:text-xl">
                İçeriklerimiz çocuk gelişimi uzmanları tarafından gözden
                geçirilir. Reklamsız, güvenli ve odaklı bir öğrenme ortamı
                sunarız.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-xl border border-black/10 bg-white p-4 text-center">
                  <p className="text-2xl font-bold">%100</p>
                  <p className="text-sm text-black/60">Reklamsız</p>
                </div>
                <div className="rounded-xl border border-black/10 bg-white p-4 text-center">
                  <p className="text-2xl font-bold">Haftalık</p>
                  <p className="text-sm text-black/60">Veli Raporu</p>
                </div>
                <div className="rounded-xl border border-black/10 bg-white p-4 text-center">
                  <p className="text-2xl font-bold">Seviye</p>
                  <p className="text-sm text-black/60">Uyarlamalı</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-6">
              <h4 className="font-semibold">Veliler ne diyor?</h4>
              <div className="mt-4 space-y-4">
                <figure className="rounded-xl border border-black/10 p-4">
                  <blockquote className="text-base text-black/80">
                    “Kızımın okuma hızı gözle görülür şekilde arttı. Günlük 15
                    dakika ile bile çok fayda sağladık.”
                  </blockquote>
                  <figcaption className="mt-2 text-sm text-black/50">
                    — Ayşe K., 9 yaş velisi
                  </figcaption>
                </figure>
                <figure className="rounded-xl border border-black/10 p-4">
                  <blockquote className="text-base text-black/80">
                    “Odak egzersizleri ödev saatlerini çok daha verimli hale
                    getirdi. Tavsiye ederim.”
                  </blockquote>
                  <figcaption className="mt-2 text-sm text-black/50">
                    — Mehmet T., 12 yaş velisi
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sabit CTA: Örnek Etkinlik */}
      <div className="fixed bottom-6 right-6 z-50 animate-bounce">
        <Link
          href="/ornek"
          aria-label="Örnek Etkinliğimizi Dene"
          className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-500 to-orange-500 px-5 py-3 text-base font-semibold text-white shadow-xl ring-2 ring-rose-300/40 transition hover:brightness-110 md:text-lg"
        >
          <span>Örnek Etkinliğimizi Dene</span>
          <span className="transition-transform group-hover:translate-x-0.5">
            ➡️
          </span>
        </Link>
      </div>

      {/* Sabit WhatsApp İkonu */}
      <a
        href="https://wa.me/905443177895?text=Merhaba%20Tega%20Akademi%2C%20bilgi%20almak%20istiyorum."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile yaz"
        className="fixed bottom-6 left-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-[1.03] hover:shadow-xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-6 w-6"
          aria-hidden
        >
          <path d="M13.601 2.326A7.2 7.2 0 0 0 8.017 0C3.608 0 .063 3.546.063 7.955c0 1.401.367 2.76 1.06 3.967L0 16l4.159-1.095a7.9 7.9 0 0 0 3.858.986h.003c4.409 0 7.955-3.546 7.955-7.955a7.89 7.89 0 0 0-2.334-5.61zM8.02 14.5a6.54 6.54 0 0 1-3.356-.92l-.24-.143-2.477.651.662-2.414-.156-.248A6.53 6.53 0 0 1 1.48 7.955c0-3.608 2.935-6.543 6.544-6.543 1.748 0 3.392.682 4.623 1.914a6.52 6.52 0 0 1 1.914 4.629c0 3.608-2.935 6.545-6.544 6.545zm3.57-4.934c-.195-.098-1.153-.568-1.333-.633-.18-.065-.311-.098-.442.098-.13.195-.506.632-.62.761-.115.13-.23.146-.425.049-.195-.098-.823-.303-1.567-.966-.58-.518-.97-1.158-1.085-1.353-.115-.195-.012-.301.086-.399.089-.088.195-.23.293-.344.098-.115.13-.195.195-.325.065-.13.033-.244-.016-.342-.049-.098-.442-1.068-.606-1.468-.16-.387-.323-.335-.442-.341l-.377-.007c-.13 0-.342.049-.52.244-.18.195-.682.666-.682 1.626s.698 1.885.795 2.015c.098.13 1.374 2.101 3.333 2.949.466.201.83.321 1.114.41.468.149.894.128 1.231.078.375-.056 1.153-.471 1.316-.926.162-.455.162-.846.114-.926-.049-.081-.18-.13-.375-.228z" />
        </svg>
      </a>
    </main>
  );
}
