import React from 'react';
import styled from 'styled-components';
import MainLayout from '../../layouts/MainLayout';
import Head from 'next/head';
import Link from 'next/link';

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 1rem 2rem;
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

const GuideHeader = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
  padding-top: 1rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #121212;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  color: #4A4F5C;
  font-size: 1.25rem;
  max-width: 800px;
  margin: 0 auto 2rem;
  line-height: 1.6;
`;

const GuideContent = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  padding: 3rem;
  margin-bottom: 2rem;
`;

const Section = styled.section`
  margin-bottom: 2.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #2A7DE1;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #f0f0f0;
`;

const Paragraph = styled.p`
  color: #4A4F5C;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;

const List = styled.ul`
  margin-bottom: 1.5rem;
  padding-left: 2rem;
`;

const ListItem = styled.li`
  color: #4A4F5C;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 0.8rem;
`;

const Highlight = styled.div`
  background-color: #f5f8ff;
  border-left: 4px solid #2A7DE1;
  padding: 1.5rem;
  margin: 2rem 0;
  border-radius: 0 8px 8px 0;
`;

const CallToAction = styled.div`
  background-color: #5E42BC;
  color: white;
  text-align: center;
  padding: 2rem;
  border-radius: 10px;
  margin: 3rem 0;
`;

const CTATitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const CTAText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const Button = styled.a`
  display: inline-block;
  background-color: white;
  color: #5E42BC;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const InfoBox = styled.div`
  background-color: #fffbea;
  border-left: 4px solid #f0b429;
  padding: 1.5rem;
  margin: 2rem 0;
  border-radius: 0 8px 8px 0;
`;

const ExampleCard = styled.div`
  background-color: white;
  border: 1px solid #e1e5ec;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  h3 {
    color: #2A7DE1;
    margin-bottom: 1rem;
    font-size: 1.3rem;
  }
  
  p {
    margin-bottom: 1rem;
  }
`;

const ExampleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;

const TipBox = styled.div`
  background-color: #ecf8f3;
  border-left: 4px solid #00BFA6;
  padding: 1.5rem;
  margin: 1.5rem 0;
  border-radius: 0 8px 8px 0;
  
  h4 {
    color: #00A090;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }
`;

const ChatGPTProjectsGuide = () => {
  return (
    <>
      <Head>
        <title>Organize Your AI Workflow: ChatGPT Projects | Learn AI Hub</title>
        <meta name="description" content="Learn how to use ChatGPT Projects to organize your AI workflow, maximize context, and tackle complex business tasks more effectively." />
      </Head>
      <MainLayout>
        <Container>
          <BackLink>
            <Link href="/resources" passHref legacyBehavior>
              <a>← Back to Resources & Guides</a>
            </Link>
          </BackLink>
          
          <GuideHeader>
            <Title>Organize Your AI Workflow: ChatGPT Projects</Title>
            <Subtitle>
              Learn how to leverage ChatGPT Projects to create organized, context-rich AI workspaces for your business tasks
            </Subtitle>
          </GuideHeader>
          
          <GuideContent>
            <Section>
              <SectionTitle>Bringing Order to Your AI Conversations</SectionTitle>
              <Paragraph>
                As you use ChatGPT more frequently for various business tasks, your chat history can become cluttered and disorganized. Finding specific information or maintaining context across multiple related conversations can be challenging. Enter ChatGPT Projects – a feature designed to bring folder-like organization to your AI workspace.
              </Paragraph>
              <Paragraph>
                This guide explores how business owners can leverage Projects to streamline workflows and enhance problem-solving with ChatGPT, transforming it from a general assistant into specialized helpers for different facets of your business.
              </Paragraph>
              
              <InfoBox>
                <strong>Note:</strong> The ChatGPT Projects feature, along with reliable access to analyze uploaded files within them using models like GPT-4o, is generally only available to users with paid ChatGPT subscriptions (Plus, Team, or Enterprise). Check your current plan for availability.
              </InfoBox>
            </Section>
            
            <Section>
              <SectionTitle>Getting Started with Projects</SectionTitle>
              <Paragraph>
                Projects act as containers for your chat threads. You can create them via the sidebar, giving each project a specific name and even a color-coded icon for easy visual identification. Think of them as dedicated workspaces for specific clients, marketing campaigns, internal procedures, or complex problems you're tackling.
              </Paragraph>
              
              <Highlight>
                <h3>Key Benefits of ChatGPT Projects:</h3>
                <List>
                  <ListItem><strong>Organization:</strong> Keep related conversations in one place instead of scattered throughout your chat history</ListItem>
                  <ListItem><strong>Context Retention:</strong> ChatGPT retains more relevant context within a project's conversations</ListItem>
                  <ListItem><strong>File Management:</strong> Upload and reference documents specifically relevant to the project</ListItem>
                  <ListItem><strong>Focused Problem-Solving:</strong> Maintain continuous context for complex, multi-step problems</ListItem>
                </List>
              </Highlight>
            </Section>
            
            <Section>
              <SectionTitle>Tips and Tricks for Effective Project Use</SectionTitle>
              
              <TipBox>
                <h4>Tip #1: Context is King - Use Project Files</h4>
                <Paragraph>
                  Don't just organize chats; centralize information. Upload relevant files directly into your Project – this could include company goals, brand guidelines, style guides, technical diagrams, P&Ls, customer personas, or specific procedure documents (PDFs, images, etc.).
                </Paragraph>
                <Paragraph>
                  ChatGPT (specifically models like GPT-4o) can then reference this material within that Project's chats instead of you having to re-explain your company background repeatedly.
                </Paragraph>
              </TipBox>
              
              <TipBox>
                <h4>Tip #2: Structure Your Context - The Project Overview Template</h4>
                <Paragraph>
                  To ensure ChatGPT understands the bigger picture of your project, provide structured context upfront using a 'project overview' containing:
                </Paragraph>
                <List>
                  <ListItem>A brief description of the project</ListItem>
                  <ListItem>Key objectives or desired outcomes</ListItem>
                  <ListItem>The specific problem statement you're addressing</ListItem>
                  <ListItem>Any specific tools or methodologies being used</ListItem>
                </List>
                <Paragraph>
                  Pin this overview as a key instruction or initial message within the Project for easy reference.
                </Paragraph>
              </TipBox>
              
              <TipBox>
                <h4>Tip #3: Guide the AI - Meta Instructions for Consistency</h4>
                <Paragraph>
                  For complex or repetitive tasks within a Project, standard instructions might not be enough. Consider using 'meta instructions' – detailed, structured guidelines telling ChatGPT how to approach the task, what format to use, the desired tone, constraints, and steps to follow.
                </Paragraph>
                <Paragraph>
                  Develop a standard meta instruction template for common tasks (e.g., drafting marketing emails, summarizing reports) and adapt it for different Projects.
                </Paragraph>
              </TipBox>
              
              <TipBox>
                <h4>Tip #4: Test and Refine</h4>
                <Paragraph>
                  Ensure your setup works as intended. After adding files and instructions, explicitly ask ChatGPT to reference specific information from an uploaded document to confirm it can access and understand the context.
                </Paragraph>
                <Paragraph>
                  If the initial outputs aren't quite right, don't just start a new chat. Refine the instructions within the Project based on the results. Iterate until ChatGPT consistently delivers what you need within that Project's context.
                </Paragraph>
              </TipBox>
            </Section>
            
            <Section>
              <SectionTitle>Practical Project Examples for Business</SectionTitle>
              <Paragraph>
                Here are several ways you can use Projects to organize and enhance your business workflows:
              </Paragraph>
              
              <ExampleGrid>
                <ExampleCard>
                  <h3>Client Management</h3>
                  <p>Create a separate Project for each major client. Upload their brand guidelines, past campaign results, communication history summaries, and specific goals.</p>
                  <p>Use chats within this project for drafting client communications, brainstorming ideas specific to them, or analyzing their data.</p>
                </ExampleCard>
                
                <ExampleCard>
                  <h3>Marketing Campaign Development</h3>
                  <p>Dedicate a Project to a specific marketing campaign (e.g., "Q3 Product Launch"). Upload target audience personas, campaign briefs, budget documents, draft ad copy, and performance metrics.</p>
                  <p>Use it to refine messaging, generate content ideas, and track progress.</p>
                </ExampleCard>
                
                <ExampleCard>
                  <h3>Product Development</h3>
                  <p>Create a Project for a new product or feature. Include market research findings, technical specifications, user feedback summaries, and development roadmaps.</p>
                  <p>Use it for brainstorming features, drafting documentation, or solving development hurdles.</p>
                </ExampleCard>
                
                <ExampleCard>
                  <h3>Content Creation Hub</h3>
                  <p>Have a Project focused on your blog or social media content. Upload your content calendar, style guide, keyword research, and performance analytics.</p>
                  <p>Use it to generate topic ideas, draft articles or posts, and refine content based on your guidelines.</p>
                </ExampleCard>
                
                <ExampleCard>
                  <h3>Internal Process Improvement</h3>
                  <p>Dedicate a Project to improving a specific business process (e.g., "Customer Onboarding Optimization"). Upload current process documentation, customer feedback, and best practice research.</p>
                  <p>Use it to analyze pain points, brainstorm solutions, and draft revised procedures.</p>
                </ExampleCard>
                
                <ExampleCard>
                  <h3>Competitor Analysis</h3>
                  <p>Maintain a Project focused on key competitors. Upload their public pricing information, summaries of their product features, recent news articles, and SWOT analyses you've conducted.</p>
                  <p>Use it to track their activities, compare offerings, and identify strategic opportunities or threats.</p>
                </ExampleCard>
              </ExampleGrid>
              
              <Paragraph>
                These examples illustrate how Projects can create focused, context-rich environments within ChatGPT for various business needs, helping to organize information and improve the relevance of AI assistance for specific tasks.
              </Paragraph>
            </Section>
            
            <Section>
              <SectionTitle>Best Practices for ChatGPT Projects</SectionTitle>
              <List>
                <ListItem><strong>Keep Project Scope Manageable:</strong> Rather than one giant project for everything, create focused projects around specific needs.</ListItem>
                <ListItem><strong>Update Project Files Regularly:</strong> As your business evolves, refresh the documents in your projects to ensure ChatGPT works with current information.</ListItem>
                <ListItem><strong>Use Consistent Naming Conventions:</strong> Develop a system for naming projects that makes them easy to identify and organize.</ListItem>
                <ListItem><strong>Document Project Purpose:</strong> Include a clear explanation of what the project is for and how it should be used by team members.</ListItem>
                <ListItem><strong>Leverage Color Coding:</strong> Use the color options for projects to visually differentiate categories (e.g., blue for clients, purple for marketing).</ListItem>
                <ListItem><strong>Consider Security:</strong> Be mindful of the sensitivity of information uploaded. While ChatGPT has security measures, follow your organization's data handling policies.</ListItem>
              </List>
            </Section>
            
            <Section>
              <SectionTitle>Transforming Your AI Workflow</SectionTitle>
              <Paragraph>
                For business owners leveraging paid ChatGPT plans, the Projects feature offers a powerful way to move beyond simple chat threads towards organized, context-aware workspaces. By structuring your projects, providing relevant files, using detailed instructions (like meta instructions), and iteratively testing, you can significantly improve the quality and consistency of ChatGPT's outputs for specific, ongoing business tasks.
              </Paragraph>
              <Paragraph>
                This approach transforms ChatGPT from a general assistant into specialized helpers for different facets of your business, enabling you to tackle more complex problems and streamline various workflows with greater efficiency.
              </Paragraph>
            </Section>
            
            <CallToAction>
              <CTATitle>Ready to Organize Your AI Workflow?</CTATitle>
              <CTAText>
                Subscribe to our newsletter to receive more AI productivity tips, tutorials, and early access to our upcoming guides on advanced ChatGPT features for business.
              </CTAText>
              <Link href="/subscribe" passHref legacyBehavior>
                <Button>Join Our Community</Button>
              </Link>
            </CallToAction>
          </GuideContent>
        </Container>
      </MainLayout>
    </>
  );
};

export default ChatGPTProjectsGuide; 