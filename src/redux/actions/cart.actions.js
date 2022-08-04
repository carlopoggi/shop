export const CART = {
  ADD: 'ADD_PRODUCT',
  REMOVE: 'REMOVE_PRODUCT'
}

export function addToCartAction(payload) {
  return { type: CART.ADD, payload }
}

export function removeFromCartAction(payload) {
  return { type: CART.REMOVE, payload }
}
