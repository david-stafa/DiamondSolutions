import LandingPage from "@/components/landingPage/landingPage";

import "material-icons/iconfont/material-icons.css";
import { Gilda_Display } from "next/font/google";

const gilda = Gilda_Display({
  subsets: ["latin"],
  variable: "--font-gilda",
  weight: "400",
});

export default async function Home() {
  return (
    <main className={`min-h-screen w-full ${gilda.className}`}>
      <LandingPage />
    </main>
  );
}
