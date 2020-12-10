import React from 'react'
import { connect } from 'react-redux'
import {Route,Redirect} from 'react-router-dom'

function PrivateRoute({component:Component,auth,...rest}){

   return <Route {...rest}
        render={props=>(
            auth ? (<Component {...props}/>) : (<Redirect to="/ulogin" />)
        )
    }/>
}

const mapStateToProps = state =>({
    auth : state.auth.isLogin
})

export default  connect(mapStateToProps)(PrivateRoute)

 
 