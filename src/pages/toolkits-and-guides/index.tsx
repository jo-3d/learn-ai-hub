import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import MainLayout from '../../layouts/MainLayout';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const HeroSection = styled.section`
  background: var(--light);
  padding: 2rem 0;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: var(--dark);
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1.25rem;
  color: var(--text);
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 2rem;
  line-height: 1.6;
`;

const ResourcesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 2.5rem;
  margin: 3rem 0;
`;

const ResourceCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ResourceHeader = styled.div`
  background: ${props => props.color || '#d4e6ff'};
  padding: 2rem;
  color: var(--dark);
`;

const ResourceTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ResourceDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.5;
`;

const ResourceContent = styled.div`
  padding: 1.5rem;
`;

const ResourceFeatures = styled.ul`
  margin: 1rem 0;
  padding-left: 1.5rem;
  
  li {
    margin-bottom: 0.75rem;
    position: relative;
    padding-left: 0.5rem;
  }
`;

const ResourceButton = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background: var(--primary);
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-weight: 500;
  transition: all 0.3s;
  
  &:hover {
    background: var(--secondary);
    transform: translateY(-2px);
  }
`;

const ImplementationPage = () => {
  return (
    <MainLayout>
      <HeroSection>
        <Container>
          <Title>Toolkits & Guides</Title>
          <Description>
            Access our collection of tools, templates, and implementation guides designed to help healthcare organizations 
            successfully implement and manage AI solutions.
          </Description>
        </Container>
      </HeroSection>

      <Container>
        <ResourcesGrid>
          <ResourceCard>
            <ResourceHeader color="#d4e6ff">
              <ResourceTitle>AI Implementation Checklist</ResourceTitle>
              <ResourceDescription>
                A structured framework to guide healthcare organizations through the complex process of implementing AI solutions.
              </ResourceDescription>
            </ResourceHeader>
            <ResourceContent>
              <ResourceFeatures>
                <li>Comprehensive phases from strategy to governance</li>
                <li>Interactive checkboxes to track implementation progress</li>
                <li>Covers clinical, technical, ethical, and regulatory considerations</li>
                <li>Tailored specifically for healthcare organizations</li>
              </ResourceFeatures>
              <Link href="/toolkits-and-guides/ai-implementation-checklist" passHref>
                <ResourceButton as="span">View Checklist</ResourceButton>
              </Link>
            </ResourceContent>
          </ResourceCard>

          <ResourceCard>
            <ResourceHeader color="#e1d4ff">
              <ResourceTitle>AI Implementation Guide</ResourceTitle>
              <ResourceDescription>
                An in-depth guide with detailed explanations, best practices, and implementation strategies for AI in healthcare.
              </ResourceDescription>
            </ResourceHeader>
            <ResourceContent>
              <ResourceFeatures>
                <li>Comprehensive explanations for each implementation phase</li>
                <li>Evidence-based best practices and practical examples</li>
                <li>Detailed ethical and regulatory considerations</li>
                <li>Real-world implementation strategies and KPIs</li>
              </ResourceFeatures>
              <Link href="/toolkits-and-guides/ai-implementation-guide" passHref>
                <ResourceButton as="span">View Guide</ResourceButton>
              </Link>
            </ResourceContent>
          </ResourceCard>

          <ResourceCard>
            <ResourceHeader color="#ffd4e5">
              <ResourceTitle>Healthcare Data Governance Checklist</ResourceTitle>
              <ResourceDescription>
                A comprehensive checklist for establishing and maintaining robust data governance practices in healthcare AI implementations.
              </ResourceDescription>
            </ResourceHeader>
            <ResourceContent>
              <ResourceFeatures>
                <li>Data privacy and security compliance steps</li>
                <li>Data quality assessment framework</li>
                <li>Access control and audit procedures</li>
                <li>Data lifecycle management guidelines</li>
              </ResourceFeatures>
              <Link href="/toolkits-and-guides/data-governance-checklist" passHref>
                <ResourceButton as="span">View Checklist</ResourceButton>
              </Link>
            </ResourceContent>
          </ResourceCard>

          <ResourceCard>
            <ResourceHeader color="#d4ffec">
              <ResourceTitle>Healthcare Data Governance Guide</ResourceTitle>
              <ResourceDescription>
                An in-depth guide on implementing and maintaining effective data governance practices for AI in healthcare settings.
              </ResourceDescription>
            </ResourceHeader>
            <ResourceContent>
              <ResourceFeatures>
                <li>Detailed data governance frameworks and models</li>
                <li>HIPAA and regulatory compliance strategies</li>
                <li>Data quality management best practices</li>
                <li>Risk mitigation and security protocols</li>
              </ResourceFeatures>
              <Link href="/toolkits-and-guides/data-governance-guide" passHref>
                <ResourceButton as="span">View Guide</ResourceButton>
              </Link>
            </ResourceContent>
          </ResourceCard>
        </ResourcesGrid>

        <div style={{ padding: '2rem', background: 'var(--light)', borderRadius: '12px', marginBottom: '3rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>Why Use These Resources?</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1rem' }}>
            Healthcare organizations face unique challenges when implementing AI solutions. These comprehensive resources
            have been developed specifically to address the complex requirements of healthcare settings, including:
          </p>
          <ul style={{ paddingLeft: '1.5rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
            <li>Clinical value and patient safety considerations</li>
            <li>Data privacy and security requirements (HIPAA, etc.)</li>
            <li>Technical integration with existing healthcare systems</li>
            <li>Ethical and regulatory compliance</li>
            <li>Change management and clinical workflow integration</li>
          </ul>
        </div>

        <div style={{ paddingBottom: '4rem' }}></div>
      </Container>
    </MainLayout>
  );
};

export default ImplementationPage; 