import { useEffect, useRef, useState } from "react";
import "./ChatWidget.css";

export default function ChatWidget({ productDocumentId, productId }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: "greet", role: "assistant", text: "Hi! Ask me about this product anytime." }
  ]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [typing, setTyping] = useState(false);
  const boxRef = useRef(null);
  const inputRef = useRef(null);
  const abortRef = useRef(null);

  // Focus input when the chat opens
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 0);
  }, [open]);

  // Scroll to bottom on new messages
  useEffect(() => {
    requestAnimationFrame(() => {
      boxRef.current?.scrollTo(0, boxRef.current.scrollHeight);
    });
  }, [messages, typing]);

  function addMsg(msg) {
    setMessages((m) => [...m, { id: crypto.randomUUID(), ...msg }]);
  }

  async function send() {
    const text = input.trim();
    if (!text || sending) return;

    // cancel any in-flight request
    abortRef.current?.abort?.();
    abortRef.current = new AbortController();

    setInput("");
    addMsg({ role: "user", text });
    setSending(true);
    setTyping(true);

    try {
      const base = import.meta.env.VITE_API_URL || "http://localhost:1337";
      const body = {
        message: text,
        ...(productDocumentId ? { documentId: productDocumentId } : {}),
        ...(productId ? { productId } : {})
      };

      const resp = await fetch(base + "/api/assistant-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: abortRef.current.signal,
        body: JSON.stringify(body)
      });

      const data = await safeJson(resp);
      if (!resp.ok) {
        addMsg({
          role: "assistant",
          text: data?.error || `Request failed (HTTP ${resp.status}).`
        });
      } else {
        addMsg({
          role: "assistant",
          text: data?.reply || "No reply."
        });
      }
    } catch (e) {
      if (e.name !== "AbortError") {
        addMsg({ role: "assistant", text: "Assistant failed. Check console/logs." });
        console.error(e);
      }
    } finally {
      setTyping(false);
      setSending(false);
    }
  }

  // Helper to tolerate non-JSON error bodies
  async function safeJson(resp) {
    try {
      return await resp.json();
    } catch {
      return null;
    }
  }

  // Keyboard shortcuts
  function onKeyDown(e) {
    if (e.key === "Enter") send();
    if (e.key === "Escape") setOpen(false);
  }

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        className="av-chat-fab"
        aria-label={open ? "Close product assistant" : "Open product assistant"}
      >
        💬
      </button>

      {open && (
        <div className="av-chat-box" role="dialog" aria-label="AnyVolt Assistant">
          <div className="av-chat-header">
            <div>AnyVolt Assistant</div>
            <button onClick={() => setOpen(false)} className="av-x" aria-label="Close">
              ✕
            </button>
          </div>

          <div className="av-chat-body" ref={boxRef}>
            {messages.map((m) => (
              <div key={m.id} className={`av-msg ${m.role}`}>
                {m.text}
              </div>
            ))}
            {typing && (
              <div className="av-msg assistant" aria-live="polite">
                <span className="av-typing-dot">•</span>
                <span className="av-typing-dot">•</span>
                <span className="av-typing-dot">•</span>
              </div>
            )}
          </div>

          <div className="av-chat-input">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about the product…"
              onKeyDown={onKeyDown}
              disabled={sending}
              aria-disabled={sending}
            />
            <button onClick={send} disabled={sending || !input.trim()}>
              {sending ? "…" : "Send"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
