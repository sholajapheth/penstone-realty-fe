"use client";

import React, { ReactNode, useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import GoogleSIgnIn from "../GoogleSIgnIn";

const AppWrapper = ({ children }: { children: ReactNode }) => {
  return (
     <QueryClientProvider
          client={
            new QueryClient({
              defaultOptions: {
                mutations: {
                  retry: 0,
                },
              },
            })
          }
        >
    <div className="relative">
      <>
        <Header />
        <GoogleSIgnIn />
        {children}
        <Footer />
      </>
    </div>
            </QueryClientProvider>

  );
};

export default AppWrapper;
