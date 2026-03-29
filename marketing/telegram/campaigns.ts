import logger from '../shared/logger';
import templates from '../shared/messageTemplates';
import config from '../config';
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

/**
 * Send a specific message directly to the admin's DM.
 * Used for the "clean" Facebook copy-paste feature.
 */
export async function sendAdminDirectMessage(text: string): Promise<void> {
  const bot = getBotInstance();
  const adminId = config.telegram.adminId;

  if (!bot || !adminId) {
    logger.warn(SOURCE, 'Bot or Admin ID not configured — cannot send direct message');
    return;
  }

  try {
    await bot.sendMessage(parseInt(adminId), `📋 *Facebook Copy-Paste Version:*\n\n${text}`, { 
      parse_mode: 'Markdown' 
    });
    logger.info(SOURCE, `Copy-paste version sent to Admin (${adminId})`);
  } catch (error: any) {
    logger.error(SOURCE, `Failed to send message to admin ${adminId}`, error.message);
  }
}

/**
 * Send a message to any specific chat ID (channel, group, or user).
 * Used for posting directly to a configured channel without relying on subscriber list.
 */
export async function sendToChat(chatId: string, text: string): Promise<void> {
  const bot = getBotInstance();

  if (!bot) {
    logger.warn(SOURCE, 'Bot not initialized — cannot send to chat');
    return;
  }

  try {
    await bot.sendMessage(parseInt(chatId), text, { parse_mode: 'Markdown' });
    logger.info(SOURCE, `Message sent to chat ${chatId}`);
  } catch (error: any) {
    logger.error(SOURCE, `Failed to send message to chat ${chatId}`, error.message);
  }
}

/**
 * Send a photo with caption to a specific chat (channel, group, user).
 * Falls back to text-only if image sending fails.
 */
export async function sendPhotoToChat(chatId: string, imageUrl: string, caption: string): Promise<void> {
  const bot = getBotInstance();
  if (!bot) return;

  try {
    await bot.sendPhoto(parseInt(chatId), imageUrl, {
      caption: caption.substring(0, 1024), // Telegram caption limit
      parse_mode: 'Markdown',
    });
    logger.info(SOURCE, `Photo sent to chat ${chatId}`);
  } catch (error: any) {
    logger.error(SOURCE, `Photo failed for chat ${chatId}: ${error.message}. Falling back to text.`);
    await sendToChat(chatId, caption);
  }
}

/**
 * Send a photo with caption to the admin DM (for Facebook copy-paste).
 */
export async function sendAdminPhoto(imageUrl: string, caption: string): Promise<void> {
  const bot = getBotInstance();
  const adminId = config.telegram.adminId;
  if (!bot || !adminId) return;

  try {
    await bot.sendPhoto(parseInt(adminId), imageUrl, {
      caption: `📋 *Facebook Copy-Paste Version:*\n\n${caption}`.substring(0, 1024),
      parse_mode: 'Markdown',
    });
    logger.info(SOURCE, `Photo DM sent to Admin (${adminId})`);
  } catch (error: any) {
    logger.error(SOURCE, `Photo DM failed: ${error.message}. Falling back to text.`);
    await sendAdminDirectMessage(caption);
  }
}
