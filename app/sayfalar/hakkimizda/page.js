import Image from "next/image";

export const metadata = {
  title: "Hakkımızda – TEGA Eğitim",
  description:
    "TEGA Eğitim'in misyonu, okuma alışkanlığı ve anlama becerilerini güçlendiren pedagojik ve ölçülebilir bir öğrenme deneyimi sunmaktır.",
};

function SectionKicker({ children }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-widest text-orange-700/90">
      {children}
    </p>
  );
}

function SectionTitle({ kicker, title, subtitle }) {
  return (
    <div className="space-y-3">
      {Boolean(kicker) && <SectionKicker>{kicker}</SectionKicker>}
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
        <span className="bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {Boolean(subtitle) && (
        <p className="text-sm md:text-base text-black/70 max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function PrincipleItem({ title, description, icon }) {
  return (
    <li className="group rounded-xl border border-black/10 bg-white p-4 shadow-sm hover:shadow-md transition">
      <div className="flex items-start gap-3">
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-600/10 text-orange-700 ring-1 ring-black/5">
          {icon}
        </span>
        <div className="space-y-1">
          <h4 className="text-sm font-semibold text-black/90">{title}</h4>
          <p className="text-sm text-black/70">{description}</p>
        </div>
      </div>
    </li>
  );
}

function Slogan() {
  return (
    <div className="relative mt-1">
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-orange-400/30 via-rose-400/30 to-orange-400/30 blur-xl" />
      <p className="inline-block rounded-xl bg-white/80 px-3 py-2 ring-1 ring-black/5 shadow-sm">
        <span className="bg-gradient-to-r from-orange-600 via-rose-600 to-orange-600 bg-clip-text text-transparent text-xl md:text-2xl font-extrabold tracking-tight motion-safe:animate-pulse">
          “Her Kitap, Bir İnsan, Her Cümle, Bir Yaşam!”
        </span>
      </p>
    </div>
  );
}

export default function HakkimizdaPage() {
  return (
    <main id="hakkimizda" className="mx-auto max-w-7xl px-4">
      {/* Hero */}
      <section className="pt-10 md:pt-14">
        <div className="relative rounded-3xl p-[1px] bg-gradient-to-r from-orange-500/50 via-rose-500/50 to-orange-500/50 shadow-sm">
          <div className="relative overflow-hidden rounded-[inherit] border border-black/10 bg-white/80 p-6 md:p-10 ring-1 ring-black/5">
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-orange-200/60 blur-3xl motion-safe:animate-pulse motion-reduce:animate-none" />
              <div className="absolute -right-16 -bottom-24 h-60 w-60 rounded-full bg-rose-200/60 blur-3xl motion-safe:animate-pulse motion-reduce:animate-none" />
            </div>

            <div className="grid items-center gap-8 md:gap-10 md:grid-cols-2">
              <div className="space-y-4">
                <SectionKicker>Biz kimiz?</SectionKicker>
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                  TEGA Eğitim Ailesi
                </h1>
                <Slogan />
                <p className="text-black/70 text-base md:text-lg">
                  Çocuklara okuma alışkanlığı kazandıran, okuduğunu anlama ve
                  hızlı okuma becerilerini güçlendiren, güvenli ve
                  oyunlaştırılmış bir öğrenme deneyimi tasarlıyoruz.
                </p>
              </div>
              <div className="relative h-56 md:h-72">
                <Image
                  src="/teacher.png"
                  alt="TEGA Eğitim Öğretmen ve Öğrenci"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misyon */}
      <section id="misyon" className="mt-14 space-y-6">
        <SectionTitle
          title="Misyonumuz"
          subtitle="Küçük yaşlardan itibaren okuma sevgisini kazandırmak ve her öğrencinin metinleri hızlı ve derinlemesine anlayabilmesini sağlamak. Okuma alışkanlığı; akademik başarıya, kültürel zenginliğe ve özgüvene açılan kapıdır."
        />
        <div className="grid gap-4 md:grid-cols-3">
          <PrincipleItem
            title="Okuma Alışkanlığı"
            description="Her gün küçük dozlarda sürdürülebilir ve keyifli içeriklerle okuma rutini oluşturuyoruz."
            icon={<span>📖</span>}
          />
          <PrincipleItem
            title="Hızlı Okuma + Anlama"
            description="Yalnızca hızlı okumayı değil; metnin ana fikrini, ayrıntılarını ve bağlamını kavramayı birlikte öğretiyoruz."
            icon={<span>⚡</span>}
          />
          <PrincipleItem
            title="Ölçülebilir Gelişim"
            description="Yaşa ve seviyeye uygun modüller, düzenli kazanım takibi ve geri bildirimlerle desteklenir."
            icon={<span>📊</span>}
          />
        </div>
      </section>

      {/* Yaklaşım */}
      <section id="yaklasim" className="mt-14">
        <SectionTitle
          kicker="Eğitim Modelimiz"
          title="Okuma ve Anlama Müfredatı"
          subtitle="Kurumsal deneyimimiz, saha gözlemlerimiz ve pedagojik materyallerimizle harmanlanan program; okuma hızını artırırken metinleri tam olarak anlamayı garanti altına alır. Her yaş grubuna özel teknikler uygulanır."
        />
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-black/90">
              Program Bileşenleri
            </h3>
            <ul className="mt-3 grid gap-2 text-sm text-black/70">
              <li>• Dikkat, odak ve hız egzersizleri</li>
              <li>• Ana fikir, çıkarım ve kavram haritası çalışmaları</li>
              <li>• Yaş gruplarına uygun metinler ve soru türleri</li>
              <li>• Düzenli ölçme-değerlendirme ve raporlama</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-black/90">
              Neden Bu Yaklaşım?
            </h3>
            <p className="mt-3 text-sm text-black/70">
              Günümüzde hızla yayılan okuma ve anlama eğitimleri, çoğu zaman
              yalnızca hız odaklıdır. Biz; metni anlama, yorumlama ve bilgiyi
              hayatla ilişkilendirme becerisini merkeze alırız. Her öğrencinin
              öğrenme hızı ve yöntemi özeldir; müfredatımız bu farklılıklara
              göre esnektir.
            </p>
          </div>
        </div>
      </section>

      {/* Neden TEGA */}
      <section id="neden-tega" className="mt-14">
        <SectionTitle
          title="Neden TEGA?"
          subtitle="M.E.B. müfredat güncellemelerine uyumlu, paket programlar ve profesyonel eğitmenlerle desteklenen, kısa sürede ölçülebilir gelişim sağlayan bir yapı sunuyoruz."
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <PrincipleItem
            title="Uzman Eğitmenler"
            description="Her yaş grubuna özel eğitim almış profesyonel ekip."
            icon={<span>🎓</span>}
          />
          <PrincipleItem
            title="Güncel ve Pedagojik İçerik"
            description="Yaşa uygun, reklamsız ve güvenli öğrenme ortamı."
            icon={<span>🧩</span>}
          />
          <PrincipleItem
            title="Sınav Odaklı Destek"
            description="Hızlı Okuma ve Anlama Teknikleri ile zaman kazandıran stratejiler."
            icon={<span>🏆</span>}
          />
        </div>
      </section>

      {/* Çağrı */}
      <section className="my-16">
        <div className="flex flex-col items-center justify-between gap-5 rounded-2xl border border-black/10 bg-white p-6 shadow-sm md:flex-row">
          <div className="max-w-2xl">
            <h3 className="text-lg font-bold tracking-tight">
              Çocuklarınız için yeni bir bakış açısı kazandırmak ister misiniz?
            </h3>
            <p className="mt-1 text-sm text-black/70">
              Sorularınızı bize iletin; seviyenize uygun program ve örnek ders
              akışını birlikte planlayalım.
            </p>
          </div>
          <a
            href="/sayfalar/iletisim"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-orange-600 to-rose-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:brightness-110"
          >
            İletişime Geçin
          </a>
        </div>
      </section>
    </main>
  );
}
