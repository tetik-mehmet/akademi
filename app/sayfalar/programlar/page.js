export default function ProgramsPage() {
  const PROGRAMS = [
    { title: "Diksiyon", emoji: "🗣️", badge: "bg-rose-600/10 text-rose-700" },
    {
      title: "Hızlı Okuma",
      emoji: "⚡",
      badge: "bg-orange-600/10 text-orange-700",
    },
    {
      title: "Mental Aritmetik",
      emoji: "🧮",
      badge: "bg-amber-600/10 text-amber-700",
    },
    {
      title: "Dikte Eğitimi",
      emoji: "✍️",
      badge: "bg-sky-600/10 text-sky-700",
    },
    {
      title: "Türkçe LGS Soru Çözümü",
      emoji: "📘",
      badge: "bg-indigo-600/10 text-indigo-700",
    },
    {
      title: "Temel İngilizce",
      emoji: "🔤",
      badge: "bg-emerald-600/10 text-emerald-700",
    },
    {
      title: "Temel Matematik",
      emoji: "➗",
      badge: "bg-purple-600/10 text-purple-700",
    },
    {
      title: "Okuma Yazma Eğitimi",
      emoji: "📖",
      badge: "bg-pink-600/10 text-pink-700",
    },
  ];

  return (
    <main id="program" className="mx-auto max-w-7xl px-4 py-10">
      <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h1 className="text-2xl font-bold md:text-3xl">
              Eğitim Programlarımız
            </h1>
            <p className="mt-2 max-w-2xl text-black/70">
              Aşağıdaki programlardan ihtiyacınıza uygun olanı seçin. Her
              programın detaylarını yakında ekleyeceğiz.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {PROGRAMS.map((p) => (
            <div
              key={p.title}
              className="group rounded-2xl border border-black/10 bg-white p-5 transition hover:shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${p.badge} text-xl`}
                  aria-hidden
                >
                  {p.emoji}
                </span>
                <p className="text-base font-semibold">{p.title}</p>
              </div>
              <p className="mt-2 text-sm text-black/60">Detaylar yakında.</p>
              <div className="mt-4">
                <span className="inline-block rounded-full border border-black/10 px-3 py-1 text-xs font-semibold text-black/70">
                  Yakında Açılıyor
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6 rounded-2xl border border-rose-200 bg-gradient-to-r from-rose-50 to-orange-50 p-6 shadow-sm">
        <p className="text-sm text-black/70">
          Not: Her bir programın müfredatını, hedeflerini ve örnek derslerini
          sizinle birlikte şekillendireceğiz.
        </p>
      </section>
    </main>
  );
}
