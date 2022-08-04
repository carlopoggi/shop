import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addToCartAction, removeFromCartAction } from '../redux/actions/cart.actions'

import List from './List'
import Total from './Total'

import { getCartItems } from '../redux/selectors/cart.selectors'
import { getShopItems } from '../redux/selectors/shop.selectors'


const Shop = () => {
  const cartItems = useSelector(getCartItems)
  const shopItems = useSelector(getShopItems)

  const [totale, setTotale] = useState(0)
  const dispatch = useDispatch()
  const addToCart = (payload) => dispatch(addToCartAction(payload))

  
  const getCartItem = (id) => {
    return cartItems[id] || {}
  }
  
  const getCartQty = (id) => {
    return getCartItem(id).qty || 0
  }

  const getCartItemPrice = (id) => {
    return getCartItem(id).prezzo || 0
  }

  const updateTotal = () => {
    const cartKeys = _keys(cartItems)
    let updatedTotal = 0
    _forEach(cartKeys, (currentKey) => {
      const amount = getCartQty(currentKey)
      const price = getCartItemPrice(currentKey)
      return updatedTotal += amount * price 
    })

    setTotale(updatedTotal)
  }
  
  const onIncrement = (id) => {
    const current = shopItems[id]
    const currentQty = getCartQty(id)
    const args = {
      id,
      current,
      currentQty,
    } 
    addToCart(args)
  }
  
  const onDecrement = (id) => {
    const current = cartItems[id]
    const currentQty = current.qty
    dispatch(removeFromCartAction({
      id,
      current,
      currentQty,
    }))
  }

  useEffect(() => {
    updateTotal()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems])

  return (
    <>
      <h1> Shop </h1>
      <List
        data={shopItems}
        onAdd={onIncrement}
      />
      <h1> Cart </h1>
      <List
        data={cartItems}
        type='cart'
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
      <Total total={totale} />
    </>
  )
}

export default Shop
