import type { APIContext } from 'astro';
import { themeConfig } from '~/theme.config';

export async function GET(context: APIContext) {
  const siteUrl = (context.site ?? new URL(themeConfig.site)).toString().replace(/\/$/, '');

  // `User-agent: *` already permits these, but several answer-engine crawlers only
  // honour a block that names their user agent exactly, so they are listed too.
  const aiCrawlers = ['GPTBot', 'ChatGPT-User', 'OAI-SearchBot', 'ClaudeBot', 'Claude-User', 'anthropic-ai', 'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'CCBot', 'Applebot-Extended', 'meta-externalagent', 'Bytespider'];

  const body = [
    'User-agent: *',
    'Content-signal: search=yes, ai-train=yes',
    'Allow: /',
    '',
    ...aiCrawlers.flatMap((agent) => [`User-agent: ${agent}`, 'Allow: /', '']),
    `Sitemap: ${siteUrl}/sitemap-index.xml`,
    '',
  ].join('\n');

  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
