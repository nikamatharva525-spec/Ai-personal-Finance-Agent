import DashboardCards from "../components/DashboardCards/DashboardCards";

function DashboardAnalytics({ expenses }) {
  const totalExpense = expenses.reduce(
    (sum, item) => sum + Number(item.amount),
    0
  );

  const totalTransactions = expenses.length;

  const averageExpense =
    totalTransactions > 0
      ? (totalExpense / totalTransactions).toFixed(2)
      : 0;

  const highestExpense =
    expenses.length > 0
      ? Math.max(...expenses.map((item) => Number(item.amount)))
      : 0;

  return (
    <div className="analytics">
      <div className="card">
        <h3>💰 Total Expense</h3>
        <h2>₹{totalExpense}</h2>
      </div>

      <div className="card">
        <h3>📊 Transactions</h3>
        <h2>{totalTransactions}</h2>
      </div>

      <div className="card">
        <h3>💵 Average</h3>
        <h2>₹{averageExpense}</h2>
      </div>

      <div className="card">
        <h3>🔥 Highest</h3>
        <h2>₹{highestExpense}</h2>
      </div>
    </div>
  );
}

export default DashboardAnalytics;