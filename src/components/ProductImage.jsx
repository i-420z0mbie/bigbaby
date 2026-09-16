import { useState } from "react";
import Hibiscus from "./icons/Hibiscus.jsx";

export default function ProductImage({ src, alt }) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[var(--cream)]">
        <Hibiscus size={72} />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setErrored(true)}
      className="w-full h-full object-cover"
    />
  );
}
