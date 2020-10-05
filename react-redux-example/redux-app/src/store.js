//액션

// function increase1(size){
//     return {type:"INCREMENT", size:size};
// }

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

export const increase = (size) => {
  return { type: "INCREMENT", size: size };
}; //액션 생성, 리듀스가 타입을 보고 걸러냄. 1번째 매개변수 무조건 type

export const decrease = (size) => {
  return { type: "DECREMENT", size: size };
};

const initstate = {
  //App.js의 state값
  number: 0,
};

//(1-state, 2-action)값을 파라메타로 받음.
const reducer = (state = initstate, action) => {
  switch (action.type) {
    case INCREMENT:
      return { number: state.number + action.size };
    case DECREMENT:
      return { number: state.number - action.size };
    default:
      return state;
  }
};

export default reducer;
