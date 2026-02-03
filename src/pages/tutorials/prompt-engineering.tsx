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

const PromptEngineeringTutorial = () => {
  const steps = [
    {
      title: "Understanding Prompt Engineering",
      content: (
        <div>
          <h2>What is Prompt Engineering?</h2>
          <p>Prompt engineering is the art and science of crafting effective instructions for AI models to get the best possible results. It's about understanding how AI interprets and processes your requests.</p>
          
          <TipBox>
            <strong>Key Concepts:</strong>
            <ul>
              <li>Clear and specific instructions</li>
              <li>Context and constraints</li>
              <li>Format and structure</li>
              <li>Iterative refinement</li>
              <li>Model-specific considerations</li>
            </ul>
          </TipBox>
          
          <h3>Basic Prompt Structure</h3>
          <CodeBlock>
            {`Role + Context + Task + Format + Constraints

Example:
You are an expert Python developer. 
Create a function that calculates the Fibonacci sequence.
The function should be optimized for performance.
Return the code with detailed comments.`}
          </CodeBlock>
        </div>
      )
    },
    {
      title: "Advanced Prompt Techniques",
      content: (
        <div>
          <h2>Techniques for Better Results</h2>
          
          <h3>1. Role-Based Prompting</h3>
          <ExampleGrid>
            <ExampleCard>
              <h4>Basic Prompt</h4>
              <p>"Write a blog post about AI"</p>
              <h4>Role-Based Prompt</h4>
              <p>"You are a tech journalist with 10 years of experience. Write an engaging blog post about the latest AI developments, focusing on practical applications for small businesses."</p>
            </ExampleCard>
          </ExampleGrid>
          
          <h3>2. Chain of Thought</h3>
          <CodeBlock>
            {`Let's solve this problem step by step:
1. First, identify the main components
2. Then, analyze each component
3. Finally, combine the insights

Problem: Explain quantum computing to a high school student.`}
          </CodeBlock>
          
          <h3>3. Few-Shot Learning</h3>
          <TipBox>
            <strong>Example:</strong>
            <p>Here are two examples of good product descriptions:</p>
            <p>1. "Premium wireless earbuds with active noise cancellation, 30-hour battery life, and crystal-clear sound quality."</p>
            <p>2. "Professional-grade camera with 4K video, 20MP sensor, and weather-sealed body."</p>
            <p>Now write a similar description for a smartwatch.</p>
          </TipBox>
        </div>
      )
    },
    {
      title: "Model-Specific Strategies",
      content: (
        <div>
          <h2>Optimizing for Different AI Models</h2>
          
          <h3>ChatGPT/GPT-4</h3>
          <TipBox>
            <strong>Best Practices:</strong>
            <ul>
              <li>Use clear, natural language</li>
              <li>Provide context and examples</li>
              <li>Specify the desired format</li>
              <li>Use system messages for role definition</li>
            </ul>
          </TipBox>
          
          <h3>Claude</h3>
          <TipBox>
            <strong>Best Practices:</strong>
            <ul>
              <li>Be explicit about constraints</li>
              <li>Use structured formatting</li>
              <li>Provide reference materials</li>
              <li>Ask for step-by-step reasoning</li>
            </ul>
          </TipBox>
          
          <h3>Midjourney/DALL-E</h3>
          <CodeBlock>
            {`Basic: "A cat sitting on a windowsill"

Enhanced: "A photorealistic portrait of a Maine Coon cat sitting on a wooden windowsill, 
soft morning light streaming through the window, detailed fur texture, 
shallow depth of field, professional photography, 8k --ar 16:9"`}
          </CodeBlock>
        </div>
      )
    },
    {
      title: "Common Pitfalls & Solutions",
      content: (
        <div>
          <h2>Avoiding Common Mistakes</h2>
          
          <ExampleGrid>
            <ExampleCard>
              <h4>Problem: Vague Instructions</h4>
              <p><strong>Bad:</strong> "Write something about marketing"</p>
              <p><strong>Good:</strong> "Write a 500-word article about digital marketing trends in 2024, focusing on AI-powered tools and their impact on small businesses."</p>
            </ExampleCard>
            
            <ExampleCard>
              <h4>Problem: Missing Context</h4>
              <p><strong>Bad:</strong> "Fix this code"</p>
              <p><strong>Good:</strong> "This Python function is supposed to sort a list of dictionaries by a specific key, but it's not working. The error occurs when the key is missing from some dictionaries. Please fix it and explain your solution."</p>
            </ExampleCard>
          </ExampleGrid>
          
          <h3>Tips for Better Prompts</h3>
          <TipBox>
            <strong>Do:</strong>
            <ul>
              <li>Be specific about your requirements</li>
              <li>Provide relevant context</li>
              <li>Specify the desired format</li>
              <li>Include examples when possible</li>
              <li>Set clear constraints</li>
            </ul>
            
            <strong>Don't:</strong>
            <ul>
              <li>Use ambiguous language</li>
              <li>Assume the AI knows your context</li>
              <li>Forget to specify the output format</li>
              <li>Make the prompt too complex</li>
              <li>Ignore model limitations</li>
            </ul>
          </TipBox>
        </div>
      )
    },
    {
      title: "Practical Applications",
      content: (
        <div>
          <h2>Real-World Examples</h2>
          
          <h3>Content Creation</h3>
          <CodeBlock>
            {`You are a professional copywriter specializing in tech products.
Create a product description for a new smartwatch with these features:
- Health monitoring (heart rate, sleep, steps)
- 7-day battery life
- Water resistance
- Smart notifications
- Customizable watch faces

Write in a persuasive but informative tone, highlighting the benefits for fitness enthusiasts.
Keep it under 200 words.`}
          </CodeBlock>
          
          <h3>Code Generation</h3>
          <CodeBlock>
            {`You are an expert Python developer.
Create a function that:
1. Takes a list of dictionaries
2. Filters out items where 'price' is above 100
3. Sorts the remaining items by 'rating' in descending order
4. Returns the top 5 items

Include:
- Type hints
- Docstring
- Error handling
- Example usage`}
          </CodeBlock>
          
          <h3>Data Analysis</h3>
          <TipBox>
            <strong>Example Prompt:</strong>
            <p>"Analyze this sales data and provide insights:</p>
            <ul>
              <li>Identify top-performing products</li>
              <li>Highlight seasonal trends</li>
              <li>Suggest areas for improvement</li>
              <li>Format the response as a business report</li>
            </ul>
          </TipBox>
        </div>
      )
    },
    {
      title: "Advanced Techniques",
      content: (
        <div>
          <h2>Taking It Further</h2>
          
          <h3>1. Prompt Chaining</h3>
          <TipBox>
            <strong>Example Workflow:</strong>
            <ol>
              <li>Generate ideas</li>
              <li>Refine the best idea</li>
              <li>Create an outline</li>
              <li>Expand each section</li>
              <li>Review and edit</li>
            </ol>
          </TipBox>
          
          <h3>2. Temperature Control</h3>
          <CodeBlock>
            {`For creative tasks (higher temperature):
"Write a creative story about a robot learning to paint"

For precise tasks (lower temperature):
"List the steps to install Python on Windows 10"`}
          </CodeBlock>
          
          <h3>3. Iterative Refinement</h3>
          <TipBox>
            <strong>Process:</strong>
            <ol>
              <li>Start with a basic prompt</li>
              <li>Analyze the output</li>
              <li>Identify what worked and what didn't</li>
              <li>Refine the prompt</li>
              <li>Repeat until satisfied</li>
            </ol>
          </TipBox>
          
          <h3>4. Custom Instructions</h3>
          <CodeBlock>
            {`System: You are an expert in [field] with [years] of experience.
Your communication style is [style].
You prioritize [values].
You always [specific behaviors].

User: [Your actual prompt]`}
          </CodeBlock>
        </div>
      )
    }
  ];

  return (
    <MainLayout>
      <Head>
        <title>Writing Effective AI Prompts | LearnAIHub</title>
        <meta name="description" content="Master the art of prompt engineering to get more accurate and useful results from AI assistants." />
      </Head>
      
      <TutorialTemplate
        title="Writing Effective AI Prompts"
        description="Master the art of prompt engineering to get more accurate and useful results from AI assistants."
        steps={steps}
      />
    </MainLayout>
  );
};

export default PromptEngineeringTutorial; 