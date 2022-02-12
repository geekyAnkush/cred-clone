import React from "react";
import AppRating from "../components/AppRating";
import Brands from "../components/Brands";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import CredExperience from "../components/CredExperience";
import CredSecurity from "../components/CredSecurity";
import CredStory from "../components/CredStory";
import FeelSpecial from "../components/FeelSpecial";
import HeroSection from "../components/HeroSection";
import MobileScroll from "../components/MobileScroll";
import ProductShowcase from "../components/ProductShowcase";
import WindowPeek from "../components/WindowPeek";

function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductShowcase />
      <FeelSpecial />
      <Brands />
      <CredExperience />
      <MobileScroll />
      <div className="non-mobile">
        <WindowPeek />
      </div>
      <CredSecurity />
      <CredStory />
      <AppRating />
      <Footer />
    </>
  );
}

export default Home;
