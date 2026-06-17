import { getPageImage, source } from '@/lib/source';
import {
  DocsBody,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/components/mdx';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { DocsPageActions } from '@/components/docs-page-actions';
import { gitConfig } from '@/lib/shared';

export default async function Page(props: PageProps<'/docs/[[...slug]]'>) {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) notFound();

  const MDX = page.data.body;
  const contentPath = `content/docs/${page.slugs.length > 0 ? page.slugs.join('/') : 'index'}.md`;
  const githubBase = `https://github.com/${gitConfig.user}/${gitConfig.repo}`;
  const editUrl = `${githubBase}/edit/${gitConfig.branch}/${contentPath}`;
  const feedbackUrl = `${githubBase}/issues/new?${new URLSearchParams({
    title: `Feedback: ${page.data.title}`,
    body: [
      `Page: ${page.url}`,
      `Source: ${contentPath}`,
      '',
      'Feedback:',
      '',
    ].join('\n'),
  }).toString()}`;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <div className="docs-title-row">
        <DocsTitle className="mb-0">{page.data.title}</DocsTitle>
        <DocsPageActions
          editUrl={editUrl}
          feedbackUrl={feedbackUrl}
          title={page.data.title}
          path={page.url}
        />
      </div>

      <DocsBody>
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(
  props: PageProps<'/docs/[[...slug]]'>
): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: getPageImage(page).url,
    },
  };
}
