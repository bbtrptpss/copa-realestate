import { defineField, defineType } from "sanity";

export const postSchema = defineType({
  name: "post",
  title: "บทความ (News & Articles)",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "หัวข้อบทความ",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "หมวดหมู่",
      type: "string",
      options: {
        list: [
          { title: "อสังหาริมทรัพย์", value: "real-estate" },
          { title: "ท่องเที่ยว", value: "travel" },
          { title: "ไลฟ์สไตล์", value: "lifestyle" },
          { title: "ข่าวสาร", value: "news" },
        ],
      },
    }),
    defineField({
      name: "mainImage",
      title: "รูปหน้าปก",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "excerpt",
      title: "บทสรุปย่อ",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "body",
      title: "เนื้อหา",
      type: "array",
      of: [{ type: "block" }, { type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "publishedAt",
      title: "วันที่เผยแพร่",
      type: "datetime",
    }),
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 2,
    }),
  ],
  preview: {
    select: { title: "title", media: "mainImage" },
  },
});
