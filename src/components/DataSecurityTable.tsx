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

const DataSecurityTable: React.FC = () => {
  const securityData = [
    {
      practice: "Implement Role-Based Access Control (RBAC)",
      description: "Ensure access to sensitive data is based on the principle of least privilege, limiting access to only necessary information for job functions."
    },
    {
      practice: "Encrypt Data In Transit and At Rest",
      description: "Protect patient data with secure encryption algorithms during transmission and when stored."
    },
    {
      practice: "Enforce Multi-Factor Authentication (MFA)",
      description: "Add an extra layer of security by requiring two or more verification methods for authentication."
    },
    {
      practice: "Monitor and Audit Access Logs",
      description: "Maintain comprehensive access logs and regularly review them to detect unusual or suspicious activity."
    },
    {
      practice: "Regularly Update and Patch Systems",
      description: "Keep all systems and software updated with the latest security patches to protect against vulnerabilities."
    },
    {
      practice: "Educate and Train Staff",
      description: "Regularly train healthcare staff on data security best practices to reduce the risk of accidental data exposure."
    },
    {
      practice: "Conduct Regular Security Audits & Risk Assessments",
      description: "Identify vulnerabilities through frequent security reviews and risk assessments to detect potential breaches before they occur."
    },
    {
      practice: "Ensure Secure Data Storage & Backups",
      description: "Implement automated backups and secure storage options to prevent data loss and ensure data recovery after incidents."
    },
    {
      practice: "Utilize Data Anonymization and De-identification",
      description: "Remove personal identifiers from data used for AI training and analysis to minimize privacy risks."
    }
  ];

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <Th>Best Practice</Th>
            <Th>Description/Explanation</Th>
          </tr>
        </thead>
        <tbody>
          {securityData.map((item, index) => (
            <tr key={index}>
              <Td>{item.practice}</Td>
              <Td>{item.description}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default DataSecurityTable; 