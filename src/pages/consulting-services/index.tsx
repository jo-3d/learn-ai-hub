import React, { useState } from 'react';
import styled from 'styled-components';
import MainLayout from '../../layouts/MainLayout';
import Head from 'next/head';
import ContactForm from '../../components/ContactForm';

// --- Page Structure Components ---
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
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const PageTitle = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 1.5rem;
  color: white;
`;

const PageSubtitle = styled.p`
  font-size: 1.25rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
`;

const ContentSection = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: var(--dark);
  margin-bottom: 2.5rem;
  text-align: center;
`;

const SectionIntro = styled.p`
  font-size: 1.1rem;
  color: var(--text);
  line-height: 1.8;
  margin: 0 auto 3rem;
  max-width: 800px;
  text-align: center;
`;

// --- Service Cards --- 
const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.1);
  }
`;

const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  margin: 0 auto 1.5rem;
  background-color: var(--primary-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: var(--primary);
`;

const ServiceTitle = styled.h3`
  font-size: 1.4rem;
  color: var(--dark);
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: var(--text);
  line-height: 1.7;
`;

// --- Contact Form Section ---
const ContactSection = styled(ContentSection)`
  background-color: var(--light);
  padding: 4rem 2rem;
  border-radius: 12px;
  margin-top: 4rem;
`;

// --- Page Component ---
const ConsultingServicesPage: React.FC = () => {
  const services = [
    {
      icon: "👤",
      title: "1-on-1 AI Guidance",
      description: "Get personalized help with AI tools, prompt engineering, and workflow optimization. Perfect for professionals looking to enhance their AI skills."
    },
    {
      icon: "💼",
      title: "Small Business AI Solutions",
      description: "Custom AI implementation strategies for small businesses. We help you automate tasks, enhance customer service, and optimize operations."
    },
    {
      icon: "🎯",
      title: "Project-Based Consulting",
      description: "Need help with a specific AI project? We provide focused consulting to help you plan, implement, and optimize AI solutions for your goals."
    },
    {
      icon: "🔄",
      title: "Workflow Automation",
      description: "Transform your workflows with AI. We help you identify opportunities for automation and implement the right tools to save time and reduce costs."
    },
    {
      icon: "📊",
      title: "AI Tool Selection & Setup",
      description: "Get expert help choosing and configuring the right AI tools for your needs, from ChatGPT and Claude to specialized AI solutions."
    }
  ];

  return (
    <MainLayout>
      <Head>
        <title>AI Consulting & Support Services | Learn AI Hub</title>
        <meta 
          name="description" 
          content="Get personalized AI consulting and support. From one-on-one guidance to small business implementation, we help you succeed with AI tools and automation."
        />
        <meta 
          name="keywords" 
          content="AI consulting, personal AI help, small business AI, AI implementation, AI automation, AI tools consulting, ChatGPT consulting, AI workflow optimization" 
        />
        <link rel="canonical" href="https://learnaihub.com/consulting-services" />
      </Head>

      <HeroSection>
        <HeroContent>
          <PageTitle>AI Consulting & Support Services</PageTitle>
          <PageSubtitle>
            Get expert guidance to implement AI in your work and business. Whether you need one-on-one help or 
            small business consulting, we're here to help you leverage AI tools effectively.
          </PageSubtitle>
        </HeroContent>
      </HeroSection>

      <Container>
        <ContentSection>
          <SectionTitle>Our Services</SectionTitle>
          <SectionIntro>
            We offer personalized consulting services to help individuals and businesses successfully implement AI tools 
            and automation. Our approach combines practical experience with hands-on guidance to ensure your success.
          </SectionIntro>
          <ServicesGrid>
            {services.map((service, index) => (
              <ServiceCard key={index}>
                <ServiceIcon>{service.icon}</ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </ContentSection>

        <ContentSection>
          <SectionTitle>Who We Help</SectionTitle>
          <SectionIntro>
            Our services are designed for individuals, professionals, and small businesses looking to leverage AI effectively. 
            Whether you're just starting with AI or looking to optimize your existing AI workflows, we provide the guidance you need.
          </SectionIntro>
        </ContentSection>

        <ContactSection>
          <SectionTitle>Ready to Get Started?</SectionTitle>
          <SectionIntro>
            Book a free consultation to discuss your AI needs. We'll help you identify the best approach for your goals and create 
            a plan for success.
          </SectionIntro>
          
          <ContactForm 
            source="Consulting Services Page"
            successMessage="Thanks for reaching out! We'll contact you soon to discuss how we can help with your AI journey."
            buttonText="Book Free Consultation"
          />
        </ContactSection>

      </Container>
    </MainLayout>
  );
};

export default ConsultingServicesPage; 