import logger from '../shared/logger';
import templates from '../shared/messageTemplates';
import { getBotInstance } from './index';

const SOURCE = 'TelegramCampaigns';

/**
 * In-memory subscriber store.
 * 
 * PLACEHOLDER: Replace with a real database (e.g., MongoDB, PostgreSQL)
 * to persist subscriber data across restarts.
 */
const subscribers: Set<string> = new Set();

/**
 * Add a user to the subscriber list.
 */
export function addSubscriber(chatId: string): void {
  subscribers.add(chatId);
  logger.info(SOURCE, `Subscriber added: ${chatId} (total: ${subscribers.size})`);
}

/**
 * Remove a user from the subscriber list.
 */
export function removeSubscriber(chatId: string): void {
  subscribers.delete(chatId);
  logger.info(SOURCE, `Subscriber removed: ${chatId} (total: ${subscribers.size})`);
}

/**
 * Get the current subscriber count.
 */
export function getSubscriberCount(): number {
  return subscribers.size;
}

/**
 * Get all subscriber chat IDs.
 */
export function getSubscribers(): string[] {
  return Array.from(subscribers);
}

/**
 * Broadcast a promotional message to all Telegram subscribers.
 * 
 * PLACEHOLDER: In production, implement rate limiting to avoid
 * hitting Telegram's broadcast limits (30 messages/second).
 * 
 * @param promoText - The promotional message content
 */
export async function broadcastPromotion(promoText: string): Promise<{ sent: number; failed: number }> {
  const bot = getBotInstance();
  const message = templates.promotion(promoText);
  let sent = 0;
  let failed = 0;

  if (!bot) {
    logger.warn(SOURCE, 'Bot not initialized — cannot broadcast');
    return { sent: 0, failed: subscribers.size };
  }

  logger.info(SOURCE, `Broadcasting to ${subscribers.size} subscribers...`);

  for (const chatId of subscribers) {
    try {
      await bot.sendMessage(parseInt(chatId), message, { parse_mode: 'Markdown' });
      sent++;

      // Simple rate limiting: wait 50ms between messages
      await new Promise((resolve) => setTimeout(resolve, 50));
    } catch (error: any) {
      logger.error(SOURCE, `Failed to send to ${chatId}`, error.message);
      failed++;
    }
  }

  logger.info(SOURCE, `Broadcast complete: ${sent} sent, ${failed} failed`);
  return { sent, failed };
}

/**
 * Send the product catalog to all subscribers.
 */
export async function broadcastProductCatalog(): Promise<{ sent: number; failed: number }> {
  const bot = getBotInstance();
  const message = templates.productCatalog();
  let sent = 0;
  let failed = 0;

  if (!bot) {
    logger.warn(SOURCE, 'Bot not initialized — cannot broadcast');
    return { sent: 0, failed: subscribers.size };
  }

  for (const chatId of subscribers) {
    try {
      await bot.sendMessage(parseInt(chatId), message, { parse_mode: 'Markdown' });
      sent++;
      await new Promise((resolve) => setTimeout(resolve, 50));
    } catch (error: any) {
      logger.error(SOURCE, `Failed to send catalog to ${chatId}`, error.message);
      failed++;
    }
  }

  return { sent, failed };
}
