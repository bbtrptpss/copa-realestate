import { Award, Gem, ShieldCheck } from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "รางวัลแห่งความเป็นเลิศ",
    desc: "Copacabana Group ได้รับการยอมรับในระดับนานาชาติ ด้วยรางวัล Best Luxury Condo Development ติดต่อกัน 3 ปีซ้อน",
  },
  {
    icon: Gem,
    title: "คุณภาพระดับ Luxury",
    desc: "เราใส่ใจทุกรายละเอียดในการออกแบบและก่อสร้าง วัสดุระดับพรีเมียม สิ่งอำนวยความสะดวก 5 ดาวครบครัน",
  },
  {
    icon: ShieldCheck,
    title: "บริการครบจบในที่เดียว",
    desc: "ตั้งแต่คำปรึกษา การเงิน การจัดการทรัพย์สิน และบริการหลังการขาย ดูแลคุณอย่างครบวงจร",
  },
];

export default function WhyCopaSection() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {highlights.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center px-10 py-12 group hover:bg-gold-50 transition-colors duration-300"
            >
              <div className="w-14 h-14 border border-gold-300 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold-500 group-hover:border-gold-500 transition-all duration-300">
                <Icon
                  size={24}
                  className="text-gold-500 group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="font-serif text-lg font-bold text-navy-700 mb-3">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
