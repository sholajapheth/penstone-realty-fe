import type { Metadata } from "next";
import "./globals.css";
import AppWrapper from "@/components/app-components/AppWrapper";
import { Providers } from "./providers";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const metadata: Metadata = {
  title: "Penstone",
  description: "Penstone - Revolutionizing Realty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-inter">
        {/* <QueryClientProvider
          client={
            new QueryClient({
              defaultOptions: {
                mutations: {
                  retry: 0,
                },
              },
            })
          }
        > */}
        <Providers>
          <AppWrapper>{children}</AppWrapper>
        </Providers>
        {/* </QueryClientProvider> */}
      </body>
    </html>
  );
}
