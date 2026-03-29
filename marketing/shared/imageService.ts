import axios from 'axios';
import config from '../config';
import logger from './logger';

const SOURCE = 'ImageService';

// Maps marketing angles to more targeted Unsplash search queries
const ANGLE_IMAGE_QUERIES: Record<string, string[]> = {
  'Educational':  ['gold investment finance', 'gold bars wealth', 'financial freedom gold'],
  'Sales-driven': ['gold jewelry luxury', '24k gold necklace', 'gold ring diamond luxury'],
  'Market Update': ['gold price chart finance', 'stock market gold', 'investment growth chart'],
  'Engagement':   ['wealth building africa', 'african business success', 'investment planning'],
  'Lifestyle':    ['luxury gold lifestyle', 'gold accessories fashion', 'wealthy lifestyle africa'],
  'Urgency':      ['gold coins rare', 'gold limited stock', 'precious metals collection'],
  'Trust':        ['secure gold vault', 'certified gold purity', 'trusted gold delivery'],
  'Investment Tips': ['gold investment tips', 'financial planning gold', 'save gold coins'],
};

const FALLBACK_QUERIES = ['gold bars', 'gold jewelry', 'gold investment africa', 'luxury gold'];

/**
 * Fetch a relevant image URL from Unsplash based on the marketing angle.
 * Returns null if the API key is not set or if the fetch fails.
 */
export async function fetchMarketingImage(angle: string): Promise<string | null> {
  const accessKey = config.image.unsplashAccessKey;

  if (!accessKey || accessKey.startsWith('your_')) {
    logger.warn(SOURCE, 'Unsplash API key not set. Posts will be text-only.');
    return null;
  }

  // Pick a query based on the detected angle keyword
  let queries = FALLBACK_QUERIES;
  for (const [key, q] of Object.entries(ANGLE_IMAGE_QUERIES)) {
    if (angle.toLowerCase().includes(key.toLowerCase())) {
      queries = q;
      break;
    }
  }

  // Pick a random query from the matching list for variety
  const query = queries[Math.floor(Math.random() * queries.length)];

  try {
    const response = await axios.get('https://api.unsplash.com/photos/random', {
      params: {
        query,
        orientation: 'landscape',
        content_filter: 'high',
      },
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
    });

    const imageUrl = response.data?.urls?.regular;
    if (!imageUrl) throw new Error('No image URL in Unsplash response');

    logger.info(SOURCE, `Image fetched for query: "${query}"`);
    return imageUrl;
  } catch (error: any) {
    logger.error(SOURCE, `Failed to fetch image from Unsplash: ${error.message}`);
    return null; // Gracefully fall back to text-only
  }
}
