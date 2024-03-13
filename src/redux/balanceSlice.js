//balanceReducer - буде відповідати за обробку actions що впливають на balance
export const balanceReducer = (state = { value: 100 }, action) => {
  switch (action.type) {
    case "balance/deposit":
      return {
        ...state,
        value: state.value + action.payload,
      };

    case "balance/withdraw":
      return {
        ...state,
        value: state.value - action.payload,
      };
    default:
      return state;
  }
};

//щоб змінити value у balance при клікові на кнопки у balance
//потрібно передати action у store
//action - це обєкт зі службовою інформацією,він доходить до стору,
//і змушує стор оновлювати стан

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
