import React from 'react';
import styled from 'styled-components';
import MainLayout from '../../layouts/MainLayout';
import Head from 'next/head';
import Link from 'next/link';
import Sidebar from '../../components/Sidebar';

const ResourcesContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  padding: 2rem;
  margin-left: 280px;
  
  @media (max-width: 1024px) {
    margin-left: 0;
    padding: 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  padding-top: 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #121212;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #4A4F5C;
  font-size: 1.25rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const Section = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #121212;
  margin-bottom: 1rem;
`;

const SectionDescription = styled.p`
  color: #4A4F5C;
  font-size: 1rem;
  margin-bottom: 2rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 1rem;
  padding: 1rem;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-3px);
  }

  a {
    text-decoration: none;
    color: #5E42BC;
    font-weight: 600;
    display: block;
  }
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
`;

const FeaturedGuide = styled.div`
  background: #e3f2fd;
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 4rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 1.5rem;
  }

  div {
    flex-grow: 1;
  }

  h3 {
    margin: 0 0 0.5rem;
    font-size: 1.5rem;
    color: #121212;
  }

  p {
    margin: 0;
    color: #4A4F5C;
  }
`;

const FeedbackLink = styled.a`
  display: inline-block;
  margin-top: 2rem;
  color: #5E42BC;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
    color: #2A7DE1;
  }
`;

const HeaderLink = styled.a`
  color: #5E42BC;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: auto;
  align-self: flex-start;

  &:hover {
    text-decoration: underline;
    color: #2A7DE1;
  }
`;

const ResourcesPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>AI Learning Resources | Learn AI Hub</title>
        <meta name="description" content="Explore our curated collection of AI learning resources, tutorials, and guides to help you master AI tools and technologies." />
      </Head>
      <ResourcesContainer>
        <Sidebar />
        <Content>
          <MainLayout>
            <Container>
              <PageHeader>
                <Title>Resources & Guides</Title>
                <Description>
                  Explore our comprehensive resources and guides to enhance your learning and career in AI. From how-to guides to career advice, find everything you need to succeed.
                </Description>
              </PageHeader>

              <Section>
                <SectionTitle>How-to Guides</SectionTitle>
                <SectionDescription>Step-by-step guides to help you master AI tools and techniques.</SectionDescription>
                <List>
                  <ListItem>
                    <a href="/guides/how-to-use-chatgpt-tasks">How to Use ChatGPT Tasks Effectively</a>
                  </ListItem>
                  <ListItem>
                    <a href="/guides/unlocking-custom-gpts">Unlocking Custom GPTs: A Hands-On Guide</a>
                  </ListItem>
                  <ListItem>
                    <a href="/guides/chatgpt-projects">Organize Your AI Workflow: ChatGPT Projects</a>
                  </ListItem>
                </List>
              </Section>
              
              <Section>
                <SectionTitle>AI Tips & Tricks</SectionTitle>
                <SectionDescription>Master the latest AI techniques and tools to boost your productivity.</SectionDescription>
                <List>
                  <ListItem>
                    <a href="/guides/gpt4o-image-generation">GPT-4o Image Generation: 10 Practical Use Cases</a>
                  </ListItem>
                </List>
              </Section>

              <Section>
                <SectionTitle>Learning Resources</SectionTitle>
                <SectionDescription>Curated resources to expand your knowledge and skills in AI.</SectionDescription>
                <List>
                  <ListItem>
                    <a href="/resources/ai-books">Top AI Books to Read in 2025</a>
                  </ListItem>
                  <ListItem>
                    <a href="/resources/online-courses">Best Online Courses for AI</a>
                  </ListItem>
                  <ListItem>
                    <a href="/resources/ai-podcasts">AI Podcasts to Follow</a>
                  </ListItem>
                </List>
              </Section>
            </Container>
          </MainLayout>
        </Content>
      </ResourcesContainer>
    </>
  );
};

export default ResourcesPage;