'use client';

import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Truck, 
  CheckCircle2, 
  Star, 
  ChevronRight, 
  ChevronLeft, 
  Clock, 
  AlertTriangle, 
  Zap, 
  Lightbulb, 
  Gift,
  Check,
  X,
  Phone,
  MapPin,
  User,
  ScanEye,
  ChevronDown,
  FileCheck,
  PackageCheck,
  Lock
} from 'lucide-react';

// --- COMPONENTS ---

// 1. TOP BAR
const TopBar = () => (
  <div className="w-full bg-slate-950 text-slate-300 py-3 md:py-4 shadow-xl border-b border-slate-900 relative">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
      
      {/* Brand / Logo */}
      <div className="flex items-center gap-3">
        <div className="bg-white/5 p-1.5 rounded border border-white/10">
          <ScanEye size={22} className="text-cyan-400" />
        </div>
        <div className="flex flex-col items-start justify-center h-full">
          <span className="text-lg font-bold tracking-wider text-white leading-none font-sans">INSPECTRA™</span>
          <span className="text-[9px] font-bold text-slate-500 tracking-[0.3em] uppercase leading-none mt-1">360 Ultra Edition</span>
        </div>
      </div>

      {/* Trust Badges - Professional & Minimal */}
      <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs font-medium text-slate-400 tracking-wide uppercase">
        <div className="flex items-center gap-2 group hover:text-white transition-colors cursor-default">
          <Truck size={14} className="text-slate-500 group-hover:text-cyan-400 transition-colors" />
          <span className="hidden sm:inline">Pagamento alla consegna</span>
          <span className="sm:hidden">Contrassegno</span>
        </div>
        
        <div className="w-px h-3 bg-slate-800 hidden md:block"></div>

        <div className="flex items-center gap-2 group hover:text-white transition-colors cursor-default">
          <Zap size={14} className="text-slate-500 group-hover:text-cyan-400 transition-colors" />
          <span>Spedizione 24/48H</span>
        </div>

        <div className="w-px h-3 bg-slate-800 hidden md:block"></div>

        <div className="flex items-center gap-2 group hover:text-white transition-colors cursor-default">
          <Shield size={14} className="text-slate-500 group-hover:text-cyan-400 transition-colors" />
          <span>Garanzia 2 Anni</span>
        </div>
      </div>
    </div>
  </div>
);

// 2. HERO SECTION
const Hero = ({ scrollToOrder }: { scrollToOrder: () => void }) => {
  const images = [
    "/images/inspectra360-img/1.webp",
    "/images/inspectra360-img/2.webp",
    "/images/inspectra360-img/3.webp",
    "/images/inspectra360-img/4.webp",
    "/images/inspectra360-img/5.webp",
    "/images/inspectra360-img/6.webp",
    "/images/inspectra360-img/7.webp",
    "/images/inspectra360-img/8.webp",
    "/images/inspectra360-img/9.webp"
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  // Bullets defined as JSX for bolding
  const bullets = [
    <span key="b1"><strong>Punta 360 “Flex-Lock”</strong>: la giri e <strong>RESTA ferma</strong> (niente tremolio).</span>,
    <span key="b2"><strong>Doppia lente</strong> (frontale + laterale): vedi anche “di lato” nelle curve.</span>,
    <span key="b3"><strong>Zoom 8x Digitale</strong>: ingrandisci i dettagli per scovare anche <strong>micro-perdite invisibili</strong>.</span>,
    <span key="b4"><strong>Schermo 5” IPS HD</strong>: grande e leggibile, anche in garage.</span>,
    <span key="b5">Cavo semirigido 5 m: <strong>lo guidi, non si “ammolla”</strong> a caso.</span>,
    <span key="b6">LED 8+1 regolabili: visione chiara nel <strong>buio totale</strong>.</span>,
    <span key="b7">Sonda sottile 6,2 mm: <strong>entra dove altri si fermano</strong>.</span>,
    <span key="b8">Impermeabile per scarichi: lavori in umido <strong>senza paura</strong>.</span>,
    <span key="b9">Registra foto/video + <strong>microSD 64GB inclusa</strong>.</span>,
    <span key="b10"><strong>Kit recupero incluso</strong>: magnete + gancio + specchio, subito pronto.</span>
  ];

  return (
    <section className="bg-white pb-8 pt-4">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Headline Group */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
            Guarda dentro tubi e motori… <br/><span className="text-[#0f766e]">senza smontare nulla.</span>
          </h2>
          
          {/* Social Proof - Amazon Style */}
          <div className="flex flex-wrap justify-center items-center gap-1.5 text-sm mb-5 leading-none">
            <div className="flex text-yellow-500">
              <Star fill="currentColor" size={16} />
              <Star fill="currentColor" size={16} />
              <Star fill="currentColor" size={16} />
              <Star fill="currentColor" size={16} />
              <Star fill="currentColor" size={16} />
            </div>
            <div className="flex items-center gap-1">
              <span className="font-bold text-slate-700">4,9</span>
              <ChevronDown size={12} className="text-slate-500" />
            </div>
            <span className="text-slate-300">|</span>
            <span className="text-[#007185] hover:text-[#c7511f] hover:underline cursor-pointer font-medium">9.724 clienti soddisfatti</span>
            <span className="text-slate-300">|</span>
            <span className="text-[#007600] font-semibold text-xs flex items-center gap-1">
              <Check size={12} strokeWidth={4} /> Acquisto verificato
            </span>
          </div>

          <p className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto">
            <strong className="text-slate-800">Punta 360 con blocco</strong> + <strong className="text-slate-800">schermo 5” IPS</strong>: vedi subito dov’è il problema. <strong className="text-[#16a34a]">Paghi solo quando arriva.</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Slider & Thumbnails */}
          <div className="flex flex-col gap-4">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-200 aspect-square group bg-slate-50">
              <img src={images[currentSlide]} alt="Inspectra 360 Demo" className="w-full h-full object-cover" />
              <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 z-10">
                <ChevronLeft size={24} />
              </button>
              <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 z-10">
                <ChevronRight size={24} />
              </button>
            </div>
            
            {/* Thumbnails */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`relative rounded-lg overflow-hidden aspect-square border-2 transition-all shrink-0 w-16 h-16 md:w-20 md:h-20 ${currentSlide === idx ? 'border-[#0f766e] ring-2 ring-[#0f766e]/30' : 'border-slate-200 opacity-70 hover:opacity-100'}`}
                >
                  <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Bullets & Offer - Centered on mobile */}
          <div className="flex flex-col gap-5 max-w-lg mx-auto md:max-w-none md:mx-0">
            <ul className="space-y-3">
              {bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700 text-sm md:text-base leading-snug">
                  <CheckCircle2 className="text-[#0f766e] min-w-[20px] mt-0.5" size={20} />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Price Card */}
            <div className="bg-slate-50 p-6 rounded-xl border-2 border-[#0f766e] shadow-lg mt-2">
              <div className="flex items-end gap-3 mb-2 justify-center md:justify-start">
                <span className="text-slate-400 text-xl font-bold line-through">€129,90</span>
                <span className="text-4xl font-black text-[#0f172a]">€49,90</span>
                <span className="bg-[#dc2626] text-white px-2 py-1 rounded text-sm font-bold animate-pulse">-62%</span>
              </div>
              <p className="text-[#dc2626] font-bold text-sm flex items-center justify-center md:justify-start gap-2 mb-4">
                <Clock size={16} /> <strong>OFFERTA IN ESAURIMENTO</strong>: disponibilità limitata oggi.
              </p>
              
              <button 
                onClick={scrollToOrder}
                className="w-full bg-[#16a34a] hover:bg-[#15803d] text-white text-xl font-bold py-4 px-6 rounded-lg shadow-[0_4px_0_rgb(21,128,61)] active:shadow-none active:translate-y-1 transition-all flex items-center justify-center gap-2"
              >
                ORDINA ORA <ChevronRight size={24} />
              </button>
              
              <p className="text-xs text-center text-slate-500 mt-3 flex flex-wrap justify-center gap-2 font-medium">
                <span>Pagamento alla consegna</span>•
                <span>Spedizione 24/48h</span>•
                <span>Garanzia 2 anni</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 3. DEMO GRID
const DemoGrid = () => {
  const cards = [
    { 
      label: "CONTROLLO", 
      title: "Punta 360 con blocco", 
      tech: "Joystick 4-way + Flex-Lock", 
      text: <span>Inquadri il punto e <strong>la punta resta ferma</strong>: non perdi la visuale nelle curve. Perfetto per tubi, scarichi e vani motore.</span>,
      video: "/images/inspectra360-img/punta-360-con-blocco.mp4"
    },
    {
      label: "VISIONE",
      title: "Doppia lente",
      tech: "Switch 1-tap",
      text: <span>Guardi <strong>davanti o di lato</strong> senza contorsioni. Vedi ostruzioni e oggetti anche sulle pareti del tubo.</span>,
      video: "/images/inspectra360-img/doppia-lente.mp4"
    },
    {
      label: "LEGGIBILITÀ",
      title: "Schermo 5'' IPS HD",
      tech: "Ampio display ad alta definizione",
      text: <span><strong>Niente app obbligatoria</strong>: accendi e vedi. Immagine grande, comoda anche senza 'smanettare'.</span>,
      img: "/images/inspectra360-img/schermo-5-ips-hd.webp"
    },
    {
      label: "PROFONDITÀ",
      title: "Cavo semirigido 5 metri",
      tech: "Guida stabile",
      text: <span>Lo spingi e lo direzioni dove serve: <strong>non si "affloscia"</strong>. Ideale per scarichi, canaline e intercapedini.</span>,
      img: "/images/inspectra360-img/cavo-semirigido-5-metri.webp"
    },
    {
      label: "BUIO ZERO",
      title: "LED 8+1 regolabili",
      tech: "Luce potente controllata",
      text: <span>Vedi dettagli nitidi anche nel <strong>nero totale</strong>. Regoli l'intensità per non 'bruciare' l'immagine.</span>,
      video: "/images/inspectra360-img/led-8-1-regolabili.mp4"
    },
    {
      label: "ACCESSO",
      title: "Sonda sottile 6,2 mm",
      tech: "Più sottile = più passaggi",
      text: <span>Entra in spazi stretti dove le sonde grandi si fermano. <strong>Perfetta per lavori di precisione</strong>.</span>,
      img: "/images/inspectra360-img/sonda-sottile-6-2-mm.webp"
    },
    {
      label: "UMIDO E CALORE",
      title: "Pronta per scarichi",
      tech: "IP67 + Resistente Alte Temp.",
      text: <span>Puoi lavorare in acqua e sporco senza paura. <strong>Resiste alle alte temperature</strong>: non si brucia nemmeno nei motori caldi.</span>,
      video: "/images/inspectra360-img/pronta-per-scarichi.mp4"
    },
    {
      label: "DETTAGLI",
      title: "Zoom 8x Digitale",
      tech: "Ingrandimento HD",
      text: <span>Ingrandisci i dettagli fino a 8 volte. <strong>Scova crepe invisibili</strong> e leggi codici seriali nascosti con precisione assoluta.</span>,
      img: "/images/inspectra360-img/zoom-8x-digitale.webp"
    },
  ];

  return (
    <section className="py-12 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl shadow-md border border-slate-100 hover:border-[#0f766e] transition-all hover:shadow-lg flex flex-col h-full text-center">
              {/* Image/Video */}
              <div className="w-full aspect-square bg-slate-200 rounded-lg mb-4 overflow-hidden border border-slate-100">
                {card.video ? (
                  <video src={card.video} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                ) : (
                  <img src={card.img} alt={card.title} loading="lazy" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                )}
              </div>
              
              <div className="text-[10px] font-bold tracking-widest text-slate-400 mb-1 uppercase">{card.label}</div>
              <h3 className="text-lg font-bold text-slate-900 mb-1 leading-tight">{card.title}</h3>
              <p className="text-xs font-bold text-[#0f766e] mb-3">{card.tech}</p>
              <p className="text-sm text-slate-600 leading-relaxed mt-auto">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 4. PROBLEM / AGITATION
const ProblemAgitate = () => (
  <section className="py-16 bg-slate-900 text-white">
    <div className="max-w-3xl mx-auto px-4 text-center">
      <div className="inline-block p-3 rounded-full bg-red-600/20 text-red-500 mb-4 animate-bounce">
        <AlertTriangle size={48} />
      </div>
      <h2 className="text-3xl font-bold mb-6">Quante volte hai perso tempo (e soldi) perché <span className="text-[#dc2626] underline decoration-red-400/50">non vedevi?</span></h2>
      <ul className="text-left space-y-4 text-lg text-slate-300 mb-8 max-w-xl mx-auto">
        <li className="flex gap-3"><X className="text-red-500 shrink-0" /> <span>Scarico che si intasa e <strong>non capisci dove</strong>?</span></li>
        <li className="flex gap-3"><X className="text-red-500 shrink-0" /> <span>Rumore in auto e l’officina ti fa <strong>‘provare’ pezzi a tentativi</strong>?</span></li>
        <li className="flex gap-3"><X className="text-red-500 shrink-0" /> <span>Devi forare il muro ma <strong>hai paura di beccare un tubo</strong> o un cavo?</span></li>
      </ul>
      <p className="text-xl font-medium text-white bg-slate-800 p-6 rounded-lg border border-slate-700 shadow-xl">
        Non è colpa tua: senza una visuale vera, vai alla cieca. <br/><strong className="text-[#dc2626]">E ogni tentativo sbagliato ti costa caro.</strong>
      </p>
    </div>
  </section>
);

// 5. SOLUTION & HOW IT WORKS
const Solution = () => (
  <section className="py-12 bg-white">
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#0f172a] mb-6">La soluzione definitiva: <span className="text-[#0f766e]">vedi, registri, risolvi.</span></h2>
        {/* Centered block for mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-lg mx-auto md:max-w-none">
          {[
            <span key="s1"><strong>Accendi e guardi</strong>: schermo grande, zero complicazioni.</span>,
            <span key="s2"><strong>Giri la punta e la blocchi</strong>: trovi il punto esatto in un attimo.</span>,
            <span key="s3"><strong>Registra e fai vedere</strong>: niente discussioni, solo prove video.</span>
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-5 bg-teal-50 rounded-lg border border-teal-100 shadow-sm text-left">
              <CheckCircle2 className="text-[#0f766e] shrink-0" size={20} />
              <span className="font-medium text-slate-800 leading-snug">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-200 pt-12">
        <h3 className="text-2xl font-bold text-center mb-8 uppercase tracking-wider text-slate-400">Come Funziona</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-lg">1</div>
            <p className="font-semibold text-lg text-slate-800">Accendi Inspectra™ 360 Ultra</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-lg">2</div>
            <p className="font-semibold text-lg text-slate-800">Inserisci la sonda nel punto da ispezionare</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-[#16a34a] text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-lg ring-4 ring-green-100">3</div>
            <p className="font-semibold text-lg text-slate-800">Orienti la punta, illumini e <strong>capisci subito il problema</strong></p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// 6. COMPARE TABLE
const CompareTable = () => (
  <section className="py-12 bg-slate-100">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Noi vs Loro: perché gli altri ti fanno perdere tempo</h2>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
        <div className="grid grid-cols-3 bg-slate-900 text-white p-4 text-sm md:text-base font-bold">
          <div className="col-span-1">Caratteristica</div>
          <div className="col-span-1 text-center text-[#0f766e]">Inspectra™ 360 Ultra</div>
          <div className="col-span-1 text-center text-slate-400">Altri / Officina</div>
        </div>
        {[
          ["Punta 360 con blocco", "Punta fissa: vai a caso"],
          ['Schermo 5" IPS HD', "Schermo piccolo o solo telefono"],
          ["Cavo semirigido 5 m", "Filo molle o troppo corto"],
          ["Doppia lente", "Una sola visuale"],
          ["LED 8+1 regolabili", "Illuminazione debole"],
          ["microSD 64GB inclusa", "Niente prove / niente registrazioni"]
        ].map((row, i) => (
          <div key={i} className={`grid grid-cols-3 p-4 border-b border-slate-100 text-xs md:text-sm items-center ${i%2===0 ? 'bg-white' : 'bg-slate-50'}`}>
            <div className="font-bold text-slate-800">{row[0].split(" vs ")[0]}</div>
            <div className="text-center font-bold text-[#16a34a] flex flex-col items-center gap-1">
              <CheckCircle2 size={18} />
              <span>{row[0]}</span>
            </div>
            <div className="text-center text-slate-500 flex flex-col items-center gap-1">
              <X size={18} />
              <span>{row[1]}</span>
            </div>
          </div>
        ))}
        <div className="p-6 text-center bg-teal-50">
          <p className="font-bold text-slate-700 text-lg">
            Strumenti professionali simili possono costare <span className="underline decoration-red-500">centinaia di euro</span>. <br/>
            Qui oggi paghi solo <span className="text-[#dc2626] text-2xl font-black">€49,90</span>.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// 7. BUNDLE
const Bundle = ({ scrollToOrder }: { scrollToOrder: () => void }) => (
  <section className="py-12 bg-white border-y-4 border-[#0f766e]">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Offerta irripetibile: dentro trovi tutto (valore reale)</h2>
      
      <div className="bg-white border-2 border-slate-200 rounded-xl p-6 md:p-8 max-w-2xl mx-auto shadow-2xl relative overflow-hidden">
        {/* Badge */}
        <div className="absolute top-0 right-0 bg-[#dc2626] text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
          Super Sconto
        </div>

        <ul className="space-y-4 mb-8">
          {[
            { name: "Endoscopio Inspectra™ 360 Ultra", val: "€129,90", bold: true },
            { name: "microSD 64GB inclusa", val: "€19,90", bold: false },
            { name: "Kit recupero: magnete + gancio + specchio", val: "€14,90", bold: false },
            { name: "Valigetta rigida antiurto", val: "€19,90", bold: false },
            { name: "Omaggio WOW: Asta telescopica magnetica PickUp", val: "€12,90", bold: true },
            { name: "Bonus digitale: Mini-corso + checklist", val: "€9,90", bold: false },
          ].map((item, i) => (
            <li key={i} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2 border-b border-slate-100 pb-3">
              <span className={`flex items-center gap-2 ${item.bold ? 'font-bold text-slate-900 text-base sm:text-lg' : 'text-slate-600 text-sm sm:text-base'}`}>
                <Gift size={18} className={`shrink-0 ${item.bold ? "text-[#16a34a]" : "text-[#0f766e]"}`} /> {item.name}
              </span>
              <span className="text-slate-400 line-through text-xs sm:text-sm whitespace-nowrap ml-6 sm:ml-0">Valore {item.val}</span>
            </li>
          ))}
        </ul>

        <div className="text-center">
          <p className="text-slate-500 mb-2 font-medium">Totale valore commerciale: <span className="line-through text-red-400">€197,40</span></p>
          <div className="flex flex-col items-center justify-center mb-6">
             <span className="text-xl font-bold text-slate-800">Oggi paghi solo:</span>
             <span className="text-6xl font-black text-[#16a34a] tracking-tight">€49,90</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8 text-sm font-bold text-[#0f172a]">
             <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full border border-green-200">Spedizione GRATIS 24/48h</span>
             <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full border border-green-200">Pagamento alla consegna</span>
          </div>

          <button 
            onClick={scrollToOrder}
            className="w-full md:w-auto bg-[#16a34a] hover:bg-[#15803d] text-white text-xl font-bold py-4 px-12 rounded-lg shadow-xl transform transition hover:-translate-y-1 flex items-center justify-center gap-2 mx-auto"
          >
            VOGLIO IL KIT COMPLETO <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  </section>
);

// 8. REVIEWS
const Reviews = () => {
  const reviews = [
    { name: "Giovanni R., Roma", text: <span key="r1">L'ho usata sul motore: <strong>ho visto subito dove guardare</strong>. Arrivata in 48h e ho pagato al corriere.</span>, img: "/images/inspectra360-img/recensioni/1.webp" },
    { name: "Salvatore M., Firenze", text: <span key="r2">Scarico del lavandino: ho trovato l'ostruzione <strong>senza smontare mezzo sifone</strong>.</span>, img: "/images/inspectra360-img/recensioni/2.webp" },
    { name: "Paola D., Milano", text: <span key="r3">Schermo grande, finalmente ci vedo bene. <strong>Non sono tecnologica</strong> e la uso senza problemi.</span> },
    { name: "Marco T., Bologna", text: <span key="r4">Il <strong>blocco sulla punta è la differenza</strong>: non perdi l’inquadratura quando ti muovi.</span> },
    { name: "Franco L., Napoli", text: <span key="r5">Ho recuperato una chiave caduta dietro un mobile. <strong>Magnete utilissimo</strong>.</span> },
    { name: "Andrea P., Torino", text: <span key="r6">Ho registrato i video e li ho fatti vedere al tecnico. <strong>Zero discussioni</strong>, la prova era lì.</span> },
  ];

  return (
    <section className="py-12 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Cosa dicono i nostri clienti</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
              {rev.img && (
                <div className="mb-4 rounded-lg overflow-hidden border border-slate-100">
                  <img src={rev.img} alt={`Recensione ${i + 1}`} loading="lazy" className="w-full h-48 object-cover" />
                </div>
              )}
              <div className="flex text-yellow-400 mb-3">
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
              </div>
              <p className="text-slate-700 italic mb-4">"{rev.text}"</p>
              <div className="flex items-center gap-2">
                <div className="bg-slate-200 rounded-full p-2"><User size={16} className="text-slate-500"/></div>
                <div>
                  <div className="text-sm font-bold text-slate-900">{rev.name}</div>
                  <div className="text-xs text-green-600 flex items-center gap-1 font-semibold"><CheckCircle2 size={10} /> Acquisto verificato</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 9. SPECS
const SpecsTable = () => (
  <section className="py-12 bg-white">
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">SPECIFICHE TECNICHE</h2>
      <div className="border border-slate-200 rounded-lg overflow-hidden text-sm md:text-base">
        {[
          ["Schermo", '5" IPS HD (Alta definizione)'],
          ["Risoluzione display", "1280×720 pixel"],
          ["Sonda", "6,2 mm (Ultra sottile)"],
          ["Steering", "360° con blocco (Tecnologia Flex-Lock)"],
          ["Lenti", "Doppia (frontale + laterale)"],
          ["Luce", "LED 8+1 regolabili"],
          ["Cavo", "Semirigido 5 m (prolunga 10 m opzionale)"],
          ["Impermeabilità", "Sonda IP67/68"],
          ["Memoria", "microSD 64GB inclusa"],
          ["Funzioni Extra", "Foto, Video, Freeze, Auto-Up"]
        ].map((row, i) => (
          <div key={i} className={`flex justify-between items-center p-4 ${i%2===0 ? 'bg-slate-50' : 'bg-white'}`}>
            <span className="font-bold text-slate-700">{row[0]}:</span>
            <span className="text-slate-900 text-right">{row[1]}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// 10. FAQ
const FAQ = () => {
  const faqs = [
    { q: "Serve il telefono per usarla?", a: "No: ha uno schermo integrato da 5\". Accendi e usi." },
    { q: "Quanto è sottile la sonda?", a: "Solo 6,2 mm: entra in iniettori e tubi stretti." },
    { q: "È adatta agli scarichi con acqua?", a: "Sì: la sonda è impermeabile (IP67) per lavorare in umido." },
    { q: "Quanto è lungo il cavo?", a: "5 metri, semirigido (mantiene la forma che gli dai)." },
    { q: "Posso registrare video?", a: "Sì: foto e video vengono salvati sulla microSD da 64GB inclusa." },
    { q: "Garanzia e pagamento?", a: "2 anni di garanzia italiana. Paghi in contanti al corriere." }
  ];

  return (
    <section className="py-12 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Domande Frequenti</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2"><Lightbulb size={18} className="text-[#0f766e]"/> {faq.q}</h4>
              <p className="text-slate-600 ml-6">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 11. PRE-ORDER SUMMARY & TRUST
const PreOrderSummary = () => (
  <section className="py-10 bg-teal-50/50 border-t border-b border-slate-200">
    <div className="max-w-3xl mx-auto px-4">
      {/* Product & Price Recap */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 mb-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center gap-4">
           <div className="w-20 h-20 rounded-lg overflow-hidden border border-slate-200 shrink-0">
              <img src="/images/inspectra360-img/1.webp" alt="Inspectra 360 Ultra" className="w-full h-full object-cover" />
           </div>
           <div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">Stai Ordinando:</div>
              <h3 className="font-bold text-slate-900 text-lg leading-tight">Inspectra™ 360 Ultra + Kit Accessori</h3>
              <p className="text-xs text-green-600 font-medium flex items-center justify-center md:justify-start gap-1 mt-1"><Check size={12}/> Disponibilità Immediata</p>
           </div>
        </div>
        <div className="text-center md:text-right">
           <span className="block text-slate-400 line-through text-sm">€129,90</span>
           <span className="block text-3xl font-black text-[#0f172a] leading-none">€49,90</span>
        </div>
      </div>

      {/* Steps Timeline */}
      <div className="text-center mb-8">
        <h3 className="font-bold text-slate-800 mb-6 flex items-center justify-center gap-2">
          <FileCheck className="text-[#0f766e]" size={20}/> Cosa succede dopo che invii l'ordine?
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm relative">
           {/* Connecting Line (Desktop) */}
           <div className="hidden md:block absolute top-4 left-0 w-full h-0.5 bg-slate-200 -z-10 transform translate-y-2"></div>

           <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex flex-col items-center gap-2 relative z-10">
              <div className="w-8 h-8 rounded-full bg-[#0f766e] text-white flex items-center justify-center font-bold">1</div>
              <span className="font-bold text-slate-900">Compila Modulo</span>
              <p className="text-xs text-slate-500 leading-tight">Inserisci i dati di spedizione qui sotto.</p>
           </div>

           <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex flex-col items-center gap-2 relative z-10">
              <div className="w-8 h-8 rounded-full bg-[#0f766e] text-white flex items-center justify-center font-bold">2</div>
              <span className="font-bold text-slate-900">Attendi Chiamata</span>
              <p className="text-xs text-slate-500 leading-tight">Ti chiamiamo per confermare l'indirizzo.</p>
           </div>

           <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex flex-col items-center gap-2 relative z-10">
              <div className="w-8 h-8 rounded-full bg-[#0f766e] text-white flex items-center justify-center font-bold">3</div>
              <span className="font-bold text-slate-900">Spedizione</span>
              <p className="text-xs text-slate-500 leading-tight">Il pacco parte subito. Arriva in 24/48h.</p>
           </div>

           <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex flex-col items-center gap-2 relative z-10">
              <div className="w-8 h-8 rounded-full bg-[#16a34a] text-white flex items-center justify-center font-bold">4</div>
              <span className="font-bold text-slate-900">Paghi alla Consegna</span>
              <p className="text-xs text-slate-500 leading-tight">Contanti al corriere. Zero rischi.</p>
           </div>
        </div>
      </div>

      {/* Trust / Privacy Box */}
      <div className="bg-slate-100 border border-slate-200 rounded-lg p-4 flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
         <div className="bg-white p-2 rounded-full border border-slate-200">
            <Lock className="text-slate-400" size={24} />
         </div>
         <div className="text-xs md:text-sm text-slate-600">
            <p className="mb-1"><strong>🔒 I tuoi dati sono al sicuro.</strong></p>
            <p className="opacity-80">Non chiediamo carta di credito o pagamenti anticipati. Il tuo numero serve solo al corriere per la consegna. Niente spam, garantito.</p>
         </div>
      </div>

    </div>
  </section>
);

// 12. ORDER FORM
const OrderForm = () => {
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <section id="ordine" className="py-16 bg-slate-900 relative">
      <div className="max-w-2xl mx-auto px-4 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-[#0f766e]/20">
          <div className="bg-[#dc2626] text-white text-center py-3 font-bold text-lg animate-pulse">
            ⚠️ Offerta bloccata per: {formatTime(timeLeft)}
          </div>
          
          <div className="p-6 md:p-8">
            <h2 className="text-3xl font-black text-center text-slate-900 mb-2">Ordina ora — Paghi alla consegna</h2>
            <p className="text-center text-slate-600 mb-8 font-medium">Compila il modulo in 20 secondi.</p>
            
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-sm font-bold text-slate-700 mb-1 flex items-center gap-2">
                  <User size={18} className="text-[#0f766e]"/> Nome e Cognome
                </label>
                <input type="text" className="w-full p-4 border-2 border-slate-300 rounded-lg focus:border-[#0f766e] focus:ring-1 focus:ring-[#0f766e] outline-none transition bg-slate-50 font-medium" placeholder="Es. Mario Rossi" required />
              </div>
              
              <div>
                <label className="text-sm font-bold text-slate-700 mb-1 flex items-center gap-2">
                  <Phone size={18} className="text-[#0f766e]"/> Numero di Telefono (Cellulare)
                </label>
                <input type="tel" className="w-full p-4 border-2 border-slate-300 rounded-lg focus:border-[#0f766e] focus:ring-1 focus:ring-[#0f766e] outline-none transition bg-slate-50 font-medium" placeholder="Es. 333 1234567" required />
              </div>
              
              <div>
                <label className="text-sm font-bold text-slate-700 mb-1 flex items-center gap-2">
                  <MapPin size={18} className="text-[#0f766e]"/> Indirizzo di Spedizione
                </label>
                <textarea className="w-full p-4 border-2 border-slate-300 rounded-lg focus:border-[#0f766e] focus:ring-1 focus:ring-[#0f766e] outline-none transition h-24 bg-slate-50 font-medium" placeholder="Via, Numero Civico, Città, CAP" required></textarea>
              </div>

              <button type="submit" className="w-full bg-[#16a34a] hover:bg-[#15803d] text-white font-black text-2xl py-5 rounded-xl shadow-[0_4px_14px_0_rgba(22,163,74,0.39)] hover:shadow-2xl transition transform hover:-translate-y-1 mt-6 border-b-4 border-[#15803d]">
                CONFERMA ORDINE
              </button>
              
              <div className="flex justify-center gap-4 mt-4 text-xs text-slate-500 font-medium opacity-80">
                <span className="flex items-center gap-1"><Shield size={12}/> Dati protetti al 100%</span>
                <span className="flex items-center gap-1"><Truck size={12}/> Pagamento alla consegna</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// 13. STICKY BAR
const StickyBar = ({ scrollToOrder }: { scrollToOrder: () => void }) => (
  <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-3 z-50 flex justify-between items-center md:hidden">
    <div className="flex flex-col">
      <span className="text-slate-900 font-bold text-xl leading-none">€49,90</span>
      <span className="text-[#dc2626] text-xs font-bold animate-pulse uppercase">Ultimi pezzi −62%</span>
    </div>
    <button 
      onClick={scrollToOrder}
      className="bg-[#16a34a] text-white font-bold py-3 px-8 rounded-lg shadow-md uppercase tracking-wide text-sm"
    >
      Ordina Ora
    </button>
  </div>
);

// --- MAIN APP ---

export default function Page() {
  const scrollToOrder = () => {
    const element = document.getElementById('ordine');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#0f766e] selection:text-white">
      <TopBar />
      <Hero scrollToOrder={scrollToOrder} />
      <DemoGrid />
      <ProblemAgitate />
      <Solution />
      <CompareTable />
      <Bundle scrollToOrder={scrollToOrder} />
      <Reviews />
      <SpecsTable />
      <FAQ />
      <PreOrderSummary />
      <OrderForm />
      <StickyBar scrollToOrder={scrollToOrder} />
    </div>
  );
};