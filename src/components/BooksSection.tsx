"use client";

import { useLocale } from "next-intl";
import Image from "next/image";
import { ExternalLink, BookOpen } from "lucide-react";

const books = [
  {
    id: "destinazioni-intelligenti",
    image: "/images/books/destinazioni_intelligenti.webp",
    titleEn: "Smart Destinations",
    titleIt: "Destinazioni intelligenti",
    subtitleEn: "How innovation transforms places, experiences and communities",
    subtitleIt: "Come l'innovazione trasforma luoghi, esperienze e comunità",
    descEn:
      "A practical exploration of how digital innovation, AI and data-driven strategies are reshaping tourism destinations and local communities, creating richer experiences for visitors and lasting value for residents.",
    descIt:
      "Un'esplorazione pratica di come l'innovazione digitale, l'AI e le strategie data-driven stiano ridisegnando le destinazioni turistiche e le comunità locali, creando esperienze più ricche per i visitatori e valore duraturo per i residenti.",
    authorEn: "Angelo Pallanca & Valeria Sinnati",
    authorIt: "Angelo Pallanca & Valeria Sinnati",
    amazon:
      "https://www.amazon.com/Destinazioni-intelligenti-linnovazione-trasforma-esperienze-ebook/dp/B0F4RPCG4D/",
    badge: "Kindle",
  },
  {
    id: "homo-sapiens-premium",
    image: "/images/books/homo_sapiens_premium.jpeg",
    titleEn: "Homo Sapiens Premium",
    titleIt: "Homo Sapiens Premium",
    subtitleEn: "A semi-serious survival manual in the age of artificial empathy",
    subtitleIt: "Manuale semiserio di sopravvivenza umana nell'era dell'empatia artificiale",
    descEn:
      "A sharp and irreverent guide to navigating the age of artificial intelligence without losing what makes us human. Between irony and insight, a provocative reflection on our identity, our relationships and our future alongside machines.",
    descIt:
      "Una guida tagliente e irriverente per navigare l'era dell'intelligenza artificiale senza perdere ciò che ci rende umani. Tra ironia e lucidità, una riflessione provocatoria sulla nostra identità, le nostre relazioni e il nostro futuro accanto alle macchine.",
    authorEn: "Angelo Pallanca",
    authorIt: "Angelo Pallanca",
    amazon: "https://www.amazon.it/dp/B0GHK6MMFL",
    badge: "Kindle",
  },
];

export default function BooksSection() {
  const locale = useLocale();
  const isIt = locale === "it";
  const heading = isIt ? "I miei libri" : "My books";
  const ctaLabel = isIt ? "Acquista su Amazon" : "Buy on Amazon";

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex items-center gap-3 mb-10">
        <BookOpen size={22} className="text-[var(--color-accent)]" />
        <h2 className="text-2xl font-bold text-white">{heading}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {books.map((book) => (
          <div
            key={book.id}
            className="glass-card p-6 flex flex-col sm:flex-row gap-6"
          >
            {/* Cover */}
            <div className="relative shrink-0 w-full sm:w-36 h-52 sm:h-auto rounded-lg overflow-hidden shadow-lg">
              <Image
                src={book.image}
                alt={isIt ? book.titleIt : book.titleEn}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 144px"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-3 flex-1">
              <span className="bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-2.5 py-1 rounded-full font-medium text-xs self-start">
                {book.badge}
              </span>

              <div>
                <h3 className="text-lg font-bold text-white leading-snug">
                  {isIt ? book.titleIt : book.titleEn}
                </h3>
                <p className="text-sm text-[var(--color-accent)] mt-0.5 font-medium">
                  {isIt ? book.subtitleIt : book.subtitleEn}
                </p>
              </div>

              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed flex-1">
                {isIt ? book.descIt : book.descEn}
              </p>

              <p className="text-xs text-[var(--color-text-muted)]/60">
                {isIt ? book.authorIt : book.authorEn}
              </p>

              <a
                href={book.amazon}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-1 self-start glass-card !rounded-full px-4 py-2 text-sm font-medium text-white hover:bg-white hover:text-[var(--color-bg)] transition-[background,color,transform] duration-200"
              >
                {ctaLabel}
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
