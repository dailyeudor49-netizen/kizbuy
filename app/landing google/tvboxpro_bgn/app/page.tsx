import React from 'react';
import { Hero } from '../components/Hero';
import { Problem } from '../components/Problem';
import { HowItWorks } from '../components/HowItWorks';
import { Solution } from '../components/Solution';
import { Comparison } from '../components/Comparison';
import { Bundle } from '../components/Bundle';
import { Reviews } from '../components/Reviews';
import { FAQ } from '../components/FAQ';
import { OrderForm } from '../components/OrderForm';

export default function Page() {
  return (
    <>
      <Hero />
      <Problem />
      <HowItWorks />
      <Solution />
      <Comparison />
      <Bundle />
      <Reviews />
      <FAQ />
      <OrderForm />
    </>
  );
}