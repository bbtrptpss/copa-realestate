"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import heroImg1 from "@/Picture/Hero/548278033_122237085176059484_3185706982480369567_n.jpg";
import heroImg2 from "@/Picture/Hero/556223350_122239180160059484_7263648384038990420_n.jpg";

const slides = [
  {
    image: heroImg1,
    badge: "NEW PROJECT",
    badgeColor: "bg-gold-500",
    title: "Copa Coral Reef",
    subtitle: "Luxury High-Rise ริมหาดจอมเทียน วิวทะเลพาโนรามา 180°",
    location: "หาดจอมเทียน พัทยา",
    type: "คอนโดมิเนียม",
  },
  {
    image: heroImg2,
    badge: "READY TO MOVE IN",
    badgeColor: "bg-green-500",
    title: "Copa Beach Jomtien",
    subtitle: "คอนโดหรูพร้อมอยู่ ติดหาด สิ่งอำนวยความสะดวกระดับ 5 ดาว",
    location: "หาดจอมเทียน พัทยา",
    type: "คอนโดมิเนียม",
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
          <Image src={s.image} alt={s.title} fill className="object-cover" priority={i === 0} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
        </div>
      ))}

      {/* Top Center: COPA REAL ESTATE brand */}
      <div className="absolute top-28 left-1/2 -translate-x-1/2 text-center z-10">
        <div className="text-gold-400 text-xs font-semibold tracking-[0.3em] uppercase">
          Copacabana Group
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
        <div className="hidden sm:flex flex-col sm:flex-row gap-4 items-center">
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
          <div className="relative flex-1 overflow-hidden">
            <div className="flex w-max whitespace-nowrap text-sm text-white/80 animate-[heroTicker_20s_linear_infinite]">
              <span className="inline-flex items-center gap-3 pr-10">
                <span className="text-gold-400 font-semibold">{slide.type}</span>
                <span className="inline-flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  {slide.location}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.895 1.368l1.09 3.272a2 2 0 01-.538 2.094L8.03 11.43a16 16 0 006.54 6.54l1.696-1.696a2 2 0 012.094-.538l3.272 1.09A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C9.716 23 1 14.284 1 4V3a2 2 0 012-2z" /></svg>
                  +66 (0) 96 251 1155
                </span>
              </span>
              <span className="inline-flex items-center gap-3 pr-10" aria-hidden="true">
                <span className="text-gold-400 font-semibold">{slide.type}</span>
                <span className="inline-flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  {slide.location}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.895 1.368l1.09 3.272a2 2 0 01-.538 2.094L8.03 11.43a16 16 0 006.54 6.54l1.696-1.696a2 2 0 012.094-.538l3.272 1.09A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C9.716 23 1 14.284 1 4V3a2 2 0 012-2z" /></svg>
                  +66 (0) 96 251 1155
                </span>
              </span>
            </div>
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

      <style jsx>{`
        @keyframes heroTicker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
