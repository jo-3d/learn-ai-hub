import { GetStaticProps, GetStaticPaths } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import MainLayout from '../../layouts/MainLayout';
import styled from 'styled-components';
import {
  AIUseCasesTable,
  AIReadinessTable,
  DataSecurityTable,
  EthicalConsiderationsTable,
  FDARegulatoryTable,
  KPIsTable,
  DataQualityMetricsTable,
  DataLifecycleTable,
  RegulatoryComplianceTable,
  DataGovernanceRolesTable,
  BiasMitigationTable
} from '../../components/AIComponentDummies';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  
  h1 {
    font-size: 2.8rem;
    color: var(--dark);
    margin-bottom: 2rem;
    text-align: center;
  }
  
  h2 {
    font-size: 2rem;
    color: var(--dark);
    margin: 3rem 0 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid var(--light);

    &[id^="phase"] {
      background: var(--light);
      padding: 1.5rem;
      border-radius: 8px;
      border-left: 5px solid var(--primary);
      margin: 3rem -1.5rem;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  }
  
  h3 {
    font-size: 1.5rem;
    color: var(--dark);
    margin: 2rem 0 1rem;
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--text);
    margin-bottom: 1.5rem;
  }
  
  ul, ol {
    margin: 1.5rem 0;
    padding-left: 2rem;
    
    li {
      margin-bottom: 0.5rem;
      font-size: 1.1rem;
      line-height: 1.6;
      color: var(--text);
    }
  }
  
  a {
    color: var(--primary);
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border-color 0.2s ease;
    
    &:hover {
      border-color: var(--primary);
    }
  }
  
  blockquote {
    margin: 2rem 0;
    padding: 1.5rem;
    border-left: 4px solid var(--primary);
    background: var(--light);
    font-style: italic;
    color: var(--text);
  }
  
  code {
    background: var(--light);
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-family: monospace;
    font-size: 0.9rem;
  }
  
  pre {
    background: var(--light);
    padding: 1.5rem;
    border-radius: 8px;
    overflow-x: auto;
    margin: 2rem 0;
    
    code {
      background: none;
      padding: 0;
      font-size: 0.95rem;
      line-height: 1.6;
    }
  }
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 2rem 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 2rem 0;
    
    th, td {
      padding: 1rem;
      border: 1px solid var(--border);
      text-align: left;
    }
    
    th {
      background: var(--light);
      font-weight: 600;
    }
    
    tr:nth-child(even) {
      background: var(--light);
    }
  }
`;

const PhaseSection = styled.div`
  background: var(--light);
  padding: 1.5rem 2rem;
  border-radius: 8px;
  border-left: 5px solid var(--primary);
  margin: 3rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h2 {
    margin-top: 0;
    border-bottom: none;
    padding-bottom: 0;
  }
`;

const components = {
  AIUseCasesTable,
  AIReadinessTable,
  DataSecurityTable,
  EthicalConsiderationsTable,
  FDARegulatoryTable,
  KPIsTable,
  DataQualityMetricsTable,
  DataLifecycleTable,
  RegulatoryComplianceTable,
  DataGovernanceRolesTable,
  BiasMitigationTable,
  PhaseSection
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join(process.cwd(), 'content/toolkits-and-guides'));
  
  const paths = files
    .filter(filename => filename.endsWith('.mdx'))
    .map(filename => ({
      params: {
        slug: filename.replace('.mdx', '')
      }
    }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join(process.cwd(), 'content/toolkits-and-guides', `${params?.slug}.mdx`),
    'utf-8'
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug: params?.slug,
      source: mdxSource
    }
  };
};

const ToolkitGuidePage = ({ frontMatter, source }: any) => {
  return (
    <MainLayout>
      <Container>
        <Content>
          <MDXRemote {...source} components={components} />
        </Content>
      </Container>
    </MainLayout>
  );
};

export default ToolkitGuidePage; 