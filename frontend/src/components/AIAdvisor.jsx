import React, { useState } from "react";
import axios from "axios";

const AIAdvisor = () => {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hello 👋 I'm your AI Finance Advisor. Ask me anything about budgeting, saving, or investing."
    }
  ]);

  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!question.trim()) return;

    const userMessage = {
      sender: "user",
      text: question,
    };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/ai",
        {
          question,
        }
      );

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: response.data.reply,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "Unable to get AI response.",
        },
      ]);
    }

    setLoading(false);
    setQuestion("");
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-4">
        🤖 AI Financial Advisor
      </h2>

      <div className="h-96 overflow-y-auto border rounded-lg p-4 bg-gray-50">

        {messages.map((msg, index) => (

          <div
            key={index}
            className={`mb-4 ${
              msg.sender === "user"
                ? "text-right"
                : "text-left"
            }`}
          >

            <span
              className={`inline-block px-4 py-2 rounded-xl ${
                msg.sender === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              {msg.text}
            </span>

          </div>

        ))}

        {loading && (
          <p className="text-gray-500">
            AI is thinking...
          </p>
        )}

      </div>

      <div className="flex mt-4">

        <input
          className="flex-1 border rounded-l-lg p-3"
          placeholder="Ask AI..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-6 rounded-r-lg"
        >
          Send
        </button>

      </div>

    </div>
  );
};

export default AIAdvisor;