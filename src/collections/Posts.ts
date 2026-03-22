import type { CollectionConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

export const Posts: CollectionConfig = {
  slug: "posts",
  labels: {
    singular: "บทความ",
    plural: "บทความ (News & Articles)",
  },
  admin: {
    useAsTitle: "title",
    group: "เนื้อหาเว็บไซต์",
    defaultColumns: ["title", "category", "publishedAt", "updatedAt"],
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
          label: "เนื้อหา",
          fields: [
            {
              name: "title",
              label: "หัวข้อบทความ",
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
            },
            {
              name: "category",
              label: "หมวดหมู่",
              type: "select",
              options: [
                { label: "อสังหาริมทรัพย์", value: "real-estate" },
                { label: "ท่องเที่ยว", value: "travel" },
                { label: "ไลฟ์สไตล์", value: "lifestyle" },
                { label: "ข่าวสาร", value: "news" },
              ],
            },
            {
              name: "publishedAt",
              label: "วันที่เผยแพร่",
              type: "date",
              admin: {
                date: { pickerAppearance: "dayAndTime" },
              },
            },
            {
              name: "mainImage",
              label: "รูปหน้าปก",
              type: "upload",
              relationTo: "media",
            },
            {
              name: "excerpt",
              label: "บทสรุปย่อ",
              type: "textarea",
              localized: true,
            },
            {
              name: "body",
              label: "เนื้อหา",
              type: "richText",
              localized: true,
              editor: lexicalEditor({}),
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
