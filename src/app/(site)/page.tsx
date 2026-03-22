import { Metadata } from "next";
import Hero from "@/components/home/Hero";
import WhyCopaSection from "@/components/home/WhyCopaSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import LuxuryBanner from "@/components/home/LuxuryBanner";
import BrandStorySection from "@/components/home/BrandStorySection";
import AwardsSection from "@/components/home/AwardsSection";
import NewsSection from "@/components/home/NewsSection";
import NewsletterSection from "@/components/home/NewsletterSection";

export const metadata: Metadata = {
  title: "Copa Real Estate | คอนโดหรูริมทะเล พัทยา จอมเทียน",
  description:
    "Copa Real Estate อสังหาริมทรัพย์หรูริมทะเล พัทยา จอมเทียน คอนโดวิวทะเลพาโนรามา สิ่งอำนวยความสะดวกระดับ 5 ดาว เหมาะสำหรับการลงทุนและพักอาศัย",
};

export default function HomePage() {
  return (
    <>
      {/* 1. Full-screen Hero Carousel */}
      <Hero />

      {/* 2. Why Copa — 3-column trust highlights */}
      <WhyCopaSection />

      {/* 3. Featured Projects — Sansiri-style property cards */}
      <ProjectsSection />

      {/* 4. Luxury Collection Banner */}
      <LuxuryBanner />

      {/* 5. Brand Story — lifestyle narrative */}
      <BrandStorySection />

      {/* 6. Awards & Stats */}
      <AwardsSection />

      {/* 7. News & Articles */}
      <NewsSection />

      {/* 8. Newsletter Signup */}
      <NewsletterSection />
    </>
  );
}
