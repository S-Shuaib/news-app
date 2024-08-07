import { useState } from "react";
import Navbar from "./components/Navbar";
import "./styles.scss";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Business from "./pages/Business";
import Entertainment from "./pages/Entertainment";
import Health from "./pages/Health";
import Science from "./pages/Science";
import Sport from "./pages/Sport";
import Technology from "./pages/Technology";
import NewsCoursel from "./components/NewsCoursel";

function App() {
  const [category, setCategory] = useState("general");

  return (
    <div className="App">
      <Navbar setCategory={setCategory} />
      {/* <NewsCoursel /> */}
      <Routes>
        <Route
          path="/"
          element={<Home category={category} setCategory={setCategory} />}
        />
        <Route path="business" element={<Business />} />
        <Route path="entertainment" element={<Entertainment />} />
        <Route path="Health" element={<Health />} />
        <Route path="science" element={<Science />} />
        <Route path="sport" element={<Sport />} />
        <Route path="technology" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
