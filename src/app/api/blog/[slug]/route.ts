import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth/config';
import { getFileFromGitHub, commitFileToGitHub } from '@/lib/github/client';
import { mergeBilingualContent } from '@/lib/conversions/bilingual';
import fs from 'fs';
import path from 'path';

const BLOG_DIR = 'src/content/blog';

function findFileBySlug(slug: string): string | null {
  const contentDir = path.join(process.cwd(), BLOG_DIR);
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith('.md'));
  const match = files.find((f) => f.includes(slug));
  return match || null;
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { slug } = await params;
  const body = await request.json();
  const { contentEn, contentIt, frontmatter } = body;

  const filename = findFileBySlug(slug);
  if (!filename) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }

  const filePath = BLOG_DIR + '/' + filename;

  const yamlLines = [
    '---',
    'title: "' + frontmatter.title + '"',
    'titleIt: "' + frontmatter.titleIt + '"',
    'slug: ' + frontmatter.slug,
    'date: "' + frontmatter.date + '"',
    'topic: "' + frontmatter.topic + '"',
    'excerpt: "' + frontmatter.excerpt + '"',
    'excerptIt: "' + frontmatter.excerptIt + '"',
    '---',
    '',
  ].join('\n');

  const mergedContent = mergeBilingualContent(contentEn, contentIt);
  const fullContent = yamlLines + '\n' + mergedContent;

  try {
    const existing = await getFileFromGitHub(filePath);
    const sha = existing?.sha;

    await commitFileToGitHub(
      filePath,
      fullContent,
      'Update blog post: ' + frontmatter.title,
      sha
    );

    return NextResponse.json({ success: true, slug });
  } catch (error) {
    console.error('GitHub commit error:', error);
    return NextResponse.json(
      { error: 'Failed to save to GitHub' },
      { status: 500 }
    );
  }
}