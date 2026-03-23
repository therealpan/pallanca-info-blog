"use client";

import { useEffect, useState } from "react";
import { Pencil } from "lucide-react";

interface Props {
  slug: string;
  locale: string;
}

export default function EditButton({ slug, locale }: Props) {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    fetch("/api/auth/session", { credentials: "include" })
      .then((r) => {
        if (!r.ok) throw new Error(`Session fetch failed: ${r.status}`);
        return r.json();
      })
      .then((data) => {
        if (data?.user) setIsAuth(true);
      })
      .catch((err) => {
        console.log("[EditButton] session check:", err);
      });
  }, []);

  if (!isAuth) return null;

  return (
    <a
      href={`/${locale}/blog/${slug}/edit`}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[var(--color-accent)] text-white px-4 py-3 rounded-full shadow-lg hover:bg-[var(--color-accent-hover)] transition-colors text-sm font-medium"
    >
      <Pencil size={16} />
      Edit
    </a>
  );
}
