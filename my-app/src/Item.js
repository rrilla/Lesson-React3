import React from "react";

//컴포넌트 : 여러 엘리먼트들이 모여 디자인을 만든 것.
//반복, 재사용할 놈들을 컴포넌트로 만듬.
function Item(props) {
  const { id, username } = props.user;
  // const myId = props.user.id;

  //매개변수-이름상관x, 여러값을 넘길 수 있음.
  console.log(props);
  const sCardBox = {
    border: "2px solid black",
    height: "100px",
  };

  return (
    <div style={sCardBox}>
      <h1>
        {/* 유저네임 : {props.user.username} */}
        유저네임 : {username}
        <br />
        {/* 아이디 : {props.user.id} */}
        아이디 : {id}
        <br />
        {props.test}
      </h1>
      <hr />
    </div>
  );
}

export default Item; //외부에서 아이템 쓸 수 있게 외부에 공개.public
