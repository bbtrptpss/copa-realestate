import { Metadata } from "next";
import Hero from "@/components/home/Hero";
import WhyCopaSection from "@/components/home/WhyCopaSection";
import ProjectsCarousel from "@/components/home/ProjectsCarousel";
import CentralCarousel from "@/components/home/CentralCarousel";
import LuxuryBanner from "@/components/home/LuxuryBanner";
import BrandStorySection from "@/components/home/BrandStorySection";
import AwardsSection from "@/components/home/AwardsSection";
import NewsSection from "@/components/home/NewsSection";
import NewsletterSection from "@/components/home/NewsletterSection";

export const metadata: Metadata = {
  title: "Copacabana Group | คอนโดหรูริมทะเล พัทยา จอมเทียน",
  description:
    "Copacabana Group อสังหาริมทรัพย์หรูริมทะเล พัทยา จอมเทียน คอนโดวิวทะเลพาโนรามา สิ่งอำนวยความสะดวกระดับ 5 ดาว เหมาะสำหรับการลงทุนและพักอาศัย",
};

export default function HomePage() {
  return (
    <>
      {/* 1. Full-screen Hero Carousel */}
      <Hero />

      {/* Awards & Stats Timeline */}
      <AwardsSection />

      {/* Brand Story — lifestyle narrative */}
      <BrandStorySection />

      {/* Featured Projects — 3D Carousel */}
      <ProjectsCarousel />

      {/* Central Facilities Carousel */}
      <CentralCarousel />

      {/* News & Articles */}
      <NewsSection />

      {/* Why Copa — 3-column trust highlights */}
      <WhyCopaSection />

      {/* Newsletter Signup */}
      <NewsletterSection />
    </>
  );
}
