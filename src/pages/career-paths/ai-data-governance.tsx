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

const AiDataGovernanceLeadPage: React.FC = () => { // Renamed component
  const pageData = {
    icon: "🔒", // Updated icon
    title: "AI Data Governance Lead", // Updated title
    description: "Establish and oversee policies, standards, and processes for managing healthcare data used in AI systems, ensuring quality, privacy, security, and compliance.", // Updated description
    // Updated requirements (skills)
    requirements: [
      "**Data Governance Expertise:** Deep understanding of data governance frameworks (e.g., DAMA-DMBOK), principles, and best practices, including data quality, metadata management, data lineage, and data stewardship.",
      "**Healthcare Domain Knowledge:** Strong familiarity with healthcare data types (EHR, claims, imaging), data sources, clinical workflows, and relevant data standards (HL7, FHIR, DICOM).",
      "**Regulatory & Privacy Knowledge:** Expertise in data privacy regulations (HIPAA, GDPR, CCPA) and their implications for AI data handling. Understanding of data security principles.",
      "**AI/ML Literacy:** Good understanding of the AI/ML lifecycle, data requirements for model training and validation, potential data-related biases, and data quality impacts on AI performance.",
      "**Policy Development & Implementation:** Proven ability to develop, document, communicate, and enforce data governance policies and standards across an organization.",
      "**Leadership & Collaboration:** Ability to lead data governance initiatives, influence stakeholders (data scientists, IT, legal, compliance, clinical teams), and foster a data-conscious culture.",
      "**Data Management Tools:** Familiarity with data cataloging, metadata management, data quality monitoring, and master data management (MDM) tools.",
      "**Risk Management:** Skill in identifying and mitigating data-related risks (privacy breaches, quality issues, compliance violations) in the context of AI."
    ],
    // Updated getting started steps
    gettingStarted: [
      "**Leverage Data Management Experience:** Roles in data warehousing, database administration, data analysis, or traditional data governance provide a strong foundation.",
      "**Specialize in Data Governance:** Pursue certifications like Certified Data Management Professional (CDMP) or specific training in data governance frameworks.",
      "**Focus on Healthcare Data:** Gain deep experience working directly with healthcare data, understanding its complexities and nuances.",
      "**Learn AI Data Needs:** Understand the specific data quality, privacy, and ethical considerations unique to training and deploying AI models.",
      "**Study Relevant Regulations:** Become an expert on HIPAA and other data privacy laws applicable to healthcare and AI.",
      "**Develop Policy Skills:** Practice writing clear data policies and standards. Analyze existing governance frameworks.",
      "**Gain Leadership Experience:** Seek opportunities to lead data-related projects or mentor junior data professionals.",
      "**Explore Governance Tools:** Familiarize yourself with leading data governance and cataloging platforms.",
      "**Network:** Connect with data governance professionals, particularly those working in healthcare or on AI initiatives.",
      "**Targeted Job Search:** Look for roles like Data Governance Manager, Data Steward Lead, or Information Governance Lead within healthcare organizations, focusing on opportunities with an AI or analytics component."
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
        <meta name="description" content={`Discover the role of an ${pageData.title} in managing data policies, quality, and compliance for AI in healthcare.`} />
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
              The AI Data Governance Lead's day is centered on establishing trust and control over data used for AI. Activities might include defining data quality standards for ML training sets, developing policies for data usage and access control for AI models, or working with data stewards to document data lineage. You could spend time collaborating with legal and compliance teams to ensure AI data practices meet regulatory requirements, presenting governance frameworks to leadership, or selecting and implementing data cataloging tools. Monitoring data quality metrics, investigating data issues impacting AI performance, and educating teams on data governance best practices are also common tasks.
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

export default AiDataGovernanceLeadPage; // Updated export 