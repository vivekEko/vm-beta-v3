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

function App() {
  const [currentPath, setCurrentPath] = useRecoilState(currentPathAtom);
  const location = useLocation();

  useEffect(() => {
    console.log("changed path");
    setCurrentPath(location);
  }, [location]);

  return (
    <div className="font-oswald">
      <div>{/* <Header /> */}</div>
      <div>
        <Sidebar />
      </div>
      <div
        className={` ${
          currentPath?.pathname === "/" ? "pl-[0px]" : "pl-[60px]"
        } `}
      >
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/about_us"
            element={
              <Link to="/">
                <h1 className="p-5 font-semibold text-3xl">Go to home</h1>
              </Link>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
