import {ADD_CART,EMPTY_CART} from './type'

const initialState = {
    cart:[]
}


// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState,action) {
    
    switch (action.type) {
        case ADD_CART:
            return{
                ...state,
                cart:[...state.cart,action.payload]
            };
        case EMPTY_CART:
            return{
                    ...state,
                    cart:[...state.cart.filter(item => (item.id !== action.payload))]
                };
        case "CLEAR_CART":
                    return{
                            ...state,
                            cart:[]
                        };
        default:
            return state;
    }
}