import { Metadata } from "next";

export const metadata: Metadata = {
  title: "แกลเลอรี่ | Copa Real Estate",
  description: "ดูภาพถ่ายจริงของโครงการ Copa Real Estate คอนโดหรูริมทะเล พัทยา จอมเทียน",
};

const categories = ["ทั้งหมด", "Copa Beach Jomtien", "Copa Coral Reef", "สิ่งอำนวยความสะดวก", "วิวทะเล"];

const images = [
  { src: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80", alt: "Pool Infinity", cat: "สิ่งอำนวยความสะดวก" },
  { src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80", alt: "Beach Front", cat: "Copa Beach Jomtien" },
  { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80", alt: "Living Room", cat: "Copa Beach Jomtien" },
  { src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80", alt: "Sea View", cat: "วิวทะเล" },
  { src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80", alt: "Pool Area", cat: "Copa Coral Reef" },
  { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80", alt: "Restaurant", cat: "สิ่งอำนวยความสะดวก" },
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", alt: "Sunset View", cat: "วิวทะเล" },
  { src: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=80", alt: "Bedroom", cat: "Copa Coral Reef" },
  { src: "https://images.unsplash.com/photo-1521783988139-89397d761dce?w=800&q=80", alt: "Kitchen", cat: "Copa Beach Jomtien" },
  { src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80", alt: "Hotel Lobby", cat: "สิ่งอำนวยความสะดวก" },
  { src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80", alt: "Bathroom", cat: "Copa Coral Reef" },
  { src: "https://images.unsplash.com/photo-1470219556762-1771e7f9427d?w=800&q=80", alt: "Beach", cat: "วิวทะเล" },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1920&q=80" alt="Gallery" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy-900/70" />
        <div className="relative text-center text-white px-4">
          <p className="text-gold-400 text-sm tracking-widest uppercase mb-3">ภาพถ่าย</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold">แกลเลอรี่</h1>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-5 py-2 text-sm font-medium border border-gray-200 rounded-full hover:border-gold-500 hover:text-gold-600 transition-colors duration-200"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-sm group cursor-pointer ${
                  i === 0 || i === 5 ? "col-span-2 row-span-2" : ""
                }`}
                style={{ height: i === 0 || i === 5 ? "420px" : "200px" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/40 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
