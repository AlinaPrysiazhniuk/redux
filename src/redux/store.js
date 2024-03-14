// import { combineReducers } from "redux";
import { balanceReducer } from "./balanceSlice";
import { configureStore } from "@reduxjs/toolkit";

//combineReducers - використовується для об'єднання різних редукторів (reducers) в один кореневий редуктор.
// const rootReducer = combineReducers({
//   balance: balanceReducer,
// });

//створює кореневий редюсер
//configureStore передаємо обєкт такої ж форми як у combineReducers(
export const store = configureStore({
  reducer: {
    balance: balanceReducer,
  },
});
