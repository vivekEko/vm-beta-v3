import React, { useState } from "react";

const Sidebar = () => {
  const [sidebarStatus, setSidebarStatus] = useState(false);
  return (
    <div
      className={` ${
        sidebarStatus ? "w-[100%] ease-in" : "w-[0.1%] ease-out"
      } h-screen bg-[#FC8D0B] fixed top-0 bottom-0 min-w-[60px] max-w-[200px] transition-all duration-300  shadow-2xl `}
    >
      <div className="pl-2">
        {/* hamburger */}
        <div
          onClick={() => setSidebarStatus(!sidebarStatus)}
          className="w-[40px] h-[30px] border-red-500  mt-5 flex flex-col justify-between gap-2 mr-auto cursor-pointer"
        >
          <div
            className={` ${
              sidebarStatus ? "rotate-45 " : "rotate-0"
            } h-[4px] border-full bg-white rounded-full transition-all duration-300`}
          ></div>
          <div
            className={` ${
              sidebarStatus ? "hidden" : "block"
            } h-[4px] border-full bg-white rounded-full transition-all duration-300`}
          ></div>
          <div
            className={` ${
              sidebarStatus ? "-rotate-45" : "rotate-0"
            } h-[4px] border-full bg-white rounded-full transition-all duration-300`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
