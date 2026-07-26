import AnalyticsCards from "./AnalyticsCards";
import ExpensePieChart from "./ExpensePieChart";
import IncomeExpenseChart from "./IncomeExpenseChart";
import SpendingTrend from "./SpendingTrend";
import TopCategories from "./TopCategories";
import MonthlySummary from "./MonthlySummary";

const Analytics = () => {
  return (
    <div className="p-6 space-y-6 bg-slate-900 min-h-screen">
      <h1 className="text-3xl font-bold text-white">
        Analytics Dashboard
      </h1>

      <AnalyticsCards
        totalIncome={80000}
        totalExpense={25000}
        totalBalance={55000}
        totalTransactions={35}
      />

      <ExpensePieChart />

      <IncomeExpenseChart />

      <SpendingTrend />

      <TopCategories />

      <MonthlySummary />
    </div>
  );
};

export default Analytics;