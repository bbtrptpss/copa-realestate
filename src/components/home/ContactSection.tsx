import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="section-padding bg-navy-800">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Info */}
          <div>
            <p className="text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3">
              ติดต่อเรา
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
              พร้อมให้คำปรึกษา <br />ทุกวัน ไม่มีวันหยุด
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              ทีมงานผู้เชี่ยวชาญของเราพร้อมให้ข้อมูล คำแนะนำ และนัดชมโชว์รูมโดยไม่มีค่าใช้จ่าย
              ติดต่อเราวันนี้เพื่อรับข้อเสนอพิเศษ
            </p>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold-500/20 rounded-full flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-gold-400" />
                </div>
                <div>
                  <div className="text-gray-400 text-xs mb-1">โทรศัพท์</div>
                  <a href="tel:+66962511155" className="text-white font-semibold hover:text-gold-400 transition-colors">
                    +66 (0) 96 251 1155
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold-500/20 rounded-full flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-gold-400" />
                </div>
                <div>
                  <div className="text-gray-400 text-xs mb-1">อีเมล</div>
                  <a href="mailto:info@coparealestate.com" className="text-white font-semibold hover:text-gold-400 transition-colors">
                    info@coparealestate.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold-500/20 rounded-full flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-gold-400" />
                </div>
                <div>
                  <div className="text-gray-400 text-xs mb-1">ที่ตั้ง</div>
                  <p className="text-white font-semibold">
                    385/16 หมู่ 12 หนองปรือ บางละมุง ชลบุรี 20150
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold-500/20 rounded-full flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-gold-400" />
                </div>
                <div>
                  <div className="text-gray-400 text-xs mb-1">เวลาทำการ</div>
                  <p className="text-white font-semibold">เปิดทุกวัน 08:30 – 17:30 น.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-sm p-8 shadow-2xl">
            <h3 className="font-serif text-xl font-bold text-navy-700 mb-6">
              ส่งข้อความถึงเรา
            </h3>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">ชื่อ</label>
                  <input
                    type="text"
                    placeholder="ชื่อของคุณ"
                    className="w-full border border-gray-200 rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-gold-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">นามสกุล</label>
                  <input
                    type="text"
                    placeholder="นามสกุลของคุณ"
                    className="w-full border border-gray-200 rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-gold-500 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">เบอร์โทรศัพท์</label>
                <input
                  type="tel"
                  placeholder="08x-xxx-xxxx"
                  className="w-full border border-gray-200 rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-gold-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">อีเมล</label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="w-full border border-gray-200 rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-gold-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">โปรเจกต์ที่สนใจ</label>
                <select className="w-full border border-gray-200 rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-gold-500 transition-colors bg-white">
                  <option value="">เลือกโปรเจกต์</option>
                  <option>Copa Beach Jomtien</option>
                  <option>Copa Coral Reef</option>
                  <option>ยังไม่ตัดสินใจ</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">ข้อความ</label>
                <textarea
                  rows={3}
                  placeholder="ข้อความหรือคำถาม..."
                  className="w-full border border-gray-200 rounded-sm px-4 py-2.5 text-sm focus:outline-none focus:border-gold-500 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-navy-700 hover:bg-gold-500 text-white font-semibold py-3 rounded-sm transition-colors duration-300 text-sm tracking-wide"
              >
                ส่งข้อความ
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
