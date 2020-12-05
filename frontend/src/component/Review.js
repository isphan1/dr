import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import ReactPlayer from 'react-player'

const useStyles = makeStyles(theme=>({
    videoBox:{
        background:"#464646",
        padding:"50px",
        [theme.breakpoints.down('sm')]:{
            padding:"30px 20px",
        },
        [theme.breakpoints.down('xs')]:{
            padding:"30px",
        },
        color:"#fff",
    },
    title:{
        fontSize:"40px",
        [theme.breakpoints.down('sm')]:{
            fontSize:"30px",
        },
        fontWeight:"800"
    },
    subTitle:{
        fontSize:"14px",
        color:"#e0e0e0",
        fontStyle:"italic",
        margin:"10px 0"
    },
    view:{
        display:"flex",
        flexDirection:"row",
        [theme.breakpoints.down('xs')]:{
            flexDirection: "column-reverse"
        }
    },
    review:{
        [theme.breakpoints.down('xs')]:{
            marginTop:"30px",
            height:"300px",
        }
    }
}))

export default function Review() {

    const classes = useStyles()

    return (
        <div className={classes.videoBox}>
            <Grid container className={classes.view}>
                <Grid item container sm={6} xs={12} alignItems="center"
                    className={classes.review}
                >
                    <div>
                    <Typography className={classes.title}>
                        Instapage saved $2.3M with Upwork
                    </Typography>
                    <Typography className={classes.subTitle}>
                        "Upwork took a lot of stress off of growing with minimal resources"
                    </Typography>
                    <div style={{
                        display:"flex",
                        alignItems:"center",
                        marginTop:"10px"
                    }}>
                        <img 
                            src="https://www.upwork.com/static/assets/Brontes/498ef42/img/tyson-avatar.a5754d7.png" 
                            alt="logo" height="50" width="50"
                            style={{
                                borderRadius:"50px"
                            }}
                        />
                        <div style={{
                        display:"flex",
                        flexDirection:"column",
                        marginLeft:"10px"
                    }}>
                        <Typography style={{
                            fontSize:"14px",
                            fontWeight:"700",
                            color:"#e0e0e0",
                        }}>Tyson Quick</Typography>
                        <Typography
                        style={{
                            fontSize:"11px",
                            fontWeight:"300",
                            color:"#e0e0e0",
                        }}
                        >CEO and co-founder, Instapage</Typography>
                    </div>

                    </div>
                    </div>
                </Grid>
                <Grid item container sm={6} xs={12} alignItems="center" justify="center">
                    <ReactPlayer
                        height="300px"
                        controls
                        url="https://vimeo.com/481386833"                    
                    />
                </Grid>
            </Grid>
        </div>
    )
}
