import { sendMessage } from './messageHandler';
import templates from '../shared/messageTemplates';
import logger from '../shared/logger';

const SOURCE = 'FacebookCampaigns';

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
export function addSubscriber(userId: string): void {
  subscribers.add(userId);
  logger.info(SOURCE, `Subscriber added: ${userId} (total: ${subscribers.size})`);
}

/**
 * Remove a user from the subscriber list.
 */
export function removeSubscriber(userId: string): void {
  subscribers.delete(userId);
  logger.info(SOURCE, `Subscriber removed: ${userId} (total: ${subscribers.size})`);
}

/**
 * Get the current subscriber count.
 */
export function getSubscriberCount(): number {
  return subscribers.size;
}

/**
 * Broadcast a promotional message to all subscribers.
 * 
 * PLACEHOLDER: In production, implement rate limiting and
 * respect Facebook's 24-hour messaging window policy.
 * 
 * @param promoText - The promotional message content
 */
export async function broadcastPromotion(promoText: string): Promise<{ sent: number; failed: number }> {
  const message = templates.promotion(promoText);
  let sent = 0;
  let failed = 0;

  logger.info(SOURCE, `Broadcasting to ${subscribers.size} subscribers...`);

  for (const userId of subscribers) {
    try {
      await sendMessage({ recipientId: userId, text: message });
      sent++;
    } catch (error) {
      logger.error(SOURCE, `Failed to send to ${userId}`, error);
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
  const message = templates.productCatalog();
  let sent = 0;
  let failed = 0;

  for (const userId of subscribers) {
    try {
      await sendMessage({ recipientId: userId, text: message });
      sent++;
    } catch (error) {
      logger.error(SOURCE, `Failed to send catalog to ${userId}`, error);
      failed++;
    }
  }

  return { sent, failed };
}
