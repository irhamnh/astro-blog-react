import type { BlogPost, Project } from "../types";

export const blogPosts: BlogPost[] = [
  {
    id: "post-1",
    title: "Migrating from React to Astro",
    excerpt:
      "A practical migration story for moving a React-based homepage into Astro while keeping React islands for interactive UI.",
    date: "2026-04-10",
    tags: ["Astro", "React", "Migration"],
    readTime: "5 min read",
    slug: "migrating-from-react-to-astro",
    content:
      "This post walks through the key steps and decisions involved in migrating a React app to Astro.",
  },
  {
    id: "post-2",
    title: "Designing performant landing pages",
    excerpt:
      "How to structure your homepage for speed, clarity, and maintainability using Astro and minimal JavaScript.",
    date: "2026-03-28",
    tags: ["Performance", "Design", "Astro"],
    readTime: "4 min read",
    slug: "designing-performant-landing-pages",
    content:
      "A guide to building landing pages that feel fast and look polished while keeping the codebase simple.",
  },
  {
    id: "post-3",
    title: "Atomic components with React islands",
    excerpt:
      "When to keep React for interactivity and when to let Astro own the rest of the page.",
    date: "2026-03-15",
    tags: ["Islands", "React", "Astro"],
    readTime: "6 min read",
    slug: "atomic-components-with-react-islands",
    content:
      "Exploring the hybrid approach of Astro pages with isolated React components for dynamic sections.",
  },
];

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Launchpad UI Kit",
    description:
      "A design system for developer-facing interfaces built with accessibility and scale in mind.",
    tags: ["Design System", "UI", "React"],
    link: "https://example.com/launchpad-ui",
    slug: "launchpad-ui-kit",
    date: "2026-02-20",
    fullDescription:
      "Launchpad UI Kit is a modular component library designed for modern web apps, built with theming and responsive layouts.",
  },
  {
    id: "project-2",
    title: "DocsFlow",
    description:
      "A documentation website starter that combines Astro content with dynamic React widgets.",
    tags: ["Docs", "Astro", "Content"],
    link: "https://example.com/docsflow",
    slug: "docsflow",
    date: "2026-01-14",
    fullDescription:
      "DocsFlow helps teams ship better docs faster by blending static content with interactive examples and search.",
  },
  {
    id: "project-3",
    title: "MetricPulse",
    description:
      "A lightweight analytics dashboard built for product teams to monitor user behavior at a glance.",
    tags: ["Analytics", "Dashboard", "SaaS"],
    link: "https://example.com/metricpulse",
    slug: "metricpulse",
    date: "2025-12-05",
    fullDescription:
      "MetricPulse is a clean dashboard experience for tracking core metrics without the bloat of enterprise analytics tools.",
  },
];
