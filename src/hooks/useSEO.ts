import { useEffect } from 'react';

interface SEOConfig {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object | object[];
}

const SITE_NAME = 'NeuralNexus Solutions';
const BASE_URL = 'https://neuralnexussolutions.com';
const DEFAULT_OG_IMAGE = `${BASE_URL}/new-logo.png`;

/**
 * Dynamic SEO head management hook for SPA views.
 * Updates document title, meta description, Open Graph, Twitter Card,
 * canonical URL, and injects/removes JSON-LD structured data per view.
 */
export function useSEO({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = 'website',
  structuredData,
}: SEOConfig) {
  useEffect(() => {
    // — Document title —
    document.title = title.includes(SITE_NAME) ? title : `${title} — ${SITE_NAME}`;

    // — Meta description —
    updateMeta('description', description);

    // — Canonical —
    const canonicalUrl = canonical || BASE_URL + '/';
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (link) {
      link.href = canonicalUrl;
    } else {
      link = document.createElement('link');
      link.rel = 'canonical';
      link.href = canonicalUrl;
      document.head.appendChild(link);
    }

    // — Open Graph —
    updateMetaProperty('og:title', ogTitle || title);
    updateMetaProperty('og:description', ogDescription || description);
    updateMetaProperty('og:url', canonicalUrl);
    updateMetaProperty('og:type', ogType);
    updateMetaProperty('og:image', ogImage || DEFAULT_OG_IMAGE);

    // — Twitter / X Card —
    updateMeta('twitter:card', 'summary_large_image', 'name');
    updateMeta('twitter:title', ogTitle || title, 'name');
    updateMeta('twitter:description', ogDescription || description, 'name');
    updateMeta('twitter:image', ogImage || DEFAULT_OG_IMAGE, 'name');

    // — JSON-LD structured data —
    let scriptEl: HTMLScriptElement | null = null;
    if (structuredData) {
      scriptEl = document.createElement('script');
      scriptEl.type = 'application/ld+json';
      scriptEl.setAttribute('data-seo-hook', 'true');
      scriptEl.textContent = JSON.stringify(
        Array.isArray(structuredData)
          ? { '@context': 'https://schema.org', '@graph': structuredData }
          : { '@context': 'https://schema.org', ...structuredData }
      );
      document.head.appendChild(scriptEl);
    }

    return () => {
      // Cleanup dynamic JSON-LD on view change
      if (scriptEl && scriptEl.parentNode) {
        scriptEl.parentNode.removeChild(scriptEl);
      }
    };
  }, [title, description, canonical, ogTitle, ogDescription, ogImage, ogType, structuredData]);
}

function updateMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (el) {
    el.content = content;
  } else {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    el.content = content;
    document.head.appendChild(el);
  }
}

function updateMetaProperty(property: string, content: string) {
  updateMeta(property, content, 'property');
}

/**
 * Generates a BreadcrumbList JSON-LD schema object.
 */
export function buildBreadcrumbSchema(items: { name: string; url?: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://neuralnexussolutions.com/' },
      ...items.map((item, idx) => ({
        '@type': 'ListItem',
        position: idx + 2,
        name: item.name,
        ...(item.url ? { item: item.url } : {}),
      })),
    ],
  };
}

/**
 * Generates a Service JSON-LD schema object.
 */
export function buildServiceSchema(service: {
  title: string;
  slug: string;
  shortDesc: string;
  pillarName: string;
}) {
  return {
    '@type': 'Service',
    serviceType: service.title,
    provider: {
      '@type': 'Organization',
      name: 'NeuralNexus Solutions',
      url: 'https://neuralnexussolutions.com',
    },
    name: service.title,
    description: service.shortDesc,
    url: `https://neuralnexussolutions.com/service/${service.slug}`,
    category: service.pillarName,
    areaServed: {
      '@type': 'Place',
      name: 'Global',
    },
  };
}

/**
 * Generates an Article JSON-LD schema object.
 */
export function buildArticleSchema(post: {
  title: string;
  slug: string;
  summary: string;
  author: string;
  date: string;
  category: string;
}) {
  return {
    '@type': 'Article',
    headline: post.title,
    description: post.summary,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'NeuralNexus Solutions',
      logo: {
        '@type': 'ImageObject',
        url: 'https://neuralnexussolutions.com/new-logo.png',
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://neuralnexussolutions.com/blog/${post.slug}`,
    },
    articleSection: post.category,
    url: `https://neuralnexussolutions.com/blog/${post.slug}`,
  };
}
