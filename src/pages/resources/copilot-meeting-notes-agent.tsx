import React, { useState } from 'react';
import styled from 'styled-components';
import MainLayout from '../../layouts/MainLayout';
import Head from 'next/head';
import Sidebar from '../../components/Sidebar';

const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  padding: 2rem;
  margin-left: 280px;

  @media (max-width: 1024px) {
    margin-left: 0;
    padding: 1rem;
  }
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 2rem;
`;

const BackLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--accent);
  font-size: 0.95rem;
  margin-bottom: 2rem;
  cursor: pointer;
  transition: color var(--transition-fast, 0.15s ease);

  &:hover {
    color: var(--primary-light);
  }
`;

const Title = styled.h1`
  font-size: 2.2rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const VideoTag = styled.span`
  display: inline-block;
  background: var(--youtube, #FF0000);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
`;

const YouTubeLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--youtube, #FF0000);
  color: white;
  padding: 0.7rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 2.5rem;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const InstructionsSection = styled.section`
  margin-top: 1rem;
`;

const SectionLabel = styled.h2`
  font-size: 1.4rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
`;

const SectionHint = styled.p`
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-bottom: 1rem;
`;

const CodeBlockWrapper = styled.div`
  position: relative;
  background: var(--bg-dark-alt);
  border: 1px solid var(--border-dark);
  border-radius: 10px;
  overflow: hidden;
`;

const CodeBlockHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-bottom: 1px solid var(--border-dark);
`;

const CodeBlockTitle = styled.span`
  color: var(--text-muted);
  font-size: 0.85rem;
`;

const CopyButton = styled.button<{ $copied: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 1rem;
  background: ${({ $copied }) => ($copied ? 'var(--success)' : 'var(--primary)')};
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.1s ease;

  &:hover {
    background: ${({ $copied }) => ($copied ? 'var(--success)' : 'var(--primary-dark)')};
  }

  &:active {
    transform: scale(0.97);
  }
`;

const CodeBlock = styled.pre`
  padding: 1.25rem;
  overflow-x: auto;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
  font-size: 0.88rem;
  line-height: 1.65;
  color: var(--text-primary);
  white-space: pre-wrap;
  word-wrap: break-word;
  margin: 0;
`;

const AGENT_INSTRUCTIONS = `You are an AI assistant responsible for generating clean, concise meeting minutes.
Every time meeting content, discussion notes, transcripts, or bullet points are provided,
you must always produce the meeting summary in the following 3-column table format:

| Topic | Meeting Summary | Next Steps |
|-------|------------------|------------|

Formatting Rules:
1. Keep topics concise and grouped logically.
2. Place all key discussion details under "Meeting Summary."
3. Place all follow-up actions, owners (if provided), and requirements under "Next Steps."
4. Do NOT include document links, timestamps, speaker labels, or system-generated artifacts.
5. Summaries should be clear, brief, and written in professional, neutral language.
6. Do NOT create extra sections unless explicitly asked.
7. Always return only the table unless the user instructs otherwise.

Example of expected structure:

| Topic | Meeting Summary | Next Steps |
|-------|------------------|------------|
| Example Topic | Summary of discussion, decisions, and context. | Action items, owners, and deadlines. |

Your sole responsibility is to transform any meeting content you receive into this standardized table.
If information is missing, summarize what is available without inventing additional details.`;

const CopilotMeetingNotesAgentPage: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(AGENT_INSTRUCTIONS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = AGENT_INSTRUCTIONS;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <>
      <Head>
        <title>Copilot Meeting Notes Agent Instructions | LearnAIHub</title>
        <meta
          name="description"
          content="Copy the Copilot agent instructions for automated meeting notes. Build an AI agent to write your meeting notes without a Copilot license."
        />
        <link rel="canonical" href="https://learnaihub.com/resources/copilot-meeting-notes-agent" />
      </Head>
      <PageContainer>
        <Sidebar />
        <Content>
          <MainLayout>
            <Container>
              <BackLink href="/resources">&larr; Back to Resources</BackLink>

              <VideoTag>YouTube Video Resource</VideoTag>

              <Title>I Built an AI Agent to Write My Meeting Notes: No Copilot License Needed</Title>

              <Description>
                Use these agent instructions to set up an AI-powered meeting notes assistant.
                Paste them into your Copilot agent (or any LLM) and it will automatically
                format any meeting content into a clean, standardized summary table.
              </Description>

              <YouTubeLink
                href="https://youtu.be/LaI9SWR1Ynw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
                  <path fill="#fff" d="M9.545 15.568V8.432L15.818 12z" />
                </svg>
                Watch the Video
              </YouTubeLink>

              <InstructionsSection>
                <SectionLabel>Agent Instructions</SectionLabel>
                <SectionHint>
                  Click the button below to copy the full instructions, then paste them into your agent&apos;s system prompt.
                </SectionHint>

                <CodeBlockWrapper>
                  <CodeBlockHeader>
                    <CodeBlockTitle>system-prompt.txt</CodeBlockTitle>
                    <CopyButton onClick={handleCopy} $copied={copied}>
                      {copied ? 'Copied!' : 'Copy Instructions'}
                    </CopyButton>
                  </CodeBlockHeader>
                  <CodeBlock>{AGENT_INSTRUCTIONS}</CodeBlock>
                </CodeBlockWrapper>
              </InstructionsSection>
            </Container>
          </MainLayout>
        </Content>
      </PageContainer>
    </>
  );
};

export default CopilotMeetingNotesAgentPage;
