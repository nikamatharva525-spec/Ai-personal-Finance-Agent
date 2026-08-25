import React from "react";

const RecommendationCard = ({ advice }) => {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 mb-6 shadow-lg">

      <h3 className="text-xl font-bold text-white mb-4">
        💡 AI Recommendation
      </h3>

      <div className="bg-slate-700 rounded-xl p-5">

        <h4 className="text-purple-400 text-lg font-bold">
          {advice.title}
        </h4>

        <p className="text-gray-300 mt-3">
          {advice.message}
        </p>

      </div>

    </div>
  );
};

export default RecommendationCard;