import React, { useState } from "react";
function StateManagement() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    // counter++;
    setCounter(counter + 1);
    console.log(counter);
  };
  const decrement = () => {
    // counter--;
    setCounter(counter - 1);
    console.log(counter);
  };
  return (
    <div>
      <h1>State Management</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default StateManagement;
