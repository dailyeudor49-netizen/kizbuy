import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Marko Novak",
    location: "Ljubljana",
    tag: "Nogometni Navdušenec",
    text: "Koncno gledam Prvo Ligo in Ligo Prvakov brez zatikanja. Slika je kristalno cista in namestitev mi je vzela dobesedno minuto. Priporocam vsakemu navijasu!",
    img: "https://picsum.photos/100/100?random=51"
  },
  {
    name: "Ana Horvat",
    location: "Maribor",
    tag: "Ljubiteljica Serij",
    text: "Spremenila sem televizor v spalnici v pravi kino. Gledam vse serije na Netflixu in HBO Max. Je zelo enostaven za uporabo, tudi za nekoga, ki se ne spozna na tehnologijo.",
    img: "https://picsum.photos/100/100?random=52"
  },
  {
    name: "Janez Kovac",
    location: "Celje",
    tag: "Srecni Dedek",
    text: "Kupil sem za vnuke. Igrajo Fortnite na velikem zaslonu in so navduseni. Prihranil sem veliko denarja, ker mi ni bilo treba kupiti drage konzole! Odlicen nakup.",
    img: "https://picsum.photos/100/100?random=53"
  }
];

export const Reviews: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-8 text-gray-900">
          KAJ PRAVIJO NASE STRANKE
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-bl-lg">
                  Preverjen Nakup
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
