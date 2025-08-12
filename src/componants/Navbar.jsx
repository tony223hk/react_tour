import { useState } from "react";
import logo from "/src/assets/travel-logo.svg";
import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";

const Navbar = () => {
    const [isToggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!isToggle);
    };

    return (

    <nav className="navbar">
      <div className="container navbar-flex">
        <img src={logo} alt="" className="logo" />
        {/*<!--desktop menu --> */}
        <div className="main-menu">
        <PageLinks groupName= "menu-list" itemName="menu-item" />
        </div>
        <div className="icon-menu">
        <SocialLink />
        </div>
        {/*<!--Mobile menu --> */}
        <div className="mobile-menu">
          <div className="mobile-menu-toggle" onClick={handleToggle}>
            <i className="fa-solid fa-bars fa-2x"></i>
          </div>
          <div className= {isToggle ? "mobile-menu-items active" : "mobile-menu-items"}>
            <ul className="mobile-menu-list">
                <PageLinks groupName= "mobile-menu-list" itemName="mobile-menu-item" />
            </ul>
          </div>
        </div>
      </div>
    </nav>
)};

export default Navbar;
