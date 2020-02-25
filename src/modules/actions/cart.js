import { ADD_TO_CART } from "../constants";

export const addToCart = ({ item, amount }) => {
  return {
    type: ADD_TO_CART,
    payload: {
      item,
      amount
    }
  }
}
