import { Request, Response } from 'express';
import config from '../config';
import logger from '../shared/logger';
import { handleIncomingMessage } from './messageHandler';

const SOURCE = 'FacebookWebhook';

/**
 * GET /webhook — Facebook verification challenge.
 * 
 * Facebook sends a GET request with hub.mode, hub.verify_token, and hub.challenge
 * to verify your webhook URL. This handler checks the verify token and responds.
 * 
 * PLACEHOLDER: Set FB_VERIFY_TOKEN in your .env file.
 */
export function handleWebhookGet(req: Request, res: Response): void {
  const mode = req.query['hub.mode'] as string;
  const token = req.query['hub.verify_token'] as string;
  const challenge = req.query['hub.challenge'] as string;

  if (mode === 'subscribe' && token === config.facebook.verifyToken) {
    logger.info(SOURCE, 'Webhook verification successful');
    res.status(200).send(challenge);
  } else {
    logger.warn(SOURCE, 'Webhook verification failed — token mismatch');
    res.sendStatus(403);
  }
}

/**
 * POST /webhook — Handle incoming messages from Facebook Messenger.
 * 
 * Facebook sends message events as POST requests. This handler parses the
 * payload and routes each message to the message handler.
 * 
 * PLACEHOLDER: Implement signature verification using FB_APP_SECRET for production.
 */
export function handleWebhookPost(req: Request, res: Response): void {
  const body = req.body;

  if (body.object !== 'page') {
    logger.warn(SOURCE, 'Received non-page object', body.object);
    res.sendStatus(404);
    return;
  }

  // Process each entry (there may be batched events)
  body.entry?.forEach((entry: any) => {
    const webhookEvent = entry.messaging?.[0];

    if (!webhookEvent) {
      logger.debug(SOURCE, 'No messaging event in entry');
      return;
    }

    const senderId = webhookEvent.sender?.id;

    if (webhookEvent.message?.text) {
      logger.info(SOURCE, `Message from ${senderId}: ${webhookEvent.message.text}`);
      handleIncomingMessage(senderId, webhookEvent.message.text);
    } else if (webhookEvent.postback) {
      logger.info(SOURCE, `Postback from ${senderId}: ${webhookEvent.postback.payload}`);
      handleIncomingMessage(senderId, webhookEvent.postback.payload);
    }
  });

  // Always respond with 200 to acknowledge receipt
  res.status(200).send('EVENT_RECEIVED');
}
