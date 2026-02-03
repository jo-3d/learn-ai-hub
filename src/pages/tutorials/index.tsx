import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import MainLayout from '../../layouts/MainLayout';
import Head from 'next/head';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const BackLink = styled.div`
  margin: 0 0 1rem 0;
  
  a {
    display: inline-flex;
    align-items: center;
    color: #2A7DE1;
    text-decoration: none;
    font-weight: 500;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  padding-top: 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #121212;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #4A4F5C;
  font-size: 1.25rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const TutorialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const TutorialCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  display: block;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }

  h3 {
    margin: 1rem 0 0.5rem;
    font-size: 1.25rem;
    font-weight: 600;
  }

  p {
    margin: 0.5rem 0;
    font-size: 0.9rem;
    color: #666;
  }

  .level {
    display: inline-block;
    padding: 0.25rem 0.5rem;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }

  .time {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    font-size: 0.8rem;
    color: #666;
  }
`;

const TutorialImagePlaceholder = styled.div`
  height: 120px;
  background-color: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: #5E42BC;
  padding: 0;
  margin: 0;
  line-height: 1;
  
  span {
    display: inline-block;
    line-height: 1;
    margin: 0;
    padding: 0;
  }
`;

const TutorialContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const TutorialTags = styled.div`
  margin-bottom: 0.8rem;
  display: flex;
  gap: 0.5rem;
`;

const Tag = styled.span<{ $level?: string }>`
  display: inline-block;
  padding: 0.3rem 0.8rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 500;
  color: white;
  background-color: ${props => 
    props.$level === 'Beginner' ? '#00BFA6' : 
    props.$level === 'Intermediate' ? '#2A7DE1' : 
    '#5E42BC'
  };
`;

const TutorialTitle = styled.h2`
  font-size: 1.4rem;
  color: #121212;
  margin-bottom: 0.8rem;
  line-height: 1.4;
`;

const TutorialDescription = styled.p`
  color: #4A4F5C;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const TutorialLink = styled.a`
  color: #5E42BC;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: auto;
  align-self: flex-start;

  &:hover {
    text-decoration: underline;
    color: #2A7DE1;
  }
`;

const TutorialsPage = () => {
  const tutorials = [
    {
      title: "Getting Started with ChatGPT",
      description: "Learn the basics of using ChatGPT for everyday tasks and creative projects.",
      icon: "🤖",
      level: "Beginner",
      time: "15 min",
      link: "/tutorials/chatgpt-basics",
      color: "#e3f2fd"
    },
    {
      title: "Creating Your First AI Art with Midjourney",
      description: "Step-by-step guide to using Midjourney prompts to generate unique and stunning images.",
      icon: "🎨",
      level: "Beginner",
      time: "20 min",
      link: "/tutorials/midjourney-basics",
      color: "#f3e5f5"
    },
    {
      title: "Writing Effective AI Prompts",
      description: "Master the art of prompt engineering to get more accurate and useful results from AI assistants.",
      icon: "✍️",
      level: "Intermediate",
      time: "25 min",
      link: "/tutorials/prompt-engineering",
      color: "#ffe1d4"
    },
    {
      title: "Automate Simple Tasks with Zapier & AI",
      description: "Learn how to connect AI tools with other apps to automate your workflow.",
      icon: "⚡",
      level: "Intermediate",
      time: "20 min",
      link: "/tutorials/zapier-automation",
      color: "#e8f5e9"
    },
    {
      title: "Using AI for Data Analysis in Sheets/Excel",
      description: "Learn how to use AI tools to analyze data, create charts, and find insights in your spreadsheets.",
      icon: "📊",
      level: "Intermediate",
      time: "25 min",
      link: "/tutorials/ai-data-analysis",
      color: "#e0f7fa"
    },
    {
      title: "Brainstorming Ideas with AI Tools",
      description: "Use AI to generate creative ideas for projects, content, business names, and more.",
      icon: "💡",
      level: "Beginner",
      time: "15 min",
      link: "/tutorials/ai-brainstorming",
      color: "#fff3e0"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "AI Tutorials for Beginners | LearnAIHub",
    "description": "Step-by-step tutorials to help you get started with AI tools. Learn how to use ChatGPT, Midjourney, and other AI technologies effectively.",
    "provider": {
      "@type": "Organization",
      "name": "LearnAIHub",
      "url": "https://learnaihub.com"
    },
    "hasPart": tutorials.map(tutorial => ({
      "@type": "HowTo",
      "name": tutorial.title,
      "description": tutorial.description,
      "estimatedCost": "Free",
      "totalTime": `PT${tutorial.time.split(' ')[0]}M`,
      "learningResourceType": "tutorial",
      "educationalLevel": tutorial.level,
      "url": tutorial.link
    }))
  };

  return (
    <MainLayout>
      <Head>
        <title>AI Tutorials for Beginners | LearnAIHub</title>
        <meta name="description" content="Step-by-step tutorials to help you get started with AI tools. Learn how to use ChatGPT, Midjourney, and other AI technologies effectively." />
        <meta property="og:title" content="AI Tutorials for Beginners | LearnAIHub" />
        <meta property="og:description" content="Step-by-step tutorials to help you get started with AI tools. Learn how to use ChatGPT, Midjourney, and other AI technologies effectively." />
        <meta property="og:site_name" content="LearnAIHub" />
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <Container>
        <BackLink>
          <Link href="/resources" passHref legacyBehavior>
            <a>← Back to Resources & Guides</a>
          </Link>
        </BackLink>
      
        <PageHeader>
          <Title>AI Tutorials Hub</Title>
          <Description>
            Welcome to our tutorials library! Find step-by-step guides to help you learn and master popular AI tools, from basic usage to more advanced techniques.
          </Description>
        </PageHeader>

        <TutorialsGrid>
          {tutorials.map((tutorial) => (
            <TutorialCard key={tutorial.title} color={tutorial.color}>
              <TutorialImagePlaceholder color={tutorial.color}>
                {tutorial.icon}
              </TutorialImagePlaceholder>
              <TutorialContent>
                <TutorialTags>
                  <Tag $level={tutorial.level}>{tutorial.level}</Tag>
                  <Tag>{tutorial.time}</Tag>
                </TutorialTags>
                <TutorialTitle>{tutorial.title}</TutorialTitle>
                <TutorialDescription>{tutorial.description}</TutorialDescription>
                <Link href={tutorial.link} passHref legacyBehavior>
                  <TutorialLink>
                    Start Tutorial
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '4px' }}>
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </TutorialLink>
                </Link>
              </TutorialContent>
            </TutorialCard>
          ))}
        </TutorialsGrid>
      </Container>
    </MainLayout>
  );
};

export default TutorialsPage; 