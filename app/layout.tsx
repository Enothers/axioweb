import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AxioWeb",
  description: "Création de sites web premium",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={geist.className}>
  <Navbar />

  <div className="zoom-wrapper">
    <main>{children}</main>
  </div>
</body>
    </html>
  );
}