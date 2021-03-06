import React from 'react'
import {Link,makeStyles,Hidden,Container,Grid} from '@material-ui/core'

const useStyles = makeStyles(theme=>({
    tabLink:{
        color:"#222222",
        fontSize:"13.5px",
        textDecoration:"none",
        [theme.breakpoints.down('md')]:{
          fontSize:"13px",
        },
        textTransform:"capitalize",
        "&:hover":{
            color:"#37a000",
            cursor:"pointer",
            textDecoration:"underline",

        }
      },
}))

export default function SubHeader() {

    const classes = useStyles()

    return (
        <>
          <Hidden smDown>
                <Container>
                    <Grid item md={12} container justify="space-around" style={{
                        padding:"10px 0",
                    }}>
                        <Link className={classes.tabLink} to="/">Web Dev</Link>
                        <Link className={classes.tabLink} to="/">Mobile Dev</Link>
                        <Link className={classes.tabLink} to="/">Desing</Link>
                        <Link className={classes.tabLink} to="/">Writing</Link>
                        <Link className={classes.tabLink} to="/">Admin Support</Link>
                        <Link className={classes.tabLink} to="/">Customer Service</Link>
                        <Link className={classes.tabLink} to="/">Marketing</Link>
                        <Link className={classes.tabLink} to="/">Accounting</Link>
                        <Link className={classes.tabLink} to="/">See All Categories</Link>
                    </Grid>
                </Container>
            </Hidden>  
        </>
    )
}
