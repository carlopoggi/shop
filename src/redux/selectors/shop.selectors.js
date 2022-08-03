import _get from 'lodash/get'

export const getShopItems = state => state.shop || {}
export const getShopItemById = (state, id) => _get(state, ['shop', id], {})
export const getShopItemPriceById = (state, id) => _get(state, ['shop', id, 'price'], 0)