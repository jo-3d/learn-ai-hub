import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: var(--bg-dark);
  border-bottom: 1px solid var(--border-dark);
  padding: 0.75rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  cursor: pointer;

  span.gradient-text {
    background: var(--gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const LogoImage = styled.div`
  position: relative;
  width: 42px;
  height: 42px;
  margin-right: 10px;
`;

const Nav = styled.nav<{ $isOpen: boolean }>`
  @media (max-width: 768px) {
    display: ${props => props.$isOpen ? 'flex' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--bg-dark-alt);
    border-bottom: 1px solid var(--border-dark);
    padding: 1rem;

    ul {
      flex-direction: column;
      width: 100%;

      li {
        margin: 0.5rem 0;
        text-align: center;
      }
    }
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  a {
    color: var(--text-secondary);
    text-decoration: none;
    font-weight: 500;
    font-size: 0.95rem;
    transition: color 0.2s ease;

    &:hover {
      color: var(--text-primary);
    }
  }
`;

const YouTubeLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.2s ease;

  &:hover {
    color: var(--youtube);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

const CTAButton = styled.button`
  background: var(--gradient);
  color: white;
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
  border: none;
  cursor: pointer;

  &:hover {
    box-shadow: var(--glow-cyan);
    transform: translateY(-1px);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--text-primary);

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <Container>
        <Link href="/" passHref legacyBehavior>
          <Logo>
            <LogoImage>
              <img
                src="/images/LearnAiHub_LOGO.png"
                alt="LearnAIHub Logo"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </LogoImage>
            Learn<span className="gradient-text">AI</span>Hub
          </Logo>
        </Link>
        <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? '✕' : '☰'}
        </MobileMenuButton>
        <Nav $isOpen={isMenuOpen}>
          <NavList>
            <NavItem>
              <Link href="/">Home</Link>
            </NavItem>
            <NavItem>
              <YouTubeLink href="https://youtube.com/@learninghubai" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Videos
              </YouTubeLink>
            </NavItem>
            <NavItem>
              <Link href="/ai-insights">Blog</Link>
            </NavItem>
            <NavItem>
              <Link href="/ai-tools">Tools</Link>
            </NavItem>
            <NavItem>
              <Link href="/about">About</Link>
            </NavItem>
            <NavItem>
              <Link href="/subscribe" passHref legacyBehavior>
                <CTAButton as="a">Subscribe</CTAButton>
              </Link>
            </NavItem>
          </NavList>
        </Nav>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
