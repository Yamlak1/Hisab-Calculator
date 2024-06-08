import React, { useState } from "react";
import BreadService from "../services/BreadService";
import Sidebar from "./SideBar";

const AddType = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [gram, setGram] = useState("");
  const [message, setMessage] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const onAddingType = async (e) => {
    e.preventDefault();
    setIsAdding(true);
    try {
      await BreadService.addBreadType({
        name,
        price,
        gram,
      });
      setMessage("Bread type added successfully!");
    } catch (error) {
      setMessage(
        "An error occurred while adding the bread type: " + error.message
      );
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col justify-center items-center w-full">
        <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Add Bread Type</h2>
          <form onSubmit={onAddingType} className="space-y-4">
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Price</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Grams</label>
              <input
                type="number"
                value={gram}
                onChange={(e) => setGram(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            {message && <div className="text-red-500">{message}</div>}
            <div className="mb-4">
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white rounded"
                disabled={isAdding}
              >
                {isAdding ? "Adding..." : "Add Bread Type"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddType;
