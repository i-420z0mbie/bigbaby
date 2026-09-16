import { TESTIMONIALS } from "../data/products.js";

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <h2 className="font-display text-3xl sm:text-4xl font-medium max-w-md">What people say</h2>
      </div>
      <div
        className="mt-10 flex gap-5 overflow-x-auto no-scrollbar px-5 sm:px-8 pb-2"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {TESTIMONIALS.map((t, i) => (
          <div
            key={i}
            className="snap-x-child shrink-0 w-[280px] sm:w-[320px] rounded-2xl bg-[var(--cream)] border border-[var(--border)] p-6"
          >
            <p className="text-[var(--text)] leading-relaxed">"{t.quote}"</p>
            <p className="mt-4 text-sm text-[var(--text-soft)]">{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
