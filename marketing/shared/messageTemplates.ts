import config from '../config';

// ============================================
// Reusable Marketing Message Templates
// ============================================

export const templates = {
  /** Welcome message for new subscribers */
  welcome: () =>
    `✨ Welcome to ${config.business.name}! ✨\n\n` +
    `We are East Africa's premier gold supplier, offering:\n` +
    `🥇 Gold Bars & Ingots\n` +
    `💎 Gold Nuggets\n` +
    `⛏️ Gold Dust\n\n` +
    `Type "products" to browse our catalog or "contact" to reach our team.\n\n` +
    `🌐 ${config.business.website}`,

  /** Product catalog overview */
  productCatalog: () =>
    `📦 *Our Gold Products*\n\n` +
    `1️⃣ *Gold Bars & Ingots*\n` +
    `   Premium refined gold bars available in various weights.\n\n` +
    `2️⃣ *Gold Nuggets*\n` +
    `   Naturally formed gold nuggets sourced from Tanzania.\n\n` +
    `3️⃣ *Gold Dust*\n` +
    `   High-purity gold dust for industrial and investment use.\n\n` +
    `Reply with a product number for more details, or type "quote" to request pricing.`,

  /** Contact information */
  contactInfo: () =>
    `📞 *Contact ${config.business.name}*\n\n` +
    `📧 Email: ${config.business.email}\n` +
    `📱 Phone: ${config.business.phone}\n` +
    `🌐 Website: ${config.business.website}\n\n` +
    `Our team is available Monday–Saturday, 8 AM – 6 PM (EAT).`,

  /** Promotional message template */
  promotion: (promoText: string) =>
    `🔥 *Special Offer from ${config.business.name}!* 🔥\n\n` +
    `${promoText}\n\n` +
    `📧 Contact us: ${config.business.email}\n` +
    `📱 Call/WhatsApp: ${config.business.phone}\n\n` +
    `🌐 ${config.business.website}`,

  /** Request a quote prompt */
  quoteRequest: () =>
    `📝 *Request a Quote*\n\n` +
    `To receive a personalized quote, please provide:\n\n` +
    `1. Product type (Bars, Nuggets, or Dust)\n` +
    `2. Desired quantity/weight\n` +
    `3. Your delivery location\n\n` +
    `Our sales team will respond within 24 hours.\n` +
    `Or email us directly: ${config.business.email}`,

  /** Help / command list */
  help: () =>
    `ℹ️ *Available Commands*\n\n` +
    `• "products" — Browse our gold catalog\n` +
    `• "prices" — Get current pricing info\n` +
    `• "quote" — Request a personalized quote\n` +
    `• "contact" — Get our contact details\n` +
    `• "help" — Show this menu\n\n` +
    `You can also type any question and we'll do our best to help!`,

  /** Fallback for unrecognized messages */
  fallback: () =>
    `🤔 I didn't quite understand that.\n\n` +
    `Type "help" to see what I can do, or "contact" to speak with our team directly.`,

  /** Current prices placeholder */
  prices: () =>
    `💰 *Gold Pricing Information*\n\n` +
    `Our prices are based on the current London Gold Fix plus a competitive premium.\n\n` +
    `For real-time quotes tailored to your order:\n` +
    `📧 ${config.business.email}\n` +
    `📱 ${config.business.phone}\n\n` +
    `🌐 Visit ${config.business.website} for live price updates.`,
};

export default templates;
