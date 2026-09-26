import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const API = axios.create({
  baseURL: `${API_URL}/api/income`,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add JWT Token
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// API Calls
export const getIncome = () => API.get("/");

export const addIncome = (income) => API.post("/", income);

export const updateIncome = (id, income) =>
  API.put(`/${id}`, income);

export const deleteIncome = (id) =>
  API.delete(`/${id}`);

export default API;