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

const ChatGPTTutorial = () => {
  const steps = [
    {
      title: "Understanding ChatGPT",
      content: (
        <div>
          <h2>What is ChatGPT and How Does It Work?</h2>
          <p>ChatGPT is an advanced AI language model that can understand and generate human-like text. It's trained on vast amounts of data and can help with various tasks, from writing to problem-solving.</p>
          
          <TipBox>
            <strong>Key Features:</strong>
            <ul>
              <li>Natural conversation flow</li>
              <li>Context awareness</li>
              <li>Creative problem-solving</li>
              <li>Multiple language support</li>
              <li>Code generation and debugging</li>
              <li>Content summarization</li>
            </ul>
          </TipBox>
          
          <p>Unlike traditional search engines, ChatGPT can maintain context throughout a conversation, making it ideal for complex tasks that require multiple steps or explanations.</p>
          
          <TipBox>
            <strong>Real-World Example:</strong>
            <p>Imagine you're learning a new programming language. Instead of searching through multiple websites, you can have a conversation with ChatGPT:</p>
            <ul>
              <li>Ask for basic syntax examples</li>
              <li>Get explanations of complex concepts</li>
              <li>Debug your code with specific error messages</li>
              <li>Learn best practices through interactive Q&A</li>
            </ul>
          </TipBox>
        </div>
      )
    },
    {
      title: "Writing Your First Prompt",
      content: (
        <div>
          <h2>Crafting Effective Prompts</h2>
          <p>A good prompt is the key to getting useful responses from ChatGPT. Here's how to write effective prompts:</p>
          
          <CodeBlock>
            {`// Basic prompt (not ideal)
"Tell me about AI"

// Better prompt (specific and clear)
"Explain artificial intelligence in simple terms, focusing on how it's used in everyday applications like smartphones and social media"

// Advanced prompt (with context and structure)
"I'm writing a blog post about AI in healthcare. Can you:
1. List 3 major applications of AI in healthcare
2. Explain each application in simple terms
3. Provide real-world examples for each"`}
          </CodeBlock>
          
          <TipBox>
            <strong>Prompt Writing Tips:</strong>
            <ul>
              <li>Be specific about what you want</li>
              <li>Provide context when relevant</li>
              <li>Break complex requests into steps</li>
              <li>Specify the format you want the answer in</li>
              <li>Include examples of the style you prefer</li>
              <li>Set clear boundaries and limitations</li>
            </ul>
          </TipBox>
          
          <TipBox>
            <strong>Real-World Example:</strong>
            <p>Instead of asking "How do I write a resume?", try:</p>
            <CodeBlock>
              {`"I'm applying for a software engineering position with 2 years of experience. 
Can you help me write a resume that:
1. Highlights my Python and JavaScript skills
2. Emphasizes my project management experience
3. Uses action verbs and quantifiable achievements
4. Follows ATS-friendly formatting"`}
            </CodeBlock>
          </TipBox>
        </div>
      )
    },
    {
      title: "Common Use Cases",
      content: (
        <div>
          <h2>Practical Applications of ChatGPT</h2>
          <p>Here are some powerful ways to use ChatGPT in your daily work and learning:</p>
          
          <div style={{ display: 'grid', gap: '1rem' }}>
            <TipBox>
              <strong>Writing & Content Creation</strong>
              <ul>
                <li>Draft emails and professional messages</li>
                <li>Generate blog post outlines and ideas</li>
                <li>Create social media content</li>
                <li>Write product descriptions</li>
                <li>Develop marketing copy</li>
                <li>Create presentation scripts</li>
              </ul>
            </TipBox>
            
            <TipBox>
              <strong>Learning & Research</strong>
              <ul>
                <li>Get explanations of complex topics</li>
                <li>Practice language learning</li>
                <li>Understand technical concepts</li>
                <li>Generate study questions</li>
                <li>Create flashcards</li>
                <li>Summarize research papers</li>
              </ul>
            </TipBox>
            
            <TipBox>
              <strong>Problem Solving</strong>
              <ul>
                <li>Debug code and find solutions</li>
                <li>Brainstorm project ideas</li>
                <li>Analyze data and find patterns</li>
                <li>Generate creative solutions</li>
                <li>Optimize workflows</li>
                <li>Troubleshoot technical issues</li>
              </ul>
            </TipBox>
          </div>
        </div>
      )
    },
    {
      title: "Real-World Examples",
      content: (
        <div>
          <h2>ChatGPT in Action</h2>
          
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <TipBox>
              <strong>Example 1: Content Creation</strong>
              <p><strong>Scenario:</strong> You need to write a product description for a new smartwatch.</p>
              <CodeBlock>
                {`"Write a compelling product description for a smartwatch that:
- Tracks fitness and health metrics
- Has a 7-day battery life
- Includes sleep tracking
- Syncs with both iOS and Android
- Costs $199.99

Make it engaging and highlight the benefits for health-conscious consumers."`}
              </CodeBlock>
            </TipBox>
            
            <TipBox>
              <strong>Example 2: Learning Support</strong>
              <p><strong>Scenario:</strong> You're studying for a biology exam and need help understanding photosynthesis.</p>
              <CodeBlock>
                {`"Explain photosynthesis to me like I'm a high school student. Include:
1. A simple definition
2. The key steps involved
3. A real-world analogy
4. Common misconceptions
5. Practice questions to test my understanding"`}
              </CodeBlock>
            </TipBox>
            
            <TipBox>
              <strong>Example 3: Problem Solving</strong>
              <p><strong>Scenario:</strong> You're debugging a Python script that's not working as expected.</p>
              <CodeBlock>
                {`"I'm getting this error in my Python script:
'TypeError: can only concatenate str (not "int") to str'

Here's the relevant code:
age = 25
print("Your age is: " + age)

Can you:
1. Explain what the error means
2. Show me how to fix it
3. Suggest best practices for string formatting in Python"`}
              </CodeBlock>
            </TipBox>
          </div>
        </div>
      )
    },
    {
      title: "Business & Entrepreneurial Use Cases",
      content: (
        <div>
          <h2>ChatGPT for Business Growth</h2>
          <p>ChatGPT can be a powerful tool for entrepreneurs and business professionals. Here are practical applications:</p>
          
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <TipBox>
              <strong>Business Planning & Strategy</strong>
              <p><strong>Example Prompt:</strong></p>
              <CodeBlock>
                {`"Help me create a business plan for a sustainable fashion brand. Include:
1. Market analysis for eco-conscious consumers
2. Competitive analysis of similar brands
3. Marketing strategy focusing on social media
4. Financial projections for first year
5. Sustainability initiatives and goals"`}
              </CodeBlock>
              <p><strong>Other Applications:</strong></p>
              <ul>
                <li>SWOT analysis for new products</li>
                <li>Competitor research and analysis</li>
                <li>Market entry strategies</li>
                <li>Business model development</li>
              </ul>
            </TipBox>
            
            <TipBox>
              <strong>Marketing & Sales</strong>
              <p><strong>Example Prompt:</strong></p>
              <CodeBlock>
                {`"Create a 30-day content calendar for our new fitness app launch. Include:
1. Social media posts (Twitter, Instagram, LinkedIn)
2. Email marketing sequence
3. Blog post topics
4. Influencer outreach strategy
5. Hashtag suggestions for each platform"`}
              </CodeBlock>
              <p><strong>Other Applications:</strong></p>
              <ul>
                <li>Sales email templates</li>
                <li>Social media content creation</li>
                <li>Ad copy optimization</li>
                <li>Customer persona development</li>
              </ul>
            </TipBox>
            
            <TipBox>
              <strong>Operations & Efficiency</strong>
              <p><strong>Example Prompt:</strong></p>
              <CodeBlock>
                {`"Help me optimize our customer service workflow. Consider:
1. Common customer inquiries and responses
2. Automation opportunities
3. Response time improvements
4. Customer satisfaction metrics
5. Training materials for new staff"`}
              </CodeBlock>
              <p><strong>Other Applications:</strong></p>
              <ul>
                <li>Process documentation</li>
                <li>Workflow optimization</li>
                <li>Standard operating procedures</li>
                <li>Team training materials</li>
              </ul>
            </TipBox>
            
            <TipBox>
              <strong>Financial Planning</strong>
              <p><strong>Example Prompt:</strong></p>
              <CodeBlock>
                {`"Create a financial forecast for our SaaS startup. Include:
1. Monthly revenue projections
2. Customer acquisition costs
3. Operating expenses
4. Break-even analysis
5. Key financial metrics to track"`}
              </CodeBlock>
              <p><strong>Other Applications:</strong></p>
              <ul>
                <li>Budget planning</li>
                <li>Investment analysis</li>
                <li>Financial reporting templates</li>
                <li>Cost reduction strategies</li>
              </ul>
            </TipBox>
            
            <TipBox>
              <strong>Product Development</strong>
              <p><strong>Example Prompt:</strong></p>
              <CodeBlock>
                {`"Help me develop a new feature for our project management app. Consider:
1. User pain points to address
2. Feature specifications
3. User interface suggestions
4. Technical requirements
5. Testing and validation plan"`}
              </CodeBlock>
              <p><strong>Other Applications:</strong></p>
              <ul>
                <li>Product roadmaps</li>
                <li>Feature prioritization</li>
                <li>User feedback analysis</li>
                <li>MVP development</li>
              </ul>
            </TipBox>
          </div>
          
          <TipBox>
            <strong>Pro Tip for Business Users:</strong>
            <p>When using ChatGPT for business purposes:</p>
            <ul>
              <li>Always verify financial and legal information</li>
              <li>Use specific industry terminology</li>
              <li>Provide context about your target market</li>
              <li>Ask for multiple options to compare</li>
              <li>Request data-driven insights when possible</li>
            </ul>
          </TipBox>
        </div>
      )
    },
    {
      title: "Advanced Tips & Best Practices",
      content: (
        <div>
          <h2>Getting the Most Out of ChatGPT</h2>
          <p>To maximize your results with ChatGPT, follow these best practices:</p>
          
          <ol>
            <li>
              <strong>Use Follow-up Questions</strong>
              <p>If the response isn't quite what you need, ask for clarification or more details. ChatGPT maintains context throughout the conversation.</p>
              <CodeBlock>
                {`"Can you explain that in simpler terms?"
"Could you provide more examples?"
"What are some common mistakes to avoid?"`}
              </CodeBlock>
            </li>
            
            <li>
              <strong>Provide Examples</strong>
              <p>Show ChatGPT examples of what you're looking for. For instance:</p>
              <CodeBlock>
                {`"Write a product description in this style:
[Example product description]

But for this product:
[Your product details]"`}
              </CodeBlock>
            </li>
            
            <li>
              <strong>Set the Tone and Style</strong>
              <p>Specify if you want the response to be formal, casual, technical, or simplified.</p>
              <CodeBlock>
                {`"Explain quantum computing to me like I'm a 10-year-old"
"Write a professional email to decline a meeting invitation"
"Create a casual social media post about our new product"`}
              </CodeBlock>
            </li>
            
            <li>
              <strong>Use Step-by-Step Instructions</strong>
              <p>Break complex tasks into smaller, manageable steps for better results.</p>
              <CodeBlock>
                {`"Help me plan a marketing campaign:
1. Define target audience
2. Set campaign goals
3. Choose marketing channels
4. Create content calendar
5. Set success metrics"`}
              </CodeBlock>
            </li>
            
            <li>
              <strong>Verify Important Information</strong>
              <p>Always double-check critical information from reliable sources.</p>
              <CodeBlock>
                {`"What are the latest statistics about [topic]? Please provide sources."
"Can you verify this information with recent studies?"
"What are the most reliable sources for this information?"`}
              </CodeBlock>
            </li>
          </ol>
          
          <TipBox>
            <strong>Pro Tip:</strong> Save your best prompts and responses to build a library of effective interactions. This will help you get better results faster in the future.
          </TipBox>
        </div>
      )
    },
    {
      title: "Common Mistakes to Avoid",
      content: (
        <div>
          <h2>Pitfalls and How to Avoid Them</h2>
          
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <TipBox>
              <strong>Mistake 1: Vague Prompts</strong>
              <p><strong>Bad:</strong> "Tell me about marketing"</p>
              <p><strong>Good:</strong> "Explain digital marketing strategies for small businesses, focusing on social media and email campaigns"</p>
            </TipBox>
            
            <TipBox>
              <strong>Mistake 2: No Context</strong>
              <p><strong>Bad:</strong> "Write a blog post"</p>
              <p><strong>Good:</strong> "Write a 1000-word blog post about sustainable fashion for eco-conscious millennials, including statistics and practical tips"</p>
            </TipBox>
            
            <TipBox>
              <strong>Mistake 3: Overly Complex Requests</strong>
              <p><strong>Bad:</strong> "Create a complete business plan"</p>
              <p><strong>Good:</strong> "Help me create a business plan by breaking it down into sections. Let's start with the executive summary"</p>
            </TipBox>
            
            <TipBox>
              <strong>Mistake 4: No Format Specification</strong>
              <p><strong>Bad:</strong> "Give me some coding tips"</p>
              <p><strong>Good:</strong> "List 5 Python best practices for beginners, with code examples and explanations for each"</p>
            </TipBox>
          </div>
        </div>
      )
    }
  ];

  return (
    <MainLayout>
      <Head>
        <title>Getting Started with ChatGPT | AI Tech Hub</title>
        <meta name="description" content="Learn the basics of using ChatGPT effectively. A beginner's guide to prompts, features, and best practices." />
      </Head>
      
      <TutorialTemplate
        title="Getting Started with ChatGPT"
        description="Learn how to effectively use ChatGPT for writing, research, and problem-solving with practical tips and examples."
        steps={steps}
      />
    </MainLayout>
  );
};

export default ChatGPTTutorial; 