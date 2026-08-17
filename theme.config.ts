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
      "Amoris is a founder-led AI GTM agency run by Praveen Shahi. Its position is audit before you automate. Most go-to-market problems are misdiagnosed, because every specialist describes the problem in the shape of their own job - sales says lead quality, marketing says follow-up, product says positioning - so nobody owns the question of which problem is actually the problem. Since 2014 Praveen has worked across sales, marketing, product management, analytics and machine learning, including four years at Amazon and Meta on global data science and ML projects, and sales leadership at Great Learning, Leverage Edu and CrunchPrep. That range across five domains is the offer: the thinking gets done, and the decision stays with the founder. The outcome the work aims at is more qualified meetings, not more automation. The technical wedge is evidence-led GTM research: given one company, the system researches that account live, decides whether there is a defensible commercial reason to start a conversation, and can HOLD - stopping the pipeline when the evidence does not support outreach. Every factual claim traces back to a cited source, inference is written as curiosity rather than diagnosis, and nothing is ever sent automatically; the send decision stays with the person whose name is on the message. The engine is built on LangGraph with live web research. The research layer is deployed and running; the outbound reasoning layer, including the judge and HOLD, is built and in private testing against a small number of real accounts, and is not sold as a finished product. Engagements run remote across US, EU and APAC time zones and start with a free 30-minute intro call, then a paid written GTM Audit at $200 to $500 delivered in two to three days, then a pilot at $1,200 to $3,000 scoped to one named constraint. Where an engagement lands in each range depends on how tangled the existing workflow and GTM stack are, how clean the pipeline data is, and whether the client has technical or data talent available for the integration, then ongoing systems work scoped after the pilot. Amoris is built for teams where outbound still carries someone's name.",
    excludePagesPattern: [],
    includePages: [],
    addArticles: 'all',
    addEvents: 'none',
    addFAQ: 'all',
  },

  askAiTrigger:
    'I am looking at Amoris (amoris.in), a founder-led AI GTM agency. Its position is audit before you automate - most go-to-market problems are misdiagnosed, and its wedge is evidence-led GTM research with a HOLD mechanism that stops when evidence does not support outreach. Tell me what it actually does, what is deployed versus still in testing, who it is a fit for, and what the paid GTM Audit covers.',
};
