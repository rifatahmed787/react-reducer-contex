import { actionTypes } from "../ActionType/ActionType";

export const addToCart = (product) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: product,
  };
};

export const REMOVE_FROM_CART = (product) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: product,
  };
};
