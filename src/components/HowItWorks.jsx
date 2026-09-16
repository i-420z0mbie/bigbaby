const STEPS = [
  {
    title: "Message us",
    desc: "Tell us which drinks and how many, straight on WhatsApp.",
  },
  {
    title: "We prepare it fresh",
    desc: "Nothing sits pre-bottled — we steep, press and bottle once your order comes in.",
  },
  {
    title: "Pickup or delivery",
    desc: "Collect same-day around Accra, or have it brought to you.",
  },
];

export default function HowItWorks() {
  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
      <h2 className="font-display text-3xl sm:text-4xl font-medium max-w-md">How ordering works</h2>
      <div className="mt-10 grid sm:grid-cols-3 gap-8">
        {STEPS.map((s, i) => (
          <div key={s.title}>
            <p className="font-display text-4xl text-[var(--accent-strong)]">{i + 1}</p>
            <h3 className="mt-3 font-medium text-lg">{s.title}</h3>
            <p className="mt-2 text-sm text-[var(--text-soft)] leading-relaxed max-w-xs">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
