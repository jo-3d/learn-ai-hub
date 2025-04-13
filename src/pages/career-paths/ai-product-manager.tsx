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

const AiProductManagerPage: React.FC = () => { // Renamed component
  const pageData = {
    icon: "📈", // Updated icon
    title: "Healthcare AI Product Manager", // Updated title
    description: "Define the vision, strategy, and roadmap for AI-powered healthcare products, translating clinical and business needs into actionable technical requirements.", // Updated description
    // Updated requirements (skills)
    requirements: [
      "**Business Acumen:** Strong understanding of the healthcare market, business models, competitive landscape, and product lifecycle management.",
      "**Domain Knowledge:** Deep familiarity with healthcare workflows, clinical needs, user personas (clinicians, patients, administrators), and regulatory landscape (HIPAA, FDA considerations for SaMD).",
      "**Technical Literacy:** Solid understanding of AI/ML concepts, capabilities, limitations, data requirements, and the software development process. No need to code, but need to understand.",
      "**Communication & Leadership:** Excellent verbal, written, and presentation skills. Ability to influence cross-functional teams (engineering, data science, design, marketing, sales, clinical) without direct authority.",
      "**User Focus:** Strong empathy for users and the ability to translate user needs and pain points into product features and requirements.",
      "**Strategic Thinking:** Ability to define product vision, set strategic direction, prioritize features based on value and feasibility, and create compelling roadmaps.",
      "**Data Analysis:** Comfortable analyzing product usage data, market research, and A/B test results to make informed decisions.",
      "**Agile Methodologies:** Experience working in Agile/Scrum environments, writing user stories, managing backlogs, and participating in sprint ceremonies."
    ],
    // Updated getting started steps
    gettingStarted: [
      "**Leverage Existing Experience:** Product managers from other tech domains can transition by deeply learning the healthcare space.",
      "**Gain Domain Expertise:** Take courses in health informatics, shadow clinicians, attend healthcare conferences (HIMSS), and read industry publications.",
      "**Understand AI Fundamentals:** Learn the basics of machine learning, data science, and AI ethics. Certifications or introductory courses can help.",
      "**Develop User Empathy:** Conduct informational interviews with clinicians and hospital administrators to understand their challenges.",
      "**Practice Product Skills:** Work on side projects defining hypothetical AI product features, write user stories, and practice prioritization techniques.",
      "**Master Communication:** Practice presenting product ideas, writing clear requirements documents, and articulating value propositions.",
      "**Network Strategically:** Connect with product managers working at health tech companies or on AI initiatives within healthcare systems.",
      "**Consider Relevant Certifications:** Look into certifications like Pragmatic Marketing, Certified Scrum Product Owner (CSPO), or specific Health IT certifications.",
      "**Tailor Your Resume:** Highlight transferable skills like strategic planning, cross-functional leadership, user research, and data-driven decision making, framed within a healthcare context.",
      "**Targeted Job Search:** Look for Associate Product Manager or Product Manager roles focusing on AI, analytics, or digital health within relevant companies."
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
        <meta name="description" content={`Learn about being a ${pageData.title}, defining product strategy, and bridging clinical needs with AI technology.`} />
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
              A Healthcare AI Product Manager's day is dynamic, focusing on strategy, communication, and execution. You might spend the morning in meetings: aligning with engineering on sprint priorities, presenting the product roadmap to stakeholders, or gathering feedback from clinical users. Afternoons could involve market research, analyzing competitor products, defining requirements for new AI features, writing user stories, or working with UX designers on mockups. You'll constantly be prioritizing the backlog based on strategic goals, user value, and technical feasibility. A key part of the role involves translating complex clinical needs and AI capabilities into a clear product vision that guides the entire team.
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

export default AiProductManagerPage; // Updated export 