import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/dashboard",
});

export const getDashboardData = () => API.get("/");

export default API;