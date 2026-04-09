import { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "ติดต่อเรา | Copacabana Group",
  description: "ติดต่อทีม Copacabana Group เพื่อสอบถามข้อมูลคอนโดริมทะเลพัทยา นัดชมโชว์รูมฟรี",
};

const offices = [
  {
    name: "Copa Beach Jomtien Sales Office",
    address: "385/16 หมู่ 12 หนองปรือ บางละมุง ชลบุรี 20150",
    phone: "+66 (0) 38 225-374",
    mobile: "+66 (0) 96 251 1155",
    email: "info@coparealestate.com",
    hours: "เปิดทุกวัน 08:30 – 17:30 น.",
  },
  {
    name: "Copa Coral Reef Sales Gallery",
    address: "385/16 หมู่ 12 ถนนจอมเทียน 2 หนองปรือ บางละมุง ชลบุรี 20150",
    phone: "+66 (0) 95 945 1665",
    mobile: "+66 (0) 96 251 1155",
    email: "coralreef@coparealestate.com",
    hours: "เปิดทุกวัน 08:30 – 17:30 น.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1521783988139-89397d761dce?w=1920&q=80" alt="Contact" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy-900/70" />
        <div className="relative text-center text-white px-4">
          <p className="text-gold-400 text-sm tracking-widest uppercase mb-3">ติดต่อ</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold">ติดต่อเรา</h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <p className="section-subtitle">ส่งข้อความ</p>
              <h2 className="section-title mb-8">เราพร้อมช่วยเหลือคุณ</h2>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">ชื่อ *</label>
                    <input type="text" required className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gold-500 transition-colors" placeholder="ชื่อของคุณ" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">นามสกุล *</label>
                    <input type="text" required className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gold-500 transition-colors" placeholder="นามสกุลของคุณ" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">เบอร์โทรศัพท์ *</label>
                  <input type="tel" required className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gold-500 transition-colors" placeholder="08x-xxx-xxxx" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">อีเมล</label>
                  <input type="email" className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gold-500 transition-colors" placeholder="email@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">โปรเจกต์ที่สนใจ</label>
                  <select className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gold-500 transition-colors bg-white">
                    <option value="">เลือกโปรเจกต์</option>
                    <option>Copa Beach Jomtien</option>
                    <option>Copa Coral Reef</option>
                    <option>สอบถามทั่วไป</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">งบประมาณที่สนใจ</label>
                  <select className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gold-500 transition-colors bg-white">
                    <option value="">เลือกช่วงราคา</option>
                    <option>ต่ำกว่า 2 ล้านบาท</option>
                    <option>2-5 ล้านบาท</option>
                    <option>5-10 ล้านบาท</option>
                    <option>มากกว่า 10 ล้านบาท</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">ข้อความ / คำถาม</label>
                  <textarea rows={4} className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-gold-500 transition-colors resize-none" placeholder="ข้อความหรือคำถามของคุณ..." />
                </div>
                <button type="submit" className="w-full bg-navy-700 hover:bg-gold-500 text-white font-semibold py-3.5 rounded-sm transition-colors duration-300 text-sm tracking-wide">
                  ส่งข้อความ
                </button>
              </form>
            </div>

            {/* Office Info */}
            <div>
              <p className="section-subtitle">ข้อมูลการติดต่อ</p>
              <h2 className="section-title mb-8">สำนักงานของเรา</h2>
              <div className="space-y-8">
                {offices.map((office) => (
                  <div key={office.name} className="border border-gray-100 rounded-sm p-6 shadow-sm">
                    <h3 className="font-serif font-bold text-navy-700 mb-4">{office.name}</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex gap-3">
                        <MapPin size={16} className="text-gold-500 shrink-0 mt-0.5" />
                        <span className="text-gray-600">{office.address}</span>
                      </div>
                      <div className="flex gap-3 items-center">
                        <Phone size={16} className="text-gold-500" />
                        <a href={`tel:${office.phone}`} className="text-gray-600 hover:text-gold-600 transition-colors">{office.phone}</a>
                      </div>
                      <div className="flex gap-3 items-center">
                        <MessageCircle size={16} className="text-gold-500" />
                        <a href={`tel:${office.mobile}`} className="text-gray-600 hover:text-gold-600 transition-colors">{office.mobile}</a>
                      </div>
                      <div className="flex gap-3 items-center">
                        <Mail size={16} className="text-gold-500" />
                        <a href={`mailto:${office.email}`} className="text-gray-600 hover:text-gold-600 transition-colors">{office.email}</a>
                      </div>
                      <div className="flex gap-3 items-center">
                        <Clock size={16} className="text-gold-500" />
                        <span className="text-gray-600">{office.hours}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Embed */}
              <div className="mt-8 rounded-sm overflow-hidden border border-gray-200 h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.4!2d100.9!3d12.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDUyJzEyLjAiTiAxMDDCsDU0JzAwLjAiRQ!5e0!3m2!1sth!2sth!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Copacabana Group Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
