import GeneralOrderLink from "./GeneralOrderLink.jsx";
import ChatIcon from "./icons/ChatIcon.jsx";

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-5 sm:px-8 pb-16 sm:pb-20">
      <div className="rounded-3xl border border-[var(--border)] bg-[var(--cream)] px-8 py-14 sm:px-16 text-center flex flex-col items-center">
        <h2 className="font-display text-3xl sm:text-4xl font-medium max-w-lg">Ready when you are.</h2>
        <p className="mt-4 text-[var(--text-soft)] max-w-md leading-relaxed">
          Send us a message with the drinks you'd like and whether you want pickup or delivery — we'll confirm
          timing and price right there in the chat.
        </p>
        <GeneralOrderLink className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium bg-[var(--text)] text-[var(--bg)] hover:opacity-90 transition-opacity">
          <ChatIcon className="w-4 h-4" />
          Message us on WhatsApp
        </GeneralOrderLink>
      </div>
    </section>
  );
}
