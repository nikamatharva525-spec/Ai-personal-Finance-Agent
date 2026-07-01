import "dotenv/config";
import OpenAI from "openai";

console.log("API Key:", process.env.OPENROUTER_API_KEY);

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

export const getAIAdvice = async (req, res) => {
  try {
    const { question } = req.body;

    const completion = await client.chat.completions.create({
      model: "deepseek/deepseek-chat-v3-0324",
      messages: [
        {
          role: "system",
          content:
            "You are an AI Personal Finance Advisor. Give simple, practical financial advice.",
        },
        {
          role: "user",
          content: question,
        },
      ],
    });

    res.json({
      response: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "AI Error",
      error: error.message,
    });
  }
};