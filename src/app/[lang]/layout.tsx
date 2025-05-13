import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import type { Lang } from "@/types/Lang";
import { Toaster } from "@/components/ui/sonner"

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default: "imSoft",
    template: "%s | imSoft",
  },
  description: "imSoft es una empresa de desarrollo de software",
  twitter: {
    card: "summary_large_image",
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: Lang }>
}>) {
  const lang = (await params).lang

  return (
    <html lang={lang} suppressHydrationWarning>
      <body
        className={`${montserrat.variable} antialiased transition-colors duration-300 bg-background text-primary-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
