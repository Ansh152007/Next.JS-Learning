import type { Metadata } from "next";
import { Inter, Saira_Stencil_One } from "next/font/google";
import "./globals.css";

import { Footer, Navigation, Theme } from "../components";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sairaStencil = Saira_Stencil_One({
  variable: "--font-saira-stencil",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Simple Next.js App",
  description: "A simple Next.js application with a navigation bar, footer and routing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sairaStencil.variable} h-full antialiased`}
    >
      <body className="min-h-screen relative overflow-x-hidden">
        <Theme />
        <div className="relative z-10 min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
