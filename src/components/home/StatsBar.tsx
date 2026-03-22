const stats = [
  { value: "15+", label: "ปีประสบการณ์" },
  { value: "2,000+", label: "ยูนิตที่ขายแล้ว" },
  { value: "5★", label: "คะแนนความพึงพอใจ" },
  { value: "30+", label: "ชาติที่เป็นลูกค้า" },
];

export default function StatsBar() {
  return (
    <section className="bg-navy-800 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat) => (
          <div key={stat.label} className="text-white">
            <div className="font-serif text-3xl md:text-4xl font-bold text-gold-400 mb-1">
              {stat.value}
            </div>
            <div className="text-gray-400 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
