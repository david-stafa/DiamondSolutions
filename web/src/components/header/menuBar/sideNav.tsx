"use client";

import Link from "next/link";
import SideNavRollDown from "./sideNavRollDown";
import { useState } from "react";
import ArrowRightOrDown from "./arrowRightOrDown";

interface SideNavProps {
  navStatus: boolean;
  handleNavClose: () => void;
  handleNavOpen: () => void;
}

const SideNav: React.FC<SideNavProps> = ({
  navStatus,
  handleNavClose,
  handleNavOpen,
}) => {
  const [rollDownStatus, setRolldownStatus] = useState(false);

  const rollDownHandler = () => {
    setRolldownStatus(!rollDownStatus);
  };

  return (
    <div
      className={
        "w-screen h-fit bg-slate-100 z-10 absolute" +
        (navStatus ? " block" : " hidden")
      }
    >
      {/*LINKS */}
        <div
          className="flex justifi-start shadow-sm py-4 pl-4"
          onClick={rollDownHandler}
        >
          <button className="pr-1">ŠPERKY</button>
          <ArrowRightOrDown rollDownStatus={rollDownStatus} />
        </div>
        <SideNavRollDown
          handleNavClose={handleNavClose}
          rollDownStatus={rollDownStatus}
        />
        <Link
          href="/volne-diamanty"
          className="flex justifi-center items shadow-sm py-4 pl-4"
          onClick={handleNavClose}
        >
          <button>VOLNÉ DIAMANTY</button>
        </Link>
        <Link
          href="/"
          className="flex justifi-center items shadow-sm py-4 pl-4"
          onClick={handleNavClose}
        >
          <button>INVESTIČNÍ ŠPERKY</button>
        </Link>
        <Link
          href="/kontakt"
          className="flex justifi-center items shadow-sm py-4 pl-4"
          onClick={handleNavClose}
        >
          <button>KONTAKT</button>
        </Link>
      </div>
  );
};

export default SideNav;
