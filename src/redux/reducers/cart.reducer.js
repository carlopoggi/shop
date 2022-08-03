import { CART } from '../actions/cart.actions'

const { ADD, REMOVE, DELETE } = CART

const initialState = { }

const cart = (state = initialState, action) => {
  const { type, payload = {} } = action
  const { id, current, currentQty } = payload
  switch(type) {
    case ADD:
      return { 
        ...state,
          [id]: {
            ...current,
            qty: currentQty + 1,
        }
      }
    case REMOVE:
      return {
        ...state,
          [id]: {
            ...current,
            qty: currentQty - 1,
        }
      }
    case DELETE:
      return payload
    default:
      return state
  }
}

export default cart