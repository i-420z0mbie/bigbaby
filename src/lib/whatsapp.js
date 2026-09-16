export const WHATSAPP_NUMBER = "233530487116"; // 0530487116 in international format

export function waLink(text) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function orderMessage(product) {
  return `Hi Hand & Hibiscus! I'd like to order: ${product.name} (₵${product.price}).`;
}

export const GENERAL_ORDER_TEXT = "Hi Hand & Hibiscus! I'd like to place an order.";
