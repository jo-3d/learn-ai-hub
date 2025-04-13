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

const DataQualityMetricsTable: React.FC = () => {
  const metrics = [
    {
      metric: 'Completeness',
      description: 'Percentage of required fields populated',
      target: '≥ 95%',
      monitoring: 'Automated validation checks'
    },
    {
      metric: 'Accuracy',
      description: 'Percentage of data matching source systems',
      target: '≥ 98%',
      monitoring: 'Regular reconciliation'
    },
    {
      metric: 'Consistency',
      description: 'Data uniformity across systems',
      target: '100%',
      monitoring: 'Cross-system validation'
    },
    {
      metric: 'Timeliness',
      description: 'Data freshness and update frequency',
      target: 'Real-time to 24h',
      monitoring: 'Timestamp tracking'
    }
  ];

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <Th>Metric</Th>
            <Th>Description</Th>
            <Th>Target</Th>
            <Th>Monitoring</Th>
          </tr>
        </thead>
        <tbody>
          {metrics.map((metric, index) => (
            <tr key={index}>
              <Td>{metric.metric}</Td>
              <Td>{metric.description}</Td>
              <Td>{metric.target}</Td>
              <Td>{metric.monitoring}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default DataQualityMetricsTable; 