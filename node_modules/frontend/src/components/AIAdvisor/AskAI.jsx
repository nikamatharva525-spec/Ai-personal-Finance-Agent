import React, { useState } from "react";
import axios from "axios";
import { FaRobot } from "react-icons/fa";

const AskAI = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) {
      alert("Please enter your question.");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/ai",
        {
          question,
        }
      );

      setAnswer(res.data.response);

    } catch (error) {
      console.error(error);

      setAnswer("❌ Failed to get AI response.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-800 rounded-2xl p-6 mt-6">

      <h2 className="text-2xl font-bold text-white flex items-center gap-3">
        <FaRobot className="text-purple-500" />
        Ask AI
      </h2>

      <input
        type="text"
        placeholder="Ask anything about your finances..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="w-full mt-6 p-4 rounded-xl bg-slate-700 text-white outline-none"
      />

      <button
        onClick={handleAsk}
        disabled={loading}
        className="mt-4 w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-semibold"
      >
        {loading ? "Thinking..." : "Ask AI"}
      </button>

      {answer && (
        <div className="mt-6 bg-slate-700 rounded-xl p-4">

          <h3 className="text-green-400 font-bold">
            AI Response
          </h3>

          <p className="text-white mt-2 whitespace-pre-wrap">
            {answer}
          </p>

        </div>
      )}

    </div>
  );
};

export default AskAI;