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
                username:"",
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
                    errors:action.payload
                }
        case "ERRORCLEAR":
                return{
                    ...state,
                    errors:{}
                }         
        case LOGOUT:
            return{
                ...state,
                isLogin:false,
                username:"",
                user:{},
                errors:{}
            }

        case "TOKENFRESH":
            return{
                ...state,
                user:action.payload,
            }

        default:
            return state
    }
}