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

const BooksTable = styled.table`
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

const BookNumber = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #2A7DE1;
  min-width: 2rem;
`;

const BookTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
  color: #121212;
`;

const BookAuthor = styled.p`
  margin: 0;
  color: #4A4F5C;
  font-size: 0.9rem;
  font-style: italic;
`;

const BookDescription = styled.p`
  color: #4A4F5C;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
`;

const BookLink = styled.a`
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

const AIBooksPage = () => {
  return (
    <>
      <Head>
        <title>Top 10 AI Books to Read in 2025 | Learn AI Hub</title>
        <meta name="description" content="Discover our curated list of the most important AI books to read in 2025, featuring cutting-edge insights on LLMs, ethics, engineering, and future trends." />
      </Head>
      <MainLayout>
        <Container>
          <BackLink>
            <Link href="/resources" passHref legacyBehavior>
              <a>← Back to Resources & Guides</a>
            </Link>
          </BackLink>
          
          <PageHeader>
            <Title>📚 Top 10 AI Books to Read in 2025</Title>
            <Subtitle>
              Stay ahead of the curve with these essential reads on artificial intelligence, machine learning, and the future of technology
            </Subtitle>
          </PageHeader>
          
          <Content>
            <BooksTable>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title & Author</th>
                  <th>Why It's Worth Your Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><BookNumber>1</BookNumber></td>
                  <td>
                    <BookTitle>AI Engineering</BookTitle>
                    <BookAuthor>Chip Huyen (Jan 2025)</BookAuthor>
                    <BookLink href="https://www.amazon.com/Designing-Machine-Learning-Systems-Production-Ready/dp/1098107969/" target="_blank" rel="noopener noreferrer">
                      View Book
                    </BookLink>
                  </td>
                  <td>
                    <BookDescription>
                      Hands-on guide to building production-grade apps with foundation models—great for devs who want pragmatic patterns beyond pure theory.
                    </BookDescription>
                  </td>
                </tr>
                
                <tr>
                  <td><BookNumber>2</BookNumber></td>
                  <td>
                    <BookTitle>Building LLMs for Production</BookTitle>
                    <BookAuthor>Louis-François Bouchard & Louie Peters (2025)</BookAuthor>
                    <BookLink href="https://www.amazon.com/Building-LLMs-Complete-Guide-Language/dp/1098150961/" target="_blank" rel="noopener noreferrer">
                      View Book
                    </BookLink>
                  </td>
                  <td>
                    <BookDescription>
                      Step-by-step recipes for fine-tuning, scaling, and shipping large language models in real-world stacks.
                    </BookDescription>
                  </td>
                </tr>
                
                <tr>
                  <td><BookNumber>3</BookNumber></td>
                  <td>
                    <BookTitle>AI Snake Oil</BookTitle>
                    <BookAuthor>Arvind Narayanan & Sayash Kapoor (2025)</BookAuthor>
                    <BookLink href="https://www.ai-snake-oil.com/" target="_blank" rel="noopener noreferrer">
                      View Book
                    </BookLink>
                  </td>
                  <td>
                    <BookDescription>
                      A myth-busting look at what today's AI can—and definitely cannot—do, written by two leading researchers.
                    </BookDescription>
                  </td>
                </tr>
                
                <tr>
                  <td><BookNumber>4</BookNumber></td>
                  <td>
                    <BookTitle>The Coming Wave</BookTitle>
                    <BookAuthor>Mustafa Suleyman (re-issued 2025)</BookAuthor>
                    <BookLink href="https://www.amazon.com/Coming-Wave-Technology-Power-Century/dp/0593713729/" target="_blank" rel="noopener noreferrer">
                      View Book
                    </BookLink>
                  </td>
                  <td>
                    <BookDescription>
                      Explores "techno-prism" risks as generative AI scales; a must-read for founders and policymakers alike.
                    </BookDescription>
                  </td>
                </tr>
                
                <tr>
                  <td><BookNumber>5</BookNumber></td>
                  <td>
                    <BookTitle>Digitally Invisible</BookTitle>
                    <BookAuthor>Katherine Chen (2024, hot in 2025)</BookAuthor>
                    <BookLink href="https://www.amazon.com/dp/0262048493/" target="_blank" rel="noopener noreferrer">
                      View Book
                    </BookLink>
                  </td>
                  <td>
                    <BookDescription>
                      Investigates how AI-driven systems erase marginalized voices online—fuel for ethical design debates.
                    </BookDescription>
                  </td>
                </tr>
                
                <tr>
                  <td><BookNumber>6</BookNumber></td>
                  <td>
                    <BookTitle>The Singularity Is Nearer</BookTitle>
                    <BookAuthor>Ray Kurzweil (2025)</BookAuthor>
                    <BookLink href="https://www.amazon.com/Singularity-Nearer-Ray-Kurzweil/dp/1984881108/" target="_blank" rel="noopener noreferrer">
                      View Book
                    </BookLink>
                  </td>
                  <td>
                    <BookDescription>
                      A provocative forecast of human-AI convergence, updated with GPT-4-o-era milestones.
                    </BookDescription>
                  </td>
                </tr>
                
                <tr>
                  <td><BookNumber>7</BookNumber></td>
                  <td>
                    <BookTitle>Supremacy: AI, ChatGPT, and the Race that Will Change the World</BookTitle>
                    <BookAuthor>Parmy Olson (2025)</BookAuthor>
                    <BookLink href="https://www.amazon.com/Supremacy-Leading-Dangerous-Artificial-Intelligence/dp/1982181141/" target="_blank" rel="noopener noreferrer">
                      View Book
                    </BookLink>
                  </td>
                  <td>
                    <BookDescription>
                      Journalistic deep dive into the new "foundation-model arms race" across the U.S., China, and Europe.
                    </BookDescription>
                  </td>
                </tr>
                
                <tr>
                  <td><BookNumber>8</BookNumber></td>
                  <td>
                    <BookTitle>Artificial Intelligence: A Modern Approach</BookTitle>
                    <BookAuthor>Russell & Norvig (4th ed. still core)</BookAuthor>
                    <BookLink href="https://www.amazon.com/Artificial-Intelligence-Modern-Approach-4th/dp/0134610997/" target="_blank" rel="noopener noreferrer">
                      View Book
                    </BookLink>
                  </td>
                  <td>
                    <BookDescription>
                      The evergreen textbook every practitioner keeps on-hand; updated examples cover transformers.
                    </BookDescription>
                  </td>
                </tr>
                
                <tr>
                  <td><BookNumber>9</BookNumber></td>
                  <td>
                    <BookTitle>Handbook of Geospatial AI</BookTitle>
                    <BookAuthor>Song Gao et al. (2025)</BookAuthor>
                    <BookLink href="https://www.amazon.com/Handbook-Geospatial-Artificial-Intelligence-Algorithms/dp/0367533235/" target="_blank" rel="noopener noreferrer">
                      View Book
                    </BookLink>
                  </td>
                  <td>
                    <BookDescription>
                      Shows how location data and deep nets power everything from urban planning to climate modeling.
                    </BookDescription>
                  </td>
                </tr>
                
                <tr>
                  <td><BookNumber>10</BookNumber></td>
                  <td>
                    <BookTitle>AI Trends in 2025</BookTitle>
                    <BookAuthor>Derek Ashford (Feb 2025)</BookAuthor>
                    <BookLink href="https://www.amazon.com/dp/B0BVFMRQXG/" target="_blank" rel="noopener noreferrer">
                      View Book
                    </BookLink>
                  </td>
                  <td>
                    <BookDescription>
                      A comprehensive overview of emerging AI trends and technologies expected to shape the industry in 2025.
                    </BookDescription>
                  </td>
                </tr>
              </tbody>
            </BooksTable>
            
            <CallToAction>
              <CTATitle>Stay Updated on the Latest AI Resources</CTATitle>
              <CTAText>
                Join our newsletter to receive updates on new AI book releases, curated reading lists, and exclusive author interviews.
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

export default AIBooksPage;