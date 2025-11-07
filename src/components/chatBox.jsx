import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ChatBox.css";

export default function ChatBox({
  greetingText = "Hi! I’m your AnyVolt assistant. How can I help today?",
}) {
  const API_URL = "http://localhost:4000/ask";
  const STORAGE_KEY = "chat_history_v1";

  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Seed greeting once if history empty
  useEffect(() => {
    if (messages.length === 0 && greetingText) {
      setMessages([{ role: "bot", text: greetingText, ts: Date.now() }]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMsg = { role: "user", text: input, ts: Date.now() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: userMsg.text }), // no model field
      });
      if (!res.ok) throw new Error(`Network error (${res.status})`);

      const data = await res.json(); // { answer }
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: data.answer ?? "No answer returned.", ts: Date.now() },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: `Error: ${err.message}`, ts: Date.now() },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="chatbox-root">
      {/* Messages */}
      <div className="chat-messages">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`d-flex mb-2 ${
              m.role === "user" ? "justify-content-end" : "justify-content-start"
            }`}
          >
            <div
              className={`p-2 rounded-3 ${
                m.role === "user" ? "bg-primary text-white" : "bg-light text-dark"
              } chat-bubble`}
            >
              {m.text}
            </div>
          </div>
        ))}
        {loading && <div className="text-muted small fst-italic">Thinking…</div>}
        <div ref={chatEndRef} />
      </div>

      {/* Input */}
      <div className="chat-input-row">
        <textarea
          className="form-control"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message…"
          disabled={loading}
        />
        <button className="btn btn-primary" onClick={sendMessage} disabled={loading}>
          Send
        </button>
      </div>
    </div>
  );
}
