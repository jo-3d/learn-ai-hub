import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
  margin: 2rem 0;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

const Th = styled.th`
  background-color: #f8f9fa;
  color: #333;
  padding: 1rem;
  text-align: left;
  border-bottom: 2px solid #dee2e6;
`;

const Td = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #dee2e6;
  vertical-align: top;
`;

const FDARegulatoryTable: React.FC = () => {
  const regulatoryData = [
    {
      area: "Pre-market Approval",
      guidelines: "De Novo pathway, 510(k) pathway, considerations for AI in drug and biological product development"
    },
    {
      area: "Post-market Surveillance",
      guidelines: "Importance of continuous monitoring, predetermined change control plans for AI/ML-based SaMD"
    },
    {
      area: "Transparency",
      guidelines: "Recommendations for describing postmarket performance monitoring and management, strategies to address transparency"
    },
    {
      area: "Bias",
      guidelines: "Suggestions for thoughtful design and evaluation to address risks associated with bias"
    },
    {
      area: "Continuous Learning",
      guidelines: "Regulatory frameworks that allow for iterative improvements to AI algorithms"
    },
    {
      area: "Coordination and Collaboration",
      guidelines: "Efforts to align regulatory approaches across FDA centers and with international organizations"
    }
  ];

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <Th>Regulatory Area</Th>
            <Th>Key FDA Guidelines/Concepts</Th>
          </tr>
        </thead>
        <tbody>
          {regulatoryData.map((item, index) => (
            <tr key={index}>
              <Td>{item.area}</Td>
              <Td>{item.guidelines}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default FDARegulatoryTable; 