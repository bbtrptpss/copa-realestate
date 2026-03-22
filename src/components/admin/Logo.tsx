import React from "react";

export const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "4px 0",
      }}
    >
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18 3L33 30H3L18 3Z" fill="#C9A96E" />
        <path d="M18 10L28 28H8L18 10Z" fill="#0f0f0f" />
        <path d="M18 17L23 26H13L18 17Z" fill="#C9A96E" opacity="0.6" />
      </svg>
      <div>
        <div
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "17px",
            fontWeight: "700",
            color: "#C9A96E",
            letterSpacing: "0.18em",
            lineHeight: 1,
            textTransform: "uppercase",
          }}
        >
          Copa
        </div>
        <div
          style={{
            fontSize: "8.5px",
            color: "#888",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            marginTop: "3px",
          }}
        >
          Real Estate CMS
        </div>
      </div>
    </div>
  );
};
