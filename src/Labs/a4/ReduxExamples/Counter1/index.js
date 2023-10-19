import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment1, decrement1, setTo } from "./counter1Reducer";

function Counter1() {
  // { count2 }
  //   const [count1, setCount1] = useState(0);
  const { count1 } = useSelector((state) => state.counter1Reducer);
  const { count2 } = useSelector((state) => state.counter2Reducer);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter 1</h1>
      <p>Count1: {count1}</p>
      <p>Count2: {count2}</p>
      {/* <p>Count2: {count2}</p> */}
      <button onClick={() => dispatch(increment1())}>Increment</button>
      <button onClick={() => dispatch(decrement1())}>Decrement</button>
      <button onClick={() => dispatch(setTo(111))}>Reset</button>
    </div>
  );
}

export default Counter1;
