import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import MainLayout from '../../layouts/MainLayout';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
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

const ContentSection = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: var(--dark);
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #5E42BC;
  padding-bottom: 0.5rem;
`;

const ToolsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const ToolCard = styled.div`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  }
`;

const ToolHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid #eee;
`;

const ToolTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  color: #2A7DE1;
`;

const ToolDescription = styled.p`
  color: #4A4F5C;
  font-size: 1rem;
  line-height: 1.5;
`;

const ToolContent = styled.div`
  padding: 1.5rem;
`;

const ToolFeatures = styled.ul`
  margin: 1rem 0;
  padding-left: 1rem;
  
  li {
    margin-bottom: 0.5rem;
    position: relative;
    padding-left: 0.5rem;
    
    &::before {
      content: '•';
      color: #5E42BC;
      position: absolute;
      left: -1rem;
    }
  }
`;

const ToolPricing = styled.div`
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 6px;
  margin-top: 1rem;
`;

const ToolActions = styled.div`
  display: flex;
  margin-top: 1.5rem;
  gap: 1rem;
`;

const ToolButton = styled.a`
  display: inline-block;
  padding: 0.6rem 1.2rem;
  background: #5E42BC;
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s;
  
  &:hover {
    background: #2A7DE1;
  }
`;

const SecondaryButton = styled(ToolButton)`
  background: transparent;
  color: #5E42BC;
  border: 1px solid #5E42BC;
  
  &:hover {
    background: #f0ebff;
    color: #5E42BC;
  }
`;

const TipBox = styled.div`
  background: #f0ebff;
  border-left: 4px solid #5E42BC;
  padding: 1.5rem;
  margin: 2rem 0;
  border-radius: 0 8px 8px 0;
`;

const TipTitle = styled.h3`
  color: #5E42BC;
  margin-bottom: 0.5rem;
`;

const WritingToolsPage = () => {
  return (
    <MainLayout>
      <HeroSection>
        <Container>
          <Title>AI Writing Assistants</Title>
          <Description>
            Discover powerful AI tools that can help you brainstorm ideas, draft content,
            edit your writing, and overcome writer's block. These tools are designed to enhance
            your writing process, not replace your unique voice.
          </Description>
        </Container>
      </HeroSection>

      <Container>
        <ContentSection>
          <SectionTitle>Popular Writing Tools</SectionTitle>
          <ToolsGrid>
            <ToolCard>
              <ToolHeader>
                <ToolTitle>ChatGPT</ToolTitle>
                <ToolDescription>
                  OpenAI's versatile AI assistant that excels at creative writing tasks and more.
                </ToolDescription>
              </ToolHeader>
              <ToolContent>
                <ToolFeatures>
                  <li>Draft blog posts, emails, and reports</li>
                  <li>Brainstorm ideas and outlines</li>
                  <li>Edit and refine your existing text</li>
                  <li>Answer questions to help with research</li>
                </ToolFeatures>
                <ToolPricing>
                  <strong>Pricing:</strong> Free tier available, Plus subscription at $20/month
                </ToolPricing>
                <ToolActions>
                  <ToolButton href="https://chat.openai.com" target="_blank" rel="noopener noreferrer">
                    Visit Website
                  </ToolButton>
                  <SecondaryButton href="/tutorials/chatgpt-writing-guide" target="_blank">
                    Learn More
                  </SecondaryButton>
                </ToolActions>
              </ToolContent>
            </ToolCard>

            <ToolCard>
              <ToolHeader>
                <ToolTitle>Claude</ToolTitle>
                <ToolDescription>
                  Anthropic's AI assistant known for its thoughtful, nuanced responses and strong writing capabilities.
                </ToolDescription>
              </ToolHeader>
              <ToolContent>
                <ToolFeatures>
                  <li>Long-form content creation</li>
                  <li>Document analysis and summarization</li>
                  <li>Sophisticated writing style adaptation</li>
                  <li>Handles complex, multi-step instructions</li>
                </ToolFeatures>
                <ToolPricing>
                  <strong>Pricing:</strong> Free tier available, Claude Pro at $20/month
                </ToolPricing>
                <ToolActions>
                  <ToolButton href="https://claude.ai" target="_blank" rel="noopener noreferrer">
                    Visit Website
                  </ToolButton>
                  <SecondaryButton href="/tutorials/claude-writing-guide" target="_blank">
                    Learn More
                  </SecondaryButton>
                </ToolActions>
              </ToolContent>
            </ToolCard>

            <ToolCard>
              <ToolHeader>
                <ToolTitle>Notion AI</ToolTitle>
                <ToolDescription>
                  AI writing assistant integrated directly into the Notion workspace platform.
                </ToolDescription>
              </ToolHeader>
              <ToolContent>
                <ToolFeatures>
                  <li>Draft and edit content within Notion</li>
                  <li>Summarize meeting notes and documents</li>
                  <li>Improve existing text with editing suggestions</li>
                  <li>Seamless integration with your workspace</li>
                </ToolFeatures>
                <ToolPricing>
                  <strong>Pricing:</strong> $8/month add-on to Notion subscription
                </ToolPricing>
                <ToolActions>
                  <ToolButton href="https://notion.so/product/ai" target="_blank" rel="noopener noreferrer">
                    Visit Website
                  </ToolButton>
                  <SecondaryButton href="/tutorials/notion-ai-guide" target="_blank">
                    Learn More
                  </SecondaryButton>
                </ToolActions>
              </ToolContent>
            </ToolCard>

            <ToolCard>
              <ToolHeader>
                <ToolTitle>Google Gemini</ToolTitle>
                <ToolDescription>
                  Google's advanced AI with strong writing capabilities and real-time web information.
                </ToolDescription>
              </ToolHeader>
              <ToolContent>
                <ToolFeatures>
                  <li>Research-backed content creation</li>
                  <li>Gmail integration for email writing</li>
                  <li>Docs & Sheets integration</li>
                  <li>Up-to-date information in your content</li>
                </ToolFeatures>
                <ToolPricing>
                  <strong>Pricing:</strong> Free tier available, Gemini Advanced at $20/month
                </ToolPricing>
                <ToolActions>
                  <ToolButton href="https://gemini.google.com" target="_blank" rel="noopener noreferrer">
                    Visit Website
                  </ToolButton>
                  <SecondaryButton href="/tutorials/gemini-writing-guide" target="_blank">
                    Learn More
                  </SecondaryButton>
                </ToolActions>
              </ToolContent>
            </ToolCard>

            <ToolCard>
              <ToolHeader>
                <ToolTitle>Jasper</ToolTitle>
                <ToolDescription>
                  Purpose-built AI writing assistant focused on marketing and business content.
                </ToolDescription>
              </ToolHeader>
              <ToolContent>
                <ToolFeatures>
                  <li>Marketing copy and ad content</li>
                  <li>Blog posts and long-form articles</li>
                  <li>SEO-optimized content creation</li>
                  <li>Templates for different content types</li>
                </ToolFeatures>
                <ToolPricing>
                  <strong>Pricing:</strong> Starting at $39/month
                </ToolPricing>
                <ToolActions>
                  <ToolButton href="https://www.jasper.ai" target="_blank" rel="noopener noreferrer">
                    Visit Website
                  </ToolButton>
                </ToolActions>
              </ToolContent>
            </ToolCard>

            <ToolCard>
              <ToolHeader>
                <ToolTitle>Grammarly</ToolTitle>
                <ToolDescription>
                  Writing assistant that checks grammar, spelling, tone, and offers AI-powered writing improvements.
                </ToolDescription>
              </ToolHeader>
              <ToolContent>
                <ToolFeatures>
                  <li>Grammar and spelling correction</li>
                  <li>Style and tone adjustments</li>
                  <li>GrammarlyGO AI writing features</li>
                  <li>Browser extension for everywhere writing</li>
                </ToolFeatures>
                <ToolPricing>
                  <strong>Pricing:</strong> Free tier available, Premium from $12/month
                </ToolPricing>
                <ToolActions>
                  <ToolButton href="https://www.grammarly.com" target="_blank" rel="noopener noreferrer">
                    Visit Website
                  </ToolButton>
                </ToolActions>
              </ToolContent>
            </ToolCard>
          </ToolsGrid>
        </ContentSection>

        <TipBox>
          <TipTitle>Tips for Using AI Writing Tools Effectively</TipTitle>
          <p>
            AI writing assistants work best when you provide clear instructions. Be specific about tone, 
            audience, length, and purpose. Remember to review and edit AI-generated content to ensure
            it matches your voice and is factually accurate. For more tips, check out our guide on 
            <Link href="/articles/writing-better-ai-prompts" style={{ color: '#5E42BC', textDecoration: 'underline' }}> writing better AI prompts</Link>.
          </p>
        </TipBox>

        <ContentSection>
          <SectionTitle>Using AI Writing Tools For Different Purposes</SectionTitle>
          
          <h3>Content Creation</h3>
          <p>
            Whether you need blog posts, articles, social media content, or marketing copy, AI writing tools
            can help you generate drafts quickly. They're excellent for overcoming writer's block and exploring different angles.
          </p>
          
          <h3>Editing and Refinement</h3>
          <p>
            Most AI writing assistants can help polish your existing content. They can suggest improvements for
            clarity, conciseness, tone consistency, and engagement. Tools like Grammarly focus specifically on this aspect.
          </p>
          
          <h3>Research and Summarization</h3>
          <p>
            AI tools excel at summarizing long documents and helping with research by providing information on various topics.
            They can help you distill key points from complex material.
          </p>
          
          <h3>Email and Business Communication</h3>
          <p>
            Need to write professional emails, meeting summaries, or reports? AI writing tools can draft these
            quickly while maintaining appropriate business tone and formatting.
          </p>
        </ContentSection>
      </Container>
    </MainLayout>
  );
};

export default WritingToolsPage; 