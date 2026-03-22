import { defineField, defineType } from "sanity";

export const settingsSchema = defineType({
  name: "siteSettings",
  title: "ตั้งค่าเว็บไซต์ (Site Settings)",
  type: "document",
  fields: [
    defineField({
      name: "siteName",
      title: "ชื่อเว็บไซต์",
      type: "string",
    }),
    defineField({
      name: "tagline",
      title: "คำโปรย (Tagline)",
      type: "string",
    }),
    defineField({
      name: "logo",
      title: "โลโก้",
      type: "image",
    }),
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
    }),
    defineField({
      name: "heroSubtitle",
      title: "Hero Subtitle",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "heroImage",
      title: "รูป Hero",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "aboutTitle",
      title: "หัวข้อ About",
      type: "string",
    }),
    defineField({
      name: "aboutText",
      title: "เนื้อหา About",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "phone",
      title: "เบอร์โทรศัพท์",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "อีเมล",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "ที่อยู่",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "lineId",
      title: "LINE ID",
      type: "string",
    }),
    defineField({
      name: "facebook",
      title: "Facebook URL",
      type: "url",
    }),
    defineField({
      name: "instagram",
      title: "Instagram URL",
      type: "url",
    }),
    defineField({
      name: "youtube",
      title: "YouTube URL",
      type: "url",
    }),
    defineField({
      name: "seoTitle",
      title: "SEO Title (Default)",
      type: "string",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description (Default)",
      type: "text",
      rows: 2,
    }),
  ],
});
