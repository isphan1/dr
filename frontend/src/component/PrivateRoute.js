import React from 'react'
import { connect } from 'react-redux'
import {Route,Redirect} from 'react-router-dom'

function PrivateRoute({component:Component,auth,...rest}){

   return <Route {...rest}
        render={props=>(
            auth ? (<Component {...props}/>) : (<Redirect to="/login" />)
        )
    }/>
}

const mapStateToProps = state =>({
    auth : state.leads.auth
})

export default  connect(mapStateToProps)(PrivateRoute)

 
 