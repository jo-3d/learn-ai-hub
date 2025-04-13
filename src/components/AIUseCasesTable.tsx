import React from 'react';
import styled from 'styled-components';

interface AIUseCase {
  useCase: string;
  healthcareArea: string;
  readinessLevel: string;
  expertiseRequired: string;
  roiImpact: string;
}

const TableContainer = styled.div`
  margin: 1rem 0;
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

const aiUseCases: AIUseCase[] = [
  { useCase: "Claims Denial Prevention", healthcareArea: "Administrative", readinessLevel: "High", expertiseRequired: "High", roiImpact: "Within 1 Year" },
  { useCase: "Operating Room Optimization", healthcareArea: "Clinical", readinessLevel: "Medium", expertiseRequired: "Medium", roiImpact: "Within 1 Year" },
  { useCase: "Supply Chain Cost Management", healthcareArea: "Operational", readinessLevel: "High", expertiseRequired: "High", roiImpact: "Within 1 Year" },
  { useCase: "Streamline Discharge Planning", healthcareArea: "Patient Access", readinessLevel: "Medium", expertiseRequired: "Medium", roiImpact: "1 Year or More" },
  { useCase: "Diagnostic Image Analysis", healthcareArea: "Clinical", readinessLevel: "Medium", expertiseRequired: "Medium", roiImpact: "Varies" },
  { useCase: "Patient Risk Stratification", healthcareArea: "Clinical", readinessLevel: "Medium", expertiseRequired: "Medium", roiImpact: "Varies" },
  { useCase: "Automated Data Entry", healthcareArea: "Administrative", readinessLevel: "Low", expertiseRequired: "Low", roiImpact: "Within 1 Year" },
  { useCase: "Clinical Chatbots", healthcareArea: "Patient Access", readinessLevel: "Medium", expertiseRequired: "Medium", roiImpact: "Varies" },
  { useCase: "Predictive Analytics for Staffing", healthcareArea: "Operational", readinessLevel: "Medium", expertiseRequired: "Medium", roiImpact: "Within 1 Year" },
];

const AIUseCasesTable: React.FC = () => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <Th>AI Use Case</Th>
            <Th>Healthcare Area</Th>
            <Th>Technology Readiness Level</Th>
            <Th>Expertise Required for Deployment</Th>
            <Th>Potential ROI Impact</Th>
          </tr>
        </thead>
        <tbody>
          {aiUseCases.map((item, index) => (
            <tr key={index}>
              <Td>{item.useCase}</Td>
              <Td>{item.healthcareArea}</Td>
              <Td>{item.readinessLevel}</Td>
              <Td>{item.expertiseRequired}</Td>
              <Td>{item.roiImpact}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default AIUseCasesTable; 