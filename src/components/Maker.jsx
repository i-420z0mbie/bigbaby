import Hibiscus from "./icons/Hibiscus.jsx";

export default function Maker() {
  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="font-display text-3xl sm:text-4xl font-medium">Meet the hands behind it</h2>
        <p className="mt-5 text-[var(--text-soft)] leading-relaxed max-w-md">
          Hand &amp; Hibiscus started as sobolo made for family gatherings — the kind of drink relatives asked
          for by name and expected a bottle of before they left. What began as a big pot on weekends turned into
          a weekly kitchen routine, then a proper small menu, then a WhatsApp line that never really stops.
        </p>
        <p className="mt-4 text-[var(--text-soft)] leading-relaxed max-w-md">
          The rule hasn't changed since the first batch: nothing goes out that wouldn't be served to family
          first.
        </p>
      </div>
      <div className="rounded-3xl border border-[var(--border)] bg-[var(--cream)] p-10 flex flex-col items-center text-center">
        <Hibiscus size={130} />
        <p className="mt-6 font-display italic text-xl">"Small batches, on purpose."</p>
        <p className="mt-2 text-sm text-[var(--text-soft)]">— the whole philosophy, really</p>
      </div>
    </section>
  );
}
