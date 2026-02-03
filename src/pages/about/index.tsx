import React, { useState } from 'react';
import styled from 'styled-components';
import MainLayout from '../../layouts/MainLayout';
import Head from 'next/head';
import Link from 'next/link';
import ContactForm from '../../components/ContactForm';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 4rem;
`;

const HeroSection = styled.div`
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  padding: 5rem 0;
  color: white;
  margin-bottom: 4rem;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 0 2rem;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 1.5rem;
  color: white;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
`;

const ContentSection = styled.section`
  margin: 0 auto 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: var(--dark);
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--primary-light);
  display: inline-block;
`;

const Paragraph = styled.p`
  color: var(--text);
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;

const LinkButton = styled.a`
  display: inline-block;
  padding: 0.8rem 2rem;
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
  text-decoration: none;
  margin-top: 1rem;

  &:hover {
    background-color: var(--secondary);
    text-decoration: none;
  }
`;

const CallToActionSection = styled(ContentSection)`
  background-color: var(--light);
  border-radius: 12px;
  padding: 3rem;
  margin-top: 4rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const AboutPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "LearnAIHub",
    "description": "Your trusted resource for navigating and mastering AI tools and technologies.",
    "url": "https://learnaihub.com",
    "sameAs": [
      "https://linkedin.com/company/learnaihub",
      "https://twitter.com/learnaihub"
    ]
  };

  return (
    <MainLayout>
      <Head>
        <title>About Us | LearnAIHub - Your Gateway to AI Mastery</title>
        <meta 
          name="description" 
          content="LearnAIHub empowers individuals and professionals with insights, resources, and tutorials to excel in the world of artificial intelligence." 
        />
        <meta 
          name="keywords" 
          content="AI learning, AI tutorials, technology education, AI tools, generative AI, prompt engineering" 
        />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="About LearnAIHub" />
        <meta 
          property="og:description" 
          content="Your trusted resource for navigating and mastering AI tools and technologies." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://learnaihub.com/about" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About LearnAIHub" />
        <meta 
          name="twitter:description" 
          content="Empowering everyone with AI knowledge, tutorials, and resources." 
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://learnaihub.com/about" />

        {/* Structured Data */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <HeroSection>
        <HeroContent>
          <Title>About Us</Title>
          <Subtitle>
            Welcome to LearnAIHub—your go-to destination for mastering AI tools and technologies through practical tutorials, resources, and guidance.
          </Subtitle>
        </HeroContent>
      </HeroSection>

      <Container>
        <ContentSection>
          <SectionTitle>Our Mission</SectionTitle>
          <Paragraph>
            Our mission is to demystify artificial intelligence and make it accessible to everyone. We provide clear, practical guidance to help you harness the power of AI tools to enhance your productivity, creativity, and professional capabilities.
          </Paragraph>
        </ContentSection>

        <ContentSection>
          <SectionTitle>Who We Are</SectionTitle>
          <Paragraph>
            Founded by a team of AI enthusiasts and educators, LearnAIHub brings together expertise in various AI technologies with a passion for teaching and simplifying complex concepts. We're committed to helping both beginners and advanced users navigate the rapidly evolving AI landscape.
          </Paragraph>
        </ContentSection>

        <ContentSection>
          <SectionTitle>What We Offer</SectionTitle>
          <Paragraph>
            We provide step-by-step tutorials, practical guides, curated resources, and tips for mastering tools like ChatGPT, Midjourney, and other AI platforms. Our content focuses on real-world applications that you can implement immediately. We also foster a community where learners can share experiences and learn from each other.
          </Paragraph>
          <Link href="/consulting-services" passHref legacyBehavior>
             <LinkButton>View Our Services</LinkButton>
          </Link>
        </ContentSection>

        <CallToActionSection>
          <SectionTitle>Get In Touch</SectionTitle>
          <Paragraph>
            Have questions about AI tools? Looking for specific tutorials? Want to suggest content or collaborate with us? We'd love to hear from you!
          </Paragraph>
          <Paragraph>
            Fill out the form below or reach out through our social channels.
          </Paragraph>
          
          <ContactForm 
            source="About Page"
            successMessage="Thank you for your message! We will be in touch soon."
            buttonText="Send Message"
          />
        </CallToActionSection>
      </Container>
    </MainLayout>
  );
};

export default AboutPage; 