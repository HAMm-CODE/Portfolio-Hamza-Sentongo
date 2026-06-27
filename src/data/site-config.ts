import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
  website: 'https://hamm-code.github.io',
  avatar: {
    src: '/avatar-placeholder.svg',
    alt: 'Hamza Sentongo',
  },
  title: 'Hamza Sentongo',
  subtitle: 'Associate Data Engineer',
  description:
    'Portfolio of Hamza Sentongo, an early-career data engineer focused on Python, SQL, PySpark, Databricks, Delta Lake, ETL/ELT pipelines, and cloud data workflows.',
  image: {
    src: '/portfolio-preview.svg',
    alt: 'Hamza Sentongo portfolio preview',
  },
  headerNavLinks: [
    { text: 'Home', href: '/' },
    { text: 'Projects', href: '/projects' },
    { text: 'About', href: '/about' },
    { text: 'Contact', href: '/contact' },
  ],
  footerNavLinks: [
    { text: 'Projects', href: '/projects' },
    { text: 'About', href: '/about' },
    { text: 'Resume', href: '/resume.pdf' },
    { text: 'GitHub', href: 'https://github.com/HAMm-CODE' },
    { text: 'LinkedIn', href: 'https://www.linkedin.com/in/hamza-sentongo-55483a243' },
  ],
  socialLinks: [
    { text: 'GitHub', href: 'https://github.com/HAMm-CODE' },
    { text: 'LinkedIn', href: 'https://www.linkedin.com/in/hamza-sentongo-55483a243' },
    { text: 'Email', href: 'mailto:hamza.sentongo@tuni.fi' },
  ],
  hero: {
    title: 'Data Engineer building reliable pipelines from raw data to useful datasets.',
    text: `I'm **Hamza Sentongo**, an early-career **Data Engineer** based in Tampere, Finland. I work with **Python, SQL, PySpark, Databricks, Delta Lake, and Azure storage** to build ETL/ELT workflows, benchmark data formats, and explore batch and streaming data systems.

This portfolio highlights practical data engineering projects, my technical stack, and my learning path toward production-ready cloud data platforms.`,
    image: {
      src: '/hero-data-engineering.svg',
      alt: 'Minimal data engineering illustration',
    },
    actions: [
      { text: 'View Projects', href: '/projects' },
      { text: 'Download Resume', href: '/resume.pdf' },
      { text: 'Contact Me', href: '/contact' },
    ],
  },
  subscribe: {
    enabled: false,
  },
  postsPerPage: 6,
  projectsPerPage: 8,
};

export default siteConfig;
