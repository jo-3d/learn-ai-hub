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
  border-bottom: 2px solid var(--border);
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

const biases = [
  {
    source: "Historical Bias",
    example: "AI trained on historical data that reflects past disparities in treatment for certain demographic groups.",
    mitigation: "Employ data re-weighting techniques to give underrepresented groups more influence during training."
  },
  {
    source: "Representation Bias",
    example: "Training data does not adequately represent the diversity of the patient population (e.g., overrepresentation of one race or gender).",
    mitigation: "Implement data augmentation techniques to create synthetic data points for underrepresented groups. Seek out more diverse datasets for training."
  },
  {
    source: "Measurement Bias",
    example: "Systematic errors in how data is collected or recorded for different groups (e.g., different diagnostic criteria used for different populations).",
    mitigation: "Standardize data collection protocols and ensure consistent application across all groups."
  }
];

const BiasMitigationTable: React.FC = () => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <Th>Source of Bias</Th>
            <Th>Healthcare Example</Th>
            <Th>Potential Mitigation Strategies</Th>
          </tr>
        </thead>
        <tbody>
          {biases.map((item, index) => (
            <Tr key={index}>
              <Td>{item.source}</Td>
              <Td>{item.example}</Td>
              <Td>{item.mitigation}</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default BiasMitigationTable; 