import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Bakery.jpeg";

const Sidebar = ({ onLogout }) => {
  const navigate = useNavigate();

  return (
    <div className="w-56 h-screen bg-gray-800 flex flex-col justify-between p-5 text-white">
      <div className="text-center mb-5">
        <img src={logo} alt="logo" className="w-24 rounded-full mx-auto" />
        <button
          onClick={() => navigate("/addType")}
          className="w-full mt-12 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Add bread type
        </button>
        <button
          onClick={() => navigate("/DailyCalculation")}
          className="w-full mt-12 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Daily Calculation
        </button>
      </div>
      <div className="flex-1"></div>
      <div className="text-center">
        {/* Any additional content for the sidebar */}
      </div>
    </div>
  );
};

export default Sidebar;
