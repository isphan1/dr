import {combineReducers} from 'redux'
import leads from "../lead/leads"
import cart from "../cart/cart"
import auth from "../auth/auth"

export default combineReducers({
    auth,
    leads,
    cart
})