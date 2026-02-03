import React from 'react';
import TutorialTemplate from '../../components/TutorialTemplate';
import MainLayout from '../../layouts/MainLayout';
import Head from 'next/head';
import styled from 'styled-components';

const CodeBlock = styled.pre`
  background: #1e1e1e;
  color: #fff;
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
  margin: 1rem 0;
  font-family: 'Courier New', Courier, monospace;
  min-height: 200px;
  display: flex;
  align-items: center;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

const TipBox = styled.div`
  background: #f0f9ff;
  border-left: 4px solid #5E42BC;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 0 8px 8px 0;
`;

const ExampleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
`;

const ExampleCard = styled.div`
  background: #f5f5f5;
  padding: 1rem;
  border-radius: 8px;
  
  h4 {
    margin-top: 0;
    color: #5E42BC;
  }
  
  p {
    margin: 0.5rem 0;
  }
`;

const DataAnalysisTutorial = () => {
  const steps = [
    {
      title: "Introduction to AI Data Analysis",
      content: (
        <div>
          <h2>What is AI Data Analysis?</h2>
          <p>AI-powered data analysis combines traditional spreadsheet tools with artificial intelligence to help you understand, visualize, and make decisions from your data more effectively.</p>
          
          <TipBox>
            <strong>Key Features:</strong>
            <ul>
              <li>Automated data cleaning and formatting</li>
              <li>Smart pattern recognition</li>
              <li>Predictive analytics</li>
              <li>Natural language queries</li>
              <li>Automated visualization</li>
            </ul>
          </TipBox>
          
          <h3>Common Use Cases</h3>
          <CodeBlock>
            {`1. Sales Analysis
2. Financial Forecasting
3. Customer Behavior
4. Inventory Management
5. Performance Metrics`}
          </CodeBlock>
        </div>
      )
    },
    {
      title: "Getting Started with AI Tools",
      content: (
        <div>
          <h2>Setting Up Your Analysis Environment</h2>
          
          <h3>1. Google Sheets Add-ons</h3>
          <TipBox>
            <strong>Recommended Tools:</strong>
            <ul>
              <li>GPT for Sheets</li>
              <li>SheetAI</li>
              <li>AI Assistant for Sheets</li>
              <li>Formula Bot</li>
            </ul>
          </TipBox>
          
          <h3>2. Excel Add-ins</h3>
          <ExampleGrid>
            <ExampleCard>
              <h4>Power Query</h4>
              <p>AI-powered data transformation and cleaning</p>
            </ExampleCard>
            <ExampleCard>
              <h4>Ideas</h4>
              <p>Automated insights and pattern detection</p>
            </ExampleCard>
            <ExampleCard>
              <h4>Power BI</h4>
              <p>Advanced analytics and visualization</p>
            </ExampleCard>
          </ExampleGrid>
          
          <h3>3. Basic Setup</h3>
          <CodeBlock>
            {`1. Install the AI add-on
2. Connect to your data source
3. Set up API keys if needed
4. Configure data permissions
5. Test basic functionality`}
          </CodeBlock>
        </div>
      )
    },
    {
      title: "Data Cleaning & Preparation",
      content: (
        <div>
          <h2>Preparing Your Data</h2>
          
          <h3>1. Automated Data Cleaning</h3>
          <TipBox>
            <strong>Common Tasks:</strong>
            <ul>
              <li>Remove duplicates</li>
              <li>Fix formatting issues</li>
              <li>Handle missing values</li>
              <li>Standardize text</li>
              <li>Convert data types</li>
            </ul>
          </TipBox>
          
          <h3>2. AI Formulas</h3>
          <CodeBlock>
            {`Google Sheets:
=GPT("Clean and standardize this text: " & A2)

Excel:
=AI.CLEAN(A2, "standardize text")`}
          </CodeBlock>
          
          <h3>3. Data Validation</h3>
          <ExampleGrid>
            <ExampleCard>
              <h4>Pattern Recognition</h4>
              <p>AI identifies and fixes common data patterns</p>
            </ExampleCard>
            <ExampleCard>
              <h4>Anomaly Detection</h4>
              <p>Find and handle unusual data points</p>
            </ExampleCard>
          </ExampleGrid>
        </div>
      )
    },
    {
      title: "Analysis & Insights",
      content: (
        <div>
          <h2>Extracting Insights</h2>
          
          <h3>1. Natural Language Queries</h3>
          <TipBox>
            <strong>Example Queries:</strong>
            <ul>
              <li>"Show me sales trends by region"</li>
              <li>"What's the correlation between X and Y?"</li>
              <li>"Predict next quarter's revenue"</li>
              <li>"Find anomalies in the data"</li>
            </ul>
          </TipBox>
          
          <h3>2. Automated Analysis</h3>
          <CodeBlock>
            {`Google Sheets:
=GPT("Analyze this sales data and provide key insights: " & A2:D100)

Excel:
=AI.ANALYZE(A2:D100, "sales trends")`}
          </CodeBlock>
          
          <h3>3. Pattern Recognition</h3>
          <ExampleGrid>
            <ExampleCard>
              <h4>Trend Analysis</h4>
              <p>Identify seasonal patterns and trends</p>
            </ExampleCard>
            <ExampleCard>
              <h4>Correlation Detection</h4>
              <p>Find relationships between variables</p>
            </ExampleCard>
          </ExampleGrid>
        </div>
      )
    },
    {
      title: "Visualization & Reporting",
      content: (
        <div>
          <h2>Creating Visual Reports</h2>
          
          <h3>1. Automated Charts</h3>
          <TipBox>
            <strong>AI Chart Types:</strong>
            <ul>
              <li>Smart trend lines</li>
              <li>Predictive charts</li>
              <li>Anomaly detection visuals</li>
              <li>Interactive dashboards</li>
            </ul>
          </TipBox>
          
          <h3>2. Report Generation</h3>
          <CodeBlock>
            {`Google Sheets:
=GPT("Create a summary report of this data: " & A2:D100)

Excel:
=AI.REPORT(A2:D100, "monthly sales summary")`}
          </CodeBlock>
          
          <h3>3. Dashboard Creation</h3>
          <ExampleGrid>
            <ExampleCard>
              <h4>Sales Dashboard</h4>
              <p>Revenue, growth, and customer metrics</p>
            </ExampleCard>
            <ExampleCard>
              <h4>Financial Dashboard</h4>
              <p>Expenses, profits, and forecasts</p>
            </ExampleCard>
          </ExampleGrid>
        </div>
      )
    },
    {
      title: "Advanced Techniques",
      content: (
        <div>
          <h2>Taking Analysis Further</h2>
          
          <h3>1. Predictive Analytics</h3>
          <TipBox>
            <strong>Forecasting Methods:</strong>
            <ul>
              <li>Time series analysis</li>
              <li>Regression models</li>
              <li>Machine learning predictions</li>
              <li>Scenario planning</li>
            </ul>
          </TipBox>
          
          <h3>2. Custom Analysis</h3>
          <CodeBlock>
            {`Advanced Formulas:
=AI.PREDICT(A2:D100, "next month sales")
=AI.CLUSTER(A2:D100, "customer segments")
=AI.OPTIMIZE(A2:D100, "inventory levels")`}
          </CodeBlock>
          
          <h3>3. Integration Examples</h3>
          <ExampleGrid>
            <ExampleCard>
              <h4>Sales Forecasting</h4>
              <p>Historical data → AI analysis → Future predictions</p>
            </ExampleCard>
            <ExampleCard>
              <h4>Customer Segmentation</h4>
              <p>Customer data → AI clustering → Targeted groups</p>
            </ExampleCard>
          </ExampleGrid>
        </div>
      )
    }
  ];

  return (
    <MainLayout>
      <Head>
        <title>AI Data Analysis Guide | Learn AI Hub</title>
        <meta name="description" content="Learn how to use AI tools to analyze data, create visualizations, and gain insights from your datasets." />
      </Head>
      
      <TutorialTemplate
        title="Using AI for Data Analysis in Sheets/Excel"
        description="Explore how AI tools can help you analyze data, create charts, and find insights in your spreadsheets."
        steps={steps}
      />
    </MainLayout>
  );
};

export default DataAnalysisTutorial; 