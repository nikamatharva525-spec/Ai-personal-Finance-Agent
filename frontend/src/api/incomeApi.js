import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/income",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const getIncome = () => API.get("/");

export const addIncome = (income) => API.post("/", income);

export const updateIncome = (id, income) =>
  API.put(`/${id}`, income);

export const deleteIncome = (id) =>
  API.delete(`/${id}`);

export default API;