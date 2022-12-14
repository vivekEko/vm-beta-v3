// Routing
import { useEffect } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
//  state manegaement (recoil js)
import { useRecoilState } from "recoil";
import currentPathAtom from "./recoil/helpers/currentPathAtom";

// stylesheet
import "./App.css";
import Sidebar from "./components/globalComponents/Sidebar";

// components
import Landing from "./pages/Landing";
import Header from "./components/globalComponents/Header";
import SecondaryLayout_1 from "./pages/SecondaryLayout_1";
import SecondaryLayout_2 from "./pages/SecondaryLayout_2";
import SecondaryLayout_3 from "./pages/SecondaryLayout_3";
import SecondaryLayout_4 from "./pages/SecondaryLayout_4";

function App() {
  const [currentPath, setCurrentPath] = useRecoilState(currentPathAtom);
  const location = useLocation();

  useEffect(() => {
    console.log("changed path");
    setCurrentPath(location);
  }, [location]);

  return (
    <div className="font-oswald cursor-default">
      <div>
        <Sidebar />
      </div>
      <div
        className={` ${
          currentPath?.pathname === "/" ? "pl-[0px]" : "pl-0 md:pl-[60px] "
        } `}
      >
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/sample_page" element={<SecondaryLayout_1 />} />
          <Route path="/albums" element={<SecondaryLayout_2 />} />
          <Route path="/albums_expanded" element={<SecondaryLayout_3 />} />
          <Route path="/album_details" element={<SecondaryLayout_4 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
