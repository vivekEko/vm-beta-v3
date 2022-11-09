import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <section className="  bg-gradient-to-t md:bg-gradient-to-r from-[#FA8716] to-[#FF440D] snap-start snap-always ">
        <div className="bg-hero-image h-screen bg-fixed bg-center bg-no-repeat bg-cover ">
          {/* header */}
          <header>
            <h1>This is header</h1>
          </header>
          <div className="">
            <Link to="/about_us">
              <h1 className="p-5 font-semibold text-3xl">Go to about page</h1>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[url('../src/assets/parallax/bg-2.jpg')] h-screen bg-fixed bg-center bg-no-repeat bg-cover  snap-start snap-always flex justify-center items-start">
        <div className="bg-white h-[10vh] w-full flex justify-center items-center sticky top-0 flex-1">
          I m sticky1
        </div>
        <div className="bg-yellow-500 h-[10vh] w-full flex justify-center items-center  flex-1">
          I m sticky2
        </div>
      </section>

      <section className="bg-[url('../src/assets/parallax/bg-3.jpg')] h-screen bg-fixed bg-center bg-no-repeat bg-cover snap-start snap-always">
        <div></div>
      </section>
    </div>
  );
};

export default Landing;
