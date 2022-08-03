import _get from 'lodash'

export const getCartItems = (state) => state.cart || {}
export const getCartItemById = (state, id) => _get(getCartItems(state), [id], {})
export const getCartItemQtyById = (state, id) => _get(getCartItemById(state, id), 'qty', 0)
