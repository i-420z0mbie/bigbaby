import GeneralOrderLink from "./GeneralOrderLink.jsx";
import ChatIcon from "./icons/ChatIcon.jsx";

export default function FloatingWhatsApp() {
  return (
    <GeneralOrderLink className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full pl-4 pr-5 py-3.5 shadow-lg bg-[var(--text)] text-[var(--bg)] hover:opacity-90 transition-opacity">
      <ChatIcon className="w-5 h-5" />
      <span className="text-sm font-medium hidden sm:inline">Order on WhatsApp</span>
    </GeneralOrderLink>
  );
}
