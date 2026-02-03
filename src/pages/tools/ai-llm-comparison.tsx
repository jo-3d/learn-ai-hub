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

const ModelGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const ModelCard = styled.div`
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

const ModelHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid #eee;
`;

const ModelTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  color: #2A7DE1;
`;

const ModelCompany = styled.div`
  font-size: 0.9rem;
  color: #5E42BC;
  font-weight: 500;
  margin-bottom: 0.75rem;
`;

const ModelDescription = styled.p`
  color: #4A4F5C;
  font-size: 1rem;
  line-height: 1.5;
`;

const ModelContent = styled.div`
  padding: 1.5rem;
`;

const ModelFeatures = styled.ul`
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

const ModelSpecs = styled.div`
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 6px;
  margin-top: 1rem;
  font-size: 0.9rem;
`;

const ModelActions = styled.div`
  display: flex;
  margin-top: 1.5rem;
  gap: 1rem;
`;

const ModelButton = styled.a`
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

const SecondaryButton = styled(ModelButton)`
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

const ComparisonTable = styled.div`
  overflow-x: auto;
  margin: 2rem 0;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 0.75rem 1rem;
    text-align: left;
    border-bottom: 1px solid #eee;
  }
  
  th {
    background-color: #f8f9fa;
    font-weight: 600;
  }
  
  tr:nth-child(even) {
    background-color: #fcfcfc;
  }
`;

const Badge = styled.span<{ color?: string; textColor?: string }>`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background: ${props => props.color || '#e9ecef'};
  color: ${props => props.textColor || '#212529'};
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
  margin-right: 0.5rem;
  margin-bottom: 0.25rem;
`;

const AILLMComparisonPage = () => {
  return (
    <MainLayout>
      <HeroSection>
        <Container>
          <Title>AI Language Model Comparison</Title>
          <Description>
            Explore the landscape of Large Language Models (LLMs) from established players to emerging contenders.
            Compare features, capabilities, and use cases to find the right AI model for your needs.
          </Description>
        </Container>
      </HeroSection>

      <Container>
        <ContentSection>
          <SectionTitle>Established LLM Leaders</SectionTitle>
          <ModelGrid>
            <ModelCard>
              <ModelHeader>
                <ModelCompany>OpenAI</ModelCompany>
                <ModelTitle>GPT-4o</ModelTitle>
                <ModelDescription>
                  OpenAI's most advanced multimodal model with enhanced capabilities for vision, voice, and text, featuring improved reasoning and real-time information access.
                </ModelDescription>
              </ModelHeader>
              <ModelContent>
                <ModelFeatures>
                  <li>Seamless voice, vision, and text processing</li>
                  <li>Superior reasoning and instruction following</li>
                  <li>Enhanced knowledge and factual accuracy</li>
                  <li>Improved coding and mathematical abilities</li>
                </ModelFeatures>
                <ModelSpecs>
                  <div><strong>Context Length:</strong> 128,000 tokens</div>
                  <div><strong>Multimodal:</strong> Yes (vision, voice)</div>
                </ModelSpecs>
                <ModelActions>
                  <ModelButton href="https://openai.com/gpt-4o" target="_blank" rel="noopener noreferrer">
                    Official Site
                  </ModelButton>
                  <SecondaryButton href="https://chat.openai.com" target="_blank" rel="noopener noreferrer">
                    Try in ChatGPT
                  </SecondaryButton>
                </ModelActions>
              </ModelContent>
            </ModelCard>

            <ModelCard>
              <ModelHeader>
                <ModelCompany>Anthropic</ModelCompany>
                <ModelTitle>Claude 3.5 Sonnet</ModelTitle>
                <ModelDescription>
                  Anthropic's latest and most intelligent model (as of mid-2024), excelling in reasoning, coding, and vision tasks, balancing speed and cost effectively.
                </ModelDescription>
              </ModelHeader>
              <ModelContent>
                <ModelFeatures>
                  <li>Top-tier intelligence for complex tasks</li>
                  <li>Strong performance in coding and math</li>
                  <li>Advanced vision capabilities</li>
                  <li>Introduction of "Artifacts" feature for interactive content</li>
                  <li>Significant speed improvements over Opus</li>
                </ModelFeatures>
                <ModelSpecs>
                  <div><strong>Context Length:</strong> 200,000 tokens</div>
                  <div><strong>Multimodal:</strong> Yes (vision)</div>
                </ModelSpecs>
                <ModelActions>
                  <ModelButton href="https://www.anthropic.com/claude" target="_blank" rel="noopener noreferrer">
                    Official Site
                  </ModelButton>
                  <SecondaryButton href="https://claude.ai" target="_blank" rel="noopener noreferrer">
                    Try Claude
                  </SecondaryButton>
                </ModelActions>
              </ModelContent>
            </ModelCard>

            <ModelCard>
              <ModelHeader>
                <ModelCompany>Google</ModelCompany>
                <ModelTitle>Gemini 2.5 Pro</ModelTitle>
                <ModelDescription>
                  Google's latest highly capable multimodal model offering a massive context window, enhanced reasoning, and strong performance across modalities.
                </ModelDescription>
              </ModelHeader>
              <ModelContent>
                <ModelFeatures>
                  <li>1 million token standard context window (up to 2M experimental)</li>
                  <li>Strong integration with Google services and real-time search</li>
                  <li>Advanced reasoning and problem-solving capabilities</li>
                  <li>Multimodal understanding (text, images, audio, video)</li>
                  <li>Enhanced coding and mathematical abilities</li>
                </ModelFeatures>
                <ModelSpecs>
                  <div><strong>Context Length:</strong> 1 million tokens</div>
                  <div><strong>Multimodal:</strong> Yes (vision, audio, video)</div>
                </ModelSpecs>
                <ModelActions>
                  <ModelButton href="https://gemini.google.com" target="_blank" rel="noopener noreferrer">
                    Official Site
                  </ModelButton>
                  <SecondaryButton href="https://gemini.google.com/app" target="_blank" rel="noopener noreferrer">
                    Try Gemini
                  </SecondaryButton>
                </ModelActions>
              </ModelContent>
            </ModelCard>
          </ModelGrid>
        </ContentSection>

        <TipBox>
          <TipTitle>Choosing the Right Model</TipTitle>
          <p>
            When selecting an LLM for your needs, consider more than just the model's capabilities. Think about specific features like context length, 
            specialized knowledge domains, pricing structure, and how you plan to access the model (API, chat interface, etc.). 
            For specialized tasks, sometimes a domain-specific model outperforms general models.
          </p>
        </TipBox>

        <ContentSection>
          <SectionTitle>Emerging Contenders</SectionTitle>
          <ModelGrid>
            <ModelCard>
              <ModelHeader>
                <ModelCompany>xAI</ModelCompany>
                <ModelTitle>Grok 3</ModelTitle>
                <ModelDescription>
                  xAI's latest flagship model focused on advanced reasoning, real-time knowledge via DeepSearch, and a distinct personality, available in multiple variants.
                </ModelDescription>
              </ModelHeader>
              <ModelContent>
                <ModelFeatures>
                  <li>Real-time web & X browsing via DeepSearch mode</li>
                  <li>Advanced reasoning with "Think" & "Big Brain" modes</li>
                  <li>Integrated voice mode (coming soon)</li>
                  <li>Strong performance on technical & reasoning tasks</li>
                  <li>Includes Grok 3 mini (faster) & Reasoning models</li>
                </ModelFeatures>
                <ModelSpecs>
                  <div><strong>Context Length:</strong> 128,000 tokens</div>
                  <div><strong>Multimodal:</strong> Yes (vision, voice planned)</div>
                </ModelSpecs>
                <ModelActions>
                  <ModelButton href="https://x.ai" target="_blank" rel="noopener noreferrer">
                    Official Site
                  </ModelButton>
                  <SecondaryButton href="https://grok.x.ai" target="_blank" rel="noopener noreferrer">
                    Try Grok
                  </SecondaryButton>
                </ModelActions>
              </ModelContent>
            </ModelCard>

            <ModelCard>
              <ModelHeader>
                <ModelCompany>Meta</ModelCompany>
                <ModelTitle>Llama 3</ModelTitle>
                <ModelDescription>
                  Meta's state-of-the-art open-source language model, available in multiple sizes, balancing performance with accessibility. Larger versions are in training.
                </ModelDescription>
              </ModelHeader>
              <ModelContent>
                <ModelFeatures>
                  <li>Open-weights model with commercial use rights</li>
                  <li>Released sizes: 8B and 70B (400B+ planned)</li>
                  <li>Strong performance across various benchmarks</li>
                  <li>Community-driven improvement and fine-tuning</li>
                </ModelFeatures>
                <ModelSpecs>
                  <div><strong>Context Length:</strong> 8,000 tokens (larger planned)</div>
                  <div><strong>Multimodal:</strong> Limited (Vision planned/in dev)</div>
                </ModelSpecs>
                <ModelActions>
                  <ModelButton href="https://ai.meta.com/llama/" target="_blank" rel="noopener noreferrer">
                    Official Site
                  </ModelButton>
                  <SecondaryButton href="https://llama.meta.com/get-started" target="_blank" rel="noopener noreferrer">
                    Get Started
                  </SecondaryButton>
                </ModelActions>
              </ModelContent>
            </ModelCard>

            <ModelCard>
              <ModelHeader>
                <ModelCompany>DeepSeek</ModelCompany>
                <ModelTitle>DeepSeek V2</ModelTitle>
                <ModelDescription>
                  An efficient Mixture-of-Experts open-weight model with impressive performance on technical and scientific tasks.
                </ModelDescription>
              </ModelHeader>
              <ModelContent>
                <ModelFeatures>
                  <li>Strong performance on coding and math tasks</li>
                  <li>Scientific and technical knowledge focus</li>
                  <li>Open-weights for research and development</li>
                  <li>Mixture-of-Experts (MoE) architecture</li>
                </ModelFeatures>
                <ModelSpecs>
                  <div><strong>Context Length:</strong> 128,000 tokens</div>
                  <div><strong>Multimodal:</strong> Limited (code-focused)</div>
                </ModelSpecs>
                <ModelActions>
                  <ModelButton href="https://www.deepseek.com" target="_blank" rel="noopener noreferrer">
                    Official Site
                  </ModelButton>
                  <SecondaryButton href="https://github.com/deepseek-ai" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </SecondaryButton>
                </ModelActions>
              </ModelContent>
            </ModelCard>

            <ModelCard>
              <ModelHeader>
                <ModelCompany>Mistral AI</ModelCompany>
                <ModelTitle>Mistral Large</ModelTitle>
                <ModelDescription>
                  European-based LLM focused on efficiency, multilingual capability, and privacy compliance with enhanced performance.
                </ModelDescription>
              </ModelHeader>
              <ModelContent>
                <ModelFeatures>
                  <li>Strong multilingual performance</li>
                  <li>Excellent instruction following</li>
                  <li>GDPR compliance and EU data centers</li>
                  <li>Open-weights options available</li>
                </ModelFeatures>
                <ModelSpecs>
                  <div><strong>Context Length:</strong> 32,000 tokens</div>
                  <div><strong>Multimodal:</strong> Limited (varies by version)</div>
                </ModelSpecs>
                <ModelActions>
                  <ModelButton href="https://mistral.ai" target="_blank" rel="noopener noreferrer">
                    Official Site
                  </ModelButton>
                  <SecondaryButton href="https://chat.mistral.ai" target="_blank" rel="noopener noreferrer">
                    Try Le Chat
                  </SecondaryButton>
                </ModelActions>
              </ModelContent>
            </ModelCard>

            <ModelCard>
              <ModelHeader>
                <ModelCompany>Cohere</ModelCompany>
                <ModelTitle>Command R+</ModelTitle>
                <ModelDescription>
                  Business-focused LLM specialized in enterprise use cases with strong retrieval capabilities and enhanced performance.
                </ModelDescription>
              </ModelHeader>
              <ModelContent>
                <ModelFeatures>
                  <li>Retrieval-augmented generation (RAG)</li>
                  <li>Enterprise-grade data security</li>
                  <li>Custom knowledge integration</li>
                  <li>Multilingual support</li>
                </ModelFeatures>
                <ModelSpecs>
                  <div><strong>Context Length:</strong> 128,000 tokens</div>
                  <div><strong>Multimodal:</strong> No (text-focused)</div>
                </ModelSpecs>
                <ModelActions>
                  <ModelButton href="https://cohere.com" target="_blank" rel="noopener noreferrer">
                    Official Site
                  </ModelButton>
                  <SecondaryButton href="https://dashboard.cohere.com" target="_blank" rel="noopener noreferrer">
                    Try Cohere
                  </SecondaryButton>
                </ModelActions>
              </ModelContent>
            </ModelCard>

            <ModelCard>
              <ModelHeader>
                <ModelCompany>Anthropic</ModelCompany>
                <ModelTitle>Claude 3 Haiku</ModelTitle>
                <ModelDescription>
                  Fast, efficient version of Claude designed for lightweight applications and rapid responses.
                </ModelDescription>
              </ModelHeader>
              <ModelContent>
                <ModelFeatures>
                  <li>Very fast response times</li>
                  <li>Lower computational cost</li>
                  <li>Good balance of capabilities and efficiency</li>
                  <li>Ideal for customer service applications</li>
                </ModelFeatures>
                <ModelSpecs>
                  <div><strong>Context Length:</strong> 200,000 tokens</div>
                  <div><strong>Multimodal:</strong> Yes (vision)</div>
                </ModelSpecs>
                <ModelActions>
                  <ModelButton href="https://www.anthropic.com/claude" target="_blank" rel="noopener noreferrer">
                    Official Site
                  </ModelButton>
                  <SecondaryButton href="https://claude.ai" target="_blank" rel="noopener noreferrer">
                    Try Claude
                  </SecondaryButton>
                </ModelActions>
              </ModelContent>
            </ModelCard>
          </ModelGrid>
        </ContentSection>

        <ContentSection>
          <SectionTitle>Feature Comparison</SectionTitle>
          <ComparisonTable>
            <Table>
              <thead>
                <tr>
                  <th>Model</th>
                  <th>Context Length</th>
                  <th>Multimodal</th>
                  <th>API Access</th>
                  <th>Free Tier</th>
                  <th>Open Weights</th>
                  <th>Notable Strengths</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>GPT-4o</td>
                  <td>128,000</td>
                  <td>✅ Vision, Voice</td>
                  <td>✅</td>
                  <td>✅ Limited</td>
                  <td>❌</td>
                  <td>
                    <Badge color="#e9f5ff" textColor="#0969da">General Purpose</Badge>
                    <Badge color="#fff1e5" textColor="#bc4c00">Creative</Badge>
                  </td>
                </tr>
                <tr>
                  <td>Claude 3.5 Sonnet</td>
                  <td>200,000</td>
                  <td>✅ Vision</td>
                  <td>✅</td>
                  <td>✅ Limited</td>
                  <td>❌</td>
                  <td>
                    <Badge color="#ecf4e8" textColor="#1a7f37">Intelligence</Badge>
                    <Badge color="#f6f8fa" textColor="#24292f">Reasoning</Badge>
                    <Badge color="#ddf4ff" textColor="#0969da">Vision</Badge>
                  </td>
                </tr>
                <tr>
                  <td>Gemini 2.5 Pro</td>
                  <td>1,000,000</td>
                  <td>✅ Vision, Audio, Video</td>
                  <td>✅</td>
                  <td>✅ Limited</td>
                  <td>❌</td>
                  <td>
                    <Badge color="#fff8c5" textColor="#9a6700">Large Context</Badge>
                    <Badge color="#ffeff7" textColor="#bf3989">Google Integration</Badge>
                  </td>
                </tr>
                <tr>
                  <td>Grok 3</td>
                  <td>128,000</td>
                  <td>✅ Vision, Voice Planned</td>
                  <td>✅ Via API (soon)</td>
                  <td>✅ With X Premium+/SuperGrok</td>
                  <td>❌</td>
                  <td>
                    <Badge color="#fff8c5" textColor="#9a6700">Real-time Knowledge</Badge>
                    <Badge color="#f6f8fa" textColor="#24292f">Reasoning</Badge>
                  </td>
                </tr>
                <tr>
                  <td>Llama 3</td>
                  <td>8,000+</td>
                  <td>⚠️ Planned</td>
                  <td>✅ Via Partners</td>
                  <td>N/A (Self-host)</td>
                  <td>✅</td>
                  <td>
                    <Badge color="#e5ddf6" textColor="#6c3cc7">Open Source</Badge>
                    <Badge color="#f6f8fa" textColor="#24292f">Local Deployment</Badge>
                  </td>
                </tr>
                <tr>
                  <td>DeepSeek V2</td>
                  <td>128,000</td>
                  <td>⚠️ Code Focus</td>
                  <td>✅ Limited</td>
                  <td>N/A (Self-host)</td>
                  <td>✅</td>
                  <td>
                    <Badge color="#ddf4ff" textColor="#0969da">Coding</Badge>
                    <Badge color="#ecf4e8" textColor="#1a7f37">Scientific Tasks</Badge>
                  </td>
                </tr>
                <tr>
                  <td>Mistral Large</td>
                  <td>32,000</td>
                  <td>❌</td>
                  <td>✅</td>
                  <td>✅ Via Le Chat</td>
                  <td>⚠️ Some Versions</td>
                  <td>
                    <Badge color="#f6f8fa" textColor="#24292f">Multilingual</Badge>
                    <Badge color="#e5ddf6" textColor="#6c3cc7">EU Compliance</Badge>
                  </td>
                </tr>
                <tr>
                  <td>Command R+</td>
                  <td>128,000</td>
                  <td>❌</td>
                  <td>✅</td>
                  <td>✅ Limited</td>
                  <td>❌</td>
                  <td>
                    <Badge color="#ffeff7" textColor="#bf3989">RAG</Badge>
                    <Badge color="#f6f8fa" textColor="#24292f">Enterprise Focus</Badge>
                  </td>
                </tr>
              </tbody>
            </Table>
          </ComparisonTable>
        </ContentSection>

        <ContentSection>
          <SectionTitle>Choosing the Right LLM for Your Needs</SectionTitle>
          
          <h3>For General Purpose Use</h3>
          <p>
            If you need a versatile, all-around assistant for various tasks, models like GPT-4o, Claude 3, and Gemini offer 
            the best balance of capabilities. They excel at understanding context, following instructions, and generating 
            high-quality responses across diverse domains.
          </p>
          
          <h3>For Developers & Technical Applications</h3>
          <p>
            Developers might prefer DeepSeek V2 or Llama 3 for coding tasks, as these models can be self-hosted and 
            have demonstrated strong performance in technical domains. GitHub Copilot (based on OpenAI models) remains 
            a strong choice for direct IDE integration.
          </p>
          
          <h3>For Privacy & Data Sovereignty</h3>
          <p>
            Organizations with strict data sovereignty requirements should consider Mistral AI (EU-based) or 
            open-source models like Llama 3 that can be deployed locally, ensuring data never leaves your infrastructure.
          </p>
          
          <h3>For Enterprise & Knowledge Management</h3>
          <p>
            Businesses looking to build on their proprietary knowledge should explore models with strong retrieval capabilities 
            like Cohere Command R+ or systems that integrate well with document management systems like Claude 3 Opus with its 
            extensive context window.
          </p>
        </ContentSection>

        <TipBox>
          <TipTitle>LLM Selection Tip</TipTitle>
          <p>
            Rather than focusing solely on benchmark performance, consider the practical aspects of each model for your use case.
            Test multiple models with your specific tasks, evaluate their API reliability, pricing structure, and support options.
            For many applications, a specialized model or a fine-tuned version of a smaller model may outperform a general-purpose larger model.
          </p>
        </TipBox>
      </Container>
    </MainLayout>
  );
};

export default AILLMComparisonPage; 