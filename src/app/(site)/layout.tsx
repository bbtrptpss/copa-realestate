import "@/app/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PopupModal from "@/components/ui/PopupModal";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body>
        <PopupModal />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
