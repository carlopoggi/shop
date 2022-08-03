export const CART = {
  ADD: 'ADD_PRODUCT',
  DELETE: 'DELETE_PRODUCT',
  REMOVE: 'REMOVE_PRODUCT'
}

export function addToCartAction(payload) {
  return { type: CART.ADD, payload }
}

export function removeFromCartAction(payload) {
  return { type: CART.REMOVE, payload }
}

export function deleteFromCartAction(payload) {
  return { type: CART.DELETE, payload }
}