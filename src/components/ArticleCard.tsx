import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
// Image import no longer needed if not used elsewhere
// import Image from 'next/image'; 

interface ArticleCardProps {
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  backgroundColor?: string; // Added backgroundColor as optional prop
}

// The main container is now the Link itself
const CardLink = styled(Link)`
  display: block; // Make the link a block element
  text-decoration: none;
  color: inherit; // Inherit text color
`;

const Card = styled.div`
  background-color: var(--bg-dark-alt);
  border: 1px solid var(--border-dark);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-6px);
    border-color: var(--primary);
    box-shadow: var(--glow-cyan);
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Tag = styled.span`
  display: inline-block;
  align-self: flex-start;
  background-color: rgba(79, 195, 247, 0.15);
  color: var(--accent);
  padding: 0.4rem 0.9rem;
  border-radius: 50px;
  font-size: 0.8rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const Title = styled.h3`
  font-size: 1.3rem;
  color: var(--text-primary);
  margin-bottom: 0.8rem;
  line-height: 1.4;
`;

const Excerpt = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  font-size: 0.9rem;
  color: var(--text-muted);
`;

const DateSpan = styled.span``; // Renamed from Date to avoid conflict

const ArticleCard: React.FC<ArticleCardProps> = ({
  tag,
  title,
  excerpt,
  date,
  slug,
  backgroundColor // Added prop
}) => {
  return (
    <CardLink href={`/ai-insights/${slug}`} passHref>
      <Card>
        {/* Image section completely removed */}
        <CardContent>
          <Tag>{tag}</Tag>
          <Title>{title}</Title>
          <Excerpt>{excerpt}</Excerpt>
          <Meta>
            <DateSpan>{date}</DateSpan>
            {/* Removed author section for now */}
          </Meta>
        </CardContent>
      </Card>
    </CardLink>
  );
};

export default ArticleCard; 