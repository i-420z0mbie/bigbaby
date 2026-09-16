import ProductCard from "./ProductCard.jsx";
import { PRODUCTS } from "../data/products.js";

export default function Menu() {
  return (
    <section id="menu" className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
      <div className="max-w-md">
        <h2 className="font-display text-3xl sm:text-4xl font-medium">The menu</h2>
        <p className="mt-4 text-[var(--text-soft)] leading-relaxed">
          Six drinks, made weekly in small batches. Tap any drink to order it on WhatsApp — tell us your quantity
          and pickup or delivery preference in the chat.
        </p>
      </div>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {PRODUCTS.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
