import { waLink, GENERAL_ORDER_TEXT } from "../lib/whatsapp.js";

export default function GeneralOrderLink({ className, children }) {
  return (
    <a href={waLink(GENERAL_ORDER_TEXT)} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}
