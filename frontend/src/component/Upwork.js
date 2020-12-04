import { AppBar,CssBaseline, makeStyles } from '@material-ui/core'
import React from 'react'
import Company from './Company'
import Hire from './Hire'
import Hero from './Hero'

import Service from './Service'
import SubHeader from './SubHeader'
import UpworkHeader from './UpworkHeader'

const useStyles = makeStyles(theme=>({
    root:{
        display:"flex",
        fontFamily:"Raleway",
        fontWeight:"500",
    },
    toolbar:theme.mixins.toolbar,
      appBar:{
            boxShadow:"0 0 1px #000",
            // "& .MuiContainer-root":{
            //     paddingLeft:"0px",
            //     paddingRight:"0px",

            // }
      },

    }))

export default function Upwork() {

    const classes = useStyles()
    document.title="In-demand talent on demand"

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="fixed" color="inherit" className={classes.appBar}>
                <UpworkHeader/>
            </AppBar>
            <main style={{width:"100%"}}>
                <div className={classes.toolbar}/>
                        <SubHeader/>
                        <Hero/>
                        <Service/>
                        <Company/>
                        <Hire/>
            </main>
        </div>
    )
}
