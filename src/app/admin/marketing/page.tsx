'use client';

import { useState } from 'react';

export default function MarketingDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'facebook' | 'telegram' | 'campaigns'>('overview');

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gold-500">Marketing Bots</h1>
        <p className="text-gray-400 mt-1">Manage your Facebook & Telegram marketing bots</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-1 bg-charcoal-800 rounded-lg p-1 w-fit">
        {(['overview', 'facebook', 'telegram', 'campaigns'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md text-sm font-medium capitalize transition-all ${
              activeTab === tab
                ? 'bg-gold-500 text-charcoal-900'
                : 'text-gray-400 hover:text-white hover:bg-charcoal-700'
            }`}
          >
            {tab === 'facebook' ? '🔵 Facebook' : tab === 'telegram' ? '✈️ Telegram' : tab === 'campaigns' ? '📢 Campaigns' : '📊 Overview'}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && <OverviewTab />}
      {activeTab === 'facebook' && <FacebookTab />}
      {activeTab === 'telegram' && <TelegramTab />}
      {activeTab === 'campaigns' && <CampaignsTab />}
    </div>
  );
}

/* ─── Overview Tab ───────────────────────────── */
function OverviewTab() {
  return (
    <div className="space-y-6">
      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatusCard
          icon="🔵"
          label="Facebook Bot"
          value="Not Connected"
          status="placeholder"
          detail="Requires Page Access Token"
        />
        <StatusCard
          icon="✈️"
          label="Telegram Bot"
          value="Not Connected"
          status="placeholder"
          detail="Requires Bot Token"
        />
        <StatusCard
          icon="👥"
          label="Total Subscribers"
          value="0"
          status="neutral"
          detail="Across all platforms"
        />
        <StatusCard
          icon="📨"
          label="Messages Sent"
          value="0"
          status="neutral"
          detail="Last 30 days"
        />
      </div>

      {/* Quick Setup Guide */}
      <div className="bg-charcoal-800 border border-charcoal-700 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">🚀 Quick Setup Guide</h2>
        <div className="space-y-4 text-sm text-gray-300">
          <SetupStep
            number={1}
            title="Install Dependencies"
            code="cd frontend/marketing && npm install"
            done={false}
          />
          <SetupStep
            number={2}
            title="Configure Environment"
            code="cp .env.example .env  (then fill in your API keys)"
            done={false}
          />
          <SetupStep
            number={3}
            title="Get Facebook Credentials"
            description="Create a Facebook App at developers.facebook.com, add Messenger, and generate a Page Access Token."
            done={false}
          />
          <SetupStep
            number={4}
            title="Get Telegram Bot Token"
            description="Message @BotFather on Telegram, send /newbot, and copy the HTTP API token."
            done={false}
          />
          <SetupStep
            number={5}
            title="Start the Bots"
            code="npm start"
            done={false}
          />
        </div>
      </div>
    </div>
  );
}

/* ─── Facebook Tab ───────────────────────────── */
function FacebookTab() {
  return (
    <div className="space-y-6">
      <div className="bg-charcoal-800 border border-charcoal-700 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-2">🔵 Facebook Messenger Bot</h2>
        <p className="text-gray-400 text-sm mb-6">Express webhook server for Facebook Messenger Platform</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Config Status */}
          <div className="space-y-3">
            <h3 className="font-medium text-gold-500">Configuration Status</h3>
            <ConfigItem label="Page Access Token" status="missing" />
            <ConfigItem label="Verify Token" status="missing" />
            <ConfigItem label="App Secret" status="missing" />
            <ConfigItem label="Page ID" status="missing" />
          </div>

          {/* How it Works */}
          <div className="space-y-3">
            <h3 className="font-medium text-gold-500">How It Works</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li className="flex gap-2"><span>📥</span> Receives messages via webhook at <code className="text-gold-400">/webhook</code></li>
              <li className="flex gap-2"><span>🔍</span> Matches keywords: products, prices, quote, contact</li>
              <li className="flex gap-2"><span>📤</span> Sends responses via Facebook Send API</li>
              <li className="flex gap-2"><span>📢</span> Broadcasts campaigns to subscribers</li>
            </ul>
          </div>
        </div>
      </div>

      {/* File Structure */}
      <div className="bg-charcoal-800 border border-charcoal-700 rounded-xl p-6">
        <h3 className="font-medium text-white mb-3">📁 File Structure</h3>
        <pre className="text-sm text-gray-300 bg-charcoal-900 rounded-lg p-4 overflow-x-auto">
{`marketing/facebook/
├── index.ts          → Express server entry point (port 3001)
├── webhookHandler.ts → GET verification + POST message routing
├── messageHandler.ts → Keyword matching & Send API calls
└── campaigns.ts      → Subscriber store & broadcast functions`}
        </pre>
      </div>
    </div>
  );
}

/* ─── Telegram Tab ───────────────────────────── */
function TelegramTab() {
  return (
    <div className="space-y-6">
      <div className="bg-charcoal-800 border border-charcoal-700 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-2">✈️ Telegram Bot</h2>
        <p className="text-gray-400 text-sm mb-6">Polling-based bot using node-telegram-bot-api</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Config Status */}
          <div className="space-y-3">
            <h3 className="font-medium text-gold-500">Configuration Status</h3>
            <ConfigItem label="Bot Token" status="missing" />
            <ConfigItem label="Bot Username" status="missing" />
          </div>

          {/* Commands */}
          <div className="space-y-3">
            <h3 className="font-medium text-gold-500">Bot Commands</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li><code className="text-gold-400">/start</code> — Welcome & subscribe</li>
              <li><code className="text-gold-400">/products</code> — Gold catalog</li>
              <li><code className="text-gold-400">/prices</code> — Pricing info</li>
              <li><code className="text-gold-400">/quote</code> — Request a quote</li>
              <li><code className="text-gold-400">/contact</code> — Contact details</li>
              <li><code className="text-gold-400">/help</code> — Show commands</li>
            </ul>
          </div>
        </div>
      </div>

      {/* File Structure */}
      <div className="bg-charcoal-800 border border-charcoal-700 rounded-xl p-6">
        <h3 className="font-medium text-white mb-3">📁 File Structure</h3>
        <pre className="text-sm text-gray-300 bg-charcoal-900 rounded-lg p-4 overflow-x-auto">
{`marketing/telegram/
├── index.ts          → Bot initialization (polling mode)
├── commandHandler.ts → /start, /products, /prices, etc.
├── messageHandler.ts → Free-text keyword matching
└── campaigns.ts      → Subscriber store & rate-limited broadcasts`}
        </pre>
      </div>
    </div>
  );
}

/* ─── Campaigns Tab ──────────────────────────── */
function CampaignsTab() {
  const [message, setMessage] = useState('');

  return (
    <div className="space-y-6">
      <div className="bg-charcoal-800 border border-charcoal-700 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-2">📢 Campaign Broadcaster</h2>
        <p className="text-gray-400 text-sm mb-6">Send promotional messages to all subscribers</p>

        {/* Compose Area */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Campaign Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your promotional message here... e.g. 🔥 Special offer on gold bars this week!"
              className="w-full h-32 bg-charcoal-900 border border-charcoal-600 rounded-lg p-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-gold-500 resize-none"
            />
          </div>

          <div className="flex gap-3">
            <label className="flex items-center gap-2 text-sm text-gray-300">
              <input type="checkbox" className="accent-gold-500" defaultChecked />
              🔵 Facebook
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-300">
              <input type="checkbox" className="accent-gold-500" defaultChecked />
              ✈️ Telegram
            </label>
          </div>

          <button
            disabled={!message.trim()}
            className="px-6 py-2 bg-gold-500 text-charcoal-900 font-semibold rounded-lg hover:bg-gold-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            🚀 Send Campaign
          </button>

          <p className="text-xs text-gray-500">
            ⚠️ Placeholder: Connect your bots first, then this UI will trigger real broadcasts via the marketing bot API.
          </p>
        </div>
      </div>

      {/* Campaign History (Placeholder) */}
      <div className="bg-charcoal-800 border border-charcoal-700 rounded-xl p-6">
        <h3 className="font-medium text-white mb-3">📋 Campaign History</h3>
        <div className="text-center text-gray-500 py-8 text-sm">
          No campaigns sent yet. Start by composing a message above.
        </div>
      </div>
    </div>
  );
}

/* ─── Reusable Components ────────────────────── */

function StatusCard({ icon, label, value, status, detail }: {
  icon: string;
  label: string;
  value: string;
  status: 'running' | 'placeholder' | 'neutral';
  detail: string;
}) {
  const borderColor = status === 'running' ? 'border-green-500/30' : status === 'placeholder' ? 'border-yellow-500/30' : 'border-charcoal-700';
  const dotColor = status === 'running' ? 'bg-green-500' : status === 'placeholder' ? 'bg-yellow-500' : 'bg-gray-500';

  return (
    <div className={`bg-charcoal-800 border ${borderColor} rounded-xl p-4`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-lg">{icon}</span>
        <span className={`w-2 h-2 rounded-full ${dotColor}`} />
      </div>
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
      <div className="text-xs text-gray-500 mt-1">{detail}</div>
    </div>
  );
}

function SetupStep({ number, title, code, description, done }: {
  number: number;
  title: string;
  code?: string;
  description?: string;
  done: boolean;
}) {
  return (
    <div className="flex gap-3">
      <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
        done ? 'bg-green-500 text-white' : 'bg-charcoal-700 text-gray-400'
      }`}>
        {done ? '✓' : number}
      </div>
      <div>
        <div className="font-medium text-white">{title}</div>
        {code && (
          <code className="text-xs text-gold-400 bg-charcoal-900 rounded px-2 py-1 mt-1 inline-block">{code}</code>
        )}
        {description && (
          <p className="text-xs text-gray-400 mt-1">{description}</p>
        )}
      </div>
    </div>
  );
}

function ConfigItem({ label, status }: { label: string; status: 'configured' | 'missing' }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-gray-300">{label}</span>
      <span className={`px-2 py-0.5 rounded text-xs font-medium ${
        status === 'configured'
          ? 'bg-green-500/20 text-green-400'
          : 'bg-yellow-500/20 text-yellow-400'
      }`}>
        {status === 'configured' ? '✓ Set' : '⚠ Missing'}
      </span>
    </div>
  );
}
