import ProductImage from "./ProductImage.jsx";
import { PRODUCTS } from "../data/products.js";

export default function Gallery() {
  return (
    <section className="bg-[var(--cream)] border-y border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <h2 className="font-display text-3xl sm:text-4xl font-medium max-w-md">From the kitchen</h2>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {PRODUCTS.map((p) => (
            <div key={p.id} className="aspect-square rounded-2xl overflow-hidden border border-[var(--border)]">
              <ProductImage src={p.image} alt={p.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
