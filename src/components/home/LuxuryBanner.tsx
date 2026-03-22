import Link from "next/link";

export default function LuxuryBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="relative h-[420px] md:h-[500px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&q=80"
          alt="Copa Luxury Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-900/75" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <p className="text-gold-400 text-xs font-semibold tracking-[0.4em] uppercase mb-5">
          The Forefront of Luxury
        </p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight max-w-3xl">
          Copa Luxury Collection
        </h2>
        <div className="w-16 h-px bg-gold-500 mb-6" />
        <p className="text-gray-300 text-base md:text-lg max-w-xl mb-10 leading-relaxed">
          คัดสรรเฉพาะทำเลพรีเมียมที่สุด วัสดุระดับโลก และการออกแบบโดยสถาปนิกรางวัลนานาชาติ
          เพื่อชีวิตที่เหนือกว่าความหรูหราธรรมดา
        </p>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 border border-gold-400 text-gold-400 hover:bg-gold-500 hover:text-white hover:border-gold-500 px-8 py-3 text-sm font-semibold tracking-widest uppercase transition-all duration-300"
        >
          More Detail
        </Link>
      </div>
    </section>
  );
}
