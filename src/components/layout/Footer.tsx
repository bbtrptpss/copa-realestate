import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const projects = [
  { name: "Copa Beach Jomtien", href: "/projects/copa-beach-jomtien" },
  { name: "Copa Coral Reef", href: "/projects/copa-coral-reef" },
  // { name: "Copa Azure Villa", href: "/projects/copa-azure-villa" },
  // { name: "Copa Sky Residence", href: "/projects/copa-sky-residence" },
];

const company = [
  { name: "เกี่ยวกับเรา", href: "/about" },
  { name: "รางวัลและการยอมรับ", href: "/about" },
  { name: "ข่าวสาร", href: "/news" },
  { name: "แกลเลอรี่", href: "/gallery" },
  { name: "นโยบายความเป็นส่วนตัว", href: "#" },
];

const services = [
  { name: "ทีมขาย", href: "/contact" },
  { name: "การเงินและสินเชื่อ", href: "/financing" },
  { name: "บริการหลังการขาย", href: "/contact" },
  { name: "ลงทะเบียนตัวแทน", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-400">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand — span 2 */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gold-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg font-serif">C</span>
              </div>
              <div>
                <div className="text-white font-serif font-bold text-lg tracking-wide">COPA</div>
                <div className="text-gold-400 text-[9px] tracking-[0.3em] uppercase">Real Estate</div>
              </div>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-xs">
              ผู้พัฒนาอสังหาริมทรัพย์ระดับ Luxury บนทำเลทองริมหาดจอมเทียน พัทยา
              ประสบการณ์การพักอาศัยที่เหนือกว่าความหรูหราธรรมดา
            </p>
            <div className="flex gap-2 mb-8">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Youtube, href: "#", label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 border border-white/15 text-gray-400 hover:bg-gold-500 hover:border-gold-500 hover:text-white flex items-center justify-center transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
            {/* Contact quick */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2.5">
                <Phone size={13} className="text-gold-400 shrink-0" />
                <a href="tel:+66962511155" className="hover:text-gold-400 transition-colors">
                  +66 (0) 96 251 1155
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={13} className="text-gold-400 shrink-0" />
                <a href="mailto:info.coral@copacabanacoralreef.com" className="hover:text-gold-400 transition-colors">
                  info.coral@copacabanacoralreef.com
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin size={13} className="text-gold-400 shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">385/16 หมู่ 12 หนองปรือ บางละมุง ชลบุรี 20150</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-5">โครงการ</h4>
            <ul className="space-y-3">
              {projects.map((p) => (
                <li key={p.name}>
                  <Link href={p.href} className="text-sm hover:text-gold-400 transition-colors">
                    {p.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/projects"
                  className="text-gold-400 text-xs font-semibold hover:underline mt-2 inline-block"
                >
                  ดูทั้งหมด →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-5">บริษัท</h4>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.name}>
                  <Link href={c.href} className="text-sm hover:text-gold-400 transition-colors">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-5">บริการ</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.name}>
                  <Link href={s.href} className="text-sm hover:text-gold-400 transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-block bg-gold-500 hover:bg-gold-600 text-white text-xs font-bold px-5 py-3 tracking-widest uppercase transition-colors duration-200"
              >
                นัดชมโชว์รูม
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-600">
          <span>COPYRIGHT © {new Date().getFullYear()}, COPACABANA GROUP CO., LTD. ALL RIGHTS RESERVED.</span>
          <div className="flex items-center gap-4">
            <Link href="/sitemap.xml" className="hover:text-gold-400 transition-colors uppercase tracking-wide">
              Site Map
            </Link>
            <Link href="#" className="hover:text-gold-400 transition-colors uppercase tracking-wide">
              Privacy Center
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
