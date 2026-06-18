import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ChessGuide Surface Dashboard',
  description:
    'Governed dashboard / display / review surface (static fixture skeleton).',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
