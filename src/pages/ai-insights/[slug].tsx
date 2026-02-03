import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import fsSync from 'fs';
import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import styled from 'styled-components';
import MainLayout from '../../layouts/MainLayout';
import Articles from '../../templates/Articles';

interface ArticlePageProps {
  frontMatter: {
    title: string;
    date: string;
    author: {
      name: string;
      bio: string;
    };
    description: string;
    coverImage: string;
    tags: string[];
    readingTime: string;
  };
  mdxSource: any;
  relatedArticles: {
    title: string;
    slug: string;
    tag: string;
  }[];
}

const ReviewBadge = styled.div`
  position: fixed;
  top: 80px;
  right: 20px;
  background: #ff6b35;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.85rem;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(255, 107, 53, 0.4);
`;

const ArticlePage: React.FC<ArticlePageProps> = ({ frontMatter, mdxSource, relatedArticles }) => {
  return (
    <MainLayout>
      {(frontMatter as any).status === 'review' && <ReviewBadge>REVIEW</ReviewBadge>}
      <Articles
        title={frontMatter.title}
        date={frontMatter.date}
        author={frontMatter.author}
        description={frontMatter.description}
        content={mdxSource}
        coverImage={frontMatter.coverImage}
        tags={frontMatter.tags}
        readingTime={frontMatter.readingTime}
        relatedArticles={relatedArticles}
      />
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const articlesDirectory = path.join(process.cwd(), 'content/articles');
  const filenames = await fs.readdir(articlesDirectory);

  const isDev = process.env.NODE_ENV !== 'production';

  const paths = filenames
    .filter(filename => {
      if (isDev) return true;
      const filePath = path.join(articlesDirectory, filename);
      const fileContents = fsSync.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);
      return !data.status || data.status === 'published';
    })
    .map((filename) => ({
      params: {
        slug: filename.replace(/\.mdx$/, ''),
      },
    }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const articlesDirectory = path.join(process.cwd(), 'content/articles');
  const filePath = path.join(articlesDirectory, `${params?.slug}.mdx`);
  const fileContents = await fs.readFile(filePath, 'utf8');

  // Parse the MDX file
  const { data: frontMatter, content } = matter(fileContents);

  // Get related articles based on tags
  const files = await fs.readdir(articlesDirectory);
  const relatedArticles = await Promise.all(
    files
      .filter(file => file !== `${params?.slug}.mdx`) // Exclude current article
      .map(async (file) => {
        const content = await fs.readFile(path.join(articlesDirectory, file), 'utf8');
        const { data } = matter(content);
        
        // Check if there are matching tags
        const hasMatchingTag = data.tags?.some((tag: string) => frontMatter.tags.includes(tag));
        
        if (hasMatchingTag) {
          return {
            title: data.title,
            slug: file.replace(/\.mdx$/, ''),
            tag: data.tags[0], // Use the first tag
          };
        }
        return null;
      })
  );

  // Filter out null values and limit to 2 related articles
  const filteredRelatedArticles = relatedArticles
    .filter(article => article !== null)
    .slice(0, 2);

  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      mdxSource,
      relatedArticles: filteredRelatedArticles,
    }
  };
};

export default ArticlePage; 