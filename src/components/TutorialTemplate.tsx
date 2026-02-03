import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const TutorialContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
`;

const TutorialHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #121212;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #4A4F5C;
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const TutorialContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MainContent = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  min-height: 600px;
  display: flex;
  flex-direction: column;
`;

const Sidebar = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  height: fit-content;
  position: sticky;
  top: 2rem;
`;

const StepList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StepItem = styled.li<{ $isActive: boolean }>`
  padding: 1rem;
  margin-bottom: 0.5rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${props => props.$isActive ? '#f0f0ff' : 'transparent'};
  color: ${props => props.$isActive ? '#5E42BC' : '#4A4F5C'};
  font-weight: ${props => props.$isActive ? '600' : '400'};
  
  &:hover {
    background: #f5f5ff;
  }
`;

const InteractiveSection = styled(motion.div)`
  background: #f8f9ff;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
`;

const CodeBlock = styled.pre`
  background: #1e1e1e;
  color: #fff;
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
  margin: 1rem 0;
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #eee;
`;

const Button = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  ${props => props.$variant === 'primary' ? `
    background: #5E42BC;
    color: white;
    &:hover {
      background: #4A35A0;
    }
  ` : `
    background: #f0f0ff;
    color: #5E42BC;
    &:hover {
      background: #e5e5ff;
    }
  `}
`;

const StepContent = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 400px;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  h2 {
    margin: 0;
    font-size: 1.8rem;
    color: #121212;
  }
  
  p {
    margin: 0;
    line-height: 1.6;
  }
  
  ul, ol {
    margin: 0;
    padding-left: 1.5rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: #2A7DE1;
  text-decoration: none;
  font-weight: 500;
  margin-bottom: 1rem;
  margin-top: 1rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

interface TutorialStep {
  title: string;
  content: React.ReactNode;
}

interface TutorialTemplateProps {
  title: string;
  description: string;
  steps: TutorialStep[];
}

const TutorialTemplate: React.FC<TutorialTemplateProps> = ({ title, description, steps }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <TutorialContainer>
      <BackButton href="/tutorials">
        ← Back to Tutorials
      </BackButton>
      
      <TutorialHeader>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TutorialHeader>

      <TutorialContent>
        <MainContent>
          <AnimatePresence mode="wait">
            <StepContent
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ContentWrapper>
                {steps[currentStep].content}
              </ContentWrapper>
            </StepContent>
          </AnimatePresence>

          <NavigationButtons>
            <Button
              onClick={prevStep}
              disabled={currentStep === 0}
              $variant="secondary"
            >
              Previous
            </Button>
            <Button
              onClick={nextStep}
              disabled={currentStep === steps.length - 1}
              $variant="primary"
            >
              Next
            </Button>
          </NavigationButtons>
        </MainContent>

        <Sidebar>
          <StepList>
            {steps.map((step, index) => (
              <StepItem
                key={index}
                $isActive={index === currentStep}
                onClick={() => setCurrentStep(index)}
              >
                {step.title}
              </StepItem>
            ))}
          </StepList>
        </Sidebar>
      </TutorialContent>
    </TutorialContainer>
  );
};

export default TutorialTemplate; 