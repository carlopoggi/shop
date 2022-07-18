import React from "react";
import PropTypes  from "prop-types";

const Total = ({ total }) => (
  <div> 
    <h2>Totale: {total} </h2>
  </div>
)

Total.propTypes = {
  total: PropTypes.number.isRequired,
}

export default Total