
import NavBarDesktop from "./navbar-desktop";
import NavBarMobile from "./navbar-mobile";
import { auth } from "@/auth";

const NavBar = async () => {
  const userRole = (await auth()) ?? null;
  return (
    <header id="/" className="sticky top-0 z-50">
      <NavBarDesktop role={userRole?.user?.role} />
      <NavBarMobile role={userRole?.user?.role} />
    </header>
  );
};

export default NavBar;
