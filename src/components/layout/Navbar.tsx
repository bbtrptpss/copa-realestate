"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logoImg from "@/Logo/logo.png";
import { Menu, X, Search, Globe, ChevronDown, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { languageLabels, t, SUPPORTED_LANGS } from "@/lib/i18n";
import { useI18n } from "@/components/providers/I18nProvider";

type NavLabelKey = Exclude<keyof typeof t.navbar.links, "viewAll">;

const navLinks: Array<{ href: string; labelKey: NavLabelKey; children?: string[] }> = [
  {
    href: "/projects",
    labelKey: "projects",
    children: ["Copa Beach Jomtien", "Copa Coral Reef"],
  },
  { href: "/about", labelKey: "about" },
  { href: "/news", labelKey: "news" },
  { href: "/financing", labelKey: "financing" },
  { href: "/gallery", labelKey: "gallery" },
  { href: "/contact", labelKey: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const { lang, setLang } = useI18n();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem("copa_theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme =
      stored === "light" || stored === "dark" ? stored : prefersDark ? "dark" : "light";

    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("copa_theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

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
          <span>{t.navbar.topbar[lang]}</span>
          <div className="flex items-center gap-4">
            {/* <a href="tel:+66962511155" className="hover:text-gold-400 transition-colors">
              +66 (0) 96 251 1155
            </a> */}
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
          <Link href="/" className="flex items-center shrink-0">
            <Image src={logoImg} alt="Copacabana Group" height={48} className="h-12 w-auto object-contain" />
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
                  {t.navbar.links[link.labelKey][lang]}
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
                        {t.navbar.links.viewAll[lang]} →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Theme */}
            <button
              onClick={toggleTheme}
              className="hidden md:hidden items-center gap-1.5 text-gray-300 hover:text-gold-400 text-xs font-semibold tracking-wider transition-colors"
              aria-label={theme === "light" ? "Enable dark mode" : "Enable light mode"}
              title={theme === "light" ? "Dark mode" : "Light mode"}
            >
              {theme === "light" ? <Moon size={13} /> : <Sun size={13} />}
              {theme === "light" ? "Dark" : "Light"}
            </button>

            {/* Language */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setIsLangOpen((v) => !v)}
                className="flex items-center gap-1.5 text-gray-300 hover:text-gold-400 text-xs font-semibold tracking-wider transition-colors"
                aria-haspopup="menu"
                aria-expanded={isLangOpen}
              >
                <Globe size={13} />
                {languageLabels[lang]}
                <ChevronDown size={12} className={cn("transition-transform", isLangOpen ? "rotate-180" : "")} />
              </button>
              {isLangOpen && (
                <div className="absolute right-0 top-full mt-2 min-w-[110px] rounded-md bg-navy-900 border border-white/10 shadow-2xl py-1 z-50">
                  {SUPPORTED_LANGS.map((code) => (
                    <button
                      key={code}
                      type="button"
                      onClick={() => {
                        setLang(code);
                        setIsLangOpen(false);
                      }}
                      className={cn(
                        "w-full text-left px-3 py-2 text-xs transition-colors",
                        code === lang ? "text-gold-400 bg-white/5" : "text-gray-300 hover:text-gold-400 hover:bg-white/5"
                      )}
                    >
                      {languageLabels[code]}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search */}
            <button className="hidden md:flex items-center text-gray-300 hover:text-gold-400 p-2 transition-colors">
              <Search size={15} />
            </button>

            {/* CTA */}
            <Link
              href="/contact"
              className="hidden md:inline-flex bg-gold-500 hover:bg-gold-600 text-white text-xs font-bold px-5 py-2.5 tracking-wider uppercase transition-colors duration-200"
            >
              {t.navbar.cta[lang]}
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
                {t.navbar.links[link.labelKey][lang]}
              </Link>
            ))}
            <div className="px-6 py-4">
              <div className="hidden mb-3">
                <div className="text-[11px] uppercase tracking-wider text-white/50 mb-2">Theme</div>
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="px-3 py-1.5 text-xs rounded border border-white/20 text-gray-300 hover:text-gold-400 hover:border-gold-500/60 inline-flex items-center gap-2 transition-colors"
                >
                  {theme === "light" ? <Moon size={13} /> : <Sun size={13} />}
                  {theme === "light" ? "Dark mode" : "Light mode"}
                </button>
              </div>
              <div className="mb-3">
                <div className="text-[11px] uppercase tracking-wider text-white/50 mb-2">Language</div>
                <div className="flex gap-2">
                  {SUPPORTED_LANGS.map((code) => (
                    <button
                      key={code}
                      type="button"
                      onClick={() => setLang(code)}
                      className={cn(
                        "px-3 py-1.5 text-xs rounded border transition-colors",
                        code === lang
                          ? "border-gold-500 text-gold-400 bg-white/5"
                          : "border-white/20 text-gray-300 hover:text-gold-400 hover:border-gold-500/60"
                      )}
                    >
                      {languageLabels[code]}
                    </button>
                  ))}
                </div>
              </div>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center bg-gold-500 text-white py-3 text-sm font-bold tracking-wider uppercase"
              >
                {t.navbar.cta[lang]}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
