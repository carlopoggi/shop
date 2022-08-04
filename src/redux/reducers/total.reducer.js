import { CART } from "../actions/cart.actions"
const initialState = 0

const total = (state = initialState, action) => {
  const { type, payload } = action

  switch(type) {
    case CART.UPDATE:
      return payload
    default: return state
  }
}

export default total