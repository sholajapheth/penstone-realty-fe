import type { Metadata } from "next";
import "./globals.css";
import AppWrapper from "@/components/app-components/AppWrapper";

export const metadata: Metadata = {
  title: "Penstone",
  description: "Penstone - Revolutionizing Realty",
  icons: "/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/img/Landscape.png" />
      <body className="font-inter">
          <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
