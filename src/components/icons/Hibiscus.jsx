export default function Hibiscus({ size = 220, className = "" }) {
  return (
    <svg viewBox="0 0 220 220" width={size} height={size} className={className} aria-hidden="true">
      <g transform="translate(110,95)">
        {[0, 72, 144, 216, 288].map((deg) => (
          <ellipse
            key={deg}
            cx="0"
            cy="-38"
            rx="20"
            ry="34"
            fill="var(--accent)"
            opacity="0.9"
            transform={`rotate(${deg})`}
          />
        ))}
        <circle r="10" fill="var(--text)" />
      </g>
    </svg>
  );
}
