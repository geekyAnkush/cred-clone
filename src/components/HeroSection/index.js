import React from "react";
import Button from "../common/Button";
import "./heroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section-wrapper">
      <div className="flex absolute-center hero-claim-label">
        <div>pay credit card bill. earn guaranteed $250 back.</div>
        <div className="claim-anchor">
          claim now{" "}
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/arrow.png"
            className="claim-arrow"
          />
        </div>
      </div>
      <div className="flex absolute-center flex-col max-width hero-section">
        <div className="hero-heading">
          rewards for paying credit card bills.
        </div>
        <div className="hero-subheading">
          join 7.5M+ members who win rewards and cashbacks everyday
        </div>
        <Button btnText="Download CRED" />
      </div>
    </div>
  );
};

export default HeroSection;
