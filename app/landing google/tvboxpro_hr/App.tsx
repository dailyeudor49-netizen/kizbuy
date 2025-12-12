import React from 'react';
import Page from './app/page';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';

export default function App() {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans antialiased flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pb-24 md:pb-0">
        <Page />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}