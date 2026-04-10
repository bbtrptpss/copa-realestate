export const SUPPORTED_LANGS = ["th", "en", "zh"] as const;

export type AppLang = (typeof SUPPORTED_LANGS)[number];

export const DEFAULT_LANG: AppLang = "th";

export const languageLabels: Record<AppLang, string> = {
  th: "TH",
  en: "EN",
  zh: "中文",
};

export const t = {
  navbar: {
    topbar: {
      th: "ผู้พัฒนาอสังหาริมทรัพย์ระดับ Luxury · พัทยา จอมเทียน ประเทศไทย",
      en: "Luxury Real Estate Developer · Pattaya, Jomtien, Thailand",
      zh: "高端房地产开发商 · 泰国芭提雅中天",
    },
    links: {
      projects: { th: "โครงการ", en: "Projects", zh: "项目" },
      about: { th: "เกี่ยวกับเรา", en: "About", zh: "关于我们" },
      news: { th: "ข่าวสาร", en: "News", zh: "新闻" },
      financing: { th: "การเงิน", en: "Financing", zh: "金融" },
      gallery: { th: "แกลเลอรี่", en: "Gallery", zh: "图库" },
      contact: { th: "ติดต่อเรา", en: "Contact", zh: "联系我们" },
      viewAll: { th: "ดูทั้งหมด", en: "View all", zh: "查看全部" },
    },
    cta: {
      th: "นัดชมโชว์รูม",
      en: "Book a showroom visit",
      zh: "预约参观展厅",
    },
  },
  brandStory: {
    title1: { th: "ทุกวัน…", en: "Every Day...", zh: "每一天..." },
    title2: { th: "ชีวิตดีกว่า", en: "A Better Life", zh: "更好的生活" },
    paragraph1: {
      th: "บ้านคือจุดเริ่มต้นของชีวิตที่ดี Copacabana Group ได้รับแรงบันดาลใจจากชายหาด Copacabana ระดับโลกในรีโอ เด จาเนโร เพื่อสร้างพื้นที่พักอาศัยที่ไม่ใช่แค่ที่อยู่อาศัย แต่คือประสบการณ์ชีวิตที่เต็มเปี่ยม",
      en: "Home is where a better life begins. Copacabana Group is inspired by the world-famous Copacabana beach in Rio de Janeiro to create residences that are more than just living spaces, but a complete lifestyle experience.",
      zh: "家是美好生活的起点。Copacabana Group 以里约热内卢世界著名的科帕卡巴纳海滩为灵感，打造的不仅是居所，更是完整的生活体验。",
    },
    paragraph2: {
      th: "ค้นพบ 6 รูปแบบชีวิตที่เราออกแบบมาเพื่อคุณ ทุกโมงยามของทุกวัน",
      en: "Discover 6 lifestyle concepts thoughtfully designed for you, every moment of every day.",
      zh: "探索我们为您精心打造的 6 种生活方式，每时每刻都更美好。",
    },
    button: { th: "The Good Life", en: "The Good Life", zh: "理想生活" },
  },
  central: {
    sectionLabel: { th: "Facilities", en: "Facilities", zh: "配套设施" },
    sectionTitle: { th: "ส่วนกลาง", en: "Central Facilities", zh: "公共设施" },
    expand: { th: "ดูรูปเต็ม", en: "View full image", zh: "查看大图" },
    close: { th: "ปิด", en: "Close", zh: "关闭" },
    imageAlt: {
      th: "ส่วนกลาง แบบเต็มจอ",
      en: "Central facilities full view",
      zh: "公共设施大图",
    },
  },
  awards: {
    sectionLabel: { th: "ประสบการณ์และรางวัล", en: "Experience & Awards", zh: "经验与荣誉" },
    sectionTitle: { th: "OUR MILESTONES", en: "เส้นทางของเรา", zh: "我们的里程碑" },
  },
} as const;
