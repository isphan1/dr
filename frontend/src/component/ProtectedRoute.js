import React from 'react'
import { connect } from 'react-redux'
import {Route,Redirect} from 'react-router-dom'

function ProtectedRoute({component:Component,auth,...rest}){    

        return <Route {...rest}
                 render={props=>(
                     auth ? (<Redirect to="/dashboard" />) : (<Component {...props}/>)
                 )
            }/>
    }
    const mapStateToProps = state =>({
        auth : state.leads.auth
    })
    
    export default  connect(mapStateToProps)(ProtectedRoute)
    
     