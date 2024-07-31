"use client";

import React, { ReactNode, useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Cookies from "js-cookie";
import GoogleSIgnIn from "../GoogleSIgnIn";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      <div className="relative">
        <>
          <ToastContainer />
          <Header />
          {/* <GoogleSIgnIn /> */}
          {children}
          <Footer />
        </>
      </div>
    </QueryClientProvider>
  );
};

export default AppWrapper;
