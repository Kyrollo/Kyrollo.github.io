import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#070A12',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Kerollos Mansour — Software AI Engineer & Agentic AI Engineer',
  description: 'Kerollos Mansour builds agentic AI systems: multi-agent workflows, hybrid RAG and fine-tuned LLMs, shipped with tests and CI.',
  icons: {
    icon: '/icon.svg',
  },
  keywords: [
    'Software AI Engineer',
    'Agentic AI Engineer',
    'AI Engineer',
    'ML Engineer',
    'AI Agents',
    'LangGraph',
    'Hybrid RAG',
    'FastAPI',
    'PyTorch',
    'Kerollos Mansour',
  ],
  authors: [{ name: 'Kerollos Mansour' }],
  openGraph: {
    title: 'Kerollos Mansour — Software AI Engineer & Agentic AI Engineer',
    description: 'Autonomous AI agents, hybrid & graph RAG, and high-throughput LLM architectures shipped to production.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
