'use client';

import React, { useState, useEffect } from 'react';
import { Timer, ShieldCheck, Lock, Truck, Check } from 'lucide-react';
import { PRICE_PROMO, SHIPPING_COST, PRODUCT_NAME, CURRENCY } from '../constants';

export const OrderForm: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes in seconds
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    address: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Calculate total price as numbers for safety
  const priceNum = parseFloat(PRICE_PROMO.replace(',', '.'));
  const shippingNum = parseFloat(SHIPPING_COST.replace(',', '.'));
  const totalNum = priceNum + shippingNum;
  const totalStr = totalNum.toFixed(2).replace('.', ',');

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(formState.name && formState.phone && formState.address) {
        // Save data to sessionStorage for conversion tracking
        sessionStorage.setItem('ec_phone', formState.phone);
        sessionStorage.setItem('ec_address', formState.address);
        sessionStorage.setItem('ec_value', totalNum.toString());

        // Redirect to thank you page
        window.location.href = '/ty-bgn';
    } else {
        alert("Моля, попълнете всички задължителни полета");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
      return (
          <section id="order-form" className="py-16 px-4 bg-green-50 min-h-[50vh] flex items-center justify-center">
              <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-2xl text-center border-4 border-green-500">
                  <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                      <ShieldCheck size={64} className="text-green-600" />
                  </div>
                  <h2 className="text-3xl font-black text-gray-900 mb-4">БЛАГОДАРИМ ВИ, {formState.name}!</h2>
                  <p className="text-xl text-gray-700 mb-6">Вашата поръчка е потвърдена.</p>
                  <p className="text-gray-600">Наш сътрудник ще се свърже с вас скоро на номер <span className="font-bold">{formState.phone}</span>, за да уточни доставката.</p>
                  <div className="mt-6 bg-yellow-100 p-4 rounded-lg border border-yellow-300">
                    <p className="font-bold text-gray-800 uppercase text-sm mb-1">Сума за плащане на куриера:</p>
                    <p className="text-3xl font-black text-red-600">{totalStr} {CURRENCY}</p>
                  </div>
              </div>
          </section>
      )
  }

  return (
    <section id="order-form" className="py-12 px-4 bg-gray-200">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-gray-300">
        
        {/* Header Form */}
        <div className="bg-red-600 text-white p-6 text-center">
          <h2 className="text-3xl font-black uppercase mb-2">ФОРМА ЗА ПОРЪЧКА</h2>
          <p className="text-lg font-medium">Попълнете по-долу, за да запазите промоцията</p>
          
          <div className="flex items-center justify-center gap-2 mt-4 bg-red-700 py-2 rounded-lg border border-red-500">
            <Timer className="animate-spin-slow" />
            <span className="font-bold text-xl">Офертата изтича след: {formatTime(timeLeft)}</span>
          </div>
        </div>

        <div className="p-6 md:p-8">
          {/* Order Summary */}
          <div className="bg-yellow-50 border-2 border-yellow-400 p-4 rounded-lg mb-8 shadow-sm">
            <h3 className="font-bold text-gray-800 text-lg mb-2 border-b border-yellow-200 pb-2">Преглед на поръчката:</h3>
            <div className="flex justify-between items-center mb-1 text-lg">
              <span>{PRODUCT_NAME}</span>
              <span className="font-bold">{PRICE_PROMO} {CURRENCY}</span>
            </div>
             <div className="flex justify-between items-center text-gray-700 text-sm mb-2">
              <span className="flex items-center gap-1"><Truck size={16}/> Бърза доставка (24/48ч)</span>
              <span className="font-bold text-green-600 flex items-center gap-1">
                АКТИВНА <Check size={16} strokeWidth={3} />
              </span>
            </div>
            <div className="flex justify-between items-center mt-3 pt-3 border-t-2 border-yellow-200 text-2xl font-black text-red-600">
              <span>ОБЩО (Плащане при доставка):</span>
              <span>{totalStr} {CURRENCY}</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-bold mb-2 text-lg">Име и Фамилия <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                name="name"
                required
                placeholder="Напр. Иван Петров"
                className="w-full p-4 border-2 border-gray-300 rounded-lg text-lg focus:border-green-500 focus:ring-green-500 outline-none"
                value={formState.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-bold mb-2 text-lg">Телефонен номер <span className="text-red-500">*</span></label>
              <input 
                type="tel" 
                name="phone"
                required
                placeholder="Напр. 088 123 4567"
                className="w-full p-4 border-2 border-gray-300 rounded-lg text-lg focus:border-green-500 focus:ring-green-500 outline-none"
                value={formState.phone}
                onChange={handleChange}
              />
              <p className="text-sm text-gray-500 mt-1 font-medium bg-blue-50 p-2 rounded text-blue-800">ℹ️ Важно: Куриерът ще звънне на този номер преди доставка.</p>
            </div>

            <div>
              <label className="block text-gray-700 font-bold mb-2 text-lg">Пълен Адрес за доставка <span className="text-red-500">*</span></label>
              <textarea 
                name="address"
                required
                placeholder="Град, Квартал, Улица, Номер, Вход, Апартамент (или офис на Еконт/Спиди)"
                rows={3}
                className="w-full p-4 border-2 border-gray-300 rounded-lg text-lg focus:border-green-500 focus:ring-green-500 outline-none resize-none"
                value={formState.address}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg flex items-center gap-3 text-sm text-gray-600 border border-gray-200">
               <Lock size={20} className="text-green-600"/>
               <span>Нулев риск: плащате в брой/карта чак когато вземете пратката.</span>
            </div>

            <button 
              type="submit" 
              className="w-full bg-green-600 hover:bg-green-700 text-white text-2xl md:text-3xl font-black py-6 px-6 rounded-xl shadow-xl transform transition hover:scale-105 border-b-8 border-green-800 animate-pulse-btn whitespace-normal leading-tight"
            >
              ПОТВЪРДИ ПОРЪЧКАТА
              <span className="block text-lg font-normal mt-2 text-green-100">Бърза Доставка и Плащане при доставка</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};