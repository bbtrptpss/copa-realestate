import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
    group: "การจัดการระบบ",
  },
  labels: {
    singular: "ผู้ใช้งาน",
    plural: "ผู้ใช้งานทั้งหมด",
  },
  access: {
    read: () => true,
    create: ({ req }) => req.user?.role === "admin",
    update: ({ req }) => !!req.user,
    delete: ({ req }) => req.user?.role === "admin",
  },
  fields: [
    {
      name: "name",
      label: "ชื่อ-นามสกุล",
      type: "text",
      required: true,
    },
    {
      name: "role",
      label: "บทบาท",
      type: "select",
      defaultValue: "editor",
      required: true,
      options: [
        { label: "Admin (จัดการทุกอย่าง)", value: "admin" },
        { label: "Editor (แก้ไขเนื้อหา)", value: "editor" },
        { label: "Viewer (ดูอย่างเดียว)", value: "viewer" },
      ],
    },
  ],
};
