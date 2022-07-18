import React from "react"
import PropTypes  from "prop-types"

import ItemControls from "./ItemControls"

const Item = ({ 
  data,
  type,
  onAdd,
  onIncrement,
  onDecrement,
}) => {
  const {
    nome,
    id,
    qty,
    prezzo,
  } = data

  const isCartItem = type === 'cart'

  return (
    <div className="row-cart">
      <div>
         {nome} 
      </div>
      {
        isCartItem && (
          <div>
            pz: {qty} 
          </div>
        )
      }
      <div>
        {prezzo} Euro
      </div>

      <ItemControls
        id={id}
        onAdd={onAdd}
        isCartItem={isCartItem}
        onDecrement={onDecrement}
        onIncrement={onIncrement}
      />
      
    </div>
  )
}

Item.propTypes = {
  type: PropTypes.oneOf(['shop', 'cart']).isRequired,
  data: PropTypes.shape({
    nome: PropTypes.string,
    id: PropTypes.string,
    qty: PropTypes.number,
    prezzo: PropTypes.number,
  }).isRequired,
  onAdd: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
}

export default Item