import {SINGIN,SINGUP,LOGOUT,ERRORS,USERNAME} from './type'
import axios from 'axios'

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
            if(res.data.username==="Available"){
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
                payload:res
            })
        )
        .catch(err=>
            dispatch({
                type:ERRORS,
                payload:err
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
            console.log(err.response.data)
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
