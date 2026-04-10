"use client";

import { t } from "@/lib/i18n";
import { useI18n } from "@/components/providers/I18nProvider";

type StatItem  = { kind: "stat";  value: string; label: string };
type AwardItem = { kind: "award"; year: string;  org: string; title: string };
type TimelineItem = StatItem | AwardItem;

const timelineItems: TimelineItem[] = [
  { kind: "stat",  value: "15+",    label: "Years of Experience" },
  { kind: "award", year: "2023", org: "ASIA PACIFIC PROPERTY AWARDS",  title: "5-Star Highly Commended – Thailand" },
  { kind: "award", year: "2023", org: "REAL ESTATE EXCELLENCE AWARDS",  title: "Outstanding Developer of the Year" },
  { kind: "award", year: "2024", org: "THAILAND PROPERTY AWARDS",       title: "Best Luxury Condo Development (Eastern Seaboard)" },
  { kind: "award", year: "2024", org: "DOT PROPERTY AWARDS",            title: "Best Residential Development Pattaya" },
  { kind: "stat",  value: "2,000+", label: "Sold Units" },
];

function ItemContent({ item, small = false }: { item: TimelineItem; small?: boolean }) {
  if (item.kind === "stat") {
    return (
      <div className="text-center">
        <div className={`font-serif font-bold text-gold-500 leading-none ${small ? "text-3xl" : "text-4xl lg:text-5xl"}`}>
          {item.value}
        </div>
        <div className="text-gray-400 text-xs tracking-widest uppercase mt-1">{item.label}</div>
      </div>
    );
  }
  return (
    <div className={`text-center ${small ? "" : "max-w-[140px]"}`}>
      <div className={`font-serif font-bold text-gold-500 leading-none ${small ? "text-xl" : "text-2xl"}`}>
        {item.year}
      </div>
      <div className="text-[10px] font-bold tracking-wider uppercase text-gray-400 mt-1 leading-tight">
        {item.org}
      </div>
      <div className={`font-serif text-navy-700 leading-tight mt-1 ${small ? "text-xs" : "text-xs"}`}>
        {item.title}
      </div>
    </div>
  );
}

export default function AwardsSection() {
  const { lang } = useI18n();
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section label */}
        <div className="text-center mb-16">
          <p className="section-title mb-2">{t.awards.sectionLabel[lang]}</p>
          <h2 className="section-title mb-4">{t.awards.sectionTitle[lang]}</h2>
          <div className="w-12 h-0.5 bg-gold-500 mx-auto" />
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block relative mb-16">
          {/* Line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent -translate-y-1/2" />

          <div className="relative flex justify-between items-center">
            {timelineItems.map((item, i) => {
              const above = i % 2 === 0;
              const w = `${100 / timelineItems.length}%`;
              return (
                <div key={i} className="flex flex-col items-center" style={{ width: w }}>
                  {above ? (
                    <>
                      <div className="mb-5"><ItemContent item={item} /></div>
                      <div className="w-4 h-4 rounded-full bg-gold-500 border-4 border-white shadow-md ring-1 ring-gold-300 z-10 shrink-0" />
                      <div className="mt-5 h-16" />
                    </>
                  ) : (
                    <>
                      <div className="mb-5 h-16" />
                      <div className="w-4 h-4 rounded-full bg-gold-500 border-4 border-white shadow-md ring-1 ring-gold-300 z-10 shrink-0" />
                      <div className="mt-5"><ItemContent item={item} /></div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden relative pl-8 mb-16">
          <div className="absolute left-3.5 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-gold-300 to-transparent" />
          <div className="flex flex-col gap-8">
            {timelineItems.map((item, i) => (
              <div key={i} className="relative flex items-start gap-5">
                <div className="absolute -left-5 mt-1 w-4 h-4 rounded-full bg-gold-500 border-4 border-white shadow-md ring-1 ring-gold-300 shrink-0" />
                <ItemContent item={item} small />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
