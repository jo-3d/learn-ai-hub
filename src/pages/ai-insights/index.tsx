import React from 'react';
import styled from 'styled-components';
import MainLayout from '../../layouts/MainLayout';
import ArticleCard from '../../components/ArticleCard';
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
  font-size: 3rem;
  color: #121212;
  margin-bottom: 1rem;
  text-align: center;
`;

const PageDescription = styled.p`
  color: #4A4F5C;
  font-size: 1.25rem;
  margin-bottom: 3rem;
  max-width: 800px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
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
  status?: string;
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
  const primaryTags = ['All', 'Beginner', 'Tools', 'Guides', 'Prompting']; // Example new primary tags
  const otherTags = allTags.filter(tag => !primaryTags.includes(tag));
  const displayTags = primaryTags.filter(tag => tag === 'All' || allTags.includes(tag)); // Only show existing tags + All
  const additionalTags = otherTags.slice(0, 5); // Limit additional tags shown in dropdown

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
          Stay updated with the latest articles, news, and perspectives on the evolving world of AI tools and technology.
        </PageDescription>

        <FilterSection>
          {displayTags.map((tag) => (
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
                $active={!displayTags.includes(activeTag)}
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
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <div key={article.slug} style={{ position: 'relative' }}>
                {article.status === 'review' && (
                  <span style={{
                    position: 'absolute', top: 10, right: 10, zIndex: 10,
                    background: '#ff6b35', color: 'white', padding: '0.25rem 0.6rem',
                    borderRadius: '6px', fontSize: '0.75rem', fontWeight: 700,
                  }}>REVIEW</span>
                )}
                <ArticleCard
                  slug={article.slug}
                  title={article.title}
                  excerpt={article.excerpt}
                  date={article.date}
                  tag={article.tag ?? 'General'}
                  backgroundColor={article.backgroundColor}
                />
              </div>
            ))
          ) : (
            <p>No articles found for the selected tag.</p>
          )}
        </ArticlesGrid>
      </Container>
    </MainLayout>
  );
};

// --- Data Fetching (getStaticProps) ---
export const getStaticProps: GetStaticProps<ArticlesPageProps> = async () => {
  const articlesDirectory = path.join(process.cwd(), 'content/articles');
  const filenames = fs.readdirSync(articlesDirectory);

  // Step 1: Fetch raw data including the original date string
  const rawArticles = filenames
    .filter(filename => filename.endsWith('.mdx'))
    .filter(filename => {
      const filePath = path.join(articlesDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);
      // In dev mode, show all articles; in production, only published or no-status
      if (process.env.NODE_ENV !== 'production') return true;
      return !data.status || data.status === 'published';
    })
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
    
    // Define background colors to cycle through
    const backgroundColors = ["#d4e6ff", "#e1d4ff", "#d4ffec"];
    const colorIndex = Math.floor(Math.random() * backgroundColors.length);
    
    return {
      slug,
      title: rawData.title ?? 'Untitled Article',
      date: formattedDate, // Now use the correctly formatted date
      excerpt: rawData.description ?? 'No description available.',
      tags: rawData.tags || [],
      tag: rawData.tags?.[0] || 'General',
      imageUrl: rawData.coverImage || undefined,
      backgroundColor: backgroundColors[colorIndex],
      status: rawData.status || null,
    };
  });

  return {
    props: {
      articles,
    },
  };
};

export default ArticlesPage; 