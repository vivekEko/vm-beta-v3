import React, { useEffect, useState } from "react";
//  state manegaement (recoil js)
import { useRecoilState } from "recoil";
import currentPathAtom from "../../recoil/helpers/currentPathAtom";

const Sidebar = () => {
  const [currentPath] = useRecoilState(currentPathAtom);
  const [sidebarStatus, setSidebarStatus] = useState(false);

  useEffect(() => {
    console.log(currentPath);
  }, [currentPath]);

  return (
    <div
      className={` ${
        sidebarStatus
          ? "w-[100%] ease-in"
          : currentPath?.pathname !== "/"
          ? "w-[0.1%] ease-out min-w-[60px]"
          : "w-[0%] ease-out overflow-hidden border-red-500 border min-w-[0px]"
      } h-screen bg-[#FC8D0B] fixed top-0 bottom-0  max-w-[200px] transition-all duration-300  shadow-2xl `}
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
