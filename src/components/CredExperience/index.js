import React from "react";
import Button from "../common/Button";
import "./credExperience.css";
const CredExperience = () => {
  return (
    <div className="cred-experience photo-section">
      <div className="max-width">
        <div className="photosec-child">
          <div className="photosec-top">
            <div className="photosec-heading cred-exp-heading">
              we take your money matters seriously.
            </div>
            <div className="photosec-subheading">
              so that you don't have to.
            </div>
          </div>
          <div className="photosec-bottom">
            <div className="photosec-description cred-exp-description">
              never miss a due date with reminders to help you pay your bills on
              time, instant settlements mean you never wait for your payments to
              go through and statement analysis lets you know where your money
              goes, always.
            </div>
            <div>
              <Button btnText="Experience the upgrade" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CredExperience;
