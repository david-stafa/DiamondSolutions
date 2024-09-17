import Link from "next/link";
import Navbar from "./navbar";
import MobileNav from "./mobileNav";
import SearchContainer from "../search/searchContainer";
import { Suspense } from "react";

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <Link href="/" className="logo">
          LOGO
        </Link>
        {/* for large screens */}
        <Navbar />
        <Suspense>
          <SearchContainer />
        </Suspense>
        {/* for small screens */}
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
