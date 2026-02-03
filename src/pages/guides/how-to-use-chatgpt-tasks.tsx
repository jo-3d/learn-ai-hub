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

const GuideHeader = styled.div`
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

const GuideContent = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  padding: 3rem;
  margin-bottom: 2rem;
`;

const Section = styled.section`
  margin-bottom: 2.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #2A7DE1;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #f0f0f0;
`;

const Paragraph = styled.p`
  color: #4A4F5C;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;

const List = styled.ul`
  margin-bottom: 1.5rem;
  padding-left: 2rem;
`;

const ListItem = styled.li`
  color: #4A4F5C;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 0.8rem;
`;

const Highlight = styled.div`
  background-color: #f5f8ff;
  border-left: 4px solid #2A7DE1;
  padding: 1.5rem;
  margin: 2rem 0;
  border-radius: 0 8px 8px 0;
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

const GuideNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid #f0f0f0;
`;

const NavLink = styled.a`
  color: #2A7DE1;
  text-decoration: none;
  display: flex;
  align-items: center;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ChatGPTTasksGuide = () => {
  return (
    <>
      <Head>
        <title>How to Use ChatGPT Tasks Effectively | Learn AI Hub</title>
        <meta name="description" content="Learn how to automate your workflow with ChatGPT's scheduled tasks feature - a complete guide to putting your AI on autopilot." />
      </Head>
      <MainLayout>
        <Container>
          <BackLink>
            <Link href="/resources" passHref legacyBehavior>
              <a>← Back to Resources & Guides</a>
            </Link>
          </BackLink>
          
          <GuideHeader>
            <Title>How to Use ChatGPT Tasks Effectively</Title>
            <Subtitle>
              Learn how to automate your workflow and put ChatGPT on autopilot with the powerful Tasks feature
            </Subtitle>
          </GuideHeader>
          
          <GuideContent>
            <Section>
              <SectionTitle>Your 24/7 AI Assistant Has Arrived</SectionTitle>
              <Paragraph>
                Imagine having an assistant who works 24/7, proactively handling routine tasks, sending reminders, and even drafting content without you needing to be present. That's the promise of the new "Tasks" feature in ChatGPT. This capability allows you to schedule automated actions within the AI, turning it into a powerful productivity engine. For entrepreneurs and business owners juggling countless responsibilities, this feature offers exciting possibilities for automation and efficiency.
              </Paragraph>
            </Section>
            
            <Section>
              <SectionTitle>Understanding ChatGPT Scheduled Tasks</SectionTitle>
              <Paragraph>
                At its core, the Tasks feature lets you give ChatGPT instructions to execute automatically on a schedule you define.
              </Paragraph>
              
              <Highlight>
                <h3>Key Features:</h3>
                <List>
                  <ListItem><strong>Automated Execution:</strong> ChatGPT will run your defined tasks automatically, even when you're offline or not logged in.</ListItem>
                  <ListItem><strong>Flexible Scheduling:</strong> Tasks can be one-time or recurring (daily, weekly, monthly).</ListItem>
                  <ListItem><strong>Notifications:</strong> Receive alerts when your scheduled tasks are completed.</ListItem>
                  <ListItem><strong>Independence:</strong> Tasks operate even when you're not actively using ChatGPT.</ListItem>
                </List>
              </Highlight>
            </Section>
            
            <Section>
              <SectionTitle>Setting Up Your First Task</SectionTitle>
              <Paragraph>
                Getting started with ChatGPT Tasks is straightforward:
              </Paragraph>
              <List>
                <ListItem><strong>Step 1:</strong> Select the appropriate model that supports tasks (like "GPT-4o with scheduled tasks").</ListItem>
                <ListItem><strong>Step 2:</strong> Provide clear instructions on what you want ChatGPT to do.</ListItem>
                <ListItem><strong>Step 3:</strong> Set your schedule - specify when and how often the task should run.</ListItem>
                <ListItem><strong>Step 4:</strong> Confirm your setup and let ChatGPT handle the rest.</ListItem>
              </List>
              <Paragraph>
                You can manage all your active tasks from your profile settings, where you can pause, resume, or delete tasks as needed.
              </Paragraph>
            </Section>
            
            <Section>
              <SectionTitle>Practical Business Applications</SectionTitle>
              <Paragraph>
                How can businesses leverage this powerful feature? Here are some practical ways to put ChatGPT Tasks to work:
              </Paragraph>
              
              <Highlight>
                <h3>Business Use Cases:</h3>
                <List>
                  <ListItem><strong>Automated Monitoring:</strong> Schedule tasks to check competitor websites for price changes, monitor specific stock prices, or scan for online mentions of your brand.</ListItem>
                  <ListItem><strong>Content Generation Pipeline:</strong> Set up recurring tasks to draft initial blog post ideas, generate social media prompts, or create simple daily images relevant to your industry.</ListItem>
                  <ListItem><strong>Reminders & Admin:</strong> Never miss a deadline again. Schedule reminders for important filings, client follow-ups, invoice submissions, or even team birthdays.</ListItem>
                  <ListItem><strong>Data Gathering & Reporting:</strong> Ask ChatGPT to compile a daily news briefing on specific topics or summarize key metrics from your business sector.</ListItem>
                  <ListItem><strong>Personal Productivity:</strong> Use it for business-related habit reminders or even generating daily industry vocabulary for learning.</ListItem>
                </List>
              </Highlight>
            </Section>
            
            <Section>
              <SectionTitle>Important Limitations to Consider</SectionTitle>
              <Paragraph>
                While powerful, the Tasks feature does have some limitations to keep in mind:
              </Paragraph>
              <List>
                <ListItem><strong>Usage Limits:</strong> Tasks run using your account's model access, meaning they count towards any usage limits associated with your plan (including free tier limits).</ListItem>
                <ListItem><strong>Task Capacity:</strong> You can only have up to 10 tasks active simultaneously.</ListItem>
                <ListItem><strong>Current Restrictions:</strong> The feature doesn't currently support interaction with uploaded files, voice, or custom GPTs within the scheduled task itself.</ListItem>
              </List>
            </Section>
            
            <Section>
              <SectionTitle>Tips for Effective Task Creation</SectionTitle>
              <List>
                <ListItem><strong>Be Specific:</strong> Provide detailed instructions that ChatGPT can follow without additional input.</ListItem>
                <ListItem><strong>Test Before Scheduling:</strong> Run your prompt manually first to ensure it works as expected.</ListItem>
                <ListItem><strong>Use Clear Naming:</strong> Give your tasks descriptive names so you can easily identify them later.</ListItem>
                <ListItem><strong>Set Realistic Expectations:</strong> Remember that tasks can't access real-time web data beyond what's in ChatGPT's training.</ListItem>
                <ListItem><strong>Start Simple:</strong> Begin with basic, low-stakes tasks before moving to more complex automations.</ListItem>
              </List>
            </Section>
            
            <Section>
              <SectionTitle>AI Task Ideas Repository</SectionTitle>
              <Paragraph>
                Browse these ready-to-use task ideas for ChatGPT's Scheduled Tasks feature. Filter by category, then copy the prompt into ChatGPT when you set up a new task.
              </Paragraph>
              
              <div dangerouslySetInnerHTML={{ __html: `
                <div id="ai-task-repo" class="ai-task-repo">
                  <label for="category-select" class="sr-only">Filter by category</label>
                  <select id="category-select">
                    <option value="All">All categories</option>
                  </select>

                  <div id="task-list" class="task-list"></div>
                </div>

                <script>
                /* ---------- DATA: add/edit tasks here ---------- */
                const tasks = [
                  {category: "Content & Marketing", title: "Weekly Content Ideas", prompt: "Every Monday at 8 AM, generate 5 content ideas related to [your industry] based on current trends and send me a summary.", schedule: "Weekly Mon 08:00"},
                  {category: "Content & Marketing", title: "Daily Blog Outline", prompt: "Each weekday at 7 AM, draft a 5-point outline on a trending topic in [your industry].", schedule: "Weekdays 07:00"},
                  {category: "Monitoring & Research", title: "Industry News Digest", prompt: "At 6 AM each day, summarize the latest news and developments in [your industry] from the past 24 hours.", schedule: "Daily 06:00"},
                  {category: "Monitoring & Research", title: "Weekly Market Analysis", prompt: "Every Friday at 4 PM, analyze market trends in [your industry] for the past week and provide insights on potential opportunities.", schedule: "Weekly Fri 16:00"},
                  {category: "Admin & Reminders", title: "Meeting Prep", prompt: "30 minutes before each scheduled meeting, remind me to prepare and suggest 3 key talking points based on the meeting topic.", schedule: "30 min before meetings"},
                  {category: "Admin & Reminders", title: "Monthly Goal Review", prompt: "On the last day of each month at 3 PM, prompt me to review my monthly goals and help draft next month's objectives.", schedule: "Monthly (last day) 15:00"},
                  {category: "Personal Productivity", title: "Daily Reflection", prompt: "Each night at 8 PM ask me 3 reflection questions about my day's productivity and help identify areas for improvement.", schedule: "Daily 20:00"},
                  {category: "Personal Productivity", title: "Weekly Planning Session", prompt: "Every Sunday at 7 PM, help me plan my upcoming week by suggesting a prioritized task list based on my current projects.", schedule: "Weekly Sun 19:00"},
                  {category: "Learning & Development", title: "Daily Learning Prompt", prompt: "Every weekday at 9 AM send me a new concept related to [topic of interest] with a brief explanation and practical application.", schedule: "Weekdays 09:00"},
                  {category: "Learning & Development", title: "Skill Development", prompt: "Each Saturday morning, generate 3 exercises I can do to improve my skills in [specific skill] with increasing difficulty levels.", schedule: "Weekly Sat 10:00"}
                ];

                /* ---------  UI Logic: do not edit unless customising behaviour  --------- */
                const select = document.getElementById('category-select');
                const list   = document.getElementById('task-list');

                // Build category options from data
                [...new Set(tasks.map(t => t.category))].forEach(cat => {
                  const opt = document.createElement('option');
                  opt.value = cat;
                  opt.textContent = cat;
                  select.appendChild(opt);
                });

                function render(cat) {
                  list.innerHTML = '';
                  tasks
                    .filter(t => cat === 'All' || t.category === cat)
                    .forEach(t => {
                      const card = document.createElement('div');
                      card.className = 'task-card';
                      card.innerHTML = \`
                        <h3>\${t.title}</h3>
                        <p><strong>Category:</strong> \${t.category}</p>
                        <p><strong>Prompt:</strong> \${t.prompt}</p>
                        <p><strong>Suggested Schedule:</strong> \${t.schedule}</p>
                        <button class="copy-btn" data-prompt="\${t.prompt}">Copy Prompt</button>\`;
                      list.appendChild(card);
                    });
                    
                    // Add click listeners to copy buttons
                    document.querySelectorAll('.copy-btn').forEach(btn => {
                      btn.addEventListener('click', () => {
                        navigator.clipboard.writeText(btn.dataset.prompt);
                        btn.textContent = 'Copied!';
                        setTimeout(() => btn.textContent = 'Copy Prompt', 2000);
                      });
                    });
                }

                select.addEventListener('change', e => render(e.target.value));
                render('All'); // initial render
                </script>

                <style>
                /* ------ Styling with website colors ------ */
                .ai-task-repo {
                  padding: 1.5rem;
                  background: #f5f8ff;
                  border-radius: 1rem;
                  margin: 1.5rem 0;
                  font-family: inherit;
                }
                #category-select {
                  margin-bottom: 1.5rem;
                  padding: 0.6rem 1rem;
                  border-radius: 0.5rem;
                  border: 1px solid #D0D5DD;
                  background: white;
                  font-size: 1rem;
                  width: 100%;
                  max-width: 300px;
                }
                .task-list {
                  display: grid;
                  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                  gap: 1.5rem;
                }
                .task-card {
                  background: white;
                  border: 1px solid #E1E5EC;
                  border-radius: 0.75rem;
                  padding: 1.5rem;
                  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
                  transition: transform 0.2s, box-shadow 0.2s;
                }
                .task-card:hover {
                  transform: translateY(-3px);
                  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                }
                .task-card h3 { 
                  margin: 0 0 0.75rem; 
                  font-size: 1.2rem; 
                  color: #2A7DE1; 
                }
                .task-card p { 
                  margin: 0.5rem 0; 
                  font-size: 0.95rem; 
                  color: #4A4F5C; 
                  line-height: 1.5;
                }
                .copy-btn {
                  margin-top: 1rem;
                  padding: 0.5rem 1rem;
                  background: #5E42BC;
                  color: white;
                  border: none;
                  border-radius: 50px;
                  cursor: pointer;
                  font-weight: 500;
                  transition: all 0.3s;
                }
                .copy-btn:hover {
                  background: #2A7DE1;
                  transform: translateY(-2px);
                }
                </style>
              ` }}></div>
            </Section>
            
            <Section>
              <SectionTitle>Unleashing the Full Potential of AI Automation</SectionTitle>
              <Paragraph>
                ChatGPT Tasks represent a significant step towards more proactive AI assistance. By automating routine checks, reminders, and basic content creation, entrepreneurs can free up valuable time and mental energy to focus on strategic growth. While there are limitations, especially for free users, this feature offers a practical way to integrate AI automation into your daily operations. Experiment with scheduling simple tasks and discover how this AI autopilot can streamline your workflow.
              </Paragraph>
            </Section>
            
            <CallToAction>
              <CTATitle>Ready to Put Your AI on Autopilot?</CTATitle>
              <CTAText>
                Subscribe to our newsletter to receive more AI automation tips, tutorials, and early access to our upcoming guide on advanced ChatGPT Tasks workflows.
              </CTAText>
              <Link href="/subscribe" passHref legacyBehavior>
                <Button>Join Our Community</Button>
              </Link>
            </CallToAction>
          </GuideContent>
        </Container>
      </MainLayout>
    </>
  );
};

export default ChatGPTTasksGuide; 