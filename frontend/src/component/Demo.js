import { Button, Card, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme=>({
    demo:{
        padding:"0 100px 40px 100px",
        background:"#fff",
        [theme.breakpoints.down('sm')]:{
            padding:"10px 30px",
        },
        [theme.breakpoints.down('xs')]:{
            padding:"10px 10px",
        }
    },
    card:{
        padding:"25px 10px",
        boxShadow:"0 1px 6px rgba(57,73,76,.35)",
        textAlign:"center",
        [theme.breakpoints.down('md')]:{
            padding:"20px 10px",
        },
        [theme.breakpoints.down('sm')]:{
            textAlign:"left",
        }
    },
    subTitle:{
        color: "#37a000",
        fontSize:"18px",
        [theme.breakpoints.down('sm')]:{
            fontSize:"14px",
        },
        [theme.breakpoints.down('xs')]:{
            fontSize:"13px",
        },
    },
    title:{
        fontSize:"36px",
        fontWeight:"700",
        color:"#1D4354",
        [theme.breakpoints.down('sm')]:{
            fontSize:"30px",
        },
        [theme.breakpoints.down('xs')]:{
            fontSize:"24px",
        }
    },
    button:{
        [theme.breakpoints.down('sm')]:{
            marginTop:"20px"
        }
    }
}))

export default function Demo() {

    const classes = useStyles()

    return (
        <div className={classes.demo}>
            <Card className={classes.card}>
                <Grid container alignItems="center">
                    <Grid item md={7} sm={8} xs={12}>
                        <Typography component="div" className={classes.subTitle}>
                            For pre-vetted talent, compliance services and more</Typography>
                        <Typography component="div" className={classes.title}>Try Upwork Enterprise</Typography>
                    </Grid>
                    <Grid item md={5} sm={4} xs={12} className={classes.button}>
                    <Button variant="contained"
                        color="primary"
                        style={{
                        color: "#fff",
                        textTransform: "none",
                        padding: "7.5px 30px",
                        
                        }}
                    >
                    Request a Demo
                </Button>  
                    </Grid>
                </Grid>
            </Card>
        </div>
    )
}
