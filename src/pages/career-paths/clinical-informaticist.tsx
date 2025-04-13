import React from 'react';
import styled from 'styled-components';
import MainLayout from '../../layouts/MainLayout';
import Head from 'next/head';
import Sidebar from '../../components/Sidebar';

// --- Layout Components (Copied from template) ---
const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  gap: 4rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 1rem;
    gap: 2rem;
  }
`;

const MainContent = styled.main`
  flex: 1;
  min-width: 0;
  max-width: 800px; 
  margin: 0 auto;
  width: 100%;
`;

// --- Content Specific Styled Components (Copied from template) ---
const HeaderSection = styled.header`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
`;
const HeaderIcon = styled.div`
  width: 60px;
  height: 60px;
  background-color: rgba(94, 66, 188, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  flex-shrink: 0;
`;
const HeaderContent = styled.div`
  flex-grow: 1;
`;
const PageTitle = styled.h1`
  font-size: 2.2rem;
  color: var(--dark);
  margin-bottom: 0.5rem;
`;
const PageDescription = styled.p`
  color: var(--text);
  font-size: 1.1rem;
  line-height: 1.6;
`;
const ContentSection = styled.section`
  margin-bottom: 3rem;
`;
const SectionTitle = styled.h2`
  font-size: 1.6rem;
  color: var(--dark);
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--primary-light);
`;
const DetailList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
`;
const DetailListItem = styled.li`
  display: flex;           
  align-items: baseline; 
  padding: 0.8rem 0;       
  border-bottom: 1px solid #f0f0f0;
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text);
  gap: 1rem; 

  &:last-child {
    border-bottom: none;
  }

  &::before {
    content: '✓'; 
    flex-shrink: 0; 
    color: var(--primary);
    font-weight: bold;
    font-size: 1.1rem;
  }
`;
const GettingStartedListItem = styled(DetailListItem)`
  &::before {
    content: '→'; 
    color: var(--secondary);
  }
`;
const DetailListItemContent = styled.div`
  flex-grow: 1; 
`;
const DetailListItemLabel = styled.strong`
  margin-right: 0.5em; 
`;

// --- Page Component ---

const ClinicalInformaticistPage: React.FC = () => { // Renamed component
  const pageData = {
    icon: "🏥", // Updated icon
    title: "Clinical Informaticist (AI Specialist)", // Updated title
    description: "Bridge the gap between clinical practice and AI technology, ensuring AI tools are effectively implemented, integrated into workflows, and utilized safely to improve patient care.", // Updated description
    // Updated requirements (skills)
    requirements: [
      "**Clinical Background:** Typically requires a clinical degree (RN, MD, PharmD, etc.) or significant experience working directly in clinical settings.",
      "**Health Informatics:** Strong understanding of health informatics principles, clinical workflows, EHR systems (Epic, Cerner, etc.), and data standards (HL7, FHIR).",
      "**AI/Data Science Literacy:** Foundational knowledge of AI/ML concepts, data analysis principles, and common AI applications in healthcare. Ability to understand model outputs and limitations.",
      "**Workflow Analysis:** Expertise in analyzing and redesigning clinical workflows to incorporate new technologies like AI tools effectively and safely.",
      "**Change Management:** Skills in managing change within clinical environments, including training, user support, and addressing resistance.",
      "**Communication & Training:** Ability to communicate technical concepts clearly to clinical staff and provide effective training on new AI tools and processes.",
      "**Project Management:** Experience managing projects involving technology implementation in healthcare settings.",
      "**Problem Solving:** Ability to identify and troubleshoot issues related to AI tool integration, usability, and clinical impact."
    ],
    // Updated getting started steps
    gettingStarted: [
      "**Leverage Clinical Expertise:** Your clinical background is your primary asset. Identify areas where AI could impact your current field.",
      "**Formal Informatics Education:** Consider a Master's degree or graduate certificate in Health Informatics or Clinical Informatics.",
      "**Learn AI/Data Science Basics:** Take introductory courses on AI, machine learning, and data science specifically tailored for healthcare professionals.",
      "**Gain EHR Expertise:** Deepen your knowledge of EHR systems, focusing on data structures, workflows, and integration capabilities.",
      "**Seek Informatics Roles:** Look for traditional clinical informatics roles first to build experience in workflow analysis and technology implementation.",
      "**Focus on AI Projects:** Volunteer for or seek out projects within your organization that involve implementing or evaluating AI tools.",
      "**Attend Conferences:** Participate in informatics and AI in healthcare conferences (like AMIA, HIMSS) to learn and network.",
      "**Professional Certifications:** Consider certifications like CPHIMS (Certified Professional in Healthcare Information and Management Systems) or informatics board certifications.",
      "**Network with Peers:** Connect with other clinical informaticists, particularly those specializing in AI or analytics.",
      "**Highlight Translation Skills:** Emphasize your ability to bridge the gap between clinical needs and technical solutions in your resume and interviews."
    ]
  };

  // Helper function (copied from template)
  const renderListItem = (item: string) => {
    const match = item.match(/\*\*(.*?):\*\*(.*)/);
    if (match && match.length === 3) {
      const label = match[1].trim() + ":";
      const description = match[2].trim();
      return (
        <DetailListItemContent>
          <DetailListItemLabel>{label}</DetailListItemLabel>
          {description}
        </DetailListItemContent>
      );
    } 
    return <DetailListItemContent>{item}</DetailListItemContent>; 
  };

  return (
    <MainLayout>
      <Head>
        {/* Updated Head */}
        <title>{pageData.title} | Healthcare AI Career Path</title>
        <meta name="description" content={`Learn how a ${pageData.title} integrates AI into clinical workflows, focusing on implementation, usability, and safety.`} />
      </Head>

      <Container>
        <MainContent>
          <HeaderSection>
            <HeaderIcon aria-hidden="true">{pageData.icon}</HeaderIcon>
            <HeaderContent>
              <PageTitle>{pageData.title}</PageTitle>
              <PageDescription>{pageData.description}</PageDescription>
            </HeaderContent>
          </HeaderSection>

          <ContentSection>
            <SectionTitle>Skills Checklist</SectionTitle>
            <DetailList>
              {pageData.requirements.map((item, index) => (
                <DetailListItem key={index}>{renderListItem(item)}</DetailListItem>
              ))}
            </DetailList>
          </ContentSection>

          <ContentSection>
            <SectionTitle>A Day in the Life</SectionTitle>
            {/* Updated Day in the Life paragraph */}
            <p style={{ lineHeight: '1.7', color: 'var(--text)' }}>
              A Clinical Informaticist specializing in AI spends their day at the intersection of patient care and technology. Mornings might involve observing clinical workflows to identify opportunities for AI integration or gathering requirements from clinicians for a new AI tool. You could spend time configuring or testing an AI application within the EHR system, developing training materials, or leading training sessions for doctors and nurses. Collaboration is constant, involving meetings with IT teams to discuss technical integration, AI developers to provide clinical feedback, and hospital leadership to report on implementation progress and outcomes. Troubleshooting user issues and evaluating the real-world impact and safety of AI tools are also key responsibilities.
            </p>
          </ContentSection>

          <ContentSection>
            <SectionTitle>How to Get Started</SectionTitle>
            <DetailList>
              {pageData.gettingStarted.map((item, index) => (
                <GettingStartedListItem key={index}>{renderListItem(item)}</GettingStartedListItem>
              ))}
            </DetailList>
          </ContentSection>

        </MainContent>

        {/* Sidebar remains with sample data */}
        <Sidebar 
          relatedArticles={[
            { title: 'Introduction to Healthcare AI', slug: 'introduction-to-healthcare-ai', tag: 'AI Technology' },
            { title: 'Leveraging Your Epic Expertise for AI', slug: 'epic-expertise-healthcare-ai', tag: 'EHR Systems' },
          ]}
          relatedCaseStudies={[
            { title: 'Job Market Trends in Healthcare AI', slug: 'job-market-trends-healthcare-ai', industry: 'Healthcare' },
          ]}
        /> 
      </Container>
    </MainLayout>
  );
};

export default ClinicalInformaticistPage; // Updated export 