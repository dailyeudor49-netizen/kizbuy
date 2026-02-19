'use client';

import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Comparison from './components/Comparison';
import Bundle from './components/Bundle';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import OrderForm from './components/OrderForm';
import StickyCTA from './components/StickyCTA';
import ProductDetails from './components/ProductDetails';
import StepsToOrder from './components/StepsToOrder';
import { PRODUCT_NAME } from './lib/constants';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export default function RobotCleanProXPage() {
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  const scrollToForm = () => {
    const element = document.getElementById('order-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Google Ads Pageview Tracking
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-17930736121';
      document.head.appendChild(script);

      script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        window.gtag = function() { window.dataLayer!.push(arguments); };
        window.gtag('js', new Date());
        window.gtag('config', 'AW-17930736121');
      };
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Network Click Pixel */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="https://offers.supertrendaffiliateprogram.com/forms/api/ck/?o=595&uid=01981ccf-4474-7c39-97eb-9407221996c2&lp=595" style={{width:'1px',height:'1px',display:'none'}} alt="" />
      <div className="min-h-screen bg-gray-50 text-gray-900 pb-24 overflow-x-hidden">
        {/* Header / Trust Bar */}
        <header className="bg-white shadow-sm py-3 px-4 relative z-40">
          <div className="max-w-4xl mx-auto flex justify-between items-center gap-4">
            <span className="font-black text-lg md:text-xl tracking-tighter text-gray-900 leading-tight">
              {PRODUCT_NAME.toUpperCase()}
            </span>
            <button
              onClick={scrollToForm}
              className="bg-green-600 text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-md hover:bg-green-700 transition shrink-0 active:scale-95"
            >
              ZAMÓW
            </button>
          </div>
        </header>

        <main>
          <Hero onScrollToForm={scrollToForm} />

          {/* Trust/Urgency Bar */}
          <div className="bg-gray-900 text-white text-center py-3 text-sm font-medium tracking-wide">
            🚚 Darmowa Wysyłka w całej Polsce tylko dziś
          </div>

          <Features />

          <ProductDetails />

          {/* Mid-page CTA/Urgency */}
          <div className="bg-red-600 text-white text-center py-8 px-4">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-black mb-2 uppercase">Nie przegap oferty -50%</h3>
              <p className="font-medium mb-6 text-red-100">Ponad 1500 zamówień dziś. Oferta wkrótce się kończy.</p>
              <button
                onClick={scrollToForm}
                className="w-full md:w-auto bg-green-600 text-white text-xl font-bold px-8 py-3 rounded-full shadow-lg border-2 border-white hover:bg-green-700 transition transform hover:scale-105"
              >
                CHCĘ MOJEGO ROBOTA TERAZ
              </button>
            </div>
          </div>

          <Comparison />
          <Bundle />
          <Reviews />
          <StepsToOrder />
          <OrderForm />
          <FAQ />
        </main>

      </div>

      {/* Sticky CTA sits outside the main div to ensure it is always on top */}
      <StickyCTA onScrollToForm={scrollToForm} isVisible={showStickyCTA} />
    </>
  );
}
