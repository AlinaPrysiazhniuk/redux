import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/calculateSlice";
import { useState } from "react";

export const Calculate = () => {
  const result = useSelector((state) => state.result.value);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  return (
    <>
      <h2>Calculator</h2>

      <p>Result {result}</p>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <button onClick={() => dispatch(increment(value))}> Increment</button>
      <button onClick={() => dispatch(decrement(value))}> Decrement</button>
    </>
  );
};
