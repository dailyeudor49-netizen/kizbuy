'use client';

import React, { useState, useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

// SHA-256 hash function for Enhanced Conversions
async function sha256(message: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(message.toLowerCase().trim());
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

export default function ThankYouPage() {
  const [orderCode, setOrderCode] = useState('');

  useEffect(() => {
    const stored = sessionStorage.getItem('orderCode');
    if (stored) {
      setOrderCode(stored);
    } else {
      const newCode = Math.floor(100000 + Math.random() * 900000).toString();
      sessionStorage.setItem('orderCode', newCode);
      setOrderCode(newCode);
    }

    // Google Ads Conversion Tracking
    const alreadyTracked = sessionStorage.getItem('conversionTracked');
    const skipConversion = sessionStorage.getItem('skipConversion');

    // Skip conversion if it's a DOUBLE from network
    if (skipConversion === 'true') {
      console.log('⚠️ Skipping Google Ads conversion - DOUBLE lead from network');
      sessionStorage.removeItem('skipConversion');
      return;
    }

    if (typeof window !== 'undefined' && !alreadyTracked) {
      const transactionId = sessionStorage.getItem('orderCode') || Math.floor(100000 + Math.random() * 900000).toString();

      // Get Enhanced Conversions data from sessionStorage
      const ecPhone = sessionStorage.getItem('ec_phone') || '';
      const ecAddress = sessionStorage.getItem('ec_address') || '';
      const ecValue = parseFloat(sessionStorage.getItem('ec_value') || '1.0');

      // Load gtag script
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-17261661993';
      document.head.appendChild(script);

      script.onload = async () => {
        window.dataLayer = window.dataLayer || [];
        window.gtag = function() { window.dataLayer!.push(arguments); };
        window.gtag('js', new Date());

        // Prepare Enhanced Conversions user_data with hashed values
        const userData: Record<string, string> = {};
        if (ecPhone) {
          const normalizedPhone = ecPhone.replace(/[\s\-\(\)]/g, '');
          userData.phone_number = await sha256(normalizedPhone);
        }
        if (ecAddress) {
          userData.address = {
            street: await sha256(ecAddress)
          } as unknown as string;
        }

        // Purchase BGN conversion
        window.gtag('config', 'AW-17261661993');
        window.gtag('event', 'conversion', {
          'send_to': 'AW-17261661993/FfykCNvZ1M8bEKmegKdA',
          'value': ecValue,
          'currency': 'BGN',
          'transaction_id': transactionId,
          'user_data': userData
        });
        sessionStorage.setItem('conversionTracked', 'true');

        // Clean up EC data
        sessionStorage.removeItem('ec_name');
        sessionStorage.removeItem('ec_phone');
        sessionStorage.removeItem('ec_address');
        sessionStorage.removeItem('ec_value');

        console.log('✅ Google Ads conversion tracked with Enhanced Conversions, transaction_id:', transactionId);
      };
    }
  }, []);

  return (
    <div className="ty-container" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <div className="ty-box" style={{
        background: 'white',
        borderRadius: '24px',
        padding: '3rem',
        maxWidth: '550px',
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
      }}>
        <style>{`
          @media (max-width: 640px) {
            .ty-box { padding: 1rem !important; margin: 0 !important; border-radius: 16px !important; }
            .ty-container { padding: 0.75rem !important; }
          }
        `}</style>
        <div style={{
          width: '80px',
          height: '80px',
          background: 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.5rem',
          fontSize: '2.5rem',
          color: 'white'
        }}>
          ✓
        </div>

        <h1 style={{
          fontSize: '2rem',
          fontWeight: 800,
          color: '#111827',
          marginBottom: '0.5rem'
        }}>
          Благодарим за поръчката!
        </h1>

        <p style={{
          color: '#6b7280',
          fontSize: '1rem',
          marginBottom: '1.5rem'
        }}>
          Вашата поръчка беше успешно приета.
        </p>

        <div style={{
          background: 'linear-gradient(135deg, #FFF4E6, #FFE8CC)',
          borderRadius: '12px',
          padding: '1.25rem',
          marginBottom: '1.5rem',
          border: '1px solid #FFDAA3'
        }}>
          <div style={{ fontSize: '0.875rem', color: '#92400e', marginBottom: '0.25rem' }}>Номер на поръчката</div>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#FF8C00', letterSpacing: '2px' }}>{orderCode}</div>
        </div>

        <div style={{
          background: '#F8FAFC',
          borderRadius: '12px',
          padding: '1.5rem',
          marginBottom: '1.5rem',
          textAlign: 'left'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ width: '32px', height: '32px', background: '#16a34a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1rem' }}>лв</div>
            <div>
              <div style={{ fontWeight: 600, color: '#1E293B', fontSize: '0.95rem' }}>Плащане при доставка</div>
              <div style={{ color: '#64748b', fontSize: '0.85rem' }}>Ще платите в брой на куриера</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ width: '32px', height: '32px', background: '#3B82F6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1rem' }}>📦</div>
            <div>
              <div style={{ fontWeight: 600, color: '#1E293B', fontSize: '0.95rem' }}>Безплатна доставка</div>
              <div style={{ color: '#64748b', fontSize: '0.85rem' }}>Доставка за 2-3 работни дни</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ width: '32px', height: '32px', background: '#8B5CF6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1rem' }}>↺</div>
            <div>
              <div style={{ fontWeight: 600, color: '#1E293B', fontSize: '0.95rem' }}>30 дни за връщане</div>
              <div style={{ color: '#64748b', fontSize: '0.85rem' }}>Връщане на парите, ако не сте доволни</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '32px', height: '32px', background: '#F59E0B', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1rem' }}>★</div>
            <div>
              <div style={{ fontWeight: 600, color: '#1E293B', fontSize: '0.95rem' }}>2 години гаранция</div>
              <div style={{ color: '#64748b', fontSize: '0.85rem' }}>На всички продукти</div>
            </div>
          </div>
        </div>

        <div style={{
          background: '#F1F5F9',
          borderRadius: '12px',
          padding: '1rem',
          marginBottom: '2rem'
        }}>
          <div style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '0.25rem' }}>Нуждаете се от помощ или искате да върнете продукта?</div>
          <a href="mailto:info@kizbuy.com" style={{ color: '#FF8C00', fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem' }}>info@kizbuy.com</a>
          <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.5rem' }}>Можете да поискате връщане в рамките на 30 дни, ако не сте доволни от продукта</div>
        </div>

        <a href="/" style={{
          display: 'inline-block',
          background: 'linear-gradient(135deg, #FFB800 0%, #FF7A00 100%)',
          color: 'white',
          padding: '1rem 2rem',
          borderRadius: '12px',
          fontSize: '1rem',
          fontWeight: 600,
          textDecoration: 'none'
        }}>
          Обратно към началната страница
        </a>
      </div>
    </div>
  );
}
