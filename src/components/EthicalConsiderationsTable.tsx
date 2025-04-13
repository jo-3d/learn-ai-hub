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

const EthicalConsiderationsTable: React.FC = () => {
  const considerationsData = [
    {
      consideration: "Bias and Fairness",
      questions: "How will we detect and mitigate bias in training data and algorithms? How will we ensure equitable outcomes across diverse patient populations?"
    },
    {
      consideration: "Transparency and Explainability",
      questions: "Can users understand how the AI makes decisions? How will we provide clear documentation and explanations of AI algorithms?"
    },
    {
      consideration: "Accountability and Responsibility",
      questions: "Who is responsible for the performance and outcomes of AI systems? What are the roles of developers, clinicians, and the organization? How will we address errors or unintended consequences?"
    },
    {
      consideration: "Patient Privacy",
      questions: "How will patient data be protected throughout the AI lifecycle? How will we ensure compliance with HIPAA and other privacy regulations?"
    },
    {
      consideration: "Informed Consent",
      questions: "How will we inform patients about the use of AI in their care? Will patients have the right to consent or opt out?"
    },
    {
      consideration: "Data Ownership",
      questions: "Who owns and controls the healthcare data used by AI systems? Are there competing interests among stakeholders?"
    }
  ];

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <Th>Ethical Consideration</Th>
            <Th>Key Questions/Points to Consider</Th>
          </tr>
        </thead>
        <tbody>
          {considerationsData.map((item, index) => (
            <tr key={index}>
              <Td>{item.consideration}</Td>
              <Td>{item.questions}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default EthicalConsiderationsTable; 