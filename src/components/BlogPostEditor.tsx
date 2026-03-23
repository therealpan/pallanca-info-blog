"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import type { BlogPost } from "@/lib/blog";

const MediumEditor = dynamic(() => import("./MediumEditorWrapper"), {
  ssr: false,
  loading: () => <div className="h-96 bg-white/5 rounded-lg animate-pulse" />,
});

interface Props {
  post: BlogPost;
  locale: string;
}

export default function BlogPostEditor({ post, locale }: Props) {
  const [activeTab, setActiveTab] = useState<"en" | "it">(locale === "it" ? "it" : "en");
  const [contentEn, setContentEn] = useState(post.contentEn || "");
  const [contentIt, setContentIt] = useState(post.contentIt || "");
  const [frontmatter, setFrontmatter] = useState({
    title: post.title,
    titleIt: post.titleIt || "",
    slug: post.slug,
    date: post.date,
    topic: post.topic,
    excerpt: post.excerpt,
    excerptIt: post.excerptIt || "",
  });
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<"idle" | "saved" | "error">("idle");

  const handleSave = useCallback(async () => {
    setSaving(true);
    setStatus("idle");
    try {
      const res = await fetch(`/api/blog/${post.slug}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contentEn, contentIt, frontmatter }),
      });
      if (!res.ok) throw new Error("Save failed");
      setStatus("saved");
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
    } finally {
      setSaving(false);
    }
  }, [contentEn, contentIt, frontmatter, post.slug]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white font-[family-name:var(--font-inter)]">
          Edit Post
        </h1>
        <div className="flex items-center gap-3">
          {status === "saved" && (
            <span className="text-green-400 text-sm">Saved and committed!</span>
          )}
          {status === "error" && (
            <span className="text-red-400 text-sm">Error saving</span>
          )}
          <a
            href={`/${locale}/blog/${post.slug}`}
            className="px-4 py-2 text-sm text-[var(--color-text-muted)] hover:text-white transition-colors"
          >
            Cancel
          </a>
          <button
            onClick={handleSave}
            disabled={saving}
            className="px-6 py-2 bg-[var(--color-accent)] text-white rounded-lg text-sm font-medium hover:bg-[var(--color-accent-hover)] transition-colors disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save & Commit"}
          </button>
        </div>
      </div>

      <div className="glass-card p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-[var(--color-text-muted)] mb-1">Title (EN)</label>
            <input
              value={frontmatter.title}
              onChange={(e) => setFrontmatter((f) => ({ ...f, title: e.target.value }))}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm"
            />
          </div>
          <div>
            <label className="block text-xs text-[var(--color-text-muted)] mb-1">Titolo (IT)</label>
            <input
              value={frontmatter.titleIt}
              onChange={(e) => setFrontmatter((f) => ({ ...f, titleIt: e.target.value }))}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-xs text-[var(--color-text-muted)] mb-1">Topic</label>
            <input
              value={frontmatter.topic}
              onChange={(e) => setFrontmatter((f) => ({ ...f, topic: e.target.value }))}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm"
            />
          </div>
          <div>
            <label className="block text-xs text-[var(--color-text-muted)] mb-1">Date</label>
            <input
              type="date"
              value={frontmatter.date}
              onChange={(e) => setFrontmatter((f) => ({ ...f, date: e.target.value }))}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm"
            />
          </div>
          <div>
            <label className="block text-xs text-[var(--color-text-muted)] mb-1">Slug</label>
            <input
              value={frontmatter.slug}
              disabled
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white/50 text-sm"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-[var(--color-text-muted)] mb-1">Excerpt (EN)</label>
            <textarea
              value={frontmatter.excerpt}
              onChange={(e) => setFrontmatter((f) => ({ ...f, excerpt: e.target.value }))}
              rows={2}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm"
            />
          </div>
          <div>
            <label className="block text-xs text-[var(--color-text-muted)] mb-1">Estratto (IT)</label>
            <textarea
              value={frontmatter.excerptIt}
              onChange={(e) => setFrontmatter((f) => ({ ...f, excerptIt: e.target.value }))}
              rows={2}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-1 bg-white/5 rounded-lg p-1 w-fit">
        <button
          onClick={() => setActiveTab("en")}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeTab === "en"
              ? "bg-[var(--color-accent)] text-white"
              : "text-[var(--color-text-muted)] hover:text-white"
          }`}
        >
          English
        </button>
        <button
          onClick={() => setActiveTab("it")}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeTab === "it"
              ? "bg-[var(--color-accent)] text-white"
              : "text-[var(--color-text-muted)] hover:text-white"
          }`}
        >
          Italiano
        </button>
      </div>

      <div className="glass-card p-6 min-h-[500px]">
        {activeTab === "en" ? (
          <MediumEditor key="en" initialContent={contentEn} onChange={setContentEn} />
        ) : (
          <MediumEditor key="it" initialContent={contentIt} onChange={setContentIt} />
        )}
      </div>
    </div>
  );
}
