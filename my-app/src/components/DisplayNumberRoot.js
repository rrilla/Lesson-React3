import React from "react";
import DisplayNumber from "./DisplayNumber";

const DisplayNumberRoot = (res) => {
  //(res) >> ({number}) 요래 받아도 됨.
  //const number = res.number;
  console.log("DisplayNumberRoot.js");
  return (
    <div>
      <h1>Display Number Root</h1>
      <DisplayNumber number={res.number} />
    </div>
  );
};

export default DisplayNumberRoot;
