import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { balanceReducer } from "./balanceSlice";
import { localeReducer } from "./localeSlice";

const rootReducer = combineReducers({
  balance: balanceReducer,
  locale: localeReducer,
});

//оголошуємо стор - 1 крок
export const store = createStore(rootReducer, composeWithDevTools());

// const initialState = {
//   balance: {
//     value: 100,
//   },
//   locale: {
//     lang: "uk",
//   },
// };

//reducer викликається кожного разу як реакція на відправку action

//Reducer обробляє екшени
// const rootReducer = (state = initialState, action) => {
//   switch (
//     action.type //switch за типом action вибирає потрібний case для відпрацювання) {
//   ) {
//     case "balance/deposit":
//       return {
//         ...state,
//         balance: {
//           ...state.balance,
//           value: state.balance.value + action.payload,
//         },
//       };
//     case "balance/withdraw":
//       return {
//         ...state,
//         balance: {
//           ...state.balance,
//           value: state.balance.value - action.payload,
//         },
//       };
//     case "locale/lang":
//       return {
//         ...state,
//         locale: {
//           ...state.locale,
//           lang: action.payload,
//         },
//       };
//     default:
//       return state;
//   }
// };
