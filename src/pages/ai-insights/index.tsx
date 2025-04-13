import React from 'react';
import styled from 'styled-components';
import MainLayout from '../../layouts/MainLayout';
import ArticleCard from '../../components/ArticleCard';
import Image from 'next/image';
import Link from 'next/link';
import fs from 'fs'; // Import Node.js fs module
import path from 'path'; // Import Node.js path module
import matter from 'gray-matter'; // Import gray-matter
import { GetStaticProps } from 'next'; // Import GetStaticProps type

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
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

const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FilterSection = styled.div`
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
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

const MoreDropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const MoreButton = styled(FilterTag)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const DropdownContent = styled.div<{ $isOpen: boolean }>`
  display: ${props => props.$isOpen ? 'block' : 'none'};
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  min-width: 160px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  border-radius: 8px;
  padding: 0.5rem;
  z-index: 1;
  margin-top: 0.5rem;
`;

const DropdownItem = styled.button`
  width: 100%;
  padding: 0.5rem 1rem;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;
  color: var(--text);
  font-size: 0.9rem;
  border-radius: 4px;

  &:hover {
    background-color: var(--light);
  }
`;

const FeaturedSection = styled.div`
  margin-bottom: 4rem;
  background: var(--light);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
`;

const FeaturedContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  align-items: stretch;
  min-height: 480px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    min-height: auto;
  }
`;

const FeaturedImage = styled.div`
  position: relative;
  height: 480px;
  width: 100%;
  
  @media (max-width: 768px) {
    height: 320px;
  }
`;

const FeaturedText = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 90%;
  margin: 0 auto;
  
  h2 {
    font-size: 1.8rem;
    color: var(--dark);
    margin-bottom: 1rem;
    line-height: 1.3;
  }
  
  p {
    color: var(--text);
    margin-bottom: 1.5rem;
    line-height: 1.6;
    font-size: 1rem;
  }
`;

const FeaturedBadge = styled.span`
  display: inline-block;
  background: var(--primary);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
`;

const ReadMoreButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--primary);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s;
  width: fit-content;

  &:hover {
    background-color: var(--primary-dark);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

// --- Define Prop Types ---
interface Article {
  slug: string;
  title: string;
  date: string; // Keep as string for simplicity, formatting can happen here or in component
  excerpt: string;
  tags: string[];
  tag?: string; // First tag, used by ArticleCard? - Now explicitly optional
  imageUrl?: string; // Add imageUrl, make it optional
  backgroundColor?: string; // Optional, might remove if not consistently used
}

interface ArticlesPageProps {
  articles: Article[];
}

// --- Page Component ---
const ArticlesPage: React.FC<ArticlesPageProps> = ({ articles }) => { // Accept articles as prop
  const [activeTag, setActiveTag] = React.useState<string>('All');
  const [isMoreOpen, setIsMoreOpen] = React.useState(false);

  // Get unique primary tags and additional tags from fetched articles
  const allTags = Array.from(new Set(articles.flatMap(article => article.tags))).sort();
  const primaryTags = ['All', ...allTags.slice(0, 4)]; // Example: Take first 4 unique tags + All
  const additionalTags = allTags.slice(4);

  const filteredArticles = activeTag === 'All' 
    ? articles 
    : articles.filter(article => article.tags.includes(activeTag));

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMoreOpen && !(event.target as Element).closest('.more-dropdown')) {
        setIsMoreOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMoreOpen]);

  return (
    <MainLayout>
      <Container>
        <PageTitle>AI Insights</PageTitle>
        <PageDescription>
          Explore our collection of expert insights, case studies, and practical guides on healthcare AI technology.
          From implementation strategies to emerging trends, find the knowledge you need to stay ahead in healthcare tech.
        </PageDescription>

        <FeaturedSection>
          <FeaturedContent>
            <FeaturedImage>
              <Image
                src="/images/articles/ai-in-healthcare-technology-impact-on-medical-operations.png"
                alt="The Impact of AI in Healthcare"
                fill
                style={{ objectFit: 'contain' }}
              />
            </FeaturedImage>
            <FeaturedText>
              <FeaturedBadge>Featured Case Study</FeaturedBadge>
              <h2>The Transformative Impact of AI in Healthcare</h2>
              <p>
                Discover how artificial intelligence is revolutionizing healthcare delivery, from improving diagnostic accuracy 
                to streamlining operations. This comprehensive case study analyzes real-world implementations and their measurable impacts 
                on patient care and operational efficiency.
              </p>
              <ReadMoreButton href="/case-studies/transformative-impact-of-ai-in-healthcare">
                Read Case Study
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </ReadMoreButton>
            </FeaturedText>
          </FeaturedContent>
        </FeaturedSection>
        
        <FilterSection>
          {primaryTags.map((tag) => (
            <FilterTag 
              key={tag}
              $active={activeTag === tag}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </FilterTag>
          ))}
          {additionalTags.length > 0 && (
            <MoreDropdown className="more-dropdown">
              <MoreButton 
                as="button"
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                $active={!primaryTags.includes(activeTag)}
              >
                More {isMoreOpen ? '▼' : '▶'}
              </MoreButton>
              <DropdownContent $isOpen={isMoreOpen}>
                {additionalTags.map((tag) => (
                  <DropdownItem
                    key={tag}
                    onClick={() => {
                      setActiveTag(tag);
                      setIsMoreOpen(false);
                    }}
                  >
                    {tag}
                  </DropdownItem>
                ))}
              </DropdownContent>
            </MoreDropdown>
          )}
        </FilterSection>

        <ArticlesGrid>
          {filteredArticles.map((article) => (
            <ArticleCard
              key={article.slug}
              slug={article.slug}
              title={article.title}
              excerpt={article.excerpt}
              date={article.date}
              tag={article.tag ?? 'General'} // Provide default value for tag
              imageUrl={article.imageUrl} // Pass the imageUrl prop
            />
          ))}
        </ArticlesGrid>
      </Container>
    </MainLayout>
  );
};

// --- Data Fetching (getStaticProps) ---
export const getStaticProps: GetStaticProps<ArticlesPageProps> = async () => {
  const articlesDirectory = path.join(process.cwd(), 'src/content/articles');
  const filenames = fs.readdirSync(articlesDirectory);

  // Step 1: Fetch raw data including the original date string
  const rawArticles = filenames
    .filter(filename => filename.endsWith('.mdx'))
    .map((filename) => {
      const filePath = path.join(articlesDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);
      return {
        slug: filename.replace(/\.mdx$/, ''),
        rawData: data, // Keep the raw frontmatter data
      };
    });

  // Step 2: Sort based on the original date string from rawData
  rawArticles.sort((a, b) => {
    const dateA = new Date(a.rawData.date);
    const dateB = new Date(b.rawData.date);
    if (isNaN(dateA.getTime())) return 1; // Put invalid dates last
    if (isNaN(dateB.getTime())) return -1;
    return dateB.getTime() - dateA.getTime(); // Newest first
  });

  // Step 3: Format the data for the page props *after* sorting
  const articles: Article[] = rawArticles.map(({ slug, rawData }) => {
    const formattedDate = new Date(rawData.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC'
    });
    return {
      slug,
      title: rawData.title ?? 'Untitled Article',
      date: formattedDate, // Now use the correctly formatted date
      excerpt: rawData.description ?? 'No description available.',
      tags: rawData.tags || [],
      tag: rawData.tags?.[0] || 'General',
      imageUrl: rawData.coverImage || undefined,
    };
  });

  return {
    props: {
      articles,
    },
  };
};

export default ArticlesPage; 