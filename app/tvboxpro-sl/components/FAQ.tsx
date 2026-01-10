'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Ne razumem tehnologije, bom zmogel?",
    answer: "Seveda. Box smo zasnovali tocno za ljudi, ki ne zelijo zapletov. Priklopite ga kot opekac in deluje. Meni je enostaven in ga lahko nastavite v slovenscini."
  },
  {
    question: "Potrebujem hiter internet?",
    answer: "Ne, zahvaljujoc novi tehnologiji kompresije podatkov Box 4K deluje odlicno tudi z obicajnim internetom ali hotspotom iz mobilnika (LTE/5G)."
  },
  {
    question: "Bo deloval na mojem starem televizorju?",
    answer: "Da! Dovolj je, da ima vas televizor HDMI vhod (tisti pravokotni prikljucek, ki ga imajo vsi televizorji od leta 2005). Kabel je vkljucen v paketu."
  },
  {
    question: "Moram placevati mesecno narocnino?",
    answer: "Ne! Placate samo enkratno za napravo. To je danasnja akcijska cena. Po nakupu je Box vas za vedno, brez skritih stroskov."
  },
  {
    question: "Lahko placam kurirju ob dostavi?",
    answer: "Seveda! Ponujamo placilo ob povzetju. Ne potrebujete kreditne kartice. Narocite zdaj in placate z gotovino ali kartico kurirju, ko prejmete posiljko."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-12 px-4 border-t border-gray-200">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-8">
            <HelpCircle className="text-red-600" size={32} />
            <h2 className="text-3xl font-black text-center text-gray-900 uppercase">
            Pogosta vprasanja
            </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-5 text-left font-bold text-gray-800 hover:bg-gray-50 transition"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-red-600" />
                ) : (
                  <ChevronDown className="text-gray-400" />
                )}
              </button>

              {openIndex === index && (
                <div className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
