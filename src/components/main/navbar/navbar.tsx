import NavBarDesktop from "./navbar-desktop";
import NavBarMobile from "./navbar-mobile";

const NavBar = () => {
    return ( 
        <header id="/" className="sticky top-0 z-50">
        <NavBarDesktop />
        <NavBarMobile />
        </header>
     );
}
 
export default NavBar;