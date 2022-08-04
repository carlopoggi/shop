import { combineReducers } from "redux";

import cart from "./cart.reducer";
import shop from './shop.reducer'
import total from "./total.reducer";

export default combineReducers({
  cart,
  shop,
  total,
})