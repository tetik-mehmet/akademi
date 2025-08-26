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

  const priceVariants = {
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

  // Paket verileri
  const packages = [
    {
      name: "Başlangıç Paketi",
      price: "5000",
      period: "aylık",
      description: "Tek kategoride başlangıç",
      features: [
        "1 kurs kategorisi seçimi",
        "Günlük 15 dakika çalışma",
        "Haftalık ilerleme raporu",
        "Ebeveyn rehberi",
        "Web erişimi",
      ],
      color: "from-violet-500 to-purple-600",
      icon: "🚀",
      popular: false,
    },
    {
      name: "Standart Paket",
      price: "10000",
      period: "aylık",
      description: "İki kategoride gelişim",
      features: [
        "2 kurs kategorisi seçimi",
        "Günlük 20 dakika çalışma",
        "Haftalık detaylı rapor",
        "Öncelikli destek",
        "Web + Mobil erişim",
        "Kişisel çalışma planı",
      ],
      color: "from-cyan-500 to-blue-600",
      icon: "⭐",
      popular: true,
    },
    {
      name: "Premium Paket",
      price: "13000",
      period: "aylık",
      description: "Tüm kategorilerde mükemmellik",
      features: [
        "Tüm 3 kurs kategorisi",
        "Günlük 30 dakika çalışma",
        "Günlük ilerleme takibi",
        "7/24 öncelikli destek",
        "Web + Mobil + Tablet",
        "Kişisel mentor eşliğinde",
        "Özel çalışma materyalleri",
      ],
      color: "from-emerald-500 to-green-600",
      icon: "👑",
      popular: false,
    },
  ];

  // Kurs kategorileri
  const categories = [
    {
      name: "Hızlı Okuma",
      icon: "⚡",
      color: "bg-violet-600/10",
      description: "Göz kası egzersizleri ve hız-anlama dengesi",
    },
    {
      name: "Odak",
      icon: "🎯",
      color: "bg-cyan-600/10",
      description: "Dikkat süresini artıran egzersizler",
    },
    {
      name: "Temel İngilizce",
      icon: "🔤",
      color: "bg-emerald-600/10",
      description: "Kelime, telaffuz ve dilbilgisi çalışmaları",
    },
  ];

  const mapsEmbedSrc =
    "https://www.google.com/maps?q=Ba%C4%9Fl%C4%B1ca%20Mahallesi%20Hilal%20Caddesi%2013%2F2%20Etimesgut%2FANKARA&hl=tr&z=16&output=embed";

  return (
    <main className="min-h-screen relative">
      {/* Arkaplan Resmi */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/ekstra.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Overlay kaldırıldı - arkaplan resmi tam görünür */}

      {/* İçerik */}
      <div className="relative z-20">
        {/* Sayfa Başlığı */}
        <motion.section
          className="py-8 md:py-12 border-b border-black/20 bg-white/80"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="mx-auto max-w-5xl px-4">
            <motion.h1
              className="text-3xl font-bold tracking-tight md:text-4xl text-center"
              variants={itemVariants}
            >
              Paketlerimiz
            </motion.h1>
            <motion.p
              className="mt-3 max-w-2xl text-base text-black/80 text-center mx-auto"
              variants={itemVariants}
            >
              Her bütçeye ve ihtiyaca uygun paketler.{" "}
              <strong>Hızlı Okuma</strong>, <strong>Odak</strong> ve{" "}
              <strong>Temel İngilizce</strong> kategorilerinde
              kişiselleştirilmiş öğrenme deneyimi.
            </motion.p>
          </div>
        </motion.section>

        {/* Kurs Kategorileri */}
        <motion.section
          className="py-8 bg-white/70"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="mx-auto max-w-5xl px-4">
            <motion.h2
              className="text-2xl font-bold text-center mb-8"
              variants={itemVariants}
            >
              Kurs Kategorilerimiz
            </motion.h2>
            <div className="grid gap-4 md:grid-cols-3">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  className="rounded-xl border border-black/20 bg-white/80 p-4 shadow-md"
                  variants={cardVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <motion.span
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${category.color} text-2xl`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {category.icon}
                    </motion.span>
                    <h3 className="text-lg font-semibold">{category.name}</h3>
                  </div>
                  <p className="text-sm text-black/70 mb-3">
                    {category.description}
                  </p>
                  <motion.div
                    className="h-20 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-3xl opacity-60">{category.icon}</span>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Paket Kartları */}
        <motion.section
          className="py-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="mx-auto max-w-5xl px-4">
            <motion.h2
              className="text-2xl font-bold text-center mb-8"
              variants={itemVariants}
            >
              Fiyat Paketleri
            </motion.h2>
            <div className="grid gap-6 md:grid-cols-3">
              {packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  className={`relative rounded-2xl border-2 ${
                    pkg.popular
                      ? "border-cyan-500 shadow-xl shadow-cyan-500/20"
                      : "border-black/20"
                  } bg-white/80 p-6 shadow-md`}
                  variants={cardVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.98 }}
                >
                  {pkg.popular && (
                    <motion.div
                      className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5, type: "spring" }}
                    >
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                        En Popüler
                      </span>
                    </motion.div>
                  )}

                  <div className="text-center mb-4">
                    <motion.span
                      className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-gray-100 to-gray-200 text-2xl mb-3"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {pkg.icon}
                    </motion.span>
                    <h3 className="text-lg font-bold mb-2">{pkg.name}</h3>
                    <p className="text-black/60 mb-3 text-sm">
                      {pkg.description}
                    </p>
                  </div>

                  <motion.div
                    className="text-center mb-4"
                    variants={priceVariants}
                  >
                    <div className="text-2xl font-bold text-black mb-1">
                      {pkg.price}
                    </div>
                    <div className="text-black/60 text-sm">/{pkg.period}</div>
                  </motion.div>

                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center gap-2 text-black/80 text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + featureIndex * 0.1 }}
                      >
                        <span className="text-green-500 text-lg">✓</span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/kayit"
                      className={`inline-block w-full rounded-xl bg-gradient-to-r ${pkg.color} px-4 py-3 text-base font-semibold text-white hover:shadow-md transition-shadow`}
                    >
                      Paketi Seç
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Bölümü */}
        <motion.section
          className="py-10 bg-gradient-to-r from-cyan-50 to-violet-50"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="relative mx-auto max-w-4xl px-4">
            {/* Bölüm içi dekoratif, hafif gradient blob'lar */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -top-6 -left-10 h-32 w-32 rounded-full bg-gradient-to-br from-cyan-400/25 to-blue-600/25 blur-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -bottom-8 -right-10 h-36 w-36 rounded-full bg-gradient-to-br from-violet-400/25 to-purple-600/25 blur-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            />

            <motion.div className="text-center" variants={itemVariants}>
              <h2 className="text-2xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-violet-700 via-cyan-700 to-blue-700">
                Hangi Paket Size Uygun?
              </h2>
              <motion.div
                className="mx-auto mb-4 h-[2px] w-28 rounded-full bg-gradient-to-r from-violet-500/60 via-cyan-500/60 to-blue-500/60"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
              <p className="text-base text-black/70 mb-6 max-w-xl mx-auto">
                Ücretsiz ön görüşme ve okuma ölçümü için ofisimize bekleriz.
              </p>
              <motion.div
                className="rounded-2xl border border-black/10 bg-white/90 backdrop-blur p-2 md:p-3 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.01 }}
              >
                <iframe
                  title="Tega Akademi Konum Haritası"
                  src={mapsEmbedSrc}
                  className="h-[320px] w-full rounded-xl md:h-[420px] transition-all duration-300 hover:shadow-xl"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
