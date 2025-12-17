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
];

// Routes that should show only Kizbuy footer (no header)
const FOOTER_ONLY_ROUTES = [
  "/lithiumpro-it",
  "/lithiumpro-pl",
  "/lithiumpro-hu",
  "/lithiumpro-cz",
  "/lithiumpro-sk",
];

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Check if current route is a landing page (no header/footer)
  const isLandingPage = LANDING_ROUTES.some(route => pathname?.startsWith(route));

  // Check if current route should show only footer (lithiumpro landings)
  const isFooterOnly = FOOTER_ONLY_ROUTES.some(route => pathname?.startsWith(route));

  if (isLandingPage) {
    return <>{children}</>;
  }

  if (isFooterOnly) {
    return (
      <>
        {children}
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
