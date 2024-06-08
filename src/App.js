import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/SideBar";
import AddType from "./components/AddBreadType";
import DailyCalculation from "./components/DailyCalculation";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Sidebar />} />{" "}
          <Route path="/addType" element={<AddType />} />{" "}
          <Route path="/DailyCalculation" element={<DailyCalculation />} />{" "}
        </Routes>{" "}
      </div>{" "}
    </Router>
  );
}

export default App;
