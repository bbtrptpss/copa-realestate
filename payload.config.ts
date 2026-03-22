import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

import { Users } from "./src/collections/Users";
import { Media } from "./src/collections/Media";
import { Projects } from "./src/collections/Projects";
import { Posts } from "./src/collections/Posts";
import { SiteSettings } from "./src/globals/SiteSettings";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    theme: "dark",
    meta: {
      titleSuffix: "— Copa Real Estate CMS",
    },
    css: path.resolve(dirname, "src/components/admin/custom.css"),
    components: {
      Nav: "/src/components/admin/Nav#Nav",
      graphics: {
        Logo: "/src/components/admin/Logo#Logo",
        Icon: "/src/components/admin/Icon#Icon",
      },
      beforeDashboard: ["/src/components/admin/BeforeDashboard#BeforeDashboard"],
    },
  },
  localization: {
    locales: [
      { label: "🇹🇭 ภาษาไทย", code: "th" },
      { label: "🇬🇧 English", code: "en" },
    ],
    defaultLocale: "th",
    fallback: true,
  },
  collections: [Users, Media, Projects, Posts],
  globals: [SiteSettings],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || "copa-local-dev-secret",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || "",
    },
  }),
  sharp,
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000",
  upload: {
    limits: {
      fileSize: 10000000,
    },
  },
});
