import React, { useState } from "react";
import "./App.css";

function App() {
  console.log("재시작");

  const [data, setData] = useState([
    { id: 0, value: "A" },
    { id: 1, value: "B" },
    { id: 2, value: "C" },
    { id: 3, value: "D" },
  ]);

  function addValue() {
    // let temp = data.slice(0, 2);
    // temp = temp.concat({ id: 4, value: "E" }).concat(data.slice(2, 4));

    const temp2 = [
      ...data.slice(0, 2),
      { id: 4, value: "E" },
      ...data.slice(2, 4),
    ];
    console.log(temp2);
    setData(temp2);
  }

  return (
    <div>
      {data.map((
        d,
        i //화살표 함수에서 매개변수 하나일시 괄호 생략가능
      ) => (
        <h1 key={d.id}>
          번호 : {i} 값 : {d.value}
        </h1>
      ))}
      <hr />
      <button onClick={() => addValue()}>추가</button>
    </div>
  );
}

export default App;
