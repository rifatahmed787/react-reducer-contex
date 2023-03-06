import { actionTypes } from "./ActionsTypes";

export const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  gender: "",
  number: 0,
  education: "",
  term: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.input:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case actionTypes.toggle:
      return {
        ...state,
        term: !state.term,
      };
    case actionTypes.decrease:
      if (state.number > 0) {
        return {
          ...state,
          number: state.number - 1,
        };
      } else {
        return {
          ...state,
          number: 0,
        };
      }
    case actionTypes.increase:
      return {
        ...state,
        number: state.number + 1,
      };
    default:
      return state;
  }
};
