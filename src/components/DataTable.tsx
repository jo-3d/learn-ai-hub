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

interface DataTableProps {
  children: React.ReactNode;
}

const DataTable: React.FC<DataTableProps> = ({ children }) => {
  return (
    <TableContainer>
      <Table>{children}</Table>
    </TableContainer>
  );
};

export default DataTable; 