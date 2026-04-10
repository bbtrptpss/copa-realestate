 "use client";

import Link from "next/link";
import { t } from "@/lib/i18n";
import { useI18n } from "@/components/providers/I18nProvider";

export default function BrandStorySection() {
  const { lang } = useI18n();

  return (
    <section className="bg-navy-900 py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[3fr_6fr] gap-40 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-gold-400 text-xs font-semibold tracking-[0.35em] uppercase mb-6">
              Our Story
            </p>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-white leading-tight mb-2">
              {t.brandStory.title1[lang]}
            </h2>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-gold-400 leading-tight mb-8">
              {t.brandStory.title2[lang]}
            </h2>
            <div className="w-12 h-0.5 bg-gold-500 mb-8" />
            <p className="text-gray-300 leading-relaxed mb-6 text-base">
              {t.brandStory.paragraph1[lang]}
            </p>
            <p className="text-gray-400 leading-relaxed mb-10 text-sm">
              {t.brandStory.paragraph2[lang]}
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border border-gold-400 text-gold-400 hover:bg-gold-500 hover:text-white px-7 py-3 text-sm font-semibold tracking-widest uppercase transition-all duration-300"
            >
              {t.brandStory.button[lang]}
            </Link>
          </div>

          {/* Right: Brand Video */}
          <div className="lg:-mr-16 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
            <div className="relative w-full aspect-video">
              <iframe
                src="https://www.youtube.com/embed/APz4-pNTa1E?autoplay=1&mute=1&loop=1&playlist=APz4-pNTa1E"
                title="Copacabana Group — Brand Story"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
