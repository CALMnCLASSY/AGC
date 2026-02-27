// ============================================
// Shared TypeScript Interfaces
// ============================================

/** Represents a marketing bot user/subscriber */
export interface BotUser {
  id: string;
  platform: 'facebook' | 'telegram';
  chatId: string;
  firstName?: string;
  lastName?: string;
  username?: string;
  subscribedAt: Date;
  isActive: boolean;
}

/** Incoming message from any platform */
export interface IncomingMessage {
  platform: 'facebook' | 'telegram';
  senderId: string;
  text: string;
  timestamp: Date;
  raw?: unknown;
}

/** Outgoing message to be sent via a bot */
export interface OutgoingMessage {
  recipientId: string;
  text: string;
  imageUrl?: string;
  buttons?: MessageButton[];
}

/** Interactive button attached to a message */
export interface MessageButton {
  type: 'url' | 'postback';
  title: string;
  payload: string; // URL for type 'url', custom string for 'postback'
}

/** A marketing campaign definition */
export interface Campaign {
  id: string;
  name: string;
  message: string;
  imageUrl?: string;
  targetPlatforms: ('facebook' | 'telegram')[];
  scheduledAt?: Date;
  sentAt?: Date;
  recipientCount: number;
  status: 'draft' | 'scheduled' | 'sending' | 'sent' | 'failed';
}

/** Bot status information */
export interface BotStatus {
  platform: 'facebook' | 'telegram';
  isRunning: boolean;
  startedAt?: Date;
  subscriberCount: number;
  messagesSent: number;
  messagesReceived: number;
}

/** Product info used in bot responses */
export interface ProductInfo {
  name: string;
  description: string;
  category: string;
  imageUrl?: string;
}
