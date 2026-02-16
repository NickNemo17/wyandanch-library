import { notFound } from 'next/navigation';
import { allItems, getItemBySlug, getAdjacentItems } from '@/lib/curriculum';
import { ArticleLayout } from '@/components/ArticleLayout';
import { mdxComponents } from '@/components/MDXComponents';
import { loadMDXContent } from '@/lib/mdx-map';

export function generateStaticParams() {
  return allItems.map((item) => ({ slug: item.slug }));
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
