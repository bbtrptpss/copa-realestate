import { Star } from "lucide-react";

const testimonials = [
  {
    name: "คุณสมชาย วงศ์ทอง",
    role: "นักลงทุน จากกรุงเทพฯ",
    text: "ซื้อคอนโดกับ Copa มาแล้ว 2 ยูนิต บริการดีมาก ทีมงานให้ข้อมูลครบถ้วน ผลตอบแทนดีกว่าที่คิดไว้มาก",
    rating: 5,
  },
  {
    name: "Ms. Sarah Johnson",
    role: "Expat, United Kingdom",
    text: "Amazing location and professional team. The sea view from my unit is breathtaking. Best investment I've made in Thailand.",
    rating: 5,
  },
  {
    name: "คุณมาลี ใจดี",
    role: "ลูกค้าจากเชียงใหม่",
    text: "ชอบมากค่ะ ห้องสวย วิวดี ใกล้ทะเล ทีมงานดูแลดีตั้งแต่ต้นจนจบ แนะนำเลยค่ะ",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-navy-700">
      <div className="container-custom">
        <div className="text-center mb-14">
          <p className="text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3">
            รีวิวจากลูกค้า
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            สิ่งที่ลูกค้าพูดถึงเรา
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/10 backdrop-blur rounded-sm p-7 border border-white/10">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="text-gold-400 fill-gold-400" />
                ))}
              </div>
              <p className="text-gray-200 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="border-t border-white/10 pt-4">
                <div className="font-semibold text-white text-sm">{t.name}</div>
                <div className="text-gray-400 text-xs mt-0.5">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
