import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import _forEach from 'lodash/forEach'
import _keys from 'lodash/keys'

import { getCartItems } from '../redux/selectors/cart.selectors'
import { updateTotalAction } from "../redux/actions/cart.actions";
import { getTotal } from "../redux/selectors/total.selector";

const Total = () => {
  const dispatch = useDispatch()
  const totale = useSelector(getTotal)
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

    dispatch(updateTotalAction(updatedTotal))
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