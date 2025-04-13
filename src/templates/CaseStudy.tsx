import React from 'react';
import styled from 'styled-components';
import { MDXProvider } from '@mdx-js/react';
import { Download } from 'react-feather';

const Container = styled.article`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.header`
  margin-bottom: 3rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: var(--dark);
  margin-bottom: 1rem;
`;

const MetaInfo = styled.div`
  color: var(--text-light);
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;

const CoverImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  margin-bottom: 2rem;
`;

const Summary = styled.div`
  background: var(--light);
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 3rem;
`;

const SummaryTitle = styled.h2`
  font-size: 1.5rem;
  color: var(--dark);
  margin-bottom: 1rem;
`;

const KeyPoints = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`;

const KeyPoint = styled.li`
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const Content = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text);

  h2 {
    font-size: 2rem;
    color: var(--dark);
    margin: 2.5rem 0 1.5rem;
  }

  h3 {
    font-size: 1.5rem;
    color: var(--dark);
    margin: 2rem 0 1rem;
  }

  p {
    margin-bottom: 1.5rem;
  }

  ul, ol {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
  }

  blockquote {
    border-left: 4px solid var(--primary);
    padding-left: 1.5rem;
    margin: 2rem 0;
    font-style: italic;
  }

  img {
    max-width: 100%;
    border-radius: 8px;
    margin: 2rem 0;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 2rem 0;
    
    th, td {
      padding: 1rem;
      border: 1px solid var(--light);
      text-align: left;
    }

    th {
      background: var(--light);
    }
  }
`;

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: var(--primary);
  color: white;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s;
  margin-bottom: 2rem;

  &:hover {
    background-color: var(--primary-dark);
  }
`;

interface CaseStudyProps {
  frontMatter: {
    title: string;
    date: string;
    author: {
      name: string;
      title: string;
    };
    company: string;
    industry: string;
    coverImage: string;
    pdfUrl: string;
    keyPoints: string[];
    summary: string;
  };
  children: React.ReactNode;
}

const CaseStudy: React.FC<CaseStudyProps> = ({ frontMatter, children }) => {
  return (
    <Container>
      <Header>
        <Title>{frontMatter.title}</Title>
        <MetaInfo>
          {frontMatter.date} | {frontMatter.company} | {frontMatter.industry}
          <br />
          By {frontMatter.author.name}, {frontMatter.author.title}
        </MetaInfo>
        {frontMatter.pdfUrl && (
          <DownloadButton href={frontMatter.pdfUrl} target="_blank" rel="noopener noreferrer">
            <Download size={20} />
            Download PDF Version
          </DownloadButton>
        )}
        {frontMatter.coverImage && (
          <CoverImage src={frontMatter.coverImage} alt={frontMatter.title} />
        )}
      </Header>

      <Summary>
        <SummaryTitle>Executive Summary</SummaryTitle>
        <p>{frontMatter.summary}</p>
        <SummaryTitle>Key Findings</SummaryTitle>
        <KeyPoints>
          {frontMatter.keyPoints.map((point, index) => (
            <KeyPoint key={index}>{point}</KeyPoint>
          ))}
        </KeyPoints>
      </Summary>

      <Content>
        <MDXProvider>{children}</MDXProvider>
      </Content>
    </Container>
  );
};

export default CaseStudy; 