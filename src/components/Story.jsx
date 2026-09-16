import Hibiscus from "./icons/Hibiscus.jsx";

export default function Story() {
  return (
    <section id="story" className="bg-[var(--cream)] border-y border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 flex justify-center">
          <Hibiscus size={200} />
        </div>
        <div className="order-1 md:order-2 max-w-md">
          <h2 className="font-display text-3xl sm:text-4xl font-medium leading-tight">
            Every bottle starts the same way.
          </h2>
          <p className="mt-5 text-[var(--text-soft)] leading-relaxed">
            Dried hibiscus goes into the pot the night before. Ginger is grated by hand, not machine-processed,
            so it keeps its bite. Fruit is pressed fresh the same morning it's bottled. There's no concentrate
            in the fridge and no shortcut waiting to be taken — if we run out of a flavour before the weekend,
            it simply sells out.
          </p>
          <p className="mt-4 text-[var(--text-soft)] leading-relaxed">
            We make six drinks, in small batches, because that's what one pair of hands can do properly in a
            week.
          </p>
        </div>
      </div>
    </section>
  );
}
