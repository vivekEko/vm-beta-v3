import React from "react";
import { Link } from "react-router-dom";
//  state manegaement (recoil js)
import { useRecoilState } from "recoil";
import sidebarStatusAtom from "../recoil/sidebar/sidebarStatusAtom";

// components
import HeroSection from "../components/landingPage/HeroSection";
import SecondSection from "../components/landingPage/SecondSection";
import ThirdSection from "../components/landingPage/ThirdSection";
import FourthSection from "../components/landingPage/FourthSection";
import FifthSection from "../components/landingPage/FifthSection";
import Footer from "../components/globalComponents/Footer";

const Landing = () => {
  // Global variables
  const [sidebarStatus, setSidebarStatus] = useRecoilState(sidebarStatusAtom);
  return (
    <div className="">
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <Footer />
    </div>
  );
};

export default Landing;
