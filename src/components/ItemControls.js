import React from 'react'
import PropTypes from 'prop-types'

const ItemControls = ({ 
  id,
  onAdd,
  isCartItem,
  onIncrement,
  onDecrement,
}) => {
  return (
    isCartItem
      ? (
        <>
          <button
            onClick={() => onIncrement(id)}
          >
          +
          </button>
          <button
            onClick={() => onDecrement(id)}
          >
          -
          </button>
        </>
      )
      : (
        <button
          onClick={() => onAdd(id)}
        >
          Add to cart
        </button>
      )
  )
}

ItemControls.propTypes = {
  id: PropTypes.string.isRequired,
  onAdd: PropTypes.func.isRequired,
  isCartItem: PropTypes.bool,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
}

ItemControls.defaultProps = {
  isCartItem: false,
}

export default ItemControls