import React from 'react';
import styled from 'styled-components';
import MainLayout from '../../layouts/MainLayout';
import Head from 'next/head';
import Sidebar from '../../components/Sidebar'; // Import the shared sidebar

// --- Layout Components (Matching ai-insights/index.tsx) ---
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

// --- Styled Components ---

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
  background-color: rgba(94, 66, 188, 0.1); // Match index page icon style
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
  align-items: baseline; // Align based on text baseline
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
    // Removed explicit line-height and margin-top for baseline alignment
  }
`;

// Specific style for 'Getting Started' using a different marker
const GettingStartedListItem = styled(DetailListItem)`
  &::before {
    content: '→'; 
    color: var(--secondary);
    // Baseline alignment should still work here
  }
`;

const DetailListItemContent = styled.div`
  flex-grow: 1; 
`;

const DetailListItemLabel = styled.strong`
  margin-right: 0.5em; // Add space after the label
`;

// --- Page Component ---

const HealthcareAiEngineerPage: React.FC = () => {
  const pageData = {
    icon: "🖥️",
    title: "Healthcare AI Engineer",
    description: "Design, build, test, and deploy robust and ethical AI/ML models specifically for healthcare applications, aiming to improve diagnostics, treatments, and operational efficiency.",
    requirements: [
      "**Education:** Bachelor's or Master's degree in Computer Science, Software Engineering, Data Science, Biomedical Engineering, or a closely related quantitative field. PhD can be beneficial for research-heavy roles.",
      "**Programming:** Strong proficiency in Python is essential. Familiarity with other languages like R, Java, or C++ can be helpful.",
      "**Core Libraries:** Expertise in NumPy, Pandas, Scikit-learn for data manipulation and classical ML.",
      "**ML Frameworks:** Deep understanding and practical experience with TensorFlow and/or PyTorch. Experience with Keras is also valuable.",
      "**Data Engineering:** Solid understanding of data processing, ETL/ELT pipelines, data warehousing, and database management (SQL and NoSQL).",
      "**Cloud Platforms:** Hands-on experience with at least one major cloud provider (AWS, Azure, GCP) and their AI/ML services (e.g., SageMaker, Azure ML, Vertex AI).",
      "**Software Engineering:** Strong grasp of software development lifecycle, version control (Git), testing methodologies, containerization (Docker), and CI/CD practices.",
      "**Domain Knowledge (Bonus):** Understanding of healthcare data types (EHR/EMR, DICOM, HL7/FHIR), clinical workflows, and relevant regulations (HIPAA) is a significant advantage.",
      "**Problem Solving:** Strong analytical and critical thinking skills to translate clinical or business problems into technical solutions.",
      "**Communication:** Ability to communicate complex technical concepts to non-technical stakeholders (clinicians, product managers)."
    ],
    gettingStarted: [
      "**Build Foundational Skills:** Master Python, statistics, and linear algebra through online courses (Coursera, edX, Fast.ai) or university programs.",
      "**Learn ML Fundamentals:** Deeply understand core ML concepts (supervised/unsupervised learning, model evaluation, feature engineering). Andrew Ng's Stanford course or similar resources are excellent starting points.",
      "**Specialize:** Dive into deep learning, computer vision (for medical imaging), or NLP (for clinical notes) depending on your interests within healthcare AI.",
      "**Practice Extensively:** Work on personal projects using real-world (or realistically anonymized) healthcare datasets if possible (e.g., MIMIC-III, CheXpert, Kaggle datasets). Focus on building end-to-end pipelines.",
      "**Cloud Certification:** Obtain certifications for AWS, Azure, or GCP, focusing on their ML specialty tracks to demonstrate practical cloud skills.",
      "**Contribute to Open Source:** Find healthcare AI or medical imaging projects on GitHub (e.g., MONAI) and contribute code, documentation, or testing.",
      "**Gain Domain Exposure:** Read key healthcare AI research papers (JAMA, Nature Medicine), follow industry news, and consider introductory courses on medical terminology or health informatics.",
      "**Network:** Attend relevant conferences (RSNA, HIMSS, NeurIPS with healthcare tracks), join online communities, and connect with professionals on LinkedIn.",
      "**Develop a Portfolio:** Create a polished online portfolio (e.g., GitHub Pages, personal website) showcasing your projects, clearly explaining the problem, methodology, results, and link to code.",
      "**Targeted Job Search:** Look for internships or junior roles specifically mentioning AI/ML in health tech companies, research institutions, or hospital innovation centers. Tailor your resume and cover letter."
    ]
  };

  // Helper to render list items with simple markdown (bold label)
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
    // Fallback for items without the specific bold format
    return <DetailListItemContent>{item}</DetailListItemContent>; 
  };

  return (
    <MainLayout>
      <Head>
        <title>{pageData.title} | Healthcare AI Career Path</title>
        <meta name="description" content={`Learn about the role, requirements, and steps to become a ${pageData.title}. Explore skills, education, and how to get started.`} />
      </Head>

      {/* Apply standard Container/MainContent/Sidebar structure */}
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
            <p style={{ lineHeight: '1.7', color: 'var(--text)' }}>
              A typical day for a Healthcare AI Engineer often involves a mix of coding, data analysis, collaboration, and problem-solving. You might start by checking the performance of models currently in production, investigating any alerts or anomalies. A significant portion of the day could be spent on feature engineering, preprocessing clinical data (like EHR notes or medical images), or training new machine learning models using frameworks like TensorFlow or PyTorch. Collaboration is key, so expect meetings with data scientists to discuss model approaches, clinical informaticists to understand workflow integration challenges, or product managers to align on project goals. You might also spend time researching new algorithms, reading academic papers relevant to healthcare AI, debugging code, writing unit tests, documenting your work, or preparing models for deployment in cloud environments (AWS, Azure, GCP) following DevOps best practices.
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

          {/* Potential future sections: */}
          {/* <ContentSection> */}
          {/*   <SectionTitle>Salary Expectations</SectionTitle> */}
          {/*   <p>...</p> */}
          {/* </ContentSection> */}
          {/* <ContentSection> */}
          {/*   <SectionTitle>Related Roles</SectionTitle> */}
          {/*   <p>...</p> */}
          {/* </ContentSection> */}
        </MainContent>

        {/* Add the Shared Sidebar with sample data */}
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

export default HealthcareAiEngineerPage; 