import logger from '../shared/logger';
import { startFacebookBot } from '../facebook';
import { startTelegramBot } from '../telegram';

const SOURCE = 'Launcher';

/**
 * Unified launcher that starts both bots simultaneously.
 * 
 * Usage:
 *   npm start           — Start both bots
 *   npm run start:facebook  — Start Facebook bot only
 *   npm run start:telegram  — Start Telegram bot only
 */
async function main(): Promise<void> {
  logger.info(SOURCE, '==========================================');
  logger.info(SOURCE, '  Pure Africa Gold — Marketing Bots');
  logger.info(SOURCE, '==========================================');
  logger.info(SOURCE, '');

  // Start Facebook Messenger Bot (Express server)
  logger.info(SOURCE, '🔵 Starting Facebook Messenger Bot...');
  try {
    startFacebookBot();
    logger.info(SOURCE, '🔵 Facebook Bot started successfully');
  } catch (error: any) {
    logger.error(SOURCE, '🔵 Facebook Bot failed to start', error.message);
  }

  // Start Telegram Bot (polling)
  logger.info(SOURCE, '🔵 Starting Telegram Bot...');
  try {
    const telegramBot = startTelegramBot();
    if (telegramBot) {
      logger.info(SOURCE, '🔵 Telegram Bot started successfully');
    } else {
      logger.warn(SOURCE, '🔵 Telegram Bot in placeholder mode — not connected');
    }
  } catch (error: any) {
    logger.error(SOURCE, '🔵 Telegram Bot failed to start', error.message);
  }

  logger.info(SOURCE, '');
  logger.info(SOURCE, '==========================================');
  logger.info(SOURCE, '  All bots initialized. Waiting for messages...');
  logger.info(SOURCE, '==========================================');
}

main().catch((error) => {
  logger.error(SOURCE, 'Fatal error', error);
  process.exit(1);
});
