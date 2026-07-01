import { useState } from "react";

function BudgetPlanner() {
  const [budget, setBudget] = useState("");
  const [expenses, setExpenses] = useState("");

  const remainingBudget =
    Number(budget || 0) - Number(expenses || 0);

  return (
    <div className="card">
      <h2>📊 Budget Planner</h2>

      <input
        type="number"
        placeholder="Enter Monthly Budget"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Enter Total Expenses"
        value={expenses}
        onChange={(e) => setExpenses(e.target.value)}
      />

      <hr />

      <h3>Monthly Budget: ₹{budget || 0}</h3>

      <h3>Total Expenses: ₹{expenses || 0}</h3>

      <h3>Remaining Budget: ₹{remainingBudget}</h3>
    </div>
  );
}

export default BudgetPlanner;


      
         
     

    
