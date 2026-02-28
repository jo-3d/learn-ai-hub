import React, { useState } from 'react';
import styled from 'styled-components';
import MainLayout from '../layouts/MainLayout';
import Link from 'next/link';
import ArticleCard from '../components/ArticleCard';
import YouTubeVideoCard from '../components/YouTubeVideoCard';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { GetStaticProps } from 'next';
import Head from 'next/head';

const Hero = styled.section`
  padding: 5rem 0 6rem;
  background: linear-gradient(135deg, rgba(79, 195, 247, 0.15) 0%, rgba(33, 150, 243, 0.1) 50%, var(--bg-dark) 100%);
  color: var(--text-primary);
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(79, 195, 247, 0.15) 0%, transparent 70%);
    pointer-events: none;
  }
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

const Tagline = styled.span`
  display: inline-block;
  background: rgba(79, 195, 247, 0.15);
  border: 1px solid rgba(79, 195, 247, 0.3);
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  letter-spacing: 0.5px;
  color: var(--accent);
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: 0.01em;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  opacity: 0.95;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const YouTubeButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
  font-size: 1.1rem;
  cursor: pointer;
  background-color: #FF0000;
  color: white;

  &:hover {
    background-color: #CC0000;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(255, 0, 0, 0.3);
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

const SecondaryButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
  font-size: 1.1rem;
  cursor: pointer;
  background: var(--gradient);
  color: white;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--glow-cyan);
  }
`;

const NewVideosBadge = styled.span`
  display: inline-block;
  color: var(--text-secondary);
  font-size: 0.95rem;
  font-weight: 500;
`;

const Section = styled.section`
  padding: 4rem 0;
  background-color: var(--bg-dark);
  text-align: center;
`;

const DarkSection = styled(Section)`
  background-color: var(--bg-dark-alt);
  color: var(--text-primary);
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: var(--text-primary);
  margin-bottom: 1rem;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: var(--gradient);
    margin: 0.5rem auto 0;
    border-radius: 2px;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto 3rem;
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const ViewAllLink = styled.a`
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s;

  &:hover {
    color: var(--primary-light);
  }
`;

const ThemeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ThemeCard = styled.div`
  text-align: center;
  padding: 2rem 1.5rem;
  background: var(--bg-dark-alt);
  border: 1px solid var(--border-dark);
  border-radius: 12px;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-5px);
    border-color: var(--primary);
    box-shadow: var(--glow-cyan);
  }
`;

const ThemeIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const ThemeTitle = styled.h3`
  font-size: 1.1rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
`;

const ThemeDescription = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.5;
`;

const SubscribeSection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, rgba(79, 195, 247, 0.1) 0%, var(--bg-dark-alt) 50%, rgba(33, 150, 243, 0.1) 100%);
  color: var(--text-primary);
  text-align: center;
  border-top: 1px solid var(--border-dark);
  border-bottom: 1px solid var(--border-dark);
`;

const SubscribeContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const SubscribeTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const SubscribeSubtitle = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
`;

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  text-align: left;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const Benefit = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  color: var(--text-secondary);

  &::before {
    content: '✓';
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    background: rgba(79, 195, 247, 0.2);
    color: var(--accent);
    border-radius: 50%;
    font-size: 0.7rem;
    flex-shrink: 0;
  }
`;

const SubscribeForm = styled.form`
  display: flex;
  gap: 0.75rem;
  max-width: 450px;
  margin: 0 auto;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const EmailInput = styled.input`
  flex: 1;
  padding: 1rem 1.25rem;
  border: 1px solid var(--border-dark);
  border-radius: 50px;
  font-size: 1rem;
  outline: none;
  background: var(--bg-dark);
  color: var(--text-primary);

  &::placeholder {
    color: var(--text-muted);
  }

  &:focus {
    border-color: var(--primary);
  }
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background: var(--gradient);
  color: white;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--glow-cyan);
  }
`;

const SuccessMessage = styled.div`
  background: rgba(63, 185, 80, 0.1);
  border: 1px solid var(--success);
  color: var(--success);
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  animation: fadeIn 0.5s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

interface HomePageProps {
  latestArticles: {
    tag: string;
    title: string;
    excerpt: string;
    date: string;
    slug: string;
    backgroundColor: string;
  }[];
}

const HomePage: React.FC<HomePageProps> = ({ latestArticles }) => {
  const [email, setEmail] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  // Placeholder video data - update with real video IDs
  const featuredVideos = [
    {
      videoId: 'LaI9SWR1Ynw',
      title: 'I Built an AI Agent to Write My Meeting Notes: No Copilot License Needed',
      description: 'Learn how to build an AI-powered meeting notes agent without paying for a Copilot license',
      category: 'AI Agents',
      duration: ''
    },
    {
      videoId: 'dQw4w9WgXcQ', // Replace with your actual video ID
      title: 'Automate Your Workflow with Make.com',
      description: 'Step-by-step guide to building your first automation',
      category: 'Automation',
      duration: '18:45'
    },
    {
      videoId: 'dQw4w9WgXcQ', // Replace with your actual video ID
      title: 'ChatGPT Tips You Need to Know',
      description: 'Practical tips and tricks I discovered through trial and error',
      category: 'Tips & Tricks',
      duration: '10:22'
    }
  ];

  const contentThemes = [
    {
      icon: '🎬',
      title: 'Hands-on Tutorials',
      description: 'Follow along as I learn and use AI tools step by step'
    },
    {
      icon: '⚡',
      title: 'Automation Workflows',
      description: 'Practical workflows to save time with AI and automation'
    },
    {
      icon: '🔍',
      title: 'Honest Reviews',
      description: 'Real talk about what works and what doesn\'t'
    },
    {
      icon: '🎯',
      title: 'Beginner-Friendly',
      description: 'No jargon, just clear explanations for everyone'
    }
  ];

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    const scriptURL = 'https://script.google.com/macros/s/AKfycbzWpVe3CiNFVv7VWPpdOo5O8_DSJu2hDsELfLjF6q7RdHhbbGNBRNnd2jeAYptCkWqgJw/exec';

    try {
      setSubmitStatus(null);
      await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          name: 'Homepage Subscriber',
          role: 'Subscriber'
        })
      });

      setEmail('');
      setSubmitStatus('success');
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Error subscribing:', error);
      setSubmitStatus('error');
    }
  };

  return (
    <>
      <Head>
        <title>Learn AI Hub - Learning AI Tools Together</title>
        <meta name="description" content="Join me on a journey to master AI and automation tools. Hands-on tutorials, practical workflows, and honest reviews for beginners and intermediate users." />
      </Head>

      <MainLayout>
        <Hero>
          <Container>
            <HeroContent>
              <Tagline>Learning AI Tools Together</Tagline>
              <Title>Hey! I'm on a journey to master AI and automation tools</Title>
              <Subtitle>
                ...and I'm sharing everything I learn along the way. From beginner basics to practical automation workflows - let's figure this out together.
              </Subtitle>
              <ButtonGroup>
                <YouTubeButton href="https://youtube.com/@learninghubai" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/>
                    <path fill="#FF0000" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" style={{fill: 'white'}}/>
                  </svg>
                  Subscribe on YouTube
                </YouTubeButton>
                <Link href="/subscribe" passHref legacyBehavior>
                  <SecondaryButton>Join the Newsletter</SecondaryButton>
                </Link>
              </ButtonGroup>
              <NewVideosBadge>New videos every week</NewVideosBadge>
            </HeroContent>
          </Container>
        </Hero>

        <Section>
          <Container>
            <SectionTitle>Latest Videos</SectionTitle>
            <SectionSubtitle>
              Hands-on tutorials and step-by-step walkthroughs
            </SectionSubtitle>
            <VideoGrid>
              {featuredVideos.map((video, index) => (
                <YouTubeVideoCard
                  key={index}
                  videoId={video.videoId}
                  title={video.title}
                  description={video.description}
                  category={video.category}
                  duration={video.duration}
                />
              ))}
            </VideoGrid>
            <ViewAllLink href="https://youtube.com/@learninghubai" target="_blank" rel="noopener noreferrer">
              See all videos on YouTube →
            </ViewAllLink>
          </Container>
        </Section>

        <Section style={{ backgroundColor: 'var(--bg-dark-alt)' }}>
          <Container>
            <SectionTitle>What You'll Learn</SectionTitle>
            <SectionSubtitle>
              Whether you're asking "What's AI?" or looking to automate your workflow, you're in the right place
            </SectionSubtitle>
            <ThemeGrid>
              {contentThemes.map((theme, index) => (
                <ThemeCard key={index}>
                  <ThemeIcon>{theme.icon}</ThemeIcon>
                  <ThemeTitle>{theme.title}</ThemeTitle>
                  <ThemeDescription>{theme.description}</ThemeDescription>
                </ThemeCard>
              ))}
            </ThemeGrid>
          </Container>
        </Section>

        {latestArticles.length > 0 && (
          <Section>
            <Container>
              <SectionTitle>From the Blog</SectionTitle>
              <SectionSubtitle>
                Deep dives into AI tools, automation workflows, and honest reviews
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
                    backgroundColor={article.backgroundColor}
                  />
                ))}
              </ArticlesGrid>
              <Link href="/ai-insights" passHref legacyBehavior>
                <ViewAllLink as="a">Read all articles →</ViewAllLink>
              </Link>
            </Container>
          </Section>
        )}

        <SubscribeSection>
          <Container>
            <SubscribeContent>
              <SubscribeTitle>Never Miss an Update</SubscribeTitle>
              <SubscribeSubtitle>
                Join fellow learners getting weekly tips, tutorials, and tool recommendations
              </SubscribeSubtitle>
              <BenefitsList>
                <Benefit>Weekly AI tips and tutorials</Benefit>
                <Benefit>New video notifications</Benefit>
                <Benefit>Exclusive workflow guides</Benefit>
                <Benefit>Tool recommendations</Benefit>
              </BenefitsList>
              <SubscribeForm onSubmit={handleSubscribe}>
                <EmailInput
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <SubmitButton type="submit">Join Free</SubmitButton>
              </SubscribeForm>
              {submitStatus === 'success' && (
                <SuccessMessage>
                  Welcome to the learning journey! Check your inbox soon.
                </SuccessMessage>
              )}
              {submitStatus === 'error' && (
                <SuccessMessage style={{ borderColor: 'rgba(255,100,100,0.5)' }}>
                  Oops! Something went wrong. Please try again.
                </SuccessMessage>
              )}
            </SubscribeContent>
          </Container>
        </SubscribeSection>
      </MainLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const articlesDirectory = path.join(process.cwd(), 'content/articles');

  // Check if directory exists
  if (!fs.existsSync(articlesDirectory)) {
    return {
      props: {
        latestArticles: [],
      },
    };
  }

  const filenames = fs.readdirSync(articlesDirectory);

  const articles = filenames
    .filter(filename => filename.endsWith('.mdx'))
    .map(filename => {
      const filePath = path.join(articlesDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

      if (!data.date || !data.title || !data.description || !data.tags) {
        console.warn(`Article ${filename} is missing required frontmatter fields.`);
        return null;
      }

      return {
        slug: filename.replace(/\.mdx$/, ''),
        title: data.title as string,
        date: new Date(data.date),
        excerpt: data.description as string,
        tag: (data.tags as string[])[0] || 'General',
      };
    })
    .filter(article => article !== null)
    .sort((a, b) => b!.date.getTime() - a!.date.getTime());

  const latestArticlesData = articles.slice(0, 3);
  const backgroundColors = ["#d4e6ff", "#e1d4ff", "#d4ffec"];

  const latestArticles = latestArticlesData.map((article, index) => ({
    slug: article!.slug,
    title: article!.title,
    date: article!.date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC'
    }),
    excerpt: article!.excerpt,
    tag: article!.tag,
    backgroundColor: backgroundColors[index % backgroundColors.length],
  }));

  return {
    props: {
      latestArticles,
    },
  };
};

export default HomePage;
