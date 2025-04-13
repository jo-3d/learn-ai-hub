import React from 'react';
import styled from 'styled-components';
import MainLayout from '../../layouts/MainLayout';
import Sidebar from '../../components/Sidebar';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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

const MainContent = styled.main`
  flex: 1;
  min-width: 0;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  color: var(--dark);
  margin-bottom: 1rem;
`;

const PageDescription = styled.p`
  color: var(--text);
  font-size: 1.1rem;
  margin-bottom: 3rem;
  max-width: 800px;
`;

const CaseStudiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CaseStudyCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  color: var(--dark);
  margin-bottom: 0.5rem;
`;

const CardMeta = styled.div`
  color: var(--text-light);
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const CardSummary = styled.p`
  color: var(--text);
  font-size: 1rem;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const FilterSection = styled.div`
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const FilterTag = styled.button<{ $active?: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 50px;
  border: none;
  background-color: ${props => props.$active ? 'var(--primary)' : 'var(--light)'};
  color: ${props => props.$active ? 'white' : 'var(--text)'};
  cursor: pointer;
  transition: all 0.3s;
  font-size: 0.9rem;

  &:hover {
    background-color: ${props => props.$active ? 'var(--primary)' : 'rgba(94, 66, 188, 0.1)'};
  }
`;

interface CaseStudiesPageProps {
  caseStudies: {
    title: string;
    company: string;
    industry: string;
    date: string;
    summary: string;
    coverImage: string;
    slug: string;
  }[];
  articles: {
    title: string;
    slug: string;
    tag: string;
  }[];
}

const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ caseStudies, articles }) => {
  const [activeIndustry, setActiveIndustry] = React.useState<string>('All');
  
  const industries = ['All', ...Array.from(new Set(caseStudies.map(study => study.industry)))];
  
  const filteredStudies = activeIndustry === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === activeIndustry);

  return (
    <MainLayout>
      <Container>
        <MainContent>
          <PageTitle>Case Studies</PageTitle>
          <PageDescription>
            Explore real-world implementations of healthcare AI technology. 
            Learn from successful deployments and get insights into best practices, challenges, and outcomes.
          </PageDescription>
          
          <FilterSection>
            {industries.map((industry) => (
              <FilterTag 
                key={industry}
                $active={activeIndustry === industry}
                onClick={() => setActiveIndustry(industry)}
              >
                {industry}
              </FilterTag>
            ))}
          </FilterSection>

          <CaseStudiesGrid>
            {filteredStudies.map((study) => (
              <Link 
                key={study.slug} 
                href={`/case-studies/${study.slug}`} 
                passHref 
                legacyBehavior
              >
                <CaseStudyCard>
                  <CardImage src={study.coverImage} alt={study.title} />
                  <CardContent>
                    <CardTitle>{study.title}</CardTitle>
                    <CardMeta>
                      {study.company} | {study.industry} | {study.date}
                    </CardMeta>
                    <CardSummary>{study.summary}</CardSummary>
                  </CardContent>
                </CaseStudyCard>
              </Link>
            ))}
          </CaseStudiesGrid>
        </MainContent>
        
        <Sidebar 
          relatedArticles={articles}
          currentTag={activeIndustry !== 'All' ? activeIndustry : undefined}
        />
      </Container>
    </MainLayout>
  );
};

export async function getStaticProps() {
  // Get case studies
  const caseStudiesDirectory = path.join(process.cwd(), 'src/content/case-studies');
  const caseStudyFiles = fs.readdirSync(caseStudiesDirectory);

  const caseStudies = caseStudyFiles.map(filename => {
    const fileContent = fs.readFileSync(
      path.join(caseStudiesDirectory, filename),
      'utf-8'
    );
    const { data } = matter(fileContent);
    return {
      title: data.title,
      company: data.company,
      industry: data.industry,
      date: data.date,
      summary: data.summary,
      coverImage: data.coverImage,
      slug: filename.replace('.mdx', '')
    };
  });

  // Get articles for sidebar
  const articlesDirectory = path.join(process.cwd(), 'src/content/articles');
  const articleFiles = fs.readdirSync(articlesDirectory);
  
  const articles = articleFiles
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
    .slice(0, 3);

  return {
    props: {
      caseStudies,
      articles
    }
  };
}

export default CaseStudiesPage; 