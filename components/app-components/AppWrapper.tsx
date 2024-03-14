import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

const AppWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default AppWrapper;
