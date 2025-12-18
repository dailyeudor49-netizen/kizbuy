import React from 'react';
import Hero from './components/Hero';
import BenefitsList from './components/BenefitsList';
import Comparison from './components/Comparison';
import OfferSection from './components/OfferSection';
import VisualFeatures from './components/VisualFeatures';
import Bundle from './components/Bundle';
import Reviews from './components/Reviews';
import OrderForm from './components/OrderForm';
import StickyBar from './components/StickyBar';
import FAQ from './components/FAQ';
import QualifyingSection from './components/QualifyingSection';
import HowToOrder from './components/HowToOrder';

export default function App() {
  const scrollToOrder = () => {
    const element = document.getElementById('order-form-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 pb-24 md:pb-0">
      {/* Header Responsive */}
      <header className="bg-white py-4 px-4 md:px-8 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto max-w-6xl flex justify-between items-center">
          <h1 className="text-xl md:text-3xl font-black uppercase tracking-tighter text-slate-900 flex flex-col md:flex-row md:gap-2 leading-none">
            <span>TITANSAW</span> <span className="text-[#dc3545]">PRO X</span>
          </h1>
          <button 
            onClick={scrollToOrder}
            className="bg-[#28a745] hover:bg-[#218838] text-white font-bold py-2 px-6 rounded-full uppercase text-sm md:text-base tracking-wide shadow-md transition-transform active:scale-95"
          >
            ORDINA ORA
          </button>
        </div>
      </header>

      {/* Urgency Bar */}
      <div className="bg-[#fff3cd] text-[#856404] py-3 px-2 text-center text-sm md:text-base font-bold border-b border-[#ffeeba]">
        ⚠️ ATTENZIONE: SOLO 14 PEZZI RIMASTI AL PREZZO LANCIO
      </div>

      <main className="bg-[#f8f9fa]">
        <div className="bg-white shadow-xl min-h-screen">
          <Hero />
          
          <BenefitsList />

          {/* Offer Box immediately after benefits for high conversion */}
          <OfferSection onCtaClick={scrollToOrder} />

          <VisualFeatures />
          
          <Comparison />

          {/* Moved Here: Qualifying Section (Before Bundle) */}
          <QualifyingSection />
          
          <Bundle />

          <Reviews />

          <div id="order-form-section">
            {/* Added Here: How To Order */}
            <HowToOrder />
            
            <OrderForm />
          </div>

          {/* Moved Here: FAQ (After Order Form) */}
          <FAQ />

          {/* Press/Trust Logos */}
          <div className="bg-slate-100 py-6 text-center border-y border-slate-200">
            <div className="container mx-auto max-w-6xl">
              <p className="text-xs font-bold text-slate-400 uppercase mb-4">Eletto "Prodotto dell'anno" da:</p>
              <div className="flex flex-wrap justify-center gap-8 opacity-50 font-serif font-bold text-slate-600 grayscale text-lg md:text-2xl">
                <span>FaiDaTe Facile</span>
                <span>Giardinaggio.it</span>
                <span>BricolagePRO</span>
                <span className="hidden md:inline">Il Bosco</span>
              </div>
            </div>
          </div>

        </div>
      </main>

      <StickyBar onCtaClick={scrollToOrder} />
      
      {/* Footer */}
      <footer className="bg-white py-12 text-center text-xs text-slate-400 border-t border-slate-100">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex justify-center gap-4 mb-6 grayscale opacity-60">
             {/* Fake Trust Badges */}
             <div className="border border-slate-300 rounded px-2 py-1 font-bold">GLS Express</div>
             <div className="border border-slate-300 rounded px-2 py-1 font-bold">BRT Bartolini</div>
             <div className="border border-slate-300 rounded px-2 py-1 font-bold">Pagamento alla Consegna</div>
             <div className="border border-slate-300 rounded px-2 py-1 font-bold">SSL Secure</div>
          </div>
          <p className="font-bold text-slate-500 mb-2">TitanSaw Italia - Divisione Elettroutensili Professionali</p>
          <p>© 2025 Tutti i diritti riservati. P.IVA: 01234567891</p>
          <p className="mt-2 underline cursor-pointer">Privacy Policy | Termini e Condizioni | Spedizioni e Resi | Contatti</p>
          <p className="mt-4 text-[10px] text-slate-300 max-w-2xl mx-auto">
            Questo sito non fa parte del sito Facebook o Facebook Inc. Inoltre, questo sito NON è approvato da Facebook in alcun modo. FACEBOOK è un marchio di FACEBOOK, Inc.
          </p>
        </div>
      </footer>
    </div>
  );
}