import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: var(--bg-dark-alt);
  color: var(--text-primary);
  padding: 2rem 0;
  text-align: center;
  position: relative;
  z-index: 1;
  border-top: 1px solid var(--border-dark);
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
    color: var(--accent);
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: center;
  }

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: var(--text-secondary);
    text-decoration: none;
    transition: color 0.3s;
    font-weight: 500;

    &:hover {
      color: var(--text-primary);
    }
  }

  p {
    color: var(--text-secondary);
    line-height: 1.4;
  }
`;

const Newsletter = styled.div`
  input {
    background-color: var(--bg-dark);
    border: 1px solid var(--border-dark);
    padding: 0.8rem;
    border-radius: 5px;
    color: var(--text-primary);
    width: 100%;
    margin-bottom: 1rem;

    &::placeholder {
      color: var(--text-muted);
    }

    &:focus {
      outline: none;
      border-color: var(--primary);
      background-color: var(--bg-dark-hover);
    }
  }

  button {
    background: var(--gradient);
    color: white;
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 50px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s;
    width: 100%;

    &:hover {
      transform: translateY(-2px);
      box-shadow: var(--glow-cyan);
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  color: var(--text-muted);
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-dark);
`;

const SocialSection = styled.div`
  text-align: center;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  justify-content: center;
`;

const SocialIcon = styled.a`
  color: var(--text-secondary);
  font-size: 1.5rem;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: var(--text-primary);
    transform: translateY(-2px);
  }

  svg {
    width: 28px;
    height: 28px;
  }

  &.youtube:hover {
    color: var(--youtube);
  }
`;

const NewVideosText = styled.p`
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-top: 0.75rem;
`;

const SuccessMessage = styled.div`
  background: rgba(63, 185, 80, 0.1);
  border: 1px solid var(--success);
  color: var(--success);
  padding: 1rem;
  border-radius: 6px;
  margin-top: 1rem;
  text-align: center;
  animation: fadeIn 0.5s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Footer: React.FC = () => {
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [currentYear, setCurrentYear] = useState<number>(2023);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const emailInput = form.querySelector('input[type="email"]') as HTMLInputElement;
    const email = emailInput.value;

    if (!email) return;

    const scriptURL = 'https://script.google.com/macros/s/AKfycbzWpVe3CiNFVv7VWPpdOo5O8_DSJu2hDsELfLjF6q7RdHhbbGNBRNnd2jeAYptCkWqgJw/exec';

    try {
      setSubmitStatus(null);
      await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          name: 'Newsletter Subscriber',
          role: 'Subscriber'
        })
      });

      emailInput.value = '';
      setSubmitStatus('success');
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Error subscribing:', error);
      setSubmitStatus('error');
    }
  };

  return (
    <FooterContainer>
      <Container>
        <FooterGrid>
          <FooterColumn>
            <h3>Follow Along</h3>
            <SocialSection>
              <SocialIcons>
                <SocialIcon className="youtube" href="https://youtube.com/@learninghubai" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </SocialIcon>
              </SocialIcons>
              <NewVideosText>New videos every week!</NewVideosText>
            </SocialSection>
          </FooterColumn>
          <FooterColumn>
            <h3>Quick Links</h3>
            <ul>
              <li><Link href="/ai-insights" legacyBehavior><a>Blog</a></Link></li>
              <li><Link href="/ai-tools" legacyBehavior><a>AI Tools</a></Link></li>
              <li><Link href="/resources" legacyBehavior><a>Resources</a></Link></li>
            </ul>
          </FooterColumn>
          <FooterColumn>
            <h3>Company</h3>
            <ul>
              <li><Link href="/about" legacyBehavior><a>About</a></Link></li>
              <li><Link href="/subscribe" legacyBehavior><a>Subscribe</a></Link></li>
              <li><Link href="/events" legacyBehavior><a>Events</a></Link></li>
            </ul>
          </FooterColumn>
          <FooterColumn>
            <h3>Join the Journey</h3>
            <Newsletter>
              <form onSubmit={handleSubscribe}>
                <input type="email" placeholder="your@email.com" required />
                <button type="submit">Join Free</button>
              </form>
              {submitStatus === 'success' && (
                <SuccessMessage>
                  Welcome to the learning journey!
                </SuccessMessage>
              )}
              {submitStatus === 'error' && (
                <SuccessMessage style={{ color: '#ff4d4d', borderColor: '#ff4d4d', background: 'rgba(255, 77, 77, 0.1)' }}>
                  Oops! Something went wrong. Please try again.
                </SuccessMessage>
              )}
            </Newsletter>
          </FooterColumn>
        </FooterGrid>
        <Copyright>
          <p>&copy; {currentYear} Learn AI Hub. All rights reserved.</p>
        </Copyright>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
