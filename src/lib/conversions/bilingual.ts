const SEPARATOR = '---ITALIAN---';

export function splitBilingualContent(content: string): { en: string; it?: string } {
  if (!content.includes(SEPARATOR)) {
    return { en: content.trim() };
  }
  const parts = content.split(SEPARATOR);
  return {
    en: parts[0].trim(),
    it: parts[1]?.trim(),
  };
}

export function mergeBilingualContent(en: string, it?: string): string {
  if (!it) return en;
  return `${en.trim()}\n\n---ITALIAN---\n\n${it.trim()}\n`;
}
