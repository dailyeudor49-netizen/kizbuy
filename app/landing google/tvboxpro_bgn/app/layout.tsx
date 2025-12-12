import React from 'react';
import { StickyCTA } from '../components/StickyCTA';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export const metadata = {
  title: 'TV Box 4K: Кино, Спорт и Игри в едно устройство',
  description: 'Първият "Всичко-в-едно" Box, който пренася филми, спорт на живо и игри на всеки телевизор.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bg" className="scroll-smooth">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        {/* Google Ads Tracking */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17261661993"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17261661993');
        `}} />
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes pulse-custom {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          .animate-pulse-btn {
            animation: pulse-custom 1.5s infinite;
          }
        `}} />
      </head>
      <body className="bg-gray-50 text-gray-900 font-sans antialiased flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow pb-24 md:pb-0">
          {children}
        </main>

        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}