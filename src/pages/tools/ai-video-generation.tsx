import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import MainLayout from '../../layouts/MainLayout';

// Reusing styled components from other tool pages for consistency
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
  display: flex;
  flex-direction: column;
  
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
  flex-grow: 1; // Ensure content pushes actions down
  display: flex;
  flex-direction: column;
`;

const ToolFeatures = styled.ul`
  margin: 1rem 0;
  padding-left: 1rem;
  flex-grow: 1; // Ensure features take available space
  
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
  margin-top: 1.5rem; // Ensure consistent spacing
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

// Main Page Component
const AIVideoGenerationPage = () => {
  return (
    <MainLayout>
      <HeroSection>
        <Container>
          <Title>AI Video & Audio Generation</Title>
          <Description>
            Explore leading AI tools for creating dynamic videos and lifelike audio content. From text-to-video generation to voice synthesis and music creation, discover the cutting-edge technologies transforming media production.
          </Description>
        </Container>
      </HeroSection>

      <Container>
        <ContentSection>
          <SectionTitle>Video Generation Leaders</SectionTitle>
          <ToolsGrid>

            {/* Runway Gen-3 Alpha Card */}
            <ToolCard>
              <ToolHeader>
                <ToolTitle>Runway Gen-3 Alpha</ToolTitle>
                <ToolDescription>
                  Runway's next-generation foundation model for video, trained on large-scale multimodal data for improved fidelity and consistency.
                </ToolDescription>
              </ToolHeader>
              <ToolContent>
                <ToolFeatures>
                  <li>Powers Text-to-Video, Image-to-Video</li>
                  <li>Improved fidelity, consistency, and motion</li>
                  <li>Supports control modes (Motion Brush, Camera Controls)</li>
                  <li>Generates expressive human characters</li>
                  <li>Industry customization options available</li>
                </ToolFeatures>
                <ToolPricing>
                  <div><strong>Type:</strong> Text-to-Video, Image-to-Video</div>
                  <div><strong>Resolution:</strong> High (e.g., 720p+)</div>
                  <div><strong>Access:</strong> Runway Platform (Web/Mobile)</div>
                </ToolPricing>
                <ToolActions>
                  <ToolButton href="https://runwayml.com/" target="_blank" rel="noopener noreferrer">
                    Official Site
                  </ToolButton>
                  <SecondaryButton href="https://app.runwayml.com/" target="_blank" rel="noopener noreferrer">
                    Try Runway
                  </SecondaryButton>
                </ToolActions>
              </ToolContent>
            </ToolCard>

            {/* Luma Dream Machine Card */}
            <ToolCard>
              <ToolHeader>
                <ToolTitle>Luma Dream Machine (Ray2)</ToolTitle>
                <ToolDescription>
                  Scalable and efficient transformer model (Ray2) for generating high-quality, realistic videos from text and images via the Dream Machine platform.
                </ToolDescription>
              </ToolHeader>
              <ToolContent>
                <ToolFeatures>
                  <li>Text-to-Video and Image-to-Video</li>
                  <li>Physically accurate and consistent motion</li>
                  <li>Supports Keyframes, Extend, Looping</li>
                  <li>Cinematic camera motion control</li>
                  <li>Fast generation times</li>
                </ToolFeatures>
                <ToolPricing>
                  <div><strong>Model:</strong> Ray2</div>
                  <div><strong>Resolution:</strong> Up to 1080p</div>
                  <div><strong>Access:</strong> Dream Machine Web/iOS, API</div>
                </ToolPricing>
                <ToolActions>
                  <ToolButton href="https://lumalabs.ai/dream-machine" target="_blank" rel="noopener noreferrer">
                    Official Site
                  </ToolButton>
                  <SecondaryButton href="https://lumalabs.ai/dream-machine" target="_blank" rel="noopener noreferrer">
                    Try Dream Machine
                  </SecondaryButton>
                </ToolActions>
              </ToolContent>
            </ToolCard>

            {/* OpenAI Sora Card */}
            <ToolCard>
              <ToolHeader>
                <ToolTitle>OpenAI Sora</ToolTitle>
                <ToolDescription>
                  OpenAI's highly capable text-to-video model able to generate complex, longer scenes with multiple characters, specific motion, and accurate details.
                </ToolDescription>
              </ToolHeader>
              <ToolContent>
                <ToolFeatures>
                  <li>Generates video up to a minute long</li>
                  <li>Maintains visual quality and prompt adherence</li>
                  <li>Can create complex camera motion</li>
                  <li>Simulates physical world interactions</li>
                  <li>Can generate video from static images</li>
                </ToolFeatures>
                <ToolPricing>
                  <div><strong>Type:</strong> Text-to-Video, Image-to-Video</div>
                  <div><strong>Resolution:</strong> High (Specifics TBD)</div>
                  <div><strong>Access:</strong> Currently Limited (Researchers, Artists, Filmmakers)</div>
                </ToolPricing>
                <ToolActions>
                  <ToolButton href="https://openai.com/sora" target="_blank" rel="noopener noreferrer">
                    Official Site
                  </ToolButton>
                </ToolActions>
              </ToolContent>
            </ToolCard>

            {/* Synthesia Card */}
            <ToolCard>
              <ToolHeader>
                <ToolTitle>Synthesia</ToolTitle>
                <ToolDescription>
                  AI video generation platform that creates professional videos with virtual avatars and natural-sounding voiceovers.
                </ToolDescription>
              </ToolHeader>
              <ToolContent>
                <ToolFeatures>
                  <li>140+ AI avatars with natural movements</li>
                  <li>120+ languages and accents</li>
                  <li>Custom avatar creation available</li>
                  <li>Professional video templates</li>
                  <li>Enterprise-grade security</li>
                </ToolFeatures>
                <ToolPricing>
                  <div><strong>Personal:</strong> $30/month</div>
                  <div><strong>Enterprise:</strong> Custom pricing</div>
                  <div><strong>Free Trial:</strong> Available</div>
                </ToolPricing>
                <ToolActions>
                  <ToolButton href="https://www.synthesia.io/" target="_blank" rel="noopener noreferrer">
                    Official Site
                  </ToolButton>
                  <SecondaryButton href="https://www.synthesia.io/pricing" target="_blank" rel="noopener noreferrer">
                    View Pricing
                  </SecondaryButton>
                </ToolActions>
              </ToolContent>
            </ToolCard>

            {/* Placeholder for future video tools */}
            {/* 
            <ToolCard>
              <ToolHeader>
                <ToolTitle>Google Veo</ToolTitle> 
                <ToolDescription>Google's high-definition video generation model focused on consistency and control.</ToolDescription>
              </ToolHeader>
              <ToolContent>
                <ToolFeatures>
                  <li>High-definition output (1080p+)</li>
                  <li>Longer coherence in generated videos</li>
                  <li>Semantic understanding for better prompt adherence</li>
                  <li>Editing tools (inpainting, outpainting)</li>
                </ToolFeatures>
                <ToolPricing>
                  <div><strong>Access:</strong> Vertex AI (Preview), VideoFX (Waitlist)</div>
                </ToolPricing>
                <ToolActions>
                  <ToolButton href="https://deepmind.google/technologies/veo/" target="_blank" rel="noopener noreferrer">Official Site</ToolButton>
                </ToolActions>
              </ToolContent>
            </ToolCard>
            */}

          </ToolsGrid>
        </ContentSection>

        <ContentSection>
          <SectionTitle>Audio Generation Tools</SectionTitle>
          <ToolsGrid>
            <ToolCard>
              <ToolHeader>
                <ToolTitle>ElevenLabs</ToolTitle>
                <ToolDescription>
                  Advanced AI voice generation platform offering natural-sounding speech synthesis and voice cloning capabilities.
                </ToolDescription>
              </ToolHeader>
              <ToolContent>
                <ToolFeatures>
                  <li>Natural-sounding voice generation</li>
                  <li>Voice cloning technology</li>
                  <li>Multi-language support</li>
                  <li>Emotional speech synthesis</li>
                  <li>API access for developers</li>
                </ToolFeatures>
                <ToolPricing>
                  <div><strong>Free:</strong> 10,000 characters/month</div>
                  <div><strong>Starter:</strong> $5/month</div>
                  <div><strong>Creator:</strong> $22/month</div>
                  <div><strong>Independent Publisher:</strong> $99/month</div>
                  <div><strong>Growing Business:</strong> $330/month</div>
                </ToolPricing>
                <ToolActions>
                  <ToolButton href="https://elevenlabs.io/" target="_blank" rel="noopener noreferrer">
                    Official Site
                  </ToolButton>
                  <SecondaryButton href="https://elevenlabs.io/pricing" target="_blank" rel="noopener noreferrer">
                    View Pricing
                  </SecondaryButton>
                </ToolActions>
              </ToolContent>
            </ToolCard>

            <ToolCard>
              <ToolHeader>
                <ToolTitle>Murf.ai</ToolTitle>
                <ToolDescription>
                  AI-powered voice generator with a wide range of natural-sounding voices and professional voice-over capabilities.
                </ToolDescription>
              </ToolHeader>
              <ToolContent>
                <ToolFeatures>
                  <li>120+ AI voices in 20+ languages</li>
                  <li>Voice cloning available</li>
                  <li>Custom voice creation</li>
                  <li>Voice-over video creation</li>
                  <li>Team collaboration features</li>
                </ToolFeatures>
                <ToolPricing>
                  <div><strong>Free:</strong> 10 minutes of voice generation</div>
                  <div><strong>Basic:</strong> $29/month</div>
                  <div><strong>Pro:</strong> $39/month</div>
                  <div><strong>Enterprise:</strong> Custom pricing</div>
                </ToolPricing>
                <ToolActions>
                  <ToolButton href="https://murf.ai/" target="_blank" rel="noopener noreferrer">
                    Official Site
                  </ToolButton>
                  <SecondaryButton href="https://murf.ai/pricing" target="_blank" rel="noopener noreferrer">
                    View Pricing
                  </SecondaryButton>
                </ToolActions>
              </ToolContent>
            </ToolCard>

            <ToolCard>
              <ToolHeader>
                <ToolTitle>Play.ht</ToolTitle>
                <ToolDescription>
                  AI voice generator and text-to-speech platform with a focus on natural-sounding voices and easy integration.
                </ToolDescription>
              </ToolHeader>
              <ToolContent>
                <ToolFeatures>
                  <li>800+ AI voices in 142 languages</li>
                  <li>Voice cloning available</li>
                  <li>SSML support for advanced control</li>
                  <li>API and WordPress integration</li>
                  <li>Audio preview and editing</li>
                </ToolFeatures>
                <ToolPricing>
                  <div><strong>Free:</strong> 2,500 words/month</div>
                  <div><strong>Creator:</strong> $14.25/month</div>
                  <div><strong>Unlimited:</strong> $29.25/month</div>
                  <div><strong>Enterprise:</strong> Custom pricing</div>
                </ToolPricing>
                <ToolActions>
                  <ToolButton href="https://play.ht/" target="_blank" rel="noopener noreferrer">
                    Official Site
                  </ToolButton>
                  <SecondaryButton href="https://play.ht/pricing/" target="_blank" rel="noopener noreferrer">
                    View Pricing
                  </SecondaryButton>
                </ToolActions>
              </ToolContent>
            </ToolCard>

            <ToolCard>
              <ToolHeader>
                <ToolTitle>Descript</ToolTitle>
                <ToolDescription>
                  All-in-one audio and video editing platform with AI-powered voice generation and editing capabilities.
                </ToolDescription>
              </ToolHeader>
              <ToolContent>
                <ToolFeatures>
                  <li>AI voice generation and cloning</li>
                  <li>Multitrack audio editing</li>
                  <li>Automatic transcription</li>
                  <li>Screen recording and editing</li>
                  <li>Team collaboration tools</li>
                </ToolFeatures>
                <ToolPricing>
                  <div><strong>Free:</strong> Limited features</div>
                  <div><strong>Creator:</strong> $12/month</div>
                  <div><strong>Pro:</strong> $24/month</div>
                  <div><strong>Enterprise:</strong> Custom pricing</div>
                </ToolPricing>
                <ToolActions>
                  <ToolButton href="https://www.descript.com/" target="_blank" rel="noopener noreferrer">
                    Official Site
                  </ToolButton>
                  <SecondaryButton href="https://www.descript.com/pricing" target="_blank" rel="noopener noreferrer">
                    View Pricing
                  </SecondaryButton>
                </ToolActions>
              </ToolContent>
            </ToolCard>
          </ToolsGrid>
        </ContentSection>

        {/* Optional: Add TipBox or UseCase sections similar to other pages */}
        {/* 
        <TipBox>
          <TipTitle>Tips for Video Generation</TipTitle>
          <p>
            Be descriptive about motion, camera angles (e.g., 'drone shot', 'close-up'), and pacing. Break down complex scenes into smaller prompts if needed.
          </p>
        </TipBox>
        */}

      </Container>
    </MainLayout>
  );
};

export default AIVideoGenerationPage; 