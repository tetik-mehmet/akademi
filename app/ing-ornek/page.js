"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const COLORS = [
  { key: "red", tr: "Kırmızı", hex: "#ef4444", tw: "bg-red-500" },
  { key: "blue", tr: "Mavi", hex: "#3b82f6", tw: "bg-blue-500" },
  { key: "yellow", tr: "Sarı", hex: "#eab308", tw: "bg-yellow-500" },
  { key: "green", tr: "Yeşil", hex: "#22c55e", tw: "bg-green-500" },
  { key: "orange", tr: "Turuncu", hex: "#f97316", tw: "bg-orange-500" },
  { key: "purple", tr: "Mor", hex: "#a855f7", tw: "bg-purple-500" },
  { key: "pink", tr: "Pembe", hex: "#ec4899", tw: "bg-pink-500" },
  { key: "black", tr: "Siyah", hex: "#111827", tw: "bg-black" },
  { key: "white", tr: "Beyaz", hex: "#ffffff", tw: "bg-white border" },
];

function getRandomItems(arr, count) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, count);
}

export default function Page() {
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [feedback, setFeedback] = useState("");

  // Alıştırma 1: "Click the color: Blue"
  const [quiz1Options, setQuiz1Options] = useState(COLORS.slice(0, 4));
  const [quiz1Target, setQuiz1Target] = useState(COLORS[0]);

  // Alıştırma 2: "What color is this?" (renk kutusu → kelimeyi seç)
  const [quiz2Options, setQuiz2Options] = useState(COLORS.slice(0, 4));
  const [quiz2Target, setQuiz2Target] = useState(COLORS[0]);

  useEffect(() => {
    const opts1 = getRandomItems(COLORS, 4);
    setQuiz1Options(opts1);
    setQuiz1Target(opts1[Math.floor(Math.random() * opts1.length)]);

    const opts2 = getRandomItems(COLORS, 4);
    setQuiz2Options(opts2);
    setQuiz2Target(opts2[Math.floor(Math.random() * opts2.length)]);
  }, [total]);

  function handleAnswer(isCorrect) {
    setTotal((t) => t + 1);
    if (isCorrect) {
      setScore((s) => s + 1);
      setFeedback("Doğru! Great job ✨");
    } else {
      setFeedback("Yanlış. Tekrar deneyelim! 🙌");
    }
    // Kısa geri bildirim sonrası yeni soru üretimi için state tetikleniyor → total değişir
    setTimeout(() => setFeedback(""), 900);
  }

  return (
    <main className="mx-auto min-h-[70vh] max-w-3xl px-4 py-10">
      <div className="mb-6 flex items-center justify-between gap-3">
        <h1 className="text-2xl font-bold md:text-3xl">Colors in English</h1>
        <Link
          href="/sayfalar/kurslar"
          className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-semibold text-black/70 transition hover:bg-orange-50"
        >
          ← Kurslara Dön
        </Link>
      </div>

      {/* Kısa konu anlatımı */}
      <section className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-semibold">Temel Bilgi</h2>
        <p className="mt-2 text-black/70">
          Renkler İngilizcede günlük iletişimin önemli bir parçasıdır. En sık
          kullanılan renkler: red (kırmızı), blue (mavi), yellow (sarı), green
          (yeşil), orange (turuncu), purple (mor), pink (pembe), black (siyah),
          white (beyaz).
        </p>
        <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-6">
          {COLORS.slice(0, 6).map((c) => (
            <div
              key={c.key}
              className="flex flex-col items-center gap-2 rounded-xl border border-black/10 bg-white p-3"
            >
              <span
                className={`inline-block h-8 w-8 rounded ${c.tw}`}
                aria-label={c.key}
                title={c.key}
              />
              <span className="text-xs font-medium">{c.key}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Alıştırmalar */}
      <section className="mt-8 grid gap-6 md:grid-cols-2">
        {/* Quiz 1: Click the color */}
        <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold">Exercise 1</h3>
            <span className="text-xs text-black/60">
              Puan: {score}/{total}
            </span>
          </div>
          <p className="mt-2 text-sm text-black/70">
            Click the color:{" "}
            <span className="font-semibold">{quiz1Target.key}</span>
          </p>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {quiz1Options.map((opt) => (
              <button
                key={opt.key}
                onClick={() => handleAnswer(opt.key === quiz1Target.key)}
                className={`aspect-square w-full rounded-xl ${opt.tw} transition hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300`}
                aria-label={opt.key}
                title={opt.key}
              />
            ))}
          </div>
          {feedback && (
            <p className="mt-3 text-sm font-medium text-black/70">{feedback}</p>
          )}
        </div>

        {/* Quiz 2: What color is this? */}
        <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold">Exercise 2</h3>
            <span className="text-xs text-black/60">
              Puan: {score}/{total}
            </span>
          </div>
          <p className="mt-2 text-sm text-black/70">What color is this?</p>
          <div className="mt-3 flex items-center gap-3">
            <span
              className={`inline-block h-10 w-10 rounded ${quiz2Target.tw}`}
              aria-label={quiz2Target.key}
              title={quiz2Target.key}
            />
            <span className="text-xs text-black/60">
              (Seçeneklerden doğru kelimeyi seç)
            </span>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {quiz2Options.map((opt) => (
              <button
                key={opt.key}
                onClick={() => handleAnswer(opt.key === quiz2Target.key)}
                className="rounded-xl border border-black/10 px-3 py-2 text-sm font-medium text-black/80 transition hover:bg-orange-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
              >
                {opt.key}
              </button>
            ))}
          </div>
          {feedback && (
            <p className="mt-3 text-sm font-medium text-black/70">{feedback}</p>
          )}
        </div>
      </section>

      {/* Mini ipucu */}
      <div className="mt-8 rounded-2xl border border-black/10 bg-gradient-to-r from-orange-50 to-rose-50 p-5">
        <p className="text-sm text-black/70">
          İpucu: Renk isimlerini nesnelerle tekrar edin: &quot;red apple&quot;,
          &quot;blue sky&quot;, &quot;green grass&quot;. Kısa ve sık tekrar en
          iyi öğrenme yoludur.
        </p>
      </div>
    </main>
  );
}
