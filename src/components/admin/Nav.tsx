"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/* ── icons ───────────────────────────────────────────────────── */
const ico = (d: string | string[], extra?: string) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"
    style={{ flexShrink: 0 }}>
    {(Array.isArray(d) ? d : [d]).map((p, i) => <path key={i} d={p} />)}
    {extra && <path d={extra} />}
  </svg>
);

const icons = {
  dashboard: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  ),
  projects: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d="M3 22h18" />
      <path d="M9 22V8.5L15 5v17" />
      <path d="M9 12h6" />
      <path d="M9 16h6" />
    </svg>
  ),
  posts: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="13" y2="17" />
    </svg>
  ),
  media: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <rect x="3" y="3" width="18" height="18" rx="2.5" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  ),
  users: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <circle cx="9" cy="7" r="4" />
      <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
      <path d="M16 3.13a4 4 0 010 7.75" />
      <path d="M21 21v-2a4 4 0 00-3-3.87" />
    </svg>
  ),
  settings: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
    </svg>
  ),
  globe: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
    </svg>
  ),
  logout: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  ),
};

/* ── nav structure ───────────────────────────────────────────── */
const navGroups = [
  {
    label: null,
    items: [
      { href: "/admin", label: "ภาพรวม", icon: icons.dashboard, exact: true },
    ],
  },
  {
    label: "เนื้อหา",
    items: [
      { href: "/admin/collections/projects", label: "โปรเจกต์", icon: icons.projects },
      { href: "/admin/collections/posts",    label: "บทความ",    icon: icons.posts    },
      { href: "/admin/collections/media",    label: "สื่อ / รูปภาพ", icon: icons.media },
    ],
  },
  {
    label: "ระบบ",
    items: [
      { href: "/admin/collections/users",         label: "ผู้ใช้งาน",     icon: icons.users    },
      { href: "/admin/globals/site-settings",     label: "ตั้งค่าเว็บไซต์", icon: icons.settings },
    ],
  },
];

/* ── shared styles ───────────────────────────────────────────── */
const S = {
  sidebar: {
    display: "flex",
    flexDirection: "column" as const,
    height: "100%",
    background: "linear-gradient(180deg, #0f1119 0%, #0b0d13 100%)",
    borderRight: "1px solid rgba(201,169,110,0.13)",
    boxShadow: "4px 0 32px rgba(0,0,0,0.45)",
    overflowY: "auto" as const,
    overflowX: "hidden" as const,
  },
  logoWrap: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "24px 20px 20px",
    borderBottom: "1px solid rgba(201,169,110,0.09)",
    flexShrink: 0,
  },
  navScroll: {
    flex: 1,
    padding: "10px 10px 4px",
    overflowY: "auto" as const,
  },
  sectionLabel: {
    fontSize: "9.5px",
    fontWeight: 700,
    letterSpacing: "0.22em",
    textTransform: "uppercase" as const,
    color: "rgba(201,169,110,0.5)",
    padding: "18px 12px 6px",
    display: "block",
    userSelect: "none" as const,
  },
  divider: {
    height: "1px",
    background: "rgba(255,255,255,0.045)",
    margin: "6px 10px 0",
  },
  footer: {
    borderTop: "1px solid rgba(201,169,110,0.09)",
    padding: "12px 10px 14px",
    flexShrink: 0,
    display: "flex",
    flexDirection: "column" as const,
    gap: "4px",
  },
};

function NavLink({
  href, label, icon, active,
}: { href: string; label: string; icon: React.ReactNode; active: boolean }) {
  return (
    <Link
      href={href}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "11px",
        padding: "9.5px 13px",
        borderRadius: "9px",
        fontSize: "13.5px",
        fontWeight: active ? 600 : 450,
        fontFamily: "inherit",
        letterSpacing: "0.01em",
        color: active ? "#C9A96E" : "rgba(210,215,228,0.48)",
        textDecoration: "none",
        background: active ? "rgba(201,169,110,0.09)" : "transparent",
        border: `1px solid ${active ? "rgba(201,169,110,0.18)" : "transparent"}`,
        marginBottom: "2px",
        transition: "all 0.14s ease",
        position: "relative",
      }}
      className={active ? "copa-nav-active" : "copa-nav-link"}
    >
      {/* left accent bar */}
      {active && (
        <span style={{
          position: "absolute",
          left: 0, top: "18%", bottom: "18%",
          width: "2.5px",
          borderRadius: "0 3px 3px 0",
          background: "#C9A96E",
        }} />
      )}
      <span style={{
        color: active ? "#C9A96E" : "rgba(210,215,228,0.32)",
        display: "flex", alignItems: "center",
        transition: "color 0.14s",
      }}>
        {icon}
      </span>
      {label}
    </Link>
  );
}

function FooterLink({
  href, label, icon, external,
}: { href: string; label: string; icon: React.ReactNode; external?: boolean }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      style={{
        display: "flex", alignItems: "center", gap: "10px",
        padding: "8px 13px", borderRadius: "9px",
        fontSize: "13px", fontWeight: 450, letterSpacing: "0.01em",
        color: "rgba(210,215,228,0.38)",
        textDecoration: "none",
        transition: "all 0.14s ease",
      }}
      className="copa-footer-link"
    >
      <span style={{ color: "rgba(210,215,228,0.28)", display: "flex" }}>{icon}</span>
      {label}
      {external && (
        <span style={{ marginLeft: "auto", opacity: 0.4, fontSize: "10px" }}>↗</span>
      )}
    </a>
  );
}

/* ── component ───────────────────────────────────────────────── */
export const Nav = () => {
  const pathname = usePathname();

  const isActive = (href: string, exact = false) =>
    exact ? pathname === href : pathname.startsWith(href);

  return (
    <div style={S.sidebar}>

      {/* ── Logo ─────────────────────────────────────────────── */}
      <div style={S.logoWrap}>
        <svg width="33" height="33" viewBox="0 0 36 36" fill="none">
          <path d="M18 3L33 30H3L18 3Z" fill="#C9A96E" opacity="0.14" />
          <path d="M18 3L33 30H3L18 3Z" fill="none" stroke="#C9A96E" strokeWidth="0.85" />
          <path d="M18 10L28 28H8L18 10Z" fill="none" stroke="#C9A96E" strokeWidth="0.6" opacity="0.5" />
          <path d="M18 17L23 26H13L18 17Z" fill="#C9A96E" opacity="0.32" />
        </svg>
        <div>
          <p style={{
            margin: 0, lineHeight: 1,
            fontSize: "15px", fontWeight: 700,
            letterSpacing: "0.16em", textTransform: "uppercase" as const,
            color: "#C9A96E", fontFamily: "Georgia, serif",
          }}>
            Copa
          </p>
          <p style={{
            margin: "4px 0 0", lineHeight: 1,
            fontSize: "9px", letterSpacing: "0.24em", textTransform: "uppercase" as const,
            color: "rgba(255,255,255,0.28)",
          }}>
            Real Estate CMS
          </p>
        </div>
      </div>

      {/* ── Nav groups ───────────────────────────────────────── */}
      <div style={S.navScroll}>
        {navGroups.map((group, gi) => (
          <div key={gi}>
            {gi > 0 && <div style={S.divider} />}
            {group.label && (
              <span style={S.sectionLabel}>{group.label}</span>
            )}
            {!group.label && gi === 0 && (
              <div style={{ height: "8px" }} />
            )}
            {group.items.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                icon={item.icon}
                active={isActive(item.href, item.exact)}
              />
            ))}
          </div>
        ))}
      </div>

      {/* ── Footer ───────────────────────────────────────────── */}
      <div style={S.footer}>
        <FooterLink href="/" label="ดูเว็บไซต์" icon={icons.globe} external />
        <FooterLink href="/admin/logout" label="ออกจากระบบ" icon={icons.logout} />
      </div>
    </div>
  );
};
