import React from 'react';
import TutorialTemplate from '../../components/TutorialTemplate';
import MainLayout from '../../layouts/MainLayout';
import Head from 'next/head';
import styled from 'styled-components';

const CodeBlock = styled.pre`
  background: #1e1e1e;
  color: #fff;
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
  margin: 1rem 0;
  font-family: 'Courier New', Courier, monospace;
  min-height: 200px;
  display: flex;
  align-items: center;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

const TipBox = styled.div`
  background: #f0f9ff;
  border-left: 4px solid #5E42BC;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 0 8px 8px 0;
`;

const ExampleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
`;

const ExampleCard = styled.div`
  background: #f5f5f5;
  padding: 1rem;
  border-radius: 8px;
  
  h4 {
    margin-top: 0;
    color: #5E42BC;
  }
  
  p {
    margin: 0.5rem 0;
  }
`;

const ZapierAutomationTutorial = () => {
  const steps = [
    {
      title: "Introduction to Zapier & AI",
      content: (
        <div>
          <h2>What is Zapier?</h2>
          <p>Zapier is an automation platform that connects your favorite apps and services, allowing them to work together automatically. When combined with AI tools, it becomes a powerful way to streamline your workflows.</p>
          
          <TipBox>
            <strong>Key Features:</strong>
            <ul>
              <li>Connect 5,000+ apps</li>
              <li>Create automated workflows (Zaps)</li>
              <li>Add AI steps to your workflows</li>
              <li>Schedule and trigger automations</li>
              <li>Monitor and debug workflows</li>
            </ul>
          </TipBox>
          
          <h3>Basic Concepts</h3>
          <CodeBlock>
            {`Trigger → Action → AI Step → Final Action

Example:
New email → Extract content → AI analysis → Create task`}
          </CodeBlock>
        </div>
      )
    },
    {
      title: "Setting Up Your First Zap",
      content: (
        <div>
          <h2>Creating a Basic Automation</h2>
          
          <h3>1. Choose Your Trigger</h3>
          <TipBox>
            <strong>Common Triggers:</strong>
            <ul>
              <li>New email in Gmail</li>
              <li>New row in Google Sheets</li>
              <li>New form submission</li>
              <li>New file in Dropbox</li>
              <li>New task in Trello</li>
            </ul>
          </TipBox>
          
          <h3>2. Add AI Steps</h3>
          <ExampleGrid>
            <ExampleCard>
              <h4>Content Analysis</h4>
              <p>Use AI to analyze email content and extract key information</p>
            </ExampleCard>
            <ExampleCard>
              <h4>Data Processing</h4>
              <p>Process spreadsheet data with AI to identify trends</p>
            </ExampleCard>
            <ExampleCard>
              <h4>Content Generation</h4>
              <p>Generate responses or summaries using AI</p>
            </ExampleCard>
          </ExampleGrid>
          
          <h3>3. Set Up Final Actions</h3>
          <CodeBlock>
            {`Example Workflow:
1. New email arrives
2. AI extracts key information
3. AI categorizes the email
4. Creates task in project management tool
5. Sends notification to appropriate team`}
          </CodeBlock>
        </div>
      )
    },
    {
      title: "AI Integration Examples",
      content: (
        <div>
          <h2>Practical Use Cases</h2>
          
          <h3>1. Email Management</h3>
          <TipBox>
            <strong>Workflow:</strong>
            <ol>
              <li>New email arrives in Gmail</li>
              <li>AI analyzes content and sentiment</li>
              <li>AI categorizes by priority and topic</li>
              <li>Creates task in Asana with AI summary</li>
              <li>Sends Slack notification with priority level</li>
            </ol>
          </TipBox>
          
          <h3>2. Data Processing</h3>
          <CodeBlock>
            {`Workflow:
1. New row added to Google Sheets
2. AI analyzes the data
3. AI generates insights and trends
4. Updates dashboard in Notion
5. Sends summary email to team`}
          </CodeBlock>
          
          <h3>3. Content Creation</h3>
          <ExampleGrid>
            <ExampleCard>
              <h4>Social Media Posts</h4>
              <p>Blog post → AI summary → Social media post → Schedule in Buffer</p>
            </ExampleCard>
            <ExampleCard>
              <h4>Email Responses</h4>
              <p>Customer email → AI draft → Human review → Send response</p>
            </ExampleCard>
          </ExampleGrid>
        </div>
      )
    },
    {
      title: "Advanced Techniques",
      content: (
        <div>
          <h2>Taking Automation Further</h2>
          
          <h3>1. Multi-Step Workflows</h3>
          <TipBox>
            <strong>Complex Workflow Example:</strong>
            <ol>
              <li>Form submission on website</li>
              <li>AI validates and processes data</li>
              <li>Creates customer record in CRM</li>
              <li>Generates personalized email</li>
              <li>Schedules follow-up task</li>
              <li>Updates analytics dashboard</li>
            </ol>
          </TipBox>
          
          <h3>2. Conditional Logic</h3>
          <CodeBlock>
            {`If AI analysis shows:
- High priority → Create urgent task
- Medium priority → Add to weekly review
- Low priority → Add to general queue`}
          </CodeBlock>
          
          <h3>3. Error Handling</h3>
          <TipBox>
            <strong>Best Practices:</strong>
            <ul>
              <li>Add error notifications</li>
              <li>Set up fallback actions</li>
              <li>Include human review steps</li>
              <li>Monitor workflow health</li>
            </ul>
          </TipBox>
        </div>
      )
    },
    {
      title: "Best Practices & Tips",
      content: (
        <div>
          <h2>Optimizing Your Automations</h2>
          
          <h3>1. Testing & Debugging</h3>
          <TipBox>
            <strong>Testing Checklist:</strong>
            <ul>
              <li>Test each step individually</li>
              <li>Check data formatting</li>
              <li>Verify AI output quality</li>
              <li>Monitor for errors</li>
              <li>Review logs regularly</li>
            </ul>
          </TipBox>
          
          <h3>2. Performance Optimization</h3>
          <ExampleGrid>
            <ExampleCard>
              <h4>Efficiency Tips</h4>
              <ul>
                <li>Batch process when possible</li>
                <li>Use filters to reduce unnecessary triggers</li>
                <li>Optimize AI prompt length</li>
                <li>Schedule during off-peak hours</li>
              </ul>
            </ExampleCard>
            <ExampleCard>
              <h4>Cost Management</h4>
              <ul>
                <li>Monitor API usage</li>
                <li>Use appropriate AI model sizes</li>
                <li>Implement rate limiting</li>
                <li>Optimize trigger frequency</li>
              </ul>
            </ExampleCard>
          </ExampleGrid>
          
          <h3>3. Security Considerations</h3>
          <CodeBlock>
            {`Security Checklist:
- Use appropriate API keys
- Implement data encryption
- Follow least privilege principle
- Regular security audits
- Data retention policies`}
          </CodeBlock>
        </div>
      )
    },
    {
      title: "Real-World Examples",
      content: (
        <div>
          <h2>Putting It All Together</h2>
          
          <h3>1. Customer Support Automation</h3>
          <TipBox>
            <strong>Workflow:</strong>
            <ol>
              <li>Customer submits support ticket</li>
              <li>AI analyzes ticket content</li>
              <li>AI suggests priority and category</li>
              <li>Creates task in support system</li>
              <li>Generates initial response draft</li>
              <li>Notifies appropriate team member</li>
            </ol>
          </TipBox>
          
          <h3>2. Content Marketing Workflow</h3>
          <CodeBlock>
            {`Content Pipeline:
1. New blog post published
2. AI generates social media posts
3. AI creates email newsletter content
4. Schedules posts across platforms
5. Updates content calendar
6. Tracks engagement metrics`}
          </CodeBlock>
          
          <h3>3. Sales Process Automation</h3>
          <ExampleGrid>
            <ExampleCard>
              <h4>Lead Processing</h4>
              <p>Form submission → AI qualification → CRM update → Task creation → Follow-up email</p>
            </ExampleCard>
            <ExampleCard>
              <h4>Deal Management</h4>
              <p>New deal → AI analysis → Risk assessment → Action plan → Team notification</p>
            </ExampleCard>
          </ExampleGrid>
        </div>
      )
    }
  ];

  return (
    <MainLayout>
      <Head>
        <title>Automate Simple Tasks with Zapier & AI | LearnAIHub</title>
        <meta name="description" content="Learn how to connect AI tools to your everyday apps to automate repetitive workflows and boost productivity." />
      </Head>
      
      <TutorialTemplate
        title="Automate Simple Tasks with Zapier & AI"
        description="Connect AI tools to your everyday apps (like email or spreadsheets) to automate repetitive workflows."
        steps={steps}
      />
    </MainLayout>
  );
};

export default ZapierAutomationTutorial; 