// react
import React from "react";

// assets
import ramanuja_jeeyar from "../../assets/img/landingPage/ramanuja_jeeyar.png";
import youtube_icon from "../../assets/img/landingPage/youtube_icon.png";
import file_icon from "../../assets/img/landingPage/file_icon.png";

const FourthSection = () => {
  return (
    <section className="bg-[#FFB507] pt-10 flex flex-col-reverse gap-5 h-screen md:flex-row-reverse border-b-[6px] border-[#942200] justify-between snap-start snap-always">
      <div className="flex justify-between flex-col gap-5 flex-1  py-20">
        <div>
          <h1 className="uppercase text-[#55111D] text-center md:text-left  w-[80%] mx-auto text-3xl md:text-4xl md:font-semibold">
            Sri Madhurakavi Vanamamalai Ramanuja Jeeyar Swami - 31st
          </h1>
          <p className="font-caladea text-center w-[80%] mx-auto mt-10 mb-5 md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            pellentesque quam vitae ornare porta. Vivamus pretium eleifend risus
            laoreet pretium. Ut sit amet finibus metus, nec cursus lacus.
          </p>

          <div className="flex justify-center md:justify-start w-[80%] mx-auto ">
            <button className="p-3 bg-[#282626] text-white w-fit active:scale-95 transition-all ">
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
            <img src={file_icon} alt="youtube" className="" />
            <h3 className="uppercase">Thaniyan and Vazhi thirunamam</h3>
          </div>
        </div>

        <div className="md:hidden flex gap-5 items-start mt-5  w-[80%] mx-auto pb-5">
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

      <div className="flex gap-5 flex-1 ">
        <img
          src={ramanuja_jeeyar}
          alt="ramanuja jeeyar"
          className="mx-auto w-full max-w-[600px] object-contain"
        />
      </div>
    </section>
  );
};

export default FourthSection;
