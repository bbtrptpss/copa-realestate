import type { CollectionConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

export const Projects: CollectionConfig = {
  slug: "projects",
  labels: {
    singular: "โปรเจกต์",
    plural: "โปรเจกต์ (Projects)",
  },
  admin: {
    useAsTitle: "title",
    group: "เนื้อหาเว็บไซต์",
    defaultColumns: ["title", "location", "status", "featured", "updatedAt"],
    listSearchableFields: ["title"],
  },
  access: {
    read: () => true,
    create: ({ req }) => ["admin", "editor"].includes(req.user?.role ?? ""),
    update: ({ req }) => ["admin", "editor"].includes(req.user?.role ?? ""),
    delete: ({ req }) => req.user?.role === "admin",
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "ข้อมูลทั่วไป",
          fields: [
            {
              name: "title",
              label: "ชื่อโปรเจกต์",
              type: "text",
              required: true,
              localized: true,
            },
            {
              name: "slug",
              label: "Slug (URL)",
              type: "text",
              required: true,
              unique: true,
              admin: {
                description: "ใช้สำหรับ URL เช่น copa-beach-jomtien",
              },
            },
            {
              name: "saleStatus",
              label: "สถานะการขาย",
              type: "select",
              required: true,
              defaultValue: "available",
              options: [
                { label: "🟢 พร้อมขาย", value: "available" },
                { label: "🟡 กำลังก่อสร้าง", value: "construction" },
                { label: "🔴 ขายหมดแล้ว", value: "sold_out" },
              ],
            },
            {
              name: "featured",
              label: "แนะนำในหน้าหลัก",
              type: "checkbox",
              defaultValue: false,
            },
            {
              name: "order",
              label: "ลำดับการแสดง",
              type: "number",
              defaultValue: 0,
            },
          ],
        },
        {
          label: "รายละเอียด",
          fields: [
            {
              name: "shortDescription",
              label: "คำอธิบายย่อ",
              type: "textarea",
              localized: true,
            },
            {
              name: "description",
              label: "รายละเอียดเต็ม",
              type: "richText",
              localized: true,
              editor: lexicalEditor({}),
            },
            {
              name: "highlights",
              label: "จุดเด่น",
              type: "array",
              labels: { singular: "จุดเด่น", plural: "จุดเด่นทั้งหมด" },
              fields: [
                {
                  name: "text",
                  label: "ข้อความ",
                  type: "text",
                  localized: true,
                },
              ],
            },
          ],
        },
        {
          label: "ข้อมูลโครงการ",
          fields: [
            {
              name: "location",
              label: "ที่ตั้ง",
              type: "text",
              localized: true,
            },
            {
              name: "priceRange",
              label: "ช่วงราคา",
              type: "text",
              localized: true,
            },
            {
              name: "completionYear",
              label: "ปีที่แล้วเสร็จ",
              type: "text",
            },
            {
              name: "totalUnits",
              label: "จำนวนยูนิตทั้งหมด",
              type: "text",
            },
            {
              name: "floors",
              label: "จำนวนชั้น",
              type: "text",
            },
          ],
        },
        {
          label: "รูปภาพ",
          fields: [
            {
              name: "mainImage",
              label: "รูปหลัก",
              type: "upload",
              relationTo: "media",
              required: true,
            },
            {
              name: "gallery",
              label: "แกลเลอรี่",
              type: "array",
              fields: [
                {
                  name: "image",
                  label: "รูปภาพ",
                  type: "upload",
                  relationTo: "media",
                },
              ],
            },
          ],
        },
        {
          label: "SEO",
          fields: [
            {
              name: "seoTitle",
              label: "SEO Title",
              type: "text",
              localized: true,
            },
            {
              name: "seoDescription",
              label: "SEO Description",
              type: "textarea",
              localized: true,
            },
          ],
        },
      ],
    },
  ],
};
