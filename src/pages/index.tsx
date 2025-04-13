import React, { useState } from 'react';
import styled from 'styled-components';
import MainLayout from '../layouts/MainLayout';
import Link from 'next/link';
import ArticleCard from '../components/ArticleCard';
import SubscriptionModal from '../components/SubscriptionModal';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { GetStaticProps } from 'next';

const Hero = styled.section`
  padding: 6rem 0;
  background: var(--primary);
  color: white;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
  line-height: 1.6;
  opacity: 0.9;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledButton = styled.a<{ $primary?: boolean }>`
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
  font-size: 1.1rem;
  cursor: pointer;
  border: none;

  ${props => props.$primary ? `
    background-color: white;
    color: var(--secondary);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      background-color: var(--secondary);
      color: white;
    }
  ` : `
    background-color: white;
    color: var(--secondary);

    &:hover {
      background-color: var(--secondary);
      color: white;
    }
  `}
`;

const FeaturesSection = styled.section`
  padding: 3rem 0;
  background-color: white;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: var(--dark);
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: var(--text);
  max-width: 800px;
  margin: 0 auto 3rem;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const FeatureCard = styled.div`
  text-align: center;
  padding: 1.5rem;
`;

const FeatureIcon = styled.div`
  width: 64px;
  height: 64px;
  background-color: var(--light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-size: 1.5rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  color: var(--dark);
  margin-bottom: 0.75rem;
`;

const FeatureDescription = styled.p`
  color: var(--text);
  line-height: 1.5;
  font-size: 1rem;
`;

const ArticlesSection = styled.section`
  padding: 3rem 0;
  background-color: white;
  text-align: center;
`;

const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
`;

const MarketResearchSection = styled.section`
  padding: 4rem 0;
  background-color: var(--light);
  text-align: center;
  overflow: hidden;
`;

const MarketResearchContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
`;

const MarketResearchGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 3rem;
  padding-bottom: 1rem;
`;

const MarketResearchCard = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  background: white;
  border-radius: 16px;
  padding: 0;
  text-align: left;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
  overflow: hidden;
  min-height: 250px;

  &:hover {
    transform: translateX(10px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.12);
  }

  &:nth-child(even) {
    margin-left: 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin-left: 0 !important;
  }
`;

const MarketResearchImage = styled.div`
  width: 350px;
  flex-shrink: 0;
  position: relative;
  height: 100%;
  min-height: 250px;

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`;

const MarketResearchContent = styled.div`
  flex: 1;
  padding: 2rem;
`;

const MarketResearchTag = styled.span`
  display: inline-block;
  background: var(--primary);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const MarketResearchTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--dark);
  margin-bottom: 1rem;
  line-height: 1.4;
`;

const MarketResearchDescription = styled.p`
  color: var(--text);
  line-height: 1.6;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
`;

const MarketResearchLink = styled.a`
  color: var(--primary);
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;

  &:hover {
    text-decoration: underline;
  }
`;

interface HomePageProps {
  latestArticles: {
    tag: string;
    title: string;
    excerpt: string;
    date: string;
    slug: string;
    imageUrl: string;
    backgroundColor: string;
  }[];
}

const HomePage: React.FC<HomePageProps> = ({ latestArticles }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const marketResearch = [
    {
      title: "Job Market Trends in Healthcare AI: A Comprehensive Analysis",
      description: "Explore the current landscape of AI jobs in healthcare, including growth projections, required skills, and geographical distribution of opportunities.",
      industry: "Career Development",
      slug: "job-market-trends-healthcare-ai"
    },
    {
      title: "Transformative Impact of AI in Healthcare",
      description: "A detailed analysis of how AI is revolutionizing healthcare delivery, from improving diagnostic accuracy to streamlining operations.",
      industry: "Healthcare",
      slug: "transformative-impact-of-ai-in-healthcare"
    }
  ];

  return (
    <MainLayout>
      <Hero>
        <Container>
          <HeroContent>
            <Title>Empowering Healthcare Professionals with AI Insights</Title>
            <Subtitle>
              Discover how artificial intelligence is transforming patient care, diagnostics,
              and operations. Stay ahead with the latest AI breakthroughs, career opportunities, and real-world use cases.
            </Subtitle>
            <ButtonGroup>
              <Link href="/ai-insights" passHref legacyBehavior>
                <StyledButton $primary>AI Insights</StyledButton>
              </Link>
              <StyledButton as="button" onClick={() => setIsModalOpen(true)}>
                Join the Hub
              </StyledButton>
            </ButtonGroup>
          </HeroContent>
        </Container>
      </Hero>

      <SubscriptionModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <ArticlesSection>
        <Container>
          <SectionTitle>Latest Articles</SectionTitle>
          <SectionSubtitle>
            Stay updated with the latest insights and trends in AI for healthcare.
          </SectionSubtitle>
          <ArticlesGrid>
            {latestArticles.map((article) => (
              <ArticleCard
                key={article.slug}
                tag={article.tag}
                title={article.title}
                excerpt={article.excerpt}
                date={article.date}
                slug={article.slug}
                imageUrl={article.imageUrl}
                backgroundColor={article.backgroundColor}
              />
            ))}
          </ArticlesGrid>
        </Container>
      </ArticlesSection>

      <MarketResearchSection>
        <MarketResearchContainer>
          <SectionTitle>Market Research</SectionTitle>
          <SectionSubtitle>
            In-depth analysis and insights into the healthcare AI landscape, including market trends, job opportunities, and industry developments.
          </SectionSubtitle>
          <MarketResearchGrid>
            {marketResearch.map((research) => {
              let imagePath = '';
              if (research.slug === 'job-market-trends-healthcare-ai') {
                imagePath = '/images/articles/healthcare-ai-job-market-trends-professional-meeting.png';
              } else if (research.slug === 'transformative-impact-of-ai-in-healthcare') {
                imagePath = '/images/articles/ai-in-healthcare-technology-impact-on-medical-operations.png';
              }
              else {
                 imagePath = '/images/articles/default-case-study.png';
              }

              return (
                <Link href={`/case-studies/${research.slug}`} key={research.slug} passHref legacyBehavior>
                  <MarketResearchCard>
                    <MarketResearchImage>
                      <Image
                        src={imagePath}
                        alt={research.title}
                        fill
                        style={{ objectFit: 'contain' }}
                      />
                    </MarketResearchImage>
                    <MarketResearchContent>
                      <MarketResearchTag>{research.industry}</MarketResearchTag>
                      <MarketResearchTitle>{research.title}</MarketResearchTitle>
                      <MarketResearchDescription>{research.description}</MarketResearchDescription>
                      <MarketResearchLink>
                        Read Full Report
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </MarketResearchLink>
                    </MarketResearchContent>
                  </MarketResearchCard>
                </Link>
              );
            })}
          </MarketResearchGrid>
        </MarketResearchContainer>
      </MarketResearchSection>

      <FeaturesSection>
        <Container>
          <SectionTitle>Why HealthTech AI Hub?</SectionTitle>
          <SectionSubtitle>
            Your trusted source for navigating the intersection of healthcare innovation and
            intelligent systems.
          </SectionSubtitle>
          <FeatureGrid>
            <Link href="/ai-insights" passHref legacyBehavior>
              <FeatureCard>
                <FeatureIcon>📊</FeatureIcon>
                <FeatureTitle>AI Insights</FeatureTitle>
                <FeatureDescription>
                  Track the latest AI tools, research, and implementations reshaping healthcare—from predictive
                  analytics to clinical decision support.
                </FeatureDescription>
              </FeatureCard>
            </Link>
            <Link href="/toolkits-guides" passHref legacyBehavior>
              <FeatureCard>
                <FeatureIcon>🛠️</FeatureIcon>
                <FeatureTitle>Toolkits & Guides</FeatureTitle>
                <FeatureDescription>
                  Access comprehensive toolkits and guides for implementing AI solutions in healthcare
                  settings effectively and responsibly.
                </FeatureDescription>
              </FeatureCard>
            </Link>
            <Link href="/career-paths" passHref legacyBehavior>
              <FeatureCard>
                <FeatureIcon>🚀</FeatureIcon>
                <FeatureTitle>Career Paths</FeatureTitle>
                <FeatureDescription>
                  Explore career opportunities and growth paths at the intersection of AI
                  and healthcare technology.
                </FeatureDescription>
              </FeatureCard>
            </Link>
          </FeatureGrid>
        </Container>
      </FeaturesSection>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const articlesDirectory = path.join(process.cwd(), 'src/content/articles');

  const baseArticlesInfo = [
    {
      tag: "EHR Systems",
      excerpt: "As healthcare IT evolves with autonomous AI agents, understanding the transformation of roles, challenges, and opportunities becomes crucial for professionals in the field...",
      slug: "ehr-agentic-ai-impact",
      backgroundColor: "#d4e6ff"
    },
    {
      tag: "AI Technology",
      excerpt: "Discover how AI nurses are reshaping healthcare delivery, from 24/7 patient support to automated monitoring systems, and what this means for the future of nursing...",
      slug: "ai-nurses-healthcare-transformation",
      backgroundColor: "#e1d4ff"
    },
    {
      tag: "AI Technology",
      excerpt: "From Hippocratic AI's multilingual assistants to DeepMind's medical imaging breakthroughs, discover the innovative companies revolutionizing healthcare through artificial intelligence...",
      slug: "healthcare-ai-companies-2025",
      backgroundColor: "#d4ffec"
    }
  ];

  const latestArticles = baseArticlesInfo.map(baseInfo => {
    const filePath = path.join(articlesDirectory, `${baseInfo.slug}.mdx`);
    let articleDate = "Date not found";
    let articleTitle = "Title not found";
    let articleImageUrl = "/images/articles/default-case-study.png";

    try {
      if (fs.existsSync(filePath)) {
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContents);

        if (data.date) {
          articleDate = new Date(data.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'UTC'
          });
        }
        if (data.title) {
          articleTitle = data.title;
        }
        if (data.coverImage) {
          articleImageUrl = data.coverImage;
        }
      }
    } catch (error) {
      console.error(`Error reading or parsing data for ${baseInfo.slug}:`, error);
    }

    return {
      ...baseInfo,
      title: articleTitle,
      date: articleDate,
      imageUrl: articleImageUrl
    };
  });

  return {
    props: {
      latestArticles,
    },
  };
};

export default HomePage; 