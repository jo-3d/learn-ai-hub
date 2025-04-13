import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

interface SidebarProps {
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
  currentTag?: string;
}

const SidebarContainer = styled.aside`
  width: 300px;
  min-width: 300px;
  position: sticky;
  top: 80px;
  padding: 2rem;
  background-color: var(--light);
  border-radius: 12px;
  height: fit-content;

  @media (max-width: 1024px) {
    width: 100%;
    position: static;
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.4rem;
  color: var(--dark);
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--primary);

  &:not(:first-child) {
    margin-top: 2rem;
  }
`;

const RelatedCard = styled.div`
  margin-bottom: 1.5rem;
  padding: 1.2rem;
  background-color: white;
  border-radius: 8px;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const Tag = styled.span`
  display: inline-block;
  font-size: 0.8rem;
  color: var(--primary);
  background-color: rgba(94, 66, 188, 0.1);
  padding: 0.2rem 0.8rem;
  border-radius: 50px;
  margin-bottom: 0.8rem;
`;

const CardTitle = styled.h4`
  font-size: 1.1rem;
  color: var(--dark);
  margin: 0;
  line-height: 1.4;
  
  a {
    color: inherit;
    text-decoration: none;
    
    &:hover {
      color: var(--primary);
    }
  }
`;

const NoItemsMessage = styled.p`
  color: var(--text);
  font-style: italic;
  text-align: center;
  margin: 2rem 0;
`;

const Sidebar: React.FC<SidebarProps> = ({
  relatedArticles = [],
  relatedCaseStudies = [],
}) => {
  return (
    <SidebarContainer>
      {relatedArticles.length > 0 && (
        <>
          <SectionTitle>Related Articles</SectionTitle>
          {relatedArticles.map((article) => (
            <RelatedCard key={article.slug}>
              <Tag>{article.tag}</Tag>
              <CardTitle>
                <Link href={`/ai-insights/${article.slug}`}>
                  {article.title}
                </Link>
              </CardTitle>
            </RelatedCard>
          ))}
        </>
      )}

      {relatedCaseStudies.length > 0 && (
        <>
          <SectionTitle>Market Research</SectionTitle>
          {relatedCaseStudies.map((caseStudy) => (
            <RelatedCard key={caseStudy.slug}>
              <Tag>{caseStudy.industry}</Tag>
              <CardTitle>
                <Link href={`/case-studies/${caseStudy.slug}`}>
                  {caseStudy.title}
                </Link>
              </CardTitle>
            </RelatedCard>
          ))}
        </>
      )}

      {relatedArticles.length === 0 && relatedCaseStudies.length === 0 && (
        <NoItemsMessage>No related content found</NoItemsMessage>
      )}
    </SidebarContainer>
  );
};

export default Sidebar; 