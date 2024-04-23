"use client";

import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { usePathname } from "next/navigation";

const AppWrapper = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  // const path = pathname.includes
  return (
    <div className="relative">
      <>
        <Header />
        {children}
        <Footer />
      </>
    </div>
  );
};

export default AppWrapper;
