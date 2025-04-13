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

const AiEthicistPage: React.FC = () => { // Renamed component
  const pageData = {
    icon: "📜", // Updated icon
    title: "AI Ethicist / Governance Specialist (Healthcare)", // Updated title
    description: "Ensure the responsible, ethical, fair, transparent, and compliant design, development, and deployment of AI systems within the healthcare context.", // Updated description
    // Updated requirements (skills)
    requirements: [
      "**Education:** Advanced degree (Master's or PhD) in fields like Bioethics, Law, Public Policy, Philosophy, Sociology, or Computer Science with a focus on ethics/governance.",
      "**Ethical Frameworks:** Deep understanding of ethical theories, principles of biomedical ethics (autonomy, beneficence, non-maleficence, justice), and AI ethics frameworks.",
      "**Regulatory Knowledge:** Expertise in relevant regulations and guidelines (HIPAA, GDPR, AI Act drafts, FDA guidance on AI/ML software).",
      "**AI/ML Understanding:** Strong conceptual understanding of how AI/ML models work, common sources of bias, fairness metrics, explainability techniques (XAI), and potential risks.",
      "**Risk Assessment:** Ability to identify, analyze, and evaluate ethical, legal, and social risks associated with healthcare AI applications.",
      "**Policy Development:** Skill in drafting, implementing, and monitoring AI governance policies, standards, and procedures.",
      "**Communication:** Excellent ability to communicate complex ethical and regulatory concepts to diverse audiences (technical teams, clinicians, legal counsel, leadership).",
      "**Stakeholder Engagement:** Experience facilitating discussions and building consensus among various stakeholders on challenging ethical issues."
    ],
    // Updated getting started steps
    gettingStarted: [
      "**Build Interdisciplinary Knowledge:** Combine expertise in ethics/law/policy with a solid understanding of AI/ML technology and healthcare context.",
      "**Formal Education:** Pursue graduate studies focusing specifically on AI ethics, technology policy, or bioethics.",
      "**Specialize in Healthcare:** Focus research and coursework on the unique ethical and regulatory challenges of AI in medicine and healthcare.",
      "**Gain Technical Literacy:** Take courses on AI/ML fundamentals, data science ethics, and explainable AI (XAI) to understand the technology you'll govern.",
      "**Stay Current:** Continuously monitor evolving regulations, ethical guidelines, research papers, and best practices in AI governance and healthcare AI.",
      "**Develop Policy Skills:** Practice analyzing existing policies and drafting clear, actionable governance documents or frameworks.",
      "**Engage with the Community:** Participate in workshops, conferences, and online forums dedicated to AI ethics and responsible technology (e.g., ACM FAccT).",
      "**Seek Relevant Experience:** Look for roles in compliance, risk management, legal counsel, or policy analysis within healthcare or technology sectors, focusing on AI-related responsibilities.",
      "**Network:** Connect with professionals working in AI ethics, responsible AI, and healthcare compliance/governance.",
      "**Showcase Expertise:** Write articles, give presentations, or contribute to projects demonstrating your understanding of healthcare AI ethics and governance challenges."
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
        <meta name="description" content={`Understand the critical role of an ${pageData.title} in ensuring responsible and compliant AI in healthcare.`} />
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
              An AI Ethicist or Governance Specialist in healthcare spends their day focused on mitigating risks and ensuring responsible practices. This might involve reviewing new AI project proposals for ethical implications, developing or updating AI governance policies, conducting bias audits on algorithms, or investigating potential ethical breaches. You'll likely collaborate closely with legal teams on regulatory compliance (HIPAA, FDA), data scientists on implementing fairness metrics or explainability techniques, and clinical teams on the real-world ethical considerations of AI deployment. A significant part of the role involves staying abreast of evolving regulations and ethical standards, facilitating ethical review board meetings, and educating different teams on responsible AI principles.
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

export default AiEthicistPage; // Updated export 