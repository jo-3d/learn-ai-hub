# HealthTech AI Hub

A modern, responsive website for healthcare technology professionals interested in AI and machine learning. Built with Next.js, TypeScript, and styled-components.

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Run the development server:
```bash
npm run dev
```

## Project Structure

```
├── src/
│   ├── components/      # Reusable UI components
│   ├── layouts/        # Page layouts
│   ├── pages/          # Next.js pages
│   ├── content/        # Blog posts and other content
│   ├── styles/         # Global styles and theme
│   └── templates/      # Page templates
├── public/            # Static assets
└── package.json
```

## Creating New Blog Posts

### File Structure

Create new blog posts in the `src/content/blog` directory. Use the following format for the filename:
```
YYYY-MM-DD-title-of-post.mdx
```

Example: `2024-03-20-introduction-to-healthcare-ai.mdx`

### Front Matter

Each blog post should begin with front matter in YAML format. Here's the required structure:

```yaml
---
title: "Your Post Title"
date: "YYYY-MM-DD"
author:
  name: "Author Name"
  avatar: "/images/authors/author-name.jpg"
  bio: "Author's brief bio"
coverImage: "/images/blog/your-cover-image.jpg"
tags:
  - "Tag 1"
  - "Tag 2"
readingTime: "X min read"
---
```

### Content Guidelines

1. **Images**
   - Place images in `public/images/blog/`
   - Use relative paths in your MDX files
   - Optimize images before adding them
   - Recommended dimensions: 1200x630px for cover images

2. **Code Blocks**
   - Use triple backticks with language specification
   ```python
   # Your code here
   ```

3. **Formatting**
   - Use Markdown syntax for formatting
   - H1 (#) for the main title
   - H2 (##) for major sections
   - H3 (###) for subsections
   - Use bold (**) for emphasis
   - Use bullet points (-) for lists

4. **Links**
   - Use relative paths for internal links
   - Use full URLs for external links
   - Add title attributes for better accessibility

### Example Post Structure

```markdown
---
title: "Your Post Title"
date: "2024-03-20"
author:
  name: "Your Name"
  avatar: "/images/authors/your-name.jpg"
  bio: "Your bio"
coverImage: "/images/blog/cover-image.jpg"
tags:
  - "Tag 1"
  - "Tag 2"
readingTime: "5 min read"
---

# Main Title

Introduction paragraph...

## First Section

Content...

### Subsection

More content...

## Code Example

```python
def example():
    return "Hello, World!"
```

## Conclusion

Wrap-up...
```

### Best Practices

1. **SEO Optimization**
   - Use descriptive titles
   - Include relevant keywords naturally
   - Write meta descriptions
   - Use proper heading hierarchy

2. **Content Quality**
   - Proofread thoroughly
   - Include practical examples
   - Add relevant images/diagrams
   - Link to related content
   - Keep paragraphs concise

3. **Technical Content**
   - Explain complex concepts clearly
   - Include code examples when relevant
   - Provide working examples
   - Link to documentation

4. **Engagement**
   - End with a call to action
   - Encourage discussion
   - Link to related articles
   - Include resources for further reading

## Development

### Adding New Components

1. Create component in `src/components/`
2. Use TypeScript interfaces for props
3. Style with styled-components
4. Export from index file

### Modifying Styles

1. Global styles are in `src/styles/GlobalStyle.ts`
2. Theme variables are in `src/styles/theme.ts`
3. Component-specific styles should be in their respective files

### Testing

```bash
npm run test        # Run tests
npm run test:watch  # Watch mode
npm run lint        # Lint code
```

## Deployment

1. Build the project:
```bash
npm run build
```

2. Test the production build:
```bash
npm run start
```

3. Deploy to your hosting platform of choice

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details 