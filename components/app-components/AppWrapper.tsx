"use client"

import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { usePathname } from "next/navigation";

const AppWrapper = ({ children }: { children: ReactNode }) => {
    const pathname = usePathname();
// const path = pathname.includes 
  return (
    <div className="relative">
      {!pathname.includes("agent") && (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}
      {pathname.includes("agent") && (
        <>
          {children}
        </>
      )}
    </div>
  );
};

export default AppWrapper;
