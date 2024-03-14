import { combineReducers } from "redux";
import { balanceReducer } from "./balanceSlice";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  balance: balanceReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
