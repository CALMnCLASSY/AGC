import TelegramBot from 'node-telegram-bot-api';
import config from '../config';
import logger from '../shared/logger';
import { registerCommands } from './commandHandler';
import { handleTextMessage } from './messageHandler';

const SOURCE = 'TelegramBot';

let bot: TelegramBot | null = null;

/**
 * Creates and starts the Telegram bot in polling mode.
 * 
 * PLACEHOLDER: Replace TELEGRAM_BOT_TOKEN with a real token from @BotFather.
 * See README.md for setup instructions.
 */
export function startTelegramBot(): TelegramBot | null {
  const token = config.telegram.botToken;

  if (token.startsWith('PLACEHOLDER')) {
    logger.warn(SOURCE, 'PLACEHOLDER TOKEN detected — running in dry-run mode.');
    logger.warn(SOURCE, 'Get a real token from @BotFather on Telegram and set it in .env');
    
    // Return null in placeholder mode — bot won't actually connect
    logger.info(SOURCE, 'Telegram Bot initialized in PLACEHOLDER mode (not connected)');
    return null;
  }

  try {
    bot = new TelegramBot(token, { polling: true });

    // Register slash commands (/start, /products, etc.)
    registerCommands(bot);

    // Handle free-text messages
    bot.on('message', (msg) => {
      // Skip if it's a command (already handled by commandHandler)
      if (msg.text?.startsWith('/')) return;
      if (msg.text) {
        handleTextMessage(bot!, msg.chat.id, msg.text, msg.from);
      }
    });

    // Error handling
    bot.on('polling_error', (error) => {
      logger.error(SOURCE, 'Polling error', error.message);
    });

    logger.info(SOURCE, `Telegram Bot @${config.telegram.botUsername} started successfully`);
    logger.info(SOURCE, 'Listening for messages in polling mode...');

    return bot;
  } catch (error: any) {
    logger.error(SOURCE, 'Failed to start Telegram bot', error.message);
    return null;
  }
}

/**
 * Get the current bot instance.
 */
export function getBotInstance(): TelegramBot | null {
  return bot;
}

// Run directly if this file is executed
if (require.main === module) {
  startTelegramBot();
}

export default startTelegramBot;
