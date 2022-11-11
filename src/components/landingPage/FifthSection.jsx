import React from "react";
import image1 from "../../assets/img/landingPage/fithsection_image_1.png";
import image2 from "../../assets/img/landingPage/fithsection_image_2.png";

const FifthSection = () => {
  return (
    <section className="h-screen snap-start snap-always pt-20 bg-[#AEF496]">
      <div className="flex flex-col justify-between  gap-10 h-full ">
        <div>
          <h1 className="uppercase text-[#191689] text-3xl md:text-4xl md:font-semibold text-center">
            Sri Vanamamalai divyadesam
          </h1>
          <h2 className="uppercase text-[#191689] text-xl text-center my-5 w-[80%] mx-auto font-semibold">
            Sri varamangai nachiyar sametha sri deivanayaga perumal
          </h2>

          <p
            className="font-caladea text-center w-[80%] md:max-w-[70%]
      lg:max-w-[60%] xl:max-w-[50%] mx-auto mb-10"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            molestiae eveniet vel, qui voluptatibus magnam quis. Aliquid iusto
            nobis, dignissimos minima suscipit, aliquam eum accusantium quam
            distinctio ipsa explicabo blanditiis veritatis accusamus inventore
            cupiditate, quia porro. Qui animi vitae ipsum, laborum explicabo
            autem blanditiis sit ad nisi cupiditate facere, provident amet cum
            reiciendis veritatis aperiam possimus consectetur! Fugiat tempore
            qui perferendis veritatis quibusdam odit rem, labore placeat facere
          </p>

          <button className="p-3 bg-[#282626] text-white w-fit mx-auto block active:scale-95 transition-all">
            <span>READ MORE</span>
          </button>
        </div>

        <div className="flex flex-col  md:flex-row justify-between">
          <img src={image1} alt="" className="flex-1" />
          <img src={image2} alt="" className="flex-1" />
        </div>
      </div>
    </section>
  );
};

export default FifthSection;
