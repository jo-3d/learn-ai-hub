import React from 'react';
import styled from 'styled-components';

interface YouTubeVideoCardProps {
  videoId: string;
  title: string;
  description?: string;
  category?: string;
  duration?: string;
}

const Card = styled.a`
  display: block;
  background: var(--bg-dark-alt);
  border: 1px solid var(--border-dark);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    border-color: var(--primary);
    box-shadow: var(--glow-cyan);
  }
`;

const ThumbnailWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 aspect ratio */
  background: #000;
`;

const Thumbnail = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 68px;
  height: 48px;
  background: rgba(255, 0, 0, 0.9);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;

  ${Card}:hover & {
    background: var(--youtube);
    box-shadow: 0 0 20px rgba(255, 0, 0, 0.4);
  }

  &::after {
    content: '';
    border-style: solid;
    border-width: 10px 0 10px 18px;
    border-color: transparent transparent transparent white;
    margin-left: 4px;
  }
`;

const Duration = styled.span`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 3px 6px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
`;

const Content = styled.div`
  padding: 1.25rem;
`;

const Category = styled.span`
  display: inline-block;
  background: rgba(79, 195, 247, 0.15);
  color: var(--accent);
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Title = styled.h3`
  margin: 0 0 0.5rem;
  font-size: 1.1rem;
  color: var(--text-primary);
  line-height: 1.4;
`;

const Description = styled.p`
  margin: 0;
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const YouTubeVideoCard: React.FC<YouTubeVideoCardProps> = ({
  videoId,
  title,
  description,
  category,
  duration
}) => {
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <Card href={videoUrl} target="_blank" rel="noopener noreferrer">
      <ThumbnailWrapper>
        <Thumbnail src={thumbnailUrl} alt={title} loading="lazy" />
        <PlayButton />
        {duration && <Duration>{duration}</Duration>}
      </ThumbnailWrapper>
      <Content>
        {category && <Category>{category}</Category>}
        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
      </Content>
    </Card>
  );
};

export default YouTubeVideoCard;
