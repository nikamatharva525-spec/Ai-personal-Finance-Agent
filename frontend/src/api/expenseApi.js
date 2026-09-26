import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const API = axios.create({
  baseURL: `${API_URL}/api/expenses`,
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

// API Functions
export const getExpenses = () => API.get("/");

export const addExpense = (expense) => API.post("/", expense);

export const updateExpense = (id, expense) =>
  API.put(`/${id}`, expense);

export const deleteExpense = (id) =>
  API.delete(`/${id}`);

export default API;