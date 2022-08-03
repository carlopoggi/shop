import { combineReducers } from "redux";

import cart from "./cart.reducer";
import shop from './shop.reducer'


export default combineReducers({
  cart,
  shop,
})