import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Peter Novák",
    location: "Bratislava",
    tag: "Futbalový Fanúšik",
    text: "Konečne sledujem Fortuna Ligu a Ligu Majstrov bez zasekávania. Obraz je krištáľovo čistý a inštalácia mi trvala doslova minútu. Odporúčam každému fanúšikovi!",
    img: "https://picsum.photos/100/100?random=41"
  },
  {
    name: "Mária Kováčová",
    location: "Košice",
    tag: "Milovníčka Seriálov",
    text: "Premenila som televízor v spálni na skutočné kino. Sledujem všetky seriály na Netflixe a HBO Max. Je veľmi jednoduchý na použitie, aj pre niekoho, kto nerozumie technológiám.",
    img: "https://picsum.photos/100/100?random=42"
  },
  {
    name: "Jozef Horváth",
    location: "Žilina",
    tag: "Šťastný Dedko",
    text: "Kúpil som to pre vnúčatá. Hrajú Fortnite na veľkej obrazovke a sú nadšení. Ušetril som veľa peňazí, pretože som nemusel kupovať drahú konzolu! Skvelý nákup.",
    img: "https://picsum.photos/100/100?random=43"
  }
];

export const Reviews: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-8 text-gray-900">
          ČO HOVORIA NAŠI ZÁKAZNÍCI
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-bl-lg">
                  Overený Nákup
              </div>
              <div className="flex items-center gap-3 mb-4">
                <img src={review.img} alt={review.name} className="w-12 h-12 rounded-full border-2 border-green-500" />
                <div>
                  <h4 className="font-bold text-gray-900 leading-tight">{review.name}</h4>
                  <p className="text-xs text-blue-600 font-bold">{review.tag}</p>
                  <p className="text-xs text-gray-500">{review.location}</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-2">
                {[1, 2, 3, 4, 5].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-700 italic text-sm">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
