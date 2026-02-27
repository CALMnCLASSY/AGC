import TelegramBot, { User } from 'node-telegram-bot-api';
import logger from '../shared/logger';
import templates from '../shared/messageTemplates';

const SOURCE = 'TelegramMessage';

/**
 * Handle free-text messages (non-command messages).
 * 
 * Routes messages based on keyword matching to template responses.
 * 
 * PLACEHOLDER: Extend with NLP, AI chatbot integration, or a
 * conversation state machine for richer interactions.
 */
export function handleTextMessage(
  bot: TelegramBot,
  chatId: number,
  text: string,
  from?: User
): void {
  const normalizedText = text.toLowerCase().trim();
  const userName = from?.first_name || 'Customer';

  logger.info(SOURCE, `Message from ${userName} (${chatId}): ${text}`);

  let responseText: string;

  switch (true) {
    case normalizedText.includes('product') || normalizedText.includes('catalog'):
      responseText = templates.productCatalog();
      break;

    case normalizedText.includes('price') || normalizedText.includes('cost'):
      responseText = templates.prices();
      break;

    case normalizedText.includes('quote') || normalizedText.includes('order'):
      responseText = templates.quoteRequest();
      break;

    case normalizedText.includes('contact') || normalizedText.includes('phone') || normalizedText.includes('email'):
      responseText = templates.contactInfo();
      break;

    case normalizedText.includes('help') || normalizedText.includes('menu'):
      responseText = templates.help();
      break;

    case normalizedText.includes('hi') || normalizedText.includes('hello') || normalizedText.includes('hey'):
      responseText = templates.welcome();
      break;

    default:
      responseText = templates.fallback();
  }

  bot.sendMessage(chatId, responseText, { parse_mode: 'Markdown' });
}
