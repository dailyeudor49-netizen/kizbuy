'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Neišmanau technologijų, ar susidorosiu?",
    answer: "Žinoma. Sukūrėme Box'ą būtent žmonėms, kurie nenori komplikacijų. Jį įjungiate kaip skrudintuvą ir veikia. Meniu paprastas ir gali būti nustatytas lietuvių kalba."
  },
  {
    question: "Ar reikia greito interneto?",
    answer: "Ne, dėka naujos duomenų suspaudimo technologijos, Box 4K puikiai veikia net su įprastu internetu arba telefono hotspot'u (LTE/5G)."
  },
  {
    question: "Ar tinka mano senam televizoriui?",
    answer: "Taip! Užtenka, kad jūsų televizorius turėtų HDMI įvestį (tas stačiakampis lizdas, kurį turi visi televizoriai nuo 2005 m.). Kabelis pridedamas komplekte."
  },
  {
    question: "Ar reikia mokėti mėnesinį mokestį?",
    answer: "Ne! Mokate tik vieną kartą už įrenginį. Tai šiandienos akcijos kaina. Po pirkimo Box'as jūsų amžinai, be jokių paslėptų mokesčių."
  },
  {
    question: "Ar galiu sumokėti kurjeriui gavęs siuntą?",
    answer: "Žinoma! Siūlome mokėjimą pristatymo metu. Jums nereikia kreditinės kortelės. Užsisakote dabar ir mokate grynaisiais arba kortele kurjeriui, kai gaunate siuntą."
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
            Dažniausiai užduodami klausimai
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
