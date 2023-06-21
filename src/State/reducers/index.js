import cartReducer from "./cart";
import isCartOpenReducer from "./isCartOpen";
import productReducer from "./product";

import { combineReducers } from "redux";

const rootReducers = combineReducers({
    cart: cartReducer,
    isCartOpen: isCartOpenReducer,
    product: productReducer
})
export default rootReducers