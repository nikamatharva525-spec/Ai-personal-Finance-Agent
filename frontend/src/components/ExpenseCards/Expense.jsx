import ExpenseCards from "./ExpenseCards";

function Expense() {
  return (
    <div className="p-6">
      <ExpenseCards
        totalExpense={18450}
        monthlyExpense={7500}
        transactions={25}
      />

      {/* Expense Form will go here */}

      {/* Expense List will go here */}
    </div>
  );
}

export default Expense;