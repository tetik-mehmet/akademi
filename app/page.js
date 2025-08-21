import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const address = "Bağlıca Mahallesi Hilal Caddesi 13/2 Etimesgut/ANKARA";
  const whatsappHref =
    "https://wa.me/905443177895?text=Merhaba%20Tega%20Akademi%2C%20bilgi%20almak%20istiyorum.";
  const mapsEmbedSrc =
    "https://www.google.com/maps?q=Ba%C4%9Fl%C4%B1ca%20Mahallesi%20Hilal%20Caddesi%2013%2F2%20Etimesgut%2FANKARA&hl=tr&z=16&output=embed";
  const reviews = [
    {
      text: "Kızımın okuma hızı gözle görülür şekilde arttı. Günlük 15 dakika ile bile çok fayda sağladık.",
      author: "— Ayşe K., 9 yaş velisi",
    },
    {
      text: "Odak egzersizleri ödev saatlerini çok daha verimli hale getirdi. Tavsiye ederim.",
      author: "— Mehmet T., 12 yaş velisi",
    },
    {
      text: "Platform çok anlaşılır ve eğlenceli, çocuğum her gün kendi kendine açıyor.",
      author: "— Selin A., 10 yaş velisi",
    },
    {
      text: "Haftalık raporlar sayesinde gelişimi net görüyoruz. Motivasyonu da arttı.",
      author: "— Murat Y., 13 yaş velisi",
    },
    {
      text: "MOXO testi ve takip görüşmeleri çok faydalı oldu. Odaklanması belirgin şekilde iyileşti.",
      author: "— Derya B., 11 yaş velisi",
    },
    {
      text: "İngilizce kelime tekrarları telaffuzunu belirgin şekilde geliştirdi.",
      author: "— Gökhan S., 14 yaş velisi",
    },
    {
      text: "Bireysel ders + platform kombinasyonu çocuğumuza çok iyi geldi.",
      author: "— Elif D., 8 yaş velisi",
    },
    {
      text: "Öğretmenlerden düzenli geri bildirim almak bizi çok rahatlattı.",
      author: "— Cenk Ö., 15 yaş velisi",
    },
  ];
  const selectedReviews = reviews
    .slice()
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/70 via-rose-50/50 to-transparent">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
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
              7–17 Yaş İçin Akıllı Öğrenme
            </p>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Tega ile{" "}
              <span className="bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">
                Hızlı Okuma
              </span>
              , Odak ve Temel İngilizce
            </h1>
            <p className="mt-4 text-lg text-black/70 md:text-xl">
              Günlük 1 saatlik mikro derslerle çocukların okuma hızını artırın,
              odak becerisini güçlendirin ve İngilizce temellerini eğlenceli
              içeriklerle sağlamlaştırın.
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
          <div className="relative -mt-4 md:-mt-6">
            <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-orange-200/50 blur-3xl md:-left-10 md:-top-10"></div>
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-rose-200/50 blur-3xl"></div>
            <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <Image
                src="/stairs.png"
                alt="Arka plan - merdivenler"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                aria-hidden
              />
              <div className="absolute inset-0 bg-black/20" aria-hidden></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white text-xl">
                      ✨
                    </span>
                    <div>
                      <p className="text-base font-semibold text-white">
                        Kişiselleştirilmiş Yolculuk
                      </p>
                      <p className="text-sm text-white/80">
                        Seviyeye göre otomatik uyum
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                  <div className="rounded-xl border border-white/30 p-3">
                    <p className="text-2xl font-bold text-white">1 saat</p>
                    <p className="text-sm text-white/80">Günlük</p>
                  </div>
                  <div className="rounded-xl border border-white/30 p-3">
                    <p className="text-2xl font-bold text-white">+10</p>
                    <p className="text-sm text-white/80">Modül</p>
                  </div>
                  <div className="rounded-xl border border-white/30 p-3">
                    <p className="text-2xl font-bold text-white">%92</p>
                    <p className="text-sm text-white/80">Veli memnuniyeti</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Öğrenciye Özgü Model - Yeni Bölüm */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4">
          <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-semibold">
                  Bireysel ve Grup Ders İmkanları
                </h3>
                <p className="mt-2 text-base md:text-lg text-black/70">
                  Dijital platform artı bireyselleştirilmiş ders modeli ile
                  öğrenciye özgü eğitim.
                </p>
                <p className="mt-2 text-base md:text-lg text-black/70">
                  %100 psikolog desteği, MOXO testi ve Turbo Zeka testi ile
                  dikkatinizi ölçelim.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3 md:w-[380px]">
                <div className="rounded-xl border border-black/10 p-4 text-center">
                  <span className="mx-auto mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-600/10 text-lg">
                    👩‍🏫
                  </span>
                  <p className="text-sm font-medium">Bireysel Ders</p>
                </div>
                <div className="rounded-xl border border-black/10 p-4 text-center">
                  <span className="mx-auto mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-600/10 text-lg">
                    🤝
                  </span>
                  <p className="text-sm font-medium">Grup Ders</p>
                </div>
                <div className="rounded-xl border border-black/10 p-4 text-center">
                  <span className="mx-auto mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-600/10 text-lg">
                    🧠
                  </span>
                  <p className="text-sm font-medium">MOXO & Turbo Zeka</p>
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
              className="w-full max-w-[700px] h-auto rounded-xl object-contain shadow-sm md:max-w-[780px]"
            />
          </div>

          {/* Optimize edilmiş 3 kart grid sistemi */}
          <div className="mt-8 grid gap-6 sm:grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto">
            {[
              {
                title: "6–10 Yaş",
                desc: "Okuma temelleri",
                emoji: "📚",
                features: [
                  "Temel okuma becerileri",
                  "Görsel hafıza",
                  "Konsantrasyon",
                ],
                color: "from-blue-500 to-cyan-500",
              },
              {
                title: "11–14 Yaş",
                desc: "Hız & Anlama",
                emoji: "⚡",
                features: [
                  "Hızlı okuma teknikleri",
                  "Kavrama geliştirme",
                  "Analiz becerileri",
                ],
                color: "from-orange-500 to-amber-500",
              },
              {
                title: "15–17 Yaş",
                desc: "Sınav ve odak",
                emoji: "🎯",
                features: [
                  "Sınav stratejileri",
                  "Zaman yönetimi",
                  "Kritik düşünme",
                ],
                color: "from-rose-500 to-pink-500",
              },
            ].map((a, i) => (
              <div
                key={i}
                className="group relative rounded-2xl border border-black/10 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-black/20"
              >
                {/* Gradient border effect */}
                <div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"
                  style={{
                    background: `linear-gradient(135deg, ${
                      a.color.split(" ")[1]
                    }, ${a.color.split(" ")[3]})`,
                  }}
                ></div>

                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${a.color} text-white text-xl shadow-sm transition-transform duration-300 group-hover:scale-110`}
                  >
                    {a.emoji}
                  </span>
                  <div>
                    <p className="text-3xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                      {a.title}
                    </p>
                    <p className="text-xl text-gray-600">{a.desc}</p>
                  </div>
                </div>

                {/* Features list */}
                <ul className="space-y-2 mb-6">
                  {a.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-xl text-gray-700"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-orange-400 to-rose-400"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  href="/kayit"
                  className="inline-flex items-center gap-2 text-xl font-semibold text-orange-600 hover:text-orange-700 transition-colors duration-200 group-hover:gap-3"
                >
                  Planı Gör
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ücretsiz Ön Görüşme Duyurusu */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4">
          <div
            className="relative overflow-hidden rounded-2xl border border-orange-200 bg-gradient-to-r from-orange-50 to-rose-50 p-6 text-center shadow-sm transition-all duration-700 ease-out hover:shadow-xl hover:scale-[1.02] hover:border-orange-300"
            style={{
              animation: "fadeInSlideUp 1s ease-out forwards",
              opacity: 0,
              transform: "translateY(30px)",
            }}
          >
            {/* Arka plan animasyonlu daire */}
            <div
              className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orange-200/40 blur-3xl transition-all duration-1000 ease-out hover:scale-110 hover:bg-orange-300/50"
              aria-hidden
              style={{
                animation: "pulse 3s ease-in-out infinite",
              }}
            ></div>

            {/* Ana başlık - fade-in animasyonu */}
            <p
              className="text-xl font-semibold md:text-2xl transition-all duration-500 ease-out hover:text-orange-800"
              style={{
                animation: "fadeIn 1.2s ease-out 0.3s forwards",
                opacity: 0,
              }}
            >
              Ücretsiz ön görüşme ve okuma ölçümü için{" "}
              <span
                className="bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent transition-all duration-500 ease-out hover:from-orange-700 hover:to-rose-700"
                style={{
                  animation:
                    "highlightText 2s ease-in-out 1s infinite alternate",
                }}
              >
                ofisimize bekleriz
              </span>
            </p>

            {/* Adres - slide-up animasyonu */}
            <p
              className="mt-3 text-base text-black/70 md:text-lg transition-all duration-500 ease-out hover:text-black/90"
              style={{
                animation: "slideUp 1s ease-out 0.6s forwards",
                opacity: 0,
                transform: "translateY(20px)",
              }}
            >
              {address}
            </p>

            {/* WhatsApp butonu - bounce-in animasyonu */}
            <div
              className="mt-5 flex justify-center"
              style={{
                animation: "bounceIn 1s ease-out 0.9s forwards",
                opacity: 0,
                transform: "scale(0.8)",
              }}
            >
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-base font-semibold text-white shadow-sm transition-all duration-300 ease-out hover:brightness-110 hover:shadow-lg hover:scale-105 hover:bg-[#20D366] active:scale-95"
                aria-label="WhatsApp ile yazın"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-5 w-5 transition-transform duration-300 ease-out group-hover:rotate-12"
                  aria-hidden
                >
                  <path d="M13.601 2.326A7.2 7.2 0 0 0 8.017 0C3.608 0 .063 3.546.063 7.955c0 1.401.367 2.76 1.06 3.967L0 16l4.159-1.095a7.9 7.9 0 0 0 3.858.986h.003c4.409 0 7.955-3.546 7.955-7.955a7.89 7.89 0 0 0-2.334-5.61zM8.02 14.5a6.54 6.54 0 0 1-3.356-.92l-.24-.143-2.477.651.662-2.414-.156-.248A6.53 6.53 0 0 1 1.48 7.955c0-3.608 2.935-6.543 6.544-6.543 1.748 0 3.392.682 4.623 1.914a6.52 6.52 0 0 1 1.914 4.629c0 3.608-2.935 6.545-6.544 6.545zm3.57-4.934c-.195-.098-1.153-.568-1.333-.633-.18-.065-.311-.098-.442.098-.13.195-.506.632-.62.761-.115.13-.23.146-.425.049-.195-.098-.823-.303-1.567-.966-.58-.518-.97-1.158-1.085-1.353-.115-.195-.012-.301.086-.399.089-.088.195-.23.293-.344.098-.115.13-.195.195-.325.065-.13.033-.244-.016-.342-.049-.098-.442-1.068-.606-1.468-.16-.387-.323-.335-.442-.341l-.377-.007c-.13 0-.342.049-.52.244-.18.195-.682.666-.682 1.626s.698 1.885.795 2.015c.098.13 1.374 2.101 3.333 2.949.466.201.83.321 1.114.41.468.149.894.128 1.231.078.375-.056 1.153-.471 1.316-.926.162-.455.162-.846.114-.926-.049-.081-.18-.13-.375-.228z" />
                </svg>
                <span className="transition-all duration-300 ease-out group-hover:translate-x-1">
                  Bize Yazın
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Konum Haritası */}
      <section className="py-6">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-2xl border border-black/10 bg-white p-2 md:p-3">
            <iframe
              title="Tega Akademi Konum Haritası"
              src={mapsEmbedSrc}
              className="h-[320px] w-full rounded-xl md:h-[420px]"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
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
        </div>
      </section>

      {/* Hakkımızda / Güven */}
      <section id="hakkimizda" className="bg-rose-50/50 py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold">
                Aile Dostu ve Güvenli
              </h3>
              <p className="mt-2 text-black/70 text-xl md:text-2xl">
                İçeriklerimiz çocuk gelişimi uzmanları tarafından gözden
                geçirilir. Reklamsız, güvenli ve odaklı bir öğrenme ortamı
                sunarız.
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="rounded-xl border border-black/10 bg-white p-4 text-center">
                  <p className="text-3xl font-bold">%100</p>
                  <p className="text-base text-black/60">Reklamsız</p>
                </div>
                <div className="rounded-xl border border-black/10 bg-white p-4 text-center">
                  <p className="text-2xl md:text-3xl font-bold break-words">
                    Haftalık
                  </p>
                  <p className="text-base text-black/60">Veli Raporu</p>
                </div>
                <div className="rounded-xl border border-black/10 bg-white p-4 text-center">
                  <p className="text-3xl font-bold">Seviye</p>
                  <p className="text-base text-black/60">Uyarlamalı</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-6">
              <h4 className="text-xl md:text-2xl font-semibold">
                Veliler ne diyor?
              </h4>
              <div className="mt-4 space-y-4">
                {selectedReviews.map((review, index) => (
                  <figure
                    key={index}
                    className="rounded-xl border border-black/10 p-4"
                  >
                    <blockquote className="text-lg text-black/80">
                      “{review.text}”
                    </blockquote>
                    <figcaption className="mt-2 text-base text-black/50">
                      {review.author}
                    </figcaption>
                  </figure>
                ))}
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
