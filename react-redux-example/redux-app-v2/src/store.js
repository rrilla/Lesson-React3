const INCREMENT = 'INCREMENT';
export const increase = (size) => ({ type: INCREMENT, size: size });

const initstate = {
  number: 0,
};

const reducer = (state = initstate, action) => {
  switch (action.type) {
    case INCREMENT:
      return { number: state.number + action.size };
    default:
      return state;
  }
};

export default reducer;
