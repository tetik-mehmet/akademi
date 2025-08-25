"use client";

import { useState, useEffect } from "react";

export default function Page() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("iletisim");

  const phoneDisplay = "+90 312 999 98 07";
  const phoneHref = "tel:+903129999807";
  const whatsappHref =
    "https://wa.me/905443177895?text=Merhaba%20Tega%20Akademi%2C%20bilgi%20almak%20istiyorum.";
  const address = "Bağlıca Mahallesi Hilal Caddesi 13/2 Etimesgut/ANKARA";
  const mapsEmbedSrc =
    "https://www.google.com/maps?q=Ba%C4%9Fl%C4%B1ca%20Mahallesi%20Hilal%20Caddesi%2013%2F2%20Etimesgut%2FANKARA&hl=tr&z=16&output=embed";

  // Sosyal medya linkleri
  const socialLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com/tegaakademi",
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      color: "bg-gradient-to-r from-pink-500 to-purple-600",
    },
    {
      name: "Facebook",
      href: "https://facebook.com/tegaakademi",
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      color: "bg-gradient-to-r from-blue-600 to-blue-700",
    },
    {
      name: "YouTube",
      href: "https://youtube.com/@tegaakademi",
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      color: "bg-gradient-to-r from-red-600 to-red-700",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/tegaakademi",
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      color: "bg-gradient-to-r from-blue-700 to-blue-800",
    },
  ];

  // Çalışma saatleri
  const workingHours = [
    { day: "Pazartesi", hours: "09:00 - 18:00", status: "Açık" },
    { day: "Salı", hours: "09:00 - 18:00", status: "Açık" },
    { day: "Çarşamba", hours: "09:00 - 18:00", status: "Açık" },
    { day: "Perşembe", hours: "09:00 - 18:00", status: "Açık" },
    { day: "Cuma", hours: "09:00 - 18:00", status: "Açık" },
    { day: "Cumartesi", hours: "09:00 - 15:00", status: "Açık" },
    { day: "Pazar", hours: "Kapalı", status: "Kapalı" },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tabs = [
    { id: "iletisim", label: "İletişim Bilgileri" },
    { id: "calisma", label: "Çalışma Saatleri" },
    { id: "sosyal", label: "Sosyal Medya" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      {/* Başlık */}
      <section className="border-b border-black/10 bg-gradient-to-r from-blue-600 to-purple-600 py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>

        {/* Animasyonlu arka plan şekilleri */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <h1
            className={`text-5xl md:text-6xl font-bold tracking-tight text-white transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            İletişim
          </h1>
          <p
            className={`mt-4 max-w-2xl mx-auto text-white/90 text-lg md:text-xl transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Tega Akademi ile iletişime geçmek için aşağıdaki kanalları
            kullanabilirsiniz. Konumumuz haritada işaretlidir.
          </p>
        </div>
      </section>

      {/* Tab Navigasyonu */}
      <section className="py-8 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* İçerik */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          {/* İletişim Bilgileri Tab */}
          {activeTab === "iletisim" && (
            <div className="grid gap-8 md:grid-cols-2">
              {/* Bilgi Kartı */}
              <div
                className={`rounded-2xl border border-black/10 bg-white p-8 shadow-lg transition-all duration-700 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-10 opacity-0"
                }`}
              >
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Tega Akademi
                </h2>
                <div className="mt-6 space-y-6 text-base md:text-lg">
                  <div className="group">
                    <p className="text-black/60 text-sm uppercase tracking-wide font-medium">
                      Telefon
                    </p>
                    <p className="font-semibold text-xl mt-1">{phoneDisplay}</p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      <a
                        href={phoneHref}
                        className="inline-flex items-center gap-2 rounded-full border border-blue-200 px-6 py-3 text-base font-semibold text-blue-600 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-md"
                        aria-label="Telefon ile ara"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.6a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.48-1.14a2 2 0 0 1 2.11-.45c.83.29 1.7.5 2.6.62A2 2 0 0 1 22 16.92z"
                          />
                        </svg>
                        Ara
                      </a>
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-base font-semibold text-white hover:brightness-105 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                        aria-label="WhatsApp ile yaz"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          className="h-5 w-5"
                          aria-hidden
                        >
                          <path d="M13.601 2.326A7.2 7.2 0 0 0 8.017 0C3.608 0 .063 3.546.063 7.955c0 1.401.367 2.76 1.06 3.967L0 16l4.159-1.095a7.9 7.9 0 0 0 3.858.986h.003c4.409 0 7.955-3.546 7.955-7.955a7.89 7.89 0 0 0-2.334-5.61zM8.02 14.5a6.54 6.54 0 0 1-3.356-.92l-.24-.143-2.477.651.662-2.414-.156-.248A6.53 6.53 0 0 1 1.48 7.955c0-3.608 2.935-6.543 6.544-6.543 1.748 0 3.392.682 4.623 1.914a6.52 6.52 0 0 1 1.914 4.629c0 3.608-2.935 6.545-6.544 6.545zm3.57-4.934c-.195-.098-1.153-.568-1.333-.633-.18-.065-.311-.098-.442.098-.13.195-.506.632-.62.761-.115.13-.23.146-.425.049-.195-.098-.823-.303-1.567-.966-.58-.518-.97-1.158-1.085-1.353-.115-.195-.012-.301.086-.399.089-.088.195-.23.293-.344.098-.115.13-.195.195-.325.065-.13.033-.244-.016-.342-.049-.098-.442-1.068-.606-1.468-.16-.387-.323-.335-.442-.341l-.377-.007c-.13 0-.342.049-.52.244-.18.195-.682.666-.682 1.626s.698 1.885.795 2.015c.098.13 1.374 2.101 3.333 2.949.466.201.83.321 1.114.41.468.149.894.128 1.231.078.375-.056 1.153-.471 1.316-.926.162-.455.162-.846.114-.926-.049-.081-.18-.13-.375-.228z" />
                        </svg>
                        WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="group">
                    <p className="text-black/60 text-sm uppercase tracking-wide font-medium">
                      Adres
                    </p>
                    <p className="font-semibold text-lg mt-1">{address}</p>
                  </div>
                </div>
              </div>

              {/* Harita */}
              <div
                className={`rounded-2xl border border-black/10 bg-white p-3 shadow-lg transition-all duration-700 delay-300 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                <iframe
                  title="Tega Akademi Konum Haritası"
                  src={mapsEmbedSrc}
                  className="h-[320px] w-full rounded-xl md:h-[420px] transition-all duration-300 hover:shadow-xl"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          )}

          {/* Çalışma Saatları Tab */}
          {activeTab === "calisma" && (
            <div
              className={`max-w-4xl mx-auto transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Çalışma Saatları
                </h2>
                <div className="grid gap-4">
                  {workingHours.map((item, index) => (
                    <div
                      key={item.day}
                      className={`flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md ${
                        item.status === "Kapalı"
                          ? "bg-gray-50"
                          : "bg-gradient-to-r from-blue-50 to-purple-50"
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            item.status === "Açık"
                              ? "bg-green-500 animate-pulse"
                              : "bg-gray-400"
                          }`}
                        ></div>
                        <span className="font-semibold text-lg">
                          {item.day}
                        </span>
                      </div>
                      <div className="text-right">
                        <p
                          className={`font-medium ${
                            item.status === "Kapalı"
                              ? "text-gray-500"
                              : "text-gray-700"
                          }`}
                        >
                          {item.hours}
                        </p>
                        <p
                          className={`text-sm ${
                            item.status === "Açık"
                              ? "text-green-600"
                              : "text-gray-500"
                          }`}
                        >
                          {item.status}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Sosyal Medya Tab */}
          {activeTab === "sosyal" && (
            <div
              className={`max-w-6xl mx-auto transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Sosyal Medyada Takip Edin
                </h2>
                <p className="text-center text-gray-600 mb-12 text-lg">
                  Güncel duyurular, etkinlikler ve eğitim içerikleri için sosyal
                  medya hesaplarımızı takip edin.
                </p>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group p-6 rounded-2xl text-white text-center transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${social.color}`}
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                        {social.icon}
                      </div>
                      <h3 className="font-bold text-lg mb-2">{social.name}</h3>
                      <p className="text-sm opacity-90">Takip Et</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Sabit WhatsApp Butonu */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile yaz"
        className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl animate-bounce"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-7 w-7"
          aria-hidden
        >
          <path d="M13.601 2.326A7.2 7.2 0 0 0 8.017 0C3.608 0 .063 3.546.063 7.955c0 1.401.367 2.76 1.06 3.967L0 16l4.159-1.095a7.9 7.9 0 0 0 3.858.986h.003c4.409 0 7.955-3.546 7.955-7.955a7.89 7.89 0 0 0-2.334-5.61zM8.02 14.5a6.54 6.54 0 0 1-3.356-.92l-.24-.143-2.477.651.662-2.414-.156-.248A6.53 6.53 0 0 1 1.48 7.955c0-3.608 2.935-6.543 6.544-6.543 1.748 0 3.392.682 4.623 1.914a6.52 6.52 0 0 1 1.914 4.629c0 3.608-2.935 6.545-6.544 6.545zm3.57-4.934c-.195-.098-1.153-.568-1.333-.633-.18-.065-.311-.098-.442.098-.13.195-.506.632-.62.761-.115.13-.23.146-.425.049-.195-.098-.823-.303-1.567-.966-.58-.518-.97-1.158-1.085-1.353-.115-.195-.012-.301.086-.399.089-.088.195-.23.293-.344.098-.115.13-.195.195-.325.065-.13.033-.244-.016-.342-.049-.098-.442-1.068-.606-1.468-.16-.387-.323-.335-.442-.341l-.377-.007c-.13 0-.342.049-.52.244-.18.195-.682.666-.682 1.626s.698 1.885.795 2.015c.098.13 1.374 2.101 3.333 2.949.466.201.83.321 1.114.41.468.149.894.128 1.231.078.375-.056 1.153-.471 1.316-.926.162-.455.162-.846.114-.926-.049-.081-.18-.13-.375-.228z" />
        </svg>
      </a>
    </main>
  );
}
