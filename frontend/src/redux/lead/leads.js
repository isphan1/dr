/* eslint-disable import/no-anonymous-default-export */
import {GET_LEADS,ADD_LEAD} from './types'

const initialState = {
    leads:[],
    auth:false,
    search:''
};

export default function (state = initialState,action) {
    
    switch (action.type) {
        case GET_LEADS:
            return{
                ...state,
                leads:action.payload
            };
        case ADD_LEAD:
            return{
                    ...state,
                    leads:[action.payload,...state.leads]
                };
        case "LEAD_SEARCH":
            return{
                    ...state,
                    search:action.payload
                };
        case "LOGIN":
            return{
                ...state,
                auth:true
            }
        case "LOGOUT":
                return{
                    ...state,
                    leads:[],
                    auth:false,
                    search:''
                }
        default:
            return state;
    }
}