"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  // Animasyon varyantları
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <main className="min-h-screen">
      {/* Sayfa Başlığı */}
      <motion.section
        className="py-12 md:py-16 border-b border-black/10 bg-gray-50/60"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="mx-auto max-w-7xl px-4">
          <motion.h1
            className="text-5xl font-bold tracking-tight md:text-6xl"
            variants={itemVariants}
          >
            Kurslarımız
          </motion.h1>
          <motion.p
            className="mt-4 max-w-2xl text-xl text-black/70"
            variants={itemVariants}
          >
            Tega; <strong>Hızlı Okuma</strong>, <strong>Odak</strong> ve{" "}
            <strong>Temel İngilizce</strong> olmak üzere üç temel beceriye
            odaklanır. Kısa, ölçülebilir ve eğlenceli oturumlarla ilerleyin.
          </motion.p>
        </div>
      </motion.section>

      {/* Kurs Kartları */}
      <motion.section
        id="kurslar"
        className="py-14"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="mt-2 grid gap-5 md:grid-cols-3">
            {/* Hızlı Okuma */}
            <motion.div
              className="rounded-2xl border border-black/10 bg-white p-6 cursor-pointer"
              variants={cardVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-3">
                <motion.span
                  className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-violet-600/10 text-3xl"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  ⚡
                </motion.span>
                <p className="text-2xl font-semibold">Hızlı Okuma</p>
              </div>
              <p className="mt-4 text-lg text-black/70">
                Göz kası egzersizleri, satır takibi ve hız–anlama dengesini
                güçlendiren çalışmalar.
              </p>
              <ul className="mt-5 space-y-3 text-lg text-black/80">
                <li>• Metronomlu ritim çalışmaları</li>
                <li>• Anlama soruları ile pekiştirme</li>
                <li>• Haftalık gelişim raporu</li>
              </ul>
              <motion.img
                src="/reading.gif"
                alt="Hızlı okuma çalışma örneği"
                className="mt-5 mx-auto w-full max-w-[260px] md:max-w-[320px] rounded-3xl border border-black/10 shadow-sm"
                loading="lazy"
                variants={imageVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/kayit"
                  className="mt-6 inline-block text-lg font-semibold text-violet-700 hover:text-violet-800"
                >
                  Programa Katıl
                </Link>
              </motion.div>
            </motion.div>

            {/* Odak */}
            <motion.div
              className="rounded-2xl border border-black/10 bg-white p-6 cursor-pointer"
              variants={cardVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-3">
                <motion.span
                  className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-cyan-600/10 text-3xl"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  🎯
                </motion.span>
                <p className="text-2xl font-semibold">Odak</p>
              </div>
              <p className="mt-4 text-lg text-black/70">
                Dikkat süresini artıran oyunlaştırılmış egzersizler ve nefes
                teknikleri.
              </p>
              <ul className="mt-5 space-y-3 text-lg text-black/80">
                <li>• Zamanlı görevler</li>
                <li>• Sesli/görsel dikkat çalışmaları</li>
                <li>• Günlük mini rutinler</li>
              </ul>
              <motion.img
                src="/target.gif"
                alt="Odak çalışma örneği"
                className="mt-5 mx-auto w-full max-w-[260px] md:max-w-[320px] rounded-3xl border border-black/10 shadow-sm"
                loading="lazy"
                variants={imageVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/kayit"
                  className="mt-6 inline-block text-lg font-semibold text-cyan-700 hover:text-cyan-800"
                >
                  Programa Katıl
                </Link>
              </motion.div>
            </motion.div>

            {/* Temel İngilizce */}
            <motion.div
              className="rounded-2xl border border-black/10 bg-white p-6 cursor-pointer"
              variants={cardVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-3">
                <motion.span
                  className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600/10 text-3xl"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  🔤
                </motion.span>
                <p className="text-2xl font-semibold">Temel İngilizce</p>
              </div>
              <p className="mt-4 text-lg text-black/70">
                Kelime, telaffuz ve basit dilbilgisi; kısa videolar ve
                etkileşimli alıştırmalarla.
              </p>
              <ul className="mt-5 space-y-3 text-lg text-black/80">
                <li>• Görsel destekli kelime çalışmaları</li>
                <li>• Sesli telaffuz alıştırmaları</li>
                <li>• Günlük tekrar planı</li>
              </ul>
              <motion.img
                src="/english.gif"
                alt="Temel İngilizce çalışma örneği"
                className="mt-5 mx-auto w-full max-w-[260px] md:max-w-[320px] rounded-3xl border border-black/10 shadow-sm"
                loading="lazy"
                variants={imageVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/ing-ornek"
                  className="mt-6 inline-block text-lg font-semibold text-emerald-700 hover:text-emerald-800"
                >
                  Ünite Örneği
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="pb-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            className="grid items-center gap-6 rounded-2xl border border-black/10 bg-gradient-to-r from-cyan-50 to-violet-50 p-6 md:grid-cols-2"
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <div>
              <h2 className="text-3xl font-semibold">Bugün başlayın</h2>
              <p className="mt-4 text-xl text-black/70">
                İlk hafta ücretsiz. Kayıt sonrası seviye belirleme testi ile
                kişisel planınız oluşturulur.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/kayit"
                    className="rounded-full bg-black px-6 py-4 text-lg font-semibold text-white hover:bg-black/90"
                  >
                    Ücretsiz Dene
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/"
                    className="rounded-full border border-black/10 px-6 py-4 text-lg font-semibold hover:border-black/30"
                  >
                    Ana Sayfa
                  </Link>
                </motion.div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Günlük", value: "15 dk" },
                { label: "İlerleme", value: "Haftalık rapor" },
                { label: "Cihaz", value: "Web + Mobil" },
                { label: "Destek", value: "Ebeveyn rehberi" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="rounded-xl border border-black/10 bg-white p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.4 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <p className="text-base text-black/60">{item.label}</p>
                  <p className="text-lg font-semibold">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
