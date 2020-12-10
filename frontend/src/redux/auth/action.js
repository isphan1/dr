import {SINGIN,SINGUP,LOGOUT,ERRORS,USERNAME} from './type'
import axios from 'axios'
import { tokenConfig } from '../common/getToken'

export const vUsername = data => dispatch=>{
    axios({
        method:"post",
        url:"http://127.0.0.1:8000/api/username/",
        data:data,
        headers:{
            "content-type": "application/json",
        }
        })        
        .then(res=>{
            if(res.data.username === "Available"){
            dispatch({
                type:USERNAME,
                payload:data.username
            })}
            else{
                dispatch({
                    type:ERRORS,
                    payload:res.data
                })
            }
        }
        )
        .catch(err=>
            {
                console.log(err)
        }
        )
    }

    export const uInvalid = data => dispatch=>{
        axios({
            method:"post",
            url:"http://127.0.0.1:8000/api/invalid/",
            data:data,
            headers:{
                "content-type": "application/json",
            }
            })        
            .then(res=>{
                if(res.data.username === "This username is valid"){
                dispatch({
                    type:USERNAME,
                    payload:data.username
                })}
                else{
                    dispatch({
                        type:ERRORS,
                        payload:res.data
                    })
                }
            }
            )
            .catch(err=>
                {
                    console.log(err)
            }
            )
        }


export const uSingIn = data => dispatch=>{
    axios({
        method:"post",
        url:"http://127.0.0.1:8000/api/singin/",
        data:data,
        headers:{
            "content-type": "application/json",
        }
        })        
        .then(res=>
            dispatch({
                type:SINGIN,
                payload:res.data
            })
        )
        .catch(err=>
            dispatch({
                type:ERRORS,
                payload:{'login':err.response.data.msg,'status':err.response.status}
            })
        )
    }


export const uSingUp = data => dispatch=>{
    axios({
        method:"post",
        url:"http://127.0.0.1:8000/api/singup/",
        data:data,
        headers:{
            "content-type": "application/json",
        }
        })        
        .then(res=>{
            dispatch({
                type:SINGUP,
                payload:res
            })
        }
        )
        .catch(err=>{
            dispatch({
                type:ERRORS,
                payload:err.response.data
            })
        }        
        )
    }

export const uLogout = dispatch =>{
    dispatch({
        type:LOGOUT,
    })
}
export const uClear = dispatch =>{
    dispatch({
        type:LOGOUT,
    })
}

export const uError = dispatch =>{
    dispatch({
        type:"ERRORCLEAR",
    })
}

export const tokenFresh = (dispatch,getState) =>{

    const token = tokenConfig(getState)
    axios({
        method:"post",
        url:"http://localhost:8000/api/refresh/",
        data:{token},
        headers: {
            "content-type": "application/json",
            "Authorization": "JWT "+ token
        }
    })
    .then(res=>{
        dispatch({
            type:"TOKENFRESH",
            payload:res.data
        })
    })
    .catch(err=>{
        dispatch({
            type:ERRORS,
            payload:err.data
        })
    })
}


