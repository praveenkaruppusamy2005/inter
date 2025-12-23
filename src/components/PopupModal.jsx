import React from "react";

export default function PopupModal({ open, onClose, title, children }) {
  if (!open) return null;
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(0,0,0,0.35)",
      zIndex: 3000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background 0.2s"
    }}>
      <div style={{
        background: "#fff",
        borderRadius: 16,
        boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
        minWidth: 320,
        maxWidth: 400,
        padding: "32px 28px 24px 28px",
        position: "relative",
        animation: "modalIn 0.2s cubic-bezier(.4,2,.6,1)"
      }}>
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            background: "none",
            border: "none",
            fontSize: 20,
            cursor: "pointer",
            color: "#888"
          }}
          aria-label="Close"
        >
          ×
        </button>
        {title && <h2 style={{ margin: 0, marginBottom: 12, fontSize: 20, fontWeight: 700 }}>{title}</h2>}
        <div>{children}</div>
      </div>
      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: translateY(40px) scale(0.98); }
          to { opacity: 1; transform: none; }
        }
      `}</style>
    </div>
  );
}
