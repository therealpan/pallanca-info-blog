/**
 * Single source of truth for the digital business card.
 *
 * Used by the /card page and by the /angelo-pallanca.vcf route.
 * The offline QR code carries a copy of this same vCard, so any change
 * here means the offline QR has to be regenerated. The online QR points
 * to https://pallanca.info/card and never needs to change.
 */
export const CARD = {
  firstName: 'Angelo',
  lastName: 'Pallanca',
  fullName: 'Angelo Pallanca',
  org: 'PiirZ Digital Limited',
  title: 'Digital transformation consultant and PiirZ Digital Limited CEO',
  phoneE164: '+393475125616',
  phoneDisplay: '+39 347 512 5616',
  url: 'https://linktr.ee/panbiz',
  urlDisplay: 'linktr.ee/panbiz',
  vcfPath: '/angelo-pallanca.vcf',
} as const;

/** vCard 3.0, CRLF line endings: the format iOS and Android contacts import cleanly. */
export function buildVCard(): string {
  return (
    [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `N:${CARD.lastName};${CARD.firstName};;;`,
      `FN:${CARD.fullName}`,
      `ORG:${CARD.org}`,
      `TITLE:${CARD.title}`,
      `TEL;TYPE=CELL:${CARD.phoneE164}`,
      `URL:${CARD.url}`,
      'END:VCARD',
    ].join('\r\n') + '\r\n'
  );
}
