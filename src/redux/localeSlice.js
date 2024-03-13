//localeReducer - буде відповідати за обробку action що впливають на locale
export const localeReducer = (state = { lang: "uk" }, action) => {
  switch (action.type) {
    case "locale/changeLang":
      return {
        ...state,
        lang: action.payload,
      };
    default:
      return state;
  }
};

export const changeLang = (newLang) => {
  return {
    type: "locale/changeLang",
    payload: newLang,
  };
};

export const selectlang = (state) => state.locale.lang;
