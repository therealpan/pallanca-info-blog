import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Angelo Pallanca | Digital Transformation & AI Governance',
  description: 'Innovation and AI consultant with 30 years of experience.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
