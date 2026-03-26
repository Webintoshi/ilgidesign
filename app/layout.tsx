import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "İlgi Design | Premium Fuar Stand Tasarım",
  description: "Fuar standı tasarımında 20+ yıllık deneyim. Ahşap stand, Maxima stand ve Almanya fuar standı çözümleri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
