import Groq from 'groq-sdk';
import config from '../config';
import logger from './logger';

const SOURCE = 'AIService';

// Initialize Groq client (free, no billing required)
// Using llama-3.3-70b-versatile - a powerful & fast model on Groq's free tier
let groq: Groq | null = null;

function getGroqClient(): Groq {
  if (!groq) {
    groq = new Groq({ apiKey: config.ai.groqApiKey });
  }
  return groq;
}

const ANGLES = [
  'Educational: Why gold is a safe-haven asset in the current economy and why now is the time to invest.',
  'Sales-driven: Promote our 24k gold jewelry, coins, or investment bars with urgency.',
  'Market Update: Share positive bullish sentiment on gold prices in Africa and globally.',
  'Engagement: Ask followers questions about their investment goals or wealth-building strategies.',
  'Lifestyle: Showcase the prestige, beauty, and status that comes with owning Pure Africa Gold.',
  'Urgency / Limited Stock: Create FOMO around limited availability of our gold products.',
  'Trust & Testimonial: Emphasize reliability, purity certification, and secure delivery.',
  'Investment Tips: Share 3 quick tips on how to start investing in gold today.',
];

/**
 * Generates a catchy and trendy marketing post for Pure Africa Gold.
 * Returns both the post text and the selected angle (for image matching).
 */
export async function generateMarketingPost(): Promise<{ text: string; angle: string }> {
  const selectedAngle = ANGLES[Math.floor(Math.random() * ANGLES.length)];

  // Diagnostic: show masked key to confirm it's being loaded
  const key = config.ai.groqApiKey;
  const maskedKey = key ? `${key.substring(0, 6)}...${key.slice(-4)}` : 'NOT SET';
  logger.info(SOURCE, `Using Groq API Key: ${maskedKey}`);

  const prompt = `You are an expert social media marketer for "Pure Africa Gold", a premium gold trading and investment company based in Africa.

Task: Write a CATCHY, TRENDY, and HIGH-CONVERSION social media post.
Angle: ${selectedAngle}

Guidelines:
1. Use a premium, professional, yet exciting tone.
2. Include relevant emojis throughout (at least 4-6 emojis).
3. Include 4-5 trending hashtags relevant to Gold, Africa, Investing, and Wealth.
4. Keep it between 100-200 words.
5. Always mention the business name: "Pure Africa Gold".
6. Include a clear Call to Action (e.g., "DM us now", "Send us a message to get started").
7. Use Markdown *bold* for emphasis on key phrases.
8. Make it feel warm, human, and aspirational — not corporate or robotic.

Write ONLY the post content. No preamble, no explanation, no "Here is your post:" prefix.`;

  try {
    if (!config.ai.groqApiKey || config.ai.groqApiKey.startsWith('your_')) {
      logger.warn(SOURCE, 'Groq API Key missing or placeholder. Returning mock post.');
      return {
        text: `✨ *Pure Africa Gold Exclusive* ✨\n\nInvest in your future with the world's most trusted asset. Our 24k gold bars are now available for immediate delivery! 🏆\n\n💰 High purity | 🚚 Secure delivery | 📈 Guaranteed value\n\nDM us now to get started!\n\n#Gold #Investing #PureAfricaGold #Wealth #Africa`,
        angle: selectedAngle,
      };
    }

    const client = getGroqClient();
    const completion = await client.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      max_tokens: 400,
      temperature: 0.85, // Slightly creative but still coherent
    });

    const text = completion.choices[0]?.message?.content?.trim();

    if (!text) {
      throw new Error('Empty response from Groq model');
    }

    logger.info(SOURCE, 'New marketing post generated successfully via Groq.');
    return { text, angle: selectedAngle };
  } catch (error: any) {
    logger.error(SOURCE, 'Failed to generate AI post', error.message || error);
    throw error;
  }
}
