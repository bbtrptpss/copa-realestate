"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1920&q=80",
    badge: "NEW PROJECT",
    badgeColor: "bg-gold-500",
    title: "Copa Coral Reef",
    subtitle: "Luxury High-Rise ริมหาดจอมเทียน วิวทะเลพาโนรามา 180°",
    location: "หาดจอมเทียน พัทยา",
    type: "คอนโดมิเนียม",
    beds: "1–3",
    baths: "1–2",
  },
  {
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80",
    badge: "READY TO MOVE",
    badgeColor: "bg-green-500",
    title: "Copa Beach Jomtien",
    subtitle: "คอนโดหรูพร้อมอยู่ ติดหาด สิ่งอำนวยความสะดวกระดับ 5 ดาว",
    location: "หาดจอมเทียน พัทยา",
    type: "คอนโดมิเนียม",
    beds: "1–2",
    baths: "1",
  },
  {
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80",
    badge: "UPCOMING",
    badgeColor: "bg-navy-600",
    title: "Copa Azure Villa",
    subtitle: "วิลล่าส่วนตัวพร้อมสระว่ายน้ำ บนทำเลหรู วิวทะเลและภูเขา",
    location: "พัทยาเหนือ ชลบุรี",
    type: "วิลล่า",
    beds: "3–5",
    baths: "3–5",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const go = (dir: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + dir + slides.length) % slides.length);
      setAnimating(false);
    }, 400);
  };

  useEffect(() => {
    const timer = setInterval(() => go(1), 7000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const slide = slides[current];

  return (
    <section className="relative h-screen min-h-[640px] overflow-hidden bg-navy-900">
      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current && !animating ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
        </div>
      ))}

      {/* Top Center: COPA REAL ESTATE brand */}
      <div className="absolute top-28 left-1/2 -translate-x-1/2 text-center z-10">
        <div className="text-gold-400 text-xs font-semibold tracking-[0.3em] uppercase">
          Copa Real Estate
        </div>
      </div>

      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 pb-32">
        <span
          className={`${slide.badgeColor} text-white text-[11px] font-bold tracking-widest uppercase px-4 py-1.5 mb-6 inline-block`}
        >
          {slide.badge}
        </span>
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4 leading-tight">
          {slide.title}
        </h1>
        <p className="text-gray-200 text-base md:text-lg max-w-2xl mb-8 leading-relaxed">
          {slide.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link href="/projects" className="btn-primary">
            ดูรายละเอียด
          </Link>
          <Link href="/contact" className="btn-outline">
            นัดชมโชว์รูม
          </Link>
        </div>
      </div>

      {/* Bottom info bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-sm text-white/80">
            <span className="text-gold-400 font-semibold">{slide.type}</span>
            <span className="hidden sm:flex items-center gap-1.5">
              <svg className="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              {slide.location}
            </span>
            <span className="hidden md:flex items-center gap-3 text-xs text-white/60">
              <span>{slide.beds} Beds</span>
              <span>·</span>
              <span>{slide.baths} Baths</span>
            </span>
          </div>

          {/* Slide controls */}
          <div className="flex items-center gap-4">
            {/* Dots */}
            <div className="flex gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setAnimating(true); setTimeout(() => { setCurrent(i); setAnimating(false); }, 400); }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "bg-gold-400 w-6" : "bg-white/40 w-2"
                  }`}
                />
              ))}
            </div>
            {/* Arrows */}
            <div className="flex gap-1">
              <button
                onClick={() => go(-1)}
                className="w-8 h-8 border border-white/30 text-white hover:bg-gold-500 hover:border-gold-500 transition-all flex items-center justify-center"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => go(1)}
                className="w-8 h-8 border border-white/30 text-white hover:bg-gold-500 hover:border-gold-500 transition-all flex items-center justify-center"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white/40 animate-bounce z-10">
        <ChevronDown size={22} />
      </div>
    </section>
  );
}
