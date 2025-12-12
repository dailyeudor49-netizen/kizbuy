import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 text-center text-sm">
      <div className="max-w-4xl mx-auto px-4">
        <p className="mb-4">
          Ta strona nie jest częścią serwisu Facebook ani Facebook Inc. Ponadto, ta strona nie jest w żaden sposób sponsorowana przez Facebook. FACEBOOK jest znakiem towarowym firmy FACEBOOK, Inc.
        </p>
        <p>&copy; 2024 TechDeals Polska. Wszelkie prawa zastrzeżone.</p>
        <div className="mt-4 flex justify-center gap-4">
          <span className="cursor-pointer hover:text-white">Polityka Prywatności</span>
          <span className="cursor-pointer hover:text-white">Regulamin</span>
          <span className="cursor-pointer hover:text-white">Kontakt</span>
        </div>
      </div>
    </footer>
  );
};