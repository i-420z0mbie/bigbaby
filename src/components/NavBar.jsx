import { useState } from "react";
import GeneralOrderLink from "./GeneralOrderLink.jsx";
import ChatIcon from "./icons/ChatIcon.jsx";

const LINKS = [
  { href: "#menu", label: "Menu" },
  { href: "#story", label: "Our story" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-[var(--bg)]/85 border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="font-display italic text-xl tracking-tight" style={{ color: "var(--text)" }}>
          Big Baby &amp; Big ASS forehead
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-[var(--text-soft)] hover:text-[var(--text)] transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <GeneralOrderLink className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium bg-[var(--text)] text-[var(--bg)] hover:opacity-90 transition-opacity">
            <ChatIcon className="w-4 h-4" />
            Order on WhatsApp
          </GeneralOrderLink>
        </div>

        <button
          className="md:hidden w-9 h-9 flex flex-col justify-center items-center gap-1.5"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`block w-6 h-[1.5px] bg-[var(--text)] transition-transform ${open ? "translate-y-[6.5px] rotate-45" : ""}`} />
          <span className={`block w-6 h-[1.5px] bg-[var(--text)] transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-[1.5px] bg-[var(--text)] transition-transform ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg)] px-5 pb-6 pt-2 flex flex-col gap-4">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-[var(--text-soft)] text-base">
              {l.label}
            </a>
          ))}
          <GeneralOrderLink className="mt-2 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium bg-[var(--text)] text-[var(--bg)]">
            <ChatIcon className="w-4 h-4" />
            Order on WhatsApp
          </GeneralOrderLink>
        </div>
      )}
    </header>
  );
}
