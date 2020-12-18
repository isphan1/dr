import {GET_LEADS,ADD_LEAD} from './types'
import axios from 'axios'
import {tokenConfig} from '../common/getToken'

import faker from 'faker'

const url ="https://myupwork.herokuapp.com/api"

export const getData = leads =>{
    return{
        type:GET_LEADS,
        payload:leads
    }
}

export const addData = lead =>{
    return{
        type:ADD_LEAD,
        payload:lead
    }
}

export const getLeads = (token) => (dispatch,getState) =>{
    // const token = tokenConfig(getState)
    if(token){
        axios({
            method:"get",
            url:`${url}/`,
           headers:{
                "content-type": "application/json",
                "Authorization": "JWT "+ token
            }
            })        
        .then(res=>
            dispatch(getData(res.data))
        )
        .catch(err=>
            console.log(err)
        )
    }
}

    export const addLead = (dispatch,getState) =>{

        const token = tokenConfig(getState)

        let id = Math.floor(Math.random()*100000)
        let title = faker.lorem.sentence()
        let body = faker.lorem.paragraph()

        axios({
            method:"post",
            url:`${url}/create/`,
            data:{'title':title,'body':body},
            headers:{
                "content-type": "application/json",
                "Authorization": "JWT "+ token
            }
            })
            .then(res=>{
                dispatch(addData({
                    id:id,
                    title:title,
                    body:body,
                }))
            })
            .catch(err=>{
                console.log(err)
            })
    }

    export const login = dispatch =>{
        dispatch({
            type:"LOGIN",
            payload:true
        })
    }

    export const logout = dispatch =>{
        dispatch({
            type:"LOGOUT",
            payload:false
        })
    }
    
    export const leadSearch = search => dispatch =>{
        dispatch({
            type:"LEAD_SEARCH",
            payload:search
        })
    }