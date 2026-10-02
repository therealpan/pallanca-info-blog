import { buildVCard } from '@/lib/card';

/**
 * Serves the vCard inline so iOS Safari opens the "Add contact" sheet
 * directly. An attachment disposition would send it to the download manager.
 */
export function GET() {
  return new Response(buildVCard(), {
    headers: {
      'Content-Type': 'text/vcard; charset=utf-8',
      'Content-Disposition': 'inline; filename="angelo-pallanca.vcf"',
      'Cache-Control': 'public, max-age=3600',
      'X-Robots-Tag': 'noindex',
    },
  });
}
