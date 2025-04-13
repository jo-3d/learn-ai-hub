import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

interface ArticleCardProps {
  tag: string;
  title: string;
  excerpt: string;
  author?: {
    name: string;
    avatar: string;
  };
  date: string;
  slug: string;
  imageUrl?: string;
  backgroundColor?: string;
}

const Card = styled.article`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px var(--shadow);
  transition: transform 0.3s;
  display: flex;
  flex-direction: column;
  height: 100%;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
`;

const CardContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Tag = styled.span`
  display: inline-block;
  background-color: rgba(94, 66, 188, 0.1);
  color: var(--secondary);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  color: var(--dark);
  margin-bottom: 1rem;
  line-height: 1.4;
`;

const Excerpt = styled.p`
  color: var(--text);
  line-height: 1.6;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
`;

const Date = styled.span`
  color: var(--text-light);
  font-size: 0.9rem;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const AuthorAvatar = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
`;

const AuthorName = styled.span`
  color: var(--text-light);
  font-size: 0.9rem;
`;

const ArticleCard: React.FC<ArticleCardProps> = ({
  tag,
  title,
  excerpt,
  author,
  date,
  slug,
  imageUrl,
  backgroundColor
}) => {
  return (
    <Link href={`/ai-insights/${slug}`} passHref legacyBehavior>
      <Card>
        <CardImage>
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              fill
              style={{ objectFit: 'cover' }}
            />
          ) : (
            <div style={{ 
              width: '100%', 
              height: '100%', 
              backgroundColor: backgroundColor || '#d4e6ff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem'
            }}>
              {tag.charAt(0)}
            </div>
          )}
        </CardImage>
        <CardContent>
          <Tag>{tag}</Tag>
          <Title>{title}</Title>
          <Excerpt>{excerpt}</Excerpt>
          <Meta>
            <Date>{date}</Date>
            {author && (
              <Author>
                <AuthorAvatar>
                  <Image
                    src={author.avatar}
                    alt={author.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </AuthorAvatar>
                <AuthorName>{author.name}</AuthorName>
              </Author>
            )}
          </Meta>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ArticleCard; 