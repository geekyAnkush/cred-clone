import React, { useEffect, useRef, useState } from "react";
import "./productShowcase.css";
const ProductShowcase = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  const ref = useRef(null);

  const toggleAnimation = (e) => {
    if (e[0].isIntersecting) setShowAnimation(true);
  };
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };
  useEffect(() => {
    const observer = new IntersectionObserver(toggleAnimation, options);
    if (!showAnimation) {
      if (ref.current) {
        observer.observe(ref.current);
      }
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  });

  return (
    <div className={`product-showcase  `} ref={ref}>
      {showAnimation && (
        <div
          className={`showcase-wrapper ${
            showAnimation ? "scale-in-bottom" : ""
          }`}
        >
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-2.png"
            className="showcase-ui mockup-1"
          />
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-1.png"
            className="showcase-ui mockup-2"
          />
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/center.png"
            className="showcase-ui mockup-3"
          />
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-1.png"
            className="showcase-ui mockup-4"
          />
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-2.png"
            className="showcase-ui mockup-5"
          />
        </div>
      )}
    </div>
  );
};

export default ProductShowcase;
