export const increase = (size) => {
  return { type: "INCREMENT", size: size };
};

export const decrease = (size) => {
  return { type: "DECREMENT", size: size };
};

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const initstate = {
  number: 0,
};

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
