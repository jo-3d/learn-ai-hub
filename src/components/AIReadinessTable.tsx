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

const AIReadinessTable: React.FC = () => {
  const readinessData = [
    {
      area: "Technological Infrastructure",
      questions: "Can current EHR work with AI? Can AI easily get and use data? Can the system grow with more AI use? Is the existing infrastructure capable of supporting AI workloads?"
    },
    {
      area: "Data Management",
      questions: "Are there rules for managing data from start to finish? Are there clear rules for good data quality? Is data accurate, complete, and consistent? Are there strategies for data security and privacy?"
    },
    {
      area: "Organizational Culture",
      questions: "Is the organizational culture open to innovation and change? Has potential resistance to AI been identified? Are there strategies to facilitate end-user engagement?"
    },
    {
      area: "Staff Expertise",
      questions: "Do involved teams have sufficient knowledge of AI and related technologies? Are there training plans for staff on AI tools?"
    },
    {
      area: "Strategic Alignment",
      questions: "Are AI goals aligned with the organization's strategic priorities? Are there clear objectives for AI implementation?"
    },
    {
      area: "Governance",
      questions: "Is there a multidisciplinary committee to oversee AI adoption? Are there policies for ethical and responsible AI use?"
    }
  ];

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <Th>Readiness Area</Th>
            <Th>Key Questions/Assessment Points</Th>
          </tr>
        </thead>
        <tbody>
          {readinessData.map((item, index) => (
            <tr key={index}>
              <Td>{item.area}</Td>
              <Td>{item.questions}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default AIReadinessTable; 