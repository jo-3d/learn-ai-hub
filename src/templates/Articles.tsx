import React from 'react';
import styled from 'styled-components';
import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';
import Sidebar from '../components/Sidebar';

interface Author {
  name: string;
  bio: string;
}

interface ArticlesProps {
  title: string;
  date: string;
  author: Author;
  description: string;
  content: any;
  coverImage?: string;
  tags: string[];
  readingTime: string;
  relatedArticles?: {
    title: string;
    slug: string;
    tag: string;
  }[];
  relatedCaseStudies?: {
    title: string;
    slug: string;
    industry: string;
  }[];
}

const ArticleLayout = styled.div`
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
  gap: 4rem;
  padding: 2rem 2rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 1rem;
    gap: 2rem;
  }
`;

const MainContent = styled.article`
  flex: 1;
  min-width: 0;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
`;

const Header = styled.header`
  margin-bottom: 3rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: var(--dark);
  margin-bottom: 1.5rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: var(--text);
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
`;

const TagList = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 2rem;
`;

const Tag = styled.span`
  background-color: rgba(94, 66, 188, 0.1);
  color: var(--secondary);
  padding: 0.2rem 0.8rem;
  border-radius: 50px;
  font-size: 0.9rem;
`;

const CoverImage = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  margin-bottom: 2rem;
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 250px;
  }
`;

const Content = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text);
  margin: 0 auto;

  h2 {
    font-size: 2rem;
    color: var(--dark);
    margin: 3rem 0 1.5rem;
    scroll-margin-top: 100px;
  }

  h3 {
    font-size: 1.6rem;
    color: var(--dark);
    margin: 2rem 0 1rem;
    scroll-margin-top: 100px;
  }

  p {
    margin-bottom: 1.5rem;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    margin: 2rem auto;
    display: block;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  code {
    background-color: #f4f4f4;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-size: 0.9em;
  }

  pre {
    background-color: #f4f4f4;
    padding: 1rem;
    border-radius: 8px;
    overflow-x: auto;
    margin: 1.5rem 0;
  }

  blockquote {
    border-left: 4px solid var(--primary);
    padding-left: 1rem;
    margin: 1.5rem 0;
    font-style: italic;
  }

  ul, ol {
    margin: 1.5rem 0;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;

const Articles: React.FC<ArticlesProps> = ({
  title,
  date,
  author,
  description,
  content,
  coverImage,
  tags,
  readingTime,
  relatedArticles,
  relatedCaseStudies
}) => {
  return (
    <ArticleLayout>
      <MainContent>
        <Header>
          <Title>{title}</Title>
          <Meta>
            <AuthorInfo>
              <span>{author.name}</span>
            </AuthorInfo>
            <span>•</span>
            <time>{date}</time>
            <span>•</span>
            <span>{readingTime}</span>
          </Meta>
          <TagList>
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagList>
          {coverImage && (
            <CoverImage>
              <Image
                src={coverImage}
                alt={title}
                layout="fill"
                objectFit="cover"
                priority
              />
            </CoverImage>
          )}
        </Header>
        <Content>
          <MDXRemote {...content} />
        </Content>
      </MainContent>
      <Sidebar 
        relatedArticles={relatedArticles}
        relatedCaseStudies={relatedCaseStudies}
        currentTag={tags[0]}
      />
    </ArticleLayout>
  );
};

export default Articles; 