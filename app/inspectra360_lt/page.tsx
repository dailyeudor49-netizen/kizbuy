'use client';

import { useState, useEffect, useRef } from 'react';
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
          <span className="hidden sm:inline">Mokėjimas pristatymo metu</span>
          <span className="sm:hidden">Grynaisiais</span>
        </div>

        <div className="w-px h-3 bg-slate-800 hidden md:block"></div>

        <div className="flex items-center gap-2 group hover:text-white transition-colors cursor-default">
          <Zap size={14} className="text-slate-500 group-hover:text-cyan-400 transition-colors" />
          <span>Pristatymas 24/48H</span>
        </div>

        <div className="w-px h-3 bg-slate-800 hidden md:block"></div>

        <div className="flex items-center gap-2 group hover:text-white transition-colors cursor-default">
          <Shield size={14} className="text-slate-500 group-hover:text-cyan-400 transition-colors" />
          <span>Garantija 2 metai</span>
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
    <span key="b1"><strong>360° galiukas "Flex-Lock"</strong>: pasukate ir <strong>LIEKA nejudantis</strong> (jokio drebėjimo).</span>,
    <span key="b2"><strong>Dvigubas objektyvas</strong> (priekinis + šoninis): matote ir "iš šono" vingiuose.</span>,
    <span key="b3"><strong>8x skaitmeninis priartinimas</strong>: padidinkite detales ir aptikite net <strong>akiai nematomus mikro-nutekėjimus</strong>.</span>,
    <span key="b4"><strong>5" IPS HD ekranas</strong>: didelis ir įskaitomas, net garaže.</span>,
    <span key="b5">Pusiau standus 5 m kabelis: <strong>jį vedžiojate, o ne "nukarsto"</strong> atsitiktinai.</span>,
    <span key="b6">8+1 LED su reguliavimu: aiškus vaizdas <strong>visiškoje tamsoje</strong>.</span>,
    <span key="b7">Plona 6,2 mm zondas: <strong>patenka ten, kur kiti sustoja</strong>.</span>,
    <span key="b8">Atsparus vandeniui nuotekoms: dirbkite drėgmėje <strong>be baimės</strong>.</span>,
    <span key="b9">Nuotraukų/vaizdo įrašymas + <strong>64GB microSD kortelė komplekte</strong>.</span>,
    <span key="b10"><strong>Gelbėjimo rinkinys komplekte</strong>: magnetas + kablys + veidrodėlis, iš karto paruoštas.</span>
  ];

  return (
    <section className="bg-white pb-8 pt-4">
      <div className="max-w-4xl mx-auto px-4">

        {/* Headline Group */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
            Pažvelkite į vamzdžius ir variklius… <br/><span className="text-[#0f766e]">be išardymo.</span>
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
            <span className="text-[#007185] hover:text-[#c7511f] hover:underline cursor-pointer font-medium">9 724 patenkinti klientai</span>
            <span className="text-slate-300">|</span>
            <span className="text-[#007600] font-semibold text-xs flex items-center gap-1">
              <Check size={12} strokeWidth={4} /> Patvirtintas pirkimas
            </span>
          </div>

          <p className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto">
            <strong className="text-slate-800">360° galiukas su užraktu</strong> + <strong className="text-slate-800">5" IPS ekranas</strong>: iš karto matote, kur problema. <strong className="text-[#16a34a]">Mokate tik pristatymo metu.</strong>
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
                <span className="text-slate-400 text-xl font-bold line-through">94 €</span>
                <span className="text-4xl font-black text-[#0f172a]">47 €</span>
                <span className="bg-[#dc2626] text-white px-2 py-1 rounded text-sm font-bold animate-pulse">-50%</span>
              </div>
              <p className="text-[#dc2626] font-bold text-sm flex items-center justify-center md:justify-start gap-2 mb-4">
                <Clock size={16} /> <strong>PASIŪLYMAS BAIGIASI</strong>: ribotas kiekis šiandien.
              </p>

              <button
                onClick={scrollToOrder}
                className="w-full bg-[#16a34a] hover:bg-[#15803d] text-white text-xl font-bold py-4 px-6 rounded-lg shadow-[0_4px_0_rgb(21,128,61)] active:shadow-none active:translate-y-1 transition-all flex items-center justify-center gap-2"
              >
                UŽSAKYTI DABAR <ChevronRight size={24} />
              </button>

              <p className="text-xs text-center text-slate-500 mt-3 flex flex-wrap justify-center gap-2 font-medium">
                <span>Mokėjimas pristatymo metu</span>•
                <span>Pristatymas 24/48h</span>•
                <span>Garantija 2 metai</span>
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
      label: "VALDYMAS",
      title: "360° galiukas su užraktu",
      tech: "4 krypčių vairasvirtė + Flex-Lock",
      text: <span>Nukreipiate į tašką ir <strong>galiukas lieka nejudantis</strong>: neprarandate vaizdo vingiuose. Idealus vamzdžiams, nuotekoms ir variklio sekcijai.</span>,
      video: "/images/inspectra360-img/punta-360-con-blocco.mp4"
    },
    {
      label: "MATYMAS",
      title: "Dvigubas objektyvas",
      tech: "1-tap perjungimas",
      text: <span>Žiūrite <strong>į priekį arba į šoną</strong> be sukimosi. Matote kliūtis ir objektus net ant vamzdžio sienų.</span>,
      video: "/images/inspectra360-img/doppia-lente.mp4"
    },
    {
      label: "ĮSKAITOMUMAS",
      title: "5\" IPS HD ekranas",
      tech: "Didelis aukštos raiškos ekranas",
      text: <span><strong>Nereikia programėlės</strong>: įjungiate ir matote. Didelis vaizdas, patogus net be 'kombinacijos'.</span>,
      img: "/images/inspectra360-img/schermo-5-ips-hd.webp"
    },
    {
      label: "GYLIS",
      title: "Pusiau standus 5 m kabelis",
      tech: "Stabilus vedimas",
      text: <span>Stumiete ir nukreipiate, kur reikia: <strong>nenukabina</strong>. Idealus nuotekoms, kanalams ir ertmėms.</span>,
      img: "/images/inspectra360-img/cavo-semirigido-5-metri.webp"
    },
    {
      label: "NULINĖ TAMSA",
      title: "8+1 LED su reguliavimu",
      tech: "Stipri kontroliuojama šviesa",
      text: <span>Matote aiškias detales net <strong>visiškoje tamsoje</strong>. Reguliuojate intensyvumą, kad 'neperdegintumėte' vaizdo.</span>,
      video: "/images/inspectra360-img/led-8-1-regolabili.mp4"
    },
    {
      label: "PRIEIGA",
      title: "Plona 6,2 mm zondas",
      tech: "Plonesnė = daugiau praėjimų",
      text: <span>Patenka į ankštas vietas, kur storos zondos sustoja. <strong>Ideali tiksliems darbams</strong>.</span>,
      img: "/images/inspectra360-img/sonda-sottile-6-2-mm.webp"
    },
    {
      label: "DRĖGMĖ IR KARŠTIS",
      title: "Paruošta nuotekoms",
      tech: "IP67 + Atspari aukštai temp.",
      text: <span>Galite dirbti vandenyje ir purve be baimės. <strong>Atspari aukštai temperatūrai</strong>: nesudega net karštuose varikliuose.</span>,
      video: "/images/inspectra360-img/pronta-per-scarichi.mp4"
    },
    {
      label: "DETALĖS",
      title: "8x skaitmeninis priartinimas",
      tech: "HD padidinimas",
      text: <span>Padidinkite detales iki 8 kartų. <strong>Aptikite nematomas įtrūkimus</strong> ir perskaitykite paslėptus serijinius numerius su absoliučiu tikslumu.</span>,
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
      <h2 className="text-3xl font-bold mb-6">Kiek kartų praradote laiką (ir pinigus), nes <span className="text-[#dc2626] underline decoration-red-400/50">nematėte?</span></h2>
      <ul className="text-left space-y-4 text-lg text-slate-300 mb-8 max-w-xl mx-auto">
        <li className="flex gap-3"><X className="text-red-500 shrink-0" /> <span>Nuotekas užsikimša ir <strong>nežinote kur</strong>?</span></li>
        <li className="flex gap-3"><X className="text-red-500 shrink-0" /> <span>Triukšmas automobilyje ir servisas verčia <strong>'bandyti' dalis aklai</strong>?</span></li>
        <li className="flex gap-3"><X className="text-red-500 shrink-0" /> <span>Reikia gręžti sieną, bet <strong>bijote pataikyti į vamzdį</strong> ar kabelį?</span></li>
      </ul>
      <p className="text-xl font-medium text-white bg-slate-800 p-6 rounded-lg border border-slate-700 shadow-xl">
        Tai ne jūsų kaltė: be tikro vaizdo einate aklai. <br/><strong className="text-[#dc2626]">O kiekvienas nesėkmingas bandymas kainuoja.</strong>
      </p>
    </div>
  </section>
);

// 5. SOLUTION & HOW IT WORKS
const Solution = () => (
  <section className="py-12 bg-white">
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#0f172a] mb-6">Galutinis sprendimas: <span className="text-[#0f766e]">pamatykite, įrašykite, išspręskite.</span></h2>
        {/* Centered block for mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-lg mx-auto md:max-w-none">
          {[
            <span key="s1"><strong>Įjungiate ir žiūrite</strong>: didelis ekranas, jokių komplikacijų.</span>,
            <span key="s2"><strong>Pasukate galiuką ir užfiksuojate</strong>: randate tikslų tašką akimirksniu.</span>,
            <span key="s3"><strong>Įrašote ir parodote</strong>: jokių ginčų, tik vaizdo įrodymai.</span>
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-5 bg-teal-50 rounded-lg border border-teal-100 shadow-sm text-left">
              <CheckCircle2 className="text-[#0f766e] shrink-0" size={20} />
              <span className="font-medium text-slate-800 leading-snug">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-200 pt-12">
        <h3 className="text-2xl font-bold text-center mb-8 uppercase tracking-wider text-slate-400">Kaip tai veikia</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-lg">1</div>
            <p className="font-semibold text-lg text-slate-800">Įjunkite Inspectra™ 360 Ultra</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-lg">2</div>
            <p className="font-semibold text-lg text-slate-800">Įveskite zondą į tikrintiną vietą</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-[#16a34a] text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-lg ring-4 ring-green-100">3</div>
            <p className="font-semibold text-lg text-slate-800">Nukreipiate galiuką, apšviečiate ir <strong>iš karto suprantate problemą</strong></p>
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
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Mes vs Kiti: kodėl kiti švaisto jūsų laiką</h2>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
        <div className="grid grid-cols-3 bg-slate-900 text-white p-4 text-sm md:text-base font-bold">
          <div className="col-span-1">Savybė</div>
          <div className="col-span-1 text-center text-[#0f766e]">Inspectra™ 360 Ultra</div>
          <div className="col-span-1 text-center text-slate-400">Kiti / Servisas</div>
        </div>
        {[
          ["360° galiukas su užraktu", "Fiksuotas galiukas: einate aklai"],
          ["5\" IPS HD ekranas", "Mažas ekranas arba tik telefonas"],
          ["Pusiau standus 5 m kabelis", "Minkštas laidas arba per trumpas"],
          ["Dvigubas objektyvas", "Tik vienas vaizdas"],
          ["8+1 LED su reguliavimu", "Silpnas apšvietimas"],
          ["64GB microSD komplekte", "Jokių įrodymų / jokių įrašų"]
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
            Panašūs profesionalūs įrankiai gali kainuoti <span className="underline decoration-red-500">šimtus eurų</span>. <br/>
            Šiandien mokate tik <span className="text-[#dc2626] text-2xl font-black">47 €</span>.
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
      <h2 className="text-3xl font-bold text-center mb-8">Nepakartojamas pasiūlymas: viduje rasite viską (reali vertė)</h2>

      <div className="bg-white border-2 border-slate-200 rounded-xl p-6 md:p-8 max-w-2xl mx-auto shadow-2xl relative overflow-hidden">
        {/* Badge */}
        <div className="absolute top-0 right-0 bg-[#dc2626] text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
          Super nuolaida
        </div>

        <ul className="space-y-4 mb-8">
          {[
            { name: "Endoskopas Inspectra™ 360 Ultra", val: "94 €", bold: true },
            { name: "64GB microSD komplekte", val: "19,90 €", bold: false },
            { name: "Gelbėjimo rinkinys: magnetas + kablys + veidrodėlis", val: "14,90 €", bold: false },
            { name: "Kietas apsauginis lagaminas", val: "19,90 €", bold: false },
            { name: "WOW dovana: Teleskopinis magnetinis strypas PickUp", val: "12,90 €", bold: true },
            { name: "Skaitmeninė premija: Mini-kursas + checklist", val: "9,90 €", bold: false },
          ].map((item, i) => (
            <li key={i} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2 border-b border-slate-100 pb-3">
              <span className={`flex items-center gap-2 ${item.bold ? 'font-bold text-slate-900 text-base sm:text-lg' : 'text-slate-600 text-sm sm:text-base'}`}>
                <Gift size={18} className={`shrink-0 ${item.bold ? "text-[#16a34a]" : "text-[#0f766e]"}`} /> {item.name}
              </span>
              <span className="text-slate-400 line-through text-xs sm:text-sm whitespace-nowrap ml-6 sm:ml-0">Vertė {item.val}</span>
            </li>
          ))}
        </ul>

        <div className="text-center">
          <p className="text-slate-500 mb-2 font-medium">Bendra komercinė vertė: <span className="line-through text-red-400">171,50 €</span></p>
          <div className="flex flex-col items-center justify-center mb-6">
             <span className="text-xl font-bold text-slate-800">Šiandien mokate tik:</span>
             <span className="text-6xl font-black text-[#16a34a] tracking-tight">47 €</span>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8 text-sm font-bold text-[#0f172a]">
             <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full border border-green-200">NEMOKAMAS pristatymas 24/48h</span>
             <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full border border-green-200">Mokėjimas pristatymo metu</span>
          </div>

          <button
            onClick={scrollToOrder}
            className="w-full md:w-auto bg-[#16a34a] hover:bg-[#15803d] text-white text-xl font-bold py-4 px-12 rounded-lg shadow-xl transform transition hover:-translate-y-1 flex items-center justify-center gap-2 mx-auto"
          >
            NORIU PILNĄ RINKINĮ <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  </section>
);

// 8. REVIEWS
const Reviews = () => {
  const reviews = [
    { name: "Jonas K., Vilnius", text: <span key="r1">Naudojau ją varikliui: <strong>iš karto pamačiau, kur žiūrėti</strong>. Atkeliavo per 48h ir sumokėjau kurjeriui.</span>, img: "/images/inspectra360-img/recensioni/1.webp" },
    { name: "Tomas M., Kaunas", text: <span key="r2">Kriauklės nuotekas: radau užsikimšimą <strong>be pusės sifono išardymo</strong>.</span>, img: "/images/inspectra360-img/recensioni/2.webp" },
    { name: "Ona D., Klaipėda", text: <span key="r3">Didelis ekranas, pagaliau gerai matau. <strong>Nesu techninė</strong> ir naudoju be problemų.</span> },
    { name: "Marius T., Šiauliai", text: <span key="r4"><strong>Galiuko užraktas daro skirtumą</strong>: neprarandate kadro, kai judate.</span> },
    { name: "Petras L., Panevėžys", text: <span key="r5">Radau raktą, kuris nukrito už baldų. <strong>Magnetas labai naudingas</strong>.</span> },
    { name: "Andrius P., Alytus", text: <span key="r6">Įrašiau vaizdo įrašus ir parodžiau technikui. <strong>Jokių ginčų</strong>, įrodymas buvo ten.</span> },
  ];

  return (
    <section className="py-12 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Ką sako mūsų klientai</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
              {rev.img && (
                <div className="mb-4 rounded-lg overflow-hidden border border-slate-100">
                  <img src={rev.img} alt={`Atsiliepimas ${i + 1}`} loading="lazy" className="w-full h-48 object-cover" />
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
                  <div className="text-xs text-green-600 flex items-center gap-1 font-semibold"><CheckCircle2 size={10} /> Patvirtintas pirkimas</div>
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
      <h2 className="text-2xl font-bold mb-6 text-center">TECHNINĖS SPECIFIKACIJOS</h2>
      <div className="border border-slate-200 rounded-lg overflow-hidden text-sm md:text-base">
        {[
          ["Ekranas", "5\" IPS HD (Aukšta raiška)"],
          ["Ekrano raiška", "1280×720 pikselių"],
          ["Zondas", "6,2 mm (Ultra plonas)"],
          ["Valdymas", "360° su užraktu (Flex-Lock technologija)"],
          ["Objektyvai", "Dvigubas (priekinis + šoninis)"],
          ["Apšvietimas", "8+1 LED su reguliavimu"],
          ["Kabelis", "Pusiau standus 5 m (prailginimas 10 m pasirinktinai)"],
          ["Atsparumas vandeniui", "Zondas IP67/68"],
          ["Atmintis", "64GB microSD komplekte"],
          ["Papildomos funkcijos", "Nuotrauka, Vaizdo įrašas, Freeze, Auto-Up"]
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
    { q: "Ar reikia telefono jai naudoti?", a: "Ne: turi įmontuotą 5\" ekraną. Įjungiate ir naudojate." },
    { q: "Kokia plona zondas?", a: "Tik 6,2 mm: patenka į purkštukus ir ankštus vamzdžius." },
    { q: "Ar tinka nuotekoms su vandeniu?", a: "Taip: zondas atsparus vandeniui (IP67) darbui drėgmėje." },
    { q: "Koks ilgas kabelis?", a: "5 metrai, pusiau standus (išlaiko formą, kurią jam suteikiate)." },
    { q: "Ar galiu įrašyti vaizdo įrašą?", a: "Taip: nuotraukos ir vaizdo įrašai išsaugomi 64GB microSD kortelėje komplekte." },
    { q: "Garantija ir mokėjimas?", a: "2 metų garantija. Mokate grynaisiais kurjeriui." }
  ];

  return (
    <section className="py-12 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Dažnai užduodami klausimai</h2>
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
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">Užsakote:</div>
              <h3 className="font-bold text-slate-900 text-lg leading-tight">Inspectra™ 360 Ultra + Priedų rinkinys</h3>
              <p className="text-xs text-green-600 font-medium flex items-center justify-center md:justify-start gap-1 mt-1"><Check size={12}/> Iš karto pristatoma</p>
           </div>
        </div>
        <div className="text-center md:text-right">
           <span className="block text-slate-400 line-through text-sm">94 €</span>
           <span className="block text-3xl font-black text-[#0f172a] leading-none">47 €</span>
        </div>
      </div>

      {/* Steps Timeline */}
      <div className="text-center mb-8">
        <h3 className="font-bold text-slate-800 mb-6 flex items-center justify-center gap-2">
          <FileCheck className="text-[#0f766e]" size={20}/> Kas nutinka po užsakymo pateikimo?
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm relative">
           {/* Connecting Line (Desktop) */}
           <div className="hidden md:block absolute top-4 left-0 w-full h-0.5 bg-slate-200 -z-10 transform translate-y-2"></div>

           <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex flex-col items-center gap-2 relative z-10">
              <div className="w-8 h-8 rounded-full bg-[#0f766e] text-white flex items-center justify-center font-bold">1</div>
              <span className="font-bold text-slate-900">Užpildykite formą</span>
              <p className="text-xs text-slate-500 leading-tight">Įveskite pristatymo duomenis žemiau.</p>
           </div>

           <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex flex-col items-center gap-2 relative z-10">
              <div className="w-8 h-8 rounded-full bg-[#0f766e] text-white flex items-center justify-center font-bold">2</div>
              <span className="font-bold text-slate-900">Palaukite skambučio</span>
              <p className="text-xs text-slate-500 leading-tight">Paskambinsime adreso patvirtinimui.</p>
           </div>

           <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex flex-col items-center gap-2 relative z-10">
              <div className="w-8 h-8 rounded-full bg-[#0f766e] text-white flex items-center justify-center font-bold">3</div>
              <span className="font-bold text-slate-900">Išsiuntimas</span>
              <p className="text-xs text-slate-500 leading-tight">Siunta išsiunčiama iš karto. Atvyks per 24/48h.</p>
           </div>

           <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex flex-col items-center gap-2 relative z-10">
              <div className="w-8 h-8 rounded-full bg-[#16a34a] text-white flex items-center justify-center font-bold">4</div>
              <span className="font-bold text-slate-900">Mokate pristatymo metu</span>
              <p className="text-xs text-slate-500 leading-tight">Grynaisiais kurjeriui. Jokios rizikos.</p>
           </div>
        </div>
      </div>

      {/* Trust / Privacy Box */}
      <div className="bg-slate-100 border border-slate-200 rounded-lg p-4 flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
         <div className="bg-white p-2 rounded-full border border-slate-200">
            <Lock className="text-slate-400" size={24} />
         </div>
         <div className="text-xs md:text-sm text-slate-600">
            <p className="mb-1"><strong>🔒 Jūsų duomenys saugūs.</strong></p>
            <p className="opacity-80">Nereikalaujame kreditinės kortelės ar išankstinio mokėjimo. Jūsų numeris skirtas tik kurjeriui pristatymui. Jokio šlamšto, garantuojame.</p>
         </div>
      </div>

    </div>
  </section>
);

// Network config for LT
const NETWORK_CONFIG = {
  uid: '019bfb2f-317f-7e20-a4a8-44c22cb7bd03',
  key: '05fddd0847c3627b81e1d6',
  offer: '2895',
  lp: '2934',
};

// 12. ORDER FORM
const OrderForm = () => {
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes
  const [formState, setFormState] = useState({ name: '', phone: '', address: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const tmfpRef = useRef<HTMLInputElement>(null);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && formState.phone && formState.address) {
      setIsSubmitting(true);

      const urlParams = new URLSearchParams(window.location.search);

      const formData = new FormData();
      formData.append('uid', NETWORK_CONFIG.uid);
      formData.append('key', NETWORK_CONFIG.key);
      formData.append('offer', NETWORK_CONFIG.offer);
      formData.append('lp', NETWORK_CONFIG.lp);
      formData.append('name', formState.name);
      formData.append('tel', formState.phone);
      formData.append('street-address', formState.address);

      const tmfpValue = tmfpRef.current?.value || '';
      if (tmfpValue) {
        formData.append('tmfp', tmfpValue);
      }

      ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'subid', 'subid2', 'subid3', 'subid4', 'pubid'].forEach(param => {
        const value = urlParams.get(param);
        if (value) formData.append(param, value);
      });

      try {
        const response = await fetch('https://offers.italiadrop.com/forms/api/', {
          method: 'POST',
          body: formData,
        });

        const data = await response.json();
        console.log('Network API response:', data);

        sessionStorage.setItem('ec_phone', formState.phone);
        sessionStorage.setItem('ec_address', formState.address);
        sessionStorage.setItem('ec_value', '47');

        if (data.message === 'DOUBLE') {
          sessionStorage.setItem('skipConversion', 'true');
        }

        window.location.href = '/ty-lt';
      } catch (error) {
        console.error('Network API error:', error);
        sessionStorage.setItem('ec_phone', formState.phone);
        sessionStorage.setItem('ec_address', formState.address);
        sessionStorage.setItem('ec_value', '47');
        window.location.href = '/ty-lt';
      }
    }
  };

  return (
    <section id="ordine" className="py-16 bg-slate-900 relative">
      <div className="max-w-2xl mx-auto px-4 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-[#0f766e]/20">
          <div className="bg-[#dc2626] text-white text-center py-3 font-bold text-lg animate-pulse">
            ⚠️ Pasiūlymas užrakintas: {formatTime(timeLeft)}
          </div>

          <div className="p-6 md:p-8">
            <h2 className="text-3xl font-black text-center text-slate-900 mb-2">Užsakykite dabar — Mokate pristatymo metu</h2>
            <p className="text-center text-slate-600 mb-8 font-medium">Užpildykite formą per 20 sekundžių.</p>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <input type="hidden" name="tmfp" ref={tmfpRef} />

              <div>
                <label className="text-sm font-bold text-slate-700 mb-1 flex items-center gap-2">
                  <User size={18} className="text-[#0f766e]"/> Vardas ir Pavardė
                </label>
                <input type="text" name="name" value={formState.name} onChange={handleChange} className="w-full p-4 border-2 border-slate-300 rounded-lg focus:border-[#0f766e] focus:ring-1 focus:ring-[#0f766e] outline-none transition bg-slate-50 font-medium" placeholder="Pvz. Jonas Jonaitis" required />
              </div>

              <div>
                <label className="text-sm font-bold text-slate-700 mb-1 flex items-center gap-2">
                  <Phone size={18} className="text-[#0f766e]"/> Telefono numeris (mob.)
                </label>
                <input type="tel" name="phone" value={formState.phone} onChange={handleChange} className="w-full p-4 border-2 border-slate-300 rounded-lg focus:border-[#0f766e] focus:ring-1 focus:ring-[#0f766e] outline-none transition bg-slate-50 font-medium" placeholder="Pvz. +370 600 12345" required />
              </div>

              <div>
                <label className="text-sm font-bold text-slate-700 mb-1 flex items-center gap-2">
                  <MapPin size={18} className="text-[#0f766e]"/> Pristatymo adresas
                </label>
                <textarea name="address" value={formState.address} onChange={handleChange} className="w-full p-4 border-2 border-slate-300 rounded-lg focus:border-[#0f766e] focus:ring-1 focus:ring-[#0f766e] outline-none transition h-24 bg-slate-50 font-medium" placeholder="Gatvė, Namo numeris, Miestas, Pašto kodas" required></textarea>
              </div>

              <button type="submit" disabled={isSubmitting} className={`w-full font-black text-2xl py-5 rounded-xl shadow-[0_4px_14px_0_rgba(22,163,74,0.39)] hover:shadow-2xl transition transform hover:-translate-y-1 mt-6 border-b-4 ${isSubmitting ? 'bg-gray-400 border-gray-500 text-gray-200 cursor-not-allowed' : 'bg-[#16a34a] hover:bg-[#15803d] text-white border-[#15803d]'}`}>
                {isSubmitting ? 'SIUNČIAMA...' : 'PATVIRTINTI UŽSAKYMĄ'}
              </button>

              <div className="flex justify-center gap-4 mt-4 text-xs text-slate-500 font-medium opacity-80">
                <span className="flex items-center gap-1"><Shield size={12}/> Duomenys apsaugoti 100%</span>
                <span className="flex items-center gap-1"><Truck size={12}/> Mokėjimas pristatymo metu</span>
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
      <span className="text-slate-900 font-bold text-xl leading-none">47 €</span>
      <span className="text-[#dc2626] text-xs font-bold animate-pulse uppercase">Paskutiniai vienetai −50%</span>
    </div>
    <button
      onClick={scrollToOrder}
      className="bg-[#16a34a] text-white font-bold py-3 px-8 rounded-lg shadow-md uppercase tracking-wide text-sm"
    >
      Užsakyti dabar
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
      {/* Network Click Pixel */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="https://offers.italiadrop.com/forms/api/ck/?o=2895&uid=019bfb2f-317f-7e20-a4a8-44c22cb7bd03&lp=2934" style={{width:'1px',height:'1px',display:'none'}} alt="" />
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
}
