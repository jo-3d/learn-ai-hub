import React, { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import MainLayout from '../layouts/MainLayout';

const PageContainer = styled.div`
  min-height: 100vh;
  background: var(--bg-dark);
  color: var(--text-primary);
  padding: 2rem 0;
`;

const FormSection = styled.section`
  max-width: 600px;
  margin: 4rem auto;
  background: var(--bg-dark-alt);
  border: 1px solid var(--border-dark);
  border-radius: 12px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  padding: 2.5rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -3rem;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: var(--gradient);
    border-radius: 2px;
  }
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  text-align: center;
`;

const FormSubtitle = styled.p`
  color: var(--text-secondary);
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: var(--text-primary);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const RequiredText = styled.span`
  color: var(--text-muted);
  font-size: 0.9rem;
  font-weight: normal;
  font-style: italic;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid var(--border-dark);
  border-radius: 6px;
  font-size: 1rem;
  background: var(--bg-dark);
  color: var(--text-primary);

  &::placeholder {
    color: var(--text-muted);
  }

  &:focus {
    outline: none;
    border-color: var(--primary);
    background: var(--bg-dark-hover);
  }
`;

const Select = styled.select`
  padding: 0.8rem;
  border: 1px solid var(--border-dark);
  border-radius: 6px;
  font-size: 1rem;
  background: var(--bg-dark);
  color: var(--text-primary);

  &:focus {
    outline: none;
    border-color: var(--primary);
  }

  option {
    background: var(--bg-dark);
    color: var(--text-primary);
  }
`;

const SubmitButton = styled.button`
  background: var(--gradient);
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--glow-cyan);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled.div`
  background: rgba(63, 185, 80, 0.1);
  border: 1px solid var(--success);
  color: var(--success);
  padding: 1rem;
  border-radius: 6px;
  margin-top: 1rem;
  text-align: center;
`;

const BenefitsSection = styled.section`
  padding: 6rem 2rem 4rem;
  background: var(--bg-dark-alt);
  margin-top: 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      rgba(79, 195, 247, 0) 0%,
      rgba(79, 195, 247, 0.4) 50%,
      rgba(79, 195, 247, 0) 100%
    );
  }
`;

const BenefitsTitle = styled.h2`
  font-size: 2.5rem;
  color: var(--text-primary);
  text-align: center;
  margin-bottom: 4rem;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: var(--gradient);
    margin: 1rem auto 0;
    border-radius: 2px;
  }
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const BenefitCard = styled.div`
  background: var(--bg-dark);
  border: 1px solid var(--border-dark);
  padding: 2rem;
  border-radius: 12px;
  text-align: left;
  transition: all 0.3s;

  &:hover {
    border-color: var(--primary);
    box-shadow: var(--glow-cyan);
  }
`;

const BenefitIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const BenefitTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
`;

const BenefitText = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 0.95rem;
`;

const YouTubeSection = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-dark);
`;

const YouTubeText = styled.p`
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-bottom: 1rem;
`;

const YouTubeButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: var(--youtube);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s;

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

const SubscribePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const scriptURL = 'https://script.google.com/macros/s/AKfycbzWpVe3CiNFVv7VWPpdOo5O8_DSJu2hDsELfLjF6q7RdHhbbGNBRNnd2jeAYptCkWqgJw/exec';

    try {
      await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      setSubmitStatus('success');
      setFormData({ name: '', email: '', role: '' });
    } catch (error) {
      console.error('Network or other error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <MainLayout>
      <Head>
        <title>Join the Learning Journey - Learn AI Hub</title>
        <meta name="description" content="Get weekly AI tips, new video notifications, and practical automation guides. Join fellow learners mastering AI tools together." />
      </Head>
      <PageContainer>
        <FormSection>
          <FormTitle>Join the Learning Journey</FormTitle>
          <FormSubtitle>
            Get weekly AI tips, new video notifications, and practical automation guides delivered straight to your inbox.
          </FormSubtitle>
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
              />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="email">
                Email Address
                <RequiredText>(required)</RequiredText>
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                required
              />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="role">What brings you here?</Label>
              <Select
                id="role"
                value={formData.role}
                onChange={e => setFormData({ ...formData, role: e.target.value })}
              >
                <option value="">Select one...</option>
                <option value="beginner">I'm new to AI tools</option>
                <option value="automation">I want to automate my workflow</option>
                <option value="tutorials">I love hands-on tutorials</option>
                <option value="all">All of the above!</option>
              </Select>
            </InputGroup>
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Joining...' : 'Join Free'}
            </SubmitButton>
            {submitStatus === 'success' && (
              <SuccessMessage>
                Welcome to the learning journey! Check your inbox soon.
              </SuccessMessage>
            )}
            {submitStatus === 'error' && (
              <SuccessMessage style={{ color: '#ff4d4d', borderColor: '#ff4d4d', background: 'rgba(255, 77, 77, 0.1)' }}>
                Oops! Something went wrong. Please try again.
              </SuccessMessage>
            )}
          </Form>
          <YouTubeSection>
            <YouTubeText>Also subscribe on YouTube for video tutorials</YouTubeText>
            <YouTubeButton href="https://youtube.com/@learninghubai" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Subscribe on YouTube
            </YouTubeButton>
          </YouTubeSection>
        </FormSection>

        <BenefitsSection>
          <BenefitsTitle>What You'll Get</BenefitsTitle>
          <BenefitsGrid>
            <BenefitCard>
              <BenefitIcon>🎬</BenefitIcon>
              <BenefitTitle>Weekly Video Updates</BenefitTitle>
              <BenefitText>
                Be the first to know when new tutorials and walkthroughs drop on the channel.
              </BenefitText>
            </BenefitCard>
            <BenefitCard>
              <BenefitIcon>📚</BenefitIcon>
              <BenefitTitle>Practical Tutorials</BenefitTitle>
              <BenefitText>
                Step-by-step guides on AI tools and automation workflows you can actually use.
              </BenefitText>
            </BenefitCard>
            <BenefitCard>
              <BenefitIcon>🔍</BenefitIcon>
              <BenefitTitle>Tool Recommendations</BenefitTitle>
              <BenefitText>
                Honest reviews and comparisons to help you choose the right tools for your needs.
              </BenefitText>
            </BenefitCard>
            <BenefitCard>
              <BenefitIcon>🤝</BenefitIcon>
              <BenefitTitle>Community Support</BenefitTitle>
              <BenefitText>
                Connect with fellow learners on the same journey to master AI tools together.
              </BenefitText>
            </BenefitCard>
          </BenefitsGrid>
        </BenefitsSection>
      </PageContainer>
    </MainLayout>
  );
};

export default SubscribePage;
