import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';
import matter from 'gray-matter';
import OpenAI from 'openai';

// Load .env.local
const envPath = path.join(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8');
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

const PORT = 3001;
const articlesDir = path.join(process.cwd(), 'content/articles');
const imagesDir = path.join(process.cwd(), 'public/images/articles');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

function corsHeaders(): Record<string, string> {
  return {
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };
}

function sendJson(res: http.ServerResponse, status: number, data: object) {
  res.writeHead(status, corsHeaders());
  res.end(JSON.stringify(data));
}

function getSlugFromUrl(url: string, prefix: string): string | null {
  const match = url.match(new RegExp(`^${prefix}/(.+)$`));
  return match ? decodeURIComponent(match[1]) : null;
}

function readBody(req: http.IncomingMessage): Promise<string> {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => resolve(body));
    req.on('error', reject);
  });
}

const server = http.createServer(async (req, res) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, corsHeaders());
    res.end();
    return;
  }

  const url = req.url || '';

  // POST /api/publish/:slug
  if (req.method === 'POST' && url.startsWith('/api/publish/')) {
    const slug = getSlugFromUrl(url, '/api/publish');
    if (!slug) return sendJson(res, 400, { error: 'Missing slug' });

    const filePath = path.join(articlesDir, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) return sendJson(res, 404, { error: 'Article not found' });

    try {
      const raw = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(raw);
      data.status = 'published';
      const updated = matter.stringify(content, data);
      fs.writeFileSync(filePath, updated);
      console.log(`Published: ${slug}`);
      return sendJson(res, 200, { success: true, slug });
    } catch (err) {
      return sendJson(res, 500, { error: (err as Error).message });
    }
  }

  // POST /api/delete/:slug
  if (req.method === 'POST' && url.startsWith('/api/delete/')) {
    const slug = getSlugFromUrl(url, '/api/delete');
    if (!slug) return sendJson(res, 400, { error: 'Missing slug' });

    const filePath = path.join(articlesDir, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) return sendJson(res, 404, { error: 'Article not found' });

    try {
      fs.unlinkSync(filePath);
      const imagePath = path.join(imagesDir, `${slug}.png`);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
        console.log(`Deleted image: ${slug}.png`);
      }
      console.log(`Deleted: ${slug}`);
      return sendJson(res, 200, { success: true, slug });
    } catch (err) {
      return sendJson(res, 500, { error: (err as Error).message });
    }
  }

  // POST /api/regenerate-image/:slug
  if (req.method === 'POST' && url.startsWith('/api/regenerate-image/')) {
    const slug = getSlugFromUrl(url, '/api/regenerate-image');
    if (!slug) return sendJson(res, 400, { error: 'Missing slug' });

    const filePath = path.join(articlesDir, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) return sendJson(res, 404, { error: 'Article not found' });

    try {
      const bodyStr = await readBody(req);
      const { instructions } = JSON.parse(bodyStr || '{}');

      const raw = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(raw);
      const title = data.title || slug;

      const basePrompt = `A modern, minimal blog header illustration for an article titled "${title}". Clean design, tech-themed, no text, suitable as a wide banner image.`;
      const fullPrompt = instructions
        ? `${basePrompt} Additional instructions: ${instructions}`
        : basePrompt;

      console.log(`Regenerating image for: ${slug}`);
      console.log(`  Prompt: ${fullPrompt}`);

      const imageResponse = await openai.images.generate({
        model: 'gpt-image-1.5',
        prompt: fullPrompt,
        n: 1,
        size: '1536x1024',
        quality: 'medium',
      });

      const imageData = imageResponse.data?.[0];
      if (!imageData?.b64_json) {
        return sendJson(res, 500, { error: 'No image data returned' });
      }

      // Ensure images dir exists
      if (!fs.existsSync(imagesDir)) {
        fs.mkdirSync(imagesDir, { recursive: true });
      }

      const imagePath = path.join(imagesDir, `${slug}.png`);
      fs.writeFileSync(imagePath, Buffer.from(imageData.b64_json, 'base64'));

      // Update frontmatter coverImage if it was using default
      const { data: frontmatter, content } = matter(raw);
      frontmatter.coverImage = `/images/articles/${slug}.png`;
      const updated = matter.stringify(content, frontmatter);
      fs.writeFileSync(filePath, updated);

      console.log(`  Image regenerated and saved.`);
      return sendJson(res, 200, {
        success: true,
        slug,
        coverImage: `/images/articles/${slug}.png?t=${Date.now()}`,
      });
    } catch (err) {
      console.error(`  Image regeneration failed:`, (err as Error).message);
      return sendJson(res, 500, { error: (err as Error).message });
    }
  }

  sendJson(res, 404, { error: 'Not found' });
});

server.listen(PORT, () => {
  console.log(`Review API server running at http://localhost:${PORT}`);
  if (!process.env.OPENAI_API_KEY) {
    console.warn('Warning: OPENAI_API_KEY not set — image regeneration will fail');
  }
});
