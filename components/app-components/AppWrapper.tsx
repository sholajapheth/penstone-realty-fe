"use client";

import React, { ReactNode, useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Cookies from "js-cookie";
import GoogleSIgnIn from "../GoogleSIgnIn";
import { Providers } from "@/app/providers";

const AppWrapper = ({ children }: { children: ReactNode }) => {

  // useEffect(() => {
  //   Cookies.remove('user')
  //    Cookies.remove("token");
  // },[])
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
      {/* <Providers> */}
        <div className="relative">
          <>
            <Header />
            <GoogleSIgnIn />
            {children}
            <Footer />
          </>
        </div>
      {/* </Providers> */}
    </QueryClientProvider>
  );
};

export default AppWrapper;
