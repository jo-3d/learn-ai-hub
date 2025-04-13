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

const KPIsTable: React.FC = () => {
  const kpisData = [
    {
      category: "Diagnostic Accuracy",
      kpi: "Diagnostic Accuracy Rate",
      description: "Percentage of correct diagnoses made by AI. Assesses reliability.",
      benchmarks: "75% to 95% (depending on application)"
    },
    {
      category: "Efficiency",
      kpi: "Time to Diagnosis",
      description: "Duration from initial visit to confirmed diagnosis. Indicates speed of diagnosis.",
      benchmarks: "Average 15 hours (AI-driven)"
    },
    {
      category: "Cost",
      kpi: "Cost Per Diagnosis",
      description: "Financial resources required to diagnose a patient. Helps ensure economic viability.",
      benchmarks: "Average $200 (varies by specialty)"
    },
    {
      category: "Patient Flow",
      kpi: "Patient Throughput Rate",
      description: "Number of patients treated in a given timeframe. Measures operational efficiency.",
      benchmarks: "Emergency Dept: 2-6 hours/patient; Outpatient Clinics: 15-30 mins/appt"
    },
    {
      category: "Patient Satisfaction",
      kpi: "Patient Satisfaction Score",
      description: "Direct indicator of how well AI integration meets patient expectations.",
      benchmarks: "70% to 90%"
    },
    {
      category: "System Reliability",
      kpi: "System Downtime",
      description: "Percentage of time AI systems are unavailable. Impacts efficiency and reliability.",
      benchmarks: "Less than 3% annual downtime"
    }
  ];

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <Th>KPI Category</Th>
            <Th>Specific KPI</Th>
            <Th>Description/Importance</Th>
            <Th>Potential Benchmarks</Th>
          </tr>
        </thead>
        <tbody>
          {kpisData.map((item, index) => (
            <tr key={index}>
              <Td>{item.category}</Td>
              <Td>{item.kpi}</Td>
              <Td>{item.description}</Td>
              <Td>{item.benchmarks}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default KPIsTable; 