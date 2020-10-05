import React from "react";
import AddNumber from "./AddNumber";

const AddNumberRoot = (res) => {
  console.log("AddNumberRoot.js");
  //const up = res.up;
  return (
    <div>
      <h1>Add Number Root</h1>
      <AddNumber up={res.up} />
    </div>
  );
};

export default AddNumberRoot;
