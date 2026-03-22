import Link from "next/link";

const moments = [
  { label: "ริมทะเล", icon: "🌊" },
  { label: "วิวพาโนรามา", icon: "🏔️" },
  { label: "สระว่ายน้ำ", icon: "🏊" },
  { label: "ฟิตเนส", icon: "💪" },
  { label: "Co-Working", icon: "💼" },
  { label: "สวนส่วนตัว", icon: "🌿" },
];

export default function BrandStorySection() {
  return (
    <section className="bg-navy-900 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-gold-400 text-xs font-semibold tracking-[0.35em] uppercase mb-6">
              Our Story
            </p>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-white leading-tight mb-2">
              ทุกวัน…
            </h2>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-gold-400 leading-tight mb-8">
              ชีวิตดีกว่า
            </h2>
            <div className="w-12 h-0.5 bg-gold-500 mb-8" />
            <p className="text-gray-300 leading-relaxed mb-6 text-base">
              บ้านคือจุดเริ่มต้นของชีวิตที่ดี Copa Real Estate ได้รับแรงบันดาลใจจากชายหาด Copacabana
              ระดับโลกในรีโอ เด จาเนโร เพื่อสร้างพื้นที่พักอาศัยที่ไม่ใช่แค่ที่อยู่อาศัย
              แต่คือประสบการณ์ชีวิตที่เต็มเปี่ยม
            </p>
            <p className="text-gray-400 leading-relaxed mb-10 text-sm">
              ค้นพบ 6 รูปแบบชีวิตที่เราออกแบบมาเพื่อคุณ ทุกโมงยามของทุกวัน
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border border-gold-400 text-gold-400 hover:bg-gold-500 hover:text-white px-7 py-3 text-sm font-semibold tracking-widest uppercase transition-all duration-300"
            >
              The Good Life
            </Link>
          </div>

          {/* Right: Moments Grid */}
          <div className="grid grid-cols-3 gap-px bg-white/10 border border-white/10">
            {moments.map((m) => (
              <div
                key={m.label}
                className="flex flex-col items-center justify-center py-10 bg-navy-800 hover:bg-navy-700 transition-colors duration-300 cursor-default group"
              >
                <span className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {m.icon}
                </span>
                <span className="text-white text-xs tracking-wide font-medium">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
