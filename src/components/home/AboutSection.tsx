import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const features = [
  "ทำเลทองติดชายหาดจอมเทียน",
  "วิวทะเลพาโนรามา 360 องศา",
  "สิ่งอำนวยความสะดวกระดับ 5 ดาว",
  "ผลตอบแทนการลงทุนสูง",
  "ทีมบริการหลังการขายมืออาชีพ",
];

export default function AboutSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80"
                alt="Copa Real Estate"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-navy-800 text-white p-6 rounded-sm shadow-2xl hidden md:block">
              <div className="font-serif text-4xl font-bold text-gold-400">2027</div>
              <div className="text-sm text-gray-300 mt-1">โปรเจกต์ล่าสุด</div>
              <div className="text-xs text-gray-400">Copa Coral Reef</div>
            </div>
            {/* Gold accent line */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-gold-500 hidden md:block" />
          </div>

          {/* Content Side */}
          <div>
            <p className="section-subtitle">เกี่ยวกับเรา</p>
            <h2 className="section-title mb-6">
              ผู้พัฒนาอสังหาริมทรัพย์ <br />
              ระดับแนวหน้าของพัทยา
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Copa Real Estate ได้รับแรงบันดาลใจจากชายหาด Copacabana ระดับโลกในรีโอ เด จาเนโร ประเทศบราซิล
              เราพัฒนาโปรเจกต์อสังหาริมทรัพย์ระดับ Luxury บนทำเลทองริมหาดจอมเทียน
              เพื่อตอบสนองไลฟ์สไตล์สมัยใหม่และเพิ่มสีสันให้กับชีวิตริมทะเล
            </p>
            <ul className="space-y-3 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-gray-700 text-sm">
                  <CheckCircle2 size={18} className="text-gold-500 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Link href="/about" className="btn-primary" style={{ background: "#d4a017" }}>
              อ่านเพิ่มเติม
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
