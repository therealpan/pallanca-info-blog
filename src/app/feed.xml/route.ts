import { getAllPosts } from '@/lib/blog';
import { markdownToHtml } from '@/lib/markdown';

const BASE_URL = 'https://pallanca.info';

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function cdata(value: string): string {
  return `<![CDATA[${value.replace(/]]>/g, ']]]]><![CDATA[>')}]]>`;
}

function absoluteUrls(html: string): string {
  return html.replace(/(src|href)="\/(?!\/)/g, `$1="${BASE_URL}/`);
}

/**
 * English RSS feed of the blog, with the full post body in content:encoded,
 * so readers and importers (Substack) get the whole article.
 */
export async function GET() {
  const posts = getAllPosts();

  const items = await Promise.all(
    posts.map(async (post) => {
      const url = `${BASE_URL}/en/blog/${post.slug}`;
      const html = absoluteUrls(await markdownToHtml(post.contentEn));
      const image = post.image || post.cardImage;
      return [
        '    <item>',
        `      <title>${escapeXml(post.title)}</title>`,
        `      <link>${url}</link>`,
        `      <guid isPermaLink="true">${url}</guid>`,
        `      <pubDate>${new Date(post.date).toUTCString()}</pubDate>`,
        `      <category>${escapeXml(post.topic)}</category>`,
        `      <description>${escapeXml(post.excerpt)}</description>`,
        image
          ? `      <enclosure url="${escapeXml(image.startsWith('http') ? image : BASE_URL + image)}" type="image/${image.endsWith('.png') ? 'png' : image.endsWith('.jpg') || image.endsWith('.jpeg') ? 'jpeg' : 'webp'}" length="0" />`
          : '',
        `      <content:encoded>${cdata(html)}</content:encoded>`,
        '    </item>',
      ]
        .filter(Boolean)
        .join('\n');
    }),
  );

  const lastBuild = posts[0] ? new Date(posts[0].date).toUTCString() : new Date().toUTCString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Angelo Pallanca</title>
    <link>${BASE_URL}/en/blog</link>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <description>AI strategy that reaches production.</description>
    <language>en</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
${items.join('\n')}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
