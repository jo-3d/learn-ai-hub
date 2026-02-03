import React from 'react';
import styled from 'styled-components';
import MainLayout from '../../layouts/MainLayout';
import Head from 'next/head';
import Link from 'next/link';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const HeroSection = styled.div`
  background: linear-gradient(135deg, #2A7DE1 0%, #5E42BC 100%);
  padding: 6rem 0;
  color: white;
  text-align: center;
  border-radius: 12px;
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  color: white;
`;

const Subtitle = styled.p`
  font-size: 1.4rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 2rem;
  opacity: 0.9;
`;

const ComingSoonSection = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

const ComingSoonTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const ComingSoonText = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 700px;
  margin: 0 auto 2rem;
  line-height: 1.7;
`;

const NotifyButton = styled.a`
  display: inline-block;
  background-color: #5E42BC;
  color: white;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #2A7DE1;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const EventFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 4rem 0;
`;

const FeatureCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  text-align: center;
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #333;
`;

const FeatureDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const EventsPage: React.FC = () => {
  return (
    <MainLayout>
      <Head>
        <title>Live AI Classes Coming Soon | LearnAIHub</title>
        <meta 
          name="description" 
          content="Join our upcoming live classes to master AI tools. Expert-led sessions on prompt engineering, ChatGPT, and more. Subscribe to get notified when registration opens." 
        />
      </Head>
      
      <Container>
        <HeroSection>
          <Title>LearnAIHub Live Events</Title>
          <Subtitle>
            Interactive AI classes and workshops to help you master the latest tools and techniques
          </Subtitle>
        </HeroSection>
        
        <ComingSoonSection>
          <ComingSoonTitle>Live Classes Coming Soon!</ComingSoonTitle>
          <ComingSoonText>
            We're preparing a series of interactive live classes to help you master AI tools through hands-on learning. 
            Our expert-led sessions will cover everything from prompt engineering to advanced ChatGPT techniques.
            Be the first to know when registration opens!
          </ComingSoonText>
          <Link href="/subscribe" passHref>
            <NotifyButton>Get Notified</NotifyButton>
          </Link>
        </ComingSoonSection>
        
        <EventFeatures>
          <FeatureCard>
            <FeatureIcon>👨‍🏫</FeatureIcon>
            <FeatureTitle>Expert-Led Sessions</FeatureTitle>
            <FeatureDescription>
              Learn directly from AI practitioners with real-world experience implementing these tools in various industries.
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureIcon>🔄</FeatureIcon>
            <FeatureTitle>Interactive Workshops</FeatureTitle>
            <FeatureDescription>
              Not just lectures - get hands-on experience with guided exercises and immediate feedback.
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureIcon>📱</FeatureIcon>
            <FeatureTitle>Live Q&A Sessions</FeatureTitle>
            <FeatureDescription>
              Get your specific questions answered in real-time and overcome your AI implementation challenges.
            </FeatureDescription>
          </FeatureCard>
        </EventFeatures>
      </Container>
    </MainLayout>
  );
};

export default EventsPage; 