import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

interface SidebarProps {
  relatedArticles?: any[];
  relatedCaseStudies?: any[];
  currentTag?: string;
}

const SidebarContainer = styled.aside<{ $isOpen: boolean }>`
  width: 280px;
  background: var(--bg-dark);
  color: var(--text-primary);
  height: 100vh;
  position: fixed;
  left: ${props => props.$isOpen ? '0' : '-280px'};
  top: 0;
  padding: 1rem;
  overflow-y: auto;
  border-right: 1px solid var(--border-dark);
  transition: left 0.3s ease;
  z-index: 1000;

  @media (min-width: 1024px) {
    left: 0;
  }
`;

const MobileToggle = styled.button`
  display: block;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--gradient);
  color: white;
  border: none;
  cursor: pointer;
  z-index: 1001;
  box-shadow: var(--glow-cyan);

  @media (min-width: 1024px) {
    display: none;
  }
`;

const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: ${props => props.$isOpen ? 'block' : 'none'};

  @media (min-width: 1024px) {
    display: none;
  }
`;

const Logo = styled.div`
  padding: 1rem;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--text-primary);

  span {
    background: var(--gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h3`
  font-size: 0.9rem;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 1rem;
  padding-left: 1rem;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin-bottom: 0.5rem;
`;

const NavLink = styled.a`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  color: var(--text-secondary);
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: var(--bg-dark-hover);
    color: var(--text-primary);
  }

  &.active {
    background: var(--primary);
    color: white;
  }
`;

const Icon = styled.span`
  margin-right: 0.75rem;
  font-size: 1.2rem;
`;

const ToolCard = styled.div`
  background: var(--bg-dark-alt);
  border: 1px solid var(--border-dark);
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--bg-dark-hover);
    border-color: var(--primary);
  }

  a {
    text-decoration: none;
  }
`;

const ToolTitle = styled.h4`
  margin: 0;
  font-size: 0.9rem;
  color: var(--text-primary);
`;

const ToolDescription = styled.p`
  margin: 0.25rem 0 0;
  font-size: 0.8rem;
  color: var(--text-muted);
`;

const YouTubeButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: var(--youtube);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  margin-bottom: 1rem;

  &:hover {
    background: #CC0000;
    transform: translateY(-2px);
    box-shadow: 0 0 15px rgba(255, 0, 0, 0.3);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const Sidebar: React.FC<SidebarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Overlay $isOpen={isOpen} onClick={() => setIsOpen(false)} />
      <SidebarContainer $isOpen={isOpen}>
        <Logo>
          Learn<span>AI</span>Hub
        </Logo>

        <Section>
          <YouTubeButton href="https://youtube.com/@learninghubai" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Watch on YouTube
          </YouTubeButton>
        </Section>

        <Section>
          <SectionTitle>Quick Navigation</SectionTitle>
          <NavList>
            <NavItem>
              <Link href="/" passHref legacyBehavior>
                <NavLink onClick={() => setIsOpen(false)}>
                  <Icon>🏠</Icon>
                  Home
                </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/ai-insights" passHref legacyBehavior>
                <NavLink onClick={() => setIsOpen(false)}>
                  <Icon>📝</Icon>
                  Blog
                </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/ai-tools" passHref legacyBehavior>
                <NavLink onClick={() => setIsOpen(false)}>
                  <Icon>🛠️</Icon>
                  AI Tools
                </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/resources" passHref legacyBehavior>
                <NavLink onClick={() => setIsOpen(false)}>
                  <Icon>📖</Icon>
                  Resources
                </NavLink>
              </Link>
            </NavItem>
          </NavList>
        </Section>

        <Section>
          <SectionTitle>Popular Tools</SectionTitle>
          <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer">
            <ToolCard>
              <ToolTitle>ChatGPT</ToolTitle>
              <ToolDescription>Advanced AI chat assistant</ToolDescription>
            </ToolCard>
          </a>
          <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer">
            <ToolCard>
              <ToolTitle>Gemini</ToolTitle>
              <ToolDescription>Google's multimodal AI model</ToolDescription>
            </ToolCard>
          </a>
          <a href="https://www.make.com/en/register?pc=learnaihub" target="_blank" rel="noopener noreferrer">
            <ToolCard>
              <ToolTitle>Make</ToolTitle>
              <ToolDescription>Workflow automation platform</ToolDescription>
            </ToolCard>
          </a>
        </Section>

        <Section>
          <SectionTitle>Tutorials</SectionTitle>
          <NavList>
            <NavItem>
              <Link href="/tutorials/chatgpt-basics" passHref legacyBehavior>
                <NavLink onClick={() => setIsOpen(false)}>
                  <Icon>🤖</Icon>
                  ChatGPT Basics
                </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/tutorials/midjourney-basics" passHref legacyBehavior>
                <NavLink onClick={() => setIsOpen(false)}>
                  <Icon>🎨</Icon>
                  Midjourney Guide
                </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/tutorials/zapier-automation" passHref legacyBehavior>
                <NavLink onClick={() => setIsOpen(false)}>
                  <Icon>⚡</Icon>
                  Automation Basics
                </NavLink>
              </Link>
            </NavItem>
          </NavList>
        </Section>
      </SidebarContainer>
      <MobileToggle onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✕' : '☰'}
      </MobileToggle>
    </>
  );
};

export default Sidebar;
