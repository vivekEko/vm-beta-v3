// react
import React from "react";

// assets
import landing_hero_section_idol from "../../assets/img/landingPage/ponnadikkal_jeeyar-2.png";
import scroll_icon from "../../assets/img/landingPage/scroll_icon.png";
import Header from "../globalComponents/Header";

const HeroSection = () => {
  return (
    <section className="  bg-gradient-to-t md:bg-gradient-to-r from-[#FA8716] to-[#FF440D] snap-start snap-always ">
      <div className="bg-hero-image h-screen bg-fixed bg-center bg-no-repeat bg-cover">
        <div className="h-full flex flex-col justify-between items-center">
          <Header />
          <div className="flex justify-between flex-col h-full">
            <div className="">
              <h1 className="text-4xl md:text-6xl xl:text-7xl uppercase text-center font-medium bg-gradient-to-r to-[#630000] from-[#1400FF]  stroke-white stroke-2 bg-clip-text text-transparent text-stroke min-h-[90px] ">
                Sri Vanamamalai (Thothadri) Mutt
              </h1>
              <h2 className="text-white text-2xl md:text-3xl xl:text-5xl text-center mt-3 md:mt-5 uppercase">
                Sri vanachala mahamuni parampara
              </h2>

              <p
                className="font-caladea text-center mt-5 text-white sm:max-w-[80%] md:max-w-[70%]
      lg:max-w-[60%] xl:max-w-[50%] mx-auto"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                pellentesque quam vitae ornare porta. Vivamus pretium eleifend
                risus laoreet pretium. Ut sit amet finibus metus, nec cursus
                lacus.
              </p>
            </div>

            <div>
              <img
                src={landing_hero_section_idol}
                alt="ponnadikkal jeeyar"
                className="mx-auto"
              />
            </div>
          </div>

          <div className="absolute bottom-5 right-5 ">
            <img src={scroll_icon} alt="scroll" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
