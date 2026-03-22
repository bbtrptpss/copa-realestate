# Copa Real Estate Website

เว็บไซต์อสังหาริมทรัพย์ SEO-optimized สำหรับ Copa Real Estate สร้างด้วย Next.js 15 + Sanity CMS

## Tech Stack

- **Frontend**: Next.js 15 (App Router) + TypeScript + Tailwind CSS
- **CMS/Admin**: Sanity.io (embedded Studio ที่ `/studio`)
- **Hosting**: Vercel (free tier)

## หน้าเว็บ

| URL | หน้า |
|-----|------|
| `/` | หน้าหลัก |
| `/about` | เกี่ยวกับเรา |
| `/projects` | โปรเจกต์ทั้งหมด |
| `/gallery` | แกลเลอรี่ |
| `/news` | ข่าวสารและบทความ |
| `/financing` | การเงินและสินเชื่อ |
| `/contact` | ติดต่อเรา |
| `/studio` | **Admin CMS Panel** |

---

## 🚀 วิธี Deploy ขึ้น Vercel (ฟรี)

### ขั้นตอนที่ 1: สร้าง Sanity Project

1. ไปที่ [sanity.io](https://www.sanity.io) แล้วสมัครฟรี
2. สร้าง Project ใหม่ → ตั้งชื่อ `copa-realestate`
3. เลือก Dataset: `production`
4. คัดลอก **Project ID** (ตัวอย่าง: `abc123de`)

### ขั้นตอนที่ 2: ตั้งค่า Environment Variables ใน .env.local

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=ใส่_project_id_ของคุณ
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

### ขั้นตอนที่ 3: อัปโหลดขึ้น GitHub

```bash
git init
git add .
git commit -m "Initial Copa Real Estate website"
git branch -M main
git remote add origin https://github.com/your-username/copa-realestate.git
git push -u origin main
```

### ขั้นตอนที่ 4: Deploy บน Vercel

1. ไปที่ [vercel.com](https://vercel.com) แล้ว Login ด้วย GitHub
2. กด **"New Project"** → Import repo ที่เพิ่ง push
3. ตั้งค่า Environment Variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` = Project ID ของคุณ
   - `NEXT_PUBLIC_SANITY_DATASET` = `production`
4. กด **Deploy** รอประมาณ 2-3 นาที
5. รับ URL ฟรี เช่น `https://copa-realestate.vercel.app`

### ขั้นตอนที่ 5: ตั้งค่า CORS ใน Sanity

1. ไปที่ [manage.sanity.io](https://manage.sanity.io)
2. เลือก Project → **API** → **CORS Origins**
3. เพิ่ม: `https://your-domain.vercel.app`
4. เพิ่ม: `http://localhost:3000` (สำหรับ dev)

---

## 🖥️ Admin CMS (Sanity Studio)

เข้าใช้งานได้ที่: `https://your-domain.vercel.app/studio`

**สิ่งที่จัดการได้ใน CMS:**
- ✅ โปรเจกต์อสังหาริมทรัพย์ (เพิ่ม/แก้ไข/ลบ)
- ✅ บทความและข่าวสาร
- ✅ ตั้งค่าเว็บไซต์ (ชื่อ, โลโก้, ข้อมูลติดต่อ)

---

## 🛠️ รัน Local Development

```bash
npm install
npm run dev
```

เปิด: http://localhost:3000

---

## SEO Features

- ✅ Next.js Server-Side Rendering (SSR)
- ✅ Metadata สำหรับทุกหน้า
- ✅ Sitemap อัตโนมัติ (`/sitemap.xml`)
- ✅ Robots.txt (`/robots.txt`)
- ✅ Open Graph Tags
- ✅ Semantic HTML Structure
- ✅ Fast loading (Optimized images)
