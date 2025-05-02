import { GetUserRole } from "@/lib/actions/user-action";
import NavBarDesktop from "./navbar-desktop";
import NavBarMobile from "./navbar-mobile";

const NavBar = async () => {
  const userRole = await GetUserRole();

  return (
    <header id="/" className="sticky top-0 z-50">
      <NavBarDesktop role={userRole} />
      <NavBarMobile role={userRole} />
    </header>
  );
};

export default NavBar;
