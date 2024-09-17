import type { Metadata } from "next";
import Header from "@/components/header/menu/header";
import Footer from "@/components/footer/footer";
import "../globals.css";
import { Gilda_Display } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Diamond Solutions",
  description: "Lab grown diamonds and jewelry",
};

const gilda = Gilda_Display({
  subsets: ["latin"],
  variable: "--font-gilda", 
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={gilda.className}>
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
