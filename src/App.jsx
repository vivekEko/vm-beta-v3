// Routing
import { Routes, Route, Link } from "react-router-dom";
// stylesheet
import "./App.css";
import Sidebar from "./components/globalComponents/Sidebar";

// components
import Landing from "./pages/Landing";

function App() {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div className="ml-[60px] ">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about_us" element={<h1> Page 2</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
