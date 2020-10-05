import React from 'react';

// 컨테이너에서 store의 state값을 가져온다.
const DisplayNumber = (props) => {
  return (
    <div>
      <h1>Display Number</h1>
      <input type="text" value={props.number} readOnly={true} />
    </div>
  );
};

export default DisplayNumber;
