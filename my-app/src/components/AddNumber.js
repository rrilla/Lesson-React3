import React from "react";

const AddNumber = (res) => {
  console.log("AddNumber.js");
  //const up = res.up;
  return (
    <div>
      <h1>Add Number</h1>
      <button onClick={() => res.up()}>증가</button>
    </div>
  );
};

export default AddNumber;
