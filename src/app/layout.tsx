import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { Montserrat } from "next/font/google";
import "./globals.css";
import { FooterSection } from "@/components/Footer";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "imSoft",
  description: "imSoft",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} antialiased`}>
        {children}
        <FooterSection />
        <Analytics/>
      </body>
    </html>
  );
}
