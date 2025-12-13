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
  "/fb-superhub",
];

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Check if current route is a landing page
  const isLandingPage = LANDING_ROUTES.some(route => pathname?.startsWith(route));

  if (isLandingPage) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
