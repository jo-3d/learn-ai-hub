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
      icon: "🧭",
      title: "AI Strategy & Implementation Planning",
      description: "Develop clear roadmaps for AI adoption, aligning technology with business goals and clinical needs. We help define use cases, assess readiness, and plan phased rollouts."
    },
    {
      icon: "🛡️",
      title: "Ethical AI Adoption & Governance",
      description: "Establish robust frameworks for responsible AI use. We assist with policy development, bias mitigation strategies, transparency protocols, and ensuring ethical alignment."
    },
    {
      icon: "🔄",
      title: "Clinical Workflow Integration",
      description: "Seamlessly integrate AI tools into existing clinical workflows. We analyze current processes, design optimized workflows, and ensure smooth adoption with minimal disruption."
    },
    {
      icon: "📜",
      title: "Regulatory & Compliance Readiness",
      description: "Navigate the complex regulatory landscape (HIPAA, FDA SaMD guidance). We help ensure your AI initiatives meet compliance standards and prepare for audits."
    },
    {
      icon: "💾",
      title: "Healthcare Data Governance Programs",
      description: "Build solid foundations for AI with effective data governance. We help establish policies for data quality, privacy, security, access control, and lifecycle management."
    }
  ];

  return (
    <MainLayout>
      <Head>
        <title>AI Consulting Services | HealthTech AI Hub</title>
        <meta 
          name="description" 
          content="Strategic AI consulting for healthcare organizations. Explore services in AI strategy, implementation, ethics, governance, workflow integration, and compliance."
        />
        <meta 
          name="keywords" 
          content="healthcare AI consulting, AI implementation services, healthcare AI strategy, ethical AI consulting, medical AI governance, clinical workflow AI, healthcare compliance AI, data governance healthcare" 
        />
        <link rel="canonical" href="https://healthtechaihub.com/consulting-services" />
        {/* Add OG/Twitter tags if desired */}
      </Head>

      <HeroSection>
        <HeroContent>
          <PageTitle>Healthcare AI Consulting Services</PageTitle>
          <PageSubtitle>
            Navigate the complexities of artificial intelligence in healthcare with expert guidance. We partner with you to develop strategies, implement solutions, and ensure responsible innovation.
          </PageSubtitle>
        </HeroContent>
      </HeroSection>

      <Container>
        {/* Services Overview */}
        <ContentSection>
          <SectionTitle>Our Expertise</SectionTitle>
          <SectionIntro>
            We offer specialized consulting services designed to help healthcare providers, digital health companies, and AI vendors successfully leverage artificial intelligence. Our approach combines deep industry knowledge with practical implementation experience.
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

        {/* Who We Help / Approach (Optional - Simple Text Section) */}
        <ContentSection>
          <SectionTitle>Who We Partner With</SectionTitle>
          <SectionIntro>
            Our clients include hospitals and health systems seeking to implement AI, digital health startups developing innovative AI products, and established AI vendors looking to refine their healthcare offerings and strategy.
          </SectionIntro>
           {/* Add more about approach if desired */}
        </ContentSection>

        {/* Contact CTA Section - Now using shared ContactForm */}
        <ContactSection>
          <SectionTitle>Ready to Accelerate Your AI Journey?</SectionTitle>
          <SectionIntro>
            Let's discuss how our strategic consulting services can help you achieve your goals. Fill out the form below to schedule an initial consultation.
          </SectionIntro>
          
          <ContactForm 
            source="Consulting Services Page"
            successMessage="Thank you for your interest! We will be in touch soon to discuss your needs."
            buttonText="Request Consultation"
          />
        </ContactSection>

      </Container>
    </MainLayout>
  );
};

export default ConsultingServicesPage; 