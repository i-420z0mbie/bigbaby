import GeneralOrderLink from "./GeneralOrderLink.jsx";
import ChatIcon from "./icons/ChatIcon.jsx";
import Hibiscus from "./icons/Hibiscus.jsx";

function HeroArt() {
  return (
    <div className="relative w-full flex items-center justify-center py-6">
      <div
        className="absolute w-72 h-72 rounded-full blur-2xl opacity-60"
        style={{ background: "var(--accent)" }}
        aria-hidden="true"
      />
      <div className="relative bottle-float">
        <svg viewBox="0 0 280 360" width="260" height="330" aria-hidden="true">
          <path
            d="M95 130 L95 90 Q95 70 115 70 L165 70 Q185 70 185 90 L185 130 L205 190 Q212 210 212 232 L212 320 Q212 340 192 340 L88 340 Q68 340 68 320 L68 232 Q68 210 75 190 Z"
            fill="var(--surface)"
            stroke="var(--border)"
            strokeWidth="2"
          />
          <path
            d="M76 230 Q140 214 204 230 L204 322 Q204 332 192 332 L88 332 Q76 332 76 322 Z"
            fill="var(--accent)"
            opacity="0.85"
          />
          <rect x="100" y="50" width="80" height="24" rx="6" fill="var(--cream)" stroke="var(--border)" strokeWidth="2" />
          <rect x="120" y="30" width="40" height="24" rx="4" fill="var(--text)" opacity="0.9" />
        </svg>
        <div className="absolute -top-4 -right-6">
          <Hibiscus size={110} />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="max-w-6xl mx-auto px-5 sm:px-8 pt-14 sm:pt-20 pb-16 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="hero-rise font-display text-[2.6rem] leading-[1.08] sm:text-6xl sm:leading-[1.05] font-medium max-w-md">
          Pressed by hand.
          <br />
          Poured with care.
        </h1>
        <p className="hero-rise-delay mt-6 text-[var(--text-soft)] text-lg max-w-md leading-relaxed">
          Small-batch hibiscus, ginger and tigernut drinks, made in a home kitchen in Accra — steeped, pressed
          and bottled the same week you drink them.
        </p>
        <div className="hero-rise-delay-2 mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#menu"
            className="inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-medium bg-[var(--text)] text-[var(--bg)] hover:opacity-90 transition-opacity"
          >
            See the menu
          </a>
          <GeneralOrderLink className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium border border-[var(--text)] text-[var(--text)] hover:bg-[var(--cream)] transition-colors">
            <ChatIcon className="w-4 h-4" />
            Order on WhatsApp
          </GeneralOrderLink>
        </div>
      </div>
      <HeroArt />
    </section>
  );
}
