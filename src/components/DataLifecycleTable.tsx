import React from "react";
import styled from "styled-components";

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

const DataLifecycleTable: React.FC = () => {
  const lifecycleStages = [
    {
      stage: "Collection",
      requirements: "Standardized collection protocols, validation rules",
      retention: "Active storage during collection period",
      security: "Encryption, access controls"
    },
    {
      stage: "Processing",
      requirements: "Quality checks, transformation rules",
      retention: "Temporary storage during processing",
      security: "Secure processing environment"
    },
    {
      stage: "Storage",
      requirements: "Classification, indexing",
      retention: "Based on regulatory requirements",
      security: "Encryption, backup systems"
    },
    {
      stage: "Archival",
      requirements: "Compression, metadata preservation",
      retention: "Long-term storage",
      security: "Encrypted archives"
    },
    {
      stage: "Disposal",
      requirements: "Certified deletion methods",
      retention: "Immediate after retention period",
      security: "Secure deletion protocols"
    }
  ];

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <Th>Stage</Th>
            <Th>Requirements</Th>
            <Th>Retention</Th>
            <Th>Security</Th>
          </tr>
        </thead>
        <tbody>
          {lifecycleStages.map((stage, index) => (
            <tr key={index}>
              <Td>{stage.stage}</Td>
              <Td>{stage.requirements}</Td>
              <Td>{stage.retention}</Td>
              <Td>{stage.security}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default DataLifecycleTable;
