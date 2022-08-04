import _forEach from 'lodash/forEach'
import _filter from 'lodash/filter'
import _keys from 'lodash/keys'

import { CART } from '../actions/cart.actions'

const { ADD, REMOVE } = CART

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
      const cartItems = state
      if (currentQty <= 1) {
        const keys = _filter(
          _keys(cartItems), (current) => (
            current !== id)
          )
        let res = {}
        _forEach(keys, (k) => {
          res[k] = cartItems[k]
        })
  
        return res
      }
      return {
        ...state,
          [id]: {
            ...current,
            qty: currentQty - 1,
        }
      }
    default:
      return state
  }
}

export default cart