import { GetStaticPaths, GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import styled from 'styled-components';
import MainLayout from '../../layouts/MainLayout';
import Image from 'next/image';
import Sidebar from '../../components/Sidebar';
import ChallengesTable from '../../components/ChallengesTable';
import JobTitlesTable from '../../components/JobTitlesTable';

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  gap: 4rem;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 1rem;
    gap: 2rem;
  }
`;

const MainContent = styled.div`
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
  font-size: 2.5rem;
  color: var(--dark);
  margin-bottom: 1rem;
`;

const Meta = styled.div`
  color: var(--text-light);
  margin-bottom: 2rem;
`;

const DownloadButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--primary);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: none;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s;
  margin-bottom: 2rem;
  cursor: pointer;

  &:hover {
    background-color: var(--primary-dark);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const CoverImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  margin-bottom: 3rem;
  border-radius: 12px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Content = styled.div`
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text);
  margin: 0 auto;
  
  h2 {
    font-size: 2rem;
    color: var(--dark);
    margin: 2rem 0 1rem;
    scroll-margin-top: 100px;
  }

  h3 {
    font-size: 1.6rem;
    color: var(--dark);
    margin: 1.5rem 0 1rem;
    scroll-margin-top: 100px;
  }

  p {
    margin-bottom: 1rem;
  }

  ul, ol {
    margin: 1rem 0;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;
  }

  th, td {
    padding: 0.75rem;
    border: 1px solid var(--border);
    text-align: left;
  }

  th {
    background-color: var(--light);
  }
`;

const KeyPoints = styled.div`
  background-color: var(--light);
  padding: 1.5rem;
  border-radius: 8px;
  margin: 2rem 0;

  h4 {
    color: var(--dark);
    margin-bottom: 1rem;
  }

  ul {
    margin: 0;
    padding-left: 1.5rem;
  }
`;

const SourcesSection = styled.div`
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border);

  h2 {
    font-size: 1.8rem;
    color: var(--dark);
    margin-bottom: 1.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 1rem;
  }

  a {
    color: var(--primary);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

interface CaseStudyPageProps {
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
    pdfUrl?: string;
    summary: string;
    keyPoints: string[];
    sources: {
      title: string;
      url: string;
    }[];
  };
  mdxSource: any;
  relatedArticles: {
    title: string;
    slug: string;
    tag: string;
  }[];
  relatedCaseStudies: {
    title: string;
    slug: string;
    industry: string;
  }[];
}

const CaseStudyPage = ({ frontMatter, mdxSource, relatedArticles, relatedCaseStudies }: CaseStudyPageProps) => {
  const components = {
    ChallengesTable,
    JobTitlesTable
  };

  const handleDownload = async () => {
    try {
      if (!frontMatter.pdfUrl) {
        alert('Sorry, no PDF is available for this case study.');
        return;
      }
      
      const response = await fetch(frontMatter.pdfUrl);
      if (!response.ok) throw new Error('PDF not found');
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${frontMatter.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading PDF:', error);
      alert('Sorry, the PDF is not available at the moment. Please try again later.');
    }
  };

  return (
    <MainLayout>
      <Container>
        <MainContent>
          <Header>
            <Title>{frontMatter.title}</Title>
            <Meta>
              {frontMatter.date}
            </Meta>
            {frontMatter.pdfUrl && (
              <DownloadButton onClick={handleDownload}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF
              </DownloadButton>
            )}
          </Header>

          <CoverImageWrapper>
            <Image
              src={frontMatter.coverImage}
              alt={frontMatter.title}
              fill
              style={{ objectFit: 'contain' }}
            />
          </CoverImageWrapper>

          <Content>
            <KeyPoints>
              <h4>Key Points</h4>
              <ul>
                {frontMatter.keyPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </KeyPoints>

            <MDXRemote {...mdxSource} components={components} />

            {frontMatter.sources && frontMatter.sources.length > 0 && (
              <SourcesSection>
                <h2>Sources</h2>
                <ul>
                  {frontMatter.sources.map((source, index) => (
                    <li key={index}>
                      <a href={source.url} target="_blank" rel="noopener noreferrer">
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </SourcesSection>
            )}
          </Content>
        </MainContent>
        <Sidebar relatedArticles={relatedArticles} relatedCaseStudies={relatedCaseStudies} />
      </Container>
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join(process.cwd(), 'src/content/case-studies'));
  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.mdx', '')
    }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join(process.cwd(), 'src/content/case-studies', `${params?.slug}.mdx`),
    'utf-8'
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  // Get related case studies based on industry
  const caseStudiesDirectory = path.join(process.cwd(), 'src/content/case-studies');
  const caseStudyFiles = fs.readdirSync(caseStudiesDirectory)
    .filter(file => file !== `${params?.slug}.mdx`); // Exclude current case study

  const relatedCaseStudies = caseStudyFiles
    .map(filename => {
      const fileContent = fs.readFileSync(
        path.join(caseStudiesDirectory, filename),
        'utf-8'
      );
      const { data } = matter(fileContent);
      
      // Check if industry matches
      if (data.industry === frontMatter.industry) {
        return {
          title: data.title,
          slug: filename.replace('.mdx', ''),
          industry: data.industry
        };
      }
      return null;
    })
    .filter(Boolean)
    .slice(0, 2); // Limit to 2 related case studies

  // Get related articles
  const articlesDirectory = path.join(process.cwd(), 'src/content/articles');
  const articleFiles = fs.readdirSync(articlesDirectory);
  
  const relatedArticles = articleFiles
    .map(filename => {
      const fileContent = fs.readFileSync(
        path.join(articlesDirectory, filename),
        'utf-8'
      );
      const { data } = matter(fileContent);
      return {
        title: data.title,
        slug: filename.replace('.mdx', ''),
        tag: data.tags?.[0] || 'Healthcare'
      };
    })
    .slice(0, 2); // Limit to 2 related articles

  return {
    props: {
      frontMatter,
      mdxSource,
      relatedArticles,
      relatedCaseStudies
    }
  };
};

export default CaseStudyPage; 