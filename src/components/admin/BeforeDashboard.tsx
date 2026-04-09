import React from "react";
import { getPayload } from "payload";
import config from "@/../payload.config";

/* ── data fetching ───────────────────────────────────────────── */
async function getStats() {
  try {
    const payload = await getPayload({ config });
    const [projects, posts, media, users] = await Promise.all([
      payload.count({ collection: "projects", overrideAccess: true }),
      payload.count({ collection: "posts", overrideAccess: true }),
      payload.count({ collection: "media", overrideAccess: true }),
      payload.count({ collection: "users", overrideAccess: true }),
    ]);
    return {
      projects: projects.totalDocs,
      posts: posts.totalDocs,
      media: media.totalDocs,
      users: users.totalDocs,
    };
  } catch {
    return { projects: 0, posts: 0, media: 0, users: 0 };
  }
}

/* ── stat card ───────────────────────────────────────────────── */
function StatCard({
  value, label, sub, color, href, icon,
}: {
  value: number; label: string; sub: string;
  color: string; href: string; icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      style={{
        display: "flex", flexDirection: "column", gap: "14px",
        background: "var(--theme-elevation-100)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "14px", padding: "20px",
        textDecoration: "none", color: "inherit",
        transition: "border-color .18s, background .18s, transform .15s",
        cursor: "pointer", position: "relative", overflow: "hidden",
      }}
      className="copa-stat-card"
    >
      {/* glow blob */}
      <span style={{
        position: "absolute", top: "-20px", right: "-20px",
        width: "100px", height: "100px", borderRadius: "50%",
        background: color, opacity: 0.07, filter: "blur(24px)",
        pointerEvents: "none",
      }} />

      <span style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        width: "40px", height: "40px", borderRadius: "10px",
        background: `${color}1a`, color, flexShrink: 0,
      }}>
        {icon}
      </span>

      <span style={{ color, fontSize: "36px", fontWeight: 700, lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>
        {value.toLocaleString()}
      </span>

      <span>
        <span style={{ display: "block", fontSize: "14px", fontWeight: 600, color: "var(--theme-text)", lineHeight: 1.2 }}>
          {label}
        </span>
        <span style={{ display: "block", fontSize: "12px", color: "var(--theme-text)", opacity: 0.35, marginTop: "3px" }}>
          {sub}
        </span>
      </span>
    </a>
  );
}

/* ── action row ──────────────────────────────────────────────── */
function ActionItem({
  href, label, desc, color, icon,
}: { href: string; label: string; desc: string; color: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      style={{
        display: "flex", alignItems: "center", gap: "14px",
        padding: "14px 16px",
        background: "var(--theme-elevation-100)",
        border: "1px solid rgba(255,255,255,0.05)",
        borderRadius: "10px", textDecoration: "none", color: "inherit",
        transition: "border-color .15s, background .15s",
      }}
      className="copa-action-item"
    >
      <span style={{
        display: "flex", alignItems: "center", justifyContent: "center",
        width: "38px", height: "38px", borderRadius: "8px", flexShrink: 0,
        background: `${color}18`, color,
      }}>
        {icon}
      </span>
      <span style={{ flex: 1, minWidth: 0 }}>
        <span style={{ display: "block", fontSize: "13.5px", fontWeight: 600, color: "var(--theme-text)" }}>
          {label}
        </span>
        <span style={{ display: "block", fontSize: "12px", color: "var(--theme-text)", opacity: 0.35, marginTop: "2px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {desc}
        </span>
      </span>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "rgba(255,255,255,0.2)", flexShrink: 0 }}>
        <path d="M9 18l6-6-6-6" />
      </svg>
    </a>
  );
}

/* ── main component ──────────────────────────────────────────── */
export const BeforeDashboard = async () => {
  const stats = await getStats();

  const now = new Date();
  const dateStr = now.toLocaleDateString("th-TH", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });

  return (
    <div style={{ paddingBottom: "40px" }}>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <div style={{
        position: "relative", overflow: "hidden",
        background: "linear-gradient(135deg,#1a1506 0%,#14120a 45%,#0d0f14 100%)",
        border: "1px solid rgba(201,169,110,0.18)",
        borderRadius: "16px", padding: "36px 40px",
        marginBottom: "28px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap", gap: "20px",
      }}>
        {/* radial glow */}
        <span style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at 15% 50%, rgba(201,169,110,0.09) 0%, transparent 60%)",
          pointerEvents: "none",
        }} />
        {/* big triangle watermark */}
        <span style={{ position: "absolute", top: "-20px", right: "-10px", opacity: 0.04, pointerEvents: "none" }}>
          <svg width="200" height="200" viewBox="0 0 36 36" fill="none">
            <path d="M18 3L33 30H3L18 3Z" fill="#C9A96E" />
          </svg>
        </span>

        <div style={{ position: "relative" }}>
          <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.24em", textTransform: "uppercase", color: "#C9A96E", opacity: 0.75, margin: "0 0 10px" }}>
            ยินดีต้อนรับ · Copacabana Group CMS
          </p>
          <h1 style={{ fontSize: "30px", fontWeight: 700, fontFamily: "Georgia,serif", color: "#f0e8d8", margin: "0 0 8px", lineHeight: 1.15, letterSpacing: "0.03em" }}>
            ระบบจัดการเนื้อหา
          </h1>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.38)", margin: 0, letterSpacing: "0.04em" }}>
            คอนโดหรูริมทะเล &nbsp;·&nbsp; พัทยา &amp; จอมเทียน
          </p>
          <div style={{ display: "flex", gap: "10px", marginTop: "20px", flexWrap: "wrap" }}>
            <a href="/admin/collections/projects/create" style={{
              display: "inline-flex", alignItems: "center", gap: "7px",
              padding: "9px 18px", borderRadius: "8px",
              background: "#C9A96E", color: "#0a0800",
              fontSize: "13px", fontWeight: 700, textDecoration: "none",
              letterSpacing: "0.02em",
            }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              เพิ่มโปรเจกต์
            </a>
            <a href="/admin/collections/posts/create" style={{
              display: "inline-flex", alignItems: "center", gap: "7px",
              padding: "9px 18px", borderRadius: "8px",
              background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.70)", fontSize: "13px", fontWeight: 600,
              textDecoration: "none",
            }}>
              เขียนบทความ
            </a>
          </div>
        </div>

        <div style={{ textAlign: "right", position: "relative" }}>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.28)", margin: "0 0 4px" }}>{dateStr}</p>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "flex-end", marginTop: "8px" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#34d399", display: "inline-block" }} />
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>ระบบทำงานปกติ</span>
          </div>
        </div>
      </div>

      {/* ── Section label ────────────────────────────────────── */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
        <span style={{ flex: 1, height: "1px", background: "rgba(201,169,110,0.15)" }} />
        <span style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A96E", opacity: 0.6, whiteSpace: "nowrap" }}>
          ภาพรวมข้อมูล
        </span>
        <span style={{ flex: 1, height: "1px", background: "rgba(201,169,110,0.15)" }} />
      </div>

      {/* ── Stats grid ───────────────────────────────────────── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "14px", marginBottom: "28px" }} className="copa-stats-grid">
        <StatCard value={stats.projects} label="โปรเจกต์" sub="คอนโดและโครงการ" color="#C9A96E" href="/admin/collections/projects"
          icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M9 21V7l6-4v18M9 11h6M9 15h6" /></svg>}
        />
        <StatCard value={stats.posts} label="บทความ" sub="ข่าวสารและบทความ" color="#60a5fa" href="/admin/collections/posts"
          icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="8" y1="13" x2="16" y2="13" /><line x1="8" y1="17" x2="13" y2="17" /></svg>}
        />
        <StatCard value={stats.media} label="ไฟล์ / สื่อ" sub="รูปภาพและเอกสาร" color="#a78bfa" href="/admin/collections/media"
          icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>}
        />
        <StatCard value={stats.users} label="ผู้ใช้งาน" sub="ผู้ดูแลระบบ" color="#34d399" href="/admin/collections/users"
          icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" /></svg>}
        />
      </div>

      {/* ── Bottom row ───────────────────────────────────────── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }} className="copa-bottom-grid">

        {/* Quick actions */}
        <div>
          <p style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", margin: "0 0 12px" }}>
            การดำเนินการด่วน
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <ActionItem href="/admin/collections/projects/create" label="เพิ่มโปรเจกต์ใหม่" desc="สร้างโครงการคอนโดใหม่" color="#C9A96E"
              icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M9 21V7l6-4v18M9 11h6" /></svg>}
            />
            <ActionItem href="/admin/collections/posts/create" label="เขียนบทความใหม่" desc="ข่าวสาร ไลฟ์สไตล์ อสังหาฯ" color="#60a5fa"
              icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>}
            />
            <ActionItem href="/admin/collections/media/create" label="อัปโหลดรูปภาพ" desc="เพิ่มสื่อและไฟล์ใหม่" color="#a78bfa"
              icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 16 12 12 8 16" /><line x1="12" y1="12" x2="12" y2="21" /><path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" /></svg>}
            />
            <ActionItem href="/admin/globals/site-settings" label="ตั้งค่าเว็บไซต์" desc="แก้ไข Site Settings" color="#f87171"
              icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>}
            />
          </div>
        </div>

        {/* System info + tips */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {/* System info */}
          <div style={{
            background: "var(--theme-elevation-100)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "12px", padding: "18px 20px",
          }}>
            <p style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", margin: "0 0 14px" }}>
              ข้อมูลระบบ
            </p>
            {[
              ["CMS Engine", "Payload CMS v3"],
              ["Framework", "Next.js 15"],
              ["Database", "PostgreSQL"],
              ["Language", "TypeScript"],
            ].map(([k, v]) => (
              <div key={k} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                <span style={{ fontSize: "12.5px", color: "rgba(255,255,255,0.35)" }}>{k}</span>
                <span style={{ fontSize: "12.5px", fontWeight: 600, color: "rgba(255,255,255,0.70)" }}>{v}</span>
              </div>
            ))}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 0" }}>
              <span style={{ fontSize: "12.5px", color: "rgba(255,255,255,0.35)" }}>สถานะ</span>
              <span style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "12.5px", fontWeight: 600, color: "#34d399" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#34d399", display: "inline-block" }} />
                ออนไลน์
              </span>
            </div>
          </div>

          {/* Tips */}
          <div style={{
            background: "rgba(201,169,110,0.04)",
            border: "1px solid rgba(201,169,110,0.14)",
            borderRadius: "12px", padding: "18px 20px",
          }}>
            <p style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C9A96E", opacity: 0.7, margin: "0 0 12px" }}>
              ✦ &nbsp;เคล็ดลับ
            </p>
            {[
              "รองรับ 2 ภาษา: ไทย 🇹🇭 และ English 🇬🇧",
              "โปรเจกต์รองรับ Draft / Publish workflow",
              "อัปโหลดรูปได้สูงสุด 10MB ต่อไฟล์",
              "ใช้ Localization เพื่อแปลเนื้อหาแต่ละภาษา",
            ].map((tip) => (
              <p key={tip} style={{ display: "flex", gap: "8px", fontSize: "12.5px", color: "rgba(255,255,255,0.45)", margin: "0 0 8px", lineHeight: 1.5 }}>
                <span style={{ color: "#C9A96E", opacity: 0.6, flexShrink: 0, marginTop: "1px" }}>›</span>
                {tip}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
