import { Metadata } from "next";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "ข่าวสารและบทความ | Copa Real Estate",
  description: "อ่านข่าวสาร บทความ และเคล็ดลับเกี่ยวกับอสังหาริมทรัพย์และการใช้ชีวิตริมทะเลพัทยา จอมเทียน",
};

const posts = [
  {
    id: "1",
    title: "10 สถานที่ถ่ายรูปพัทยา จุดเช็คอินที่ทุกคนต้องมา",
    slug: "10-photo-spots-pattaya",
    category: "travel",
    date: "2024-12-01",
    excerpt: "รวม 10 สถานที่ถ่ายรูปพัทยา ตั้งแต่จอมเทียนถึงมุมไลฟ์สไตล์สุดคลาสสิกของเมืองทะเล เก็บครบทั้งบรรยากาศ วิถีชีวิต และเสน่ห์ที่ทำให้พัทยาน่าอยู่",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    featured: true,
  },
  {
    id: "2",
    title: "ที่สุดแห่งการพักผ่อน คอนโดวิวทะเล ในราคาที่คุณเอื้อมถึง",
    slug: "condo-sea-view-affordable",
    category: "real-estate",
    date: "2024-11-15",
    excerpt: "เบื่อความวุ่นวาย? มาส่อง คอนโดวิวทะเล ทำเลทองโซนจอมเทียน ที่สุดแห่งการพักผ่อนแบบคุ้มค่าในราคาที่คุณเอื้อมถึง",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
    featured: false,
  },
  {
    id: "3",
    title: "10 ร้านอาหารทะเล พัทยา อร่อย วิวดี เหมาะกับทุกสไตล์",
    slug: "10-seafood-restaurants-pattaya",
    category: "travel",
    date: "2024-11-01",
    excerpt: "รวม 10 ร้านอาหารทะเล พัทยา ฟีล Local ใกล้หาดจอมเทียน อร่อย สด วิวดี เหมาะกับไลฟ์สไตล์คนอยากอยู่ใกล้ทะเล",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",
    featured: false,
  },
  {
    id: "4",
    title: "ย่ำผืนทราย มองทะเลสวย ไปกับ 5 ที่เที่ยวหาดจอมเทียน",
    slug: "5-places-jomtien-beach",
    category: "travel",
    date: "2024-10-20",
    excerpt: "ย่ำผืนทราย ซึมซับชีวิตริมทะเล กับ 5 ที่เที่ยวหาดจอมเทียน ที่มากกว่าการท่องเที่ยว แต่ยังเชื่อมโยงไลฟ์สไตล์การอยู่อาศัยใกล้ทะเลได้อย่างลงตัว",
    image: "https://images.unsplash.com/photo-1470219556762-1771e7f9427d?w=600&q=80",
    featured: false,
  },
  {
    id: "5",
    title: "เขาพระตำหนัก พัทยา หนึ่งในจุดชมวิวพระอาทิตย์ตกที่ต้องไปเยือน",
    slug: "khao-phra-tamnak-pattaya",
    category: "travel",
    date: "2024-10-01",
    excerpt: "เขาพระตำหนัก พัทยา จุดชมวิวพระอาทิตย์ตกสุดโรแมนติก พร้อมข้อมูลเดินทาง สถานที่ใกล้เคียง",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
    featured: false,
  },
  {
    id: "6",
    title: "เตรียมตัวให้พร้อม! คู่มือลงทุนคอนโดพัทยาสำหรับมือใหม่",
    slug: "pattaya-condo-investment-guide",
    category: "real-estate",
    date: "2024-09-15",
    excerpt: "ข้อมูลครบทุกเรื่องสำหรับคนอยากลงทุนคอนโดพัทยา ตั้งแต่การเลือกทำเล ราคา ผลตอบแทน และข้อควรระวัง",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80",
    featured: false,
  },
];

const categoryMap: Record<string, string> = {
  "real-estate": "อสังหาริมทรัพย์",
  travel: "ท่องเที่ยว",
  lifestyle: "ไลฟ์สไตล์",
  news: "ข่าวสาร",
};

export default function NewsPage() {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80" alt="News" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy-900/70" />
        <div className="relative text-center text-white px-4">
          <p className="text-gold-400 text-sm tracking-widest uppercase mb-3">ข่าวสาร</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold">ข่าวสารและบทความ</h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Featured Post */}
          {featured && (
            <div className="mb-16">
              <div className="grid md:grid-cols-2 gap-0 overflow-hidden rounded-sm shadow-xl group">
                <div className="relative overflow-hidden h-72 md:h-auto">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 bg-gold-500 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                    บทความแนะนำ
                  </span>
                </div>
                <div className="bg-navy-800 p-10 flex flex-col justify-center">
                  <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase mb-3">
                    {categoryMap[featured.category]}
                  </span>
                  <h2 className="font-serif text-2xl font-bold text-white mb-4 leading-snug">
                    {featured.title}
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center gap-3 text-gray-500 text-xs mb-6">
                    <Calendar size={12} />
                    {formatDate(featured.date)}
                  </div>
                  <Link
                    href={`/news/${featured.slug}`}
                    className="inline-flex items-center gap-2 text-gold-400 font-semibold text-sm hover:gap-3 transition-all"
                  >
                    อ่านบทความเต็ม <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <article key={post.id} className="bg-white border border-gray-100 rounded-sm overflow-hidden shadow-sm card-hover">
                <div className="relative overflow-hidden h-52 group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="absolute top-3 left-3 bg-gold-500 text-white text-xs px-2.5 py-1 font-semibold">
                    {categoryMap[post.category] || post.category}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                    <Calendar size={12} />
                    {formatDate(post.date)}
                  </div>
                  <h3 className="font-serif font-bold text-navy-700 mb-2 line-clamp-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                  <Link
                    href={`/news/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-gold-600 font-semibold text-sm hover:gap-2.5 transition-all"
                  >
                    อ่านต่อ <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
