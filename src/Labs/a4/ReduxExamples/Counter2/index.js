import React, { useState } from "react";
import Counter1 from "../Counter1";
import { useSelector, useDispatch } from "react-redux";
import { increment2, decrement2, setTo } from "./counter2Reducer";

function Counter2() {
  // const [count2, setCount2] = useState(0);
  const { count2 } = useSelector((qwe) => qwe.counter2Reducer);
  const { count1 } = useSelector((qwe) => qwe.counter1Reducer);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter 2</h1>
      <p>Count2: {count2}</p>
      <p>Count1: {count1}</p>
      <button onClick={() => dispatch(increment2())}>Increment</button>
      <button onClick={() => dispatch(decrement2())}>Decrement</button>
      <button onClick={() => dispatch(setTo(222))}>Reset</button>
    </div>
  );
}

export default Counter2;
