import Link from "next/link";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&q=80", alt: "Pool View", span: "col-span-2 row-span-2" },
  { src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80", alt: "Beach Front" },
  { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80", alt: "Living Room" },
  { src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80", alt: "Amenities" },
  { src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80", alt: "Sea View" },
];

export default function GallerySection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-14">
          <p className="section-subtitle">แกลเลอรี่</p>
          <h2 className="section-title mb-4">ภาพบรรยากาศโครงการ</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            สัมผัสความงามและบรรยากาศของโครงการผ่านภาพถ่ายจริง
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[200px]">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-sm group ${img.span || ""}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/30 transition-all duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/gallery" className="btn-primary" style={{ background: "#d4a017" }}>
            ดูแกลเลอรี่ทั้งหมด
          </Link>
        </div>
      </div>
    </section>
  );
}
