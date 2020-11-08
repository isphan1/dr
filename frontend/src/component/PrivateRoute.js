import React from 'react'
import {Route,Redirect} from 'react-router-dom'

const PrivateRoute = ({component:Component,auth,...rest}) =>( 
        
    <Route {...rest}
        render={props=>{
            if(auth){
                return <Component {...props}/>
            }
            else{
                return <Redirect to="/" />
            }
        }}
    />
)

export default PrivateRoute