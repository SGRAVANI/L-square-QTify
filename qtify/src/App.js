import React from "react";
import Button from "./Components/Button/Button";
import Search from "./Components/Search/Search";
import BannerLogo from "./Components/BannerLogo/BannerLogo";
import Navbar from "./Components/Navbar/Navbar";
import HeroSection from "./Components/HeroSection/HeroSection";
function App() {
  return (
    <>
    {/* <Button text="Give Feedback"/>
    <Search placeholder="Search an album of your choice"/>
    <BannerLogo/> */}
    <Navbar/>
    <HeroSection/>
    </>
  );
}

export default App;
