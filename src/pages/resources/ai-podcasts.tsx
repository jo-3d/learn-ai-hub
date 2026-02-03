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

const PodcastsTable = styled.table`
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

const PodcastNumber = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #2A7DE1;
  min-width: 2rem;
`;

const PodcastTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
  color: #121212;
`;

const PodcastDescription = styled.p`
  color: #4A4F5C;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
`;

const PodcastLink = styled.a`
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

const AIPodcastsPage = () => {
  return (
    <>
      <Head>
        <title>Must-Follow AI Podcasts in 2025 | Learn AI Hub</title>
        <meta name="description" content="Discover our curated list of the top AI podcasts to follow in 2025, featuring insightful conversations with industry leaders, technical deep dives, and the latest AI news." />
      </Head>
      <MainLayout>
        <Container>
          <BackLink>
            <Link href="/resources" passHref legacyBehavior>
              <a>← Back to Resources & Guides</a>
            </Link>
          </BackLink>
          
          <PageHeader>
            <Title>🎙️ Must-Follow AI Podcasts in 2025</Title>
            <Subtitle>
              Stay informed and inspired with these top artificial intelligence podcasts covering everything from technical deep dives to thought-provoking interviews
            </Subtitle>
          </PageHeader>
          
          <Content>
            <PodcastsTable>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Podcast</th>
                  <th>Vibe & Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><PodcastNumber>1</PodcastNumber></td>
                  <td>
                    <PodcastTitle>Lex Fridman Podcast</PodcastTitle>
                    <PodcastLink href="https://lexfridman.com/podcast/" target="_blank" rel="noopener noreferrer">
                      Listen to Podcast
                    </PodcastLink>
                  </td>
                  <td>
                    <PodcastDescription>
                      Long-form conversations with AI scientists, philosophers, and entrepreneurs.
                    </PodcastDescription>
                  </td>
                </tr>
                
                <tr>
                  <td><PodcastNumber>2</PodcastNumber></td>
                  <td>
                    <PodcastTitle>Hard Fork (NYT)</PodcastTitle>
                    <PodcastLink href="https://www.nytimes.com/column/hard-fork" target="_blank" rel="noopener noreferrer">
                      Listen to Podcast
                    </PodcastLink>
                  </td>
                  <td>
                    <PodcastDescription>
                      Weekly breakdown of AI news, deepfakes, policy fights—accessible and funny.
                    </PodcastDescription>
                  </td>
                </tr>
                
                <tr>
                  <td><PodcastNumber>3</PodcastNumber></td>
                  <td>
                    <PodcastTitle>Latent Space</PodcastTitle>
                    <PodcastLink href="https://www.latent.space/" target="_blank" rel="noopener noreferrer">
                      Listen to Podcast
                    </PodcastLink>
                  </td>
                  <td>
                    <PodcastDescription>
                      Engineering-centric show on LLM ops, vector DBs, and agent architectures.
                    </PodcastDescription>
                  </td>
                </tr>
                
                <tr>
                  <td><PodcastNumber>4</PodcastNumber></td>
                  <td>
                    <PodcastTitle>No Priors</PodcastTitle>
                    <PodcastLink href="https://www.nopriors.com/" target="_blank" rel="noopener noreferrer">
                      Listen to Podcast
                    </PodcastLink>
                  </td>
                  <td>
                    <PodcastDescription>
                      Sarah Guo and Elad Gil interview founders pushing the next wave of generative AI.
                    </PodcastDescription>
                  </td>
                </tr>
                
                <tr>
                  <td><PodcastNumber>5</PodcastNumber></td>
                  <td>
                    <PodcastTitle>The Cognitive Revolution</PodcastTitle>
                    <PodcastLink href="https://www.cognition.co/podcast" target="_blank" rel="noopener noreferrer">
                      Listen to Podcast
                    </PodcastLink>
                  </td>
                  <td>
                    <PodcastDescription>
                      Cuts through hype with academic guests on alignment, cognition, and policy.
                    </PodcastDescription>
                  </td>
                </tr>
                
                <tr>
                  <td><PodcastNumber>6</PodcastNumber></td>
                  <td>
                    <PodcastTitle>Practical AI</PodcastTitle>
                    <PodcastLink href="https://changelog.com/practicalai" target="_blank" rel="noopener noreferrer">
                      Listen to Podcast
                    </PodcastLink>
                  </td>
                  <td>
                    <PodcastDescription>
                      Open-source-heavy talk show; great for dev tips and repo recommendations.
                    </PodcastDescription>
                  </td>
                </tr>
                
                <tr>
                  <td><PodcastNumber>7</PodcastNumber></td>
                  <td>
                    <PodcastTitle>Me, Myself & AI</PodcastTitle>
                    <PodcastLink href="https://sloanreview.mit.edu/audio-series/me-myself-and-ai/" target="_blank" rel="noopener noreferrer">
                      Listen to Podcast
                    </PodcastLink>
                  </td>
                  <td>
                    <PodcastDescription>
                      MIT Sloan + BCG spotlight on enterprise adoption success stories.
                    </PodcastDescription>
                  </td>
                </tr>
                
                <tr>
                  <td><PodcastNumber>8</PodcastNumber></td>
                  <td>
                    <PodcastTitle>Women and AI</PodcastTitle>
                    <PodcastLink href="https://www.womeninai.co/podcast" target="_blank" rel="noopener noreferrer">
                      Listen to Podcast
                    </PodcastLink>
                  </td>
                  <td>
                    <PodcastDescription>
                      Amplifies female voices in machine learning research and product leadership.
                    </PodcastDescription>
                  </td>
                </tr>
                
                <tr>
                  <td><PodcastNumber>9</PodcastNumber></td>
                  <td>
                    <PodcastTitle>Last Week in AI</PodcastTitle>
                    <PodcastLink href="https://lastweekin.ai/podcast" target="_blank" rel="noopener noreferrer">
                      Listen to Podcast
                    </PodcastLink>
                  </td>
                  <td>
                    <PodcastDescription>
                      Hour-long roundup of the week's biggest papers, launches, and lawsuits.
                    </PodcastDescription>
                  </td>
                </tr>
                
                <tr>
                  <td><PodcastNumber>10</PodcastNumber></td>
                  <td>
                    <PodcastTitle>DeepMind: The Podcast</PodcastTitle>
                    <PodcastLink href="https://deepmind.com/blog/article/welcome-to-the-deepmind-podcast" target="_blank" rel="noopener noreferrer">
                      Listen to Podcast
                    </PodcastLink>
                  </td>
                  <td>
                    <PodcastDescription>
                      Behind-the-scenes look at DeepMind's research culture, narrated documentary-style.
                    </PodcastDescription>
                  </td>
                </tr>
              </tbody>
            </PodcastsTable>
            
            <CallToAction>
              <CTATitle>Never Miss an Episode</CTATitle>
              <CTAText>
                Subscribe to our newsletter for weekly podcast recommendations, summaries of key episodes, and exclusive access to AI thought leadership interviews.
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

export default AIPodcastsPage; 