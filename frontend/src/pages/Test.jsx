import { useState } from "react";

export default function Test() {
  const [text, setText] = useState("");

  return (
    <div className="p-10">
      <input
        type="text"
        placeholder="Type here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border border-black p-3 w-80"
      />

      <p>{text}</p>
    </div>
  );
}