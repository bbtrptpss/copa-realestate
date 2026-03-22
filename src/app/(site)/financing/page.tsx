import { Metadata } from "next";
import { CheckCircle2, Calculator, CreditCard, FileText, Phone } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "การเงินและสินเชื่อ | Copa Real Estate",
  description: "ข้อมูลการเงิน สินเชื่อ และแผนการผ่อนชำระสำหรับคอนโด Copa Real Estate พัทยา จอมเทียน",
};

const steps = [
  { icon: FileText, title: "1. จองยูนิต", desc: "ชำระเงินจอง 50,000 บาท เพื่อสำรองยูนิตที่คุณเลือก" },
  { icon: CreditCard, title: "2. ทำสัญญา", desc: "ชำระเงินดาวน์ 10-20% ตามเงื่อนไข ภายใน 30 วัน" },
  { icon: Calculator, title: "3. ผ่อนดาวน์", desc: "ผ่อนชำระในระหว่างก่อสร้าง ตามตารางที่กำหนด" },
  { icon: CheckCircle2, title: "4. โอนกรรมสิทธิ์", desc: "ชำระส่วนที่เหลือและรับกุญแจเข้าอยู่อาศัย" },
];

const packages = [
  {
    name: "แพ็กเกจ Cash",
    discount: "ส่วนลดพิเศษ 5%",
    highlight: true,
    features: ["ชำระครั้งเดียว", "ส่วนลดสูงสุด", "โอนได้ทันที", "ไม่มีค่าใช้จ่ายแฝง"],
  },
  {
    name: "ผ่อนกับโครงการ",
    discount: "0% นาน 24 เดือน",
    highlight: false,
    features: ["ดาวน์ 20%", "ผ่อน 0% 24 เดือน", "ไม่ต้องกู้ธนาคาร", "อนุมัติง่าย รวดเร็ว"],
  },
  {
    name: "สินเชื่อธนาคาร",
    discount: "กู้ได้สูงสุด 90%",
    highlight: false,
    features: ["ดาวน์เพียง 10%", "ผ่อนได้นาน 30 ปี", "อัตราดอกเบี้ยต่ำ", "มีธนาคารพาร์ทเนอร์"],
  },
];

export default function FinancingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&q=80" alt="Financing" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy-900/70" />
        <div className="relative text-center text-white px-4">
          <p className="text-gold-400 text-sm tracking-widest uppercase mb-3">การเงิน</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold">แผนการซื้อและชำระเงิน</h1>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="section-subtitle">ขั้นตอนการซื้อ</p>
            <h2 className="section-title">ง่ายแค่ 4 ขั้นตอน</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.title} className="text-center relative">
                <div className="w-16 h-16 bg-navy-700 rounded-full flex items-center justify-center mx-auto mb-5">
                  <step.icon size={28} className="text-gold-400" />
                </div>
                <h3 className="font-serif font-bold text-navy-700 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(100%-16px)] w-8 h-0.5 bg-gold-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="section-subtitle">แผนการชำระเงิน</p>
            <h2 className="section-title">เลือกแผนที่เหมาะกับคุณ</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-sm p-8 ${
                  pkg.highlight
                    ? "bg-navy-800 text-white shadow-2xl ring-2 ring-gold-500"
                    : "bg-white shadow-md"
                }`}
              >
                {pkg.highlight && (
                  <div className="bg-gold-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                    แนะนำ
                  </div>
                )}
                <h3 className={`font-serif text-xl font-bold mb-2 ${pkg.highlight ? "text-white" : "text-navy-700"}`}>
                  {pkg.name}
                </h3>
                <div className={`text-2xl font-bold mb-6 ${pkg.highlight ? "text-gold-400" : "text-gold-600"}`}>
                  {pkg.discount}
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className={`flex items-center gap-3 text-sm ${pkg.highlight ? "text-gray-300" : "text-gray-600"}`}>
                      <CheckCircle2 size={16} className={pkg.highlight ? "text-gold-400" : "text-gold-500"} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center py-3 font-semibold text-sm rounded-sm transition-colors duration-200 ${
                    pkg.highlight
                      ? "bg-gold-500 hover:bg-gold-600 text-white"
                      : "bg-navy-700 hover:bg-gold-500 text-white"
                  }`}
                >
                  สอบถามข้อมูล
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-800 text-center px-4">
        <Phone size={40} className="text-gold-400 mx-auto mb-4" />
        <h2 className="font-serif text-3xl font-bold text-white mb-4">ปรึกษาผู้เชี่ยวชาญฟรี</h2>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto">ทีมที่ปรึกษาของเราพร้อมช่วยวางแผนการเงินที่เหมาะสมกับคุณ ติดต่อเราวันนี้</p>
        <a href="tel:+66962511155" className="btn-primary" style={{ background: "#d4a017" }}>
          <Phone size={16} /> โทรปรึกษาฟรี
        </a>
      </section>
    </>
  );
}
