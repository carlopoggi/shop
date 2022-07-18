import React, { useEffect } from "react";
import PropTypes from 'prop-types'
import _map from 'lodash/map'
import _keys from 'lodash/keys'

import Item from "./Item";

const List = ({
  data,
  type,
  onAdd,
  onIncrement,
  onDecrement,
}) => {
  const keys = _keys(data)

  return (
    <div className={`${type}-list`}>
      {_map(keys, (id) => {
        const currentData = {
          id,
          ...data[id]
        }
          return (
          <Item
            key={id}
            type={type}
            data={currentData}
            onAdd={onAdd}
            onDecrement={onDecrement}
            onIncrement={onIncrement}
          />
        )
      })}
    </div>
  )
}

List.propTypes = {
  data: PropTypes.object.isRequired,
  type: PropTypes.oneOf(['shop', 'cart']),
  onAdd: PropTypes.func,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
}

List.defaultProps = {
  type: 'shop',
  onAdd: () => {},
  onIncrement: () => {},
  onDecrement: () => {},
}

export default List