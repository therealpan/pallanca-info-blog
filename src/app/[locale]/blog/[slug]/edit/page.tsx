import { setRequestLocale } from 'next-intl/server';
import { getPostBySlug } from '@/lib/blog';
import { notFound } from 'next/navigation';
import { auth } from '@/lib/auth/config';
import { redirect } from 'next/navigation';
import BlogPostEditor from '@/components/BlogPostEditor';

export default async function EditPage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug, locale } = await params;
  setRequestLocale(locale);

  const session = await auth();
  if (!session?.user) {
    redirect('/api/auth/signin');
  }

  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlogPostEditor post={post} locale={locale} />
      </div>
    </div>
  );
}
