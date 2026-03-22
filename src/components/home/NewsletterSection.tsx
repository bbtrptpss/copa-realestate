"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="bg-navy-800 py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        {!submitted ? (
          <>
            <p className="text-gold-400 text-xs font-semibold tracking-[0.35em] uppercase mb-4">
              Newsletter
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              รับข่าวสารและสิทธิพิเศษ
            </h2>
            <p className="text-gray-400 text-sm mb-8">
              กรอกอีเมลเพื่อรับข้อมูลโปรเจกต์ใหม่ โปรโมชั่นพิเศษ และข่าวสารจาก Copa Real Estate ก่อนใคร
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="กรอกอีเมลของคุณ"
                className="flex-1 bg-white/10 border border-white/20 text-white placeholder-gray-500 px-5 py-3 text-sm focus:outline-none focus:border-gold-400 transition-colors"
              />
              <button
                type="submit"
                className="bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-3 text-sm tracking-wide uppercase transition-colors duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-gray-500 text-xs mt-4">
              ยินยอมให้ Copa Real Estate รวบรวมและใช้ข้อมูลส่วนบุคคลตาม{" "}
              <a href="#" className="text-gold-400 hover:underline">นโยบายความเป็นส่วนตัว</a>
            </p>
          </>
        ) : (
          <div>
            <div className="text-gold-400 text-5xl mb-6">✓</div>
            <h2 className="font-serif text-3xl font-bold text-white mb-3">ขอบคุณที่ลงทะเบียน</h2>
            <p className="text-gray-400 text-sm">
              เราจะส่งข่าวสารและข้อเสนอพิเศษจาก Copa Real Estate มาให้คุณเร็วๆ นี้
            </p>
            <button
              onClick={() => { setSubmitted(false); setEmail(""); }}
              className="mt-8 text-gold-400 text-sm underline hover:no-underline"
            >
              CLOSE
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
