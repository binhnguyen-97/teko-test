import { ADD_TO_CART } from "../constants";

const initialState = {
  cart: [],
  success: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:      
      return { ...state, cart: [...state.cart, { amount: payload.amount, item: payload.item }], success: true}
    default:
      return state
  }
}
