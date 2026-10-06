# Nebula Project

A responsive, single-page marketing site for **Nebula Project**, a creative agency specializing in web design and development, copywriting and SEO, and ads and social media integration.

**Live site:** [nebulaproject.netlify.app](https://nebulaproject.netlify.app/)

![Nebula Project homepage](/images/screenshot-homepage.png)
<!-- Replace with a real screenshot of the homepage. -->

## Overview

Nebula Project is built to show a brand that can take on any kind of project. The page presents the agency's story, services, and client work, and gives visitors a direct way to get in touch through a contact form.

I handled the full process: UX research, visual design in Adobe XD, and front-end development with HTML, CSS, and vanilla JavaScript.

## Design concept: why space?

The agency's name, *Nebula*, comes from the vast clouds of gas and dust where stars are born. That idea drove the whole visual direction:

- **Innovation and possibility.** A nebula is where something new takes shape. The space theme tells visitors that the agency approaches each project as a fresh creative opportunity.
- **Range.** Space is open and limitless, which reflects how the agency can work with any industry, any brand, and any idea that comes its way. The portfolio reflects that range, from an entertainment magazine to a 3D invitation service to a local family business.
- **Depth and motion.** Layered visuals and animation give the page a sense of depth, as if the visitor is moving through space as they scroll.

The goal was a site that feels distinctive and memorable without hurting readability or usability.

## Features

- Single-page layout with sections for Home, About, Services, Work, and Contact
- Smooth anchor navigation between sections
- CSS and JavaScript animations on page load and as the visitor explores the page
- Statistics section that makes the case for professional web design
- Portfolio showcase linking to live client websites
- Contact form that sends inquiries to the agency
- Responsive layout for mobile, tablet, and desktop

## How it's built

### HTML
Semantic, section-based markup keeps the page organized and accessible. Each section has its own anchor, which drives the navigation.

### CSS
- **Animations:** CSS keyframe animations and transitions create the motion and atmosphere, without relying on an animation library.
- **Layout:** Flexbox and/or Grid handle section layouts, with media queries adapting the design to different screen sizes.
- **Theming:** Color, typography, and spacing are kept consistent across sections to hold the space-inspired look together.
<!-- Add specifics if you like, e.g. CSS custom properties, the technique behind the background effect, or your breakpoints. -->

### JavaScript
Vanilla JavaScript triggers the page-load animations and handles interactive behavior such as navigation. Keeping it framework-free keeps the page lightweight and fast to load.
<!-- Add specifics, e.g. IntersectionObserver for scroll reveals, or how the loading sequence works. -->

### Contact form
The form is powered by **Netlify Forms**, so submissions go straight to the agency without a custom backend. This keeps the site simple to host and maintain.

## Tools and technologies

| Area | Tools |
| --- | --- |
| Design | Adobe XD |
| Front end | HTML5, CSS3, JavaScript (vanilla) |
| Forms | Netlify Forms |
| Hosting and deployment | Netlify |
| Version control | Git, GitHub |

## Project structure

```
nebula-project/
├── index.html
├── css/
├── js/
├── images/
└── README.md
```
<!-- Update to match the actual folder structure. -->

## Running locally

No build step is required.

1. Clone the repository
   ```bash
   git clone https://github.com/justbycris/<repo-name>.git
   ```
2. Open `index.html` in your browser, or serve the folder with a local server such as the VS Code Live Server extension.

Note: Netlify Forms only works when the site is deployed on Netlify, so the contact form won't submit locally.

## Deployment

The site is deployed on Netlify and connected to the repository, so pushing to the main branch publishes the latest version.

## What I learned

- Designing a cohesive visual concept around a brand name, and carrying it through color, motion, and layout
- Building engaging animation with CSS and vanilla JavaScript, with attention to performance
- Collecting form submissions without writing a backend
- Taking a project from UX research and design in Adobe XD to a live, deployed site

## Possible next steps

- Migrate to a component-based framework such as Next.js
- Connect the portfolio content to a headless CMS so the agency can update it without editing code
- Add a performance and accessibility audit pass

## Author

**Cristina Gutierrez N.**
[LinkedIn](https://www.linkedin.com/in/cristigtzname/) · [GitHub](https://github.com/justbycris) · [Portfolio](https://bycris.netlify.app/)