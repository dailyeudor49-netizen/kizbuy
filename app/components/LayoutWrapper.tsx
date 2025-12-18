"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

// Routes that should NOT show the main Kizbuy header/footer
const LANDING_ROUTES = [
  "/tvboxpro-hr",
  "/tvboxpro-bgn",
  "/tvboxpro-pl",
  "/ty-hr",
  "/ty-bgn",
  "/ty-pl",
  "/ty-hu",
  "/ty-cz",
  "/ty-sk",
  "/fb-superhub",
  "/ty-lithiumpro-it",
  "/ty-titansaw-hu",
  "/ty-titansaw-cz",
  "/ty-titansaw-pl",
  "/ty-titansaw-lt",
];

// Routes that should show only Kizbuy footer (no header) with LithiumPro brand
const LITHIUMPRO_ROUTES = [
  "/lithiumpro-it",
  "/lithiumpro-pl",
  "/lithiumpro-hu",
  "/lithiumpro-cz",
  "/lithiumpro-sk",
];

// Routes that should show only Kizbuy footer (no header) with Titansaw brand
const TITANSAW_ROUTES = [
  "/titansaw-it",
  "/titansaw-hu",
  "/titansaw-cz",
  "/titansaw-pl",
  "/titansaw-lt",
];

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Check if current route is a landing page (no header/footer)
  const isLandingPage = LANDING_ROUTES.some(route => pathname?.startsWith(route));

  // Check if current route should show only footer with LithiumPro brand
  const isLithiumProLanding = LITHIUMPRO_ROUTES.some(route => pathname?.startsWith(route));

  // Check if current route should show only footer with Titansaw brand
  const isTitansawLanding = TITANSAW_ROUTES.some(route => pathname?.startsWith(route));

  if (isLandingPage) {
    return <>{children}</>;
  }

  if (isLithiumProLanding) {
    return (
      <>
        {children}
        <Footer showLithiumProBrand />
      </>
    );
  }

  if (isTitansawLanding) {
    return (
      <>
        {children}
        <Footer showTitansawBrand />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
