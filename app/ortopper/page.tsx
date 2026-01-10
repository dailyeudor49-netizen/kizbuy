"use client";

import React, { useState, useEffect } from 'react';
import { 
  Truck, ShieldCheck, CheckCircle2, ChevronLeft, ChevronRight, 
  Sparkles, Info, Bone, Activity, Zap, BedDouble, 
  UserCheck, Brain, Anchor, BadgeCheck, X, Check, 
  ArrowRight, Package, Quote, Star, HelpCircle, ChevronDown, Lock 
} from 'lucide-react';

// --- TYPES ---
type BedSize = 'Singolo' | 'Piazza e Mezza' | 'Matrimoniale' | 'King';

interface Testimonial {
  id: number;
  name: string;
  city: string;
  text: string;
  rating: number;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface HeroProps {
  selectedSize: BedSize;
  onSelectSize: (size: BedSize) => void;
}

interface OrderFormProps {
  selectedSize: BedSize;
  onSelectSize: (size: BedSize) => void;
}

// --- COMPONENTS ---

const Hero: React.FC<HeroProps> = ({ selectedSize, onSelectSize }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideData = [
    { img: "/images/ortopper-img/1-opt.png" },
    { img: "/images/ortopper-img/2-opt.png" },
    { img: "/images/ortopper-img/3-opt.png" },
    { img: "/images/ortopper-img/4-opt.png" },
    { img: "/images/ortopper-img/5-opt.png" },
    { img: "/images/ortopper-img/6-opt.png" },
    { img: "/images/ortopper-img/7-opt.png" },
    { img: "/images/ortopper-img/8-opt.png" }
  ];

  // Auto-scroll carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideData.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slideData.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slideData.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slideData.length - 1 : prev - 1));

  const sizesMap: Record<BedSize, string> = {
    'Singolo': '80x190 cm',
    'Piazza e Mezza': '120x190 cm',
    'Matrimoniale': '160x190 cm',
    'King': '180x200 cm'
  };

  return (
    <section className="w-full bg-white pb-8 pt-2 px-3 md:px-4 border-b-8 border-blue-600 overflow-hidden">
      {/* Top Bar Urgency */}
      <div className="bg-yellow-300 text-center py-3 px-2 mb-6 -mx-3 md:-mx-4 shadow-sm border-b border-yellow-400">
        <p className="text-sm md:text-xl font-black text-red-700 uppercase tracking-wide animate-pulse leading-tight">
          ⚠️ ATTENZIONE: Offerta "Benessere Schiena" scade a mezzanotte
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Headline Section */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-xs md:text-lg font-black uppercase tracking-widest mb-4 border border-blue-200 shadow-sm">
            Tecnologia Memory Foam HD Certificata
          </div>
          <h1 className="text-3xl md:text-6xl font-black text-gray-900 leading-tight uppercase mb-4 md:mb-6">
            Trasforma il tuo letto in un <br className="hidden md:block" />
            <span className="text-white bg-blue-600 px-3 py-1 rounded shadow-md transform -skew-x-6 inline-block mt-1 md:mt-0">SISTEMA ORTOPEDICO</span>
          </h1>
          <p className="text-lg md:text-3xl font-bold text-gray-600 leading-snug max-w-5xl mx-auto px-2">
            L'unico topper a <span className="text-blue-600 underline decoration-4 decoration-blue-200">Onde Massaggianti</span> che decomprime la colonna vertebrale e <span className="text-white bg-red-600 px-2 rounded-sm whitespace-nowrap">ALLEVIA I DOLORI</span> mentre dormi.
          </p>
        </div>

        {/* MOBILE LAYOUT: Carousel, Bullets, then Price Box */}
        <div className="lg:hidden flex flex-col gap-8">
          {/* Carousel Section */}
          <div>
            <div className="relative w-full aspect-square bg-gray-100 rounded-2xl overflow-hidden border-4 border-gray-100 shadow-xl group">
              <div className="absolute top-4 left-4 bg-red-600 text-white font-black px-4 py-2 text-sm z-20 rounded shadow-lg uppercase">
                  Stop Mal di Schiena
              </div>

              <div className="w-full h-full relative">
                  <img
                      src={slideData[currentSlide].img}
                      alt="Topper Ortopedico Dettagli"
                      className="w-full h-full object-cover transition-opacity duration-500"
                  />

                  <button onClick={(e) => {e.preventDefault(); prevSlide()}} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white text-gray-900 z-10">
                      <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button onClick={(e) => {e.preventDefault(); nextSlide()}} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white text-gray-900 z-10">
                      <ChevronRight className="w-6 h-6" />
                  </button>
              </div>
            </div>

            {/* Thumbnails Mobile */}
            <div className="flex justify-center gap-2 mt-3">
              {slideData.map((slide, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                    currentSlide === index
                      ? 'border-blue-600 ring-2 ring-blue-200 scale-105'
                      : 'border-gray-200 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={slide.img}
                    alt={`Miniatura ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Bullet Points */}
          <div className="space-y-4 px-1">
            <div className="flex items-start bg-blue-50 p-4 rounded-xl border border-blue-100 shadow-sm">
                <CheckCircle2 className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                    <h4 className="font-black text-gray-900 text-lg uppercase mb-1 leading-none">ALLINEAMENTO SPINALE</h4>
                    <p className="text-base text-gray-800 leading-snug mt-1">Mantiene collo, schiena e bacino in asse neutro. <span className="bg-yellow-200 px-1 font-bold">Addio risvegli rigidi.</span></p>
                </div>
            </div>

            <div className="flex items-start bg-blue-50 p-4 rounded-xl border border-blue-100 shadow-sm">
                <CheckCircle2 className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                    <h4 className="font-black text-gray-900 text-lg uppercase mb-1 leading-none">MASSAGGIO "WAVE"</h4>
                    <p className="text-base text-gray-800 leading-snug mt-1">La superficie a onde riattiva il flusso sanguigno e riduce i <span className="font-bold text-red-600">formicolii notturni.</span></p>
                </div>
            </div>

            <div className="flex items-start bg-blue-50 p-4 rounded-xl border border-blue-100 shadow-sm">
                <CheckCircle2 className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                    <h4 className="font-black text-gray-900 text-lg uppercase mb-1 leading-none">SCARICO PRESSIONE (7CM)</h4>
                    <p className="text-base text-gray-800 leading-snug mt-1">Struttura <strong>Memory HD + HR</strong> (7cm totali) che accoglie spalle e fianchi senza farti sprofondare.</p>
                </div>
            </div>

            <div className="flex items-start bg-blue-50 p-4 rounded-xl border border-blue-100 shadow-sm">
                <CheckCircle2 className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                    <h4 className="font-black text-gray-900 text-lg uppercase mb-1 leading-none">IGIENE MASSIMA</h4>
                    <p className="text-base text-gray-800 leading-snug mt-1">Cover <strong>Aloe Vera con Zip</strong> lavabile + Fascia <strong>3D Mesh</strong> laterale per non sudare mai.</p>
                </div>
            </div>

            <div className="flex items-start bg-blue-50 p-4 rounded-xl border border-blue-100 shadow-sm">
                <Anchor className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                    <h4 className="font-black text-gray-900 text-lg uppercase mb-1 leading-none">STABILITÀ TOTALE</h4>
                    <p className="text-base text-gray-800 leading-snug mt-1">Base antiscivolo vera + <strong>4 elastici larghi rinforzati</strong>. <span className="bg-yellow-200 px-1 font-bold">Non si sposta di un millimetro.</span></p>
                </div>
            </div>

            <div className="flex items-start bg-blue-50 p-4 rounded-xl border border-blue-100 shadow-sm">
                <Sparkles className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                    <h4 className="font-black text-gray-900 text-lg uppercase mb-1 leading-none">RISPARMIA 800€</h4>
                    <p className="text-base text-gray-800 leading-snug mt-1">Non serve cambiare materasso. <span className="bg-yellow-200 px-1 font-bold">Rinnova il tuo vecchio letto</span> e fallo tornare come nuovo.</p>
                </div>
            </div>
          </div>

          {/* Price Box */}
          <div className="w-full bg-white border-4 border-blue-600 rounded-3xl p-5 shadow-2xl relative mt-4">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-[90%] text-center bg-red-600 text-white font-black px-4 py-2 uppercase tracking-widest rounded-lg shadow-lg text-sm animate-pulse border-2 border-white z-30">
                Promo Svuotatutto
            </div>

            <div className="text-center mt-6 mb-6">
                <p className="text-gray-500 font-bold text-base mb-1 uppercase tracking-wide">Prezzo al pubblico</p>
                <div className="flex items-center justify-center gap-2">
                    <span className="text-gray-400 line-through text-3xl font-bold">€119</span>
                    <span className="text-7xl font-black text-gray-900 tracking-tighter">€59</span>
                    <span className="text-lg font-bold text-gray-900 self-end mb-4">,99</span>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-3 text-left shadow-sm">
                    <div className="flex items-center text-blue-800 font-black text-xs uppercase mb-1">
                        <Info className="w-4 h-4 mr-1" /> Perché costano uguali?
                    </div>
                    <p className="text-xs text-gray-700 leading-tight">
                        Per liberare spazio in magazzino <strong>abbiamo abbassato il prezzo delle misure grandi</strong> (King/Matrimoniale) al costo base del Singolo.
                        <br/>
                        <span className="text-red-600 font-bold">Approfittane, paghi il piccolo e prendi il grande!</span>
                    </p>
                </div>
            </div>

            <div className="mb-6">
                <p className="text-center text-base font-black text-gray-800 mb-4 uppercase flex items-center justify-center">
                    <span className="w-3 h-3 bg-blue-600 rounded-full mr-2"></span> Seleziona la tua misura
                </p>
                <div className="grid grid-cols-2 gap-2">
                    {(Object.keys(sizesMap) as BedSize[]).map((size) => (
                        <button
                            key={size}
                            onClick={() => onSelectSize(size)}
                            className={`py-3 px-1 rounded-xl border-2 transition-all shadow-sm flex flex-col items-center justify-center ${
                                selectedSize === size
                                ? 'bg-blue-900 border-blue-900 text-white ring-2 ring-blue-200 scale-[1.02] z-10'
                                : 'bg-white border-gray-200 text-gray-600 hover:border-blue-400 hover:text-blue-600'
                            }`}
                        >
                            <span className="text-sm font-black uppercase leading-none mb-1 text-center">{size}</span>
                            <span className="text-[10px] font-bold opacity-80">{sizesMap[size]}</span>
                        </button>
                    ))}
                </div>
            </div>

            <a href="#order-form" className="block w-full bg-green-600 hover:bg-green-700 text-white text-center font-black text-2xl py-5 rounded-2xl shadow-xl border-b-8 border-green-800 uppercase transform transition active:scale-95 group leading-none">
                VOGLIO STARE BENE
                <span className="block text-xs font-bold text-green-100 mt-2 normal-case opacity-95 group-hover:text-white">
                    Ordina ora, paga al corriere
                </span>
            </a>

            <div className="mt-6 pt-5 border-t border-gray-100 grid grid-cols-2 gap-3 text-sm font-bold text-gray-600 text-center">
                <div className="flex items-center justify-center bg-gray-50 py-2 rounded border border-gray-100">
                    <Truck className="w-5 h-5 mr-2 text-blue-600"/>
                    Consegna 24h
                </div>
                <div className="flex items-center justify-center bg-gray-50 py-2 rounded border border-gray-100">
                    <ShieldCheck className="w-5 h-5 mr-2 text-blue-600"/>
                    Garanzia 2 Anni
                </div>
            </div>
          </div>
        </div>

        {/* DESKTOP LAYOUT: Carousel + Bullets side by side, Price Box full width below */}
        <div className="hidden lg:block">
          {/* Top Row: Carousel + Bullets */}
          <div className="flex flex-row gap-12 items-start mb-10">
            {/* Left: Carousel */}
            <div className="w-1/2">
              <div className="relative w-full aspect-square bg-gray-100 rounded-3xl overflow-hidden border-4 border-gray-100 shadow-xl group">
                <div className="absolute top-6 left-6 bg-red-600 text-white font-black px-6 py-3 text-xl z-20 rounded shadow-lg uppercase">
                    Stop Mal di Schiena
                </div>

                <div className="w-full h-full relative">
                    <img
                        src={slideData[currentSlide].img}
                        alt="Topper Ortopedico Dettagli"
                        className="w-full h-full object-cover transition-opacity duration-500"
                    />

                    <button onClick={(e) => {e.preventDefault(); prevSlide()}} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 p-4 rounded-full shadow-lg hover:bg-white text-gray-900 z-10">
                        <ChevronLeft className="w-8 h-8" />
                    </button>
                    <button onClick={(e) => {e.preventDefault(); nextSlide()}} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 p-4 rounded-full shadow-lg hover:bg-white text-gray-900 z-10">
                        <ChevronRight className="w-8 h-8" />
                    </button>
                </div>
              </div>

              {/* Thumbnails Desktop */}
              <div className="flex justify-center gap-3 mt-4">
                {slideData.map((slide, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-3 transition-all ${
                      currentSlide === index
                        ? 'border-blue-600 ring-2 ring-blue-200 scale-105 shadow-lg'
                        : 'border-gray-200 opacity-60 hover:opacity-100 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={slide.img}
                      alt={`Miniatura ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Bullet Points */}
            <div className="w-1/2 space-y-4">
              <div className="flex items-start bg-blue-50 p-5 rounded-xl border border-blue-100 shadow-sm">
                  <CheckCircle2 className="w-10 h-10 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                      <h4 className="font-black text-gray-900 text-2xl uppercase mb-1 leading-none">ALLINEAMENTO SPINALE</h4>
                      <p className="text-xl text-gray-800 leading-snug mt-1">Mantiene collo, schiena e bacino in asse neutro. <span className="bg-yellow-200 px-1 font-bold">Addio risvegli rigidi.</span></p>
                  </div>
              </div>

              <div className="flex items-start bg-blue-50 p-5 rounded-xl border border-blue-100 shadow-sm">
                  <CheckCircle2 className="w-10 h-10 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                      <h4 className="font-black text-gray-900 text-2xl uppercase mb-1 leading-none">MASSAGGIO "WAVE"</h4>
                      <p className="text-xl text-gray-800 leading-snug mt-1">La superficie a onde riattiva il flusso sanguigno e riduce i <span className="font-bold text-red-600">formicolii notturni.</span></p>
                  </div>
              </div>

              <div className="flex items-start bg-blue-50 p-5 rounded-xl border border-blue-100 shadow-sm">
                  <CheckCircle2 className="w-10 h-10 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                      <h4 className="font-black text-gray-900 text-2xl uppercase mb-1 leading-none">SCARICO PRESSIONE (7CM)</h4>
                      <p className="text-xl text-gray-800 leading-snug mt-1">Struttura <strong>Memory HD + HR</strong> (7cm totali) che accoglie spalle e fianchi senza farti sprofondare.</p>
                  </div>
              </div>

              <div className="flex items-start bg-blue-50 p-5 rounded-xl border border-blue-100 shadow-sm">
                  <CheckCircle2 className="w-10 h-10 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                      <h4 className="font-black text-gray-900 text-2xl uppercase mb-1 leading-none">IGIENE MASSIMA</h4>
                      <p className="text-xl text-gray-800 leading-snug mt-1">Cover <strong>Aloe Vera con Zip</strong> lavabile + Fascia <strong>3D Mesh</strong> laterale per non sudare mai.</p>
                  </div>
              </div>

              <div className="flex items-start bg-blue-50 p-5 rounded-xl border border-blue-100 shadow-sm">
                  <Anchor className="w-10 h-10 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                      <h4 className="font-black text-gray-900 text-2xl uppercase mb-1 leading-none">STABILITÀ TOTALE</h4>
                      <p className="text-xl text-gray-800 leading-snug mt-1">Base antiscivolo vera + <strong>4 elastici larghi rinforzati</strong>. <span className="bg-yellow-200 px-1 font-bold">Non si sposta di un millimetro.</span></p>
                  </div>
              </div>

              <div className="flex items-start bg-blue-50 p-5 rounded-xl border border-blue-100 shadow-sm">
                  <Sparkles className="w-10 h-10 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                      <h4 className="font-black text-gray-900 text-2xl uppercase mb-1 leading-none">RISPARMIA 800€</h4>
                      <p className="text-xl text-gray-800 leading-snug mt-1">Non serve cambiare materasso. <span className="bg-yellow-200 px-1 font-bold">Rinnova il tuo vecchio letto</span> e fallo tornare come nuovo.</p>
                  </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: Full Width Price Box */}
          <div className="w-full bg-white border-4 border-blue-600 rounded-3xl p-8 shadow-2xl relative">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-center bg-red-600 text-white font-black px-6 py-2 uppercase tracking-widest rounded-lg shadow-lg text-lg animate-pulse border-2 border-white z-30">
                Promo Svuotatutto
            </div>

            <div className="flex flex-row items-center justify-between gap-8 mt-4">
              {/* Left: Price */}
              <div className="flex-1">
                <p className="text-gray-500 font-bold text-lg mb-1 uppercase tracking-wide">Prezzo al pubblico</p>
                <div className="flex items-center gap-4">
                    <span className="text-gray-400 line-through text-4xl font-bold">€119</span>
                    <span className="text-8xl font-black text-gray-900 tracking-tighter">€59</span>
                    <span className="text-xl font-bold text-gray-900 self-end mb-4">,99</span>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-3 text-left shadow-sm max-w-md">
                    <div className="flex items-center text-blue-800 font-black text-sm uppercase mb-1">
                        <Info className="w-4 h-4 mr-1" /> Perché costano uguali?
                    </div>
                    <p className="text-sm text-gray-700 leading-tight">
                        Per liberare spazio in magazzino <strong>abbiamo abbassato il prezzo delle misure grandi</strong> (King/Matrimoniale) al costo base del Singolo.
                        <span className="text-red-600 font-bold"> Approfittane, paghi il piccolo e prendi il grande!</span>
                    </p>
                </div>
              </div>

              {/* Center: Size Selector */}
              <div className="flex-1">
                <p className="text-center text-lg font-black text-gray-800 mb-4 uppercase flex items-center justify-center">
                    <span className="w-4 h-4 bg-blue-600 rounded-full mr-2"></span> Seleziona la tua misura
                </p>
                <div className="grid grid-cols-2 gap-3">
                    {(Object.keys(sizesMap) as BedSize[]).map((size) => (
                        <button
                            key={size}
                            onClick={() => onSelectSize(size)}
                            className={`py-3 px-1 rounded-xl border-2 transition-all shadow-sm flex flex-col items-center justify-center ${
                                selectedSize === size
                                ? 'bg-blue-900 border-blue-900 text-white ring-4 ring-blue-200 scale-[1.02] z-10'
                                : 'bg-white border-gray-200 text-gray-600 hover:border-blue-400 hover:text-blue-600'
                            }`}
                        >
                            <span className="text-lg font-black uppercase leading-none mb-1 text-center">{size}</span>
                            <span className="text-sm font-bold opacity-80">{sizesMap[size]}</span>
                        </button>
                    ))}
                </div>
              </div>

              {/* Right: CTA + Trust */}
              <div className="flex-1 flex flex-col">
                <a href="#order-form" className="block w-full bg-green-600 hover:bg-green-700 text-white text-center font-black text-3xl py-6 rounded-2xl shadow-xl border-b-8 border-green-800 uppercase transform transition active:scale-95 group leading-none">
                    VOGLIO STARE BENE
                    <span className="block text-base font-bold text-green-100 mt-2 normal-case opacity-95 group-hover:text-white">
                        Ordina ora, paga al corriere
                    </span>
                </a>

                <div className="mt-4 grid grid-cols-2 gap-3 text-base font-bold text-gray-600 text-center">
                    <div className="flex items-center justify-center bg-gray-50 py-3 rounded border border-gray-100">
                        <Truck className="w-6 h-6 mr-2 text-blue-600"/>
                        Consegna 24h
                    </div>
                    <div className="flex items-center justify-center bg-gray-50 py-3 rounded border border-gray-100">
                        <ShieldCheck className="w-6 h-6 mr-2 text-blue-600"/>
                        Garanzia 2 Anni
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProblemSolution: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center text-gray-900 mb-4 uppercase leading-tight">
          Il tuo materasso ti sta <br className="md:hidden"/> <span className="text-red-600 underline decoration-4 decoration-yellow-400">rovinando la schiena?</span>
        </h2>
        <p className="text-center text-gray-700 font-bold text-lg md:text-2xl mb-12 max-w-3xl mx-auto">
            Se soffri di uno di questi disturbi, il colpevole è la superficie su cui dormi.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-red-400 transition-colors">
                <div className="bg-red-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-red-100">
                    <Bone className="w-10 h-10 text-red-600" />
                </div>
                <h3 className="font-black text-xl text-gray-900 mb-2 uppercase">Dolore Lombare</h3>
                <p className="text-base text-gray-700 font-medium leading-relaxed">Ti svegli con la zona bassa della schiena indolenzita perché il materasso <span className="font-bold bg-yellow-100">non sostiene l'arco naturale.</span></p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-red-400 transition-colors">
                <div className="bg-red-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-red-100">
                    <Activity className="w-10 h-10 text-red-600" />
                </div>
                <h3 className="font-black text-xl text-gray-900 mb-2 uppercase">Torcicollo / Cervicale</h3>
                <p className="text-base text-gray-700 font-medium leading-relaxed">Collo rigido al mattino? Significa che spalle e testa <span className="font-bold bg-yellow-100">non sono allineate</span> durante il sonno.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-red-400 transition-colors">
                <div className="bg-red-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-red-100">
                    <Zap className="w-10 h-10 text-red-600" />
                </div>
                <h3 className="font-black text-xl text-gray-900 mb-2 uppercase">Formicolii</h3>
                <p className="text-base text-gray-700 font-medium leading-relaxed">Se ti svegli con braccia o gambe addormentate, il materasso sta <span className="font-bold bg-yellow-100">bloccando il flusso sanguigno.</span></p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-red-400 transition-colors">
                <div className="bg-red-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-red-100">
                    <BedDouble className="w-10 h-10 text-red-600" />
                </div>
                <h3 className="font-black text-xl text-gray-900 mb-2 uppercase">Irrequietezza</h3>
                <p className="text-base text-gray-700 font-medium leading-relaxed">Ti giri e rigiri cercando la posizione? Il tuo corpo sta lottando per trovare comfort tutta la notte.</p>
            </div>
        </div>

        <div className="text-center mt-12 p-6 md:p-8 bg-blue-50 rounded-2xl border-2 border-blue-100 max-w-3xl mx-auto">
            <p className="text-xl md:text-3xl font-black text-blue-900 uppercase mb-3 leading-tight">
                LA SOLUZIONE NON È UN MATERASSO DA 1.000€
            </p>
            <p className="text-gray-800 text-lg md:text-xl font-medium">
                Hai bisogno di un supporto correttivo che si adatti a te. <br className="hidden md:block"/>
                Il <span className="font-bold text-blue-700 bg-white px-1">Topper Ortopedico</span> fa esattamente questo.
            </p>
        </div>
      </div>
    </section>
  );
};

const Mechanism: React.FC = () => {
  return (
    <section className="bg-white py-12 md:py-16 px-4 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase mb-4 leading-tight">
                TECNOLOGIA <span className="text-blue-600">ORTOPEDICA A 3 LIVELLI</span>
            </h2>
            <p className="text-gray-600 font-bold text-lg md:text-2xl max-w-4xl mx-auto">
                La scienza del buon riposo in 3 fasi essenziali.
            </p>
        </div>

        {/* Grid Layout 1 Col Mobile, 3 Cols Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            
            {/* Card 1 */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 group hover:shadow-2xl transition-shadow flex flex-col">
                <div className="aspect-square w-full relative">
                    <img src="/images/ortopper-img/decompressione-vertebrale-opt.gif" alt="Decompressione Vertebrale" className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white font-black w-12 h-12 flex items-center justify-center rounded-full text-2xl shadow-lg border-2 border-white">1</div>
                </div>
                <div className="p-6 md:p-8 flex-1">
                    <h4 className="font-black text-2xl text-gray-900 uppercase mb-3 md:mb-4">Decompressione Vertebrale</h4>
                    <p className="text-gray-700 leading-relaxed text-lg md:text-xl font-medium">
                        Il materiale viscoelastico si adatta millimetricamente al corpo, riempiendo gli spazi vuoti (zona lombare). Questo permette alla colonna di distendersi e ai dischi di <span className="bg-yellow-100 font-bold px-1 text-gray-900 border-b-2 border-yellow-300">reidratarsi</span> durante la notte.
                    </p>
                </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 group hover:shadow-2xl transition-shadow flex flex-col">
                <div className="aspect-square w-full relative">
                    <img src="/images/ortopper-img/profilo-bugnato-wave-opt.gif" alt="Profilo Bugnato Wave" className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white font-black w-12 h-12 flex items-center justify-center rounded-full text-2xl shadow-lg border-2 border-white">2</div>
                </div>
                <div className="p-6 md:p-8 flex-1">
                    <h4 className="font-black text-2xl text-gray-900 uppercase mb-3 md:mb-4">Profilo Bugnato "Wave"</h4>
                    <p className="text-gray-700 leading-relaxed text-lg md:text-xl font-medium">
                        La speciale lavorazione a onde esercita un <span className="bg-yellow-100 font-bold px-1 text-gray-900 border-b-2 border-yellow-300">micro-massaggio passivo</span> ad ogni tuo movimento. Questo stimola la micro-circolazione capillare superficiale, riducendo gonfiori e ritenzione idrica.
                    </p>
                </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 group hover:shadow-2xl transition-shadow flex flex-col">
                <div className="aspect-square w-full relative">
                    <img src="/images/ortopper-img/zero-punti-pressione-opt.gif" alt="Zero Punti di Pressione" className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white font-black w-12 h-12 flex items-center justify-center rounded-full text-2xl shadow-lg border-2 border-white">3</div>
                </div>
                <div className="p-6 md:p-8 flex-1">
                    <h4 className="font-black text-2xl text-gray-900 uppercase mb-3 md:mb-4">Zero Punti di Pressione</h4>
                    <p className="text-gray-700 leading-relaxed text-lg md:text-xl font-medium">
                        Distribuendo il peso uniformemente su <span className="bg-yellow-100 font-bold px-1 text-gray-900 border-b-2 border-yellow-300">7 CM di spessore</span>, elimina i picchi di pressione su anche e spalle. Fondamentale per chi soffre di dolori articolari e formicolii.
                    </p>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

const BenefitsList: React.FC = () => {
  return (
    <section className="bg-blue-900 py-12 md:py-16 px-4 border-y-4 border-blue-800 text-white">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl md:text-5xl font-black text-center mb-10 uppercase leading-tight">
           Benefici Clinici & Tecnici
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            
            <div className="bg-blue-800 p-6 md:p-8 rounded-3xl border-2 border-blue-700 flex items-start hover:bg-blue-700 transition-colors shadow-lg">
                <UserCheck className="w-10 h-10 md:w-12 md:h-12 text-green-400 mr-4 md:mr-5 flex-shrink-0 mt-1" />
                <div>
                    <h4 className="font-black text-xl md:text-2xl text-white mb-2 uppercase">Correzione Posturale</h4>
                    <p className="text-blue-50 font-medium text-lg md:text-xl leading-snug">Che tu dorma di schiena o di lato, il topper mantiene l'asse naturale. Ti svegli dritto, senza bisogno di "scrocchiare" la schiena.</p>
                </div>
            </div>

            <div className="bg-blue-800 p-6 md:p-8 rounded-3xl border-2 border-blue-700 flex items-start hover:bg-blue-700 transition-colors shadow-lg">
                <Brain className="w-10 h-10 md:w-12 md:h-12 text-green-400 mr-4 md:mr-5 flex-shrink-0 mt-1" />
                <div>
                    <h4 className="font-black text-xl md:text-2xl text-white mb-2 uppercase">Fascia 3D Mesh Laterale</h4>
                    <p className="text-blue-50 font-medium text-lg md:text-xl leading-snug">A differenza dei topper chiusi, la nostra fascia tecnica laterale permette un ricircolo d'aria costante. <span className="text-white font-bold underline decoration-green-400">Mai più sudore.</span></p>
                </div>
            </div>

            <div className="bg-blue-800 p-6 md:p-8 rounded-3xl border-2 border-blue-700 flex items-start hover:bg-blue-700 transition-colors shadow-lg">
                <Anchor className="w-10 h-10 md:w-12 md:h-12 text-green-400 mr-4 md:mr-5 flex-shrink-0 mt-1" />
                <div>
                    <h4 className="font-black text-xl md:text-2xl text-white mb-2 uppercase">Stabilità Totale</h4>
                    <p className="text-blue-50 font-medium text-lg md:text-xl leading-snug">Dotato di <span className="font-bold text-white bg-blue-600 px-1">Base Antiscivolo Vera</span> e 4 elastici larghi rinforzati. Non si sposta di un millimetro.</p>
                </div>
            </div>

            <div className="bg-blue-800 p-6 md:p-8 rounded-3xl border-2 border-blue-700 flex items-start hover:bg-blue-700 transition-colors shadow-lg">
                <BadgeCheck className="w-10 h-10 md:w-12 md:h-12 text-green-400 mr-4 md:mr-5 flex-shrink-0 mt-1" />
                <div>
                    <h4 className="font-black text-xl md:text-2xl text-white mb-2 uppercase">Igiene Certificata</h4>
                    <p className="text-blue-50 font-medium text-lg md:text-xl leading-snug">Cover Aloe Vera con Zip per lavaggio rapido. Materiali anti-acaro e anallergici, ideali per soggetti sensibili.</p>
                </div>
            </div>

        </div>

        <div className="text-center mt-12">
             <a href="#order-form" className="inline-block bg-green-500 hover:bg-green-600 text-white font-black text-xl md:text-3xl py-5 px-10 md:py-6 md:px-16 rounded-full shadow-2xl border-b-8 border-green-700 transform transition hover:scale-105 uppercase tracking-wide">
                PROVA IL SOLLIEVO ORA
             </a>
             <p className="mt-4 text-sm md:text-lg text-blue-200 font-bold uppercase tracking-widest">Garanzia 14 giorni soddisfatto o rimborsato</p>
        </div>
      </div>
    </section>
  );
};

const Installation: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-12 uppercase">
            Installazione in 30 secondi
        </h3>
        
        <div className="flex flex-col md:flex-row justify-center items-start gap-10">
            <div className="flex flex-col items-center flex-1">
                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center text-3xl font-black text-blue-600 mb-4 border-4 border-blue-100 shadow-sm">1</div>
                <p className="font-black text-2xl text-gray-900 uppercase mb-2">Srotola</p>
                <p className="text-lg text-gray-600 font-medium leading-snug">Apri il sottovuoto e stendilo comodamente sul tuo vecchio materasso.</p>
            </div>
            
            <div className="hidden md:block w-16 h-2 bg-gray-100 mt-10 rounded-full"></div>

            <div className="flex flex-col items-center flex-1">
                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center text-3xl font-black text-blue-600 mb-4 border-4 border-blue-100 shadow-sm">2</div>
                <p className="font-black text-2xl text-gray-900 uppercase mb-2">Fissa</p>
                <p className="text-lg text-gray-600 font-medium leading-snug">Aggancia i 4 elastici rinforzati agli angoli per una stabilità perfetta.</p>
            </div>

            <div className="hidden md:block w-16 h-2 bg-gray-100 mt-10 rounded-full"></div>

            <div className="flex flex-col items-center flex-1">
                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center text-3xl font-black text-blue-600 mb-4 border-4 border-blue-100 shadow-sm">3</div>
                <p className="font-black text-2xl text-gray-900 uppercase mb-2">Dormi</p>
                <p className="text-lg text-gray-600 font-medium leading-snug">Goditi il comfort immediato e dì addio ai dolori mattutini.</p>
            </div>
        </div>

        <div className="mt-12 bg-yellow-50 inline-block px-6 py-4 rounded-xl border-2 border-yellow-200 text-base md:text-lg text-yellow-900 font-bold max-w-3xl">
            💡 Nota: Spedito <span className="font-black uppercase">Sottovuoto Arrotolato</span>. Consigliamo di attendere 24-48h per il completo recupero del volume (7cm), ma puoi usarlo già dopo 4 ore.
        </div>
      </div>
    </section>
  );
};

const Comparison: React.FC = () => {
  const features = [
    {
      name: "Struttura Interna",
      us: { text: "DOPPIO STRATO (Memory+HR)", highlight: true },
      them: "Strato Singolo"
    },
    {
      name: "Spessore Totale",
      us: { text: "7 CM REALI", highlight: true },
      them: "3-4 CM scarsi"
    },
    {
      name: "Tipo di Sostegno",
      us: { text: "Ortopedico Attivo", highlight: false },
      them: "Passivo / Molle"
    },
    {
      name: "Effetto sulla Schiena",
      us: { text: "Decompressione", highlight: false },
      them: "Affondamento"
    },
    {
      name: "Tecnologia Superficie",
      us: { text: "Bugnato Massaggiante", highlight: false },
      them: "Liscio / Caldo"
    }
  ];

  return (
    <section className="py-12 md:py-16 px-3 md:px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        
        <h3 className="text-2xl md:text-4xl font-black text-center text-gray-900 mb-10 uppercase leading-tight">
            Perché non è il solito <br/>"pezzo di spugna"
        </h3>

        {/* Desktop Table View */}
        <div className="hidden md:block bg-white rounded-2xl shadow-xl border-2 border-gray-200 overflow-hidden">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-gray-900 text-white">
                        <th className="p-6 w-1/3 text-xl uppercase font-bold pl-8">Caratteristica</th>
                        <th className="p-6 w-1/3 bg-blue-600 text-xl uppercase text-center font-black border-b-8 border-blue-800 relative">
                            NOSTRO TOPPER
                            <div className="absolute top-0 right-0 bg-yellow-400 text-black text-xs font-bold px-3 py-1 uppercase tracking-wide">Best Seller</div>
                        </th>
                        <th className="p-6 w-1/3 bg-gray-100 text-gray-500 text-xl uppercase text-center font-bold">
                            GENERICI ONLINE
                        </th>
                    </tr>
                </thead>
                <tbody className="text-lg font-medium">
                    {features.map((f, i) => (
                        <tr key={i} className="border-b border-gray-100 last:border-0">
                            <td className="p-6 font-bold text-gray-900">{f.name}</td>
                            <td className="p-6 text-center bg-blue-50 font-bold text-blue-900 text-xl">
                                <div className="flex flex-col items-center gap-2">
                                    <Check className="w-8 h-8 text-green-600"/> 
                                    <span className={f.us.highlight ? "bg-yellow-200 px-2 py-0.5 rounded" : ""}>{f.us.text}</span>
                                </div>
                            </td>
                            <td className="p-6 text-center text-gray-400 text-lg">
                                <div className="flex flex-col items-center gap-2">
                                    <X className="w-6 h-6"/> {f.them}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        {/* Mobile Card View (Redesigned for Clarity) */}
        <div className="md:hidden space-y-6">
            {features.map((f, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 overflow-hidden relative">
                    {/* Feature Name Header */}
                    <div className="bg-gray-900 text-white text-center py-3 font-black text-lg uppercase tracking-wide">
                        {f.name}
                    </div>

                    <div className="flex items-stretch relative">
                         {/* Absolute VS Badge */}
                         <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-white border-2 border-gray-200 rounded-full w-8 h-8 flex items-center justify-center font-black text-[10px] text-gray-400 shadow-sm">
                            VS
                         </div>

                         {/* Us Column */}
                        <div className="flex-1 bg-blue-50 p-4 text-center border-r border-gray-100 flex flex-col items-center justify-start pt-8 pb-6">
                            <div className="absolute top-12 left-0 w-1/2 text-center">
                                <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">NOI</span>
                            </div>
                            <div className="flex-grow flex flex-col items-center justify-center mt-2">
                                <Check className="w-8 h-8 text-green-600 mb-2"/>
                                <span className={`text-base font-black text-blue-900 leading-tight ${f.us.highlight ? "bg-yellow-200 px-1 shadow-sm" : ""}`}>
                                    {f.us.text}
                                </span>
                            </div>
                        </div>
                        
                        {/* Them Column */}
                        <div className="flex-1 bg-white p-4 text-center flex flex-col items-center justify-start pt-8 pb-6">
                            <div className="absolute top-12 right-0 w-1/2 text-center">
                                <span className="bg-gray-200 text-gray-500 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">ALTRI</span>
                            </div>
                            <div className="flex-grow flex flex-col items-center justify-center mt-2">
                                <X className="w-6 h-6 text-gray-300 mb-2"/>
                                <span className="text-sm font-bold text-gray-400 leading-tight">
                                    {f.them}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        
        <div className="text-center mt-12 flex justify-center items-center text-blue-700 font-bold text-lg cursor-pointer hover:underline group">
             <a href="#order-form" className="flex items-center bg-blue-50 px-6 py-3 rounded-full border border-blue-200 shadow-sm">
                Scegli la qualità certificata <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"/>
             </a>
        </div>

      </div>
    </section>
  );
};

const Unboxing: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-white border-t border-gray-200">
      <div className="max-w-4xl mx-auto bg-blue-50 border-4 border-blue-200 rounded-3xl p-5 md:p-10">
        <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 md:mb-8 flex items-center justify-center uppercase">
            <Package className="mr-3 w-8 h-8 md:w-10 md:h-10 text-blue-600" />
            Cosa ricevi a casa
        </h3>
        
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
            {/* Image Side */}
            <div className="w-full md:w-1/2">
                <div className="aspect-square bg-white rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden relative">
                    <img src="/images/ortopper-img/8-opt.png" alt="Contenuto confezione topper" className="w-full h-full object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-blue-900 text-white text-xs md:text-sm p-2 md:p-3 text-center font-bold uppercase">
                        Confezione Sottovuoto Igienizzata
                    </div>
                </div>
            </div>

            {/* List Side */}
            <div className="w-full md:w-1/2 text-left">
                <ul className="space-y-4 font-bold text-gray-900 text-lg md:text-xl">
                    <li className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-blue-100">
                        <span className="bg-blue-600 text-white rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-sm md:text-lg mr-3 flex-shrink-0 font-black mt-0.5">✓</span>
                        <span className="leading-tight">1x Topper Ortopedico (misura scelta)</span>
                    </li>
                    <li className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-blue-100">
                        <span className="bg-blue-600 text-white rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-sm md:text-lg mr-3 flex-shrink-0 font-black mt-0.5">✓</span>
                        <span className="leading-tight">1x Cover Aloe Vera con Zip (già applicata)</span>
                    </li>
                    <li className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-blue-100">
                        <span className="bg-blue-600 text-white rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-sm md:text-lg mr-3 flex-shrink-0 font-black mt-0.5">✓</span>
                        <span className="leading-tight">1x Coprimaterasso Impermeabile Antimacchia con Elastici</span>
                    </li>
                    <li className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-blue-100">
                        <span className="bg-blue-600 text-white rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-sm md:text-lg mr-3 flex-shrink-0 font-black mt-0.5">✓</span>
                        <span className="text-blue-800 uppercase leading-tight">Garanzia Ufficiale 2 Anni</span>
                    </li>
                </ul>
                <div className="mt-6 text-center md:text-left text-base md:text-lg text-blue-900 font-bold">
                    <span className="inline-block bg-blue-200 px-3 py-2 md:px-4 rounded-lg border border-blue-300 leading-tight">🚚 Spedizione tracciata 24/48h inclusa</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

const Reviews: React.FC = () => {
  const reviews: (Testimonial & { image?: string })[] = [
    { id: 1, name: "Giovanni R.", city: "Bergamo", text: "Soffro di sciatica da anni. Il mio fisioterapista mi ha consigliato di cambiare materasso ma costava troppo. Con questo topper ho risolto al 90%. Al mattino riesco a piegarmi senza fitte. Incredibile.", rating: 5 },
    { id: 2, name: "Maria Elena B.", city: "Roma", text: "Ho una protrusione cervicale che mi dava vertigini al risveglio. Da quando uso il Topper Ortopedico il collo è molto più rilassato. Il sostegno è deciso ma accogliente, non è il solito memory molle.", rating: 5 },
    { id: 3, name: "Luca T.", city: "Varese", text: "Faccio il magazziniere e la sera ho la schiena a pezzi. Questo topper mi fa letteralmente rinascere. Senti proprio che la colonna si distende appena ti sdrai. Spedizione velocissima.", rating: 5, image: "/images/ortopper-img/recensione-1.jpg" },
    { id: 4, name: "Alessandra M.", city: "Napoli", text: "Ero scettica sull'effetto 'massaggiante', invece è vero. Ho problemi di circolazione alle gambe e mi sveglio molto meno gonfia. La superficie a onde fa passare aria e non sudo.", rating: 5 },
    { id: 5, name: "Dott. Stefano C.", city: "Milano", text: "L'ho comprato per mia madre anziana che passa molto tempo a letto. Ottimo per prevenire piaghe e dolori da pressione. Il tessuto è fresco e igienico. Consigliato.", rating: 5 },
    { id: 6, name: "Patrizia S.", city: "Firenze", text: "Il mio materasso era diventato una conca. Mi sveglio col mal di reni. Con 60 euro ho evitato di spenderne 800. Adesso la schiena sta dritta e dormo 8 ore filate.", rating: 4 },
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-black text-center text-gray-900 mb-4 uppercase leading-tight">
            Storie di Guarigione Quotidiana
        </h3>
        <p className="text-center text-gray-600 font-bold mb-10 md:mb-12 max-w-2xl mx-auto text-lg md:text-xl">
            Migliaia di italiani hanno smesso di convivere con il dolore. Ecco le loro esperienze reali.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {reviews.map((r) => (
                <div key={r.id} className="bg-gray-50 p-6 md:p-8 rounded-2xl border-2 border-gray-100 shadow-sm relative hover:shadow-lg transition-shadow flex flex-col">
                    <Quote className="absolute top-4 right-4 md:top-6 md:right-6 text-gray-200 w-8 h-8 md:w-10 md:h-10 fill-current" />
                    <div className="flex text-yellow-400 mb-4">
                        {[...Array(5)].map((_, i) => <Star key={i} className={`w-5 h-5 fill-current ${i >= r.rating ? 'text-gray-300' : ''}`} />)}
                    </div>
                    <p className="text-gray-800 text-lg md:text-xl mb-6 font-medium leading-relaxed italic flex-grow">"{r.text}"</p>
                    {r.image && (
                        <div className="mb-4 rounded-xl overflow-hidden border-2 border-blue-100">
                            <img src={r.image} alt="Foto prodotto cliente" className="w-full h-48 object-cover" />
                        </div>
                    )}
                    <div className="mt-auto flex items-center border-t border-gray-200 pt-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-black text-lg mr-4">
                            {r.name.charAt(0)}
                        </div>
                        <div>
                            <div className="text-base font-bold text-gray-900">
                                {r.name} <span className="text-gray-500 font-normal">- {r.city}</span>
                            </div>
                            <div className="text-green-600 text-xs font-bold uppercase mt-1 flex items-center">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> Acquisto Verificato
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        
        <div className="text-center mt-10 md:mt-12">
             <a href="#order-form" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-black text-xl md:text-2xl py-5 px-10 md:px-12 rounded-xl shadow-xl uppercase tracking-wide transform transition hover:scale-105">
                Unisciti a chi dorme senza dolori
             </a>
        </div>
      </div>
    </section>
  );
};

const OrderForm: React.FC<OrderFormProps> = ({ selectedSize, onSelectSize }) => {
  const [formData, setFormData] = useState({
    name: '',
    fullAddress: '',
    phone: ''
  });

  const sizesMap: Record<BedSize, string> = {
    'Singolo': '80x190',
    'Piazza e Mezza': '120x190',
    'Matrimoniale': '160x190',
    'King': '180x200'
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Grazie ${formData.name}! \nOrdine confermato: Topper ${selectedSize}.\nIndirizzo: ${formData.fullAddress}\nTelefono: ${formData.phone}\n\nPagamento alla consegna: €59,99.`);
  };

  return (
    <section id="order-form" className="py-12 px-4 bg-blue-50 border-t-4 border-blue-600">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-300">
        
        <div className="bg-red-600 p-5 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-black uppercase">MODULO D'ORDINE</h2>
            <p className="text-sm md:text-base font-bold opacity-90 mt-1">Compila per bloccare il prezzo a €59,99</p>
        </div>

        {/* 3 Steps Visual - Optimized for Mobile */}
        <div className="flex justify-between px-2 md:px-4 py-6 bg-gray-50 border-b border-gray-200 text-center">
             <div className="flex-1 px-1">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-sm font-black mb-2 shadow-sm">1</div>
                <span className="text-xs md:text-sm font-bold text-gray-800 uppercase block leading-tight">Compila</span>
             </div>
             <div className="flex-1 px-1 border-l border-gray-200">
                <div className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center mx-auto text-sm font-black mb-2 shadow-sm">2</div>
                <span className="text-xs md:text-sm font-bold text-gray-500 uppercase block leading-tight">Conferma</span>
             </div>
             <div className="flex-1 px-1 border-l border-gray-200">
                <div className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center mx-auto text-sm font-black mb-2 shadow-sm">3</div>
                <span className="text-xs md:text-sm font-bold text-gray-500 uppercase block leading-tight">Paga a casa</span>
             </div>
        </div>

        <form onSubmit={handleSubmit} className="p-5 md:p-8 space-y-6">
            
            {/* Size Confirmation inside Form */}
            <div className="bg-yellow-50 border-2 border-yellow-200 p-4 md:p-5 rounded-lg mb-4 shadow-sm">
                <label className="block text-sm font-black text-gray-800 uppercase mb-3">Conferma la Misura:</label>
                <div className="flex flex-wrap gap-2">
                    {(Object.keys(sizesMap) as BedSize[]).map((size) => (
                        <button
                            type="button"
                            key={size}
                            onClick={() => onSelectSize(size)}
                            className={`text-sm font-bold py-3 px-3 rounded border transition-colors flex-grow md:flex-grow-0 text-center ${
                                selectedSize === size
                                ? 'bg-blue-600 text-white border-blue-600 ring-2 ring-blue-200 shadow-md'
                                : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100'
                            }`}
                        >
                            {size} <span className="opacity-80 text-xs block font-normal mt-0.5">{sizesMap[size]}</span>
                        </button>
                    ))}
                </div>
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-yellow-200">
                    <span className="text-sm font-bold text-gray-600">Misura scelta: <strong className="text-gray-900 block md:inline">{selectedSize}</strong></span>
                    <span className="text-green-700 font-black text-xl">€59,99</span>
                </div>
            </div>

            <div>
                <label className="block text-base font-bold text-gray-900 mb-2">Nome e Cognome*</label>
                <input required name="name" onChange={handleChange} type="text" placeholder="Es. Mario Rossi" className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none bg-gray-50 font-medium text-lg shadow-sm placeholder-gray-400" />
            </div>

            <div>
                <label className="block text-base font-bold text-gray-900 mb-2">Indirizzo Completo (Via, Civico, Città, CAP)*</label>
                <input required name="fullAddress" onChange={handleChange} type="text" placeholder="Es. Via Roma 10, Milano, 20100" className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none bg-gray-50 font-medium text-lg shadow-sm placeholder-gray-400" />
            </div>

            <div>
                <label className="block text-base font-bold text-gray-900 mb-2 text-red-700">Numero di Telefono*</label>
                <input required name="phone" onChange={handleChange} type="tel" placeholder="Es. 333 1234567" className="w-full p-4 border-2 border-yellow-400 bg-yellow-50 rounded-lg focus:border-blue-500 outline-none font-bold text-xl text-gray-900 shadow-sm placeholder-gray-400" />
                <p className="text-xs text-gray-500 mt-2 font-medium">Il corriere ti chiamerà a questo numero per la consegna.</p>
            </div>

            <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-black text-xl md:text-3xl py-5 rounded-xl shadow-xl mt-6 border-b-8 border-green-800 transform transition active:scale-95 uppercase flex items-center justify-center group">
                CONFERMA ORDINE <Lock className="ml-3 w-6 h-6 md:w-8 md:h-8 opacity-90 group-hover:opacity-100"/>
            </button>
            
            <p className="text-center text-xs md:text-sm text-gray-500 font-semibold mt-4">
                Cliccando confermi l'acquisto. Pagherai in contanti al corriere.
            </p>

            <div className="flex justify-center gap-2 md:gap-4 pt-6 border-t border-gray-100 flex-wrap">
                <div className="flex items-center text-xs md:text-sm text-gray-600 font-bold"><ShieldCheck className="w-4 h-4 md:w-5 md:h-5 mr-1 text-blue-600"/> Dati Sicuri</div>
                <div className="flex items-center text-xs md:text-sm text-gray-600 font-bold"><Truck className="w-4 h-4 md:w-5 md:h-5 mr-1 text-green-600"/> Spedizione Rapida</div>
                <div className="flex items-center text-xs md:text-sm text-gray-600 font-bold"><Lock className="w-4 h-4 md:w-5 md:h-5 mr-1 text-gray-600"/> No Carta</div>
            </div>

        </form>
      </div>
    </section>
  );
};

const FAQ: React.FC = () => {
  const faqs: FaqItem[] = [
    { question: "Ho l'ernia al disco / sciatica, può aiutarmi?", answer: "Sì, è stato progettato appositamente per chi soffre di patologie alla colonna. La struttura in Memory Foam HD accoglie le curve della schiena riducendo la compressione sui dischi vertebrali e alleviando l'infiammazione del nervo sciatico." },
    { question: "Perché tutte le misure costano uguali? Dov'è il trucco?", answer: "Nessun trucco. Per liberare rapidamente il magazzino e far spazio ai nuovi arrivi, abbiamo deciso di applicare il prezzo base (quello del Singolo) a tutte le misure, inclusi i Matrimoniali e i King Size. È un vantaggio economico per il cliente fino ad esaurimento scorte." },
    { question: "È troppo morbido? Ho paura di sprofondare.", answer: "Assolutamente no. Usiamo un Memory ad Alta Densità che offre un 'sostegno progressivo'. Accoglie il corpo ma sostiene il peso in modo deciso, mantenendo la colonna dritta. Non è la classica gommapiuma molle." },
    { question: "Aiuta anche per la cervicale?", answer: "Certamente. Allineando correttamente la colonna vertebrale dalle spalle al bacino, permette anche al tratto cervicale di rilassarsi, riducendo le tensioni al collo e i mal di testa al risveglio." },
    { question: "Fa sudare d'estate?", answer: "No. La superficie 'bugnata' (a onde) non serve solo per il massaggio, ma crea canali d'aria che distanziano il corpo dal materiale. L'aria circola liberamente, disperdendo umidità e calore." },
    { question: "Va bene per il mio materasso vecchio?", answer: "È la soluzione ideale. Il topper corregge i difetti del vecchio materasso (buchi, molle che pungono, superficie dura), ripristinando un piano di riposo ortopedico senza dover comprare un materasso nuovo." },
    { question: "Posso pagare alla consegna?", answer: "Sì, offriamo il pagamento in contanti al corriere (Contrassegno) gratuitamente, per darti la massima sicurezza e tranquillità nell'acquisto." },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50 max-w-4xl mx-auto">
      <h3 className="text-3xl font-black text-center text-gray-900 mb-10 flex items-center justify-center uppercase">
        <HelpCircle className="mr-3 w-8 h-8 text-blue-600" /> Domande Frequenti
      </h3>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
            <details key={idx} className="group bg-white border-2 border-gray-200 rounded-xl open:ring-4 open:ring-blue-50 transition-all">
                <summary className="flex cursor-pointer list-none items-center justify-between p-6 font-bold text-gray-900 text-lg md:text-xl hover:bg-gray-50">
                    <div className="flex items-center">
                        <Activity className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" />
                        {faq.question}
                    </div>
                    <span className="transition-transform duration-300 group-open:rotate-180">
                        <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-gray-600"/>
                    </span>
                </summary>
                <div className="px-6 pb-6 text-gray-700 text-lg leading-relaxed border-t border-gray-100 pt-4 pl-14 font-medium">
                    {faq.answer}
                </div>
            </details>
        ))}
      </div>
    </section>
  );
};

// --- MAIN PAGE COMPONENT ---

export default function LandingPage() {
  const [selectedSize, setSelectedSize] = useState<BedSize>('Matrimoniale');

  return (
    <div className="min-h-screen bg-gray-100 font-sans scroll-smooth text-gray-900">
      <Hero selectedSize={selectedSize} onSelectSize={setSelectedSize} />
      <ProblemSolution />
      <Mechanism />
      <BenefitsList />
      <Installation />
      <Comparison />
      <Unboxing />
      <Reviews />
      <OrderForm selectedSize={selectedSize} onSelectSize={setSelectedSize} />
      <FAQ />
    </div>
  );
}