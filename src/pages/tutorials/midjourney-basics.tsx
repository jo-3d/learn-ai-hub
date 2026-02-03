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

const PromptExample = styled(TipBox)`
  background: #f5f5f5;
  border-left: 4px solid #2A7DE1;
`;

const PromptsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin: 1rem 0;
`;

const MidjourneyTutorial = () => {
  const steps = [
    {
      title: "Getting Started with Midjourney",
      content: (
        <div>
          <h2>What is Midjourney?</h2>
          <p>Midjourney is an AI art generator that creates stunning images from text descriptions. It's known for its artistic quality and ability to understand complex prompts.</p>
          
          <TipBox>
            <strong>Key Features:</strong>
            <ul>
              <li>High-quality image generation</li>
              <li>Multiple style options</li>
              <li>Customizable parameters</li>
              <li>Community-driven development</li>
              <li>Regular updates and improvements</li>
            </ul>
          </TipBox>
          
          <h3>Basic Setup</h3>
          <p>Midjourney is available through both Discord and a web interface. Choose the method that works best for you:</p>
          
          <h4>Option 1: Web Interface</h4>
          <ol>
            <li>Visit the Midjourney website (midjourney.com)</li>
            <li>Create an account or sign in</li>
            <li>Subscribe to a plan (Free trial available)</li>
            <li>Start creating images directly in your browser</li>
          </ol>

          <h4>Option 2: Discord</h4>
          <ol>
            <li>Join the Midjourney Discord server</li>
            <li>Subscribe to a plan (Free trial available)</li>
            <li>Find a #newbies channel</li>
            <li>Type /imagine to start creating</li>
          </ol>
          
          <TipBox>
            <strong>Pro Tip:</strong> The web interface offers a more streamlined experience, while Discord provides access to a vibrant community and additional features. You can use both platforms with the same account.
          </TipBox>
        </div>
      )
    },
    {
      title: "Understanding Prompts",
      content: (
        <div>
          <h2>Crafting Effective Prompts</h2>
          <p>A good prompt is the key to getting the image you want. Here's how to structure your prompts:</p>
          
          <CodeBlock>
            {`Basic Structure:
[Subject] [Description] [Style] [Parameters]

Example:
/imagine a majestic white wolf standing on a snowy mountain peak, detailed fur, cinematic lighting, 8k --ar 16:9 --v 5`}
          </CodeBlock>
          
          <h3>Prompt Components</h3>
          <TipBox>
            <strong>1. Subject:</strong>
            <ul>
              <li>Be specific about your main subject</li>
              <li>Include important details</li>
              <li>Mention the environment or setting</li>
            </ul>
          </TipBox>
          
          <TipBox>
            <strong>2. Description:</strong>
            <ul>
              <li>Add details about lighting, mood, and atmosphere</li>
              <li>Specify colors and textures</li>
              <li>Include action or pose if relevant</li>
            </ul>
          </TipBox>
          
          <TipBox>
            <strong>3. Style:</strong>
            <ul>
              <li>Artistic style (realistic, cartoon, watercolor)</li>
              <li>Photography style (portrait, landscape, macro)</li>
              <li>Art movement (impressionism, surrealism)</li>
            </ul>
          </TipBox>
          
          <h3>Example Prompts</h3>
          <PromptsContainer>
            <PromptExample>
              <strong>Portrait Example:</strong>
              <p>"A young woman with flowing red hair, soft natural lighting, professional portrait photography, shallow depth of field, 85mm lens --ar 3:4 --v 5"</p>
            </PromptExample>
            <PromptExample>
              <strong>Landscape Example:</strong>
              <p>"Ancient Japanese temple in misty mountains, golden hour lighting, cinematic composition, ultra detailed, 8k --ar 16:9 --v 5"</p>
            </PromptExample>
          </PromptsContainer>
        </div>
      )
    },
    {
      title: "Advanced Parameters",
      content: (
        <div>
          <h2>Controlling Your Output</h2>
          <p>Midjourney offers various parameters to fine-tune your images:</p>
          
          <TipBox>
            <strong>Common Parameters:</strong>
            <ul>
              <li><code>--ar</code> Aspect ratio (e.g., 16:9, 1:1, 3:4)</li>
              <li><code>--v</code> Version (e.g., --v 5 for latest version)</li>
              <li><code>--q</code> Quality (0.25 to 2, default 1)</li>
              <li><code>--stylize</code> Style strength (0-1000, default 100)</li>
              <li><code>--chaos</code> Variation (0-100, default 0)</li>
            </ul>
          </TipBox>
          
          <h3>Parameter Examples</h3>
          <CodeBlock>
            {`Basic: /imagine a cute puppy --ar 1:1 --v 5
High Quality: /imagine a futuristic city --q 2 --v 5
Artistic: /imagine a fantasy castle --stylize 500 --v 5
Varied: /imagine a magical forest --chaos 50 --v 5`}
          </CodeBlock>
          
          <h3>Style Parameters</h3>
          <PromptsContainer>
            <PromptExample>
              <strong>Photorealistic Style:</strong>
              <p>"--style raw --v 5"</p>
            </PromptExample>
            <PromptExample>
              <strong>Artistic Style:</strong>
              <p>"--style 4b --v 5"</p>
            </PromptExample>
            <PromptExample>
              <strong>Cinematic Style:</strong>
              <p>"--style cinematic --v 5"</p>
            </PromptExample>
          </PromptsContainer>
        </div>
      )
    },
    {
      title: "Art Styles & References",
      content: (
        <div>
          <h2>Exploring Different Styles</h2>
          <p>Midjourney can mimic various art styles and techniques:</p>
          
          <h3>Photography Styles</h3>
          <PromptsContainer>
            <PromptExample>
              <strong>Portrait Photography:</strong>
              <p>"35mm film, natural lighting, shallow depth of field"</p>
            </PromptExample>
            <PromptExample>
              <strong>Landscape Photography:</strong>
              <p>"Ansel Adams style, black and white, dramatic lighting"</p>
            </PromptExample>
          </PromptsContainer>
          
          <h3>Artistic Styles</h3>
          <PromptsContainer>
            <PromptExample>
              <strong>Oil Painting:</strong>
              <p>"in the style of Van Gogh, thick brushstrokes, vibrant colors"</p>
            </PromptExample>
            <PromptExample>
              <strong>Watercolor:</strong>
              <p>"delicate watercolor painting, soft edges, pastel colors"</p>
            </PromptExample>
          </PromptsContainer>
          
          <h3>Digital Art Styles</h3>
          <PromptsContainer>
            <PromptExample>
              <strong>Concept Art:</strong>
              <p>"digital concept art, matte painting, highly detailed"</p>
            </PromptExample>
            <PromptExample>
              <strong>Anime:</strong>
              <p>"anime style, cel-shaded, vibrant colors"</p>
            </PromptExample>
          </PromptsContainer>
          
          <TipBox>
            <strong>Style Combinations:</strong>
            <p>You can combine multiple styles for unique results:</p>
            <CodeBlock>
              {`"A futuristic city in the style of Van Gogh, with cyberpunk elements, oil painting texture"`}
            </CodeBlock>
          </TipBox>
        </div>
      )
    },
    {
      title: "Advanced Techniques",
      content: (
        <div>
          <h2>Taking Your Art Further</h2>
          
          <h3>Image References</h3>
          <TipBox>
            <strong>Using Image References:</strong>
            <ul>
              <li><strong>Web Interface:</strong> Upload an image directly to the web interface</li>
              <li><strong>Discord:</strong> Upload an image to Discord and copy the URL</li>
              <li>Use the image as a reference in your prompt</li>
              <li>Adjust the image weight parameter to control influence</li>
            </ul>
          </TipBox>
          
          <CodeBlock>
            {`Web Interface Example:
/imagine [uploaded image] a mystical forest scene --iw 0.5 --v 5

Discord Example:
/imagine [image URL] a mystical forest scene --iw 0.5 --v 5`}
          </CodeBlock>
          
          <h3>Remixing and Variations</h3>
          <TipBox>
            <strong>Creating Variations:</strong>
            <ul>
              <li>Use V1-V4 buttons to create variations</li>
              <li>Use the "Make Variations" button</li>
              <li>Adjust parameters for different results</li>
            </ul>
          </TipBox>
          
          <h3>Upscaling and Enhancing</h3>
          <TipBox>
            <strong>Upscaling Options:</strong>
            <ul>
              <li>U1-U4 for different upscale versions</li>
              <li>Light upscaler for subtle enhancement</li>
              <li>Beta upscaler for maximum detail</li>
            </ul>
          </TipBox>
          
          <h3>Advanced Prompting</h3>
          <CodeBlock>
            {`Complex Example:
/imagine a steampunk airship flying over Victorian London at sunset, 
detailed brass and copper machinery, smoke and steam effects, 
crowded streets below, cinematic lighting, 
in the style of Jules Verne illustrations, 
ultra detailed, 8k --ar 16:9 --v 5 --q 2 --stylize 750`}
          </CodeBlock>
        </div>
      )
    },
    {
      title: "Best Practices & Tips",
      content: (
        <div>
          <h2>Creating Better Art</h2>
          
          <TipBox>
            <strong>Prompt Writing Tips:</strong>
            <ul>
              <li>Start with a clear subject</li>
              <li>Add descriptive details</li>
              <li>Specify the style and mood</li>
              <li>Use appropriate parameters</li>
              <li>Experiment with variations</li>
            </ul>
          </TipBox>
          
          <h3>Common Mistakes to Avoid</h3>
          <TipBox>
            <strong>Mistake 1: Vague Prompts</strong>
            <p><strong>Bad:</strong> "A beautiful landscape"</p>
            <p><strong>Good:</strong> "A serene mountain lake at sunrise, mist floating above the water, pine trees reflecting in the still water, soft morning light, 8k landscape photography"</p>
          </TipBox>
          
          <TipBox>
            <strong>Mistake 2: Overcomplicating</strong>
            <p><strong>Bad:</strong> "A complex scene with many elements and details and specific lighting and..."</p>
            <p><strong>Good:</strong> "A cozy bookstore interior, warm lighting, bookshelves lining the walls, a reading nook by the window"</p>
          </TipBox>
          
          <h3>Pro Tips</h3>
          <ul>
            <li>Save your successful prompts for future use</li>
            <li>Join Midjourney communities to learn from others</li>
            <li>Experiment with different parameter combinations</li>
            <li>Use reference images for consistent style</li>
            <li>Try remixing your favorite results</li>
          </ul>
          
          <TipBox>
            <strong>Remember:</strong> Midjourney is a tool that gets better with practice. Don't be afraid to experiment and try new things!
          </TipBox>
        </div>
      )
    }
  ];

  return (
    <MainLayout>
      <Head>
        <title>Creating Your First AI Art with Midjourney | LearnAIHub</title>
        <meta name="description" content="Step-by-step guide to creating AI art with Midjourney. Learn prompt crafting, settings, and best practices for stunning results." />
      </Head>
      
      <TutorialTemplate
        title="Creating Your First AI Art with Midjourney"
        description="Step-by-step guide to using Midjourney prompts to generate unique and stunning images."
        steps={steps}
      />
    </MainLayout>
  );
};

export default MidjourneyTutorial; 