import React from 'react';
import Script from 'next/script';

export const metadata = {
  title: 'Inspectra™ 360 Ultra - Inspekcin\u0117 kamera su 360° sukama galiuku',
  description: 'Profesionali inspekcin\u0117 kamera su 360° Flex-Lock galiuku, dvigubu objektyvu ir 5" IPS HD ekranu.',
};

export default function Inspectra360LtLayout({
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
      <Script id="google-ads-inspectra-lt" strategy="afterInteractive">
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
