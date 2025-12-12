import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 text-center text-sm">
      <div className="max-w-4xl mx-auto px-4">
        <p className="mb-4">
          Ova stranica nije dio Facebook web stranice ili Facebook Inc. Osim toga, ova stranica NIJE podržana od strane Facebooka na bilo koji način. FACEBOOK je zaštitni znak tvrtke FACEBOOK, Inc.
        </p>
        <p>&copy; 2024 TechDeals Hrvatska. Sva prava pridržana.</p>
        <div className="mt-4 flex justify-center gap-4">
          <span className="cursor-pointer hover:text-white">Politika privatnosti</span>
          <span className="cursor-pointer hover:text-white">Uvjeti korištenja</span>
          <span className="cursor-pointer hover:text-white">Kontakt</span>
        </div>
      </div>
    </footer>
  );
};