import axios from "axios";

const baseUrl = "http://localhost:7000/api/";

const addBreadType = async (breadType) => {
  try {
    const response = await axios.post(
      `${baseUrl}bread/addBreadType`,
      breadType
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Error adding bread type");
  }
};

const getBreadTypes = async () => {
  try {
    const response = await axios.get(`${baseUrl}bread/getBreadType`);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response.data.message || "Error fetching bread types"
    );
  }
};

const BreadService = {
  addBreadType,
  getBreadTypes,
};

export default BreadService;
