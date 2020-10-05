import React, { useState } from 'react';

// 컨테이너에서 store의 리듀서를 가져온다.
const AddNumber = (props) => {
  const [size, setSize] = useState(1);

  return (
    <div>
      <h1>Add Number {props.number}</h1>
      <input type="button" value="+" onClick={() => props.handleAdd(size)} />
      <input
        type="text"
        value={size}
        onChange={(e) => setSize(Number(e.target.value))}
      />
    </div>
  );
};

export default AddNumber;
