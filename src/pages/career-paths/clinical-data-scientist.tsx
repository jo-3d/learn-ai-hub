import React from 'react';
import styled from 'styled-components';
import MainLayout from '../../layouts/MainLayout';
import Head from 'next/head';
import Sidebar from '../../components/Sidebar'; // Import the shared sidebar

// --- Layout Components (Matching other pages) ---
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

const MainContent = styled.main` // Use main tag for semantics
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

const ClinicalDataScientistPage: React.FC = () => { // Renamed component
  const pageData = {
    icon: "📊", // Updated icon
    title: "Clinical Data Scientist", // Updated title
    description: "Analyze complex health datasets (EHR, imaging, genomics) to extract meaningful insights, build predictive models, and improve patient outcomes using statistical methods and AI.", // Updated description
    // Updated requirements (skills)
    requirements: [
      "**Education:** Master's or PhD in Statistics, Biostatistics, Data Science, Computer Science, or a related quantitative field. Strong statistical foundation is crucial.",
      "**Programming:** Proficiency in R and/or Python for statistical analysis and data manipulation (Pandas, NumPy, dplyr, tidyr).",
      "**Databases:** Strong SQL skills for querying clinical data warehouses and relational databases.",
      "**Statistics & ML:** Deep understanding of statistical modeling, hypothesis testing, experimental design, and machine learning algorithms (classification, regression, clustering). Experience with survival analysis is often beneficial.",
      "**Data Visualization:** Skill in using tools like Matplotlib, Seaborn, ggplot2, or Tableau/Power BI to communicate complex findings effectively.",
      "**Domain Knowledge:** Understanding of clinical concepts, healthcare data (EHR, claims, genomics), research methodologies, and relevant regulations (HIPAA).",
      "**Communication:** Excellent ability to explain complex statistical concepts and model results to clinicians, researchers, and other non-technical stakeholders.",
      "**Collaboration:** Experience working in interdisciplinary teams with clinicians, researchers, and IT professionals."
    ],
    // Updated getting started steps
    gettingStarted: [
      "**Strengthen Foundations:** Ensure a solid background in statistics, probability, and calculus. Consider advanced coursework or online specializations.",
      "**Master R/Python:** Become highly proficient in at least one, focusing on packages relevant to data analysis, statistics, and machine learning.",
      "**Learn SQL:** Practice querying and manipulating data in relational databases. Work with healthcare-specific schemas if possible.",
      "**Study Statistical Modeling & ML:** Take courses focusing on regression, classification, causal inference, and machine learning applied to real-world problems.",
      "**Familiarize with Health Data:** Explore public health datasets (e.g., MIMIC, NHANES) or participate in Kaggle competitions using health data.",
      "**Develop Visualization Skills:** Practice creating clear and informative plots and dashboards to communicate insights.",
      "**Gain Domain Exposure:** Read clinical research papers, follow health informatics blogs/journals, and learn basic medical terminology.",
      "**Build a Portfolio:** Showcase projects analyzing health data, demonstrating statistical rigor and clear communication of findings.",
      "**Network:** Connect with data scientists working in hospitals, research institutions, pharmaceutical companies, or health tech startups.",
      "**Targeted Job Search:** Look for roles specifically titled Clinical Data Scientist, Biostatistician, or Health Data Analyst in relevant organizations."
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
        <meta name="description" content={`Explore the role of a ${pageData.title}, focusing on analyzing health data, building models, and improving patient outcomes. Learn about skills and getting started.`} />
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
              As a Clinical Data Scientist, your day typically revolves around data. You might spend the morning exploring a new dataset from EHR records, performing quality checks, and formulating hypotheses with clinical collaborators. Afternoons could involve building or refining statistical or machine learning models to predict patient risk or treatment response, validating model performance, and visualizing results. Communicating findings is crucial, involving meetings with research teams to present insights, discussing limitations, and iterating on analyses based on feedback. You'll also likely dedicate time to reading relevant clinical literature, documenting your methodology rigorously, and ensuring compliance with data privacy regulations.
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

        {/* Sidebar remains with sample data for now */}
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

export default ClinicalDataScientistPage; // Updated export 