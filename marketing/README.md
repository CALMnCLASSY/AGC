# 🤖 Pure Africa Gold — Marketing Bots

Facebook Messenger and Telegram marketing bots for **Pure Africa Gold**, enabling automated customer engagement, product showcase, and campaign broadcasting.

---

## 📁 Folder Structure

```
marketing/
├── config/          → Environment & config loader
├── shared/          → Logger, types, message templates
├── facebook/        → Facebook Messenger bot (Express webhook)
├── telegram/        → Telegram bot (polling mode)
├── scripts/         → Unified launcher
├── .env.example     → Environment variable template
└── package.json     → Dependencies
```

---

## 🚀 Quick Start

### 1. Install Dependencies

```bash
cd frontend/marketing
npm install
```

### 2. Configure Environment Variables

```bash
cp .env.example .env
```

Then edit `.env` with your real API credentials (see sections below).

### 3. Start Both Bots

```bash
npm start
```

Or start individually:

```bash
npm run start:facebook    # Facebook bot only
npm run start:telegram    # Telegram bot only
```

---

## 🔵 Facebook Messenger Bot Setup

### Step 1: Create a Facebook App

1. Go to [Meta for Developers](https://developers.facebook.com/)
2. Click **"Create App"** → Choose **"Business"** type
3. Add the **"Messenger"** product to your app

### Step 2: Create / Connect a Facebook Page

1. You need a Facebook Page to receive messages
2. In the Messenger settings, connect your page to the app

### Step 3: Generate a Page Access Token

1. In Messenger Settings → **Token Generation**
2. Select your page and generate a token
3. Copy the token to `FB_PAGE_ACCESS_TOKEN` in your `.env` file

### Step 4: Set Up the Webhook

1. In Messenger Settings → **Webhooks**
2. You will need a **publicly accessible URL** (use [ngrok](https://ngrok.com/) for local development):
   ```bash
   ngrok http 3001
   ```
3. Set the callback URL to: `https://your-ngrok-url.ngrok.io/webhook`
4. Set the Verify Token to match `FB_VERIFY_TOKEN` in your `.env`
5. Subscribe to: `messages`, `messaging_postbacks`

### Step 5: Set the App Secret

1. In your app's **Settings → Basic**
2. Copy the **App Secret** to `FB_APP_SECRET` in your `.env`

---

## 🔵 Telegram Bot Setup

### Step 1: Create a Bot via @BotFather

1. Open Telegram and search for **@BotFather**
2. Send `/newbot` and follow the prompts
3. Choose a name (e.g., "Pure Africa Gold Bot")
4. Choose a username (e.g., `pureafricagold_bot`)
5. Copy the **HTTP API token** to `TELEGRAM_BOT_TOKEN` in your `.env`
6. Set `TELEGRAM_BOT_USERNAME` to your bot's username

### Step 2: Set Bot Commands (Optional)

BotFather will show your bot's commands automatically from the code, but you can also set them manually:

1. Send `/setcommands` to @BotFather
2. Paste the following:
   ```
   start - Welcome & subscribe to updates
   products - Browse our gold catalog
   prices - Get current pricing info
   quote - Request a personalized quote
   contact - Get our contact details
   help - Show available commands
   ```

### Step 3: Start the Bot

```bash
npm run start:telegram
```

The bot will immediately start listening for messages in polling mode.

---

## 📢 Running Campaigns

Both bots include campaign broadcasting functionality. Currently, campaigns are triggered programmatically. To broadcast:

```typescript
// Facebook
import { broadcastPromotion } from './facebook/campaigns';
await broadcastPromotion('🔥 Gold prices at all-time lows! Contact us today.');

// Telegram
import { broadcastPromotion } from './telegram/campaigns';
await broadcastPromotion('🔥 Gold prices at all-time lows! Contact us today.');
```

**Future Enhancements:**
- Admin dashboard UI at `/admin/marketing` for campaign management
- Database-backed subscriber storage
- Scheduled campaigns with cron jobs
- Analytics and reporting

---

## 🔧 Placeholders to Replace

| Placeholder | Where to Get It |
|-------------|----------------|
| `FB_PAGE_ACCESS_TOKEN` | Meta for Developers → Messenger → Token Generation |
| `FB_VERIFY_TOKEN` | Choose any custom string (must match webhook config) |
| `FB_APP_SECRET` | Meta for Developers → App Settings → Basic |
| `FB_PAGE_ID` | Your Facebook Page → About → Page ID |
| `TELEGRAM_BOT_TOKEN` | Telegram @BotFather → `/newbot` |
| `TELEGRAM_BOT_USERNAME` | The username you chose when creating the bot |

---

## 🛡️ Production Considerations

- [ ] Replace in-memory subscriber stores with a database
- [ ] Add Facebook webhook signature verification
- [ ] Implement rate limiting for broadcasts
- [ ] Add error retry logic with exponential backoff
- [ ] Set up logging to a file or monitoring service
- [ ] Use a process manager (PM2) or containerize with Docker
- [ ] Switch Telegram to webhook mode behind a reverse proxy
- [ ] Add analytics tracking for message engagement
