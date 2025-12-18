import React from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TitanSaw Pro - Offerta Esclusiva",
  description: "Motosega a batteria professionale 12 pollici. Pagamento alla consegna.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    animation: {
                      'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                    }
                  }
                }
              }
            `,
          }}
        />
        <style>{`
          body {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          html, body {
            overflow-x: hidden;
            scroll-behavior: smooth;
          }
        `}</style>
      </head>
      <body className="font-sans antialiased text-slate-900 bg-white">
        {children}
      </body>
    </html>
  );
}