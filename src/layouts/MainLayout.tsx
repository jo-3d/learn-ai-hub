import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #2A7DE1;
    --secondary: #5E42BC;
    --accent: #00BFA6;
    --light: #F5F7FA;
    --dark: #333844;
    --text: #4A4F5C;
    --shadow: rgba(0, 0, 0, 0.1);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  body {
    color: var(--text);
    background-color: var(--light);
    line-height: 1.6;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
`;

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Main>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </Main>
    </>
  );
};

export default MainLayout; 