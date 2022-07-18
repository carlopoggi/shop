import React, { useState } from 'react'
import _forEach from 'lodash/forEach'
import _filter from 'lodash/filter'
import _keys from 'lodash/keys'

import List from './List'


const Shop = () => {
  const [cart, setCart] = useState({})
  const negozio = {
    '24242uu': { nome: 'pesca', prezzo: 12 }
  }

  const getShopItem = (id) => {
    return negozio[id] || {}
  }

  const getCartItem = (id) => {
    return cart[id] || {}
  }

  const getCartQty = (id) => {
    return getCartItem(id).qty || 0
  }
  
  const onIncrement = (id) => {
    const currentItem = getShopItem(id)
    const currentQty = getCartQty(id)
    setCart({
      ...cart,
      [id]: {
        ...currentItem,
        qty: currentQty + 1,
      } 
    })
  }
  
  const onDecrement = (id) => {
    const currentItem = getShopItem(id)
    const currentQty = getCartQty(id)

    if (currentQty <= 1) {
      const keys = _filter(
        _keys(cart), (current) => current !== id)
      
      let res = {}
      _forEach(keys, (k) => {
        res[k] = k
      })

      setCart(res)
    }
    setCart({
      ...cart,
      [id]: {
        ...currentItem,
        qty: currentQty - 1,
      } 
    })
  }

  return (
    <>
      <h1> Shop </h1>
      <List
        data={negozio}
        onAdd={onIncrement}
      />
      <h1> Cart </h1>
      <List
        data={cart}
        type='cart'
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    </>
  )
}

export default Shop
