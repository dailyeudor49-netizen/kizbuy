import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Mindaugas Kazlauskas",
    location: "Vilnius",
    tag: "Futbolo Fanas",
    text: "Pagaliau žiūriu A Lygą ir Čempionų Lygą be strigimų. Vaizdas krištolinis, o instaliacija užtruko tiesiogine prasme minutę. Rekomenduoju kiekvienam fanui!",
    img: "https://picsum.photos/100/100?random=31"
  },
  {
    name: "Rūta Jankauskienė",
    location: "Kaunas",
    tag: "Serialų Mėgėja",
    text: "Paverčiau miegamojo televizorių tikru kinu. Žiūriu visus serialus per Netflix ir HBO Max. Labai lengva naudoti, net žmogui, kuris neišmano technologijų.",
    img: "https://picsum.photos/100/100?random=32"
  },
  {
    name: "Antanas Petrauskas",
    location: "Klaipėda",
    tag: "Laimingas Senelis",
    text: "Nupirkau anūkams. Žaidžia Fortnite dideliame ekrane ir yra sužavėti. Sutaupiau daug pinigų, nes nereikėjo pirkti brangios konsolės! Puikus pirkinys.",
    img: "https://picsum.photos/100/100?random=33"
  }
];

export const Reviews: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-8 text-gray-900">
          KĄ SAKO MŪSŲ KLIENTAI
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-bl-lg">
                  Patvirtintas Pirkinys
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
