"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

const COLOR_ITEMS = [
  { id: "KIRMIZI", label: "KIRMIZI", textClass: "text-red-600" },
  { id: "MAVİ", label: "MAVİ", textClass: "text-blue-600" },
  { id: "YEŞİL", label: "YEŞİL", textClass: "text-green-600" },
  { id: "SARI", label: "SARI", textClass: "text-yellow-500" },
  { id: "MOR", label: "MOR", textClass: "text-purple-600" },
  { id: "TURUNCU", label: "TURUNCU", textClass: "text-orange-600" },
  { id: "SİYAH", label: "SİYAH", textClass: "text-black" },
];

const BUTTON_STYLES = {
  KIRMIZI: "bg-red-50 text-red-700 border-red-200 hover:bg-red-100",
  MAVİ: "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100",
  YEŞİL: "bg-green-50 text-green-700 border-green-200 hover:bg-green-100",
  SARI: "bg-yellow-50 text-yellow-700 border-yellow-200 hover:bg-yellow-100",
  MOR: "bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100",
  TURUNCU: "bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100",
  SİYAH: "bg-gray-100 text-gray-900 border-gray-300 hover:bg-gray-200",
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function pickDifferent(baseId, pool) {
  const others = pool.filter((c) => c.id !== baseId);
  return others[getRandomInt(others.length)];
}

function sample(array, n) {
  const copy = [...array];
  const out = [];
  while (out.length < n && copy.length) {
    const i = getRandomInt(copy.length);
    out.push(copy.splice(i, 1)[0]);
  }
  return out;
}

export default function StroopPage() {
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [feedback, setFeedback] = useState(null); // "ok" | "no" | null
  const [trial, setTrial] = useState(null);
  const [best, setBest] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("stroop_best");
      if (saved) setBest(parseInt(saved, 10) || 0);
    } catch (_) {}
  }, []);

  useEffect(() => {
    if (!isRunning) return;
    if (timeLeft <= 0) {
      setIsRunning(false);
      try {
        setBest((prev) => {
          const b = Math.max(prev, score);
          localStorage.setItem("stroop_best", String(b));
          return b;
        });
      } catch (_) {}
      return;
    }
    const t = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(t);
  }, [isRunning, timeLeft, score]);

  useEffect(() => {
    if (!isRunning) return;
    if (!trial) generateTrial();
    // Odak için container'a fokus
    containerRef.current?.focus();
  }, [isRunning, trial]);

  const handleAnswerRef = useRef(null);
  handleAnswerRef.current = (selectedId) => handleAnswer(selectedId);

  useEffect(() => {
    const onKey = (e) => {
      if (!isRunning || !trial) return;
      if (["1", "2", "3", "4"].includes(e.key)) {
        const idx = parseInt(e.key, 10) - 1;
        const opt = trial.options[idx];
        if (opt) handleAnswerRef.current?.(opt.id);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isRunning, trial]);

  const accuracy = useMemo(() => {
    if (total === 0) return 0;
    return Math.round((correct / total) * 100);
  }, [correct, total]);

  function generateTrial() {
    // 80% çelişkili, 20% uyumlu
    const labelItem = COLOR_ITEMS[getRandomInt(COLOR_ITEMS.length)];
    const shouldIncongruent = Math.random() < 0.8;
    const inkItem = shouldIncongruent
      ? pickDifferent(labelItem.id, COLOR_ITEMS)
      : COLOR_ITEMS[getRandomInt(COLOR_ITEMS.length)];

    const correctId = inkItem.id;
    const distractors = COLOR_ITEMS.filter((c) => c.id !== correctId);
    const optionItems = sample(distractors, 3).concat([inkItem]);
    // Karıştır
    optionItems.sort(() => Math.random() - 0.5);

    setTrial({
      label: labelItem.label,
      inkId: correctId,
      inkClass: inkItem.textClass,
      options: optionItems.map((c) => ({ id: c.id, label: c.label })),
    });
  }

  function startGame() {
    setScore(0);
    setTotal(0);
    setCorrect(0);
    setTimeLeft(60);
    setFeedback(null);
    setIsRunning(true);
    setTrial(null);
  }

  const handleAnswer = useCallback(
    function handleAnswer(selectedId) {
      if (!trial) return;
      const isCorrect = selectedId === trial.inkId;
      setTotal((t) => t + 1);
      if (isCorrect) {
        setScore((s) => s + 1);
        setCorrect((c) => c + 1);
        setFeedback("ok");
      } else {
        setFeedback("no");
      }
      // Kısa görsel geri bildirim
      setTimeout(() => setFeedback(null), 180);
      generateTrial();
    },
    [trial]
  );

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-xl font-bold">
            Stroop Etkisi – Renk Okuma Oyunu
          </h1>
          <div className="flex items-center gap-2 text-sm">
            <span className="rounded-md bg-orange-50 px-2 py-1 font-semibold text-orange-700">
              Süre: {timeLeft}s
            </span>
            <span className="rounded-md bg-rose-50 px-2 py-1 font-semibold text-rose-700">
              Skor: {score}
            </span>
            <span className="rounded-md bg-emerald-50 px-2 py-1 font-semibold text-emerald-700">
              Doğruluk: %{accuracy}
            </span>
            <span className="rounded-md bg-sky-50 px-2 py-1 font-semibold text-sky-700">
              En İyi: {best}
            </span>
          </div>
        </div>

        <p className="mt-3 text-black/70">
          Görev: Ekrandaki kelimenin anlamını değil,{" "}
          <span className="font-semibold">yazı rengini</span> seçin. Cevaplamak
          için butonlara tıklayabilir veya 1–4 tuşlarını kullanabilirsiniz.
        </p>

        <div
          ref={containerRef}
          tabIndex={-1}
          className={
            "mt-6 rounded-xl border bg-gradient-to-b from-orange-50/40 to-rose-50/30 p-6 text-center outline-none " +
            (feedback === "ok"
              ? "border-emerald-400"
              : feedback === "no"
              ? "border-rose-400"
              : "border-black/10")
          }
          aria-live="polite"
        >
          {!isRunning ? (
            <div className="py-10">
              <p className="text-black/70">
                60 saniyelik bir turda mümkün olduğunca çok doğru cevap verin.
              </p>
              <button
                onClick={startGame}
                className="mt-5 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
              >
                Başla
              </button>
            </div>
          ) : timeLeft <= 0 ? (
            <div className="py-10">
              <p className="text-lg font-semibold">Süre bitti!</p>
              <p className="mt-2 text-black/70">
                Skor: {score} • Doğruluk: %{accuracy} ({correct}/{total})
              </p>
              <button
                onClick={startGame}
                className="mt-5 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
              >
                Tekrar Oyna
              </button>
            </div>
          ) : trial ? (
            <div>
              <div className="py-8">
                <span
                  className={`select-none text-5xl font-extrabold tracking-wide ${trial.inkClass}`}
                >
                  {trial.label}
                </span>
              </div>
              <div className="mx-auto grid max-w-2xl grid-cols-2 gap-3">
                {trial.options.map((opt, i) => (
                  <button
                    key={opt.id}
                    onClick={() => handleAnswer(opt.id)}
                    className={`flex items-center justify-center rounded-xl border px-4 py-3 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 ${
                      BUTTON_STYLES[opt.id]
                    }`}
                    aria-label={`Seçenek ${i + 1}: ${opt.label}`}
                  >
                    <span className="mr-2 inline-block h-3 w-3 rounded-full bg-current opacity-80" />
                    <span>
                      {i + 1}. {opt.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="py-10 text-black/60">Yükleniyor…</div>
          )}
        </div>

        <div className="mt-5 text-xs text-black/50">
          İpucu: Kelimeyi değil, rengi &quot;sesli&quot; olarak söylemeye
          çalışın; bu, doğru seçimi hızlandırır.
        </div>
      </section>

      <section className="mt-6 rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">Bu etkinlik neyi geliştirir?</h2>
        <p className="mt-2 text-sm text-black/70">
          Stroop etkisi etkinliği; seçici dikkat, tepki baskılama (inhibisyon),
          bilişsel esneklik ve işlem hızı gibi yürütücü işlevleri güçlendirmeye
          yardımcı olur. Yazı rengini hızlı ve doğru seçmek, otomatik okuma
          alışkanlığını baskılayıp doğru uyaranı seçmeyi öğretir.
        </p>
        <div className="mt-3 flex flex-wrap gap-2 text-xs">
          <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 font-semibold text-emerald-700">
            Seçici Dikkat
          </span>
          <span className="rounded-full border border-rose-200 bg-rose-50 px-3 py-1 font-semibold text-rose-700">
            İnhibisyon
          </span>
          <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 font-semibold text-sky-700">
            Bilişsel Esneklik
          </span>
          <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 font-semibold text-amber-700">
            İşlem Hızı
          </span>
          <span className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 font-semibold text-indigo-700">
            Tepki Kontrolü
          </span>
        </div>
      </section>

      <section className="mt-6 rounded-2xl border border-rose-200 bg-gradient-to-r from-rose-50 to-orange-50 p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-base font-bold text-rose-800">
            Bunun gibi 50’den fazla farklı etkinlik için paketlerimizden satın
            alın.
          </p>
          <Link
            href="/sayfalar/kurslar"
            className="rounded-full bg-gradient-to-r from-rose-500 to-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
          >
            Paketleri Gör
          </Link>
        </div>
      </section>
    </main>
  );
}
