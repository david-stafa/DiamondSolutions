"use client";

import Link from "next/link";
import Instagram from "@mui/icons-material/Instagram";
import Facebook from "@mui/icons-material/Facebook";
import Menu from "@mui/icons-material/Menu";
import Close from "@mui/icons-material/Close";
import SideNav from "./sideNav";
import { useState } from "react";
import ArrowRightOrDown from "./arrowRightOrDown";
import NavigationRollDown from "./navigationRollDown";

export default function Navigation() {

  // For mobile nav
  const [navStatus, setNavStatus] = useState(false);
  const handleNavClose = () => {
    setNavStatus(false);
    console.log(false);
  };
  const handleNavOpen = () => {
    setNavStatus(true);
    console.log(true);
  };

  // For desktop sub menu
  const [rollDownStatus, setRolldownStatus] = useState(false);
  const rollDownOpen = () => {
    setRolldownStatus(true);
  };
  const rollDownClose = () => {
    setRolldownStatus(false);
  };

  return (
    <>
      <nav
        className={`relative ${rollDownStatus ? "shadow-sm" : "shadow-md"}`}
      >
        <div className={`max-w-screen-2xl m-auto px-4 md:px-6`}>
          {/* LOGO XL SCREEN */}
          <div className="hidden lg:flex justify-center ">
            <Link href="/">
              <h2>D/S</h2>
            </Link>
          </div>
          <div className="flex h-12 sm:h-14 lg:h-16 items-center">
            {/* BURGER MENU ICON */}
            <div
              className="flex items-center size-10 lg:hidden cursor-pointer"
              onClick={navStatus ? handleNavClose : handleNavOpen}
            >
              {navStatus ? <Close /> : <Menu />}
            </div>
            {/*LINKS */}
            <div className="hidden lg:flex justify-around grow h-full">
              <Link
                href="/sperky"
                className="flex justifi-center items h-"
                onMouseEnter={rollDownOpen}
                // TODO FIX
                // onMouseLeave={() => setTimeout(rollDownClose, 500)}
              >
                <button className="h-full">Šperky</button>
                <ArrowRightOrDown rollDownStatus={rollDownStatus} />
              </Link>
              <Link
                href="/volne-diamanty"
                className="flex justifi-center items"
              >
                <button>Volné diamanty</button>
              </Link>
              <Link href="/" className="flex justifi-center items">
                <button>Investiční šperky</button>
              </Link>
              <Link href="/kontakt" className="flex justifi-center items">
                <button>Kontakt</button>
              </Link>
            </div>
            {/* LOGO SMALL CREEN */}
            <div className="lg:hidden flex justify-center items-center grow">
              <Link href="/">
                <h2>D/S</h2>
              </Link>
            </div>
            {/* SOCIALS */}
            <div className="flex">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel={"noreferrer"}
              >
                <div className="size-10 flex justify-center items-center rounded-full hover:bg-amber-500">
                  <Instagram />
                </div>
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel={"noreferrer"}
              >
                <div className="size-10 flex justify-center items-center rounded-full hover:bg-amber-500">
                  <Facebook />
                </div>
              </a>
            </div>
          </div>
        </div>
        <NavigationRollDown
          rollDownStatus={rollDownStatus}
          rollDownClose={rollDownClose}
          rollDownOpen={rollDownOpen}
        />
      </nav>
      <SideNav
        navStatus={navStatus}
        handleNavClose={handleNavClose}
        handleNavOpen={handleNavOpen}
      />
    </>
  );
}
