import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/auth",
});

// Register User
export const registerUser = (userData) => {
  return API.post("/register", userData);
};

// Login User
export const loginUser = (userData) => {
  return API.post("/login", userData);
};

export default API;