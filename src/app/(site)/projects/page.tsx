import { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "โปรเจกต์ทั้งหมด | Copa Real Estate",
  description: "ดูโปรเจกต์คอนโดหรูทั้งหมดของ Copa Real Estate ริมทะเลพัทยา จอมเทียน",
};

const projects = [
  {
    id: "1",
    title: "Copa Beach Jomtien",
    subtitle: "Beachfront Luxury Redefined",
    location: "หาดจอมเทียน พัทยา ชลบุรี",
    status: "available",
    priceRange: "เริ่ม 2.5 ล้านบาท",
    units: "450 ยูนิต",
    floors: "34 ชั้น",
    completion: "พร้อมโอน",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    slug: "copa-beach-jomtien",
    description: "คอนโดหรูริมหาดจอมเทียน วิวทะเลพาโนรามาอ่าวไทย พร้อมสิ่งอำนวยความสะดวกระดับ 5 ดาว",
    highlights: ["ติดชายหาดจอมเทียน", "สระว่ายน้ำ Infinity", "ฟิตเนส & Spa", "ที่จอดรถ 100%"],
  },
  {
    id: "2",
    title: "Copa Coral Reef",
    subtitle: "Where Luxury Meets the Sea",
    location: "หาดจอมเทียน พัทยา ชลบุรี",
    status: "construction",
    priceRange: "เริ่ม 3.2 ล้านบาท",
    units: "520 ยูนิต",
    floors: "45 ชั้น",
    completion: "Q4 2027",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80",
    slug: "copa-coral-reef",
    description: "High-Rise Luxury คอนโดแห่งใหม่ล่าสุด ออกแบบโดยสถาปนิกระดับโลก มีแผ่นดินแดนแห่งความสมบูรณ์แบบ",
    highlights: ["High-Rise 45 ชั้น", "Sky Pool ชั้น 44", "Sky Garden", "EV Charging Station"],
  },
];

const statusMap: Record<string, { label: string; color: string; bg: string }> = {
  available: { label: "พร้อมขาย", color: "text-green-700", bg: "bg-green-100" },
  construction: { label: "กำลังก่อสร้าง", color: "text-amber-700", bg: "bg-amber-100" },
  sold_out: { label: "ขายหมดแล้ว", color: "text-red-700", bg: "bg-red-100" },
};

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&q=80" alt="Projects" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy-900/70" />
        <div className="relative text-center text-white px-4">
          <p className="text-gold-400 text-sm tracking-widest uppercase mb-3">โปรเจกต์ของเรา</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold">คอนโดหรูที่เราพัฒนา</h1>
        </div>
      </section>

      {/* Projects List */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom space-y-16">
          {projects.map((p, i) => {
            const status = statusMap[p.status];
            return (
              <div key={p.id} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                {/* Image */}
                <div className={`relative overflow-hidden rounded-sm group ${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className={`absolute top-4 left-4 ${status.bg} ${status.color} text-xs font-semibold px-3 py-1 rounded-full`}>
                    {status.label}
                  </span>
                </div>

                {/* Content */}
                <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                  <p className="section-subtitle">{p.subtitle}</p>
                  <h2 className="section-title mb-3">{p.title}</h2>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                    <MapPin size={14} className="text-gold-500" />
                    {p.location}
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">{p.description}</p>

                  {/* Specs */}
                  <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-y border-gray-100">
                    <div>
                      <div className="text-gray-400 text-xs mb-1">จำนวนยูนิต</div>
                      <div className="font-bold text-navy-700 text-sm">{p.units}</div>
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs mb-1">ความสูง</div>
                      <div className="font-bold text-navy-700 text-sm">{p.floors}</div>
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs mb-1">แล้วเสร็จ</div>
                      <div className="font-bold text-navy-700 text-sm">{p.completion}</div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="grid grid-cols-2 gap-2 mb-6">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-4">
                    <div>
                      <div className="text-gray-400 text-xs">ราคาเริ่มต้น</div>
                      <div className="font-bold text-gold-600 text-lg">{p.priceRange}</div>
                    </div>
                    <Link
                      href={`/projects/${p.slug}`}
                      className="ml-auto inline-flex items-center gap-2 bg-navy-700 hover:bg-gold-500 text-white px-5 py-2.5 text-sm font-semibold rounded-sm transition-colors duration-300"
                    >
                      ดูรายละเอียด <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-800 text-center px-4">
        <h2 className="font-serif text-3xl font-bold text-white mb-4">สนใจโปรเจกต์ของเรา?</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">ติดต่อทีมงานของเราเพื่อรับข้อมูลเพิ่มเติมและนัดชมโชว์รูมฟรี</p>
        <Link href="/contact" className="btn-primary" style={{ background: "#d4a017" }}>
          ติดต่อเราวันนี้
        </Link>
      </section>
    </>
  );
}
