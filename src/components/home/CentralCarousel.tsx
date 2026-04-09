"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { t } from "@/lib/i18n";
import { useI18n } from "@/components/providers/I18nProvider";
import img1 from "@/Picture/Central/SALELKITS 2025121210.jpg";
import img2 from "@/Picture/Central/SALELKITS 2025121211.jpg";
import img3 from "@/Picture/Central/SALELKITS 2025121212.jpg";
import img4 from "@/Picture/Central/SALELKITS 2025121213.jpg";
import img5 from "@/Picture/Central/SALELKITS 2025121218.jpg";

const slides = [
  { id: 1, src: img1, label: "ส่วนกลาง" },
  { id: 2, src: img2, label: "ส่วนกลาง" },
  { id: 3, src: img3, label: "ส่วนกลาง" },
  { id: 4, src: img4, label: "ส่วนกลาง" },
  { id: 5, src: img5, label: "ส่วนกลาง" },
];

const CARD_W  = 420;
const CARD_H  = 580;
const X_GAP   = 340;
const Z_DEPTH = 140;

export default function CentralCarousel() {
  const { lang } = useI18n();
  const [active, setActive] = useState(0);
  const [expandedSlide, setExpandedSlide] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = slides.length;

  const go = useCallback((dir: 1 | -1) => {
    setActive((i) => (i + dir + total) % total);
  }, [total]);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => go(1), 3000);
  }, [go]);

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [startTimer]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpandedSlide(null);
    };

    if (expandedSlide !== null) {
      window.addEventListener("keydown", onKeyDown);
    }

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [expandedSlide]);

  const pause = () => { if (timerRef.current) clearInterval(timerRef.current); };
  const resume = () => startTimer();

  return (
    <section className="bg-white py-24">
      <div className="text-center mb-16 px-4">
        <p className="text-gold-500 text-xs font-semibold tracking-[0.35em] uppercase mb-4">{t.central.sectionLabel[lang]}</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900">{t.central.sectionTitle[lang]}</h2>
        <div className="w-12 h-0.5 bg-gold-500 mx-auto mt-5" />
      </div>

      {/* Stage */}
      <div
        className="relative mx-auto flex items-center justify-center"
        style={{ height: CARD_H + 100, perspective: 1200, perspectiveOrigin: "50% 40%" }}
        onMouseEnter={pause}
        onMouseLeave={resume}
      >
        {slides.map((slide, i) => {
          let dist = i - active;
          if (dist >  total / 2) dist -= total;
          if (dist < -total / 2) dist += total;

          const abs      = Math.abs(dist);
          const sign     = dist === 0 ? 0 : dist / abs;
          const isActive = dist === 0;
          const tx         = dist * X_GAP;
          const tz         = -abs * Z_DEPTH;
          const zIdx       = total - abs;
          const scale      = isActive ? 1 : 1 - abs * 0.06;
          const brightness = isActive ? 1 : Math.max(0.35, 0.75 - abs * 0.15);

          return (
            <div
              key={slide.id}
              onClick={() => !isActive && go(sign as 1 | -1)}
              className="group"
              style={{
                position: "absolute",
                width: CARD_W,
                height: CARD_H,
                borderRadius: 28,
                overflow: "hidden",
                cursor: isActive ? "default" : "pointer",
                zIndex: zIdx,
                transform: `translate3d(${tx}px, 0, ${tz}px) scale(${scale})`,
                filter: `brightness(${brightness})`,
                transition: "transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.6s ease",
                boxShadow: isActive ? "0 32px 64px rgba(0,0,0,0.25)" : "0 8px 24px rgba(0,0,0,0.12)",
              }}
            >
              <Image
                src={slide.src}
                alt={slide.label}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                sizes="300px"
              />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)",
              }} />
              {isActive && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpandedSlide(i);
                  }}
                  className="absolute bottom-4 right-4 z-20 h-10 w-10 rounded-full bg-white/90 hover:bg-white text-navy-900 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
                  aria-label={t.central.expand[lang]}
                  title={t.central.expand[lang]}
                >
                  <Expand size={18} />
                </button>
              )}
            </div>
          );
        })}

        {/* Arrows */}
        <button
          onClick={() => go(-1)}
          className="absolute left-4 z-50 w-11 h-11 bg-white/90 hover:bg-white border border-gray-200 rounded-full flex items-center justify-center transition-all shadow-md"
          style={{ top: "45%" }}
        >
          <ChevronLeft size={22} className="text-navy-800" />
        </button>
        <button
          onClick={() => go(1)}
          className="absolute right-4 z-50 w-11 h-11 bg-white/90 hover:bg-white border border-gray-200 rounded-full flex items-center justify-center transition-all shadow-md"
          style={{ top: "45%" }}
        >
          <ChevronRight size={22} className="text-navy-800" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`rounded-full transition-all duration-300 ${
              i === active ? "w-6 h-2 bg-gold-500" : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

      {expandedSlide !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4"
          onClick={() => setExpandedSlide(null)}
        >
          <div
            className="relative w-full max-w-6xl aspect-[16/10] bg-black rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={slides[expandedSlide].src}
              alt={t.central.imageAlt[lang]}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
            <button
              type="button"
              onClick={() => setExpandedSlide(null)}
              className="absolute top-3 right-3 h-10 w-10 rounded-full bg-white/90 hover:bg-white text-black shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              aria-label={t.central.close[lang]}
              title={t.central.close[lang]}
            >
              <X size={18} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
