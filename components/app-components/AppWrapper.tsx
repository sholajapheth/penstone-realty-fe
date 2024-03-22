import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

const AppWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default AppWrapper;
