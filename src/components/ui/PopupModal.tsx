"use client";

import { useEffect, useState } from "react";
import { X, Phone } from "lucide-react";
import Image from "next/image";

const SESSION_KEY = "copa_popup_shown";

// ---- เปลี่ยนตรงนี้เมื่อมีรูปจริง ----
const AD_IMAGE =
  "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&q=85";
// -------------------------------------

export default function PopupModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem(SESSION_KEY);
    if (!alreadyShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem(SESSION_KEY, "true");
      }, 600);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isOpen) return null;

  return (
    <div
      onClick={() => setIsOpen(false)}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "rgba(0,0,0,0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        animation: "fadeIn 0.3s ease-out",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "720px",          /* ← กว้างขึ้นบน PC */
          borderRadius: "1rem",
          overflow: "hidden",
          boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
          background: "#060e1a",
        }}
      >
        {/* ปุ่มปิด */}
        <button
          onClick={() => setIsOpen(false)}
          aria-label="ปิด"
          style={{
            position: "absolute",
            top: "14px",
            right: "14px",
            zIndex: 20,
            background: "rgba(255,255,255,0.9)",
            border: "none",
            borderRadius: "50%",
            width: "36px",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
          }}
        >
          <X size={20} color="#0f2040" />
        </button>

        {/* รูปโครงการ — สูง 420px บน desktop */}
        <div style={{ position: "relative", width: "100%", height: "clamp(240px, 45vw, 420px)" }}>
          <Image
            src={AD_IMAGE}
            alt="โครงการ Copa Real Estate"
            fill
            className="object-cover"
            priority
          />
          {/* gradient overlay ด้านล่าง */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, transparent 50%, #060e1a 100%)",
            }}
          />

          {/* badge มุมบนซ้าย */}
          <div
            style={{
              position: "absolute",
              top: "16px",
              left: "16px",
              background: "#d4a017",
              color: "#fff",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              padding: "5px 12px",
              borderRadius: "2px",
            }}
          >
            เปิดจองแล้ว
          </div>

          {/* ชื่อโครงการทับบนรูป */}
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              left: "24px",
              right: "24px",
            }}
          >
            <p
              style={{
                color: "#f8c932",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                marginBottom: "6px",
              }}
            >
              Copa Real Estate
            </p>
            <h2
              style={{
                color: "#ffffff",
                fontSize: "clamp(1.4rem, 4vw, 2rem)",
                fontWeight: 700,
                fontFamily: "'Playfair Display', serif",
                lineHeight: 1.25,
                textShadow: "0 2px 12px rgba(0,0,0,0.5)",
              }}
            >
              คอนโดหรู วิวทะเล<br />ริมหาดจอมเทียน
            </h2>
          </div>
        </div>

        {/* ส่วน CTA */}
        <div
          style={{
            padding: "1.5rem 1.75rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p style={{ color: "#a5b4c8", fontSize: "0.875rem", marginBottom: "4px" }}>
              ราคาเริ่มต้น
            </p>
            <p
              style={{
                color: "#f8c932",
                fontSize: "1.6rem",
                fontWeight: 700,
                fontFamily: "'Playfair Display', serif",
                lineHeight: 1,
              }}
            >
              2.9 ล้านบาท
            </p>
            <p style={{ color: "#8899aa", fontSize: "0.78rem", marginTop: "2px" }}>
              * ราคาพิเศษช่วงเปิดตัว
            </p>
          </div>

          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <a
              href="tel:+66800000000"
              onClick={() => setIsOpen(false)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "transparent",
                border: "1.5px solid #f8c932",
                color: "#f8c932",
                padding: "10px 18px",
                borderRadius: "2px",
                fontWeight: 600,
                fontSize: "0.82rem",
                textDecoration: "none",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              <Phone size={15} />
              โทรสอบถาม
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              style={{
                display: "inline-block",
                background: "#d4a017",
                color: "#ffffff",
                padding: "10px 22px",
                borderRadius: "2px",
                fontWeight: 600,
                fontSize: "0.82rem",
                textDecoration: "none",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              จองเลย
            </a>
          </div>
        </div>

        {/* ปิดแบบ subtle */}
        <div style={{ textAlign: "center", paddingBottom: "14px" }}>
          <button
            onClick={() => setIsOpen(false)}
            style={{
              background: "none",
              border: "none",
              color: "#4a5568",
              fontSize: "0.78rem",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            ปิด / ไม่สนใจ
          </button>
        </div>
      </div>
    </div>
  );
}
