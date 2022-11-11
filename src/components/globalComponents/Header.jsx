import React from "react";
// assets
import header_img from "../../assets/img/header/header-img.png";
import search_icon from "../../assets/img/header/search-icon.png";
import translate_icon from "../../assets/img/header/translate-icon.png";

const Header = () => {
  return (
    <header className="  left-0 right-0  w-full  py-5 ">
      <div className="flex justify-center md:justify-between items-center w-[90%] mx-auto mt-5">
        <div className="hidden md:block"></div>
        <div>
          <img src={header_img} alt="header img" className="mx-auto" />
          <div className="flex flex-col justify-center gap-5 md:gap-10 md:flex-row items-center mt-5 ">
            <h1 className="uppercase text-white  ">
              Srimathe Ramanujaya Nama:
            </h1>
            <h1 className="uppercase text-white">
              Srimath Varavaramunaye Nama:
            </h1>
            <h1 className="uppercase text-white">
              Sri vanachaLa Mahamunibyo Nama:
            </h1>
          </div>
        </div>
        <div className="hidden md:flex justify-end items-center gap-10">
          <img src={translate_icon} alt="translate icon" />
          <img src={search_icon} alt="search icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
