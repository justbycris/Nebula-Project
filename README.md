# Nebula Project

A responsive, single-page marketing site for **Nebula Project**, a creative agency specializing in web design and development, copywriting and SEO, and ads and social media integration.

**Live site:** [nebulaproject.netlify.app](https://nebulaproject.netlify.app/)

![Nebula Project homepage](./images/screenshot.png)
<!-- Replace with a real screenshot of the homepage. -->

## Overview

Nebula Project is built to show a brand that can take on any kind of project. The page presents the agency's story, services, and client work, and gives visitors a direct way to get in touch through a contact form.

I handled the full process:  visual design in Adobe XD, and front-end development with HTML, CSS, and vanilla JavaScript.

## Design concept: why space?

The agency's name, *Nebula*, comes from the vast clouds of gas and dust where stars are born. That idea drove the whole visual direction:

- **Innovation and possibility.** A nebula is where something new takes shape. The space theme tells visitors that the agency approaches each project as a fresh creative opportunity.
- **Range.** Space is open and limitless, which reflects how the agency can work with any industry, any brand, and any idea that comes its way. The portfolio reflects that range, from an entertainment magazine to a 3D invitation service to a local family business.
- **Depth and motion.** Layered visuals and animation give the page a sense of depth, as if the visitor is moving through space as they scroll.

The goal was a site that feels distinctive and memorable without hurting readability or usability.

## Features

- Single-page layout with sections for Home, About, Services, Work, and Contact
- Smooth anchor navigation between sections
- Animated starfield: 200 stars generated with JavaScript, each with randomized position, speed, and timing
- Loading screen that hides once the page has fully loaded
- Statistics section that makes the case for professional web design
- Portfolio showcase linking to live client websites
- Contact form with client-side validation for required fields and email format
- Hamburger menu for mobile navigation
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
Vanilla JavaScript handles the page's motion and interactivity. Keeping it framework-free keeps the page lightweight and fast to load.

**Generated starfield.** Instead of hand-placing stars in the markup, the script generates them programmatically. A `createStar()` function builds 200 star elements (set by a single `NUM_STARS` constant) and appends them to a `.stars` container. Each star gets:

- a random position across the viewport, using `Math.random()` with the window's width and height
- a random animation duration between 5 and 10 seconds
- a random negative animation delay of up to 20 seconds

The negative delay matters: it starts every star partway through its animation cycle, so the sky looks alive the moment the page appears instead of all the stars pulsing in sync. The visual twinkle itself is a CSS animation on the `.star` class, so JavaScript only sets up the variation and the browser handles the animation. Changing the star count or density is a one-line edit.

**Loading screen.** A full-screen loader covers the page until the `load` event fires, then hides after a short one-second delay. This keeps visitors from seeing the layout and images pop in, and gives the starfield time to set up.

**Responsive navigation.** A hamburger button toggles an `active` class on the nav links, so the CSS controls how the mobile menu opens and closes.

### Contact form
The contact form validates input on the client before sending. It checks that the name, email, and message fields are filled in, tests the email against a basic format pattern, and shows an alert if anything is wrong. The form is deployed on **Netlify Forms**, so submissions reach the agency without a custom backend, which keeps the site simple to host and maintain.
<!-- Make sure the submit handler actually posts to Netlify before keeping this claim; see my note in chat. -->

### How CSS and JavaScript split the work
CSS handles how things look and move. JavaScript only decides what exists and where, plus the interactive behavior. This split keeps the animation work on the browser's rendering side and keeps the scripts short and easy to read.

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
├── styles.css
├── app.js
├── images/
└── README.md
```

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
