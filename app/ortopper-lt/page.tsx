"use client";

import React, { useState, useEffect, useRef } from 'react';
import {
  Truck, ShieldCheck, CheckCircle2, ChevronLeft, ChevronRight,
  Sparkles, Info, Bone, Activity, Zap, BedDouble,
  UserCheck, Brain, Anchor, BadgeCheck, X, Check,
  ArrowRight, Package, Quote, Star, HelpCircle, ChevronDown, Lock
} from 'lucide-react';

// --- TYPES ---
type BedSize = 'Viengulė' | 'Pusantrinė' | 'Dvigulė' | 'King';

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

// --- CONSTANTS ---
const PRICE = 69;
const PRICE_OLD = 138; // -50%
const CURRENCY = '€';

// Network config for LT
const NETWORK_CONFIG = {
  uid: '0191b25c-22d2-7f55-9d9b-79b67cebbff3',
  key: 'e0fe8e75c501eccab21f8d',
  offer: '3041',
  lp: '3075',
};

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideData.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slideData.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slideData.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slideData.length - 1 : prev - 1));

  const sizesMap: Record<BedSize, string> = {
    'Viengulė': '80x190 cm',
    'Pusantrinė': '120x190 cm',
    'Dvigulė': '160x190 cm',
    'King': '180x200 cm'
  };

  return (
    <section className="w-full bg-white pb-8 pt-2 px-3 md:px-4 border-b-8 border-blue-600 overflow-hidden">
      <div className="bg-yellow-300 text-center py-3 px-2 mb-6 -mx-3 md:-mx-4 shadow-sm border-b border-yellow-400">
        <p className="text-sm md:text-xl font-black text-red-700 uppercase tracking-wide animate-pulse leading-tight">
          ⚠️ DĖMESIO: „Sveiko stuburo" pasiūlymas baigiasi vidurnaktį
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-xs md:text-lg font-black uppercase tracking-widest mb-4 border border-blue-200 shadow-sm">
            Sertifikuota Memory Foam HD technologija
          </div>
          <h1 className="text-3xl md:text-6xl font-black text-gray-900 leading-tight uppercase mb-4 md:mb-6">
            Paverskite savo lovą <br className="hidden md:block" />
            <span className="text-white bg-blue-600 px-3 py-1 rounded shadow-md transform -skew-x-6 inline-block mt-1 md:mt-0">ORTOPEDINE SISTEMA</span>
          </h1>
          <p className="text-lg md:text-3xl font-bold text-gray-600 leading-snug max-w-5xl mx-auto px-2">
            Vienintelis antčiužinis su <span className="text-blue-600 underline decoration-4 decoration-blue-200">masažinėmis bangomis</span>, kuris dekompresuoja stuburą ir <span className="text-white bg-red-600 px-2 rounded-sm whitespace-nowrap">MAŽINA SKAUSMĄ</span> miego metu.
          </p>
        </div>

        {/* MOBILE LAYOUT */}
        <div className="lg:hidden flex flex-col gap-8">
          <div>
            <div className="relative w-full aspect-square bg-gray-100 rounded-2xl overflow-hidden border-4 border-gray-100 shadow-xl group">
              <div className="absolute top-4 left-4 bg-red-600 text-white font-black px-4 py-2 text-sm z-20 rounded shadow-lg uppercase">
                  Stop nugaros skausmui
              </div>
              <div className="w-full h-full relative">
                  <img src={slideData[currentSlide].img} alt="Ortopedinis antčiužinis" className="w-full h-full object-cover transition-opacity duration-500" />
                  <button onClick={(e) => {e.preventDefault(); prevSlide()}} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white text-gray-900 z-10">
                      <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button onClick={(e) => {e.preventDefault(); nextSlide()}} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white text-gray-900 z-10">
                      <ChevronRight className="w-6 h-6" />
                  </button>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-3">
              {slideData.map((slide, index) => (
                <button key={index} onClick={() => setCurrentSlide(index)} className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${currentSlide === index ? 'border-blue-600 ring-2 ring-blue-200 scale-105' : 'border-gray-200 opacity-70 hover:opacity-100'}`}>
                  <img src={slide.img} alt={`Miniatiūra ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4 px-1">
            <div className="flex items-start bg-blue-50 p-4 rounded-xl border border-blue-100 shadow-sm">
                <CheckCircle2 className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                    <h4 className="font-black text-gray-900 text-lg uppercase mb-1 leading-none">STUBURO IŠLYGINIMAS</h4>
                    <p className="text-base text-gray-800 leading-snug mt-1">Išlaiko kaklą, nugarą ir dubens sritį natūralioje ašyje. <span className="bg-yellow-200 px-1 font-bold">Nebėra sustingusių rytų.</span></p>
                </div>
            </div>
            <div className="flex items-start bg-blue-50 p-4 rounded-xl border border-blue-100 shadow-sm">
                <CheckCircle2 className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                    <h4 className="font-black text-gray-900 text-lg uppercase mb-1 leading-none">„WAVE" MASAŽAS</h4>
                    <p className="text-base text-gray-800 leading-snug mt-1">Banguotas paviršius atgaivina kraujotaką ir sumažina <span className="font-bold text-red-600">naktinį tirpimą.</span></p>
                </div>
            </div>
            <div className="flex items-start bg-blue-50 p-4 rounded-xl border border-blue-100 shadow-sm">
                <CheckCircle2 className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                    <h4 className="font-black text-gray-900 text-lg uppercase mb-1 leading-none">SPAUDIMO MAŽINIMAS (7CM)</h4>
                    <p className="text-base text-gray-800 leading-snug mt-1">Struktūra <strong>Memory HD + HR</strong> (7cm) priima pečius ir klubus be įdubimo.</p>
                </div>
            </div>
            <div className="flex items-start bg-blue-50 p-4 rounded-xl border border-blue-100 shadow-sm">
                <CheckCircle2 className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                    <h4 className="font-black text-gray-900 text-lg uppercase mb-1 leading-none">MAKSIMALI HIGIENA</h4>
                    <p className="text-base text-gray-800 leading-snug mt-1">Užvalkalas <strong>Aloe Vera su užtrauktuku</strong> skalbimui + šoninis <strong>3D Mesh tinklelis</strong> nuo prakaitavimo.</p>
                </div>
            </div>
            <div className="flex items-start bg-blue-50 p-4 rounded-xl border border-blue-100 shadow-sm">
                <Anchor className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                    <h4 className="font-black text-gray-900 text-lg uppercase mb-1 leading-none">VISIŠKAS STABILUMAS</h4>
                    <p className="text-base text-gray-800 leading-snug mt-1">Neslystantis pagrindas + <strong>4 plačios sustiprintos gumytės</strong>. <span className="bg-yellow-200 px-1 font-bold">Nejuda nė milimetro.</span></p>
                </div>
            </div>
            <div className="flex items-start bg-blue-50 p-4 rounded-xl border border-blue-100 shadow-sm">
                <Sparkles className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                    <h4 className="font-black text-gray-900 text-lg uppercase mb-1 leading-none">SUTAUPYKITE 500€</h4>
                    <p className="text-base text-gray-800 leading-snug mt-1">Nereikia keisti čiužinio. <span className="bg-yellow-200 px-1 font-bold">Atnaujinkite seną lovą</span> ir padarykite ją kaip naują.</p>
                </div>
            </div>
          </div>

          <div className="w-full bg-white border-4 border-blue-600 rounded-3xl p-5 shadow-2xl relative mt-4">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-[90%] text-center bg-red-600 text-white font-black px-4 py-2 uppercase tracking-widest rounded-lg shadow-lg text-sm animate-pulse border-2 border-white z-30">
                Sandėlio išpardavimas
            </div>
            <div className="text-center mt-6 mb-6">
                <p className="text-gray-500 font-bold text-base mb-1 uppercase tracking-wide">Katalogo kaina</p>
                <div className="flex items-center justify-center gap-2">
                    <span className="text-gray-400 line-through text-3xl font-bold">{PRICE_OLD}{CURRENCY}</span>
                    <span className="text-7xl font-black text-gray-900 tracking-tighter">{PRICE}</span>
                    <span className="text-lg font-bold text-gray-900 self-end mb-4">{CURRENCY}</span>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-3 text-left shadow-sm">
                    <div className="flex items-center text-blue-800 font-black text-xs uppercase mb-1">
                        <Info className="w-4 h-4 mr-1" /> Kodėl visi dydžiai kainuoja vienodai?
                    </div>
                    <p className="text-xs text-gray-700 leading-tight">
                        Norėdami atlaisvinti sandėlio vietą, <strong>sumažinome didelių dydžių kainas</strong> (King/Dvigulė) iki bazinės Viengulės kainos.
                        <br/><span className="text-red-600 font-bold">Pasinaudokite – mokate už mažą, gaunat didelį!</span>
                    </p>
                </div>
            </div>
            <div className="mb-6">
                <p className="text-center text-base font-black text-gray-800 mb-4 uppercase flex items-center justify-center">
                    <span className="w-3 h-3 bg-blue-600 rounded-full mr-2"></span> Pasirinkite savo dydį
                </p>
                <div className="grid grid-cols-2 gap-2">
                    {(Object.keys(sizesMap) as BedSize[]).map((size) => (
                        <button key={size} onClick={() => onSelectSize(size)} className={`py-3 px-1 rounded-xl border-2 transition-all shadow-sm flex flex-col items-center justify-center ${selectedSize === size ? 'bg-blue-900 border-blue-900 text-white ring-2 ring-blue-200 scale-[1.02] z-10' : 'bg-white border-gray-200 text-gray-600 hover:border-blue-400 hover:text-blue-600'}`}>
                            <span className="text-sm font-black uppercase leading-none mb-1 text-center">{size}</span>
                            <span className="text-[10px] font-bold opacity-80">{sizesMap[size]}</span>
                        </button>
                    ))}
                </div>
            </div>
            <a href="#order-form" className="block w-full bg-green-600 hover:bg-green-700 text-white text-center font-black text-2xl py-5 rounded-2xl shadow-xl border-b-8 border-green-800 uppercase transform transition active:scale-95 group leading-none">
                NORIU JAUSTIS GERAI
                <span className="block text-xs font-bold text-green-100 mt-2 normal-case opacity-95 group-hover:text-white">Užsakykite dabar, sumokėkite kurjeriui</span>
            </a>
            <div className="mt-6 pt-5 border-t border-gray-100 grid grid-cols-2 gap-3 text-sm font-bold text-gray-600 text-center">
                <div className="flex items-center justify-center bg-gray-50 py-2 rounded border border-gray-100"><Truck className="w-5 h-5 mr-2 text-blue-600"/> Pristatymas 24-48h</div>
                <div className="flex items-center justify-center bg-gray-50 py-2 rounded border border-gray-100"><ShieldCheck className="w-5 h-5 mr-2 text-blue-600"/> 2 metų garantija</div>
            </div>
          </div>
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="hidden lg:block">
          <div className="flex flex-row gap-12 items-start mb-10">
            <div className="w-1/2">
              <div className="relative w-full aspect-square bg-gray-100 rounded-3xl overflow-hidden border-4 border-gray-100 shadow-xl group">
                <div className="absolute top-6 left-6 bg-red-600 text-white font-black px-6 py-3 text-xl z-20 rounded shadow-lg uppercase">Stop nugaros skausmui</div>
                <div className="w-full h-full relative">
                    <img src={slideData[currentSlide].img} alt="Ortopedinis antčiužinis" className="w-full h-full object-cover transition-opacity duration-500" />
                    <button onClick={(e) => {e.preventDefault(); prevSlide()}} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 p-4 rounded-full shadow-lg hover:bg-white text-gray-900 z-10"><ChevronLeft className="w-8 h-8" /></button>
                    <button onClick={(e) => {e.preventDefault(); nextSlide()}} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 p-4 rounded-full shadow-lg hover:bg-white text-gray-900 z-10"><ChevronRight className="w-8 h-8" /></button>
                </div>
              </div>
              <div className="flex justify-center gap-3 mt-4">
                {slideData.map((slide, index) => (
                  <button key={index} onClick={() => setCurrentSlide(index)} className={`w-20 h-20 rounded-xl overflow-hidden border-3 transition-all ${currentSlide === index ? 'border-blue-600 ring-2 ring-blue-200 scale-105 shadow-lg' : 'border-gray-200 opacity-60 hover:opacity-100 hover:border-gray-300'}`}>
                    <img src={slide.img} alt={`Miniatiūra ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
            <div className="w-1/2 space-y-4">
              <div className="flex items-start bg-blue-50 p-5 rounded-xl border border-blue-100 shadow-sm">
                  <CheckCircle2 className="w-10 h-10 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                      <h4 className="font-black text-gray-900 text-2xl uppercase mb-1 leading-none">STUBURO IŠLYGINIMAS</h4>
                      <p className="text-xl text-gray-800 leading-snug mt-1">Išlaiko kaklą, nugarą ir dubens sritį natūralioje ašyje. <span className="bg-yellow-200 px-1 font-bold">Nebėra sustingusių rytų.</span></p>
                  </div>
              </div>
              <div className="flex items-start bg-blue-50 p-5 rounded-xl border border-blue-100 shadow-sm">
                  <CheckCircle2 className="w-10 h-10 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                      <h4 className="font-black text-gray-900 text-2xl uppercase mb-1 leading-none">„WAVE" MASAŽAS</h4>
                      <p className="text-xl text-gray-800 leading-snug mt-1">Banguotas paviršius atgaivina kraujotaką ir sumažina <span className="font-bold text-red-600">naktinį tirpimą.</span></p>
                  </div>
              </div>
              <div className="flex items-start bg-blue-50 p-5 rounded-xl border border-blue-100 shadow-sm">
                  <CheckCircle2 className="w-10 h-10 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                      <h4 className="font-black text-gray-900 text-2xl uppercase mb-1 leading-none">SPAUDIMO MAŽINIMAS (7CM)</h4>
                      <p className="text-xl text-gray-800 leading-snug mt-1">Struktūra <strong>Memory HD + HR</strong> (7cm) priima pečius ir klubus be įdubimo.</p>
                  </div>
              </div>
              <div className="flex items-start bg-blue-50 p-5 rounded-xl border border-blue-100 shadow-sm">
                  <CheckCircle2 className="w-10 h-10 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                      <h4 className="font-black text-gray-900 text-2xl uppercase mb-1 leading-none">MAKSIMALI HIGIENA</h4>
                      <p className="text-xl text-gray-800 leading-snug mt-1">Užvalkalas <strong>Aloe Vera su užtrauktuku</strong> skalbimui + šoninis <strong>3D Mesh tinklelis</strong> nuo prakaitavimo.</p>
                  </div>
              </div>
              <div className="flex items-start bg-blue-50 p-5 rounded-xl border border-blue-100 shadow-sm">
                  <Anchor className="w-10 h-10 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                      <h4 className="font-black text-gray-900 text-2xl uppercase mb-1 leading-none">VISIŠKAS STABILUMAS</h4>
                      <p className="text-xl text-gray-800 leading-snug mt-1">Neslystantis pagrindas + <strong>4 plačios sustiprintos gumytės</strong>. <span className="bg-yellow-200 px-1 font-bold">Nejuda nė milimetro.</span></p>
                  </div>
              </div>
              <div className="flex items-start bg-blue-50 p-5 rounded-xl border border-blue-100 shadow-sm">
                  <Sparkles className="w-10 h-10 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                      <h4 className="font-black text-gray-900 text-2xl uppercase mb-1 leading-none">SUTAUPYKITE 500€</h4>
                      <p className="text-xl text-gray-800 leading-snug mt-1">Nereikia keisti čiužinio. <span className="bg-yellow-200 px-1 font-bold">Atnaujinkite seną lovą</span> ir padarykite ją kaip naują.</p>
                  </div>
              </div>
            </div>
          </div>

          <div className="w-full bg-white border-4 border-blue-600 rounded-3xl p-8 shadow-2xl relative">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-center bg-red-600 text-white font-black px-6 py-2 uppercase tracking-widest rounded-lg shadow-lg text-lg animate-pulse border-2 border-white z-30">Sandėlio išpardavimas</div>
            <div className="flex flex-row items-center justify-between gap-8 mt-4">
              <div className="flex-1">
                <p className="text-gray-500 font-bold text-lg mb-1 uppercase tracking-wide">Katalogo kaina</p>
                <div className="flex items-center gap-4">
                    <span className="text-gray-400 line-through text-4xl font-bold">{PRICE_OLD}{CURRENCY}</span>
                    <span className="text-8xl font-black text-gray-900 tracking-tighter">{PRICE}</span>
                    <span className="text-xl font-bold text-gray-900 self-end mb-4">{CURRENCY}</span>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-3 text-left shadow-sm max-w-md">
                    <div className="flex items-center text-blue-800 font-black text-sm uppercase mb-1"><Info className="w-4 h-4 mr-1" /> Kodėl visi dydžiai kainuoja vienodai?</div>
                    <p className="text-sm text-gray-700 leading-tight">Norėdami atlaisvinti sandėlio vietą, <strong>sumažinome didelių dydžių kainas</strong>.<span className="text-red-600 font-bold"> Pasinaudokite – mokate už mažą, gaunat didelį!</span></p>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-center text-lg font-black text-gray-800 mb-4 uppercase flex items-center justify-center"><span className="w-4 h-4 bg-blue-600 rounded-full mr-2"></span> Pasirinkite savo dydį</p>
                <div className="grid grid-cols-2 gap-3">
                    {(Object.keys(sizesMap) as BedSize[]).map((size) => (
                        <button key={size} onClick={() => onSelectSize(size)} className={`py-3 px-1 rounded-xl border-2 transition-all shadow-sm flex flex-col items-center justify-center ${selectedSize === size ? 'bg-blue-900 border-blue-900 text-white ring-4 ring-blue-200 scale-[1.02] z-10' : 'bg-white border-gray-200 text-gray-600 hover:border-blue-400 hover:text-blue-600'}`}>
                            <span className="text-lg font-black uppercase leading-none mb-1 text-center">{size}</span>
                            <span className="text-sm font-bold opacity-80">{sizesMap[size]}</span>
                        </button>
                    ))}
                </div>
              </div>
              <div className="flex-1 flex flex-col">
                <a href="#order-form" className="block w-full bg-green-600 hover:bg-green-700 text-white text-center font-black text-3xl py-6 rounded-2xl shadow-xl border-b-8 border-green-800 uppercase transform transition active:scale-95 group leading-none">
                    NORIU JAUSTIS GERAI
                    <span className="block text-base font-bold text-green-100 mt-2 normal-case opacity-95 group-hover:text-white">Užsakykite dabar, sumokėkite kurjeriui</span>
                </a>
                <div className="mt-4 grid grid-cols-2 gap-3 text-base font-bold text-gray-600 text-center">
                    <div className="flex items-center justify-center bg-gray-50 py-3 rounded border border-gray-100"><Truck className="w-6 h-6 mr-2 text-blue-600"/> Pristatymas 24-48h</div>
                    <div className="flex items-center justify-center bg-gray-50 py-3 rounded border border-gray-100"><ShieldCheck className="w-6 h-6 mr-2 text-blue-600"/> 2 metų garantija</div>
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
          Ar jūsų čiužinys <br className="md:hidden"/> <span className="text-red-600 underline decoration-4 decoration-yellow-400">griauna jūsų stuburą?</span>
        </h2>
        <p className="text-center text-gray-700 font-bold text-lg md:text-2xl mb-12 max-w-3xl mx-auto">
            Jei kenčiate nuo bet kurios iš šių problemų, kaltas paviršius, ant kurio miegate.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-red-400 transition-colors">
                <div className="bg-red-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-red-100"><Bone className="w-10 h-10 text-red-600" /></div>
                <h3 className="font-black text-xl text-gray-900 mb-2 uppercase">Juosmens skausmas</h3>
                <p className="text-base text-gray-700 font-medium leading-relaxed">Pabundate su skaudančia apatine nugaros dalimi, nes čiužinys <span className="font-bold bg-yellow-100">nepalako natūralaus išlinkimo.</span></p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-red-400 transition-colors">
                <div className="bg-red-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-red-100"><Activity className="w-10 h-10 text-red-600" /></div>
                <h3 className="font-black text-xl text-gray-900 mb-2 uppercase">Kaklo sustingimas</h3>
                <p className="text-base text-gray-700 font-medium leading-relaxed">Sustingęs kaklas ryte? Tai reiškia, kad pečiai ir galva <span className="font-bold bg-yellow-100">nėra išlyginti</span> miego metu.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-red-400 transition-colors">
                <div className="bg-red-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-red-100"><Zap className="w-10 h-10 text-red-600" /></div>
                <h3 className="font-black text-xl text-gray-900 mb-2 uppercase">Tirpimas</h3>
                <p className="text-base text-gray-700 font-medium leading-relaxed">Pabundate su nutirpusiomis rankomis ar kojomis? Čiužinys <span className="font-bold bg-yellow-100">blokuoja kraujotaką.</span></p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-red-400 transition-colors">
                <div className="bg-red-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-red-100"><BedDouble className="w-10 h-10 text-red-600" /></div>
                <h3 className="font-black text-xl text-gray-900 mb-2 uppercase">Nerimas</h3>
                <p className="text-base text-gray-700 font-medium leading-relaxed">Vartotės ieškodami patogios pozicijos? Jūsų kūnas kovoja dėl komforto visą naktį.</p>
            </div>
        </div>
        <div className="text-center mt-12 p-6 md:p-8 bg-blue-50 rounded-2xl border-2 border-blue-100 max-w-3xl mx-auto">
            <p className="text-xl md:text-3xl font-black text-blue-900 uppercase mb-3 leading-tight">SPRENDIMAS – NE 800€ ČIUŽINYS</p>
            <p className="text-gray-800 text-lg md:text-xl font-medium">Jums reikia korekcinio palaikymo, kuris prisitaikys prie jūsų. <br className="hidden md:block"/><span className="font-bold text-blue-700 bg-white px-1">Ortopedinis antčiužinis</span> daro būtent tai.</p>
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
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase mb-4 leading-tight">TECHNOLOGIJA <span className="text-blue-600">3 ORTOPEDINIAI LYGIAI</span></h2>
            <p className="text-gray-600 font-bold text-lg md:text-2xl max-w-4xl mx-auto">Gero miego mokslas 3 pagrindinėse fazėse.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 group hover:shadow-2xl transition-shadow flex flex-col">
                <div className="aspect-square w-full relative">
                    <img src="/images/ortopper-img/decompressione-vertebrale-opt.gif" alt="Stuburo dekompresija" className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white font-black w-12 h-12 flex items-center justify-center rounded-full text-2xl shadow-lg border-2 border-white">1</div>
                </div>
                <div className="p-6 md:p-8 flex-1">
                    <h4 className="font-black text-2xl text-gray-900 uppercase mb-3 md:mb-4">Stuburo dekompresija</h4>
                    <p className="text-gray-700 leading-relaxed text-lg md:text-xl font-medium">Viskoelastinė medžiaga milimetrų tikslumu prisitaiko prie kūno, užpildydama tuščias erdves (juosmens sritis). Leidžia stuburui ištiest ir diskams <span className="bg-yellow-100 font-bold px-1 text-gray-900 border-b-2 border-yellow-300">rehidratuotis</span> naktį.</p>
                </div>
            </div>
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 group hover:shadow-2xl transition-shadow flex flex-col">
                <div className="aspect-square w-full relative">
                    <img src="/images/ortopper-img/profilo-bugnato-wave-opt.gif" alt="Banginis profilis Wave" className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white font-black w-12 h-12 flex items-center justify-center rounded-full text-2xl shadow-lg border-2 border-white">2</div>
                </div>
                <div className="p-6 md:p-8 flex-1">
                    <h4 className="font-black text-2xl text-gray-900 uppercase mb-3 md:mb-4">Banginis profilis „Wave"</h4>
                    <p className="text-gray-700 leading-relaxed text-lg md:text-xl font-medium">Speciali banguota apdaila sukuria <span className="bg-yellow-100 font-bold px-1 text-gray-900 border-b-2 border-yellow-300">pasyvų mikro-masažą</span> su kiekvienu judesiu. Stimuliuoja kapiliarinę mikrocirkuliaciją, mažindama patinimus ir vandens susilaikymą.</p>
                </div>
            </div>
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 group hover:shadow-2xl transition-shadow flex flex-col">
                <div className="aspect-square w-full relative">
                    <img src="/images/ortopper-img/zero-punti-pressione-opt.gif" alt="Nulis spaudimo taškų" className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white font-black w-12 h-12 flex items-center justify-center rounded-full text-2xl shadow-lg border-2 border-white">3</div>
                </div>
                <div className="p-6 md:p-8 flex-1">
                    <h4 className="font-black text-2xl text-gray-900 uppercase mb-3 md:mb-4">Nulis spaudimo taškų</h4>
                    <p className="text-gray-700 leading-relaxed text-lg md:text-xl font-medium">Tolygiai paskirstant svorį per <span className="bg-yellow-100 font-bold px-1 text-gray-900 border-b-2 border-yellow-300">7 CM storio</span>, pašalinami spaudimo pikai ant klubų ir pečių. Labai svarbu žmonėms su sąnarių skausmais ir tirpimu.</p>
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
        <h3 className="text-3xl md:text-5xl font-black text-center mb-10 uppercase leading-tight">Klinikinė ir techninė nauda</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-blue-800 p-6 md:p-8 rounded-3xl border-2 border-blue-700 flex items-start hover:bg-blue-700 transition-colors shadow-lg">
                <UserCheck className="w-10 h-10 md:w-12 md:h-12 text-green-400 mr-4 md:mr-5 flex-shrink-0 mt-1" />
                <div>
                    <h4 className="font-black text-xl md:text-2xl text-white mb-2 uppercase">Laikysenos korekcija</h4>
                    <p className="text-blue-50 font-medium text-lg md:text-xl leading-snug">Nesvarbu ar miegateanugaron ar ant šono, antčiužinis išlaiko natūralią ašį. Pabundate tiesūs, nereikia „traškinti" stuburo.</p>
                </div>
            </div>
            <div className="bg-blue-800 p-6 md:p-8 rounded-3xl border-2 border-blue-700 flex items-start hover:bg-blue-700 transition-colors shadow-lg">
                <Brain className="w-10 h-10 md:w-12 md:h-12 text-green-400 mr-4 md:mr-5 flex-shrink-0 mt-1" />
                <div>
                    <h4 className="font-black text-xl md:text-2xl text-white mb-2 uppercase">Šoninis 3D Mesh tinklelis</h4>
                    <p className="text-blue-50 font-medium text-lg md:text-xl leading-snug">Skirtingai nuo uždarų antčiužinių, mūsų techninis šoninis tinklelis užtikrina nuolatinį oro srautą. <span className="text-white font-bold underline decoration-green-400">Nebėra prakaitavimo.</span></p>
                </div>
            </div>
            <div className="bg-blue-800 p-6 md:p-8 rounded-3xl border-2 border-blue-700 flex items-start hover:bg-blue-700 transition-colors shadow-lg">
                <Anchor className="w-10 h-10 md:w-12 md:h-12 text-green-400 mr-4 md:mr-5 flex-shrink-0 mt-1" />
                <div>
                    <h4 className="font-black text-xl md:text-2xl text-white mb-2 uppercase">Visiškas stabilumas</h4>
                    <p className="text-blue-50 font-medium text-lg md:text-xl leading-snug">Aprūpintas <span className="font-bold text-white bg-blue-600 px-1">tikru neslystančiu pagrindu</span> ir 4 plačiomis sustiprintomis gumytėmis. Nejuda nė milimetro.</p>
                </div>
            </div>
            <div className="bg-blue-800 p-6 md:p-8 rounded-3xl border-2 border-blue-700 flex items-start hover:bg-blue-700 transition-colors shadow-lg">
                <BadgeCheck className="w-10 h-10 md:w-12 md:h-12 text-green-400 mr-4 md:mr-5 flex-shrink-0 mt-1" />
                <div>
                    <h4 className="font-black text-xl md:text-2xl text-white mb-2 uppercase">Sertifikuota higiena</h4>
                    <p className="text-blue-50 font-medium text-lg md:text-xl leading-snug">Aloe Vera užvalkalas su užtrauktuku greitam skalbimui. Antierkinis ir antialerginis medžiagos, idealios jautriems žmonėms.</p>
                </div>
            </div>
        </div>
        <div className="text-center mt-12">
             <a href="#order-form" className="inline-block bg-green-500 hover:bg-green-600 text-white font-black text-xl md:text-3xl py-5 px-10 md:py-6 md:px-16 rounded-full shadow-2xl border-b-8 border-green-700 transform transition hover:scale-105 uppercase tracking-wide">PAJUSKITE PALENGVĖJIMĄ DABAR</a>
             <p className="mt-4 text-sm md:text-lg text-blue-200 font-bold uppercase tracking-widest">14 dienų pasitenkinimo garantija arba pinigai grąžinami</p>
        </div>
      </div>
    </section>
  );
};

const Installation: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-12 uppercase">Įrengimas per 30 sekundžių</h3>
        <div className="flex flex-col md:flex-row justify-center items-start gap-10">
            <div className="flex flex-col items-center flex-1">
                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center text-3xl font-black text-blue-600 mb-4 border-4 border-blue-100 shadow-sm">1</div>
                <p className="font-black text-2xl text-gray-900 uppercase mb-2">Išvyniokite</p>
                <p className="text-lg text-gray-600 font-medium leading-snug">Atidarykite vakuuminę pakuotę ir patogiai paskleiskite ant seno čiužinio.</p>
            </div>
            <div className="hidden md:block w-16 h-2 bg-gray-100 mt-10 rounded-full"></div>
            <div className="flex flex-col items-center flex-1">
                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center text-3xl font-black text-blue-600 mb-4 border-4 border-blue-100 shadow-sm">2</div>
                <p className="font-black text-2xl text-gray-900 uppercase mb-2">Pritvirtinkite</p>
                <p className="text-lg text-gray-600 font-medium leading-snug">Užsekite 4 sustiprintas gumytes ant kampų tobulam stabilumui.</p>
            </div>
            <div className="hidden md:block w-16 h-2 bg-gray-100 mt-10 rounded-full"></div>
            <div className="flex flex-col items-center flex-1">
                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center text-3xl font-black text-blue-600 mb-4 border-4 border-blue-100 shadow-sm">3</div>
                <p className="font-black text-2xl text-gray-900 uppercase mb-2">Miegokite</p>
                <p className="text-lg text-gray-600 font-medium leading-snug">Mėgaukitės greitu komfortu ir atsisveikinkite su rytiniu skausmu.</p>
            </div>
        </div>
        <div className="mt-12 bg-yellow-50 inline-block px-6 py-4 rounded-xl border-2 border-yellow-200 text-base md:text-lg text-yellow-900 font-bold max-w-3xl">
            💡 Pastaba: Siunčiamas <span className="font-black uppercase">vakuume suvyniotas</span>. Rekomenduojame palaukti 24-48h pilnam tūrio atstatymui (7cm), bet galite naudoti jau po 4 valandų.
        </div>
      </div>
    </section>
  );
};

const Comparison: React.FC = () => {
  const features = [
    { name: "Vidinė struktūra", us: { text: "DVIGUBAS SLUOKSNIS (Memory+HR)", highlight: true }, them: "Vienas sluoksnis" },
    { name: "Bendras storis", us: { text: "7 CM TIKRI", highlight: true }, them: "3-4 CM tik" },
    { name: "Palaikymo tipas", us: { text: "Aktyvus ortopedinis", highlight: false }, them: "Pasyvus / Minkštas" },
    { name: "Poveikis stuburui", us: { text: "Dekompresija", highlight: false }, them: "Įdubimas" },
    { name: "Paviršiaus technologija", us: { text: "Masažinis banginis profilis", highlight: false }, them: "Lygus / Karštas" }
  ];

  return (
    <section className="py-12 md:py-16 px-3 md:px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl md:text-4xl font-black text-center text-gray-900 mb-10 uppercase leading-tight">Kodėl tai ne paprasta <br/>„puta"</h3>
        <div className="hidden md:block bg-white rounded-2xl shadow-xl border-2 border-gray-200 overflow-hidden">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-gray-900 text-white">
                        <th className="p-6 w-1/3 text-xl uppercase font-bold pl-8">Savybė</th>
                        <th className="p-6 w-1/3 bg-blue-600 text-xl uppercase text-center font-black border-b-8 border-blue-800 relative">MŪSŲ ANTČIUŽINIS<div className="absolute top-0 right-0 bg-yellow-400 text-black text-xs font-bold px-3 py-1 uppercase tracking-wide">Bestseleris</div></th>
                        <th className="p-6 w-1/3 bg-gray-100 text-gray-500 text-xl uppercase text-center font-bold">GENERINIAI INTERNETE</th>
                    </tr>
                </thead>
                <tbody className="text-lg font-medium">
                    {features.map((f, i) => (
                        <tr key={i} className="border-b border-gray-100 last:border-0">
                            <td className="p-6 font-bold text-gray-900">{f.name}</td>
                            <td className="p-6 text-center bg-blue-50 font-bold text-blue-900 text-xl"><div className="flex flex-col items-center gap-2"><Check className="w-8 h-8 text-green-600"/> <span className={f.us.highlight ? "bg-yellow-200 px-2 py-0.5 rounded" : ""}>{f.us.text}</span></div></td>
                            <td className="p-6 text-center text-gray-400 text-lg"><div className="flex flex-col items-center gap-2"><X className="w-6 h-6"/> {f.them}</div></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <div className="md:hidden space-y-6">
            {features.map((f, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 overflow-hidden relative">
                    <div className="bg-gray-900 text-white text-center py-3 font-black text-lg uppercase tracking-wide">{f.name}</div>
                    <div className="flex items-stretch relative">
                         <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-white border-2 border-gray-200 rounded-full w-8 h-8 flex items-center justify-center font-black text-[10px] text-gray-400 shadow-sm">VS</div>
                        <div className="flex-1 bg-blue-50 p-4 text-center border-r border-gray-100 flex flex-col items-center justify-start pt-8 pb-6">
                            <div className="absolute top-12 left-0 w-1/2 text-center"><span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">MES</span></div>
                            <div className="flex-grow flex flex-col items-center justify-center mt-2"><Check className="w-8 h-8 text-green-600 mb-2"/><span className={`text-base font-black text-blue-900 leading-tight ${f.us.highlight ? "bg-yellow-200 px-1 shadow-sm" : ""}`}>{f.us.text}</span></div>
                        </div>
                        <div className="flex-1 bg-white p-4 text-center flex flex-col items-center justify-start pt-8 pb-6">
                            <div className="absolute top-12 right-0 w-1/2 text-center"><span className="bg-gray-200 text-gray-500 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">KITI</span></div>
                            <div className="flex-grow flex flex-col items-center justify-center mt-2"><X className="w-6 h-6 text-gray-300 mb-2"/><span className="text-sm font-bold text-gray-400 leading-tight">{f.them}</span></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div className="text-center mt-12 flex justify-center items-center text-blue-700 font-bold text-lg cursor-pointer hover:underline group">
             <a href="#order-form" className="flex items-center bg-blue-50 px-6 py-3 rounded-full border border-blue-200 shadow-sm">Pasirinkite sertifikuotą kokybę <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"/></a>
        </div>
      </div>
    </section>
  );
};

const Unboxing: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-white border-t border-gray-200">
      <div className="max-w-4xl mx-auto bg-blue-50 border-4 border-blue-200 rounded-3xl p-5 md:p-10">
        <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 md:mb-8 flex items-center justify-center uppercase"><Package className="mr-3 w-8 h-8 md:w-10 md:h-10 text-blue-600" /> Ką gausite į namus</h3>
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
            <div className="w-full md:w-1/2">
                <div className="aspect-square bg-white rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden relative">
                    <img src="/images/ortopper-img/8-opt.png" alt="Pakuotės turinys antčiužinis" className="w-full h-full object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-blue-900 text-white text-xs md:text-sm p-2 md:p-3 text-center font-bold uppercase">Higieniškai supakuota vakuume</div>
                </div>
            </div>
            <div className="w-full md:w-1/2 text-left">
                <ul className="space-y-4 font-bold text-gray-900 text-lg md:text-xl">
                    <li className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-blue-100">
                        <span className="bg-blue-600 text-white rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-sm md:text-lg mr-3 flex-shrink-0 font-black mt-0.5">✓</span>
                        <span className="leading-tight">1x Ortopedinis antčiužinis (pasirinktas dydis)</span>
                    </li>
                    <li className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-blue-100">
                        <span className="bg-blue-600 text-white rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-sm md:text-lg mr-3 flex-shrink-0 font-black mt-0.5">✓</span>
                        <span className="leading-tight">1x Aloe Vera užvalkalas su užtrauktuku (jau uždėtas)</span>
                    </li>
                    <li className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-blue-100">
                        <span className="bg-blue-600 text-white rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-sm md:text-lg mr-3 flex-shrink-0 font-black mt-0.5">✓</span>
                        <span className="leading-tight">1x Vandeniui atsparus čiužinio apsaugas su gumytėmis</span>
                    </li>
                    <li className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-blue-100">
                        <span className="bg-blue-600 text-white rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-sm md:text-lg mr-3 flex-shrink-0 font-black mt-0.5">✓</span>
                        <span className="text-blue-800 uppercase leading-tight">Oficiali 2 metų garantija</span>
                    </li>
                </ul>
                <div className="mt-6 text-center md:text-left text-base md:text-lg text-blue-900 font-bold">
                    <span className="inline-block bg-blue-200 px-3 py-2 md:px-4 rounded-lg border border-blue-300 leading-tight">🚚 Nemokamas kurjerinis pristatymas 24-48h</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

const Reviews: React.FC = () => {
  const reviews: (Testimonial & { image?: string })[] = [
    { id: 1, name: "Andrius K.", city: "Vilnius", text: "Jau daugelį metų kenčiu nuo išvarža. Mano fizioterapeutas patarė pakeisti čiužinį, bet jis buvo per brangus. Su šiuo antčiužiniu išsprendžiau 90% problemos. Ryte galiu pasilenkti be skausmo. Neįtikėtina.", rating: 5 },
    { id: 2, name: "Marija V.", city: "Kaunas", text: "Turiu kaklo išvaržą, kuri sukeldavo galvos svaigimą atsibudus. Nuo tada, kai naudoju Ortopediniį antčiužinį, kaklas daug labiau atsipalaidavęs. Palaikymas yra tvirtas, bet malonus.", rating: 5 },
    { id: 3, name: "Tomas B.", city: "Klaipėda", text: "Dirbu sandėlyje ir vakarais mano nugara skauda. Šis antčiužinis tiesiog mane atjaunina. Jaučiate, kaip stuburas išsitempia, kai atsigulate. Labai greitas pristatymas.", rating: 5, image: "/images/ortopper-img/recensione-1.jpg" },
    { id: 4, name: "Kotryna M.", city: "Šiauliai", text: "Buvau skeptiška dėl 'masažinio' efekto, bet tai tiesa. Turiu kraujotakos problemų kojose ir atsibudau daug mažiau patinusi. Banguotas paviršius praleidžia orą.", rating: 5 },
    { id: 5, name: "Dr. Steponas N.", city: "Panevėžys", text: "Nupirkau jį savo pagyvenusiai mamai, kuri daug laiko praleidžia lovoje. Puikiai tinka pragulų ir spaudimo skausmų prevencijai. Audinys šviežias ir higieniškas. Rekomenduoju.", rating: 5 },
    { id: 6, name: "Barbora S.", city: "Alytus", text: "Mano čiužinys tapo viena didele duobe. Atsibusdavau su inkstų skausmu. Už 69€ išvengiau 500€ išlaidų. Dabar stuburas tiesus ir miegu 8 valandas be pertraukos.", rating: 4 },
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-black text-center text-gray-900 mb-4 uppercase leading-tight">Kasdienio sveikimo istorijos</h3>
        <p className="text-center text-gray-600 font-bold mb-10 md:mb-12 max-w-2xl mx-auto text-lg md:text-xl">Tūkstančiai lietuvių nustojo gyventi su skausmu. Štai jų tikros patirtys.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {reviews.map((r) => (
                <div key={r.id} className="bg-gray-50 p-6 md:p-8 rounded-2xl border-2 border-gray-100 shadow-sm relative hover:shadow-lg transition-shadow flex flex-col">
                    <Quote className="absolute top-4 right-4 md:top-6 md:right-6 text-gray-200 w-8 h-8 md:w-10 md:h-10 fill-current" />
                    <div className="flex text-yellow-400 mb-4">{[...Array(5)].map((_, i) => <Star key={i} className={`w-5 h-5 fill-current ${i >= r.rating ? 'text-gray-300' : ''}`} />)}</div>
                    <p className="text-gray-800 text-lg md:text-xl mb-6 font-medium leading-relaxed italic flex-grow">"{r.text}"</p>
                    {r.image && (<div className="mb-4 rounded-xl overflow-hidden border-2 border-blue-100"><img src={r.image} alt="Kliento produkto nuotrauka" className="w-full h-48 object-cover" /></div>)}
                    <div className="mt-auto flex items-center border-t border-gray-200 pt-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-black text-lg mr-4">{r.name.charAt(0)}</div>
                        <div>
                            <div className="text-base font-bold text-gray-900">{r.name} <span className="text-gray-500 font-normal">- {r.city}</span></div>
                            <div className="text-green-600 text-xs font-bold uppercase mt-1 flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> Patvirtintas pirkimas</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div className="text-center mt-10 md:mt-12">
             <a href="#order-form" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-black text-xl md:text-2xl py-5 px-10 md:px-12 rounded-xl shadow-xl uppercase tracking-wide transform transition hover:scale-105">Prisijunkite prie miegančių be skausmo</a>
        </div>
      </div>
    </section>
  );
};

const OrderForm: React.FC<OrderFormProps> = ({ selectedSize, onSelectSize }) => {
  const [formData, setFormData] = useState({ name: '', fullAddress: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const tmfpRef = useRef<HTMLInputElement>(null);

  const sizesMap: Record<BedSize, string> = {
    'Viengulė': '80x190',
    'Pusantrinė': '120x190',
    'Dvigulė': '160x190',
    'King': '180x200'
  };

  // Load Network fingerprint script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://offers.uncappednetwork.com/forms/tmfp/';
    script.crossOrigin = 'anonymous';
    script.defer = true;
    document.head.appendChild(script);
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Get UTM params from URL
    const urlParams = new URLSearchParams(window.location.search);

    // Prepare form data for Network API
    const networkFormData = new FormData();
    networkFormData.append('uid', NETWORK_CONFIG.uid);
    networkFormData.append('key', NETWORK_CONFIG.key);
    networkFormData.append('offer', NETWORK_CONFIG.offer);
    networkFormData.append('lp', NETWORK_CONFIG.lp);
    networkFormData.append('name', formData.name);
    networkFormData.append('tel', formData.phone);
    networkFormData.append('street-address', formData.fullAddress);

    // Add fingerprint if available
    const tmfpValue = tmfpRef.current?.value || '';
    if (tmfpValue) {
      networkFormData.append('tmfp', tmfpValue);
    }

    // Add UTM params if present
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'subid', 'subid2', 'subid3', 'subid4', 'pubid'].forEach(param => {
      const value = urlParams.get(param);
      if (value) networkFormData.append(param, value);
    });

    try {
      // Send to Network API
      const response = await fetch('https://offers.uncappednetwork.com/forms/api/', {
        method: 'POST',
        body: networkFormData,
      });

      const data = await response.json();
      console.log('Network API response:', data);

      // Store data for TY page
      sessionStorage.setItem('orderData', JSON.stringify({
        name: formData.name,
        phone: formData.phone,
        address: formData.fullAddress,
        size: selectedSize,
        price: PRICE,
        currency: CURRENCY,
        product: 'Ortopedinis Antčiužinis'
      }));

      // Store Enhanced Conversions data for TY page
      sessionStorage.setItem('ec_phone', formData.phone);
      sessionStorage.setItem('ec_address', formData.fullAddress);
      sessionStorage.setItem('ec_value', PRICE.toString());

      // If DOUBLE, skip Google Ads conversion pixel
      if (data.message === 'DOUBLE') {
        sessionStorage.setItem('skipConversion', 'true');
      }

      // Redirect to national TY page
      window.location.href = '/ty-lt';
    } catch (error) {
      console.error('Network API error:', error);
      // Still redirect on error, conversion will still fire
      sessionStorage.setItem('orderData', JSON.stringify({
        name: formData.name,
        phone: formData.phone,
        address: formData.fullAddress,
        size: selectedSize,
        price: PRICE,
        currency: CURRENCY,
        product: 'Ortopedinis Antčiužinis'
      }));
      sessionStorage.setItem('ec_phone', formData.phone);
      sessionStorage.setItem('ec_address', formData.fullAddress);
      sessionStorage.setItem('ec_value', PRICE.toString());
      window.location.href = '/ty-lt';
    }
  };

  return (
    <section id="order-form" className="py-12 px-4 bg-blue-50 border-t-4 border-blue-600">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-300">
        <div className="bg-red-600 p-5 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-black uppercase">UŽSAKYMO FORMA</h2>
            <p className="text-sm md:text-base font-bold opacity-90 mt-1">Užpildykite, kad užfiksuotumėte kainą {PRICE}{CURRENCY}</p>
        </div>
        <div className="flex justify-between px-2 md:px-4 py-6 bg-gray-50 border-b border-gray-200 text-center">
             <div className="flex-1 px-1">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-sm font-black mb-2 shadow-sm">1</div>
                <span className="text-xs md:text-sm font-bold text-gray-800 uppercase block leading-tight">Užpildykite</span>
             </div>
             <div className="flex-1 px-1 border-l border-gray-200">
                <div className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center mx-auto text-sm font-black mb-2 shadow-sm">2</div>
                <span className="text-xs md:text-sm font-bold text-gray-500 uppercase block leading-tight">Patvirtinkite</span>
             </div>
             <div className="flex-1 px-1 border-l border-gray-200">
                <div className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center mx-auto text-sm font-black mb-2 shadow-sm">3</div>
                <span className="text-xs md:text-sm font-bold text-gray-500 uppercase block leading-tight">Mokėkite pristatymo metu</span>
             </div>
        </div>
        <form onSubmit={handleSubmit} className="p-5 md:p-8 space-y-6">
            {/* Hidden fingerprint field for Network tracking */}
            <input type="hidden" name="tmfp" ref={tmfpRef} />
            <div className="bg-yellow-50 border-2 border-yellow-200 p-4 md:p-5 rounded-lg mb-4 shadow-sm">
                <label className="block text-sm font-black text-gray-800 uppercase mb-3">Patvirtinkite dydį:</label>
                <div className="flex flex-wrap gap-2">
                    {(Object.keys(sizesMap) as BedSize[]).map((size) => (
                        <button type="button" key={size} onClick={() => onSelectSize(size)} className={`text-sm font-bold py-3 px-3 rounded border transition-colors flex-grow md:flex-grow-0 text-center ${selectedSize === size ? 'bg-blue-600 text-white border-blue-600 ring-2 ring-blue-200 shadow-md' : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100'}`}>
                            {size} <span className="opacity-80 text-xs block font-normal mt-0.5">{sizesMap[size]}</span>
                        </button>
                    ))}
                </div>
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-yellow-200">
                    <span className="text-sm font-bold text-gray-600">Pasirinktas dydis: <strong className="text-gray-900 block md:inline">{selectedSize}</strong></span>
                    <span className="text-green-700 font-black text-xl">{PRICE}{CURRENCY}</span>
                </div>
            </div>
            <div>
                <label className="block text-base font-bold text-gray-900 mb-2">Vardas ir Pavardė*</label>
                <input required name="name" onChange={handleChange} type="text" placeholder="Pvz. Jonas Jonaitis" className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none bg-gray-50 font-medium text-lg shadow-sm placeholder-gray-400" />
            </div>
            <div>
                <label className="block text-base font-bold text-gray-900 mb-2">Pilnas Adresas (Gatvė, Nr., Miestas, Pašto kodas)*</label>
                <input required name="fullAddress" onChange={handleChange} type="text" placeholder="Pvz. Gedimino pr. 10, Vilnius, LT-01103" className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none bg-gray-50 font-medium text-lg shadow-sm placeholder-gray-400" />
            </div>
            <div>
                <label className="block text-base font-bold text-gray-900 mb-2 text-red-700">Telefono Numeris*</label>
                <input required name="phone" onChange={handleChange} type="tel" placeholder="Pvz. +370 600 12345" className="w-full p-4 border-2 border-yellow-400 bg-yellow-50 rounded-lg focus:border-blue-500 outline-none font-bold text-xl text-gray-900 shadow-sm placeholder-gray-400" />
                <p className="text-xs text-gray-500 mt-2 font-medium">Kurjeris paskambins šiuo numeriu dėl pristatymo.</p>
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-black text-xl md:text-3xl py-5 rounded-xl shadow-xl mt-6 border-b-8 border-green-800 transform transition active:scale-95 uppercase flex items-center justify-center group">
                {isSubmitting ? 'SIUNČIAMA...' : 'PATVIRTINTI UŽSAKYMĄ'} <Lock className="ml-3 w-6 h-6 md:w-8 md:h-8 opacity-90 group-hover:opacity-100"/>
            </button>
            <p className="text-center text-xs md:text-sm text-gray-500 font-semibold mt-4">Paspaudę patvirtinate pirkimą. Mokėsite grynaisiais kurjeriui.</p>
            <div className="flex justify-center gap-2 md:gap-4 pt-6 border-t border-gray-100 flex-wrap">
                <div className="flex items-center text-xs md:text-sm text-gray-600 font-bold"><ShieldCheck className="w-4 h-4 md:w-5 md:h-5 mr-1 text-blue-600"/> Saugūs duomenys</div>
                <div className="flex items-center text-xs md:text-sm text-gray-600 font-bold"><Truck className="w-4 h-4 md:w-5 md:h-5 mr-1 text-green-600"/> Greitas pristatymas</div>
                <div className="flex items-center text-xs md:text-sm text-gray-600 font-bold"><Lock className="w-4 h-4 md:w-5 md:h-5 mr-1 text-gray-600"/> Be kortelės</div>
            </div>
        </form>
      </div>
    </section>
  );
};

const FAQ: React.FC = () => {
  const faqs: FaqItem[] = [
    { question: "Turiu disko išvaržą / išsikišimą, ar gali padėti?", answer: "Taip, jis buvo specialiai sukurtas žmonėms su stuburo problemomis. Memory Foam HD struktūra priima natūralius nugaros linkius, sumažindama spaudimą disko slanksteliais ir palengvindama ischiatinio nervo uždegimą." },
    { question: "Kodėl visi dydžiai kainuoja vienodai?", answer: "Jokios paslėptos priežasties. Norėdami greitai atlaisvinti sandėlį ir padaryti vietos naujiems tiekimams, nusprendėme taikyti bazinę kainą (Viengulės) visiems dydžiams, įskaitant Dvigulius ir King Size. Tai kliento nauda, kol baigsis atsargos." },
    { question: "Ar jis per minkštas? Bijau, kad įdubu.", answer: "Absoliučiai ne. Naudojame didelio tankio Memory, kuris siūlo 'progresyvų palaikymą'. Priima kūną, bet tvirtai palaiko svorį, laikydamas stuburą tiesiai. Tai ne paprasta minkšta puta." },
    { question: "Ar padeda ir kaklui?", answer: "Žinoma. Teisingai išlyginant stuburą nuo pečių iki dubens, tai leidžia ir kaklo daliai atsipalaiduoti, sumažinant kaklo įtampą ir rytinius galvos skausmus." },
    { question: "Ar sukelia prakaitavimą vasarą?", answer: "Ne. 'Banguotas' paviršius ne tik masažuoja, bet sukuria oro kanalus, kurie atskiria kūną nuo medžiagos. Oras laisvai cirkuliuoja, pašalindamas drėgmę ir šilumą." },
    { question: "Ar tinka mano senam čiužiniui?", answer: "Tai idealu. Antčiužinis koreguoja seno čiužinio trūkumus (duobes, badančias spyruokles, kietą paviršių), atstatydamas ortopedinio miego vietą be naujo čiužinio pirkimo." },
    { question: "Ar galiu mokėti pristatymo metu?", answer: "Taip, siūlome nemokamą mokėjimą grynaisiais pristatymo metu, kad užtikrintume maksimalų saugumą ir ramybę perkant." },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50 max-w-4xl mx-auto">
      <h3 className="text-3xl font-black text-center text-gray-900 mb-10 flex items-center justify-center uppercase"><HelpCircle className="mr-3 w-8 h-8 text-blue-600" /> Dažnai Užduodami Klausimai</h3>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
            <details key={idx} className="group bg-white border-2 border-gray-200 rounded-xl open:ring-4 open:ring-blue-50 transition-all">
                <summary className="flex cursor-pointer list-none items-center justify-between p-6 font-bold text-gray-900 text-lg md:text-xl hover:bg-gray-50">
                    <div className="flex items-center"><Activity className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" />{faq.question}</div>
                    <span className="transition-transform duration-300 group-open:rotate-180"><ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-gray-600"/></span>
                </summary>
                <div className="px-6 pb-6 text-gray-700 text-lg leading-relaxed border-t border-gray-100 pt-4 pl-14 font-medium">{faq.answer}</div>
            </details>
        ))}
      </div>
    </section>
  );
};

// --- STICKY BAR COMPONENT ---
const StickyOrderBar: React.FC<{ onCtaClick: () => void }> = ({ onCtaClick }) => {
  const [timeLeft, setTimeLeft] = useState(599);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev <= 0 ? 599 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 shadow-[0_-5px_20px_rgba(0,0,0,0.15)] p-2 z-50 md:hidden pb-safe">
      <div className="flex items-center gap-2">
        <div className="flex-1 pl-1">
          <div className="text-[10px] text-red-600 font-black uppercase flex items-center mb-0.5 animate-pulse">
            ⏰ BAIGIASI UŽ: {formatTime(timeLeft)}
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-[#dc3545]">{PRICE}{CURRENCY}</span>
            <span className="text-xs text-slate-400 line-through">{PRICE_OLD}{CURRENCY}</span>
          </div>
        </div>
        <button
          onClick={onCtaClick}
          className="flex-1 bg-[#27ae60] text-white font-black text-lg py-3 px-2 rounded shadow-lg animate-pulse uppercase leading-none"
        >
          UŽSAKYTI
          <span className="block text-[10px] font-medium opacity-80 mt-1">MOKĖJIMAS PRISTATYMO METU</span>
        </button>
      </div>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
export default function LandingPage() {
  const [selectedSize, setSelectedSize] = useState<BedSize>('Dvigulė');

  const scrollToOrder = () => {
    const element = document.getElementById('order-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans scroll-smooth text-gray-900 pb-24 md:pb-0">
      {/* Network Click Pixel */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="https://offers.uncappednetwork.com/forms/api/ck/?o=3041&uid=0191b25c-22d2-7f55-9d9b-79b67cebbff3&lp=3075" style={{width:'1px',height:'1px',display:'none'}} alt="" />
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

      {/* Footer legale */}
      <div className="bg-gray-100 border-t border-gray-200 py-4 text-center">
        <p className="text-sm text-gray-600">
          <span className="font-semibold">Ortopper®</span> yra registruotas prekės ženklas, parduodamas išskirtinai per{" "}
          <span className="font-semibold">Kizbuy</span>
        </p>
      </div>

      {/* Sticky bar mobile */}
      <StickyOrderBar onCtaClick={scrollToOrder} />
    </div>
  );
}
