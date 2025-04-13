import React from 'react';
import styled from 'styled-components';
import MainLayout from '../../layouts/MainLayout';
import Link from 'next/link';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';
import HealthcareAiCareerPathsTable from '../../components/DataGovernanceRolesTable';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: var(--dark);
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: var(--text);
  font-size: 1.1rem;
  max-width: 800px;
  margin: 0 auto;
`;

const CareerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const CareerCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CareerIcon = styled.div`
  width: 50px;
  height: 50px;
  background-color: rgba(94, 66, 188, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const CareerTitle = styled.h2`
  font-size: 1.3rem;
  color: var(--dark);
  margin-bottom: 0.5rem;
`;

const CareerDescription = styled.p`
  color: var(--text);
  font-size: 0.95rem;
  line-height: 1.6;
`;

const ResourcesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const ResourceCard = styled.div<{ $accent?: string }>`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ResourceAccent = styled.div<{ $color?: string }>`
  height: 40px;
  background-color: ${props => props.$color || 'var(--primary)'};
`;

const ResourceContent = styled.div`
  padding: 1.5rem;
`;

const ResourceType = styled.span`
  display: inline-block;
  padding: 0.2rem 0.8rem;
  background-color: rgba(94, 66, 188, 0.1);
  color: var(--secondary);
  border-radius: 50px;
  font-size: 0.8rem;
  margin-bottom: 0.8rem;
`;

const ResourceTitle = styled.h3`
  font-size: 1.2rem;
  color: var(--dark);
  margin-bottom: 0.8rem;
`;

const ResourceDescription = styled.p`
  color: var(--text);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ResourceLink = styled.a`
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: var(--secondary);
  }
`;

const FeaturedSection = styled.div`
  margin-bottom: 4rem;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  padding: 3rem 0;
  color: white;
`;

const FeaturedTitle = styled.h2`
  font-size: 1.8rem;
  color: white;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const FeaturedSubtitle = styled.p`
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  margin-bottom: 2rem;
`;

const JobsGrid = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 1.5rem;
  padding-bottom: 1.5rem;
  margin-top: 2rem;
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`;

const JobCard = styled.a`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 1.5rem;
  color: white;
  text-decoration: none;
  transition: transform 0.3s, background 0.3s;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 300px;
  flex-shrink: 0;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.15);
  }
`;

const JobTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

const JobTags = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const JobTag = styled.span`
  background: rgba(255, 255, 255, 0.2);
  padding: 0.2rem 0.8rem;
  border-radius: 50px;
  font-size: 0.8rem;
`;

const CareerPathsPage = () => {
  // --- Career Paths Data (Simpler, no checklist/gettingStarted) ---
  const careerPaths = [
    {
      icon: "🖥️",
      title: "Healthcare AI Engineer",
      description: "Design, build, test, and deploy AI/ML models for healthcare applications.",
      link: "/career-paths/ai-ml-engineer"
    },
    {
      icon: "📊",
      title: "Clinical Data Scientist",
      description: "Analyze health datasets to extract insights and build predictive models.",
      link: "/career-paths/clinical-data-scientist"
    },
    {
      icon: "📈",
      title: "Healthcare AI Product Manager",
      description: "Define vision and strategy for AI-powered healthcare products.",
      link: "/career-paths/ai-product-manager"
    },
    {
      icon: "🏥",
      title: "Clinical Informaticist (AI Specialist)",
      description: "Implement and integrate AI tools within clinical settings and workflows.",
      link: "/career-paths/clinical-informaticist"
    },
    {
      icon: "📜",
      title: "AI Ethicist / Governance Specialist (Healthcare)",
      description: "Ensure ethical, fair, transparent, and compliant AI development and deployment.",
      link: "/career-paths/ai-ethicist"
    },
    {
      icon: "🔒",
      title: "AI Data Governance Lead",
      description: "Oversee data handling, privacy policies, and compliance for AI systems in healthcare.",
      link: "/career-paths/ai-data-governance"
    }
  ];

  // --- Updated Data: Trending Roles --- 
  const trendingRoles = [
    {
      title: "AI Implementation Specialist",
      tags: ["Healthcare IT", "AI/ML", "Integration", "Clinical Workflows"],
      searchLink: "https://www.linkedin.com/jobs/search/?keywords=Healthcare%20AI%20Implementation%20Specialist&location=United%20States&f_TPR=r604800&sortBy=DD"
    },
    {
      title: "Healthcare Data Scientist",
      tags: ["Data Science", "Python", "Analytics", "Machine Learning", "Statistics"],
      searchLink: "https://www.linkedin.com/jobs/search/?keywords=Healthcare%20Data%20Scientist&location=United%20States&f_TPR=r604800&sortBy=DD"
    },
    {
      title: "Clinical AI Product Manager",
      tags: ["Product Management", "Clinical Strategy", "AI/ML Products", "Roadmap"],
      searchLink: "https://www.linkedin.com/jobs/search/?keywords=Clinical%20AI%20Product%20Manager&location=United%20States&f_TPR=r604800&sortBy=DD"
    },
    {
      title: "AI Ethicist / Governance Lead",
      tags: ["Ethics", "Compliance", "AI Policy", "Healthcare Regulations"],
      searchLink: "https://www.linkedin.com/jobs/search/?keywords=Healthcare%20AI%20Ethicist%20OR%20Governance&location=United%20States&f_TPR=r604800&sortBy=DD"
    }    
  ];

  const careerResources = [
    {
      type: "Guide",
      title: "Healthcare IT to AI Transition",
      description: "A comprehensive guide for IT professionals moving into healthcare AI roles.",
      link: "/careers/transition-guide",
      accentColor: "#d4e6ff"
    },
    {
      type: "Assessment",
      title: "Skills Gap Analysis",
      description: "Evaluate your readiness for AI healthcare roles and identify learning needs.",
      link: "/careers/skills-assessment",
      accentColor: "#e1d4ff"
    },
    {
      type: "Course",
      title: "AI in Healthcare Fundamentals",
      description: "Essential concepts and skills for working with AI in healthcare settings.",
      link: "/careers/fundamentals",
      accentColor: "#d4ffec"
    },
    {
      type: "Template",
      title: "Resume Builder",
      description: "Customizable templates for healthcare AI professional resumes.",
      link: "/careers/resume-templates",
      accentColor: "#ffe1d4"
    },
    {
      type: "Guide",
      title: "Interview Preparation",
      description: "Common questions and preparation tips for healthcare AI roles.",
      link: "/careers/interview-prep",
      accentColor: "#d4f0ff"
    },
    {
      type: "Directory",
      title: "Learning Resources",
      description: "Curated list of courses, certifications, and learning materials.",
      link: "/careers/learning-resources",
      accentColor: "#ffd4e6"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Healthcare AI Career Development | HealthTech AI Hub",
    "description": "Advance your career in healthcare AI technology with professional development resources, learning paths, and transition guides. Explore featured job opportunities in healthcare AI.",
    "provider": {
      "@type": "Organization",
      "name": "HealthTech AI Hub",
      "url": "https://healthtechaihub.com"
    },
    "offers": trendingRoles.map(role => ({
      "@type": "JobPosting",
      "title": role.title,
      "hiringOrganization": { "@type": "Organization", "name": "HealthTech AI Hub" },
      "jobLocation": { "@type": "Place", "address": "United States" },
      "employmentType": "FULL_TIME",
      "description": role.tags.join(", ")
    }))
  };

  return (
    <MainLayout>
      <Head>
        <title>Healthcare AI Career Development | Professional Growth Resources</title>
        <meta name="description" content="Advance your career in healthcare AI with professional development resources, learning paths, and transition guides. Access curated job opportunities and skill-building tools." />
        <meta name="keywords" content="healthcare AI careers, professional development, career transition, healthcare technology, AI implementation, data science, clinical AI" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Healthcare AI Career Development | HealthTech AI Hub" />
        <meta property="og:description" content="Advance your career in healthcare AI with professional development resources, learning paths, and transition guides." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://healthtechaihub.com/careers" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Healthcare AI Career Development" />
        <meta name="twitter:description" content="Professional development resources and opportunities in healthcare AI technology." />

        {/* Canonical URL */}
        <link rel="canonical" href="https://healthtechaihub.com/careers" />

        {/* Structured Data */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <Container>
        <PageHeader>
          <Title>Career Paths in Healthcare AI</Title>
          <Description>
            Explore career opportunities and growth paths at the intersection of AI and healthcare technology.
            Find your path to success in this rapidly evolving field.
          </Description>
        </PageHeader>

        <CareerGrid>
          {careerPaths.map((path) => (
            <Link href={path.link} key={path.title} passHref legacyBehavior>
              <CareerCard as="a">
                <CareerIcon aria-hidden="true">{path.icon}</CareerIcon>
                <CareerTitle>{path.title}</CareerTitle>
                <CareerDescription>{path.description}</CareerDescription>
              </CareerCard>
            </Link>
          ))}
        </CareerGrid>

        <FeaturedSection> 
          <Container>
            <FeaturedTitle>Trending Roles in Healthcare AI</FeaturedTitle>
            <FeaturedSubtitle>
              Explore current job openings for key roles in the industry
            </FeaturedSubtitle>
            <JobsGrid>
              {trendingRoles.map((role) => (
                <JobCard 
                  href={role.searchLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  key={role.title}
                >
                  <div>
                    <JobTitle>{role.title}</JobTitle>
                  </div>
                  <JobTags>
                    {role.tags.map((tag) => (
                      <JobTag key={tag}>{tag}</JobTag>
                    ))}
                  </JobTags>
                </JobCard>
              ))}
            </JobsGrid>
          </Container>
        </FeaturedSection>
      </Container>
    </MainLayout>
  );
};

// Add screen reader only style
const GlobalStyle = createGlobalStyle`
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;

export default CareerPathsPage; 