import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { decrease, increase } from "../store";

const AddNumber = () => {
  console.log("AddNumber");
  const [size, setSize] = useState(1);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Add Number</h1>
      <input type="button" value="+" onClick={() => dispatch(increase(size))} />
      <input type="button" value="-" onClick={() => dispatch(decrease(size))} />
      <input
        type="text"
        value={size}
        onChange={(e) => setSize(Number(e.target.value))}
      />
    </div>
  );
};

export default AddNumber;
