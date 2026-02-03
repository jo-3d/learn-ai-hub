import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import MainLayout from '../../layouts/MainLayout';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const BackLink = styled.div`
  margin: 1rem 0;
  
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

const HeroSection = styled.section`
  background: var(--light);
  padding: 4rem 0;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: var(--dark);
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1.25rem;
  color: var(--text);
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 2rem;
  line-height: 1.6;
`;

const ResourcesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  margin: 3rem 0;
`;

const ResourceCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ResourceHeader = styled.div`
  background: #2A7DE1;
  padding: 1.5rem;
  color: white;
  text-align: center;
`;

const ResourceTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const ResourceDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;

const ResourceContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ResourceFeatures = styled.ul`
  margin: 1rem 0;
  padding-left: 1.5rem;
  flex-grow: 1;
  
  li {
    margin-bottom: 0.75rem;
    position: relative;
    padding-left: 0.5rem;
    color: #4A4F5C;

    &::before {
      content: '✓';
      color: #5E42BC;
      position: absolute;
      left: -1rem;
      font-weight: bold;
    }
  }
`;

const ResourceButton = styled.a`
  display: inline-block;
  margin-top: auto;
  padding: 0.75rem 1.5rem;
  background: #5E42BC;
  color: white;
  text-align: center;
  text-decoration: none;
  border-radius: 30px;
  font-weight: 500;
  transition: all 0.3s;
  
  &:hover {
    background: #2A7DE1;
    transform: translateY(-2px);
  }
`;

const AIToolsPage = () => {
  return (
    <MainLayout>
      <Container>
        <BackLink>
          <Link href="/resources" passHref legacyBehavior>
            <a>← Back to Resources & Guides</a>
          </Link>
        </BackLink>
      </Container>
      <HeroSection>
        <Container>
          <Title>Discover AI Tools</Title>
          <Description>
            Explore a curated library of AI tools designed to help you with writing, images, productivity, coding, and more. 
            Find the right tools to boost your creativity and efficiency.
          </Description>
        </Container>
      </HeroSection>

      <Container>
        <ResourcesGrid>
          <ResourceCard>
            <ResourceHeader>
              <ResourceTitle>🧠 Language Models</ResourceTitle>
            </ResourceHeader>
            <ResourceContent>
              <ResourceDescription>
                Compare leading AI language models (LLMs) including established platforms and newer contenders.
              </ResourceDescription>
              <ResourceFeatures>
                <li>Compare GPT-4o, Claude, and Gemini</li>
                <li>Discover emerging models like Grok and Llama</li>
                <li>Evaluate features and capabilities</li>
                <li>Find the right model for your needs</li>
              </ResourceFeatures>
              <Link href="/tools/ai-llm-comparison" passHref legacyBehavior>
                <ResourceButton>Compare Language Models</ResourceButton>
              </Link>
            </ResourceContent>
          </ResourceCard>

          <ResourceCard>
            <ResourceHeader>
              <ResourceTitle>📝 Writing Assistants</ResourceTitle>
            </ResourceHeader>
            <ResourceContent>
              <ResourceDescription>
                Tools to help you brainstorm, draft, edit, and refine your writing for any purpose.
              </ResourceDescription>
              <ResourceFeatures>
                <li>Generate blog posts & articles</li>
                <li>Improve emails & reports</li>
                <li>Rewrite content in different tones</li>
                <li>Check grammar & style</li>
              </ResourceFeatures>
              <Link href="/tools/ai-writing" passHref legacyBehavior>
                <ResourceButton>Explore Writing Tools</ResourceButton>
              </Link>
            </ResourceContent>
          </ResourceCard>

          <ResourceCard>
            <ResourceHeader>
              <ResourceTitle>🎨 Image Generators</ResourceTitle>
            </ResourceHeader>
            <ResourceContent>
              <ResourceDescription>
                Create stunning visuals, illustrations, and art from simple text descriptions.
              </ResourceDescription>
              <ResourceFeatures>
                <li>Generate logos & icons</li>
                <li>Create realistic photos</li>
                <li>Design social media graphics</li>
                <li>Visualize concepts & ideas</li>
              </ResourceFeatures>
              <Link href="/tools/ai-image-generation" passHref legacyBehavior>
                <ResourceButton>Explore Image Tools</ResourceButton>
              </Link>
            </ResourceContent>
          </ResourceCard>

          <ResourceCard>
            <ResourceHeader>
              <ResourceTitle>⚙️ Productivity Boosters</ResourceTitle>
            </ResourceHeader>
            <ResourceContent>
              <ResourceDescription>
                Automate tasks, manage projects, summarize information, and streamline your workflows.
              </ResourceDescription>
              <ResourceFeatures>
                <li>Summarize long documents</li>
                <li>Automate meeting notes</li>
                <li>Organize tasks & schedules</li>
                <li>Extract data from files</li>
              </ResourceFeatures>
              <Link href="/tools/ai-productivity" passHref legacyBehavior>
                <ResourceButton>Explore Productivity Tools</ResourceButton>
              </Link>
            </ResourceContent>
          </ResourceCard>

          <ResourceCard>
            <ResourceHeader>
              <ResourceTitle>💻 Code Assistants</ResourceTitle>
            </ResourceHeader>
            <ResourceContent>
              <ResourceDescription>
                Tools to help developers write, debug, explain, and optimize code faster.
              </ResourceDescription>
              <ResourceFeatures>
                <li>Generate code snippets</li>
                <li>Explain complex code</li>
                <li>Find and fix bugs</li>
                <li>Translate code between languages</li>
              </ResourceFeatures>
              <Link href="/tools/ai-code-assistants" passHref legacyBehavior>
                <ResourceButton>Explore Coding Tools</ResourceButton>
              </Link>
            </ResourceContent>
          </ResourceCard>

          {/* Add Video Generator Card */}
          <ResourceCard>
            <ResourceHeader>
              <ResourceTitle>🎬 Video & Audio</ResourceTitle>
            </ResourceHeader>
            <ResourceContent>
              <ResourceDescription>
                Create videos from text prompts and generate lifelike audio content. Animate images, create voiceovers, and bring ideas to life.
              </ResourceDescription>
              <ResourceFeatures>
                <li>Generate video from text</li>
                <li>Create AI voiceovers & music</li>
                <li>Animate static images</li>
                <li>Visualize stories & concepts</li>
              </ResourceFeatures>
              <Link href="/tools/ai-video-generation" passHref legacyBehavior>
                <ResourceButton>Explore Video & Audio Tools</ResourceButton>
              </Link>
            </ResourceContent>
          </ResourceCard>

        </ResourcesGrid>

        <div style={{ paddingBottom: '4rem' }}></div>
      </Container>
    </MainLayout>
  );
};

export default AIToolsPage; 