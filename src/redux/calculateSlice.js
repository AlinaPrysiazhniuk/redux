export const calculateReducer = (state = { value: 0 }, action) => {
  switch (action.type) {
    case "result/increment":
      return {
        ...state,
        value: state.value + action.payload,
      };
    case "result/decrement":
      return {
        ...state,
        value: state.value - action.payload,
      };
  }
  return state;
};

export const increment = (value) => {
  return {
    type: "result/increment",
    payload: value,
  };
};

export const decrement = (value) => {
  return {
    type: "result/decrement",
    payload: value,
  };
};
