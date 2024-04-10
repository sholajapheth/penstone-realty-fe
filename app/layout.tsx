import type { Metadata } from "next";
import "./globals.css";
import AppWrapper from "@/components/app-components/AppWrapper";
import { Providers } from "./providers";


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
        <Providers>
          <AppWrapper>{children}</AppWrapper>
        </Providers>
      </body>
    </html>
  );
}
