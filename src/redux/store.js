import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

const initialState = {
  balance: {
    value: 100,
  },
  locale: {
    lang: "uk",
  },
};

//action - це функціія що повертає екшен з обєктом
//deposit   -   це action  кліку по deposit y компоненті balance
export const deposit = (value) => {
  return {
    type: "balance/deposit", //тип action що трапивсся  (що трапилося і у якому слайсі - deposit у balance)
    payload: value, //дані що потрібно передати до стору
  };
};

export const withdraw = (value) => {
  return {
    type: "balance/withdraw", //тип action що трапивсся  (що трапилося і у якому слайсі - deposit у balance)
    payload: value, //дані action  що потрібно передати до стору
  };
};
export const changeLang = (newLang) => {
  return {
    type: "locale/lang",
    payload: newLang,
  };
};

const rootReducer = (state = initialState, action) => {
  switch (
    action.type //switch за типом action вибирає потрібний case для відпрацювання) {
  ) {
    case "balance/deposit":
      return {
        ...state,
        balance: {
          ...state.balance,
          value: state.balance.value + action.payload,
        },
      };
    case "balance/withdraw":
      return {
        ...state,
        balance: {
          ...state.balance,
          value: state.balance.value - action.payload,
        },
      };
    case "locale/lang":
      return {
        ...state,
        locale: {
          ...state.locale,
          lang: action.payload,
        },
      };
    default:
      return state;
  }
};

export const store = createStore(rootReducer, composeWithDevTools());

//щоб змінити value у balance при клікові на кнопки у balance
//потрібно передати action у store
//action - це обєкт зі службовою інформацією,він доходить до стору,
//і змушує стор оновлювати стан

//reducer викликається кожного разу як реакція на відправку action
