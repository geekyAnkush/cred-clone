import React from "react";
import "./appRating.css";
import Button from "../common/Button";

const getIosPrefix = () => (
  <img
    src="https://web-images.credcdn.in/_next/assets/images/home-page/apple-store-logo.png"
    className="rating-icon"
  />
);
const getAndroidPrefix = () => (
  <img
    src="https://web-images.credcdn.in/_next/assets/images/home-page/play-store-logo.png"
    className="rating-icon"
  />
);
const AppRating = () => {
  return (
    <div className="max-width app-rating flex">
      <div className="rating-block flex flex-col">
        <div className="flex">
          <div className="rating-value flex flex-col">
            4.8
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png"
              className="rating-stars"
            />
          </div>
          <div className="rating-platform">
            app <br /> store
          </div>
        </div>
        <div className="non-mobile">
          <Button
            btnText="Download the app"
            customClass="rating-btn"
            prefix={getIosPrefix()}
          />
        </div>
      </div>

      <div className="rating-block flex flex-col">
        <div className="flex">
          <div className="rating-value flex flex-col">
            4.7
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-android.png"
              className="rating-stars"
            />
          </div>
          <div className="rating-platform">
            play <br /> store
          </div>
        </div>
        <div className="non-mobile">
          <Button
            btnText="Download the app"
            customClass="rating-btn"
            prefix={getAndroidPrefix()}
          />
        </div>
      </div>
      <div className="only-mobile">
        <Button btnText="Download the app" />
      </div>
    </div>
  );
};

export default AppRating;
