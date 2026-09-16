import GeneralOrderLink from "./GeneralOrderLink.jsx";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 grid sm:grid-cols-3 gap-10">
        <div>
          <p className="font-display italic text-xl">Big Baby &amp; Big ASS forehead</p>
          <p className="mt-3 text-sm text-[var(--text-soft)] leading-relaxed max-w-xs">
            Small-batch hibiscus, ginger and tigernut drinks, pressed by hand in Accra.
          </p>
        </div>
        <div>
          <p className="text-sm font-medium">Order</p>
          <ul className="mt-3 space-y-2 text-sm text-[var(--text-soft)]">
            <li>
              <a href="#menu" className="hover:text-[var(--text)] transition-colors">
                Menu
              </a>
            </li>
            <li>
              <GeneralOrderLink className="hover:text-[var(--text)] transition-colors">
                WhatsApp: 053 048 7116
              </GeneralOrderLink>
            </li>
            <li>Pickup &amp; delivery across Accra</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-medium">Hours</p>
          <ul className="mt-3 space-y-2 text-sm text-[var(--text-soft)]">
            <li>Tuesday – Saturday</li>
            <li>9:00am – 6:00pm</li>
            <li>Closed Sunday &amp; Monday</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-5 text-xs text-[var(--text-soft)]">
          © {year} Big Baby &amp; Big ASS forehead. Made to order, in small batches.
        </div>
      </div>
    </footer>
  );
}
