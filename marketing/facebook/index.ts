import express from 'express';
import config from '../config';
import logger from '../shared/logger';
import { handleWebhookGet, handleWebhookPost } from './webhookHandler';

const SOURCE = 'FacebookBot';

/**
 * Creates and starts the Facebook Messenger bot Express server.
 * 
 * PLACEHOLDER: Replace config values with real Facebook credentials.
 * See README.md for setup instructions.
 */
export function startFacebookBot(): express.Express {
  const app = express();
  app.use(express.json());

  // Health check endpoint
  app.get('/health', (_req, res) => {
    res.json({ status: 'ok', platform: 'facebook', timestamp: new Date().toISOString() });
  });

  // Facebook webhook verification (GET)
  app.get('/webhook', handleWebhookGet);

  // Facebook webhook incoming messages (POST)
  app.post('/webhook', handleWebhookPost);

  // Start server
  app.listen(config.server.port, () => {
    logger.info(SOURCE, `Facebook Messenger Bot server running on port ${config.server.port}`);
    logger.info(SOURCE, `Webhook URL: http://localhost:${config.server.port}/webhook`);
    logger.warn(SOURCE, 'Using PLACEHOLDER credentials — replace with real tokens before deploying.');
  });

  return app;
}

// Run directly if this file is executed
if (require.main === module) {
  startFacebookBot();
}

export default startFacebookBot;
