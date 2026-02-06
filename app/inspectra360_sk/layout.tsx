import React from 'react';
import Script from 'next/script';

export const metadata = {
  title: 'Inspectra™ 360 Ultra - Inšpekčná kamera s otočnou špičkou 360°',
  description: 'Profesionálna inšpekčná kamera s otočnou špičkou 360° Flex-Lock, dvojitým objektívom a obrazovkou 5" IPS HD.',
};

export default function Inspectra360SkLayout({
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
        src="https://offers.italiadrop.com/forms/tmfp/"
        crossOrigin="anonymous"
        strategy="lazyOnload"
      />
      <Script id="google-ads-inspectra-sk" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17261661993');
        `}
      </Script>
      {children}
    </>
  );
}
