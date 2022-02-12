import React from "react";
import Button from "../common/Button";
import "./credSecurity.css";
const CredSecurity = () => {
  return (
    <div className="cred-security photo-section">
      <div className="max-width">
        <div className="photosec-child">
          <div className="photosec-top">
            <div className="photosec-heading">security first. and second.</div>
            <div className="photosec-subheading">
              what’s yours remains only yours.
            </div>
          </div>
          <div className="photosec-bottom">
            <div className="photosec-description">
              CRED ensures that all your personal data and transactions are
              encrypted, and secured so what’s yours remains only yours. there’s
              no room for mistakes because we didn’t leave any.
            </div>
            <div>
              <Button btnText="Become a member" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CredSecurity;
