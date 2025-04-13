import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
  overflow-x: auto;
  margin: 2rem 0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
`;

const Th = styled.th`
  padding: 1rem;
  text-align: left;
  background-color: #f9fafb;
  color: #4b5563;
  font-weight: 600;
  &:first-child {
    border-top-left-radius: 8px;
  }
  &:last-child {
    border-top-right-radius: 8px;
  }
`;

const Td = styled.td`
  padding: 1rem;
  border-top: 1px solid #eee;
  vertical-align: top;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background: #f9f9f9;
  }
`;

const careerPaths = [
  {
    role: "AI/ML Engineer (Healthcare Focus)",
    responsibilities: "Design, build, test, and deploy machine learning models and AI systems for healthcare applications (e.g., diagnostics, predictive modeling, operational optimization)."
  },
  {
    role: "Clinical Data Scientist",
    responsibilities: "Analyze complex health datasets (EHRs, medical images, genomics) to extract insights and build predictive models using AI/statistical methods, bridging data science and clinical application."
  },
  {
    role: "Healthcare AI Product Manager",
    responsibilities: "Define vision, strategy, and roadmap for AI-powered healthcare products, translating clinical/business needs into technical requirements and bringing solutions to market."
  },
  {
    role: "Clinical Informaticist (AI Specialist)",
    responsibilities: "Focus on practical implementation and integration of AI tools within clinical settings, ensuring usability, effectiveness, and safe integration into patient care pathways."
  },
  {
    role: "AI Ethicist / Governance Specialist (Healthcare)",
    responsibilities: "Ensure AI systems are developed and deployed ethically, fairly, transparently, and compliantly (HIPAA), addressing bias, privacy, and explainability."
  }
];

const HealthcareAiCareerPathsTable: React.FC = () => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <Th>Career Path</Th>
            <Th>Description</Th>
          </tr>
        </thead>
        <tbody>
          {careerPaths.map((item, index) => (
            <Tr key={index}>
              <Td>{item.role}</Td>
              <Td>{item.responsibilities}</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default HealthcareAiCareerPathsTable; 