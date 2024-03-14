import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { balanceReducer } from "./balanceSlice";
import { localeReducer } from "./localeSlice";
import { calculateReducer } from "./calculateSlice";

const rootReducer = combineReducers({
  balance: balanceReducer,
  locale: localeReducer,
  result: calculateReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
