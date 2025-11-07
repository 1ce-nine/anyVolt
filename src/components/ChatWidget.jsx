import React, { useEffect, useRef, useState } from "react";
import ChatBox from "./ChatBox";
import "./ChatWidget.css";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const popupRef = useRef(null);

  // Close on Esc
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Optional: close when clicking outside the popup
  useEffect(() => {
    if (!open) return;
    const onClick = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        if (!e.target.closest(".chat-toggle-btn")) setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <>
      <button
        className="chat-toggle-btn"
        aria-label={open ? "Close chat" : "Open chat"}
        title={open ? "Close" : "Chat"}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "✕" : "💬"}
      </button>

      {open && (
        <div ref={popupRef} className="chat-popup">
          <div className="chat-inner">
            {/* ChatBox will auto-greet on first open if history is empty */}
            <ChatBox />
          </div>
        </div>
      )}
    </>
  );
}
