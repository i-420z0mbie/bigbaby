import { useState } from "react";
import ChevronIcon from "./icons/ChevronIcon.jsx";
import { FAQS } from "../data/products.js";

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-[var(--border)] py-5">
      <button onClick={onToggle} className="w-full flex items-center justify-between gap-4 text-left" aria-expanded={isOpen}>
        <span className="font-medium">{item.q}</span>
        <ChevronIcon className="w-5 h-5 shrink-0 text-[var(--text-soft)]" open={isOpen} />
      </button>
      {isOpen && <p className="mt-3 text-sm text-[var(--text-soft)] leading-relaxed max-w-xl">{item.a}</p>}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section id="faq" className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
      <h2 className="font-display text-3xl sm:text-4xl font-medium max-w-md">Good to know</h2>
      <div className="mt-8 max-w-2xl">
        {FAQS.map((item, i) => (
          <FaqItem key={item.q} item={item} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? -1 : i)} />
        ))}
      </div>
    </section>
  );
}
