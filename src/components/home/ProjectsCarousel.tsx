import Link from "next/link";
import React from "react";
import Image from "next/image";
import copaBeachImg from "@/Picture/Copa Beach Jomtien/36464040_277772809630575_3371106022310543360_n.jpg";
import copaCoralImg from "@/Picture/Copa Coral Reef/611252061_122253659144059484_2555454243191660700_n.jpg";

const projects = [
  {
    id: "1",
    badge: "READY TO MOVE IN",
    badgeColor: "#22c55e",
    title: "Copa Beach Jomtien",
    location: "หาดจอมเทียน พัทยา ชลบุรี",
    price: "2.5",
    unit: "ล้านบาท",
    image: copaBeachImg,
    slug: "copa-beach-jomtien",
  },
  {
    id: "2",
    badge: "NEW PROJECT",
    badgeColor: "#d4a017",
    title: "Copa Coral Reef",
    location: "หาดจอมเทียน พัทยา ชลบุรี",
    price: "3.2",
    unit: "ล้านบาท",
    image: copaCoralImg,
    slug: "copa-coral-reef",
  },
  {
    id: "3",
    badge: "COMING SOON",
    badgeColor: "#1e3a5f",
    title: "Copa Azure Villa",
    location: "พัทยาเหนือ ชลบุรี",
    price: "—",
    unit: "",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    slug: null,
  },
];

export default function ProjectsCarousel() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="text-center mb-16 px-4">
        <p className="text-gold-500 text-xs font-semibold tracking-[0.35em] uppercase mb-4">โครงการของเรา</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900">OUR PROJECTS</h2>
        <div className="w-12 h-0.5 bg-gold-500 mx-auto mt-5" />
      </div>

      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {projects.map((project) => {
            const Wrapper = project.slug
              ? ({ children }: { children: React.ReactNode }) => (
                  <Link href={`/projects/${project.slug}`} className="block group overflow-hidden rounded-none bg-white shadow-none hover:shadow-xl transition-shadow duration-300">
                    {children}
                  </Link>
                )
              : ({ children }: { children: React.ReactNode }) => (
                  <div className="block group overflow-hidden rounded-none bg-white shadow-none cursor-default">
                    {children}
                  </div>
                );
            return (
            <Wrapper key={project.id}>
              {/* Top badge bar */}
              <div
                className="flex items-center justify-between px-4 py-2.5"
                style={{ background: project.badgeColor }}
              >
                <span className="text-white text-xs font-bold tracking-widest uppercase">
                  {project.badge}
                </span>
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-4 h-4 opacity-80">
                  <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: 340 }}>
                {typeof project.image === "string" ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 scale-110 group-hover:scale-100"
                    style={!project.slug ? { filter: "grayscale(40%) brightness(0.85)" } : undefined}
                  />
                ) : (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 scale-110 group-hover:scale-100"
                    style={!project.slug ? { filter: "grayscale(40%) brightness(0.85)" } : undefined}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                )}
                {!project.slug && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      style={{
                        background: "rgba(0,0,0,0.55)",
                        color: "#fff",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        letterSpacing: "0.25em",
                        textTransform: "uppercase",
                        padding: "8px 20px",
                        border: "1px solid rgba(255,255,255,0.4)",
                      }}
                    >
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="px-5 py-4 border-t border-gray-100">
                <h3 className="font-serif text-lg font-bold text-navy-900 mb-0.5 group-hover:text-gold-600 transition-colors">
                  {project.slug ? project.title : ""}
                </h3>
                <p className="text-gray-400 text-xs tracking-wide uppercase mb-3">
                  {project.location}
                </p>
                {project.slug ? (
                  <div className="flex items-end gap-1.5">
                    <span className="text-gray-400 text-xs mb-0.5">เริ่ม</span>
                    <span className="font-serif text-3xl font-bold text-navy-900 leading-none">
                      {project.price}
                    </span>
                    <span className="text-gold-600 text-sm font-semibold mb-0.5">
                      {project.unit}
                    </span>
                  </div>
                ) : (
                  <p className="text-gray-400 text-sm italic">เร็วๆ นี้</p>
                )}
              </div>
            </Wrapper>
            );
          })}
        </div>

        <div className="text-center mt-12 px-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 border border-navy-700 text-navy-700 hover:bg-navy-900 hover:text-white px-8 py-3 text-sm font-semibold tracking-widest uppercase transition-all duration-300"
          >
            ดูโปรเจกต์ทั้งหมด
          </Link>
        </div>
      </div>
    </section>
  );
}
