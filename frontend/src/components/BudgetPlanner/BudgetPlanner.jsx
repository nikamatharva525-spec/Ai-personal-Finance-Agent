import React from "react";
import BudgetSummary from "./BudgetSummary";
import BudgetProgress from "./BudgetProgress";
import CategoryBudget from "./CategoryBudget";
import DailyLimit from "./DailyLimit";
import BudgetAlerts from "./BudgetAlerts";
import BudgetHistory from "./BudgetHistory";

const BudgetPlanner = () => {
  const totalBudget = 30000;
  const totalExpense = 18000;
  const totalSavings = totalBudget - totalExpense;

  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <h1 className="text-4xl font-bold text-white mb-8">
        💰 Budget Planner
      </h1>

      <BudgetSummary
        totalBudget={totalBudget}
        totalExpense={totalExpense}
        totalSavings={totalSavings}
      />

      <BudgetProgress
        totalBudget={totalBudget}
        totalExpense={totalExpense}
      />

      <CategoryBudget />

      <DailyLimit
        totalBudget={totalBudget}
        totalExpense={totalExpense}
      />

      <BudgetAlerts
        totalBudget={totalBudget}
        totalExpense={totalExpense}
      />

      <BudgetHistory />
    </div>
  );
};

export default BudgetPlanner;