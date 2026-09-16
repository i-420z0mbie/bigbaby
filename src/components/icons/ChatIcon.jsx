export default function ChatIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3.5c-4.7 0-8.5 3.36-8.5 7.5 0 1.86.78 3.55 2.08 4.86-.16 1.13-.6 2.2-1.3 3.1a.5.5 0 0 0 .5.79c1.62-.32 2.98-.9 4.05-1.62a9.96 9.96 0 0 0 3.17.52c4.7 0 8.5-3.36 8.5-7.65S16.7 3.5 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="8.6" cy="11" r="0.9" fill="currentColor" />
      <circle cx="12" cy="11" r="0.9" fill="currentColor" />
      <circle cx="15.4" cy="11" r="0.9" fill="currentColor" />
    </svg>
  );
}
