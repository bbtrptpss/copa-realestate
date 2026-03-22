import type { GlobalConfig } from "payload";

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  label: "ตั้งค่าเว็บไซต์ (Site Settings)",
  admin: {
    group: "การจัดการระบบ",
  },
  access: {
    read: () => true,
    update: ({ req }) => req.user?.role === "admin",
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "ข้อมูลทั่วไป",
          fields: [
            {
              name: "siteName",
              label: "ชื่อเว็บไซต์",
              type: "text",
              localized: true,
            },
            {
              name: "tagline",
              label: "คำโปรย",
              type: "text",
              localized: true,
            },
            {
              name: "logo",
              label: "โลโก้",
              type: "upload",
              relationTo: "media",
            },
            {
              name: "heroTitle",
              label: "Hero Title หน้าหลัก",
              type: "text",
              localized: true,
            },
            {
              name: "heroSubtitle",
              label: "Hero Subtitle หน้าหลัก",
              type: "textarea",
              localized: true,
            },
            {
              name: "heroImage",
              label: "รูป Hero หน้าหลัก",
              type: "upload",
              relationTo: "media",
            },
          ],
        },
        {
          label: "ข้อมูลติดต่อ",
          fields: [
            {
              name: "phone",
              label: "เบอร์โทรศัพท์",
              type: "text",
            },
            {
              name: "email",
              label: "อีเมล",
              type: "email",
            },
            {
              name: "address",
              label: "ที่อยู่",
              type: "textarea",
              localized: true,
            },
            {
              name: "lineId",
              label: "LINE ID",
              type: "text",
            },
            {
              name: "openHours",
              label: "เวลาทำการ",
              type: "text",
              localized: true,
            },
          ],
        },
        {
          label: "Social Media",
          fields: [
            { name: "facebook", label: "Facebook URL", type: "text" },
            { name: "instagram", label: "Instagram URL", type: "text" },
            { name: "youtube", label: "YouTube URL", type: "text" },
            { name: "line", label: "LINE URL", type: "text" },
          ],
        },
        {
          label: "SEO",
          fields: [
            {
              name: "seoTitle",
              label: "Default SEO Title",
              type: "text",
              localized: true,
            },
            {
              name: "seoDescription",
              label: "Default SEO Description",
              type: "textarea",
              localized: true,
            },
          ],
        },
      ],
    },
  ],
};
