import Link from "next/link";

const awards = [
  {
    year: "2024",
    org: "THAILAND PROPERTY AWARDS",
    title: "Best Luxury Condo Development (Eastern Seaboard)",
  },
  {
    year: "2024",
    org: "DOT PROPERTY AWARDS",
    title: "Best Residential Development Pattaya",
  },
  {
    year: "2023",
    org: "ASIA PACIFIC PROPERTY AWARDS",
    title: "5-Star Highly Commended – Thailand",
  },
  {
    year: "2023",
    org: "REAL ESTATE EXCELLENCE AWARDS",
    title: "Outstanding Developer of the Year",
  },
];

const stats = [
  { value: "15+", label: "ปีประสบการณ์" },
  { value: "2,000+", label: "ยูนิตที่ขายแล้ว" },
  { value: "30+", label: "สัญชาติลูกค้า" },
  { value: "5★", label: "ความพึงพอใจ" },
];

export default function AwardsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 pb-16 border-b border-gray-100">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-serif text-4xl md:text-5xl font-bold text-gold-500 mb-2">
                {s.value}
              </div>
              <div className="text-gray-500 text-sm">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Awards */}
        <div className="text-center mb-14">
          <p className="section-subtitle">รางวัลและการยอมรับ</p>
          <h2 className="section-title mb-4">CORPORATE AWARDS</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {awards.map((award) => (
            <div
              key={award.title}
              className="flex gap-6 p-6 border border-gray-100 hover:border-gold-200 hover:shadow-md transition-all duration-300 group"
            >
              <div className="shrink-0 text-center">
                <div className="font-serif text-2xl font-bold text-gold-500">{award.year}</div>
              </div>
              <div className="border-l border-gray-200 pl-6">
                <div className="text-[11px] font-bold tracking-widest uppercase text-gray-400 mb-1.5">
                  {award.org}
                </div>
                <div className="font-serif text-base font-semibold text-navy-700 group-hover:text-gold-600 transition-colors">
                  {award.title}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/about" className="btn-primary">
            View All Awards
          </Link>
        </div>
      </div>
    </section>
  );
}
