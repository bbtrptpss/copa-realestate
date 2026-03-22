import { defineField, defineType } from "sanity";

export const projectSchema = defineType({
  name: "project",
  title: "โปรเจกต์ (Projects)",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "ชื่อโปรเจกต์",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "titleEn",
      title: "ชื่อโปรเจกต์ (English)",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "status",
      title: "สถานะโปรเจกต์",
      type: "string",
      options: {
        list: [
          { title: "พร้อมขาย", value: "available" },
          { title: "กำลังก่อสร้าง", value: "construction" },
          { title: "ขายหมดแล้ว", value: "sold_out" },
        ],
      },
    }),
    defineField({
      name: "mainImage",
      title: "รูปหลัก",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "gallery",
      title: "แกลเลอรี่",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "location",
      title: "ที่ตั้ง",
      type: "string",
    }),
    defineField({
      name: "priceRange",
      title: "ช่วงราคา",
      type: "string",
    }),
    defineField({
      name: "completionYear",
      title: "ปีที่แล้วเสร็จ",
      type: "string",
    }),
    defineField({
      name: "shortDescription",
      title: "คำอธิบายย่อ",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "description",
      title: "รายละเอียด",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "highlights",
      title: "จุดเด่น",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "featured",
      title: "แนะนำ (Featured)",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "ลำดับการแสดง",
      type: "number",
    }),
  ],
  preview: {
    select: { title: "title", media: "mainImage" },
  },
});
