import { useState } from "react";

function SavingsGoal() {
  const [goal, setGoal] = useState("");
  const [saved, setSaved] = useState("");

  const progress =
    goal > 0
      ? ((saved / goal) * 100).toFixed(1)
      : 0;

  return (
    <div className="card">
      <h2>🎯 Savings Goal</h2>

      <input
        type="number"
        placeholder="Enter Savings Goal"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Amount Saved"
        value={saved}
        onChange={(e) => setSaved(e.target.value)}
      />

      <hr />

      <h3>Goal: ₹{goal || 0}</h3>

      <h3>Saved: ₹{saved || 0}</h3>

      <h3>Progress: {progress}%</h3>

      <progress
        value={saved || 0}
        max={goal || 1}
        style={{ width: "100%" }}
      ></progress>
    </div>
  );
}

export default SavingsGoal;