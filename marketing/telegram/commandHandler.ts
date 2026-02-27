import TelegramBot from 'node-telegram-bot-api';
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

  // Set the bot's command menu (visible in Telegram UI)
  bot.setMyCommands([
    { command: 'start', description: 'Welcome & subscribe to updates' },
    { command: 'products', description: 'Browse our gold catalog' },
    { command: 'prices', description: 'Get current pricing info' },
    { command: 'quote', description: 'Request a personalized quote' },
    { command: 'contact', description: 'Get our contact details' },
    { command: 'help', description: 'Show available commands' },
  ]);

  logger.info(SOURCE, 'All commands registered successfully');
}
