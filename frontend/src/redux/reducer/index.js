import {combineReducers} from 'redux'
import leads from "../lead/leads"
import cart from "../cart/cart"

export default combineReducers({
    leads,
    cart
})