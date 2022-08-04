export const CART = {
  ADD: 'ADD_PRODUCT',
  REMOVE: 'REMOVE_PRODUCT',
  UPDATE: 'UPDATE_TOTAL',
}

export function addToCartAction(payload) {
  return { type: CART.ADD, payload }
}

export function removeFromCartAction(payload) {
  return { type: CART.REMOVE, payload }
}

export function updateTotalAction(payload) {
  return { type: CART.UPDATE, payload }
}