import React from 'react';
import Head from 'next/head';
import MainLayout from '../../layouts/MainLayout';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

const ComingSoon = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: var(--primary);
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 3rem;
  color: var(--text);
`;

export default function AIImageGeneration() {
  return (
    <MainLayout>
      <Head>
        <title>AI Image Generation Guide | Learn AI Hub</title>
        <meta name="description" content="Learn how to create stunning images using AI tools like DALL-E, Midjourney, Stable Diffusion and other image generation platforms." />
      </Head>
      <Container>
        <ComingSoon>Coming Soon</ComingSoon>
        <Subtitle>Our comprehensive guide to AI Image Generation is currently being developed.</Subtitle>
        <p>Check back soon to learn about the latest AI tools and techniques for creating beautiful AI-generated images!</p>
      </Container>
    </MainLayout>
  );
} 