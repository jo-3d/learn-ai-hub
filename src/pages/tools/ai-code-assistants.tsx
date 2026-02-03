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

const CodeExample = styled.div`
  background: #1e1e1e;
  border-radius: 6px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  color: #e6e6e6;
  font-family: 'Consolas', 'Monaco', 'Andale Mono', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
  overflow-x: auto;
`;

const CodeComment = styled.span`
  color: #6a9955;
`;

const AICodeAssistantsPage = () => {
  return (
    <MainLayout>
      <HeroSection>
        <Container>
          <Title>AI Code Assistants</Title>
          <Description>
            Discover how AI can help you write, understand, debug, and optimize code faster.
            Whether you're a professional developer or just getting started with programming,
            these tools can boost your productivity and help you learn.
          </Description>
        </Container>
      </HeroSection>

      <Container>
        <ContentSection>
          <SectionTitle>Popular AI Coding Tools</SectionTitle>
          <ToolsGrid>
            <ToolCard>
              <ToolHeader>
                <ToolTitle>Cursor</ToolTitle>
                <ToolDescription>
                  AI-native code editor built on VS Code with powerful chat and editing capabilities.
                </ToolDescription>
              </ToolHeader>
              <ToolContent>
                <ToolFeatures>
                  <li>Edit code with natural language commands</li>
                  <li>Conversational AI assistant in editor</li>
                  <li>Predictive edits with "Cursor Tab"</li>
                  <li>Based on VS Code for familiarity</li>
                  <li>Strong codebase context understanding</li>
                </ToolFeatures>
                <ToolPricing>
                  <strong>Pricing:</strong> Free tier available, Pro at $20/month, Business $40/user/month
                </ToolPricing>
                <ToolActions>
                  <ToolButton href="https://cursor.sh" target="_blank" rel="noopener noreferrer">
                    Visit Website
                  </ToolButton>
                </ToolActions>
              </ToolContent>
            </ToolCard>

            <ToolCard>
              <ToolHeader>
                <ToolTitle>Replit Assistant</ToolTitle>
                <ToolDescription>
                  AI coding companion built into Replit's cloud IDE with code generation and chat capabilities.
                </ToolDescription>
              </ToolHeader>
              <ToolContent>
                <ToolFeatures>
                  <li>In-IDE AI chat assistant</li>
                  <li>Explain, modify, and debug code</li>
                  <li>Code completion suggestions</li>
                  <li>Seamless integration with Replit platform</li>
                  <li>Works alongside Replit Agent for app generation</li>
                </ToolFeatures>
                <ToolPricing>
                  <strong>Pricing:</strong> Basic mode free, Advanced features require Replit Core plan ($20/month)
                </ToolPricing>
                <ToolActions>
                  <ToolButton href="https://replit.com/ai" target="_blank" rel="noopener noreferrer">
                    Visit Website
                  </ToolButton>
                  <SecondaryButton href="https://docs.replit.com/replitai/assistant" target="_blank">
                    Learn More
                  </SecondaryButton>
                </ToolActions>
              </ToolContent>
            </ToolCard>

            <ToolCard>
              <ToolHeader>
                <ToolTitle>GitHub Copilot</ToolTitle>
                <ToolDescription>
                  AI pair programmer that integrates directly into your code editor to suggest code completions.
                </ToolDescription>
              </ToolHeader>
              <ToolContent>
                <ToolFeatures>
                  <li>Real-time code suggestions</li>
                  <li>Full function & block completions</li>
                  <li>Comment-to-code generation</li>
                  <li>Works across multiple languages & IDEs</li>
                </ToolFeatures>
                <ToolPricing>
                  <strong>Pricing:</strong> $10/month or $100/year (free for students & open source)
                </ToolPricing>
                <ToolActions>
                  <ToolButton href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer">
                    Visit Website
                  </ToolButton>
                  <SecondaryButton href="/tutorials/github-copilot-guide" target="_blank">
                    Learn More
                  </SecondaryButton>
                </ToolActions>
              </ToolContent>
            </ToolCard>
            
            <ToolCard>
              <ToolHeader>
                <ToolTitle>Firebase Studio</ToolTitle>
                <ToolDescription>
                  Cloud-based, agentic IDE integrating Project IDX with Gemini for full-stack AI app development.
                </ToolDescription>
              </ToolHeader>
              <ToolContent>
                <ToolFeatures>
                  <li>Code editing with Gemini assistance</li>
                  <li>App prototyping from natural language</li>
                  <li>Integrated Firebase & Google Cloud tools</li>
                  <li>Built-in emulators and deployment</li>
                  <li>Customizable VM environment via Nix</li>
                </ToolFeatures>
                <ToolPricing>
                  <strong>Pricing:</strong> Free tier (3 workspaces), 10-30 with Google Dev Program
                </ToolPricing>
                <ToolActions>
                  <ToolButton href="https://firebase.google.com/docs/studio" target="_blank" rel="noopener noreferrer">
                    Visit Website
                  </ToolButton>
                </ToolActions>
              </ToolContent>
            </ToolCard>

            <ToolCard>
              <ToolHeader>
                <ToolTitle>Codeium</ToolTitle>
                <ToolDescription>
                  Free AI coding assistant with a focus on speed and accurate completions for many languages.
                </ToolDescription>
              </ToolHeader>
              <ToolContent>
                <ToolFeatures>
                  <li>Fast code completions & suggestions</li>
                  <li>Support for 70+ languages & frameworks</li>
                  <li>IDE integrations (VS Code, JetBrains, etc.)</li>
                  <li>Natural language code generation (Chat)</li>
                </ToolFeatures>
                <ToolPricing>
                  <strong>Pricing:</strong> Free for individuals, Team plans available
                </ToolPricing>
                <ToolActions>
                  <ToolButton href="https://codeium.com" target="_blank" rel="noopener noreferrer">
                    Visit Website
                  </ToolButton>
                </ToolActions>
              </ToolContent>
            </ToolCard>
            
            <ToolCard>
              <ToolHeader>
                <ToolTitle>CodeX</ToolTitle>
                <ToolDescription>
                  AI-powered cloud IDE focused on smart suggestions and language translation.
                </ToolDescription>
              </ToolHeader>
              <ToolContent>
                <ToolFeatures>
                  <li>AI code suggestions & completion</li>
                  <li>Code converter between languages</li>
                  <li>Context-aware AI chat assistant</li>
                  <li>Multi-language support</li>
                </ToolFeatures>
                <ToolPricing>
                  <strong>Pricing:</strong> (Information not readily available on site)
                </ToolPricing>
                <ToolActions>
                  <ToolButton href="https://x-codex.vercel.app/" target="_blank" rel="noopener noreferrer">
                    Visit Website
                  </ToolButton>
                </ToolActions>
              </ToolContent>
            </ToolCard>

            <ToolCard>
              <ToolHeader>
                <ToolTitle>ChatGPT (Code Assistance)</ToolTitle>
                <ToolDescription>
                  ChatGPT offers strong code generation, explanation, and debugging capabilities in multiple languages.
                </ToolDescription>
              </ToolHeader>
              <ToolContent>
                <ToolFeatures>
                  <li>Generate code from descriptions</li>
                  <li>Debug & improve existing code</li>
                  <li>Explain complex code snippets</li>
                  <li>Convert code between languages</li>
                </ToolFeatures>
                <ToolPricing>
                  <strong>Pricing:</strong> Free tier available, Plus subscription at $20/month
                </ToolPricing>
                <ToolActions>
                  <ToolButton href="https://chat.openai.com" target="_blank" rel="noopener noreferrer">
                    Visit Website
                  </ToolButton>
                </ToolActions>
              </ToolContent>
            </ToolCard>

            <ToolCard>
              <ToolHeader>
                <ToolTitle>Tabnine</ToolTitle>
                <ToolDescription>
                  AI coding assistant focusing on privacy and personalized suggestions trained on your codebase.
                </ToolDescription>
              </ToolHeader>
              <ToolContent>
                <ToolFeatures>
                  <li>Context-aware code completions</li>
                  <li>Local & private model options</li>
                  <li>Multiple IDE integrations</li>
                  <li>Team knowledge sharing</li>
                </ToolFeatures>
                <ToolPricing>
                  <strong>Pricing:</strong> Free tier available, Pro at $12/month
                </ToolPricing>
                <ToolActions>
                  <ToolButton href="https://www.tabnine.com" target="_blank" rel="noopener noreferrer">
                    Visit Website
                  </ToolButton>
                </ToolActions>
              </ToolContent>
            </ToolCard>
          </ToolsGrid>
        </ContentSection>

        <TipBox>
          <TipTitle>Tips for Using AI Code Assistants Effectively</TipTitle>
          <p>
            AI coding tools work best when you provide clear context. Start with comments explaining what you're 
            trying to accomplish, and review generated code carefully before using it in production. Always test 
            AI-generated code thoroughly, as AI might create code that looks correct but contains subtle bugs or security issues.
          </p>
        </TipBox>

        <ContentSection>
          <SectionTitle>What AI Code Assistants Can Help With</SectionTitle>
          
          <h3>Code Generation</h3>
          <p>
            AI can quickly generate boilerplate code, standard functions, and even complex algorithms based on your descriptions.
            This reduces the time spent on repetitive coding tasks and lets you focus on the unique aspects of your project.
          </p>
          
          <CodeExample>
            <CodeComment>// Example: Generating a function with ChatGPT or GitHub Copilot</CodeComment><br/>
            <CodeComment>// Write a function that sorts an array of objects by a specific property</CodeComment><br/><br/>
            function sortArrayByProperty(array, property, direction = 'ascending') {`{`}<br/>
            &nbsp;&nbsp;return [...array].sort((a, b) =&gt; {`{`}<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;if (direction === 'ascending') {`{`}<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return a[property] &gt; b[property] ? 1 : -1;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;{`}`} else {`{`}<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return a[property] &lt; b[property] ? 1 : -1;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;{`}`}<br/>
            &nbsp;&nbsp;{`}`});<br/>
            {`}`}
          </CodeExample>
          
          <h3>Code Debugging & Optimization</h3>
          <p>
            AI assistants can help identify bugs in your code, suggest fixes, and recommend optimizations
            to improve performance, readability, or maintainability.
          </p>
          
          <h3>Learning & Understanding Code</h3>
          <p>
            For students and developers learning new languages or frameworks, AI tools can explain
            code snippets, provide context for unfamiliar functions, and even generate documentation.
          </p>
          
          <h3>Refactoring & Code Transformation</h3>
          <p>
            Need to convert a function to use a different pattern or update to a newer syntax?
            AI assistants can help refactor existing code while maintaining its functionality.
          </p>
        </ContentSection>

        <ContentSection>
          <SectionTitle>Choosing the Right AI Code Assistant</SectionTitle>
          
          <h3>For Professional Developers</h3>
          <p>
            If you're working on production code in a professional setting, tools like GitHub Copilot
            or Codeium that integrate directly with your IDE will likely be most efficient. Consider
            factors like privacy, security, and team collaboration features.
          </p>
          
          <h3>For Students & Learners</h3>
          <p>
            If you're learning to code, conversational tools like ChatGPT might be better as they can
            explain concepts alongside generating code. Replit's Ghostwriter is also excellent for
            beginners as it requires no setup and provides an all-in-one coding environment.
          </p>
          
          <h3>For Specialized Development</h3>
          <p>
            Consider domain-specific tools if you work in specialized areas like data science,
            machine learning, or web development, as they may offer more targeted assistance
            for your specific tasks.
          </p>
        </ContentSection>

        <ContentSection>
          <SectionTitle>Limitations to Keep in Mind</SectionTitle>
          <p>
            While powerful, AI code assistants have important limitations you should be aware of:
          </p>
          <ul>
            <li><strong>They're not perfect:</strong> AI can generate code with bugs, security flaws, or performance issues.</li>
            <li><strong>Knowledge cutoffs:</strong> Many AI models have knowledge cutoffs and may not be familiar with the latest libraries, frameworks, or best practices.</li>
            <li><strong>Context limitations:</strong> AI doesn't fully understand your entire codebase or specific requirements unless explicitly provided.</li>
            <li><strong>Security considerations:</strong> Be cautious when using AI-generated code in security-sensitive applications without thorough review.</li>
            <li><strong>Dependencies:</strong> AI might suggest dependencies or approaches that aren't appropriate for your specific constraints.</li>
          </ul>
        </ContentSection>
      </Container>
    </MainLayout>
  );
};

export default AICodeAssistantsPage; 