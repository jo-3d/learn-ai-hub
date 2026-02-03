import React from 'react';
import styled from 'styled-components';
import MainLayout from '../../layouts/MainLayout';
import Head from 'next/head';
import Link from 'next/link';

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 1rem 2rem;
`;

const BackLink = styled.div`
  margin: 0 0 1rem 0;
  
  a {
    display: inline-flex;
    align-items: center;
    color: #2A7DE1;
    text-decoration: none;
    font-weight: 500;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
  padding-top: 1rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #121212;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  color: #4A4F5C;
  font-size: 1.25rem;
  max-width: 800px;
  margin: 0 auto 2rem;
  line-height: 1.6;
`;

const Content = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  padding: 3rem;
  margin-bottom: 2rem;
`;

const CoursesTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
  
  th {
    background-color: #f5f8ff;
    color: #2A7DE1;
    font-weight: 600;
    text-align: left;
    padding: 1rem;
    border-bottom: 2px solid #e1e5ec;
  }
  
  td {
    padding: 1.25rem 1rem;
    border-bottom: 1px solid #e1e5ec;
    vertical-align: top;
  }
  
  tr:last-child td {
    border-bottom: none;
  }
  
  tr:hover {
    background-color: #f9f9f9;
  }
`;

const CourseNumber = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #2A7DE1;
  min-width: 2rem;
`;

const CourseTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
  color: #121212;
`;

const CoursePlatform = styled.p`
  margin: 0;
  color: #4A4F5C;
  font-size: 0.9rem;
  font-style: italic;
`;

const CourseDescription = styled.p`
  color: #4A4F5C;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
`;

const PlatformLink = styled.a`
  display: inline-block;
  margin-top: 0.5rem;
  color: #2A7DE1;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

const CallToAction = styled.div`
  background-color: #5E42BC;
  color: white;
  text-align: center;
  padding: 2rem;
  border-radius: 10px;
  margin: 3rem 0;
`;

const CTATitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const CTAText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const Button = styled.a`
  display: inline-block;
  background-color: white;
  color: #5E42BC;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

// Platform URLs
const platformUrls = {
  coursera: "https://www.coursera.org/",
  udacity: "https://www.udacity.com/",
  mitocw: "https://ocw.mit.edu/",
  edx: "https://www.edx.org/",
  harvard: "https://online-learning.harvard.edu/",
  ibm: "https://www.ibm.com/training/",
  microsoft: "https://docs.microsoft.com/en-us/learn/",
  udemy: "https://www.udemy.com/",
  futurelearn: "https://www.futurelearn.com/"
};

const OnlineCoursesPage = () => {
  return (
    <>
      <Head>
        <title>Best Online AI Courses for 2025 | Learn AI Hub</title>
        <meta name="description" content="Explore our curated list of the top AI courses to take in 2025, from introductory courses for beginners to advanced specialized programs for professionals." />
      </Head>
      <MainLayout>
        <Container>
          <BackLink>
            <Link href="/resources" passHref legacyBehavior>
              <a>← Back to Resources & Guides</a>
            </Link>
          </BackLink>
          
          <PageHeader>
            <Title>🎓 Best Online AI Courses for 2025</Title>
            <Subtitle>
              Advance your AI skills with these top-rated courses covering everything from basic concepts to specialized applications
            </Subtitle>
          </PageHeader>
          
          <Content>
            <CoursesTable>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Course</th>
                  <th>Platform</th>
                  <th>Key Take-Away</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><CourseNumber>1</CourseNumber></td>
                  <td>
                    <CourseTitle>AI for Everyone (2025 Edition)</CourseTitle>
                    <PlatformLink href="https://www.coursera.org/learn/ai-for-everyone" target="_blank" rel="noopener noreferrer">
                      View Course
                    </PlatformLink>
                  </td>
                  <td>
                    <CoursePlatform>Coursera + DeepLearning.AI</CoursePlatform>
                  </td>
                  <td>
                    <CourseDescription>
                      Demystifies AI strategy for non-tech leaders; great primer for cross-functional teams.
                    </CourseDescription>
                  </td>
                </tr>
                
                <tr>
                  <td><CourseNumber>2</CourseNumber></td>
                  <td>
                    <CourseTitle>Generative AI: Prompt Engineering Basics</CourseTitle>
                    <PlatformLink href="https://www.coursera.org/learn/prompt-engineering" target="_blank" rel="noopener noreferrer">
                      View Course
                    </PlatformLink>
                  </td>
                  <td>
                    <CoursePlatform>Coursera + IBM</CoursePlatform>
                  </td>
                  <td>
                    <CourseDescription>
                      Short, project-based module on writing reusable "prompt stacks" for GPT-4-o and beyond.
                    </CourseDescription>
                  </td>
                </tr>
                
                <tr>
                  <td><CourseNumber>3</CourseNumber></td>
                  <td>
                    <CourseTitle>Artificial Intelligence Nanodegree</CourseTitle>
                    <PlatformLink href="https://www.udacity.com/course/ai-artificial-intelligence-nanodegree--nd898" target="_blank" rel="noopener noreferrer">
                      View Course
                    </PlatformLink>
                  </td>
                  <td>
                    <CoursePlatform>Udacity</CoursePlatform>
                  </td>
                  <td>
                    <CourseDescription>
                      Portfolio-driven program covering search, planning, NLP, and agentic workflows.
                    </CourseDescription>
                  </td>
                </tr>
                
                <tr>
                  <td><CourseNumber>4</CourseNumber></td>
                  <td>
                    <CourseTitle>MIT 6.S191 Introduction to Deep Learning (2025)</CourseTitle>
                    <PlatformLink href="https://ocw.mit.edu/courses/6-s191-introduction-to-deep-learning/" target="_blank" rel="noopener noreferrer">
                      View Course
                    </PlatformLink>
                  </td>
                  <td>
                    <CoursePlatform>MIT OCW</CoursePlatform>
                  </td>
                  <td>
                    <CourseDescription>
                      Fast-paced bootcamp that covers diffusion, transformers, and multimodal fusion in one semester.
                    </CourseDescription>
                  </td>
                </tr>
                
                <tr>
                  <td><CourseNumber>5</CourseNumber></td>
                  <td>
                    <CourseTitle>CS50's AI with Python (2025 refresh)</CourseTitle>
                    <PlatformLink href="https://www.edx.org/course/cs50s-introduction-to-artificial-intelligence-with-python" target="_blank" rel="noopener noreferrer">
                      View Course
                    </PlatformLink>
                  </td>
                  <td>
                    <CoursePlatform>edX + HarvardX</CoursePlatform>
                  </td>
                  <td>
                    <CourseDescription>
                      Classic CS50 rigor, updated with LLM labs; perfect bridge from coding to applied AI.
                    </CourseDescription>
                  </td>
                </tr>
                
                <tr>
                  <td><CourseNumber>6</CourseNumber></td>
                  <td>
                    <CourseTitle>IBM AI Engineering Professional Certificate</CourseTitle>
                    <PlatformLink href="https://www.coursera.org/professional-certificates/ai-engineer" target="_blank" rel="noopener noreferrer">
                      View Course
                    </PlatformLink>
                  </td>
                  <td>
                    <CoursePlatform>Coursera</CoursePlatform>
                  </td>
                  <td>
                    <CourseDescription>
                      Six-course path that ends with a capstone on deploying scalable AI micro-services.
                    </CourseDescription>
                  </td>
                </tr>
                
                <tr>
                  <td><CourseNumber>7</CourseNumber></td>
                  <td>
                    <CourseTitle>Microsoft AI & ML Engineering</CourseTitle>
                    <PlatformLink href="https://www.coursera.org/professional-certificates/microsoft-azure-ai-fundamentals" target="_blank" rel="noopener noreferrer">
                      View Course
                    </PlatformLink>
                  </td>
                  <td>
                    <CoursePlatform>Coursera + Microsoft</CoursePlatform>
                  </td>
                  <td>
                    <CourseDescription>
                      Focuses on Azure OpenAI, vector databases, and responsible AI patterns.
                    </CourseDescription>
                  </td>
                </tr>
                
                <tr>
                  <td><CourseNumber>8</CourseNumber></td>
                  <td>
                    <CourseTitle>AI Essentials for Business</CourseTitle>
                    <PlatformLink href="https://online-learning.harvard.edu/course/artificial-intelligence-business" target="_blank" rel="noopener noreferrer">
                      View Course
                    </PlatformLink>
                  </td>
                  <td>
                    <CoursePlatform>Harvard Online</CoursePlatform>
                  </td>
                  <td>
                    <CourseDescription>
                      Condenses MBA-level AI strategy into four weeks—case studies, board-level metrics, ROI calculators.
                    </CourseDescription>
                  </td>
                </tr>
                
                <tr>
                  <td><CourseNumber>9</CourseNumber></td>
                  <td>
                    <CourseTitle>Artificial Intelligence A-Z 2025: Agentic AI, Gen AI, RL</CourseTitle>
                    <PlatformLink href="https://www.udemy.com/course/artificial-intelligence-az/" target="_blank" rel="noopener noreferrer">
                      View Course
                    </PlatformLink>
                  </td>
                  <td>
                    <CoursePlatform>Udemy</CoursePlatform>
                  </td>
                  <td>
                    <CourseDescription>
                      Hands-on, code-along course that blends reinforcement learning with GPT action frameworks.
                    </CourseDescription>
                  </td>
                </tr>
                
                <tr>
                  <td><CourseNumber>10</CourseNumber></td>
                  <td>
                    <CourseTitle>The Rise of Multi-Agent Systems (Free)</CourseTitle>
                    <PlatformLink href="https://www.futurelearn.com/courses/multi-agent-systems" target="_blank" rel="noopener noreferrer">
                      View Course
                    </PlatformLink>
                  </td>
                  <td>
                    <CoursePlatform>FutureLearn</CoursePlatform>
                  </td>
                  <td>
                    <CourseDescription>
                      Explores swarm intelligence and LLM "societies"—good forward-looking skill set.
                    </CourseDescription>
                  </td>
                </tr>
              </tbody>
            </CoursesTable>
            
            <CallToAction>
              <CTATitle>Keep Your AI Skills Current</CTATitle>
              <CTAText>
                Stay updated on the latest AI courses, exclusive learning resources, and special discounts by joining our community.
              </CTAText>
              <Link href="/subscribe" passHref legacyBehavior>
                <Button>Subscribe Now</Button>
              </Link>
            </CallToAction>
          </Content>
        </Container>
      </MainLayout>
    </>
  );
};

export default OnlineCoursesPage; 