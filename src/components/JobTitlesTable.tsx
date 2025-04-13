import React from 'react';
import styled from 'styled-components';

interface JobTitle {
  title: string;
  description: string;
  responsibilities: string[];
}

const TableContainer = styled.div`
  margin: 2rem 0;
  width: 100%;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #e5e7eb;
  font-size: 1rem;
`;

const Th = styled.th`
  padding: 1rem;
  text-align: left;
  border: 1px solid #e5e7eb;
  background-color: #f9fafb;
  color: #4b5563;
  font-weight: 600;
`;

const Td = styled.td`
  padding: 1rem;
  border: 1px solid #e5e7eb;
  vertical-align: top;
  line-height: 1.5;
`;

const ResponsibilitiesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const jobTitles: JobTitle[] = [
  {
    title: "AI Engineer",
    description: "Develops and deploys AI models for healthcare applications",
    responsibilities: [
      "Building machine learning pipelines",
      "Deploying models to cloud platforms",
      "Optimizing AI algorithms"
    ]
  },
  {
    title: "Data Scientist / Medical Data Scientist",
    description: "Analyzes medical data to extract insights and improve patient care",
    responsibilities: [
      "Statistical modeling",
      "Predictive analytics",
      "Data visualization",
      "Working with EHR data"
    ]
  },
  {
    title: "AI Ethicist",
    description: "Ensures the ethical and responsible use of AI in healthcare",
    responsibilities: [
      "Developing ethical guidelines",
      "Assessing bias in algorithms",
      "Addressing data privacy concerns"
    ]
  },
  {
    title: "Healthcare AI Strategist",
    description: "Provides guidance on AI adoption and implementation within healthcare organizations",
    responsibilities: [
      "Formulating AI strategies",
      "Identifying use cases",
      "Advising on technology adoption"
    ]
  },
  {
    title: "Healthcare AI Project Manager",
    description: "Oversees the execution of AI projects in healthcare settings",
    responsibilities: [
      "Planning and managing project timelines",
      "Coordinating interdisciplinary teams",
      "Ensuring project success"
    ]
  },
  {
    title: "Healthcare Cybersecurity and Data Privacy Specialist",
    description: "Protects patient data within AI-driven systems and ensures regulatory compliance",
    responsibilities: [
      "Implementing security protocols",
      "Monitoring for data breaches",
      "Ensuring HIPAA compliance"
    ]
  },
  {
    title: "Healthcare AI Prompt Engineer",
    description: "Crafts and refines prompts to optimize AI model performance in healthcare applications",
    responsibilities: [
      "Developing effective prompts for clinical documentation",
      "Patient communication",
      "Other NLP tasks"
    ]
  },
  {
    title: "AI-Assisted Surgeon (Future Role)",
    description: "Utilizes AI-powered tools to enhance surgical precision and efficiency",
    responsibilities: [
      "Performing robotic surgeries guided by AI",
      "Using AI for pre-operative planning",
      "Intraoperative guidance"
    ]
  },
  {
    title: "AI Diagnostics Specialist (Future Role)",
    description: "Leverages machine learning algorithms to improve the accuracy and speed of disease diagnosis",
    responsibilities: [
      "Analyzing medical images with AI",
      "Predicting disease risks",
      "Personalizing treatment plans"
    ]
  },
  {
    title: "AI-Powered Patient Coordinator (Future Role)",
    description: "Uses NLP and machine learning to streamline patient interactions and improve the patient experience",
    responsibilities: [
      "Scheduling appointments with AI chatbots",
      "Providing personalized health information",
      "Monitoring patient adherence"
    ]
  }
];

const JobTitlesTable: React.FC = () => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <Th>Job Title</Th>
            <Th>Description</Th>
            <Th>Example Responsibilities</Th>
          </tr>
        </thead>
        <tbody>
          {jobTitles.map((job, index) => (
            <tr key={index}>
              <Td>{job.title}</Td>
              <Td>{job.description}</Td>
              <Td>
                <ResponsibilitiesList>
                  {job.responsibilities.map((responsibility, idx) => (
                    <span key={idx}>{responsibility}</span>
                  ))}
                </ResponsibilitiesList>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default JobTitlesTable; 