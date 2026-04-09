import "@/app/globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PopupModal from "@/components/ui/PopupModal";
import FloatingSocial from "@/components/ui/FloatingSocial";
import ScrollToTop from "@/components/ui/ScrollToTop";
import EntrySplash from "@/components/ui/EntrySplash";
import I18nProvider from "@/components/providers/I18nProvider";

const chonburiSans = localFont({
  src: "../../fonts/Chonburi/Chonburi-Regular.ttf",
  weight: "400",
  variable: "--font-thai-sans",
  display: "swap",
});

const chonburiSerif = localFont({
  src: "../../fonts/Chonburi/Chonburi-Regular.ttf",
  weight: "400",
  variable: "--font-thai-serif",
  display: "swap",
});

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body className={`${chonburiSans.variable} ${chonburiSerif.variable} font-sans`}>
        <I18nProvider>
          <EntrySplash />
          <PopupModal />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingSocial />
          <ScrollToTop />
        </I18nProvider>
      </body>
    </html>
  );
}
