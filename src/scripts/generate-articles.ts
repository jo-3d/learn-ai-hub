import OpenAI from 'openai';
import * as fs from 'fs/promises';
import * as fsSync from 'fs';
import * as path from 'path';

// Load .env.local if it exists
const envPath = path.join(process.cwd(), '.env.local');
if (fsSync.existsSync(envPath)) {
  const envContent = fsSync.readFileSync(envPath, 'utf-8');
  for (const line of envContent.split('\n')) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const [key, ...rest] = trimmed.split('=');
      if (key && rest.length > 0) {
        process.env[key.trim()] = rest.join('=').trim();
      }
    }
  }
}

interface NewsItem {
  title: string;
  description: string;
  url: string;
  publishedDate: string;
  source: string;
}

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

if (!OPENAI_API_KEY) {
  console.error('Missing OPENAI_API_KEY environment variable');
  process.exit(1);
}

function buildPrompt(newsItem: NewsItem): string {
  return `You are writing for an AI education platform aimed at beginners and enthusiasts.

NEWS SOURCE:
Title: ${newsItem.title}
Description: ${newsItem.description}
Source: ${newsItem.source}
URL: ${newsItem.url}

TASK: Write an educational blog post (800-1200 words) that:
1. Explains this AI news in simple, beginner-friendly terms
2. Provides context about why this matters
3. Discusses practical implications for everyday users
4. Suggests related AI tools or concepts readers should explore
5. Uses a friendly, encouraging tone

FORMAT: Return ONLY the article body in markdown. Use ## and ### headers, bullet points, and clear paragraphs. Do NOT include frontmatter or the title as a heading (we add those separately).`;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 60);
}

async function generateArticles() {
  const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

  const cachePath = path.join(__dirname, 'news-cache.json');
  const newsItems: NewsItem[] = JSON.parse(await fs.readFile(cachePath, 'utf-8'));

  if (newsItems.length === 0) {
    console.log('No news items to generate articles from.');
    return;
  }

  const articlesDir = path.join(process.cwd(), 'content/articles');
  const imagesDir = path.join(process.cwd(), 'public/images/articles');
  // Ensure images directory exists
  await fs.mkdir(imagesDir, { recursive: true });
  const today = new Date().toISOString().split('T')[0];

  for (const newsItem of newsItems) {
    const slug = `ai-news-${slugify(newsItem.title)}-${today}`;
    const outputPath = path.join(articlesDir, `${slug}.mdx`);

    // Skip if already exists
    try {
      await fs.access(outputPath);
      console.log(`Skipping (already exists): ${slug}`);
      continue;
    } catch {
      // File doesn't exist, proceed
    }

    console.log(`Generating article for: ${newsItem.title}`);

    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: 'You are a skilled tech writer for an AI education platform.' },
          { role: 'user', content: buildPrompt(newsItem) },
        ],
        max_tokens: 2000,
      });

      const articleContent = response.choices[0]?.message?.content || '';

      // Generate cover image
      let coverImagePath = '/images/articles/default-ai-news.png';
      try {
        console.log(`  Generating cover image...`);
        const imageResponse = await openai.images.generate({
          model: 'gpt-image-1.5',
          prompt: `A modern, minimal blog header illustration for an article titled "${newsItem.title}". Clean design, tech-themed, abstract shapes and gradients, no text, suitable as a wide banner image.`,
          n: 1,
          size: '1536x1024',
          quality: 'medium',
        });

        const imageData = imageResponse.data?.[0];
        if (imageData?.b64_json) {
          const imagePath = path.join(imagesDir, `${slug}.png`);
          await fs.writeFile(imagePath, Buffer.from(imageData.b64_json, 'base64'));
          coverImagePath = `/images/articles/${slug}.png`;
          console.log(`  Cover image saved.`);
        }
      } catch (imgErr) {
        console.error(`  Image generation failed, using default:`, (imgErr as Error).message);
      }

      const frontmatter = [
        '---',
        `title: "${newsItem.title.replace(/"/g, '\\"')}"`,
        `description: "${newsItem.description.slice(0, 160).replace(/"/g, '\\"')}"`,
        `date: "${today}"`,
        `tags: ["AI News", "Trending"]`,
        `coverImage: "${coverImagePath}"`,
        `status: "review"`,
        `sourceUrl: "${newsItem.url}"`,
        '---',
        '',
      ].join('\n');

      await fs.writeFile(outputPath, frontmatter + articleContent);
      console.log(`Created: ${slug}.mdx`);

      // Small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (err) {
      console.error(`Failed to generate article for "${newsItem.title}":`, (err as Error).message);
    }
  }

  console.log('\nArticle generation complete.');
}

generateArticles().catch(console.error);
