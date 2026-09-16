import ProductImage from "./ProductImage.jsx";
import ChatIcon from "./icons/ChatIcon.jsx";
import { waLink, orderMessage } from "../lib/whatsapp.js";

export default function ProductCard({ product }) {
  return (
    <div className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden flex flex-col h-full transition-colors hover:border-[var(--accent-strong)]">
      <div className="aspect-[4/3] overflow-hidden">
        <ProductImage src={product.image} alt={product.name} />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-wide text-[var(--text-soft)]" style={{ letterSpacing: "0.06em" }}>
              {product.note}
            </p>
            <h3 className="font-display text-2xl mt-1">{product.name}</h3>
          </div>
          <span className="font-display text-xl shrink-0">₵{product.price}</span>
        </div>
        <p className="mt-3 text-[var(--text-soft)] text-sm leading-relaxed flex-1">{product.desc}</p>
        <a
          href={waLink(orderMessage(product))}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium border border-[var(--text)] text-[var(--text)] group-hover:bg-[var(--text)] group-hover:text-[var(--bg)] transition-colors"
        >
          <ChatIcon className="w-4 h-4" />
          Order on WhatsApp
        </a>
      </div>
    </div>
  );
}
