import type { ThemeConfig } from './types/theme-config.d.ts';

// language files from ./src/i18n
// The `with { type: 'json' }` import attribute is required so this file can also be
// imported from a plain ESM context (e.g. `ec.config.mjs`, which Node loads directly).
import enStrings from './src/i18n/en.json' with { type: 'json' };

export const themeConfig: ThemeConfig = {
  // `import.meta.env?.` is guarded because this file is also imported from `ec.config.mjs`,
  // which Node loads as plain ESM where `import.meta.env` is not defined (only Vite injects it).
  site: import.meta.env?.SITE_OVERRIDE || 'https://amoris.in',
  primaryColor: '#4361ff', // keep in sync with src/styles/tailwind.config.css
  themeColor: '#8b2cff',
  generateWebmanifest: true,
  name: 'Amoris — AI GTM Agency',
  shortName: 'Amoris',
  ogTitle: 'Amoris',
  darkMode: true,
  robots: import.meta.env?.ROBOTS || 'index, follow',

  // Structured data
  author: {
    type: 'Person',
    name: 'Praveen Shahi',
    url: 'https://amoris.in/founder',
    image: '/founder.png',
  },
  publisher: {
    type: 'Organization',
    name: 'Amoris',
    url: 'https://amoris.in',
    image: '/founder.png',
  },

  // I18n — English only. The machinery stays in place so components keep working,
  // but there is exactly one locale, so no /de, /fr, /es routes are generated.
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    languages: {
      en: 'English',
    },
    languageModules: {
      en: enStrings,
    },
    translatedStructuredData: {},
  },

  // md(x) code block rendering
  expressiveCodeThemes: {
    light: 'min-light',
    dark: 'min-dark',
  },

  // content/articles settings — the blog ships dormant and gets filled later.
  articles: {
    imageFallback: true,
    gridView: true,
    textOverImage: false,
    categories: true,
    tags: true,
    entriesPerPage: 9,
    tocMaxDepth: 3,
    defaults: {
      author: {
        name: 'Praveen Shahi',
        url: 'https://amoris.in/founder',
      },
    },
    social: {
      buttons: {
        email: true,
        facebook: false,
        hackernews: true,
        linkedin: true,
        pinterest: false,
        reddit: true,
        telegram: false,
        x: true,
        whatsapp: true,
      },
      buttonsSmallScreen: {
        email: true,
        facebook: false,
        hackernews: false,
        linkedin: true,
        pinterest: false,
        reddit: false,
        telegram: false,
        x: true,
        whatsapp: true,
      },
    },
  },

  // promotion settings — all off. This is an agency site, not a SaaS funnel.
  promotions: {
    newsletterSignup: false,
    footerBanner: false,
    navAd: false,
    topBanner: false,
    heroChip: true,
  },

  // Everything prerenders. No on-demand rendering means no server adapter,
  // which keeps the build a pure static bundle we can scp to the VM.
  onDemandRenderedCollections: [],

  // LLM and coding assistant settings
  llms: {
    autoGeneration: true,
    intro:
      'Amoris is an AI GTM agency. We design and deploy agentic automation for B2B go-to-market teams: lead enrichment, qualification, outbound and CRM handoff as one orchestrated system. The stack is LangGraph for multi-step reasoning, Clay for waterfall enrichment, n8n for webhook orchestration and PostgreSQL for state. Systems are self-hosted on your own infrastructure and fully owned by you, with no platform lock-in. Two engagement models are offered, Done With You and Done For You, and both ship in six weeks. Founded by Praveen Shahi, an AI GTM Engineer who spent ten years running revenue organisations at Amazon, Meta, Great Learning and Leverage Edu before building production AI systems.',
    excludePagesPattern: [],
    includePages: [],
    addArticles: 'all',
    addEvents: 'none',
    addFAQ: 'all',
  },

  askAiTrigger:
    'I am looking at Amoris (amoris.in), an AI GTM agency that builds agentic automation for B2B revenue teams using LangGraph, Clay and n8n. Tell me what they build, who they are a fit for, and how their two engagement models (Done With You and Done For You) differ.',
};
