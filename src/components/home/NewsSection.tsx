import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { formatDate } from "@/lib/utils";

const defaultPosts = [
  {
    _id: "1",
    title: "10 สถานที่ถ่ายรูปพัทยา จุดเช็คอินที่ทุกคนต้องมา",
    slug: { current: "10-photo-spots-pattaya" },
    category: "travel",
    publishedAt: "2024-12-01",
    excerpt: "รวม 10 สถานที่ถ่ายรูปพัทยา ตั้งแต่จอมเทียนถึงมุมไลฟ์สไตล์สุดคลาสสิกของเมืองทะเล",
    mainImage: { url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80" },
  },
  {
    _id: "2",
    title: "ที่สุดแห่งการพักผ่อน คอนโดวิวทะเล ในราคาที่คุณเอื้อมถึง",
    slug: { current: "condo-sea-view-affordable" },
    category: "real-estate",
    publishedAt: "2024-11-15",
    excerpt: "เบื่อความวุ่นวาย? มาส่อง คอนโดวิวทะเล ทำเลทองโซนจอมเทียน ที่สุดแห่งการพักผ่อนแบบคุ้มค่า",
    mainImage: { url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80" },
  },
  {
    _id: "3",
    title: "10 ร้านอาหารทะเล พัทยา อร่อย วิวดี เหมาะกับทุกสไตล์",
    slug: { current: "10-seafood-restaurants-pattaya" },
    category: "travel",
    publishedAt: "2024-11-01",
    excerpt: "รวม 10 ร้านอาหารทะเล พัทยา ฟีล Local ใกล้หาดจอมเทียน อร่อย สด วิวดี",
    mainImage: { url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80" },
  },
];

const categoryMap: Record<string, string> = {
  "real-estate": "อสังหาริมทรัพย์",
  travel: "ท่องเที่ยว",
  lifestyle: "ไลฟ์สไตล์",
  news: "ข่าวสาร",
};

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  publishedAt: string;
  excerpt: string;
  mainImage?: { url?: string };
}

export default function NewsSection({ posts }: { posts?: Post[] }) {
  const displayPosts = posts && posts.length > 0 ? posts : defaultPosts;

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-14">
          <p className="section-subtitle">ข่าวสารและบทความ</p>
          <h2 className="section-title mb-4">อัปเดตล่าสุดจากเรา</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            ติดตามข่าวสาร เคล็ดลับ และข้อมูลที่เป็นประโยชน์เกี่ยวกับอสังหาริมทรัพย์และการใช้ชีวิตริมทะเล
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {displayPosts.map((post) => (
            <article key={post._id} className="bg-white rounded-2xl overflow-hidden shadow-md card-hover">
              <div className="relative overflow-hidden h-72 group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.mainImage?.url || "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80"}
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
                  {post.publishedAt ? formatDate(post.publishedAt) : ""}
                </div>
                <h3 className="font-serif font-bold text-navy-700 mb-2 line-clamp-2 leading-snug">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                <Link
                  href={`/news/${post.slug.current}`}
                  className="inline-flex items-center gap-1.5 text-gold-600 font-semibold text-sm hover:gap-2.5 transition-all duration-200"
                >
                  อ่านต่อ <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/news" className="btn-primary" style={{ background: "#d4a017" }}>
            ดูบทความทั้งหมด
          </Link>
        </div>
      </div>
    </section>
  );
}
