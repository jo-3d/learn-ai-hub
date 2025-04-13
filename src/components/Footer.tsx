import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  color: white;
  padding: 3rem 0 1.5rem;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const FooterColumn = styled.div`
  h3 {
    color: white;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: 600;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
    transition: color 0.3s;
    font-weight: 500;

    &:hover {
      color: white;
    }
  }

  p {
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.4;
  }
`;

const Newsletter = styled.div`
  input {
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 0.8rem;
    border-radius: 5px;
    color: white;
    width: 100%;
    margin-bottom: 1rem;

    &::placeholder {
      color: rgba(255, 255, 255, 0.6);
    }

    &:focus {
      outline: none;
      border-color: white;
      background-color: rgba(255, 255, 255, 0.15);
    }
  }

  button {
    background-color: white;
    color: var(--primary);
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 50px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s;

    &:hover {
      background-color: var(--secondary);
      color: white;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  color: rgba(255, 255, 255, 0.9);
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.5rem;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: white;
    transform: translateY(-2px);
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

const Footer: React.FC = () => {
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const emailInput = form.querySelector('input[type="email"]') as HTMLInputElement;
    const email = emailInput.value;

    if (!email) return;

    const scriptURL = 'https://script.google.com/macros/s/AKfycby5woclOaL1Sc3Nb-Z-flSuaGXHa9XatWaOGSilii8-MVk8jHCf1PTxw9iTtIOvKG_M/exec';

    try {
      await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          name: 'Newsletter Subscriber',
          role: 'Subscriber',
          organization: 'Newsletter'
        })
      });

      // Clear the input and show success message
      emailInput.value = '';
      alert('Thank you for subscribing to our newsletter!');
    } catch (error) {
      console.error('Error subscribing:', error);
      alert('Failed to subscribe. Please try again.');
    }
  };

  return (
    <FooterContainer>
      <Container>
        <FooterGrid>
          <FooterColumn>
            <h3>Explore</h3>
            <ul>
              <li><Link href="/ai-insights">AI Insights</Link></li>
              <li><Link href="/case-studies">Case Studies</Link></li>
              <li><Link href="/toolkits-and-guides">Toolkits & Guides</Link></li>
            </ul>
            <SocialIcons>
              <SocialIcon href="https://www.threads.net" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.068V11.5l.393-.272c3.334-2.315 7.127-3.527 11.26-3.603l.237-.002c3.732 0 7.076 1.013 9.932 3.011l.426.298v.774c0 3.556-.859 6.428-2.549 8.539-1.862 2.313-4.626 3.503-8.228 3.527h-.007zM3.164 12.14c.101 2.97.82 5.308 2.27 7.073 1.552 1.892 3.856 2.86 6.967 2.9h.014c3.127-.022 5.445-.984 7.01-2.901 1.432-1.748 2.147-4.055 2.248-6.986-2.592-1.78-5.621-2.69-9.014-2.707l-.208.002c-3.645.066-7.035 1.132-9.287 2.62z"/>
                  <path d="M19.804 12.355c-.052 2.699-.697 4.809-1.978 6.368-1.456 1.774-3.556 2.67-6.372 2.689h-.007c-2.752-.017-4.825-.904-6.34-2.71-1.294-1.575-1.937-3.714-1.978-6.421 2.042-1.312 5.055-2.238 8.317-2.297l.209-.002c3.104.017 5.781.846 8.149 2.373z"/>
                </svg>
              </SocialIcon>
              <SocialIcon href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </SocialIcon>
              <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </SocialIcon>
            </SocialIcons>
          </FooterColumn>
          <FooterColumn>
            <h3>About Us</h3>
            <ul>
              <li><Link href="/about">About the Hub</Link></li>
              <li><Link href="/consulting-services">Consulting Services</Link></li>
              <li><Link href="/about#contact">Contact Us</Link></li>
            </ul>
          </FooterColumn>
          <FooterColumn>
            <h3>Subscribe</h3>
            <p>Stay updated with the latest healthcare AI insights and exclusive resources.</p>
            <Newsletter>
              <form onSubmit={handleSubscribe}>
                <input type="email" placeholder="Your email address" required />
                <button type="submit">Subscribe</button>
              </form>
            </Newsletter>
          </FooterColumn>
        </FooterGrid>
        <Copyright>
          <p>&copy; {new Date().getFullYear()} AI Tech Hub, LLC. All rights reserved.</p>
        </Copyright>
      </Container>
    </FooterContainer>
  );
};

export default Footer;