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

const BrainstormingTutorial = () => {
  const steps = [
    {
      title: "Introduction to AI Brainstorming",
      content: (
        <div>
          <h2>What is AI Brainstorming?</h2>
          <p>AI brainstorming tools help you generate, develop, and refine ideas using artificial intelligence. They can provide fresh perspectives, suggest alternatives, and help overcome creative blocks.</p>
          
          <TipBox>
            <strong>Key Benefits:</strong>
            <ul>
              <li>Generate diverse ideas quickly</li>
              <li>Overcome creative blocks</li>
              <li>Explore different perspectives</li>
              <li>Refine and develop concepts</li>
              <li>Save time in ideation</li>
            </ul>
          </TipBox>
          
          <h3>Common Use Cases</h3>
          <CodeBlock>
            {`1. Business Names & Branding
2. Content Ideas
3. Product Features
4. Marketing Campaigns
5. Problem Solutions`}
          </CodeBlock>
        </div>
      )
    },
    {
      title: "Getting Started",
      content: (
        <div>
          <h2>Setting Up Your Brainstorming Session</h2>
          
          <h3>1. Choose Your Tools</h3>
          <TipBox>
            <strong>Popular AI Tools:</strong>
            <ul>
              <li>ChatGPT</li>
              <li>Claude</li>
              <li>Bard</li>
              <li>Midjourney (for visual ideas)</li>
              <li>Notion AI</li>
            </ul>
          </TipBox>
          
          <h3>2. Prepare Your Prompt</h3>
          <ExampleGrid>
            <ExampleCard>
              <h4>Basic Structure</h4>
              <p>Context + Goal + Constraints + Examples</p>
            </ExampleCard>
            <ExampleCard>
              <h4>Example Prompt</h4>
              <p>"Generate 10 unique business name ideas for a sustainable fashion brand targeting young professionals."</p>
            </ExampleCard>
          </ExampleGrid>
          
          <h3>3. Set Up Your Workspace</h3>
          <CodeBlock>
            {`1. Open your chosen AI tool
2. Prepare a document for notes
3. Set a timer for the session
4. Have evaluation criteria ready
5. Keep track of favorite ideas`}
          </CodeBlock>
        </div>
      )
    },
    {
      title: "Basic Brainstorming Techniques",
      content: (
        <div>
          <h2>Core Brainstorming Methods</h2>
          
          <h3>1. Free Association</h3>
          <TipBox>
            <strong>Example Prompt:</strong>
            <p>"Start with the word 'innovation' and generate 20 related concepts, then combine them in unexpected ways."</p>
          </TipBox>
          
          <h3>2. SCAMPER Method</h3>
          <CodeBlock>
            {`S - Substitute
C - Combine
A - Adapt
M - Modify
P - Put to another use
E - Eliminate
R - Reverse/Rearrange`}
          </CodeBlock>
          
          <h3>3. Mind Mapping</h3>
          <ExampleGrid>
            <ExampleCard>
              <h4>Central Idea</h4>
              <p>Start with your main concept</p>
            </ExampleCard>
            <ExampleCard>
              <h4>Branches</h4>
              <p>Generate related ideas and themes</p>
            </ExampleCard>
            <ExampleCard>
              <h4>Connections</h4>
              <p>Find relationships between ideas</p>
            </ExampleCard>
          </ExampleGrid>
        </div>
      )
    },
    {
      title: "Advanced Techniques",
      content: (
        <div>
          <h2>Taking Brainstorming Further</h2>
          
          <h3>1. Role-Based Brainstorming</h3>
          <TipBox>
            <strong>Example Roles:</strong>
            <ul>
              <li>Customer perspective</li>
              <li>Competitor viewpoint</li>
              <li>Industry expert</li>
              <li>Future visionary</li>
              <li>Critic's perspective</li>
            </ul>
          </TipBox>
          
          <h3>2. Constraint-Based Thinking</h3>
          <CodeBlock>
            {`Example Constraints:
- Budget of $1000
- 24-hour timeline
- Remote team
- Sustainable materials
- Mobile-first approach`}
          </CodeBlock>
          
          <h3>3. Combination Techniques</h3>
          <ExampleGrid>
            <ExampleCard>
              <h4>Random Word Association</h4>
              <p>Combine unrelated concepts for new ideas</p>
            </ExampleCard>
            <ExampleCard>
              <h4>Forced Connections</h4>
              <p>Merge two different ideas to create something new</p>
            </ExampleCard>
          </ExampleGrid>
        </div>
      )
    },
    {
      title: "Idea Development",
      content: (
        <div>
          <h2>Refining Your Ideas</h2>
          
          <h3>1. Idea Evaluation</h3>
          <TipBox>
            <strong>Evaluation Criteria:</strong>
            <ul>
              <li>Feasibility</li>
              <li>Innovation level</li>
              <li>Market potential</li>
              <li>Resource requirements</li>
              <li>Alignment with goals</li>
            </ul>
          </TipBox>
          
          <h3>2. Idea Expansion</h3>
          <CodeBlock>
            {`For each idea, consider:
1. How can it be improved?
2. What are potential challenges?
3. How can it be scaled?
4. What resources are needed?
5. What's the implementation timeline?`}
          </CodeBlock>
          
          <h3>3. Prototyping</h3>
          <ExampleGrid>
            <ExampleCard>
              <h4>Quick Sketches</h4>
              <p>Use AI to generate visual concepts</p>
            </ExampleCard>
            <ExampleCard>
              <h4>Mockups</h4>
              <p>Create basic prototypes of ideas</p>
            </ExampleCard>
          </ExampleGrid>
        </div>
      )
    },
    {
      title: "Practical Applications",
      content: (
        <div>
          <h2>Real-World Examples</h2>
          
          <h3>1. Business Naming</h3>
          <TipBox>
            <strong>Process:</strong>
            <ol>
              <li>Define brand values</li>
              <li>Generate name ideas</li>
              <li>Check domain availability</li>
              <li>Test with target audience</li>
              <li>Refine and select</li>
            </ol>
          </TipBox>
          
          <h3>2. Content Creation</h3>
          <CodeBlock>
            {`Content Brainstorming:
1. Identify target audience
2. Generate topic ideas
3. Create content outlines
4. Develop unique angles
5. Plan content calendar`}
          </CodeBlock>
          
          <h3>3. Product Development</h3>
          <ExampleGrid>
            <ExampleCard>
              <h4>Feature Ideas</h4>
              <p>Generate and prioritize product features</p>
            </ExampleCard>
            <ExampleCard>
              <h4>User Experience</h4>
              <p>Brainstorm UX improvements and innovations</p>
            </ExampleCard>
          </ExampleGrid>
        </div>
      )
    }
  ];

  return (
    <MainLayout>
      <Head>
        <title>Brainstorming Ideas with AI Tools | Learn AI Hub</title>
        <meta name="description" content="Learn how to use AI to generate creative ideas for projects, content, business names, and more." />
      </Head>
      
      <TutorialTemplate
        title="Brainstorming Ideas with AI Tools"
        description="Use AI to generate creative ideas for projects, content, business names, and more."
        steps={steps}
      />
    </MainLayout>
  );
};

export default BrainstormingTutorial; 