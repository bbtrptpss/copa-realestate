import Link from "next/link";
import { MapPin, ArrowRight, Bed, Bath } from "lucide-react";
import jomtienCoverImg from "@/Picture/Copa Beach Jomtien/36464040_277772809630575_3371106022310543360_n.jpg";
import coralReefCoverImg from "@/Picture/Copa Coral Reef/611252061_122253659144059484_2555454243191660700_n.jpg";

const defaultProjects = [
  {
    id: "1",
    badge: "READY TO MOVE IN",
    badgeColor: "bg-green-500",
    type: "คอนโดมิเนียม",
    title: "Copa Beach Jomtien",
    subtitle: "ชีวิตริมทะเลที่คุณเลือกเองได้ ที่ Copa Beach Jomtien",
    location: "หาดจอมเทียน พัทยา ชลบุรี",
    beds: "1–2",
    baths: "1",
    priceRange: "เริ่ม 2.5 ล้านบาท",
    image: jomtienCoverImg.src,
    slug: "copa-beach-jomtien",
  },
  {
    id: "2",
    badge: "NEW PROJECT",
    badgeColor: "bg-gold-500",
    type: "คอนโดมิเนียม",
    title: "Copa Coral Reef",
    subtitle: "High-Rise Luxury ใหม่ล่าสุด วิวทะเลพาโนรามา 180 องศา",
    location: "หาดจอมเทียน พัทยา ชลบุรี",
    beds: "1–3",
    baths: "1–2",
    priceRange: "เริ่ม 3.2 ล้านบาท",
    image: coralReefCoverImg.src,
    slug: "copa-coral-reef",
  },
  // {
  //   id: "3",
  //   badge: "UPCOMING",
  //   badgeColor: "bg-navy-700",
  //   type: "วิลล่า",
  //   title: "Copa Azure Villa",
  //   subtitle: "วิลล่าส่วนตัวพร้อมสระว่ายน้ำ บนทำเลหรูระดับ Exclusive",
  //   location: "พัทยาเหนือ ชลบุรี",
  //   beds: "3–5",
  //   baths: "3–5",
  //   priceRange: "เริ่ม 18 ล้านบาท",
  //   image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
  //   slug: "copa-azure-villa",
  // },
  // {
  //   id: "4",
  //   badge: "NEW PROJECT",
  //   badgeColor: "bg-gold-500",
  //   type: "คอนโดมิเนียม",
  //   title: "Copa Sky Residence",
  //   subtitle: "ที่สุดแห่งความหรูหรา Penthouse วิวทะเล 360 องศา",
  //   location: "พัทยากลาง ชลบุรี",
  //   beds: "2–4",
  //   baths: "2–3",
  //   priceRange: "เริ่ม 5.8 ล้านบาท",
  //   image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
  //   slug: "copa-sky-residence",
  // },
];

export default function ProjectsSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-subtitle">โครงการของเรา</p>
          <h2 className="section-title mb-4">FEATURED PROJECTS</h2>
          <p className="text-gray-400 text-sm max-w-lg mx-auto">
            โครงการอสังหาริมทรัพย์หรูระดับ Luxury ที่ได้รับความนิยมสูงสุดจากผู้ซื้อทั่วโลก
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {defaultProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group bg-white overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-72">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Badge */}
                <span
                  className={`absolute top-0 left-0 ${project.badgeColor} text-white text-[11px] font-bold tracking-widest uppercase px-4 py-2`}
                >
                  {project.badge}
                </span>
                {/* Type */}
                <span className="absolute top-0 right-0 bg-black/50 text-white text-[11px] tracking-wide uppercase px-3 py-2">
                  {project.type}
                </span>
                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {/* Location at bottom */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white/90 text-sm">
                  <MapPin size={13} className="text-gold-400" />
                  {project.location}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-navy-700 mb-1.5 group-hover:text-gold-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.subtitle}</p>

                {/* Beds / Baths / Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <Bed size={14} className="text-gold-400" />
                      {project.beds} Beds
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Bath size={14} className="text-gold-400" />
                      {project.baths} Baths
                    </span>
                  </div>
                  <span className="text-gold-600 font-semibold text-sm">{project.priceRange}</span>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-gold-600 font-semibold text-sm group-hover:gap-2.5 transition-all">
                    ดูรายละเอียด <ArrowRight size={15} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link href="/projects" className="btn-primary">
            ดูโปรเจกต์ทั้งหมด
          </Link>
        </div>
      </div>
    </section>
  );
}
