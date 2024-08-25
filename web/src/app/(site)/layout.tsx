import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import type { Metadata } from "next";
import Header from "@/components/header/menu/header";
import Footer from "@/components/footer/footer";
import theme from "../../theme";
import "../globals.css";
import {
  Gilda_Display,
  Cormorant_Garamond,
} from "next/font/google";

export const metadata: Metadata = {
  title: "Diamond Solutions",
  description: "Lab grown diamonds and jewelry",
};

const gilda = Gilda_Display({
  subsets: ["latin"],
  variable: "--font-gilda",
  weight: "400",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={gilda.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Header />

            {children}

            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
