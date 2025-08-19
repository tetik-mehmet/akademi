import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Sayfa Başlığı */}
      <section className="py-12 md:py-16 border-b border-black/10 bg-gray-50/60">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Kurslarımız
          </h1>
          <p className="mt-2 max-w-2xl text-black/70">
            Tega; <strong>Hızlı Okuma</strong>, <strong>Odak</strong> ve{" "}
            <strong>Temel İngilizce</strong> olmak üzere üç temel beceriye
            odaklanır. Kısa, ölçülebilir ve eğlenceli oturumlarla ilerleyin.
          </p>
        </div>
      </section>

      {/* Kurs Kartları */}
      <section id="kurslar" className="py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mt-2 grid gap-5 md:grid-cols-3">
            {/* Hızlı Okuma */}
            <div className="rounded-2xl border border-black/10 bg-white p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-violet-600/10 text-xl">
                  ⚡
                </span>
                <p className="text-lg font-semibold">Hızlı Okuma</p>
              </div>
              <p className="mt-2 text-sm text-black/70">
                Göz kası egzersizleri, satır takibi ve hız–anlama dengesini
                güçlendiren çalışmalar.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-black/80">
                <li>• Metronomlu ritim çalışmaları</li>
                <li>• Anlama soruları ile pekiştirme</li>
                <li>• Haftalık gelişim raporu</li>
              </ul>
              <Link
                href="/kayit"
                className="mt-5 inline-block text-sm font-semibold text-violet-700 hover:text-violet-800"
              >
                Programa Katıl
              </Link>
            </div>

            {/* Odak */}
            <div className="rounded-2xl border border-black/10 bg-white p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-600/10 text-xl">
                  🎯
                </span>
                <p className="text-lg font-semibold">Odak</p>
              </div>
              <p className="mt-2 text-sm text-black/70">
                Dikkat süresini artıran oyunlaştırılmış egzersizler ve nefes
                teknikleri.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-black/80">
                <li>• Zamanlı görevler</li>
                <li>• Sesli/görsel dikkat çalışmaları</li>
                <li>• Günlük mini rutinler</li>
              </ul>
              <Link
                href="/kayit"
                className="mt-5 inline-block text-sm font-semibold text-cyan-700 hover:text-cyan-800"
              >
                Dersleri Gör
              </Link>
            </div>

            {/* Temel İngilizce */}
            <div className="rounded-2xl border border-black/10 bg-white p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600/10 text-xl">
                  🔤
                </span>
                <p className="text-lg font-semibold">Temel İngilizce</p>
              </div>
              <p className="mt-2 text-sm text-black/70">
                Kelime, telaffuz ve basit dilbilgisi; kısa videolar ve
                etkileşimli alıştırmalarla.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-black/80">
                <li>• Görsel destekli kelime çalışmaları</li>
                <li>• Sesli telaffuz alıştırmaları</li>
                <li>• Günlük tekrar planı</li>
              </ul>
              <Link
                href="/kayit"
                className="mt-5 inline-block text-sm font-semibold text-emerald-700 hover:text-emerald-800"
              >
                Ünite Örneği
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-6 rounded-2xl border border-black/10 bg-gradient-to-r from-cyan-50 to-violet-50 p-6 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold">Bugün başlayın</h2>
              <p className="mt-2 text-black/70">
                İlk hafta ücretsiz. Kayıt sonrası seviye belirleme testi ile
                kişisel planınız oluşturulur.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <Link
                  href="/kayit"
                  className="rounded-full bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-black/90"
                >
                  Ücretsiz Dene
                </Link>
                <Link
                  href="/"
                  className="rounded-full border border-black/10 px-5 py-3 text-sm font-semibold hover:border-black/30"
                >
                  Ana Sayfa
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-black/10 bg-white p-4">
                <p className="text-xs text-black/60">Günlük</p>
                <p className="text-sm font-semibold">15 dk</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4">
                <p className="text-xs text-black/60">İlerleme</p>
                <p className="text-sm font-semibold">Haftalık rapor</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4">
                <p className="text-xs text-black/60">Cihaz</p>
                <p className="text-sm font-semibold">Web + Mobil</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4">
                <p className="text-xs text-black/60">Destek</p>
                <p className="text-sm font-semibold">Ebeveyn rehberi</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
