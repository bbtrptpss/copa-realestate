import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  labels: {
    singular: "รูปภาพ/ไฟล์",
    plural: "คลังรูปภาพ",
  },
  admin: {
    group: "เนื้อหาเว็บไซต์",
  },
  access: {
    read: () => true,
  },
  upload: {
    staticDir: "public/media",
    imageSizes: [
      { name: "thumbnail", width: 400, height: 300, position: "centre" },
      { name: "card", width: 768, height: 512, position: "centre" },
      { name: "hero", width: 1920, height: 1080, position: "centre" },
    ],
    adminThumbnail: "thumbnail",
    mimeTypes: ["image/png", "image/jpeg", "image/webp", "image/gif"],
  },
  fields: [
    {
      name: "alt",
      label: "Alt Text (SEO)",
      type: "text",
      localized: true,
    },
    {
      name: "caption",
      label: "คำบรรยายรูป",
      type: "text",
      localized: true,
    },
  ],
};
