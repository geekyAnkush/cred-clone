import React, { useState } from "react";

const Navbar = ({ isNav }) => {
  const [mobMenu, setmobMenu] = useState(false);
  const toggleHam = () => setmobMenu(!mobMenu);
  return (
    <div className={`mobile-menu-wrapper ${isNav ? "nav" : ""}`}>
      <div className={`mobile-menu only-mobile ${mobMenu ? "overlay" : ""}`}>
        <div className="mobile-navbar">
          <div className="mobile-nav-item">credit score check</div>
          <div className="mobile-nav-item">credit card bill payment</div>
        </div>
      </div>
      <div className="flex max-width header">
        <img
          src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png"
          className="header-logo"
        />
        <div className="only-mobile mobile-ham-btn">
          <button
            className={`hamburger hamburger--spin ${
              mobMenu ? "is-active" : ""
            }`}
            type="button"
            onClick={toggleHam}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <div className="non-mobile flex">
          <div className="header-nav-item">credit score check</div>
          <div className="header-nav-item">credit card bill payment</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
