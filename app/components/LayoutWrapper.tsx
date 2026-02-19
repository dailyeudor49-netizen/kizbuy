"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

// Routes that should NOT show the main Kizbuy header/footer
const LANDING_ROUTES = [
  "/tvboxpro-hr",
  "/tvboxpro-bgn",
  "/tvboxpro-pl",
  "/tvboxpro-es",
  "/tvboxpro-lt",
  "/tvboxpro-sk",
  "/tvboxpro-sl",
  "/ty-hr",
  "/ty-bgn",
  "/ty-pl",
  "/ty-es",
  "/ty-lt",
  "/ty-sk",
  "/ty-sl",
  "/ty-hu",
  "/ty-cz",
  "/fb-superhub",
  "/ty-lithiumpro-it",
  "/ty-titansaw-hu",
  "/ty-titansaw-cz",
  "/ty-titansaw-pl",
  "/ty-titansaw-lt",
];

// Routes that show only footer (no header) with Inspectra brand
const INSPECTRA_ROUTES = [
  "/inspectra360",
  "/inspectra360_pl",
  "/inspectra360_sk",
  "/inspectra360_cz",
  "/inspectra360_lt",
];

// Routes that should show only Kizbuy footer (no header) with Ortopper brand
const ORTOPPER_ROUTES = [
  "/ortopper",
  "/ortopper-pl",
  "/ortopper-lt",
  "/ortopper-hu",
  "/ortopper-czk",
  "/ortopper-de",
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

// Routes that should show only footer (no header) - generic landings
const NO_HEADER_ROUTES = [
  "/gg-quickchef-pl",
  "/gg-quickchef-cz",
  "/gg-quickchef-hu",
  "/gg-quickchef-sl",
  "/robotcleanprox_pl",
  "/robotcleanprox_sk",
  "/robotcleanprox_czk",
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

  // Check if current route should show only footer (no header)
  const isNoHeaderLanding = NO_HEADER_ROUTES.some(route => pathname?.startsWith(route));

  // Check if current route should show only Ortopper brand footer (no header)
  const isOrtopperLanding = ORTOPPER_ROUTES.some(route => pathname?.startsWith(route));

  // Check if current route should show only footer with Inspectra brand
  const isInspectraLanding = INSPECTRA_ROUTES.some(route => pathname?.startsWith(route));

  if (isLandingPage) {
    return <>{children}</>;
  }

  if (isInspectraLanding) {
    // Determine footer text based on language
    let inspectraFooterText = (
      <>
        <span className="font-semibold">Inspectra™ 360</span> è un marchio registrato e venduto esclusivamente da{" "}
        <span className="font-semibold">Kizbuy</span>
      </>
    );

    if (pathname?.startsWith('/inspectra360_pl')) {
      inspectraFooterText = (
        <>
          <span className="font-semibold">Inspectra™ 360</span> jest zarejestrowanym znakiem towarowym sprzedawanym wyłącznie przez{" "}
          <span className="font-semibold">Kizbuy</span>
        </>
      );
    } else if (pathname?.startsWith('/inspectra360_sk')) {
      inspectraFooterText = (
        <>
          <span className="font-semibold">Inspectra™ 360</span> je registrovaná ochranná známka predávaná výhradne prostredníctvom{" "}
          <span className="font-semibold">Kizbuy</span>
        </>
      );
    } else if (pathname?.startsWith('/inspectra360_cz')) {
      inspectraFooterText = (
        <>
          <span className="font-semibold">Inspectra™ 360</span> je registrovaná ochranná známka prodávaná výhradně prostřednictvím{" "}
          <span className="font-semibold">Kizbuy</span>
        </>
      );
    } else if (pathname?.startsWith('/inspectra360_lt')) {
      inspectraFooterText = (
        <>
          <span className="font-semibold">Inspectra™ 360</span> yra registruotas prekės ženklas, parduodamas išskirtinai per{" "}
          <span className="font-semibold">Kizbuy</span>
        </>
      );
    }

    return (
      <>
        {children}
        <div className="bg-gray-100 border-t border-gray-200 py-4 text-center">
          <p className="text-sm text-gray-600">
            {inspectraFooterText}
          </p>
        </div>
        <Footer />
      </>
    );
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

  if (isNoHeaderLanding) {
    return (
      <>
        {children}
        <Footer />
      </>
    );
  }

  if (isOrtopperLanding) {
    // Determine footer text based on language
    let ortopperFooterText = (
      <>
        <span className="font-semibold">Ortopper®</span> è un marchio registrato e venduto esclusivamente da{" "}
        <span className="font-semibold">Kizbuy</span>
      </>
    );

    if (pathname?.startsWith('/ortopper-pl')) {
      ortopperFooterText = (
        <>
          <span className="font-semibold">Ortopper®</span> jest zarejestrowanym znakiem towarowym sprzedawanym wyłącznie przez{" "}
          <span className="font-semibold">Kizbuy</span>
        </>
      );
    } else if (pathname?.startsWith('/ortopper-lt')) {
      ortopperFooterText = (
        <>
          <span className="font-semibold">Ortopper®</span> yra registruotas prekės ženklas, parduodamas išskirtinai per{" "}
          <span className="font-semibold">Kizbuy</span>
        </>
      );
    } else if (pathname?.startsWith('/ortopper-hu')) {
      ortopperFooterText = (
        <>
          <span className="font-semibold">Ortopper®</span> bejegyzett védjegy, amelyet kizárólag a{" "}
          <span className="font-semibold">Kizbuy</span> forgalmaz
        </>
      );
    } else if (pathname?.startsWith('/ortopper-czk')) {
      ortopperFooterText = (
        <>
          <span className="font-semibold">Ortopper®</span> je registrovaná ochranná známka prodávaná výhradně prostřednictvím{" "}
          <span className="font-semibold">Kizbuy</span>
        </>
      );
    } else if (pathname?.startsWith('/ortopper-de')) {
      ortopperFooterText = (
        <>
          <span className="font-semibold">Ortopper®</span> ist eine eingetragene Marke, die ausschließlich von{" "}
          <span className="font-semibold">Kizbuy</span> vertrieben wird
        </>
      );
    }

    return (
      <>
        {children}
        <div className="bg-gray-100 border-t border-gray-200 py-4 text-center">
          <p className="text-sm text-gray-600">
            {ortopperFooterText}
          </p>
        </div>
        <Footer />
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
