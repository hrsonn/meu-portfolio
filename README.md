# Harrison 'Son' Santos -- Portfolio

[![Angular](https://img.shields.io/badge/Angular-21.2-DD0031?logo=angular&logoColor=white)](https://angular.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vite.dev)
[![Vitest](https://img.shields.io/badge/Vitest-4.0-6E9F18?logo=vitest&logoColor=white)](https://vitest.dev)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/deploy-GitHub%20Pages-222222?logo=githubpages)](https://hrsonn.github.io/portfolio-son/)

Personal portfolio website for **Harrison "Son" Santos**, a front-end developer and designer. Built with **Angular 21** standalone components, TypeScript strict mode, and a cyberpunk neon-pink design system.

> Currently under development. Hero and About sections are complete; Skills, Projects, and Contact sections have structure and content and are receiving ongoing polish.

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Components](#components)
- [Design System](#design-system)
- [Accessibility](#accessibility)
- [Scripts](#scripts)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Tech Stack

| Technology     | Purpose                                      |
|----------------|----------------------------------------------|
| Angular 21.2   | Component framework (standalone, no NgModules) |
| TypeScript 5.9 | Language with strict mode enabled            |
| Vite           | Build tool (via @angular/build application builder) |
| Vitest 4.0     | Unit testing framework                       |
| Formspree      | Contact form backend (serverless)            |
| Prettier 3.8   | Code formatting                              |

---

## Features

- **Cyberpunk visual theme** -- dark background with noise texture overlay, neon pink accents, animated blurs
- **Fluid responsive typography** -- uses `clamp()` for seamless scaling across every viewport
- **Custom cursor** -- pink dot follows the mouse pointer, enabled after first render via `afterNextRender`
- **IntersectionObserver navigation** -- side navbar highlights the currently visible section automatically
- **Smooth scroll** -- navigation buttons scroll to sections with `scrollIntoView({ behavior: 'smooth' })`
- **Contact form** -- integrates with Formspree for serverless email delivery
- **Animated backgrounds** -- blobs, curves, and spray layers with CSS `@keyframes` animations
- **Accessibility-first** -- skip link, ARIA landmarks, semantic HTML, keyboard navigation
- **Standalone components** -- no NgModules, minimal boilerplate, `bootstrapApplication` API
- **OnPush change detection** -- all components use `ChangeDetectionStrategy.OnPush` for performance

---

## Project Structure

```
src/
├── index.html                   # Entry HTML with SEO meta tags
├── main.ts                      # Angular bootstrap (bootstrapApplication)
├── styles.css                   # Global styles, design tokens, keyframe animations
└── app/
    ├── app.ts                   # Root component (composes all sections)
    ├── app.html                 # Root template (navbar + sections + footer)
    ├── app.css
    ├── app.config.ts            # Application providers
    ├── app.routes.ts            # Routes (empty -- single-page scroll)
    └── components/
        ├── hero/                # Hero section: headline, logo, CTA
        ├── navbar/              # Side/fixed-bottom navigation
        ├── about/               # About section: bio, visuals
        ├── skills/              # Skills grid: Front-end, Design, Back-end
        ├── projects/            # Project cards + design gallery
        ├── contact/             # Contact form + social links
        └── footer/              # Footer: copyright, social links
```

---

## Getting Started

### Prerequisites

- **Node.js** 18.19+ or 20.11+
- **npm** 11.12+ (managed via `packageManager` in `package.json`)

### Install

```bash
npm install
```

### Development server

```bash
npm start
# or
ng serve
```

Navigate to `http://localhost:4200/`. The application hot-reloads on source changes.

### Build

```bash
npm run build
# or
ng build
```

Production artifacts are written to the `dist/` directory.

### Run tests

```bash
npm test
# or
ng test
```

Uses Vitest under the hood via the `@angular/build:unit-test` builder.

---

## Components

| Component | Selector       | Description |
|-----------|----------------|-------------|
| `App`     | `app-root`     | Root component; implements custom cursor via `afterNextRender`. Composes all child sections. |
| `Navbar`  | `app-navbar`   | Vertical side nav on desktop / horizontal bottom nav on mobile. Tracks active section with `IntersectionObserver`. |
| `Hero`    | `app-hero`     | Full-viewport hero with animated blob backgrounds, centered logo, headline, and CTA button. |
| `About`   | `app-about`    | Bio section with decorative spray layers, avatar images, and typographic layout. |
| `Skills`  | `app-skills`   | Three-column skill grid (Front-end, Design, Back-end) with color-coded skill labels. |
| `Projects`| `app-projects` | Project cards (LessScreen, VinlandSaga) with hover lift effects and a design gallery. |
| `Contact` | `app-contact`  | Contact form (submits to Formspree) and pill-style links for email, GitHub, and LinkedIn. |
| `Footer`  | `app-footer`   | Copyright line and social link row. |

### Example: Adding a new section component

```typescript
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {}
```

Then register it in `app.ts` imports and include the tag in `app.html`:

```html
<app-experience></app-experience>
```

### Example: IntersectionObserver active section tracking

Extracted from `Navbar` -- this pattern is used to highlight the current navigation item:

```typescript
ngAfterViewInit(): void {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          this.activeSection.set(entry.target.id);
        }
      }
    },
    { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
  );
  for (const section of this.sections) {
    const el = document.getElementById(section.id);
    if (el) observer.observe(el);
  }
}
```

### Example: Custom cursor with afterNextRender

```typescript
import { afterNextRender, Component } from '@angular/core';

@Component({ ... })
export class App {
  constructor() {
    afterNextRender(() => {
      const cursor = document.querySelector('.custom-cursor') as HTMLElement;
      if (!cursor) return;
      document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      });
    });
  }
}
```

---

## Design System

Theming is driven entirely by **CSS custom properties** declared in `src/styles.css`:

```css
:root {
  --color-neon-pink: #ff007f;
  --color-cyan: #00f0ff;
  --color-cyber-black: #050505;
  --color-off-white: #f4f3ee;

  --font-inter: 'Inter', system-ui, sans-serif;
  --font-bebas: 'Bebas Neue', Impact, sans-serif;
  --font-condiment: 'Condiment', cursive;
  --font-daruma: 'Darumadrop One', system-ui;

  --display-xl: clamp(4.25rem, 15vw, 13rem);
  --text-body: clamp(0.95rem, 1.4vw, 1.08rem);

  --noise-texture: url('https://grainy-gradients.vercel.app/noise.svg');
  --shadow-pink: 0 0 24px rgb(255 0 127 / 0.22);
}
```

Key design decisions:

- **Dark base** (`#050505`) with a grain/noise SVG texture overlay for a gritty cyberpunk feel
- **Neon pink** (`#ff007f`) as the primary accent, reinforced by multiple radial gradient overlays on `<body>`
- **Four typefaces** loaded from Google Fonts: Inter (body), Bebas Neue (display), Condiment (decorative), Darumadrop One (handwritten accent)
- **Fluid scale** -- every spacing and font-size value uses `clamp()` for seamless scaling from mobile to ultrawide
- **Animation library** -- pure CSS `@keyframes` (fade-in-up, float, sway, pulse-glow) -- no external animation dependency

---

## Accessibility

- **Skip link** -- the first focusable element on the page, jumps directly to `<main id="conteudo-principal">`
- **ARIA attributes** -- `aria-label`, `aria-labelledby`, `aria-describedby`, and `aria-hidden` used on all interactive and decorative elements
- **Semantic HTML** -- proper use of `header`, `main`, `nav`, `section`, `article`, `address`, `footer`
- **Landmarks** -- `role="banner"`, `role="main"`, `role="contentinfo"`, `role="list"`
- **Keyboard navigation** -- all buttons and links are natively focusable; `:focus-visible` outlines are styled
- **Screen-reader only** -- `.sr-only` utility class for content that should be announced but not visually rendered

---

## Scripts

| Script  | Command                                       | Description                        |
|---------|-----------------------------------------------|------------------------------------|
| `start` | `ng serve`                                    | Development server with HMR        |
| `build` | `ng build`                                    | Production build (Vite-based)      |
| `watch` | `ng build --watch --configuration development` | Dev build with file watching       |
| `test`  | `ng test`                                     | Run unit tests via Vitest          |
| `ng`    | `ng`                                          | Angular CLI                        |

---

## Deployment

This project uses the modern **`@angular/build` application builder** (Vite-based), replacing the legacy Webpack-based `@angular-devkit/build-angular`. The output is a fully static site under `dist/portfolio-son/`.

Deployable to any static host:

- **GitHub Pages** -- push the `dist/` contents to a `gh-pages` branch
- **Netlify** -- point the publish directory to `dist/portfolio-son`
- **Vercel** -- use the Angular framework preset

The canonical URL has been configured for `https://hrsonn.github.io/portfolio-son/`.

---

## Contributing

This is a personal portfolio project, but suggestions and improvements are always welcome.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-idea`)
3. Commit your changes (`git commit -m 'Add my idea'`)
4. Push to the branch (`git push origin feature/my-idea`)
5. Open a Pull Request

---

## License

[MIT](LICENSE) -- feel free to use this project as a reference or template for your own portfolio.
