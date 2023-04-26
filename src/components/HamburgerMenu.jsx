import "../css/components/HamburgerMenu.css";

import React, { useState } from "react";

const HamburgerMenu = () => {
  const [burgerClass, setBurgerClass] = useState("hamburger-bar unclicked");
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("hamburger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("hamburger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div className="hamburger-menu-container">
      <div className="hamburger-menu-bar-container" onClick={updateMenu}>
        <div className={burgerClass}></div>
        <div className={burgerClass}></div>
        <div className={burgerClass}></div>
      </div>
      <div className={menuClass}></div>
    </div>
  );
};

export default HamburgerMenu;
