import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
  overflow-x: auto;
  margin: 1.5rem 0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  font-size: 0.95rem;
  line-height: 1.5;
`;

const Th = styled.th`
  background: var(--light);
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: var(--dark);
  border-bottom: 2px solid var(--border);
  white-space: nowrap;
`;

const Td = styled.td`
  padding: 1rem;
  border-bottom: 1px solid var(--border);
  color: var(--text);
`;

const RegulatoryComplianceTable: React.FC = () => {
  const regulations = [
    {
      regulation: 'HIPAA',
      scope: 'Protects the privacy and security of Protected Health Information (PHI) in the United States.',
      implications: 'Requires organizations to implement safeguards for PHI used in AI, including access controls, encryption, and BAAs with AI vendors.'
    },
    {
      regulation: 'GDPR',
      scope: 'Protects the personal data of individuals in the European Union.',
      implications: 'If processing EU residents\' health data for AI, organizations must comply with GDPR principles, including lawful basis for processing, data minimization, and data subject rights.'
    },
    {
      regulation: 'CCPA',
      scope: 'Grants privacy rights to California consumers, including the right to know, the right to delete, and the right to opt-out of the sale of their personal information.',
      implications: 'Organizations handling California residents\' health data in AI applications must comply with CCPA requirements, including providing notice and honoring consumer rights.'
    }
  ];

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <Th>Regulation</Th>
            <Th>Scope</Th>
            <Th>Implications for AI Data Handling in Healthcare</Th>
          </tr>
        </thead>
        <tbody>
          {regulations.map((regulation, index) => (
            <tr key={index}>
              <Td>{regulation.regulation}</Td>
              <Td>{regulation.scope}</Td>
              <Td>{regulation.implications}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default RegulatoryComplianceTable; 