import React, { useState } from "react";
import { Link } from "react-router-dom";
//  state manegaement (recoil js)
import { useRecoilState } from "recoil";
import currentPathAtom from "../../recoil/helpers/currentPathAtom";
import sidebarStatusAtom from "../../recoil/sidebar/sidebarStatusAtom";

const Sidebar = () => {
  // Global variables
  const [currentPath] = useRecoilState(currentPathAtom);
  const [sidebarStatus, setSidebarStatus] = useRecoilState(sidebarStatusAtom);

  // Detect outside click and close sidebar
  window.addEventListener("click", (event) => {
    const sidebar = document?.getElementById("sidebar");

    if (sidebar) {
      if (!sidebar?.contains(event?.target)) {
        setSidebarStatus(false);
      }
    }
  });

  return (
    <div
      id="sidebar"
      className={` ${
        sidebarStatus
          ? "w-[100%] ease-in"
          : currentPath?.pathname !== "/"
          ? "w-[0.1%] ease-out min-w-[60px]"
          : "w-[0%] ease-out overflow-hidden  min-w-[0px]"
      } h-screen bg-[#FC8D0B] fixed top-0 bottom-0  max-w-[300px] transition-all duration-300  shadow-2xl  `}
    >
      <div className="pl-2">
        {/* hamburger */}
        <div
          onClick={() => setSidebarStatus(!sidebarStatus)}
          className={` ${
            currentPath?.pathname === "/" ? "hidden" : "flex"
          } w-[30px] h-[25px] mt-5 flex-col justify-between gap-2 mr-auto cursor-pointer`}
        >
          <div
            className={` ${
              sidebarStatus ? "rotate-45 translate-y-3 " : "rotate-0"
            } h-[4px] border-full bg-white rounded-full transition-all duration-300`}
          ></div>
          <div
            className={` ${
              sidebarStatus ? "hidden" : "block"
            } h-[4px] border-full bg-white rounded-full transition-all duration-300`}
          ></div>
          <div
            className={` ${
              sidebarStatus ? "-rotate-45 -translate-y-2" : "rotate-0"
            } h-[4px] border-full bg-white rounded-full transition-all duration-300`}
          ></div>
        </div>

        <button
          className={` ${
            currentPath?.pathname === "/"
              ? "fixed top-9 left-2 text-xl text-white"
              : "hidden"
          } `}
          onClick={() => setSidebarStatus(!sidebarStatus)}
        >
          MENU
        </button>
        <div>
          {/* sidebar links container */}

          <Link to="/about_us">About</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
