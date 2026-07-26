import axios from "axios";

// Backend API URL
const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Send a question to the AI
export const askAI = async (question) => {
  try {
    const response = await API.post("/ai/ask", {
      question,
    });

    return response.data;
  } catch (error) {
    console.error("AI API Error:", error);

    return {
      success: false,
      message: "Unable to get AI response.",
    };
  }
};

// Get AI-generated financial advice
export const getAIAdvice = async () => {
  try {
    const response = await API.get("/ai/advice");

    return response.data;
  } catch (error) {
    console.error("AI Advice Error:", error);

    return {
      success: false,
      message: "Unable to fetch AI advice.",
    };
  }
};