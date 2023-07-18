"use client";
import { useState } from "react";

function MyButton() {
  const [count, setCount] = useState(0);

  function handleOnClick() {
    setCount(count + 1);
  }

  return (
    <div className="p-10">
      <button className="p-2 border-2 rounded-lg" onClick={handleOnClick}>
        Click me!
      </button>
      <h1>Count: {count}</h1>
    </div>
  );
}

export default MyButton;
