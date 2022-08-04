import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux'
import _forEach from 'lodash/forEach'
import _keys from 'lodash/keys'

import { getCartItems } from '../redux/selectors/cart.selectors'

const Total = () => {
  const [totale, setTotale] = useState(0)
  const cartItems = useSelector(getCartItems)

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

  useEffect(() => {
    updateTotal()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems])

  return (
    <div> 
      <h2>Totale: {totale} </h2>
    </div>
  )
}

export default Total