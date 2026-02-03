import Parser from 'rss-parser';
import * as fs from 'fs/promises';
import * as path from 'path';

interface NewsItem {
  title: string;
  description: string;
  url: string;
  publishedDate: string;
  source: string;
}

const RSS_SOURCES = [
  'https://techcrunch.com/tag/artificial-intelligence/feed/',
  'https://venturebeat.com/category/ai/feed/',
  'https://www.theverge.com/rss/ai-artificial-intelligence/index.xml',
  'https://feeds.arstechnica.com/arstechnica/technology-lab',
];

function decodeEntities(text: string): string {
  return text
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, code) => String.fromCharCode(parseInt(code, 16)))
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
}

const AI_KEYWORDS = /\b(ai|artificial intelligence|machine learning|llm|gpt|chatbot|neural|deep learning|generative|gemini|claude|openai|anthropic|copilot)\b/i;

function similarTitles(a: string, b: string): boolean {
  const normalize = (s: string) => s.toLowerCase().replace(/[^a-z0-9\s]/g, '');
  const arrA = normalize(a).split(/\s+/);
  const arrB = normalize(b).split(/\s+/);
  const setB = new Set(arrB);
  const intersection = arrA.filter(w => setB.has(w));
  const union = new Set(arrA.concat(arrB));
  return intersection.length / union.size > 0.6;
}

function deduplicate(items: NewsItem[]): NewsItem[] {
  const unique: NewsItem[] = [];
  for (const item of items) {
    const isDuplicate = unique.some(existing => similarTitles(existing.title, item.title));
    if (!isDuplicate) {
      unique.push(item);
    }
  }
  return unique;
}

async function fetchNews() {
  const parser = new Parser();
  const allItems: NewsItem[] = [];

  for (const feedUrl of RSS_SOURCES) {
    try {
      const feed = await parser.parseURL(feedUrl);
      for (const item of feed.items) {
        if (item.title && item.link) {
          allItems.push({
            title: decodeEntities(item.title),
            description: decodeEntities(item.contentSnippet?.slice(0, 500) || item.content?.slice(0, 500) || ''),
            url: item.link,
            publishedDate: item.pubDate || item.isoDate || '',
            source: feed.title || feedUrl,
          });
        }
      }
      console.log(`Fetched ${feed.items.length} items from ${feed.title || feedUrl}`);
    } catch (err) {
      console.error(`Failed to fetch ${feedUrl}:`, (err as Error).message);
    }
  }

  // Filter to last 7 days
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

  const recentItems = allItems.filter(item => {
    if (!item.publishedDate) return false;
    const pubDate = new Date(item.publishedDate);
    if (isNaN(pubDate.getTime()) || pubDate <= oneWeekAgo) return false;
    // Filter to AI-related content
    return AI_KEYWORDS.test(item.title) || AI_KEYWORDS.test(item.description);
  });

  // Sort by date (newest first)
  recentItems.sort((a, b) =>
    new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );

  // Deduplicate and take top 5
  const uniqueItems = deduplicate(recentItems).slice(0, 5);

  const outputPath = path.join(__dirname, 'news-cache.json');
  await fs.writeFile(outputPath, JSON.stringify(uniqueItems, null, 2));
  console.log(`\nSaved ${uniqueItems.length} news items to ${outputPath}`);
}

fetchNews().catch(console.error);
