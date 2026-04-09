"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import enterImg from "@/Picture/Enter Site/490908307_122215547558059484_1112615155767914977_n.jpg";

export default function EntrySplash() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const enter = () => {
    setLeaving(true);
    document.body.style.overflow = "";
    setTimeout(() => setVisible(false), 700);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        opacity: leaving ? 0 : 1,
        transition: "opacity 0.7s ease",
      }}
    >
      {/* Background image */}
      <Image
        src={enterImg}
        alt="Copacabana Group"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.65) 100%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
          textAlign: "center",
          padding: "1.5rem",
        }}
      >
        {/* Brand */}
        <div>
          <p
            style={{
              color: "#d4a017",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Welcome to
          </p>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.1,
              marginBottom: "0.75rem",
            }}
          >
            Copacabana Group
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "clamp(0.85rem, 2vw, 1.05rem)",
              letterSpacing: "0.08em",
            }}
          >
            อสังหาริมทรัพย์หรูริมทะเล พัทยา — จอมเทียน
          </p>
        </div>

        {/* Divider */}
        <div style={{ width: "48px", height: "1px", background: "#d4a017" }} />

        {/* Enter button */}
        <button
          onClick={enter}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            background: "transparent",
            border: "1.5px solid rgba(255,255,255,0.7)",
            color: "#ffffff",
            padding: "14px 40px",
            fontSize: "0.82rem",
            fontWeight: 600,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "border-color 0.3s, background 0.3s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = "#d4a017";
            (e.currentTarget as HTMLButtonElement).style.background = "rgba(212,160,23,0.15)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.7)";
            (e.currentTarget as HTMLButtonElement).style.background = "transparent";
          }}
        >
          <span>Enter Site</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 16, height: 16 }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </button>

        <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.7rem", letterSpacing: "0.1em" }}>
          เข้าสู่เว็บไซต์
        </p>
      </div>
    </div>
  );
}
