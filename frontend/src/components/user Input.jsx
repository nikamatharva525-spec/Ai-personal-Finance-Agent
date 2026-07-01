import { useState } from "react";

function UserInput() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Enter Your Name</h2>

      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />

      <h3>Hello {name}</h3>
    </div>
  );
}

export default UserInput;