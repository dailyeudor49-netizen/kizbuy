import React from 'react';
import Script from 'next/script';

export const metadata = {
  title: 'Inspectra™ 360 Ultra - Endoscopio con punta 360° e blocco',
  description: 'Endoscopio professionale con punta 360° Flex-Lock, doppia lente e schermo 5" IPS HD.',
};

export default function Inspectra360Layout({
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
      <Script id="google-ads-inspectra-it" strategy="afterInteractive">
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
