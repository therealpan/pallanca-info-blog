import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'src/content/blog');

const ITALIAN_SEPARATOR = '---ITALIAN---';

export interface BlogPost {
  slug: string;
  title: string;
  titleIt?: string;
  date: string;
  excerpt: string;
  excerptIt?: string;
  topic: string;
  readTime: number;
  image?: string;
  content: string;
  contentEn: string;
  contentIt?: string;
}

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith('.md'));

  const posts = files
    .map((file) => {
      const raw = fs.readFileSync(path.join(contentDir, file), 'utf-8');
      const { data, content } = matter(raw);

      let contentEn = content;
      let contentIt: string | undefined;

      if (content.includes(ITALIAN_SEPARATOR)) {
        const parts = content.split(ITALIAN_SEPARATOR);
        contentEn = parts[0].trim();
        contentIt = parts[1].trim();
      }

      const wordCount = contentEn.split(/\s+/).length;
      const readTime = Math.max(1, Math.ceil(wordCount / 200));

      return {
        slug: data.slug || file.replace('.md', ''),
        title: data.title || 'Untitled',
        titleIt: data.titleIt,
        date: data.date || '2024-01-01',
        excerpt: data.excerpt || contentEn.slice(0, 160) + '...',
        excerptIt: data.excerptIt,
        topic: data.topic || 'AI',
        readTime,
        image: data.image,
        content: contentEn,
        contentEn,
        contentIt,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllPosts();
  return posts.find((p) => p.slug === slug);
}
