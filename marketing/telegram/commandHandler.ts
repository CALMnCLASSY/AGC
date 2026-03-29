import TelegramBot from 'node-telegram-bot-api';
import config from '../config';
import logger from '../shared/logger';
import templates from '../shared/messageTemplates';
import { addSubscriber } from './campaigns';

const SOURCE = 'TelegramCommands';

/**
 * Register all bot commands with their handlers.
 * 
 * Commands:
 *   /start     — Welcome message + subscribe user
 *   /products  — Show product catalog
 *   /prices    — Current pricing info
 *   /quote     — Request a personalized quote
 *   /contact   — Business contact details
 *   /help      — List available commands
 */
export function registerCommands(bot: TelegramBot): void {
  // /start — Welcome & subscribe
  bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const firstName = msg.from?.first_name || 'there';

    logger.info(SOURCE, `/start from ${firstName} (${chatId})`);
    addSubscriber(chatId.toString());

    bot.sendMessage(chatId, templates.welcome(), { parse_mode: 'Markdown' });
  });

  // /products — Product catalog
  bot.onText(/\/products/, (msg) => {
    const chatId = msg.chat.id;
    logger.info(SOURCE, `/products from ${chatId}`);
    bot.sendMessage(chatId, templates.productCatalog(), { parse_mode: 'Markdown' });
  });

  // /prices — Pricing information
  bot.onText(/\/prices/, (msg) => {
    const chatId = msg.chat.id;
    logger.info(SOURCE, `/prices from ${chatId}`);
    bot.sendMessage(chatId, templates.prices(), { parse_mode: 'Markdown' });
  });

  // /quote — Request a quote
  bot.onText(/\/quote/, (msg) => {
    const chatId = msg.chat.id;
    logger.info(SOURCE, `/quote from ${chatId}`);
    bot.sendMessage(chatId, templates.quoteRequest(), { parse_mode: 'Markdown' });
  });

  // /contact — Contact information
  bot.onText(/\/contact/, (msg) => {
    const chatId = msg.chat.id;
    logger.info(SOURCE, `/contact from ${chatId}`);
    bot.sendMessage(chatId, templates.contactInfo(), { parse_mode: 'Markdown' });
  });

  // /help — Show help menu
  bot.onText(/\/help/, (msg) => {
    const chatId = msg.chat.id;
    logger.info(SOURCE, `/help from ${chatId}`);
    bot.sendMessage(chatId, templates.help(), { parse_mode: 'Markdown' });
  });

  // /test_ai_post — Manual trigger for AI post (Admin only)
  bot.onText(/\/test_ai_post/, async (msg) => {
    const chatId = msg.chat.id;
    const adminId = config.telegram.adminId;

    if (chatId.toString() !== adminId) {
      logger.warn(SOURCE, `/test_ai_post unauthorized access attempt: ${chatId}`);
      return; // Silently ignore unauthorized attempts
    }

    logger.info(SOURCE, `/test_ai_post from Admin ${chatId}`);
    bot.sendMessage(chatId, '🚀 *Starting AI post generation...*', { parse_mode: 'Markdown' });

    const { triggerManualPost } = await import('../shared/schedulerService');
    await triggerManualPost();

    bot.sendMessage(chatId, '✅ *AI post broadcast complete!*', { parse_mode: 'Markdown' });
  });

  // /post — Instantly generate and broadcast a post (Admin only, shorter alias)
  bot.onText(/\/post/, async (msg) => {
    const chatId = msg.chat.id;
    const adminId = config.telegram.adminId;

    if (chatId.toString() !== adminId) return; // Silently ignore non-admins

    logger.info(SOURCE, `/post triggered by Admin ${chatId}`);
    bot.sendMessage(chatId, '🤖 *Generating and sending a new AI post now...*', { parse_mode: 'Markdown' });

    try {
      const { triggerManualPost } = await import('../shared/schedulerService');
      await triggerManualPost();
      bot.sendMessage(chatId, '✅ *Post sent to all subscribers! Check your DM for the Facebook copy.*', { parse_mode: 'Markdown' });
    } catch (err: any) {
      bot.sendMessage(chatId, `❌ *Failed to generate post:* ${err.message}`, { parse_mode: 'Markdown' });
    }
  });

  // /status — Show subscriber count and next post info (Admin only)
  bot.onText(/\/status/, async (msg) => {
    const chatId = msg.chat.id;
    const adminId = config.telegram.adminId;

    if (chatId.toString() !== adminId) return;

    const { getSubscriberCount } = await import('./campaigns');
    const count = getSubscriberCount();
    const statusMsg = [
      '📊 *Pure Africa Gold Bot Status*',
      '',
      `👥 *Subscribers:* ${count}`,
      `⏰ *Schedule:* Every ~58 minutes (25 posts/day)`,
      `🤖 *AI Provider:* Groq (Llama 3.3 70B)`,
      '',
      'Send /post to trigger an immediate post.',
    ].join('\n');

    bot.sendMessage(chatId, statusMsg, { parse_mode: 'Markdown' });
  });

  // Set the bot's command menu (visible in Telegram UI)
  bot.setMyCommands([
    { command: 'start', description: 'Subscribe to gold updates' },
    { command: 'products', description: 'Browse our gold catalog' },
    { command: 'prices', description: 'Get current pricing info' },
    { command: 'quote', description: 'Request a personalized quote' },
    { command: 'contact', description: 'Get our contact details' },
    { command: 'help', description: 'Show available commands' },
    { command: 'post', description: '🔒 Admin: Post now to all subscribers' },
    { command: 'status', description: '🔒 Admin: View bot status & subscriber count' },
  ]);

  logger.info(SOURCE, 'All commands registered successfully');
}
