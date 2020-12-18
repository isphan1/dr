import {SINGIN,SINGUP,LOGOUT,ERRORS,USERNAME} from './type'
import axios from 'axios'
// import { tokenConfig } from '../common/getToken'
import Cookies from 'js-cookie'

const url ="https://myupwork.herokuapp.com/api"

export const vUsername = data => dispatch=>{
    axios({
        method:"post",
        url:`${url}/username/`,
        data:data,
        headers:{
            "content-type": "application/json",
        }
        })        
        .then(res=>{
            if(res.data.username === "Available"){
            dispatch({
                type:USERNAME,
                payload:{'username':data.username,'option':"singup"}
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
            url:`${url}/invalid/`,
            data:data,
            headers:{
                "content-type": "application/json",
            }
            })        
            .then(res=>{
                if(res.data.username === "This username is valid"){
                dispatch({
                    type:USERNAME,
                    payload:{'username':data.username,'option':"singin"}
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
        url:`${url}/singin/`,
        data:data,
        headers:{
            "content-type": "application/json",
        }
        })        
        .then(res=>
            {
                Cookies.set('expires',res.data.expires)
                Cookies.set('token',res.data.token)
            dispatch({
                type:SINGIN,
                payload:res.data
            })
        }
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
        url:`${url}/singup/`,
        data:data,
        headers:{
            "content-type": "application/json",
        }
        })        
        .then(res=>{
            Cookies.set('expires',res.data.expires)
            Cookies.set('token',res.data.token)
            dispatch({
                type:SINGUP,
                payload:data
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
    Cookies.remove('token')
    Cookies.remove('expires')
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

export const tokenFresh = (token) =>  (dispatch) =>{

    // const token = tokenConfig(getState)
    axios({
        method:"post",
        url:`${url}/refresh/`,
        data:{token},
        headers: {
            "content-type": "application/json",
            "Authorization": "JWT "+ token
        }
    })
    .then(res=>{
        Cookies.set('expires',res.data.expires)
        Cookies.set('token',res.data.token)
        dispatch({
            type:"TOKENFRESH",
            payload:res.data
        })
    })
    .catch(err=>{
        console.log(err)
        // dispatch({
        //     type:ERRORS,
        //     payload:err.data
        // })
    })
}


