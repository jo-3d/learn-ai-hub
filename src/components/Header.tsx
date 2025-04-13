import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import SubscriptionModal from './SubscriptionModal';

const HeaderContainer = styled.header`
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 0.75rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
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
  color: var(--primary);
  cursor: pointer;
  
  span {
    color: var(--secondary);
  }
`;

const LogoImage = styled.div`
  position: relative;
  width: 42px;
  height: 42px;
  margin-right: 8px;
`;

const Nav = styled.nav<{ isOpen: boolean }>`
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    padding: 1rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    
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
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
  height: 100%;
  
  li {
    margin-left: 2rem;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: var(--dark);
  font-weight: 500;
  transition: color 0.3s;
  
  &:hover {
    color: var(--primary);
  }
`;

const CTAButton = styled.a`
  background-color: var(--primary);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.3s;
  display: inline-block;
  
  &:hover {
    background-color: var(--secondary);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <HeaderContainer>
      <Container>
        <Link href="/" passHref>
          <Logo>
            <LogoImage>
              <Image
                src="/images/articles/logo-ai-healthtech-hub.png"
                alt="HealthTech AI Hub Logo"
                fill
                style={{ objectFit: 'contain' }}
              />
            </LogoImage>
            Health<span>Tech AI</span>Hub
          </Logo>
        </Link>
        <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </MobileMenuButton>
        <Nav isOpen={isMenuOpen}>
          <NavList>
            <li>
              <Link href="/" passHref>
                <NavLink as="span">Home</NavLink>
              </Link>
            </li>
            <li>
              <Link href="/ai-insights" passHref>
                <NavLink as="span">AI Insights</NavLink>
              </Link>
            </li>
            <li>
              <Link href="/toolkits-and-guides" passHref>
                <NavLink as="span">Toolkits & Guides</NavLink>
              </Link>
            </li>
            <li>
              <Link href="/career-paths" passHref>
                <NavLink as="span">Career Paths</NavLink>
              </Link>
            </li>
            <li>
              <Link href="/about" passHref>
                <NavLink as="span">About the Hub</NavLink>
              </Link>
            </li>
            <li>
              <CTAButton as="button" onClick={() => setIsModalOpen(true)}>
                Subscribe
              </CTAButton>
            </li>
          </NavList>
        </Nav>
      </Container>

      <SubscriptionModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </HeaderContainer>
  );
};

export default Header; 