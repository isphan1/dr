import {SINGIN,SINGUP,LOGOUT,ERRORS,USERNAME} from './type'

const initialState = {
    username:"",
    isLogin:false,
    user:{},
    errors:{}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state=initialState,action){
    switch (action.type) {
        case USERNAME:
            return{
                ...state,
                isLogin:false,
                username:action.payload,
                user:{},
                errors:{}
            }
        case SINGIN:
            return{
                ...state,
                isLogin:true,
                user:action.payload,
                errors:{}
            }
        case SINGUP:
            return{
                ...state,
                isLogin:true,
                username:"",
                user:action.payload,
                errors:{}
            } 
        case ERRORS:
                return{
                    ...state,
                    isLogin:false,
                    user:{},
                    errors:action.payload
                }        
        case LOGOUT:
            return{
                ...state,
                isLogin:false,
                username:"",
                user:{},
                errors:{}
            }

        default:
            return state
    }
}