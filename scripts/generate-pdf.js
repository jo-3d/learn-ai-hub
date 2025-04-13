const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const puppeteer = require('puppeteer');

async function generatePDF() {
  try {
    // Read the MDX file
    const filePath = path.join(process.cwd(), 'src/content/case-studies/transformative-impact-of-ai-in-healthcare.mdx');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data: frontMatter, content } = matter(fileContent);

    // Create HTML content
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>${frontMatter.title}</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              line-height: 1.8;
              color: #333;
              max-width: 800px;
              margin: 0 auto;
              padding: 2rem;
            }
            h1 { font-size: 2.5rem; margin-bottom: 1rem; }
            h2 { font-size: 2rem; margin: 2rem 0 1rem; }
            h3 { font-size: 1.6rem; margin: 1.5rem 0 1rem; }
            p { margin-bottom: 1.5rem; }
            .meta { color: #666; margin-bottom: 2rem; }
            .key-points {
              background-color: #f5f5f5;
              padding: 1.5rem;
              border-radius: 8px;
              margin: 2rem 0;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin: 1.5rem 0;
            }
            th, td {
              padding: 0.75rem;
              border: 1px solid #ddd;
              text-align: left;
            }
            th { background-color: #f5f5f5; }
          </style>
        </head>
        <body>
          <h1>${frontMatter.title}</h1>
          <div class="meta">${frontMatter.date}</div>
          
          <div class="key-points">
            <h4>Key Points</h4>
            <ul>
              ${frontMatter.keyPoints.map(point => `<li>${point}</li>`).join('')}
            </ul>
          </div>

          ${content}
          
          ${frontMatter.sources && frontMatter.sources.length > 0 ? `
            <div style="margin-top: 4rem; padding-top: 2rem; border-top: 1px solid #ddd;">
              <h2>Sources</h2>
              <ul>
                ${frontMatter.sources.map(source => `
                  <li><a href="${source.url}">${source.title}</a></li>
                `).join('')}
              </ul>
            </div>
          ` : ''}
        </body>
      </html>
    `;

    // Ensure the pdfs directory exists
    const pdfDir = path.join(process.cwd(), 'public/pdfs');
    if (!fs.existsSync(pdfDir)) {
      fs.mkdirSync(pdfDir, { recursive: true });
    }

    // Generate PDF using puppeteer
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(htmlContent);
    await page.pdf({
      path: path.join(pdfDir, 'transformative-impact-of-ai-in-healthcare.pdf'),
      format: 'A4',
      margin: { top: '2cm', right: '2cm', bottom: '2cm', left: '2cm' },
      printBackground: true
    });

    await browser.close();
    console.log('PDF generated successfully!');
  } catch (error) {
    console.error('Error generating PDF:', error);
    process.exit(1);
  }
}

generatePDF(); 