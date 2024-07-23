import Link from "next/link";
import Navbar from "./navbar";
import MobileNav from "./mobileNav";

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <Link href="/" className="logo">
          LOGO
        </Link>
        {/* for large screens */}
        <Navbar />
        {/* for small screens */}
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
