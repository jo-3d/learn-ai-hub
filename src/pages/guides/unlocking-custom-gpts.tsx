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

const CodeBlock = styled.div`
  background-color: #f6f8fa;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  overflow-x: auto;
  color: #24292e;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
  font-size: 0.9rem;
  line-height: 1.5;
  white-space: pre;
`;

const StepNumber = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: #2A7DE1;
  color: white;
  border-radius: 50%;
  margin-right: 10px;
  font-weight: bold;
  font-size: 0.9rem;
`;

const StepHeading = styled.h3`
  font-size: 1.3rem;
  color: #333;
  margin: 1.5rem 0 1rem;
  display: flex;
  align-items: center;
`;

const ImagePlaceholder = styled.div`
  background-color: #f0f2f5;
  border-radius: 8px;
  padding: 2rem;
  margin: 1.5rem 0;
  text-align: center;
  color: #666;
`;

const CustomGPTsGuide = () => {
  return (
    <>
      <Head>
        <title>Unlocking Custom GPTs: A Hands-On Guide | Learn AI Hub</title>
        <meta name="description" content="Learn how to create specialized AI assistants with Custom GPTs to enhance productivity and automate complex workflows with our step-by-step guide." />
      </Head>
      <MainLayout>
        <Container>
          <BackLink>
            <Link href="/resources" passHref legacyBehavior>
              <a>← Back to Resources & Guides</a>
            </Link>
          </BackLink>
          
          <GuideHeader>
            <Title>Unlocking Custom GPTs: A Hands-On Guide</Title>
            <Subtitle>
              Build specialized AI assistants that follow your playbook, consult private files, call external APIs, and generate images with GPT-4o
            </Subtitle>
          </GuideHeader>
          
          <GuideContent>
            <Section>
              <SectionTitle>The Hidden Power of Custom GPTs</SectionTitle>
              <Paragraph>
                Custom GPTs let you build specialized AI assistants that follow your proprietary playbook, consult private files, call external APIs, and generate images via GPT-4o. This powerful feature allows you to create AI tools tailored to specific workflows and tasks.
              </Paragraph>
              <Paragraph>
                While you'll need to use the desktop web interface to create them, Custom GPTs can be used across all platforms including mobile apps. This guide walks you through every field in the builder by creating a real-world example: a YouTube Translator GPT that translates your new videos into Spanish & French, generates a thumbnail image, and emails the files to your editor.
              </Paragraph>
              <Highlight>
                <h3>What You Can Build With Custom GPTs:</h3>
                <List>
                  <ListItem><strong>Specialized Knowledge Workers:</strong> Create assistants that understand your company's documentation, proprietary processes, and domain expertise</ListItem>
                  <ListItem><strong>Workflow Automation:</strong> Build GPTs that use external APIs to fetch data, post content, or trigger actions in other systems</ListItem>
                  <ListItem><strong>Content Creation:</strong> Design GPTs that generate consistent content following your brand voice and style guide</ListItem>
                  <ListItem><strong>Visual Generators:</strong> Create image generation tools that follow specific aesthetic guidelines using GPT-4o</ListItem>
                </List>
              </Highlight>
            </Section>
            
            <Section>
              <SectionTitle>Creating a Simple Logo Generator GPT</SectionTitle>
              <Paragraph>
                Let's start with a simple Custom GPT that anyone can create without API connections. This Logo Maker GPT will help businesses generate custom logo concepts based on their brand guidelines.
              </Paragraph>
              
              <StepHeading><StepNumber>1</StepNumber> Open the GPT Builder</StepHeading>
              <Paragraph>
                On desktop, sign in at chat.openai.com, click Explore GPTs → Create → Build. You'll need a ChatGPT Plus, Team, or Enterprise subscription to access this feature.
              </Paragraph>
              
              <StepHeading><StepNumber>2</StepNumber> Name & Avatar Setup</StepHeading>
              <List>
                <ListItem><strong>GPT name:</strong> Brand Logo Generator</ListItem>
                <ListItem><strong>Description:</strong> "Helps businesses create professional logo concepts based on their industry, values, and design preferences."</ListItem>
                <ListItem>You can upload a custom icon or let GPT-4o generate a sample avatar for your Custom GPT.</ListItem>
              </List>
              
              <StepHeading><StepNumber>3</StepNumber> Instructions (System Prompt)</StepHeading>
              <CodeBlock>{`You are Brand Logo Generator, an expert in creating professional logo concepts for businesses.

Your process:
1. Ask about their business name, industry, and brand values if not provided.
2. Inquire about color preferences or design styles they like.
3. Generate 3 different logo concept descriptions, each with distinct approaches.
4. For each concept, create a photorealistic image using DALL-E.
5. Explain the rationale behind each design.
6. Offer to refine any concept they prefer.

Tips to include:
- Keep designs simple and memorable
- Ensure the logo works in black and white
- Verify the logo is readable at small sizes
- Avoid trendy designs that will look dated quickly

Remember that final logos may need refinement by a professional designer.`}</CodeBlock>
              <Paragraph>
                This system prompt creates a structured process for gathering information and generating logo concepts while providing practical design advice.
              </Paragraph>
              
              <StepHeading><StepNumber>4</StepNumber> Knowledge Uploads (Optional)</StepHeading>
              <Paragraph>
                You could upload relevant documents to enhance your GPT's knowledge:
              </Paragraph>
              <List>
                <ListItem><strong>design_principles.pdf</strong> – with fundamentals of logo design</ListItem>
                <ListItem><strong>color_psychology.pdf</strong> – explaining how colors impact brand perception</ListItem>
              </List>
              <Paragraph>
                These documents will help your GPT provide more informed design recommendations.
              </Paragraph>
              
              <StepHeading><StepNumber>5</StepNumber> Capabilities Toggle</StepHeading>
              <Paragraph>
                For this simpler GPT, you only need to enable:
              </Paragraph>
              <List>
                <ListItem><strong>Image Generation (GPT-4o)</strong> – to create visual logo concepts directly in chat</ListItem>
              </List>
              <Paragraph>
                Web browsing and code interpreter aren't necessary for this basic logo generation tool.
              </Paragraph>
              
              <StepHeading><StepNumber>6</StepNumber> Preview & Test</StepHeading>
              <Paragraph>
                Test your Custom GPT by providing different business types and preferences. Check that it:
              </Paragraph>
              <List>
                <ListItem>Asks clarifying questions before generating logos</ListItem>
                <ListItem>Creates diverse concepts based on the input</ListItem>
                <ListItem>Provides logical explanations for design choices</ListItem>
                <ListItem>Generates images that match the descriptions</ListItem>
              </List>
              <Paragraph>
                Revise your instructions if the GPT needs improvement in any area.
              </Paragraph>
              
              <StepHeading><StepNumber>7</StepNumber> Publish</StepHeading>
              <Paragraph>
                Once you're satisfied with your Logo Maker GPT, you can publish it for your own use or share it with others.
              </Paragraph>
            </Section>
            
            <Section>
              <SectionTitle>Advanced Example: Building a YouTube Translator GPT</SectionTitle>
              <Paragraph>
                Now let's create a more advanced Custom GPT that solves a real business need: automatically translating YouTube content to reach international audiences while maintaining brand consistency.
              </Paragraph>
              
              <StepHeading><StepNumber>1</StepNumber> Open the GPT Builder</StepHeading>
              <Paragraph>
                On desktop, sign in at chat.openai.com, click Explore GPTs → Create → Build. You'll need a ChatGPT Plus, Team, or Enterprise subscription to access this feature.
              </Paragraph>
              
              <StepHeading><StepNumber>2</StepNumber> Name & Avatar Setup</StepHeading>
              <List>
                <ListItem><strong>GPT name:</strong> YouTube Translator GPT</ListItem>
                <ListItem><strong>Description:</strong> "Translates new YouTube transcripts into Spanish & French, creates a photorealistic bilingual thumbnail with GPT-4o, and emails the package to my editor."</ListItem>
                <ListItem>Use the Generate button to let GPT-4o create a sample thumbnail avatar for your Custom GPT, or upload your own custom image.</ListItem>
              </List>
              
              <StepHeading><StepNumber>3</StepNumber> Instructions (System Prompt)</StepHeading>
              <CodeBlock>{`You are YouTube Translator GPT.
Your goals:
1. Translate supplied English transcript into Spanish and French.
2. Extract five key talking points.
3. Write SEO-optimised titles for both languages (≤70 chars).
4. Generate a photorealistic 16:9 thumbnail featuring a concise bilingual headline.
5. Package outputs as Markdown and trigger the send_email action.
Keep tone friendly & concise; avoid cultural idioms that don't translate cleanly.`}</CodeBlock>
              <Paragraph>
                This system prompt defines exactly how your Custom GPT will behave and what tasks it will perform. Be as specific as possible about the outputs you expect.
              </Paragraph>
              
              <StepHeading><StepNumber>4</StepNumber> Knowledge Uploads</StepHeading>
              <Paragraph>
                Upload relevant documents that your GPT should reference when performing its tasks:
              </Paragraph>
              <List>
                <ListItem><strong>channel_style_guide.pdf</strong> – containing your brand voice & colors</ListItem>
                <ListItem><strong>seo_keywords.csv</strong> – list of priority keywords for your content</ListItem>
              </List>
              <Paragraph>
                Your Custom GPT will now cite these documents when crafting titles and will follow your brand guidelines in all its outputs.
              </Paragraph>
              
              <StepHeading><StepNumber>5</StepNumber> Capabilities Toggle</StepHeading>
              <Paragraph>
                Enable the specific capabilities your Custom GPT needs:
              </Paragraph>
              <List>
                <ListItem><strong>Web Browsing</strong> – to fetch the public transcript via transcript services</ListItem>
                <ListItem><strong>Code Interpreter</strong> – to parse CSV files & generate subtitle files (.srt)</ListItem>
                <ListItem><strong>Image Generation (GPT-4o)</strong> – to create thumbnails directly in the chat</ListItem>
              </List>
              <Paragraph>
                Leave the "Upload files" option disabled since we'll feed the transcript via web browsing.
              </Paragraph>
              
              <StepHeading><StepNumber>6</StepNumber> Actions (API Connections)</StepHeading>
              <Paragraph>
                This is where Custom GPTs become truly powerful - by connecting to external APIs to fetch data or perform actions outside of ChatGPT:
              </Paragraph>
              <CodeBlock>{`paths:
  /latestVideo:
    get:
      parameters:
        - name: channelId
          in: query
          schema: { type: string }
      responses:
        '200':
          description: Latest video metadata
  /sendEmail:
    post:
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/EmailPayload'`}</CodeBlock>
              <Paragraph>
                This OpenAPI specification defines two endpoints your GPT can call: one to fetch video data and another to send the finished translations via email, all without leaving ChatGPT.
              </Paragraph>
              
              <StepHeading><StepNumber>7</StepNumber> Preview & Iterate</StepHeading>
              <Paragraph>
                Test your Custom GPT by providing a recent video link in the Preview pane. Verify that:
              </Paragraph>
              <List>
                <ListItem>The translations accurately convey the original content</ListItem>
                <ListItem>Key talking points are correctly extracted</ListItem>
                <ListItem>The GPT-4o generated thumbnail follows your brand palette</ListItem>
              </List>
              <Paragraph>
                Revise your instructions as needed until the Custom GPT produces the desired results consistently.
              </Paragraph>
              
              <StepHeading><StepNumber>8</StepNumber> Publish & Share</StepHeading>
              <Paragraph>
                Once satisfied with your Custom GPT's performance, you have options for sharing:
              </Paragraph>
              <List>
                <ListItem><strong>Unlisted link</strong> – Share privately with your team only</ListItem>
                <ListItem><strong>GPT Store</strong> – List it publicly so other creators can use it (with potential revenue via usage revenue-sharing)</ListItem>
              </List>
              
              <StepHeading><StepNumber>9</StepNumber> Monitor & Update</StepHeading>
              <Paragraph>
                Use the Manage GPTs dashboard to track conversations and gather feedback. You can update your Custom GPT anytime by modifying:
              </Paragraph>
              <List>
                <ListItem>The system prompt to refine behavior</ListItem>
                <ListItem>The OpenAPI schema to change API functionality</ListItem>
                <ListItem>The knowledge base to update brand assets or guidelines</ListItem>
              </List>
            </Section>
            
            <Section>
              <SectionTitle>Best Practices for Effective Custom GPTs</SectionTitle>
              <List>
                <ListItem><strong>Be Specific in Instructions:</strong> The more detailed your system prompt, the more consistent your Custom GPT's output will be.</ListItem>
                <ListItem><strong>Test Thoroughly:</strong> Create multiple test scenarios to ensure your GPT handles edge cases correctly.</ListItem>
                <ListItem><strong>Limit Scope:</strong> Focus your Custom GPT on doing one workflow exceptionally well rather than many things adequately.</ListItem>
                <ListItem><strong>Upload High-Quality Knowledge:</strong> The better your reference materials, the more accurate and on-brand your outputs will be.</ListItem>
                <ListItem><strong>Document API Authentication:</strong> Keep track of API authentication methods and tokens for future updates.</ListItem>
              </List>
            </Section>
            
            <Section>
              <SectionTitle>Practical Use Cases Beyond Content Creation</SectionTitle>
              <Paragraph>
                Custom GPTs aren't limited to content workflows. Here are some other powerful applications:
              </Paragraph>
              <List>
                <ListItem><strong>Customer Support GPT:</strong> Upload your product documentation and FAQs to create a specialized support assistant that can answer questions accurately.</ListItem>
                <ListItem><strong>Data Analysis GPT:</strong> Build a GPT that can analyze specific data formats for your organization, generate reports, and visualize trends.</ListItem>
                <ListItem><strong>Training GPT:</strong> Create an onboarding assistant that knows your company policies, procedures, and can quiz new employees.</ListItem>
                <ListItem><strong>Project Management GPT:</strong> Design a GPT that understands your project methodology and can help plan timelines, assign tasks, and track progress.</ListItem>
              </List>
            </Section>
            
            <Section>
              <SectionTitle>Expanding Your AI Toolkit</SectionTitle>
              <Paragraph>
                Custom GPTs represent a significant advancement in making AI tools accessible to organizations of all sizes. By combining the natural language processing of GPT models with your proprietary knowledge and external services, you can create powerful, specialized assistants that dramatically enhance productivity and automate complex workflows.
              </Paragraph>
              <Paragraph>
                As the API capabilities continue to expand, Custom GPTs will become increasingly powerful tools in your AI arsenal. Start small, experiment often, and gradually build more sophisticated Custom GPTs as you learn what works best for your specific needs.
              </Paragraph>
            </Section>
            
            <CallToAction>
              <CTATitle>Ready to Create Your First Custom GPT?</CTATitle>
              <CTAText>
                Subscribe to our newsletter to receive more AI customization tips, tutorials, and early access to our upcoming guide on advanced Custom GPT workflows for business.
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

export default CustomGPTsGuide; 