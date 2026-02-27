import dotenv from 'dotenv';
import path from 'path';

// Load .env file from the marketing directory
dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

export const config = {
  // Facebook Messenger
  facebook: {
    pageAccessToken: process.env.FB_PAGE_ACCESS_TOKEN || 'PLACEHOLDER_FB_PAGE_ACCESS_TOKEN',
    verifyToken: process.env.FB_VERIFY_TOKEN || 'PLACEHOLDER_FB_VERIFY_TOKEN',
    appSecret: process.env.FB_APP_SECRET || 'PLACEHOLDER_FB_APP_SECRET',
    pageId: process.env.FB_PAGE_ID || 'PLACEHOLDER_FB_PAGE_ID',
    graphApiUrl: 'https://graph.facebook.com/v19.0',
  },

  // Telegram Bot
  telegram: {
    botToken: process.env.TELEGRAM_BOT_TOKEN || 'PLACEHOLDER_TELEGRAM_BOT_TOKEN',
    botUsername: process.env.TELEGRAM_BOT_USERNAME || 'PLACEHOLDER_BOT_USERNAME',
  },

  // Server
  server: {
    port: parseInt(process.env.PORT || '3001', 10),
    nodeEnv: process.env.NODE_ENV || 'development',
  },

  // Business Info
  business: {
    name: process.env.BUSINESS_NAME || 'Pure Africa Gold',
    email: process.env.BUSINESS_EMAIL || 'sales@pureafricagold.com',
    phone: process.env.BUSINESS_PHONE || '+254770655092',
    website: process.env.BUSINESS_WEBSITE || 'https://pureafricagold.com',
  },
};

export default config;
