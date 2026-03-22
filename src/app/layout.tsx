import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Copa Real Estate | คอนโดหรู ริมทะเล พัทยา จอมเทียน",
    template: "%s | Copa Real Estate",
  },
  description:
    "อสังหาริมทรัพย์หรูริมทะเล พัทยา จอมเทียน คอนโดวิวทะเล ราคาดี ทำเลทอง เหมาะสำหรับการลงทุนและพักอาศัย",
  keywords: ["คอนโดพัทยา", "คอนโดจอมเทียน", "อสังหาริมทรัพย์ริมทะเล", "คอนโดวิวทะเล", "ลงทุนอสังหา"],
  authors: [{ name: "Copa Real Estate" }],
  openGraph: {
    type: "website",
    locale: "th_TH",
    siteName: "Copa Real Estate",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
