import React from "react";

const Landing = () => {
  return (
    <div>
      <section className="  bg-gradient-to-t md:bg-gradient-to-r from-[#FA8716] to-[#FF440D] snap-start snap-always ">
        <div className="bg-hero-image h-screen bg-fixed bg-center bg-no-repeat bg-cover ">
          {/* header */}
          <header></header>
          <div className="">
            <h1 className="p-5 font-semibold text-3xl">Hello</h1>
          </div>
        </div>
      </section>

      <section className="bg-[url('../src/assets/parallax/bg-2.jpg')] h-screen bg-fixed bg-center bg-no-repeat bg-cover snap-start snap-always">
        <div></div>
      </section>

      <section className="bg-[url('../src/assets/parallax/bg-3.jpg')] h-screen bg-fixed bg-center bg-no-repeat bg-cover snap-start snap-always">
        <div></div>
      </section>
    </div>
  );
};

export default Landing;
