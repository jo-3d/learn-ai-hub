import React from 'react';
import styled from 'styled-components';

interface Challenge {
  challenge: string;
  description: string;
  solutions: string[];
}

const TableContainer = styled.div`
  margin: 1rem 0;
  width: 100%;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #e5e7eb;
  font-size: 1rem;
`;

const Th = styled.th`
  padding: 1rem;
  text-align: left;
  border: 1px solid #e5e7eb;
  background-color: #f9fafb;
  color: #4b5563;
  font-weight: 600;
`;

const Td = styled.td`
  padding: 1rem;
  border: 1px solid #e5e7eb;
  vertical-align: top;
  line-height: 1.5;
`;

const SolutionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const challenges: Challenge[] = [
  {
    challenge: "Data Quality and Accessibility",
    description: "Need for high-quality, well-structured, accessible data; data fragmentation.",
    solutions: [
      "Implement robust data governance",
      "Standardize data collection",
      "Use advanced data cleansing",
      "Foster responsible data sharing"
    ]
  },
  {
    challenge: "Data Privacy and Security Concerns",
    description: "Handling sensitive patient data; regulatory compliance (e.g., HIPAA); risk of cyberattacks.",
    solutions: [
      "Implement strong encryption, access controls",
      "Conduct regular audits",
      "Provide employee training",
      "Stay updated on regulations"
    ]
  },
  {
    challenge: "Interoperability Issues",
    description: "Difficulty integrating AI with existing healthcare systems (EHRs, imaging equipment).",
    solutions: [
      "Invest in interoperable systems",
      "Adopt standardized data formats",
      "Encourage vendor collaboration",
      "Implement common protocols"
    ]
  },
  {
    challenge: "Regulatory and Ethical Considerations",
    description: "Navigating complex regulations; addressing bias, accountability, and transparency in AI algorithms.",
    solutions: [
      "Stay updated on regulations",
      "Ensure AI transparency",
      "Establish clear accountability",
      "Focus on ethical AI practices"
    ]
  },
  {
    challenge: "Acceptance and Trust",
    description: "Resistance from healthcare professionals and the public; concerns about impact on human aspects of care.",
    solutions: [
      "Actively educate stakeholders",
      "Ensure transparent communication",
      "Involve healthcare professionals",
      "Complement existing practices"
    ]
  },
  {
    challenge: "Cost of Development and Implementation",
    description: "Significant investment required for infrastructure, compliance, and training.",
    solutions: [
      "Utilize experienced resources",
      "Avoid wasteful steps",
      "Explore partnership models",
      "Start with targeted projects"
    ]
  },
  {
    challenge: "Lack of Experience in Evaluating AI Performance",
    description: "Difficulty in assessing the effectiveness and safety of AI solutions.",
    solutions: [
      "Implement training programs",
      "Partner with AI experts",
      "Develop evaluation frameworks",
      "Monitor and adapt AI tools"
    ]
  }
];

const ChallengesTable: React.FC = () => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <Th>Challenge</Th>
            <Th>Description</Th>
            <Th>Potential Solutions/Lessons Learned</Th>
          </tr>
        </thead>
        <tbody>
          {challenges.map((item, index) => (
            <tr key={index}>
              <Td>{item.challenge}</Td>
              <Td>{item.description}</Td>
              <Td>
                <SolutionsList>
                  {item.solutions.map((solution, idx) => (
                    <span key={idx}>{solution}</span>
                  ))}
                </SolutionsList>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default ChallengesTable; 