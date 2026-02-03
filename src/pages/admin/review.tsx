import React from 'react';
import styled from 'styled-components';
import { GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import MainLayout from '../../layouts/MainLayout';

const API_URL = 'http://localhost:3001';

interface ReviewArticle {
  slug: string;
  title: string;
  date: string;
  status: string;
  tags: string[];
  sourceUrl?: string;
  wordCount: number;
  preview: string;
  coverImage?: string;
}

interface ReviewPageProps {
  reviewArticles: ReviewArticle[];
  publishedCount: number;
  draftCount: number;
}

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Banner = styled.div`
  background: #1a1a2e;
  border: 1px solid #4caf50;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  color: #e0e0e0;
  line-height: 1.6;
  h3 { color: #4caf50; margin-bottom: 0.5rem; }
`;

const Stats = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const Stat = styled.div<{ $color: string }>`
  background: #1a1a2e;
  border-left: 4px solid ${p => p.$color};
  padding: 1rem 1.5rem;
  border-radius: 8px;
  span { display: block; font-size: 2rem; font-weight: 700; color: ${p => p.$color}; }
  small { color: #999; }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 1.5rem;
`;

const Card = styled.div`
  background: #1a1a2e;
  border: 1px solid #2a2a3e;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const CardImage = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  background: #2a2a3e;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.5rem;
  background: rgba(0,0,0,0.7);
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const CardBody = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
`;

const CardTitle = styled.h3`
  color: #e0e0e0;
  font-size: 1.1rem;
  line-height: 1.4;
  margin: 0;
`;

const CardMeta = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  font-size: 0.8rem;
  color: #888;
`;

const Tag = styled.span`
  background: #2a2a3e;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-size: 0.75rem;
  color: #aaa;
`;

const Preview = styled.p`
  color: #999;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: auto;
  flex-wrap: wrap;
`;

const ActionButton = styled.button<{ $variant: 'publish' | 'delete' | 'preview' | 'image' }>`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;

  ${p => p.$variant === 'publish' && `
    background: #4caf50; color: white;
    &:hover { background: #43a047; }
  `}
  ${p => p.$variant === 'delete' && `
    background: transparent; color: #f44336; border: 1px solid #f44336;
    &:hover { background: #f44336; color: white; }
  `}
  ${p => p.$variant === 'preview' && `
    background: #5E42BC; color: white;
    &:hover { background: #2A7DE1; }
  `}
  ${p => p.$variant === 'image' && `
    background: #ff9800; color: white;
    &:hover { background: #f57c00; }
  `}

  &:disabled { opacity: 0.5; cursor: not-allowed; }
`;

const SmallButton = styled.button`
  padding: 0.3rem 0.6rem;
  border: none;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  background: #ff9800;
  color: white;
  &:hover { background: #f57c00; }
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`;

const ImageSection = styled.div`
  background: #12121f;
  border: 1px solid #2a2a3e;
  border-radius: 8px;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ImageLabel = styled.label`
  font-size: 0.75rem;
  color: #888;
  font-weight: 500;
`;

const InstructionInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  background: #1a1a2e;
  border: 1px solid #333;
  border-radius: 4px;
  color: #e0e0e0;
  font-size: 0.85rem;
  &:focus { border-color: #ff9800; outline: none; }
  &::placeholder { color: #555; }
`;

const StatusMessage = styled.div<{ $type: 'success' | 'error' }>`
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 500;
  background: ${p => p.$type === 'success' ? '#1b3a1b' : '#3a1b1b'};
  color: ${p => p.$type === 'success' ? '#4caf50' : '#f44336'};
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: #888;
  font-size: 1.1rem;
`;

const NoImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;
  font-size: 0.9rem;
`;

const ReviewPage: React.FC<ReviewPageProps> = ({ reviewArticles: initialArticles, publishedCount: initialPublished, draftCount }) => {
  const [articles, setArticles] = React.useState(initialArticles);
  const [publishedCount, setPublishedCount] = React.useState(initialPublished);
  const [loading, setLoading] = React.useState<Record<string, boolean>>({});
  const [imageLoading, setImageLoading] = React.useState<Record<string, boolean>>({});
  const [messages, setMessages] = React.useState<Record<string, { text: string; type: 'success' | 'error' }>>({});
  const [imageInstructions, setImageInstructions] = React.useState<Record<string, string>>({});
  const [imageUrls, setImageUrls] = React.useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    initialArticles.forEach(a => {
      if (a.coverImage && !a.coverImage.includes('default')) {
        initial[a.slug] = a.coverImage;
      }
    });
    return initial;
  });

  const handlePublish = async (slug: string) => {
    setLoading(prev => ({ ...prev, [slug]: true }));
    try {
      const res = await fetch(`${API_URL}/api/publish/${slug}`, { method: 'POST' });
      if (!res.ok) throw new Error('Failed to publish');
      setArticles(prev => prev.filter(a => a.slug !== slug));
      setPublishedCount(prev => prev + 1);
      setMessages(prev => ({ ...prev, [slug]: { text: 'Published!', type: 'success' } }));
    } catch {
      setMessages(prev => ({ ...prev, [slug]: { text: 'Failed — is the review server running?', type: 'error' } }));
    }
    setLoading(prev => ({ ...prev, [slug]: false }));
  };

  const handleDelete = async (slug: string, title: string) => {
    if (!window.confirm(`Delete "${title}"?\n\nThis cannot be undone.`)) return;
    setLoading(prev => ({ ...prev, [slug]: true }));
    try {
      const res = await fetch(`${API_URL}/api/delete/${slug}`, { method: 'POST' });
      if (!res.ok) throw new Error('Failed to delete');
      setArticles(prev => prev.filter(a => a.slug !== slug));
    } catch {
      setMessages(prev => ({ ...prev, [slug]: { text: 'Failed — is the review server running?', type: 'error' } }));
    }
    setLoading(prev => ({ ...prev, [slug]: false }));
  };

  const handleRegenerateImage = async (slug: string) => {
    setImageLoading(prev => ({ ...prev, [slug]: true }));
    setMessages(prev => ({ ...prev, [`img-${slug}`]: { text: 'Generating image...', type: 'success' } }));
    try {
      const res = await fetch(`${API_URL}/api/regenerate-image/${slug}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ instructions: imageInstructions[slug] || '' }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed');
      }
      const data = await res.json();
      setImageUrls(prev => ({ ...prev, [slug]: data.coverImage }));
      setMessages(prev => ({ ...prev, [`img-${slug}`]: { text: 'Image updated!', type: 'success' } }));
      setImageInstructions(prev => ({ ...prev, [slug]: '' }));
    } catch (err) {
      setMessages(prev => ({ ...prev, [`img-${slug}`]: { text: `Image failed: ${(err as Error).message}`, type: 'error' } }));
    }
    setImageLoading(prev => ({ ...prev, [slug]: false }));
  };

  const handlePublishAll = async () => {
    if (!window.confirm(`Publish all ${articles.length} articles?`)) return;
    for (const article of articles) {
      await handlePublish(article.slug);
    }
  };

  return (
    <MainLayout>
      <Container>
        <h1 style={{ color: '#e0e0e0', marginBottom: '0.5rem' }}>Article Review</h1>

        <Banner>
          <h3>Review Dashboard</h3>
          <p>
            Preview articles, publish or delete, and regenerate cover images with custom instructions.
            Published articles appear on the live site after the next build & deploy.
          </p>
        </Banner>

        <Stats>
          <Stat $color="#ff6b35">
            <span>{articles.length}</span>
            <small>Pending Review</small>
          </Stat>
          <Stat $color="#4caf50">
            <span>{publishedCount}</span>
            <small>Published</small>
          </Stat>
          <Stat $color="#888">
            <span>{draftCount}</span>
            <small>Legacy (no status)</small>
          </Stat>
        </Stats>

        {articles.length > 1 && (
          <div style={{ marginBottom: '1.5rem' }}>
            <ActionButton $variant="publish" onClick={handlePublishAll}>
              Publish All ({articles.length})
            </ActionButton>
          </div>
        )}

        {articles.length === 0 ? (
          <EmptyState>No articles pending review.</EmptyState>
        ) : (
          <Grid>
            {articles.map(article => (
              <Card key={article.slug}>
                <CardImage>
                  {imageUrls[article.slug] ? (
                    <img
                      src={imageUrls[article.slug]}
                      alt={article.title}
                      key={imageUrls[article.slug]}
                    />
                  ) : (
                    <NoImage>No cover image</NoImage>
                  )}
                  <ImageOverlay>
                    <SmallButton
                      onClick={() => handleRegenerateImage(article.slug)}
                      disabled={imageLoading[article.slug]}
                    >
                      {imageLoading[article.slug] ? 'Generating...' : 'Regenerate'}
                    </SmallButton>
                  </ImageOverlay>
                </CardImage>

                <CardBody>
                  <CardTitle>{article.title}</CardTitle>
                  <CardMeta>
                    <span>{article.date}</span>
                    <span>{article.wordCount} words</span>
                    {article.sourceUrl && (
                      <a href={article.sourceUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#5E42BC' }}>
                        Source
                      </a>
                    )}
                  </CardMeta>
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                    {article.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
                  </div>
                  <Preview>{article.preview}</Preview>

                  <ImageSection>
                    <ImageLabel>Image instructions (optional)</ImageLabel>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <InstructionInput
                        placeholder="e.g. Use blue tones, show a robot, more abstract..."
                        value={imageInstructions[article.slug] || ''}
                        onChange={e => setImageInstructions(prev => ({ ...prev, [article.slug]: e.target.value }))}
                        onKeyDown={e => {
                          if (e.key === 'Enter' && !imageLoading[article.slug]) {
                            handleRegenerateImage(article.slug);
                          }
                        }}
                      />
                      <ActionButton
                        $variant="image"
                        onClick={() => handleRegenerateImage(article.slug)}
                        disabled={imageLoading[article.slug]}
                        style={{ whiteSpace: 'nowrap' }}
                      >
                        {imageLoading[article.slug] ? 'Generating...' : 'Generate'}
                      </ActionButton>
                    </div>
                    {messages[`img-${article.slug}`] && (
                      <StatusMessage $type={messages[`img-${article.slug}`].type}>
                        {messages[`img-${article.slug}`].text}
                      </StatusMessage>
                    )}
                  </ImageSection>

                  {messages[article.slug] && (
                    <StatusMessage $type={messages[article.slug].type}>
                      {messages[article.slug].text}
                    </StatusMessage>
                  )}

                  <ButtonRow>
                    <Link href={`/ai-insights/${article.slug}`} passHref legacyBehavior>
                      <ActionButton as="a" $variant="preview">Preview</ActionButton>
                    </Link>
                    <ActionButton
                      $variant="publish"
                      onClick={() => handlePublish(article.slug)}
                      disabled={loading[article.slug]}
                    >
                      {loading[article.slug] ? 'Publishing...' : 'Publish'}
                    </ActionButton>
                    <ActionButton
                      $variant="delete"
                      onClick={() => handleDelete(article.slug, article.title)}
                      disabled={loading[article.slug]}
                    >
                      Delete
                    </ActionButton>
                  </ButtonRow>
                </CardBody>
              </Card>
            ))}
          </Grid>
        )}
      </Container>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  if (process.env.NODE_ENV === 'production') {
    return { notFound: true };
  }

  const articlesDir = path.join(process.cwd(), 'content/articles');
  const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.mdx'));

  const reviewArticles: ReviewArticle[] = [];
  let publishedCount = 0;
  let draftCount = 0;

  for (const filename of files) {
    const content = fs.readFileSync(path.join(articlesDir, filename), 'utf-8');
    const { data, content: body } = matter(content);

    if (data.status === 'review') {
      const words = body.trim().split(/\s+/).length;
      reviewArticles.push({
        slug: filename.replace(/\.mdx$/, ''),
        title: data.title || 'Untitled',
        date: data.date || '',
        status: data.status,
        tags: data.tags || [],
        sourceUrl: data.sourceUrl,
        wordCount: words,
        preview: body.replace(/[#*_\-\[\]()>`]/g, '').trim().slice(0, 200) + '...',
        coverImage: data.coverImage || undefined,
      });
    } else if (data.status === 'published') {
      publishedCount++;
    } else {
      draftCount++;
    }
  }

  return {
    props: { reviewArticles, publishedCount, draftCount },
  };
};

export default ReviewPage;
