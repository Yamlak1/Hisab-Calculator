import React, { useEffect, useState } from "react";
import BreadService from "../services/BreadService"; // Adjust the import path as needed
import Sidebar from "./SideBar";

function DailyCalculation() {
  const [breadTypes, setBreadTypes] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchBreadTypes = async () => {
      try {
        const data = await BreadService.getBreadTypes();
        setBreadTypes(data);
        setQuantities(
          data.reduce((acc, bread) => {
            acc[bread.name] = "";
            return acc;
          }, {})
        );
      } catch (error) {
        console.error("Error fetching bread types", error);
      }
    };

    fetchBreadTypes();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuantities({
      ...quantities,
      [name]: value,
    });
  };

  const calculateTotal = () => {
    const totalSum = breadTypes.reduce((sum, bread) => {
      const quantity = parseFloat(quantities[bread.name]) || 0;
      return sum + quantity * bread.price;
    }, 0);
    setTotal(totalSum);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col justify-center items-center w-full">
        <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl mb-4">Daily Calculation</h2>
          {breadTypes.map((bread) => (
            <div key={bread.name} className="mb-4">
              <label className="block mb-2 text-gray-700">{bread.name}</label>
              <input
                type="number"
                name={bread.name}
                value={quantities[bread.name]}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>
          ))}
          <button
            onClick={calculateTotal}
            className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Calculate Total
          </button>
          <div className="mt-4 text-xl">Total: ${total.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}

export default DailyCalculation;
