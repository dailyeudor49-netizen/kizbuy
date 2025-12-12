import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 text-center text-sm">
      <div className="max-w-4xl mx-auto px-4">
        <p className="mb-4">
          Този сайт не е част от уебсайта на Facebook или Facebook Inc. Освен това, този сайт НЕ е одобрен от Facebook по никакъв начин. FACEBOOK е търговска марка на FACEBOOK, Inc.
        </p>
        <p>&copy; 2024 TechDeals Bulgaria. Всички права запазени.</p>
        <div className="mt-4 flex justify-center gap-4">
          <span className="cursor-pointer hover:text-white">Политика за поверителност</span>
          <span className="cursor-pointer hover:text-white">Общи условия</span>
          <span className="cursor-pointer hover:text-white">Контакти</span>
        </div>
      </div>
    </footer>
  );
};