import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  :root {
    /* Primary Colors (from logo) */
    --primary: #2196F3;
    --primary-light: #64B5F6;
    --primary-dark: #1976D2;
    --accent: #4FC3F7;

    /* Gradient */
    --gradient: linear-gradient(135deg, #4FC3F7 0%, #2196F3 50%, #1976D2 100%);

    /* Dark Theme Colors */
    --bg-dark: #0D1117;
    --bg-dark-alt: #161B22;
    --bg-dark-hover: #21262D;
    --border-dark: #30363D;

    /* Text Colors */
    --text-primary: #E6EDF3;
    --text-secondary: #8B949E;
    --text-muted: #6E7681;

    /* Accents */
    --success: #3FB950;
    --youtube: #FF0000;

    /* Shadows */
    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.3);
    --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.4);
    --shadow-lg: 0 8px 30px rgba(0, 0, 0, 0.5);
    --glow-cyan: 0 0 20px rgba(79, 195, 247, 0.3);
    --glow-cyan-strong: 0 0 30px rgba(79, 195, 247, 0.4);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

  body {
    color: var(--text-primary);
    background-color: var(--bg-dark);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  h1, h2, h3, h4, h5, h6 {
    letter-spacing: -0.02em;
    font-weight: 600;
  }

  ::selection {
    background: var(--primary);
    color: white;
  }
`;

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-dark);
`;

const MainContent = styled.main`
  flex: 1;
  background: var(--bg-dark);
  min-height: calc(100vh - 60px);
`;

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <LayoutContainer>
        <Header />
        <MainContent>
          {children}
        </MainContent>
        <Footer />
      </LayoutContainer>
    </>
  );
};

export default MainLayout;
