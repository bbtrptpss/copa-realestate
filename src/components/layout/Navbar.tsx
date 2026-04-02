"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  {
    href: "/projects",
    label: "โครงการ",
    children: ["Copa Beach Jomtien", "Copa Coral Reef"],
  },
  { href: "/about", label: "เกี่ยวกับเรา" },
  { href: "/news", label: "ข่าวสาร" },
  { href: "/financing", label: "การเงิน" },
  { href: "/gallery", label: "แกลเลอรี่" },
  { href: "/contact", label: "ติดต่อเรา" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [lang, setLang] = useState<"TH" | "EN">("TH");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrolled ? "bg-navy-900 shadow-2xl py-0" : "bg-transparent py-0"
      )}
    >
      {/* Top bar */}
      <div
        className={cn(
          "border-b border-white/10 transition-all duration-500",
          scrolled ? "hidden" : "block"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between py-2 text-xs text-white/60">
          <span>ผู้พัฒนาอสังหาริมทรัพย์ระดับ Luxury · พัทยา จอมเทียน ประเทศไทย</span>
          <div className="flex items-center gap-4">
            <a href="tel:+66962511155" className="hover:text-gold-400 transition-colors">
              +66 (0) 96 251 1155
            </a>
            <span className="text-white/20">|</span>
            <a href="/admin" className="hover:text-gold-400 transition-colors">
              Admin
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 bg-gold-500 flex items-center justify-center">
              <span className="text-white font-bold text-base font-serif">C</span>
            </div>
            <div>
              <div className="text-white font-serif font-bold text-base leading-tight tracking-wide">
                COPA
              </div>
              <div className="text-gold-400 text-[9px] tracking-[0.3em] uppercase font-medium">
                Real Estate
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.href)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-gray-200 hover:text-gold-400 text-xs font-semibold transition-colors duration-200 tracking-wider uppercase px-4 py-5"
                >
                  {link.label}
                  {link.children && (
                    <svg className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown */}
                {link.children && activeDropdown === link.href && (
                  <div className="absolute top-full left-0 bg-navy-900 border-t-2 border-gold-500 shadow-2xl min-w-[220px] py-2 z-50">
                    {link.children.map((child) => (
                      <Link
                        key={child}
                        href={link.href}
                        className="block px-5 py-3 text-xs text-gray-300 hover:text-gold-400 hover:bg-white/5 tracking-wide transition-all"
                      >
                        {child}
                      </Link>
                    ))}
                    <div className="border-t border-white/10 mt-2 pt-2 px-5 pb-2">
                      <Link
                        href="/projects"
                        className="text-gold-400 text-xs font-semibold tracking-wide hover:underline"
                      >
                        ดูทั้งหมด →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Language */}
            <button
              onClick={() => setLang(lang === "TH" ? "EN" : "TH")}
              className="hidden md:flex items-center gap-1.5 text-gray-300 hover:text-gold-400 text-xs font-semibold tracking-wider transition-colors"
            >
              <Globe size={13} />
              {lang}
            </button>

            {/* Search */}
            <button className="hidden md:flex items-center text-gray-300 hover:text-gold-400 p-2 transition-colors">
              <Search size={15} />
            </button>

            {/* CTA */}
            <Link
              href="/contact"
              className="hidden md:inline-flex bg-gold-500 hover:bg-gold-600 text-white text-xs font-bold px-5 py-2.5 tracking-wider uppercase transition-colors duration-200"
            >
              นัดชมโชว์รูม
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-navy-900 border-t border-white/10">
          <div className="flex flex-col divide-y divide-white/5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-200 hover:text-gold-400 hover:bg-white/5 px-6 py-4 text-sm font-semibold tracking-wider uppercase transition-all"
              >
                {link.label}
              </Link>
            ))}
            <div className="px-6 py-4">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center bg-gold-500 text-white py-3 text-sm font-bold tracking-wider uppercase"
              >
                นัดชมโชว์รูม
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
