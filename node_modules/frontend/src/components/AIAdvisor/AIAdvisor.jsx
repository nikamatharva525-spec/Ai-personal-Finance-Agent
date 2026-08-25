import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";
import "./AIAdvisor.css";

import HealthScore from "./HealthScore";
import RecommendationCard from "./RecommendationCard";
import ExpenseSummary from "./ExpenseSummary";
import AskAI from "./AskAI";
import AdviceButton from "./AdviceButton";

const adviceList = [
  {
    title: "🛍 Shopping Alert",
    message: "Reduce shopping expenses by ₹3,000 this month.",
  },
  {
    title: "💰 Savings Tip",
    message: "Save at least 20% of your monthly income.",
  },
  {
    title: "📈 Investment Advice",
    message: "Invest ₹5,000 in a SIP for long-term growth.",
  },
  {
    title: "🍽 Food Budget",
    message: "Your food expenses increased by 15%. Try cooking at home more often.",
  },
  {
    title: "🛡 Emergency Fund",
    message: "Maintain an emergency fund equal to 6 months of expenses.",
  },
  {
    title: "✈ Travel Budget",
    message: "Reduce travel expenses by using public transport whenever possible.",
  },
  {
    title: "🎬 Entertainment",
    message: "Limit entertainment spending to 10% of your monthly budget.",
  },
  {
    title: "🎯 Monthly Goal",
    message: "You can save ₹7,500 this month if you reduce unnecessary purchases.",
  },
];

const AIAdvisor = () => {
  const [advice, setAdvice] = useState(adviceList[0]);

  const generateAdvice = () => {
    let randomIndex;

    do {
      randomIndex = Math.floor(Math.random() * adviceList.length);
    } while (adviceList[randomIndex].title === advice.title);

    setAdvice(adviceList[randomIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="ai-advisor"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <FaRobot className="text-purple-500 text-3xl" />

        <h2 className="text-3xl font-bold text-white">
          AI Finance Advisor
        </h2>
      </div>

      {/* Financial Health */}
      <HealthScore />

      {/* Recommendation */}
      <RecommendationCard advice={advice} />

      {/* Expense Summary */}
      <ExpenseSummary />

      {/* Ask AI */}
      <AskAI />

      {/* Button */}
      <AdviceButton onGenerate={generateAdvice} />
    </motion.div>
  );
};

export default AIAdvisor;