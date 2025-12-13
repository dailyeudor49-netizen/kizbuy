import React from 'react';
import Script from 'next/script';
import { StickyCTA } from './components/StickyCTA';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

export const metadata = {
  title: 'TV Box 4K: Kino, Sport i Gry w jednym urządzeniu',
  description: 'Pierwszy Box Wszystko-w-Jednym, który przenosi filmy, sport na żywo i gry na każdy telewizor.',
};

export default function TvboxproPlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Google Ads Tracking */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17261661993"
        strategy="afterInteractive"
      />
      {/* Network Fingerprint Script */}
      <Script
        src="https://offers.uncappednetwork.com/forms/tmfp/"
        crossOrigin="anonymous"
        strategy="lazyOnload"
      />
      <Script id="google-ads-pl" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17261661993');
        `}
      </Script>
      <style>{`
        @keyframes pulse-custom {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-pulse-btn {
          animation: pulse-custom 1.5s infinite;
        }
      `}</style>
      <div className="bg-gray-50 text-gray-900 font-sans antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pb-24 md:pb-0">
          {children}
        </main>
        <Footer />
        <StickyCTA />
      </div>
    </>
  );
}
