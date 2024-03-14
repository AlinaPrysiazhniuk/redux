import { createSlice } from "@reduxjs/toolkit";

const valueInitialState = { value: 0 };

const balanceSlice = createSlice({
  name: "balance",
  initialState: valueInitialState,
  reducers: {
    deposit(state, action) {
      return {
        ...state,
        value: state.value + action.payload,
      };
    },
    withdraw(state, action) {
      return {
        ...state,
        value: state.value - action.payload,
      };
    },
  },
});

console.log(valueInitialState);
export const { deposit, withdraw } = balanceSlice.actions;
export const balanceReducer = balanceSlice.reducer;
