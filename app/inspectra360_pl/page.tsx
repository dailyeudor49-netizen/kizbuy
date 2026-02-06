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
          <span className="hidden sm:inline">Płatność przy odbiorze</span>
          <span className="sm:hidden">Za pobraniem</span>
        </div>

        <div className="w-px h-3 bg-slate-800 hidden md:block"></div>

        <div className="flex items-center gap-2 group hover:text-white transition-colors cursor-default">
          <Zap size={14} className="text-slate-500 group-hover:text-cyan-400 transition-colors" />
          <span>Wysyłka 24/48H</span>
        </div>

        <div className="w-px h-3 bg-slate-800 hidden md:block"></div>

        <div className="flex items-center gap-2 group hover:text-white transition-colors cursor-default">
          <Shield size={14} className="text-slate-500 group-hover:text-cyan-400 transition-colors" />
          <span>Gwarancja 2 Lata</span>
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
    <span key="b1"><strong>Końcówka 360° "Flex-Lock"</strong>: obracasz i <strong>ZOSTAJE nieruchoma</strong> (bez drgań).</span>,
    <span key="b2"><strong>Podwójny obiektyw</strong> (przedni + boczny): widzisz też "z boku" na zakrętach.</span>,
    <span key="b3"><strong>Zoom cyfrowy 8x</strong>: powiększ szczegóły, aby wykryć nawet <strong>mikro-przecieki niewidoczne gołym okiem</strong>.</span>,
    <span key="b4"><strong>Ekran 5" IPS HD</strong>: duży i czytelny, nawet w garażu.</span>,
    <span key="b5">Półsztywny kabel 5 m: <strong>prowadzisz go, nie "zwisa"</strong> przypadkowo.</span>,
    <span key="b6">LED 8+1 z regulacją: wyraźny obraz w <strong>całkowitej ciemności</strong>.</span>,
    <span key="b7">Cienka sonda 6,2 mm: <strong>wchodzi tam, gdzie inne się zatrzymują</strong>.</span>,
    <span key="b8">Wodoodporna do odpływów: pracuj w wilgoci <strong>bez obaw</strong>.</span>,
    <span key="b9">Nagrywanie zdjęć/wideo + <strong>karta microSD 64GB w zestawie</strong>.</span>,
    <span key="b10"><strong>Zestaw ratunkowy w komplecie</strong>: magnes + haczyk + lusterko, od razu gotowy.</span>
  ];

  return (
    <section className="bg-white pb-8 pt-4">
      <div className="max-w-4xl mx-auto px-4">

        {/* Headline Group */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
            Zajrzyj do rur i silników… <br/><span className="text-[#0f766e]">bez demontażu.</span>
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
            <span className="text-[#007185] hover:text-[#c7511f] hover:underline cursor-pointer font-medium">9 724 zadowolonych klientów</span>
            <span className="text-slate-300">|</span>
            <span className="text-[#007600] font-semibold text-xs flex items-center gap-1">
              <Check size={12} strokeWidth={4} /> Zweryfikowany zakup
            </span>
          </div>

          <p className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto">
            <strong className="text-slate-800">Końcówka 360° z blokadą</strong> + <strong className="text-slate-800">ekran 5" IPS</strong>: od razu widzisz, gdzie jest problem. <strong className="text-[#16a34a]">Płacisz dopiero przy odbiorze.</strong>
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
                <span className="text-slate-400 text-xl font-bold line-through">498 zł</span>
                <span className="text-4xl font-black text-[#0f172a]">249 zł</span>
                <span className="bg-[#dc2626] text-white px-2 py-1 rounded text-sm font-bold animate-pulse">-50%</span>
              </div>
              <p className="text-[#dc2626] font-bold text-sm flex items-center justify-center md:justify-start gap-2 mb-4">
                <Clock size={16} /> <strong>OFERTA WYGASA</strong>: ograniczona dostępność dzisiaj.
              </p>

              <button
                onClick={scrollToOrder}
                className="w-full bg-[#16a34a] hover:bg-[#15803d] text-white text-xl font-bold py-4 px-6 rounded-lg shadow-[0_4px_0_rgb(21,128,61)] active:shadow-none active:translate-y-1 transition-all flex items-center justify-center gap-2"
              >
                ZAMÓW TERAZ <ChevronRight size={24} />
              </button>

              <p className="text-xs text-center text-slate-500 mt-3 flex flex-wrap justify-center gap-2 font-medium">
                <span>Płatność przy odbiorze</span>•
                <span>Wysyłka 24/48h</span>•
                <span>Gwarancja 2 lata</span>
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
      label: "KONTROLA",
      title: "Końcówka 360° z blokadą",
      tech: "Joystick 4-kierunkowy + Flex-Lock",
      text: <span>Celujesz w punkt i <strong>końcówka zostaje nieruchoma</strong>: nie tracisz widoku na zakrętach. Idealna do rur, odpływów i komór silnika.</span>,
      video: "/images/inspectra360-img/punta-360-con-blocco.mp4"
    },
    {
      label: "WIZJA",
      title: "Podwójny obiektyw",
      tech: "Przełączanie 1-tap",
      text: <span>Patrzysz <strong>do przodu lub z boku</strong> bez wykręcania. Widzisz przeszkody i obiekty także na ścianach rury.</span>,
      video: "/images/inspectra360-img/doppia-lente.mp4"
    },
    {
      label: "CZYTELNOŚĆ",
      title: "Ekran 5\" IPS HD",
      tech: "Duży wyświetlacz wysokiej rozdzielczości",
      text: <span><strong>Nie potrzebujesz aplikacji</strong>: włączasz i widzisz. Duży obraz, wygodny nawet bez 'kombinowania'.</span>,
      img: "/images/inspectra360-img/schermo-5-ips-hd.webp"
    },
    {
      label: "GŁĘBOKOŚĆ",
      title: "Półsztywny kabel 5 metrów",
      tech: "Stabilne prowadzenie",
      text: <span>Pchasz go i kierujesz, gdzie potrzebujesz: <strong>nie "zwisa"</strong>. Idealny do odpływów, kanałów i wnęk.</span>,
      img: "/images/inspectra360-img/cavo-semirigido-5-metri.webp"
    },
    {
      label: "ZERO CIEMNOŚCI",
      title: "LED 8+1 z regulacją",
      tech: "Mocne kontrolowane światło",
      text: <span>Widzisz wyraźne szczegóły nawet w <strong>całkowitej ciemności</strong>. Regulujesz intensywność, aby nie 'przepalić' obrazu.</span>,
      video: "/images/inspectra360-img/led-8-1-regolabili.mp4"
    },
    {
      label: "DOSTĘP",
      title: "Cienka sonda 6,2 mm",
      tech: "Cieńsza = więcej przejść",
      text: <span>Wchodzi w ciasne przestrzenie, gdzie grube sondy się zatrzymują. <strong>Idealna do precyzyjnych prac</strong>.</span>,
      img: "/images/inspectra360-img/sonda-sottile-6-2-mm.webp"
    },
    {
      label: "WILGOĆ I CIEPŁO",
      title: "Gotowa do odpływów",
      tech: "IP67 + Odporna na wysokie temp.",
      text: <span>Możesz pracować w wodzie i brudzie bez obaw. <strong>Odporna na wysokie temperatury</strong>: nie spali się nawet w gorących silnikach.</span>,
      video: "/images/inspectra360-img/pronta-per-scarichi.mp4"
    },
    {
      label: "SZCZEGÓŁY",
      title: "Zoom cyfrowy 8x",
      tech: "Powiększenie HD",
      text: <span>Powiększ szczegóły do 8 razy. <strong>Wykryj niewidoczne pęknięcia</strong> i odczytaj ukryte numery seryjne z absolutną precyzją.</span>,
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
      <h2 className="text-3xl font-bold mb-6">Ile razy straciłeś czas (i pieniądze), bo <span className="text-[#dc2626] underline decoration-red-400/50">nie widziałeś?</span></h2>
      <ul className="text-left space-y-4 text-lg text-slate-300 mb-8 max-w-xl mx-auto">
        <li className="flex gap-3"><X className="text-red-500 shrink-0" /> <span>Odpływ się zatyka i <strong>nie wiesz gdzie</strong>?</span></li>
        <li className="flex gap-3"><X className="text-red-500 shrink-0" /> <span>Hałas w samochodzie i warsztat każe ci <strong>'próbować' części na ślepo</strong>?</span></li>
        <li className="flex gap-3"><X className="text-red-500 shrink-0" /> <span>Musisz wiercić w ścianie, ale <strong>boisz się trafić w rurę</strong> lub kabel?</span></li>
      </ul>
      <p className="text-xl font-medium text-white bg-slate-800 p-6 rounded-lg border border-slate-700 shadow-xl">
        To nie twoja wina: bez prawdziwego widoku, działasz na ślepo. <br/><strong className="text-[#dc2626]">A każda nieudana próba kosztuje.</strong>
      </p>
    </div>
  </section>
);

// 5. SOLUTION & HOW IT WORKS
const Solution = () => (
  <section className="py-12 bg-white">
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#0f172a] mb-6">Ostateczne rozwiązanie: <span className="text-[#0f766e]">zobacz, nagraj, rozwiąż.</span></h2>
        {/* Centered block for mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-lg mx-auto md:max-w-none">
          {[
            <span key="s1"><strong>Włączasz i patrzysz</strong>: duży ekran, zero komplikacji.</span>,
            <span key="s2"><strong>Obracasz końcówkę i blokujesz</strong>: znajdujesz dokładny punkt w mgnieniu oka.</span>,
            <span key="s3"><strong>Nagrywasz i pokazujesz</strong>: koniec z dyskusjami, tylko dowody wideo.</span>
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-5 bg-teal-50 rounded-lg border border-teal-100 shadow-sm text-left">
              <CheckCircle2 className="text-[#0f766e] shrink-0" size={20} />
              <span className="font-medium text-slate-800 leading-snug">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-200 pt-12">
        <h3 className="text-2xl font-bold text-center mb-8 uppercase tracking-wider text-slate-400">Jak to działa</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-lg">1</div>
            <p className="font-semibold text-lg text-slate-800">Włącz Inspectra™ 360 Ultra</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-lg">2</div>
            <p className="font-semibold text-lg text-slate-800">Wprowadź sondę w miejsce do inspekcji</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-[#16a34a] text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-lg ring-4 ring-green-100">3</div>
            <p className="font-semibold text-lg text-slate-800">Kierujesz końcówkę, oświetlasz i <strong>od razu rozumiesz problem</strong></p>
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
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">My vs Inni: dlaczego inni marnują twój czas</h2>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
        <div className="grid grid-cols-3 bg-slate-900 text-white p-4 text-sm md:text-base font-bold">
          <div className="col-span-1">Cecha</div>
          <div className="col-span-1 text-center text-[#0f766e]">Inspectra™ 360 Ultra</div>
          <div className="col-span-1 text-center text-slate-400">Inni / Warsztat</div>
        </div>
        {[
          ["Końcówka 360° z blokadą", "Sztywna końcówka: działasz na ślepo"],
          ["Ekran 5\" IPS HD", "Mały ekran lub tylko telefon"],
          ["Półsztywny kabel 5 m", "Miękki przewód lub za krótki"],
          ["Podwójny obiektyw", "Tylko jeden widok"],
          ["LED 8+1 z regulacją", "Słabe oświetlenie"],
          ["microSD 64GB w zestawie", "Brak dowodów / brak nagrań"]
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
            Podobne profesjonalne narzędzia mogą kosztować <span className="underline decoration-red-500">setki złotych</span>. <br/>
            Dziś płacisz tylko <span className="text-[#dc2626] text-2xl font-black">249 zł</span>.
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
      <h2 className="text-3xl font-bold text-center mb-8">Niepowtarzalna oferta: w środku znajdziesz wszystko (realna wartość)</h2>

      <div className="bg-white border-2 border-slate-200 rounded-xl p-6 md:p-8 max-w-2xl mx-auto shadow-2xl relative overflow-hidden">
        {/* Badge */}
        <div className="absolute top-0 right-0 bg-[#dc2626] text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
          Super Rabat
        </div>

        <ul className="space-y-4 mb-8">
          {[
            { name: "Endoskop Inspectra™ 360 Ultra", val: "498 zł", bold: true },
            { name: "microSD 64GB w zestawie", val: "79 zł", bold: false },
            { name: "Zestaw ratunkowy: magnes + haczyk + lusterko", val: "59 zł", bold: false },
            { name: "Sztywna walizka ochronna", val: "79 zł", bold: false },
            { name: "Gratis WOW: Teleskopowy pręt magnetyczny PickUp", val: "49 zł", bold: true },
            { name: "Bonus cyfrowy: Mini-kurs + checklista", val: "39 zł", bold: false },
          ].map((item, i) => (
            <li key={i} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2 border-b border-slate-100 pb-3">
              <span className={`flex items-center gap-2 ${item.bold ? 'font-bold text-slate-900 text-base sm:text-lg' : 'text-slate-600 text-sm sm:text-base'}`}>
                <Gift size={18} className={`shrink-0 ${item.bold ? "text-[#16a34a]" : "text-[#0f766e]"}`} /> {item.name}
              </span>
              <span className="text-slate-400 line-through text-xs sm:text-sm whitespace-nowrap ml-6 sm:ml-0">Wartość {item.val}</span>
            </li>
          ))}
        </ul>

        <div className="text-center">
          <p className="text-slate-500 mb-2 font-medium">Całkowita wartość handlowa: <span className="line-through text-red-400">803 zł</span></p>
          <div className="flex flex-col items-center justify-center mb-6">
             <span className="text-xl font-bold text-slate-800">Dziś płacisz tylko:</span>
             <span className="text-6xl font-black text-[#16a34a] tracking-tight">249 zł</span>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8 text-sm font-bold text-[#0f172a]">
             <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full border border-green-200">Darmowa wysyłka 24/48h</span>
             <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full border border-green-200">Płatność przy odbiorze</span>
          </div>

          <button
            onClick={scrollToOrder}
            className="w-full md:w-auto bg-[#16a34a] hover:bg-[#15803d] text-white text-xl font-bold py-4 px-12 rounded-lg shadow-xl transform transition hover:-translate-y-1 flex items-center justify-center gap-2 mx-auto"
          >
            CHCĘ KOMPLETNY ZESTAW <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  </section>
);

// 8. REVIEWS
const Reviews = () => {
  const reviews = [
    { name: "Jan K., Warszawa", text: <span key="r1">Użyłem jej na silniku: <strong>od razu zobaczyłem, gdzie patrzeć</strong>. Dotarła w 48h i zapłaciłem kurierowi.</span>, img: "/images/inspectra360-img/recensioni/1.webp" },
    { name: "Tomasz M., Kraków", text: <span key="r2">Odpływ w zlewie: znalazłem zator <strong>bez demontażu połowy syfonu</strong>.</span>, img: "/images/inspectra360-img/recensioni/2.webp" },
    { name: "Anna D., Gdańsk", text: <span key="r3">Duży ekran, w końcu dobrze widzę. <strong>Nie jestem techniczna</strong> i używam jej bez problemu.</span> },
    { name: "Marek T., Poznań", text: <span key="r4"><strong>Blokada końcówki robi różnicę</strong>: nie tracisz kadru, gdy się ruszasz.</span> },
    { name: "Piotr L., Wrocław", text: <span key="r5">Odzyskałem klucz, który wpadł za meble. <strong>Magnes bardzo przydatny</strong>.</span> },
    { name: "Andrzej P., Łódź", text: <span key="r6">Nagrałem filmy i pokazałem technikowi. <strong>Zero dyskusji</strong>, dowód był tam.</span> },
  ];

  return (
    <section className="py-12 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Co mówią nasi klienci</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
              {rev.img && (
                <div className="mb-4 rounded-lg overflow-hidden border border-slate-100">
                  <img src={rev.img} alt={`Recenzja ${i + 1}`} loading="lazy" className="w-full h-48 object-cover" />
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
                  <div className="text-xs text-green-600 flex items-center gap-1 font-semibold"><CheckCircle2 size={10} /> Zweryfikowany zakup</div>
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
      <h2 className="text-2xl font-bold mb-6 text-center">SPECYFIKACJA TECHNICZNA</h2>
      <div className="border border-slate-200 rounded-lg overflow-hidden text-sm md:text-base">
        {[
          ["Ekran", "5\" IPS HD (Wysoka rozdzielczość)"],
          ["Rozdzielczość wyświetlacza", "1280×720 pikseli"],
          ["Sonda", "6,2 mm (Ultra cienka)"],
          ["Sterowanie", "360° z blokadą (Technologia Flex-Lock)"],
          ["Obiektywy", "Podwójny (przedni + boczny)"],
          ["Oświetlenie", "LED 8+1 z regulacją"],
          ["Kabel", "Półsztywny 5 m (przedłużka 10 m opcjonalnie)"],
          ["Wodoodporność", "Sonda IP67/68"],
          ["Pamięć", "microSD 64GB w zestawie"],
          ["Dodatkowe funkcje", "Zdjęcia, Wideo, Freeze, Auto-Up"]
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
    { q: "Czy potrzebuję telefonu do jej używania?", a: "Nie: ma wbudowany ekran 5\". Włączasz i używasz." },
    { q: "Jak cienka jest sonda?", a: "Tylko 6,2 mm: wchodzi do wtryskiwaczy i ciasnych rur." },
    { q: "Czy nadaje się do odpływów z wodą?", a: "Tak: sonda jest wodoodporna (IP67) do pracy w wilgoci." },
    { q: "Jak długi jest kabel?", a: "5 metrów, półsztywny (zachowuje nadany kształt)." },
    { q: "Czy mogę nagrywać wideo?", a: "Tak: zdjęcia i wideo są zapisywane na karcie microSD 64GB w zestawie." },
    { q: "Gwarancja i płatność?", a: "2 lata gwarancji. Płacisz gotówką kurierowi." }
  ];

  return (
    <section className="py-12 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Często zadawane pytania</h2>
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
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">Zamawiasz:</div>
              <h3 className="font-bold text-slate-900 text-lg leading-tight">Inspectra™ 360 Ultra + Zestaw akcesoriów</h3>
              <p className="text-xs text-green-600 font-medium flex items-center justify-center md:justify-start gap-1 mt-1"><Check size={12}/> Dostępność natychmiastowa</p>
           </div>
        </div>
        <div className="text-center md:text-right">
           <span className="block text-slate-400 line-through text-sm">498 zł</span>
           <span className="block text-3xl font-black text-[#0f172a] leading-none">249 zł</span>
        </div>
      </div>

      {/* Steps Timeline */}
      <div className="text-center mb-8">
        <h3 className="font-bold text-slate-800 mb-6 flex items-center justify-center gap-2">
          <FileCheck className="text-[#0f766e]" size={20}/> Co się dzieje po złożeniu zamówienia?
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm relative">
           {/* Connecting Line (Desktop) */}
           <div className="hidden md:block absolute top-4 left-0 w-full h-0.5 bg-slate-200 -z-10 transform translate-y-2"></div>

           <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex flex-col items-center gap-2 relative z-10">
              <div className="w-8 h-8 rounded-full bg-[#0f766e] text-white flex items-center justify-center font-bold">1</div>
              <span className="font-bold text-slate-900">Wypełnij formularz</span>
              <p className="text-xs text-slate-500 leading-tight">Wprowadź dane do wysyłki poniżej.</p>
           </div>

           <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex flex-col items-center gap-2 relative z-10">
              <div className="w-8 h-8 rounded-full bg-[#0f766e] text-white flex items-center justify-center font-bold">2</div>
              <span className="font-bold text-slate-900">Poczekaj na telefon</span>
              <p className="text-xs text-slate-500 leading-tight">Zadzwonimy, aby potwierdzić adres.</p>
           </div>

           <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex flex-col items-center gap-2 relative z-10">
              <div className="w-8 h-8 rounded-full bg-[#0f766e] text-white flex items-center justify-center font-bold">3</div>
              <span className="font-bold text-slate-900">Wysyłka</span>
              <p className="text-xs text-slate-500 leading-tight">Paczka wyrusza natychmiast. Dotrze w 24/48h.</p>
           </div>

           <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex flex-col items-center gap-2 relative z-10">
              <div className="w-8 h-8 rounded-full bg-[#16a34a] text-white flex items-center justify-center font-bold">4</div>
              <span className="font-bold text-slate-900">Płacisz przy odbiorze</span>
              <p className="text-xs text-slate-500 leading-tight">Gotówką kurierowi. Zero ryzyka.</p>
           </div>
        </div>
      </div>

      {/* Trust / Privacy Box */}
      <div className="bg-slate-100 border border-slate-200 rounded-lg p-4 flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
         <div className="bg-white p-2 rounded-full border border-slate-200">
            <Lock className="text-slate-400" size={24} />
         </div>
         <div className="text-xs md:text-sm text-slate-600">
            <p className="mb-1"><strong>🔒 Twoje dane są bezpieczne.</strong></p>
            <p className="opacity-80">Nie wymagamy karty kredytowej ani przedpłaty. Twój numer służy tylko kurierowi do dostawy. Zero spamu, gwarantujemy.</p>
         </div>
      </div>

    </div>
  </section>
);

// Network config for PL
const NETWORK_CONFIG = {
  uid: '019bfb2f-317f-7e20-a4a8-44c22cb7bd03',
  key: '05fddd0847c3627b81e1d6',
  offer: '2892',
  lp: '2931',
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
        sessionStorage.setItem('ec_value', '249');

        if (data.message === 'DOUBLE') {
          sessionStorage.setItem('skipConversion', 'true');
        }

        window.location.href = '/ty-pl';
      } catch (error) {
        console.error('Network API error:', error);
        sessionStorage.setItem('ec_phone', formState.phone);
        sessionStorage.setItem('ec_address', formState.address);
        sessionStorage.setItem('ec_value', '249');
        window.location.href = '/ty-pl';
      }
    }
  };

  return (
    <section id="ordine" className="py-16 bg-slate-900 relative">
      <div className="max-w-2xl mx-auto px-4 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-[#0f766e]/20">
          <div className="bg-[#dc2626] text-white text-center py-3 font-bold text-lg animate-pulse">
            ⚠️ Oferta zablokowana na: {formatTime(timeLeft)}
          </div>

          <div className="p-6 md:p-8">
            <h2 className="text-3xl font-black text-center text-slate-900 mb-2">Zamów teraz — Płacisz przy odbiorze</h2>
            <p className="text-center text-slate-600 mb-8 font-medium">Wypełnij formularz w 20 sekund.</p>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <input type="hidden" name="tmfp" ref={tmfpRef} />

              <div>
                <label className="text-sm font-bold text-slate-700 mb-1 flex items-center gap-2">
                  <User size={18} className="text-[#0f766e]"/> Imię i Nazwisko
                </label>
                <input type="text" name="name" value={formState.name} onChange={handleChange} className="w-full p-4 border-2 border-slate-300 rounded-lg focus:border-[#0f766e] focus:ring-1 focus:ring-[#0f766e] outline-none transition bg-slate-50 font-medium" placeholder="Np. Jan Kowalski" required />
              </div>

              <div>
                <label className="text-sm font-bold text-slate-700 mb-1 flex items-center gap-2">
                  <Phone size={18} className="text-[#0f766e]"/> Numer telefonu (komórka)
                </label>
                <input type="tel" name="phone" value={formState.phone} onChange={handleChange} className="w-full p-4 border-2 border-slate-300 rounded-lg focus:border-[#0f766e] focus:ring-1 focus:ring-[#0f766e] outline-none transition bg-slate-50 font-medium" placeholder="Np. 600 123 456" required />
              </div>

              <div>
                <label className="text-sm font-bold text-slate-700 mb-1 flex items-center gap-2">
                  <MapPin size={18} className="text-[#0f766e]"/> Adres dostawy
                </label>
                <textarea name="address" value={formState.address} onChange={handleChange} className="w-full p-4 border-2 border-slate-300 rounded-lg focus:border-[#0f766e] focus:ring-1 focus:ring-[#0f766e] outline-none transition h-24 bg-slate-50 font-medium" placeholder="Ulica, Numer domu, Miasto, Kod pocztowy" required></textarea>
              </div>

              <button type="submit" disabled={isSubmitting} className={`w-full font-black text-2xl py-5 rounded-xl shadow-[0_4px_14px_0_rgba(22,163,74,0.39)] hover:shadow-2xl transition transform hover:-translate-y-1 mt-6 border-b-4 ${isSubmitting ? 'bg-gray-400 border-gray-500 text-gray-200 cursor-not-allowed' : 'bg-[#16a34a] hover:bg-[#15803d] text-white border-[#15803d]'}`}>
                {isSubmitting ? 'WYSYŁAM...' : 'POTWIERDŹ ZAMÓWIENIE'}
              </button>

              <div className="flex justify-center gap-4 mt-4 text-xs text-slate-500 font-medium opacity-80">
                <span className="flex items-center gap-1"><Shield size={12}/> Dane chronione 100%</span>
                <span className="flex items-center gap-1"><Truck size={12}/> Płatność przy odbiorze</span>
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
      <span className="text-slate-900 font-bold text-xl leading-none">249 zł</span>
      <span className="text-[#dc2626] text-xs font-bold animate-pulse uppercase">Ostatnie sztuki −50%</span>
    </div>
    <button
      onClick={scrollToOrder}
      className="bg-[#16a34a] text-white font-bold py-3 px-8 rounded-lg shadow-md uppercase tracking-wide text-sm"
    >
      Zamów teraz
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
      <img src="https://offers.italiadrop.com/forms/api/ck/?o=2892&uid=019bfb2f-317f-7e20-a4a8-44c22cb7bd03&lp=2931" style={{width:'1px',height:'1px',display:'none'}} alt="" />
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
