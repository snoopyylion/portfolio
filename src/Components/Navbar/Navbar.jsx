import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import theme_pattern from "../../assets/logoline.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false); // Hide navbar when scrolling down
      } else {
        setShowNavbar(true); // Show navbar when scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={`navbar ${showNavbar ? "navbar-visible" : "navbar-hidden"}`}>
      <div className="navbar-container">
        <div className="logo">
          <h1>Oluwaseyi</h1>
          <img src={theme_pattern} alt="Theme Pattern" />
        </div>
        <img src={menu_open} onClick={openMenu} alt="Open Menu" className="nav-mob-open" />
        <ul ref={menuRef} className="nav-menu">
          <img src={menu_close} onClick={closeMenu} alt="Close Menu" className="nav-mob-close" />
          {["home", "about", "services", "work", "contact"].map((item) => (
            <li key={item} className={menu === item ? "active" : ""}>
              <AnchorLink className="anchor-link" offset={50} href={`#${item}`} onClick={() => setMenu(item)}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </AnchorLink>
              <div className={menu === item ? "tiny-line" : ""}></div>
            </li>
          ))}
        </ul>
        <div className="nav-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact" onClick={() => setMenu("contact")}>
            Connect With Me
          </AnchorLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
