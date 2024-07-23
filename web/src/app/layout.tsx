import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import Header from "@/components/header/menu/header";
import "./globals.css";
import Footer from "@/components/footer/footer";
import { Gilda_Display } from "next/font/google";

const gilda = Gilda_Display({
  subsets: ["latin"],
  variable: "--font-gilda",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

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
