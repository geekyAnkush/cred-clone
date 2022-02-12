import React from "react";
import "./feelSpecial.css";
import Button from "../common/Button";

const FeelSpecial = () => {
  return (
    <div className="feel-special photo-section">
      <div className="max-width">
        <div className="photosec-child">
          <div className="photosec-top">
            <div className="photosec-heading">feel special more often.</div>
            <div className="photosec-subheading">
              exclusive rewards for paying your bills
            </div>
          </div>
          <div className="photosec-bottom">
            <div className="photosec-description">
              every time you pay your credit card bills on CRED, you receive
              CRED coins. you can use these to win exclusive rewards or get
              special access to curated products and experiences. on CRED, good
              begets good.
            </div>
            <div>
              <Button btnText="Explore rewards" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeelSpecial;
