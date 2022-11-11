// react
import React from "react";

// assets
import idol from "../../assets/img/landingPage/idol.png";
import youtube_icon from "../../assets/img/landingPage/youtube_icon.png";
import file_icon from "../../assets/img/landingPage/file_icon.png";

const ThirdSection = () => {
  return (
    <section className="bg-[#FFE600] pt-10 flex gap-5 flex-col  md:flex-row border-b-[9px] border-[#942200] snap-start snap-always h-screen">
      <div className="flex justify-between flex-col gap-5  py-20 w-full">
        <div className="">
          <h1 className="uppercase text-[#55111D] text-center md:text-left  w-[80%] mx-auto text-3xl md:text-4xl md:font-semibold">
            ‘Ponnadikkal Jeeyar’ who established the vanamamalai mutt
          </h1>
          <p className="font-caladea text-center md:text-left w-[80%] mx-auto mt-10 mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            pellentesque quam vitae ornare porta. Vivamus pretium eleifend risus
            laoreet pretium. Ut sit amet finibus metus, nec cursus lacus.{" "}
          </p>

          <div className="flex justify-center md:justify-start w-[80%] mx-auto ">
            <button className="p-3 bg-[#282626] text-white w-fit  active:scale-95 transition-all">
              READ MORE
            </button>
          </div>
        </div>

        <div className="hidden md:flex gap-5 items-start mt-5  w-[80%] mx-auto pb-5">
          <div>
            <img src={youtube_icon} alt="youtube" />
            <h3 className="uppercase">
              Watch Ponnadikkal Jeeyar’s Prapathi &amp; Mangalasasanam
            </h3>
          </div>

          <div>
            <img src={file_icon} alt="file" className="" />
            <h3 className="uppercase">Thaniyan and Vazhi thirunamam</h3>
          </div>
        </div>
      </div>

      <div className="flex gap-5  w-full">
        <div className="flex-1 pl-10 md:hidden">
          <img src={youtube_icon} alt="youtube" />
          <h3 className="uppercase">
            Watch Ponnadikkal Jeeyar’s Prapathi &amp; Mangalasasanam
          </h3>

          <img src={file_icon} alt="file" className="mt-5" />
          <h3 className="uppercase">Thaniyan and Vazhi thirunamam</h3>
        </div>
        <div className="flex-1 overflow-hidden  flex justify-end items-end ">
          <img
            src={idol}
            alt="ponnadikkal jeeyar"
            className="translate-y-2 md:translate-y-5"
          />
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
