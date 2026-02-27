import axios from 'axios';
import config from '../config';
import logger from '../shared/logger';
import templates from '../shared/messageTemplates';
import type { OutgoingMessage, MessageButton } from '../shared/types';

const SOURCE = 'FacebookMessage';

/**
 * Process an incoming text message and send an appropriate response.
 * 
 * Routes messages based on keyword matching to the correct template response.
 * 
 * PLACEHOLDER: Extend with NLP or AI-based intent detection for smarter routing.
 */
export async function handleIncomingMessage(senderId: string, text: string): Promise<void> {
  const normalizedText = text.toLowerCase().trim();

  let responseText: string;
  let buttons: MessageButton[] | undefined;

  switch (true) {
    case normalizedText === 'get started' || normalizedText === 'start':
      responseText = templates.welcome();
      buttons = [
        { type: 'postback', title: '📦 Products', payload: 'products' },
        { type: 'postback', title: '💰 Prices', payload: 'prices' },
        { type: 'postback', title: '📞 Contact', payload: 'contact' },
      ];
      break;

    case normalizedText.includes('product'):
      responseText = templates.productCatalog();
      break;

    case normalizedText.includes('price'):
      responseText = templates.prices();
      break;

    case normalizedText.includes('quote'):
      responseText = templates.quoteRequest();
      break;

    case normalizedText.includes('contact'):
      responseText = templates.contactInfo();
      break;

    case normalizedText.includes('help'):
      responseText = templates.help();
      break;

    default:
      responseText = templates.fallback();
  }

  await sendMessage({
    recipientId: senderId,
    text: responseText,
    buttons,
  });
}

/**
 * Send a message to a user via the Facebook Send API.
 * 
 * PLACEHOLDER: Replace FB_PAGE_ACCESS_TOKEN with a real token.
 * See README.md for how to obtain one.
 */
export async function sendMessage(message: OutgoingMessage): Promise<void> {
  const { recipientId, text, buttons } = message;

  // Build the message body
  let messageBody: any;

  if (buttons && buttons.length > 0) {
    // Send as a button template
    messageBody = {
      attachment: {
        type: 'template',
        payload: {
          template_type: 'button',
          text: text.substring(0, 640), // FB limit for button template text
          buttons: buttons.map((btn) => ({
            type: btn.type === 'url' ? 'web_url' : 'postback',
            title: btn.title,
            ...(btn.type === 'url' ? { url: btn.payload } : { payload: btn.payload }),
          })),
        },
      },
    };
  } else {
    // Send as plain text
    messageBody = { text };
  }

  const requestBody = {
    recipient: { id: recipientId },
    message: messageBody,
  };

  try {
    const url = `${config.facebook.graphApiUrl}/me/messages?access_token=${config.facebook.pageAccessToken}`;

    // PLACEHOLDER: In development, log instead of sending
    if (config.facebook.pageAccessToken.startsWith('PLACEHOLDER')) {
      logger.warn(SOURCE, 'PLACEHOLDER MODE — Message not sent. Would have sent:', requestBody);
      return;
    }

    await axios.post(url, requestBody);
    logger.info(SOURCE, `Message sent to ${recipientId}`);
  } catch (error: any) {
    logger.error(SOURCE, `Failed to send message to ${recipientId}`, error.response?.data || error.message);
  }
}
