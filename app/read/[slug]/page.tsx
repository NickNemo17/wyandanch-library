import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allItems, getItemBySlug, getAdjacentItems } from '@/lib/curriculum';
import { ArticleLayout } from '@/components/ArticleLayout';
import { mdxComponents } from '@/components/MDXComponents';
import { loadMDXContent } from '@/lib/mdx-map';

export function generateStaticParams() {
  return allItems.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = getItemBySlug(params.slug);
  if (!item) return {};
  const title = `${item.title} — Wyandanch Library`;
  const description = item.description;
  return {
    title,
    description,
    openGraph: {
      title: item.title,
      description,
      url: `https://wyandanchlibrary.com/read/${item.slug}`,
      siteName: 'Wyandanch Library',
      type: 'article',
      images: [{ url: '/og.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: item.title,
      description,
      images: ['/og.png'],
    },
  };
}

export default async function ReadPage({ params }: { params: { slug: string } }) {
  const item = getItemBySlug(params.slug);
  if (!item) return notFound();

  const { prev, next } = getAdjacentItems(params.slug);
  const Content = await loadMDXContent(params.slug);

  if (!Content) {
    return (
      <ArticleLayout item={item} prev={prev} next={next}>
        <p className="mdx-p" style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>
          Content coming soon. This reading is part of the Wyandanch Library curriculum.
        </p>
      </ArticleLayout>
    );
  }

  return (
    <ArticleLayout item={item} prev={prev} next={next}>
      <Content components={mdxComponents} />
    </ArticleLayout>
  );
}
