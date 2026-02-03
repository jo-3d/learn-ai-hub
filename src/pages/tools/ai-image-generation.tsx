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

const ImageExampleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;

const ImageExample = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
`;

const ImageCaption = styled.div`
  padding: 0.75rem;
  background: white;
  font-size: 0.9rem;
`;

const AIImageGenerationPage = () => {
  return (
    <MainLayout>
      <HeroSection>
        <Container>
          <Title>AI Image Generation</Title>
          <Description>
            Explore the exciting world of AI image generators that can create stunning visuals from text descriptions.
            Turn your ideas into artwork, realistic photos, logos, and more with these powerful text-to-image tools.
          </Description>
        </Container>
      </HeroSection>

      <Container>
        <ContentSection>
          <SectionTitle>Leading AI Image Generation Tools</SectionTitle>
          <ToolsGrid>
            <ToolCard>
              <ToolHeader>
                <ToolTitle>ChatGPT Image Generation</ToolTitle>
                <ToolDescription>
                  Generate images directly within the ChatGPT interface, leveraging GPT-4o's understanding and DALL-E 3's generation capabilities.
                </ToolDescription>
              </ToolHeader>
              <ToolContent>
                <ToolFeatures>
                  <li>Conversational image creation and refinement</li>
                  <li>Leverages GPT-4o's advanced understanding</li>
                  <li>Excellent at following detailed prompts</li>
                  <li>Free tier available with usage limits</li>
                </ToolFeatures>
                <ToolPricing>
                  <div><strong>Technology:</strong> GPT-4o + DALL-E 3</div>
                  <div><strong>Access:</strong> Free (limited) & Paid Tiers (ChatGPT Plus/Team)</div>
                </ToolPricing>
                <ToolActions>
                  <ToolButton href="https://chat.openai.com" target="_blank" rel="noopener noreferrer">
                    Try ChatGPT
                  </ToolButton>
                  <SecondaryButton href="https://openai.com/dall-e-3" target="_blank" rel="noopener noreferrer">
                    About DALL-E 3 Tech
                  </SecondaryButton>
                </ToolActions>
              </ToolContent>
            </ToolCard>
            
            <ToolCard>
              <ToolHeader>
                <ToolTitle>Midjourney</ToolTitle>
                <ToolDescription>
                  Discord-based AI art generator known for beautiful, artistic results with a distinctive aesthetic. Now using V6.1.
                </ToolDescription>
              </ToolHeader>
              <ToolContent>
                <ToolFeatures>
                  <li>Highly artistic and stylized outputs (V6.1)</li>
                  <li>Strong community support via Discord</li>
                  <li>Features like Vary Region, Style/Character Reference</li>
                  <li>Multiple generation modes (Relax, Fast, Turbo)</li>
                </ToolFeatures>
                <ToolPricing>
                  <div><strong>Type:</strong> Text-to-Image, Image-to-Image</div>
                  <div><strong>Access:</strong> Discord (Paid Subscription Required)</div>
                </ToolPricing>
                <ToolActions>
                  <ToolButton href="https://www.midjourney.com" target="_blank" rel="noopener noreferrer">
                    Official Site
                  </ToolButton>
                  <SecondaryButton href="https://discord.com/invite/midjourney" target="_blank" rel="noopener noreferrer">
                    Join Discord
                  </SecondaryButton>
                </ToolActions>
              </ToolContent>
            </ToolCard>

            <ToolCard>
              <ToolHeader>
                <ToolTitle>Stable Diffusion</ToolTitle>
                <ToolDescription>
                  Open-source AI image generator with numerous interfaces, models, and customization options.
                </ToolDescription>
              </ToolHeader>
              <ToolContent>
                <ToolFeatures>
                  <li>Highly customizable with many models (SDXL, etc.)</li>
                  <li>Can run locally on your computer (requires setup)</li>
                  <li>Strong community & continuous development</li>
                  <li>Available via many web interfaces (e.g., DreamStudio)</li>
                </ToolFeatures>
                <ToolPricing>
                  <div><strong>Type:</strong> Text-to-Image, Image-to-Image, ControlNet</div>
                  <div><strong>Access:</strong> Free (open-source), Paid interfaces/APIs</div>
                </ToolPricing>
                <ToolActions>
                  <ToolButton href="https://stability.ai/" target="_blank" rel="noopener noreferrer">
                    Visit Stability AI
                  </ToolButton>
                  <SecondaryButton href="/tutorials/stable-diffusion-guide" target="_blank">
                    Learn More
                  </SecondaryButton>
                </ToolActions>
              </ToolContent>
            </ToolCard>

            <ToolCard>
              <ToolHeader>
                <ToolTitle>Adobe Firefly</ToolTitle>
                <ToolDescription>
                  Adobe's AI image generator designed for commercial use and integrated with Creative Cloud apps.
                </ToolDescription>
              </ToolHeader>
              <ToolContent>
                <ToolFeatures>
                  <li>Trained on Adobe Stock; designed for commercial safety</li>
                  <li>Integration with Photoshop, Express, Illustrator</li>
                  <li>Features like Generative Fill, Text to Vector</li>
                  <li>Focuses on creative workflows</li>
                </ToolFeatures>
                <ToolPricing>
                  <div><strong>Type:</strong> Text-to-Image, Generative Fill, Effects</div>
                  <div><strong>Access:</strong> Free tier (credits), Creative Cloud plans</div>
                </ToolPricing>
                <ToolActions>
                  <ToolButton href="https://firefly.adobe.com" target="_blank" rel="noopener noreferrer">
                    Visit Firefly
                  </ToolButton>
                  <SecondaryButton href="https://www.adobe.com/sensei/generative-ai/firefly.html" target="_blank" rel="noopener noreferrer">
                    Learn More
                  </SecondaryButton>
                </ToolActions>
              </ToolContent>
            </ToolCard>

            {/* Add Google Imagen Card */}
            <ToolCard>
              <ToolHeader>
                <ToolTitle>Google Imagen 3 (via Vertex AI)</ToolTitle>
                <ToolDescription>
                  Google's latest high-quality text-to-image model, excelling in photorealism, prompt understanding, and text rendering.
                </ToolDescription>
              </ToolHeader>
              <ToolContent>
                <ToolFeatures>
                  <li>Excellent photorealism and detail</li>
                  <li>Improved prompt adherence (Imagen 3)</li>
                  <li>Good text rendering within images</li>
                  <li>Accessible via Google Cloud Platform (Vertex AI)</li>
                  <li>Includes editing features (inpainting, etc.)</li>
                </ToolFeatures>
                <ToolPricing>
                  <div><strong>Model:</strong> Imagen 3</div>
                  <div><strong>Access:</strong> Google Cloud (Vertex AI - Free credits/Paid)</div>
                </ToolPricing>
                <ToolActions>
                  <ToolButton href="https://cloud.google.com/vertex-ai/docs/generative-ai/image/overview" target="_blank" rel="noopener noreferrer">
                    Vertex AI Docs
                  </ToolButton>
                  <SecondaryButton href="https://cloud.google.com/use-cases/text-to-image-ai" target="_blank" rel="noopener noreferrer">
                    Learn More
                  </SecondaryButton>
                </ToolActions>
              </ToolContent>
            </ToolCard>
            
            {/* Add FLUX.1 Card */}
            <ToolCard>
              <ToolHeader>
                <ToolTitle>FLUX.1</ToolTitle>
                <ToolDescription>
                  Advanced open-weight text-to-image model series from Black Forest Labs, rivaling closed-source competitors.
                </ToolDescription>
              </ToolHeader>
              <ToolContent>
                <ToolFeatures>
                  <li>Multiple variants (Pro, Dev, Schnell) for different needs</li>
                  <li>Excellent prompt adherence and visual quality</li>
                  <li>Open-weight options available (Dev, Schnell)</li>
                  <li>Offers FLUX.1 Tools for advanced editing/control</li>
                </ToolFeatures>
                <ToolPricing>
                  <div><strong>Type:</strong> Text-to-Image, Control Tools</div>
                  <div><strong>Access:</strong> API, Hugging Face (Dev), Partners</div>
                </ToolPricing>
                <ToolActions>
                  <ToolButton href="https://blackforestlabs.ai/" target="_blank" rel="noopener noreferrer">
                    Official Site
                  </ToolButton>
                  <SecondaryButton href="https://huggingface.co/black-forest-labs" target="_blank" rel="noopener noreferrer">
                    Hugging Face
                  </SecondaryButton>
                </ToolActions>
              </ToolContent>
            </ToolCard>
          </ToolsGrid>
        </ContentSection>

        <TipBox>
          <TipTitle>Tips for Better AI Image Prompts</TipTitle>
          <p>
            Prompt writing is essential for getting good results from AI image generators. Be specific about style, 
            lighting, composition, and subject details. For example, instead of "a cat," try "a fluffy orange tabby 
            cat sitting on a windowsill at sunset, soft lighting, studio ghibli style, detailed fur."
            For more detailed information, check our <Link href="/articles/understanding-ai-image-generators" style={{ color: '#5E42BC', textDecoration: 'underline' }}>guide to AI image generators</Link>.
          </p>
        </TipBox>

        <ContentSection>
          <SectionTitle>Common Uses for AI Image Generation</SectionTitle>
          
          <h3>Digital Art & Illustration</h3>
          <p>
            Create stunning digital artwork in various styles, from photorealistic to stylized illustrations,
            concept art, character designs, and imaginative scenes that would be time-consuming to create manually.
          </p>
          
          <h3>Marketing & Social Media</h3>
          <p>
            Generate eye-catching social media graphics, blog post headers, advertisements, 
            and marketing materials quickly and at a fraction of traditional design costs.
          </p>
          
          <h3>Product Visualization</h3>
          <p>
            Visualize product concepts, create mockups, and generate images of products in various settings
            or contexts without expensive photo shoots or 3D modeling.
          </p>
          
          <h3>Logo & Brand Elements</h3>
          <p>
            Create initial concepts for logos, icons, and brand elements that can serve as inspiration
            or starting points for finalized designs with proper refinement.
          </p>
        </ContentSection>

        <ContentSection>
          <SectionTitle>Understanding Limitations</SectionTitle>
          <p>
            While AI image generators are powerful, they have important limitations to keep in mind:
          </p>
          <ul>
            <li><strong>Copyright & Commercial Use:</strong> Check each platform's terms about commercial usage rights.</li>
            <li><strong>Accuracy:</strong> AI may struggle with specific details like correct text, proper anatomy, or consistent elements.</li>
            <li><strong>Bias:</strong> AI models reflect biases in their training data, which may appear in generated images.</li>
            <li><strong>Ethical Considerations:</strong> Be mindful about generating images of real people or potentially harmful content.</li>
          </ul>
        </ContentSection>
      </Container>
    </MainLayout>
  );
};

export default AIImageGenerationPage; 