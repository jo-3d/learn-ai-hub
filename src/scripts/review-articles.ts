import * as fs from 'fs';
import * as path from 'path';
import matter from 'gray-matter';
import * as readline from 'readline';

const articlesDir = path.join(process.cwd(), 'content/articles');

interface ArticleInfo {
  filename: string;
  title: string;
  date: string;
  status: string;
  tags: string[];
  sourceUrl?: string;
}

function getArticlesByStatus(status: string): ArticleInfo[] {
  const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.mdx'));
  const articles: ArticleInfo[] = [];

  for (const filename of files) {
    const content = fs.readFileSync(path.join(articlesDir, filename), 'utf-8');
    const { data } = matter(content);
    if (data.status === status) {
      articles.push({
        filename,
        title: data.title || 'Untitled',
        date: data.date || '',
        status: data.status,
        tags: data.tags || [],
        sourceUrl: data.sourceUrl,
      });
    }
  }
  return articles;
}

function publishArticle(filename: string): void {
  const filePath = path.join(articlesDir, filename);
  const content = fs.readFileSync(filePath, 'utf-8');
  const { data, content: body } = matter(content);
  data.status = 'published';
  const updated = matter.stringify(body, data);
  fs.writeFileSync(filePath, updated);
}

function deleteArticle(filename: string): void {
  fs.unlinkSync(path.join(articlesDir, filename));
}

async function main() {
  const reviewArticles = getArticlesByStatus('review');

  if (reviewArticles.length === 0) {
    console.log('\nNo articles pending review.\n');
    const published = getArticlesByStatus('published');
    const noStatus = fs.readdirSync(articlesDir)
      .filter(f => f.endsWith('.mdx'))
      .filter(f => {
        const { data } = matter(fs.readFileSync(path.join(articlesDir, f), 'utf-8'));
        return !data.status;
      });
    console.log(`Published: ${published.length} | Legacy (no status): ${noStatus.length}`);
    return;
  }

  console.log(`\n========================================`);
  console.log(`  ${reviewArticles.length} article(s) pending review`);
  console.log(`========================================\n`);

  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const ask = (q: string): Promise<string> => new Promise(r => rl.question(q, r));

  for (let i = 0; i < reviewArticles.length; i++) {
    const article = reviewArticles[i];
    console.log(`\n--- Article ${i + 1} of ${reviewArticles.length} ---`);
    console.log(`Title:  ${article.title}`);
    console.log(`Date:   ${article.date}`);
    console.log(`Tags:   ${article.tags.join(', ')}`);
    console.log(`File:   ${article.filename}`);
    if (article.sourceUrl) console.log(`Source: ${article.sourceUrl}`);

    const answer = await ask('\n  [p] Publish  [d] Delete  [s] Skip  [o] Open in editor  > ');

    switch (answer.trim().toLowerCase()) {
      case 'p':
        publishArticle(article.filename);
        console.log('  -> Published!');
        break;
      case 'd':
        const confirm = await ask('  Are you sure? (y/n) > ');
        if (confirm.trim().toLowerCase() === 'y') {
          deleteArticle(article.filename);
          console.log('  -> Deleted.');
        } else {
          console.log('  -> Skipped.');
        }
        break;
      case 'o':
        console.log(`  -> Open this file in your editor:`);
        console.log(`     ${path.join(articlesDir, article.filename)}`);
        await ask('  Press Enter when done editing... ');
        const retry = await ask('  [p] Publish  [d] Delete  [s] Skip  > ');
        if (retry.trim().toLowerCase() === 'p') {
          publishArticle(article.filename);
          console.log('  -> Published!');
        } else if (retry.trim().toLowerCase() === 'd') {
          deleteArticle(article.filename);
          console.log('  -> Deleted.');
        } else {
          console.log('  -> Skipped.');
        }
        break;
      default:
        console.log('  -> Skipped.');
    }
  }

  rl.close();

  const remaining = getArticlesByStatus('review');
  console.log(`\n========================================`);
  console.log(`  Done! ${remaining.length} article(s) still in review.`);
  console.log(`========================================\n`);
}

main().catch(console.error);
