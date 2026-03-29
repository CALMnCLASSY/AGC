import logger from './logger';
import { generateMarketingPost } from './aiService';
import { fetchMarketingImage } from './imageService';
import { broadcastPromotion, sendAdminDirectMessage, sendToChat, sendPhotoToChat, sendAdminPhoto } from '../telegram/campaigns';
import config from '../config';

const SOURCE = 'Scheduler';

/**
 * Main marketing automation job.
 * 1. Generates a post using AI.
 * 2. Broadcasts to all Telegram subscribers.
 * 3. Sends a copy to the Admin's DM for manual Facebook posting.
 */
async function performAutomatedPost(): Promise<void> {
  logger.info(SOURCE, '=== Starting Automated Marketing Cycle ===');

  try {
    // 1. Generate Content via AI (returns text + angle)
    const { text: postContent, angle } = await generateMarketingPost();

    // 2. Fetch a relevant image from Unsplash (free, returns null if not configured)
    const imageUrl = await fetchMarketingImage(angle);

    // 3A. Send to configured channel (always reliable)
    const channelId = config.telegram.channelId;
    if (channelId) {
      if (imageUrl) {
        await sendPhotoToChat(channelId, imageUrl, postContent);
      } else {
        await sendToChat(channelId, postContent);
      }
      logger.info(SOURCE, `Post sent to configured channel: ${channelId}`);
    } else {
      logger.warn(SOURCE, 'No TELEGRAM_CHANNEL_ID set — skipping channel post. Add it to .env!');
    }

    // 3B. Also broadcast to in-memory subscribers
    const result = await broadcastPromotion(postContent);
    if (result.sent > 0) {
      logger.info(SOURCE, `Also broadcast to ${result.sent} other subscriber(s).`);
    }

    // 4. Send to Admin DM for Facebook copy-paste
    if (imageUrl) {
      await sendAdminPhoto(imageUrl, postContent);
    } else {
      await sendAdminDirectMessage(postContent);
    }

    logger.info(SOURCE, '=== Automated Marketing Cycle Finished Successfully ===');
  } catch (error: any) {
    logger.error(SOURCE, 'Error during automated marketing cycle', error.message);
  }
}

/**
 * Initializes the marketing scheduler.
 * 
 * Target: ~25 posts per day.
 * 1440 mins / 25 posts = 57.6 mins per post.
 */
export function initScheduler(): void {
  const postsPerDay = config.ai.postsPerDay;
  // Calculate interval in milliseconds: 24 hours / posts per day
  const intervalMs = Math.floor((24 * 60 * 60 * 1000) / postsPerDay);
  const intervalMinutes = Math.round(intervalMs / 60000);

  logger.info(SOURCE, `Initializing scheduler: ${postsPerDay} posts/day, every ~${intervalMinutes} minutes.`);

  // Use setInterval for precise, consistent intervals (avoids cron edge cases)
  setInterval(() => {
    performAutomatedPost();
  }, intervalMs);

  logger.info(SOURCE, 'Marketing scheduler is now running.');

  // Run the first post immediately on startup
  performAutomatedPost(); 
}

/**
 * Manual trigger for testing purposes.
 */
export async function triggerManualPost(): Promise<void> {
  await performAutomatedPost();
}
