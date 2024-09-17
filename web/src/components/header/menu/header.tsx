import Link from "next/link";
import Navbar from "./navbar";
import MobileNav from "./mobileNav";
import SearchContainer from "../search/searchContainer";

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <Link href="/" className="logo">
          LOGO
        </Link>
        {/* for large screens */}
        <Navbar />
        <SearchContainer />
        {/* for small screens */}
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
