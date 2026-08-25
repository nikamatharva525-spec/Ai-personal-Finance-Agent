import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const nvidia = new OpenAI({
  apiKey: process.env.NVIDIA_API_KEY,
  baseURL: "https://integrate.api.nvidia.com/v1",
});

export default nvidia;