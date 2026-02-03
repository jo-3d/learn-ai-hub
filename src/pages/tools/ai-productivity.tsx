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

const UseCase = styled.div`
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const UseCaseTitle = styled.h3`
  color: #2A7DE1;
  margin-bottom: 0.75rem;
`;

const AIProductivityPage = () => {
  return (
    <MainLayout>
      <HeroSection>
        <Container>
          <Title>AI Productivity Tools</Title>
          <Description>
            Discover how AI can help you work smarter, not harder. These tools automate repetitive tasks,
            organize information, summarize content, and streamline your workflows to save you time and mental energy.
          </Description>
        </Container>
      </HeroSection>

      <Container>
        <ContentSection>
          <SectionTitle>Popular AI Productivity Tools</SectionTitle>
          <ToolsGrid>
            <ToolCard>
              <ToolHeader>
                <ToolTitle>Notion AI</ToolTitle>
                <ToolDescription>
                  AI assistant integrated into Notion's workspace platform to enhance note-taking and documentation.
                </ToolDescription>
              </ToolHeader>
              <ToolContent>
                <ToolFeatures>
                  <li>Summarize long documents</li>
                  <li>Generate action items from meetings</li>
                  <li>Rewrite and improve text</li>
                  <li>Create content from simple prompts</li>
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
                <ToolTitle>Zapier AI Assistant</ToolTitle>
                <ToolDescription>
                  AI-powered automation platform that connects your apps and automates workflows.
                </ToolDescription>
              </ToolHeader>
              <ToolContent>
                <ToolFeatures>
                  <li>Create automated workflows with natural language</li>
                  <li>Connect 5,000+ apps without coding</li>
                  <li>Process data across platforms</li>
                  <li>Automate repetitive tasks</li>
                </ToolFeatures>
                <ToolPricing>
                  <strong>Pricing:</strong> Free tier available, paid plans from $19.99/month
                </ToolPricing>
                <ToolActions>
                  <ToolButton href="https://zapier.com/ai" target="_blank" rel="noopener noreferrer">
                    Visit Website
                  </ToolButton>
                </ToolActions>
              </ToolContent>
            </ToolCard>

            <ToolCard>
              <ToolHeader>
                <ToolTitle>Otter.ai</ToolTitle>
                <ToolDescription>
                  AI meeting assistant that records, transcribes, and summarizes your meetings.
                </ToolDescription>
              </ToolHeader>
              <ToolContent>
                <ToolFeatures>
                  <li>Real-time transcription</li>
                  <li>Automated meeting notes</li>
                  <li>Key points & action item extraction</li>
                  <li>Integration with Zoom, Teams, etc.</li>
                </ToolFeatures>
                <ToolPricing>
                  <strong>Pricing:</strong> Free tier available, Pro plan at $16.99/month
                </ToolPricing>
                <ToolActions>
                  <ToolButton href="https://otter.ai" target="_blank" rel="noopener noreferrer">
                    Visit Website
                  </ToolButton>
                </ToolActions>
              </ToolContent>
            </ToolCard>

            <ToolCard>
              <ToolHeader>
                <ToolTitle>Microsoft Copilot</ToolTitle>
                <ToolDescription>
                  AI assistant integrated into Microsoft 365 apps to enhance productivity across Word, Excel, PowerPoint, and more.
                </ToolDescription>
              </ToolHeader>
              <ToolContent>
                <ToolFeatures>
                  <li>Draft & edit in Word</li>
                  <li>Analyze data in Excel</li>
                  <li>Create presentations in PowerPoint</li>
                  <li>Summarize meetings in Teams</li>
                </ToolFeatures>
                <ToolPricing>
                  <strong>Pricing:</strong> Microsoft 365 Copilot at $30/user/month (business)
                </ToolPricing>
                <ToolActions>
                  <ToolButton href="https://www.microsoft.com/en-us/microsoft-365/copilot" target="_blank" rel="noopener noreferrer">
                    Visit Website
                  </ToolButton>
                </ToolActions>
              </ToolContent>
            </ToolCard>

            <ToolCard>
              <ToolHeader>
                <ToolTitle>Mem.ai</ToolTitle>
                <ToolDescription>
                  AI-powered workspace that organizes your notes, tasks, and knowledge with smart connections.
                </ToolDescription>
              </ToolHeader>
              <ToolContent>
                <ToolFeatures>
                  <li>Automatically organized notes</li>
                  <li>Smart connections between ideas</li>
                  <li>Generate summaries & suggestions</li>
                  <li>Powerful search & retrieval</li>
                </ToolFeatures>
                <ToolPricing>
                  <strong>Pricing:</strong> Free tier available, Pro at $8/month
                </ToolPricing>
                <ToolActions>
                  <ToolButton href="https://mem.ai" target="_blank" rel="noopener noreferrer">
                    Visit Website
                  </ToolButton>
                </ToolActions>
              </ToolContent>
            </ToolCard>

            <ToolCard>
              <ToolHeader>
                <ToolTitle>Taskade</ToolTitle>
                <ToolDescription>
                  AI-powered project management and outlining tool with built-in productivity features.
                </ToolDescription>
              </ToolHeader>
              <ToolContent>
                <ToolFeatures>
                  <li>AI task & project generation</li>
                  <li>Team collaboration features</li>
                  <li>Mind mapping & outlining</li>
                  <li>Templates for various workflows</li>
                </ToolFeatures>
                <ToolPricing>
                  <strong>Pricing:</strong> Free tier available, Pro at $19/month
                </ToolPricing>
                <ToolActions>
                  <ToolButton href="https://www.taskade.com" target="_blank" rel="noopener noreferrer">
                    Visit Website
                  </ToolButton>
                </ToolActions>
              </ToolContent>
            </ToolCard>

            <ToolCard>
              <ToolHeader>
                <ToolTitle>Make.com</ToolTitle>
                <ToolDescription>
                  Visual no-code automation platform to connect apps and automate complex workflows.
                </ToolDescription>
              </ToolHeader>
              <ToolContent>
                <ToolFeatures>
                  <li>Visually design complex automations</li>
                  <li>Connect thousands of applications</li>
                  <li>Supports APIs, webhooks, and conditional logic</li>
                  <li>Automate business processes</li>
                </ToolFeatures>
                <ToolPricing>
                  <strong>Pricing:</strong> Free tier available, paid plans from $9/month (based on operations)
                </ToolPricing>
                <ToolActions>
                  <ToolButton href="https://www.make.com" target="_blank" rel="noopener noreferrer">
                    Visit Website
                  </ToolButton>
                </ToolActions>
              </ToolContent>
            </ToolCard>
          </ToolsGrid>
        </ContentSection>

        <TipBox>
          <TipTitle>Tip: Start Small with Automation</TipTitle>
          <p>
            When incorporating AI productivity tools into your workflow, start with one small, repetitive task 
            that takes up your time. Master that automation before moving on to more complex processes. 
            For more ideas, check our guide on 
            <Link href="/articles/automating-tasks-with-ai" style={{ color: '#5E42BC', textDecoration: 'underline' }}> automating everyday tasks with AI</Link>.
          </p>
        </TipBox>

        <ContentSection>
          <SectionTitle>AI Productivity Use Cases</SectionTitle>
          
          <UseCase>
            <UseCaseTitle>Meeting Management</UseCaseTitle>
            <p>
              AI tools can transcribe and summarize meetings, extract action items, and even schedule 
              follow-ups. Apps like Otter.ai, Fireflies.ai, and Microsoft Teams with Copilot automate 
              the process of note-taking so you can focus on the conversation instead of documentation.
            </p>
          </UseCase>
          
          <UseCase>
            <UseCaseTitle>Email and Communication</UseCaseTitle>
            <p>
              AI assistants integrated into Gmail, Outlook, and other communication tools can help draft emails,
              summarize long threads, prioritize your inbox, and suggest responses. This saves time on routine correspondence
              while helping you maintain professional communication.
            </p>
          </UseCase>
          
          <UseCase>
            <UseCaseTitle>Data Analysis and Visualization</UseCaseTitle>
            <p>
              Tools like Microsoft Excel with Copilot and Google Sheets with Gemini can help analyze data,
              create visualizations, and extract insights without requiring advanced knowledge of formulas or
              data analysis techniques. Simply describe what you want to understand from your data.
            </p>
          </UseCase>
          
          <UseCase>
            <UseCaseTitle>Content Organization and Retrieval</UseCaseTitle>
            <p>
              AI-powered knowledge management tools like Notion AI, Mem.ai, and Obsidian help organize your notes,
              documents, and ideas with smart connections, making information retrieval faster and more intuitive.
              This reduces time spent searching for information and improves knowledge accessibility.
            </p>
          </UseCase>
        </ContentSection>

        <ContentSection>
          <SectionTitle>Getting Started with AI Productivity</SectionTitle>
          
          <h3>1. Identify Your Time Drains</h3>
          <p>
            Before adopting any AI productivity tool, identify which tasks take up most of your time 
            but provide relatively low value. These are prime candidates for automation or AI assistance.
          </p>
          
          <h3>2. Choose Tools That Integrate With Your Existing Workflow</h3>
          <p>
            The best productivity tools enhance your existing systems rather than forcing you to change everything.
            Look for AI solutions that integrate with the apps and platforms you already use.
          </p>
          
          <h3>3. Start With One Task or Process</h3>
          <p>
            Don't try to automate everything at once. Pick one repetitive task, implement an AI solution,
            refine it until it works well, and then move on to the next opportunity for improvement.
          </p>
          
          <h3>4. Measure Time Savings</h3>
          <p>
            Keep track of how much time you save by implementing AI productivity tools. This will help you
            justify the cost of paid tools and identify which solutions provide the most value for your specific needs.
          </p>
        </ContentSection>
      </Container>
    </MainLayout>
  );
};

export default AIProductivityPage; 