import React from 'react'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme=>({
    sideNav:{
        display:"flex",
        position:"absolute",
        flexDirection:"column",
        width:"220px",
        height:"100%",
        backgroundColor:"#ccc",
        [theme.breakpoints.down('sm')]:{
            display:"none"
        }
    }
}))

export default function SideNav() {
    const classes = useStyles()
    return (
        <>
           <div className={classes.sideNav}>Quick Demo</div> 
        </>
    )
}
