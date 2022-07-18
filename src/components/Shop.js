import React, { useEffect, useState } from 'react'
import _forEach from 'lodash/forEach'
import _filter from 'lodash/filter'
import _keys from 'lodash/keys'

import List from './List'
import Total from './Total'


const Shop = () => {
  const [cart, setCart] = useState({})
  const [totale, setTotale] = useState(0)
  const negozio = {
    '24242uu': { nome: 'pesca', prezzo: 12 },
    '3383838': { nome: 'mela', prezzo: 1 },
    '282737j': { nome: 'banana', prezzo: 2 },
    '0000222': { nome: 'kiwi', prezzo: 20 },
    '88822aa': { nome: 'pere', prezzo: 102 }
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

  const getCartItemPrice = (id) => {
    return getCartItem(id).prezzo || 0
  }

  const updateTotal = () => {
    const cartKeys = _keys(cart)
    let updatedTotal = 0
    _forEach(cartKeys, (currentKey) => {
      const amount = getCartQty(currentKey)
      const price = getCartItemPrice(currentKey)
      return updatedTotal += amount * price 
    })

    setTotale(updatedTotal)
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
        _keys(cart), (current) => (
          current !== id)
        )
      
      let res = {}
      _forEach(keys, (k) => {
        res[k] = cart[k]
      })

      setCart(res)
      return
    }
    setCart({
      ...cart,
      [id]: {
        ...currentItem,
        qty: currentQty - 1,
      } 
    })
  }

  useEffect(() => {
    updateTotal()
  }, [cart])

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
      <Total total={totale} />
    </>
  )
}

export default Shop
