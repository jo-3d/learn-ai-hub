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
    "name": "HealthTech AI Hub",
    "description": "Your trusted resource for navigating the intersection of healthcare technology and artificial intelligence.",
    "url": "https://healthtechaihub.com",
    "sameAs": [
      "https://linkedin.com/company/healthtechaihub",
      "https://twitter.com/healthtechaihub"
    ]
  };

  return (
    <MainLayout>
      <Head>
        <title>About Us | HealthTech AI Hub - Healthcare AI Innovation</title>
        <meta 
          name="description" 
          content="HealthTech AI Hub empowers healthcare professionals with insights, resources, and opportunities at the intersection of healthcare and artificial intelligence." 
        />
        <meta 
          name="keywords" 
          content="healthcare AI, medical technology, healthcare innovation, AI in healthcare, medical AI, healthcare technology" 
        />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="About HealthTech AI Hub" />
        <meta 
          property="og:description" 
          content="Your trusted resource for navigating the intersection of healthcare technology and artificial intelligence." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://healthtechaihub.com/about" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About HealthTech AI Hub" />
        <meta 
          name="twitter:description" 
          content="Empowering healthcare professionals with AI innovation insights and resources." 
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://healthtechaihub.com/about" />

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
            Welcome to HealthTech AI Hub—your trusted resource and strategic partner at the intersection of healthcare technology and artificial intelligence.
          </Subtitle>
        </HeroContent>
      </HeroSection>

      <Container>
        <ContentSection>
          <SectionTitle>Our Mission</SectionTitle>
          <Paragraph>
            Our mission is to bridge the gap between AI innovation and clinical practice, equipping professionals and organizations to navigate the evolving world of healthcare AI ethically and effectively.
          </Paragraph>
        </ContentSection>

        <ContentSection>
          <SectionTitle>Who We Are</SectionTitle>
          <Paragraph>
            Founded by a healthcare technology leader with over 20 years of implementation experience and supported by cross-disciplinary experts, HealthTech AI Hub combines deep industry knowledge with a passion for responsible AI innovation. We focus on demystifying healthcare AI, turning complexity into clarity and ambition into action.
          </Paragraph>
        </ContentSection>

        <ContentSection>
          <SectionTitle>What We Offer</SectionTitle>
          <Paragraph>
            We provide curated articles, practical guides, career development tools, and strategic analysis focused on the real-world application of AI in healthcare. Our platform fosters a community for learning, connection, and navigating the evolving landscape of medical technology. Additionally, we offer specialized consulting services to help organizations implement AI strategies effectively.
          </Paragraph>
          <Link href="/consulting-services" passHref legacyBehavior>
             <LinkButton>View Our Services</LinkButton>
          </Link>
        </ContentSection>

        <CallToActionSection>
          <SectionTitle>Get In Touch</SectionTitle>
          <Paragraph>
            Connect with us if you're exploring AI in healthcare, seeking strategic guidance, or interested in collaboration.
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