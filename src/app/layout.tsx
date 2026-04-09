import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Copacabana Group | คอนโดหรู ริมทะเล พัทยา จอมเทียน",
    template: "%s | Copacabana Group",
  },
  description:
    "อสังหาริมทรัพย์หรูริมทะเล พัทยา จอมเทียน คอนโดวิวทะเล ราคาดี ทำเลทอง เหมาะสำหรับการลงทุนและพักอาศัย",
  keywords: ["คอนโดพัทยา", "คอนโดจอมเทียน", "อสังหาริมทรัพย์ริมทะเล", "คอนโดวิวทะเล", "ลงทุนอสังหา"],
  authors: [{ name: "Copacabana Group" }],
  openGraph: {
    type: "website",
    locale: "th_TH",
    siteName: "Copacabana Group",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
