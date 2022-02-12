import React, { useState, useEffect } from "react";
import "./header.css";
import Navbar from "./Navbar";
const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);

  const handleScroll = () => {
    console.log("top", document.body.getBoundingClientRect().top);
    console.log();
    setScrollPos(document.body.getBoundingClientRect().top);
    setShowHeader(document.body.getBoundingClientRect().top > scrollPos);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  console.log(scrollPos);
  return (
    <div>
      <nav
        id="navbar"
        className={`${
          showHeader && scrollPos < -713 ? "headerVisible" : "headerHidden"
        }`}
      >
        <Navbar isNav />
      </nav>

      <Navbar />
    </div>
  );
};

export default Header;
