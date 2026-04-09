import { Metadata } from "next";
import { CheckCircle2, Award, Users, Building2, Globe } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา | Copacabana Group",
  description: "Copacabana Group ผู้พัฒนาอสังหาริมทรัพย์ระดับ Luxury ริมทะเลพัทยา จอมเทียน มากกว่า 15 ปีประสบการณ์",
};

const milestones = [
  { year: "2008", event: "ก่อตั้ง Copacabana Group" },
  { year: "2012", event: "เปิดตัวโปรเจกต์แรก Copa Beach" },
  { year: "2016", event: "ขยาย 1,000 ยูนิต" },
  { year: "2020", event: "รางวัล Best Developer Pattaya" },
  { year: "2023", event: "เปิดตัว Copa Coral Reef" },
  { year: "2027", event: "Copa Coral Reef แล้วเสร็จ" },
];

const values = [
  { icon: Award, title: "คุณภาพระดับโลก", desc: "วัสดุและการก่อสร้างที่ผ่านการคัดเลือกอย่างพิถีพิถัน" },
  { icon: Users, title: "ลูกค้าเป็นศูนย์กลาง", desc: "บริการหลังการขายและดูแลลูกค้าตลอดชีวิต" },
  { icon: Building2, title: "ทำเลทองเหนือระดับ", desc: "เลือกสรรทุกโปรเจกต์บนทำเลที่ดีที่สุดเท่านั้น" },
  { icon: Globe, title: "มาตรฐานสากล", desc: "ออกแบบและพัฒนาโดยทีมผู้เชี่ยวชาญระดับนานาชาติ" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-64 md:h-96 flex items-center justify-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&q=80"
          alt="About Copa"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-900/70" />
        <div className="relative text-center text-white px-4">
          <p className="text-gold-400 text-sm tracking-widest uppercase mb-3">เกี่ยวกับเรา</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold">Copacabana Group</h1>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-subtitle">เรื่องราวของเรา</p>
              <h2 className="section-title mb-6">มากกว่า 15 ปี <br />ในวงการอสังหาริมทรัพย์</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Copacabana Group ได้รับแรงบันดาลใจจากชายหาด Copacabana อันโด่งดังในรีโอ เด จาเนโร
                ประเทศบราซิล ซึ่งเป็นชายหาดระดับโลกที่มีความยาว 5 กิโลเมตร
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                เราพัฒนาโปรเจกต์คอนโดหรูริมทะเลบนทำเลทองแห่งจอมเทียน พัทยา
                ด้วยวิสัยทัศน์ที่ต้องการมอบประสบการณ์ชีวิตริมทะเลที่เหนือระดับ
                ตอบสนองไลฟ์สไตล์สมัยใหม่ทั้งชาวไทยและต่างชาติ
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                ด้วยประสบการณ์กว่า 15 ปี เราภูมิใจที่ได้ส่งมอบยูนิตคุณภาพกว่า 2,000 ยูนิต
                ให้กับลูกค้าจากกว่า 30 ประเทศทั่วโลก
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/projects" className="btn-primary" style={{ background: "#d4a017" }}>ดูโปรเจกต์ของเรา</Link>
                <Link href="/contact" className="inline-flex items-center gap-2 border-2 border-navy-700 text-navy-700 px-6 py-3 font-semibold rounded-sm hover:bg-navy-700 hover:text-white transition-all duration-300 tracking-wide text-sm uppercase">
                  ติดต่อเรา
                </Link>
              </div>
            </div>
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80"
                alt="About"
                className="w-full h-[450px] object-cover rounded-sm"
              />
              <div className="absolute -bottom-6 -left-6 bg-gold-500 text-white p-6 rounded-sm hidden md:block">
                <div className="font-serif text-4xl font-bold">15+</div>
                <div className="text-sm mt-1">ปีประสบการณ์</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="section-subtitle">ค่านิยมของเรา</p>
            <h2 className="section-title">สิ่งที่เราเชื่อและยึดมั่น</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="text-center group">
                <div className="w-16 h-16 bg-navy-700 group-hover:bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-5 transition-colors duration-300">
                  <v.icon size={28} className="text-white" />
                </div>
                <h3 className="font-serif font-bold text-navy-700 mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-navy-800">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="text-gold-400 text-sm tracking-widest uppercase mb-3">ประวัติความเป็นมา</p>
            <h2 className="font-serif text-3xl font-bold text-white">เส้นทางของเรา</h2>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/20" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={m.year} className={`flex flex-col md:flex-row gap-6 items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 text-center md:text-right ${i % 2 !== 0 ? "md:text-left" : ""}`}>
                    <div className="text-gold-400 font-bold text-xl mb-1">{m.year}</div>
                    <div className="text-white text-sm">{m.event}</div>
                  </div>
                  <div className="w-4 h-4 bg-gold-500 rounded-full shrink-0 z-10" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <p className="section-subtitle">ความสำเร็จ</p>
          <h2 className="section-title mb-4">รางวัลที่เราภาคภูมิใจ</h2>
          <div className="grid sm:grid-cols-3 gap-8 mt-12">
            {[
              { award: "Best Developer Pattaya 2020", org: "Thailand Property Awards" },
              { award: "Luxury Condo of the Year 2021", org: "Asia Pacific Property Awards" },
              { award: "Green Building Award 2022", org: "Thailand Green Building Institute" },
            ].map((a) => (
              <div key={a.award} className="border border-gold-200 rounded-sm p-8">
                <Award size={40} className="text-gold-500 mx-auto mb-4" />
                <h3 className="font-serif font-bold text-navy-700 mb-2">{a.award}</h3>
                <p className="text-gray-400 text-sm">{a.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
