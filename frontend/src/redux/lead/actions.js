import {GET_LEADS,ADD_LEAD} from './types'
import axios from 'axios'

import faker from 'faker'

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

export const getLeads = dispatch =>{
    axios({
        method:"get",
        url:"http://127.0.0.1:8000/api/",
        headers:{
            "content-type": "application/json",
        }
        })        
        .then(res=>
            dispatch(getData(res.data))
        )
        .catch(err=>
            console.log(err)
        )
    }

    export const addLead = dispatch =>{
        let id = Math.floor(Math.random()*100000)
        let title = faker.lorem.sentence()
        let body = faker.lorem.paragraph()
        dispatch(addData({
            id:id,
            title:title,
            body:body,
        }))
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