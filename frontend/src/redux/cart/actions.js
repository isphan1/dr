import {ADD_CART,EMPTY_CART} from './type'


export const addItem = item =>{
    return {
        type:ADD_CART,
        payload:item
    }
}

export const emptyItem = (id) =>{
    return {
        type:EMPTY_CART,
        payload:id
    }
}

export const addCart = item => dispatch =>{
    dispatch(addItem(item))
}

export const removeCart = id => dispatch =>{
    dispatch(emptyItem(id))
}

export const clearCart = dispatch =>{
    dispatch({type:"CLEAR_CART"})
}

