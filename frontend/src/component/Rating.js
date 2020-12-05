import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme=>({
    rating:{
        padding:"30px 150px",
        [theme.breakpoints.down('md')]:{
            padding:"30px 60px",
        },
        [theme.breakpoints.down('sm')]:{
            padding:"30px 10px",
        },
        backgroundColor:"#fff",
        display:"flex",
        justifyContent:"center",
        fontSize:"16px"
    },
    title:{
        display:"flex",
        alignItems:"center",
        color:"#7f7f7f",
        fontSize:"20px",
        fontWeight:"700",
        [theme.breakpoints.down('sm')]:{
            fontSize:"14px",
        },
        [theme.breakpoints.down('xs')]:{
            flexDirection:"column",
            fontSize:"20px",
        }
    },
    image1:{
        height:"30px",
        margin:"0 10px",
        [theme.breakpoints.down('sm')]:{
            height:"20px",
            margin:"0 5px",
        },
        [theme.breakpoints.down('xs')]:{
            height:"30px",
            marginLeft:"10px",
        }
    },
    image2:{
        height:"40px",
        marginLeft:"10px",
        marginBottom:"20px",
        [theme.breakpoints.down('sm')]:{
            height:"30px",
            marginBottom:"15px",
            marginLeft:"5px",

        },
        [theme.breakpoints.down('xs')]:{
            height:"40px",
            marginBottom:"0",
        }
    },
    review:{
        color:"#D5773D",
        fontWeight:"500",
        marginLeft:"10px",
        [theme.breakpoints.down('sm')]:{
            marginLeft:"5px",
        }
},
    reviewBox:{
        fontSize:"16px",
        fontWeight:"700",
        [theme.breakpoints.down('sm')]:{
            fontSize:"14px",
        }
    },
    score:{
        color:"#000",
        fontSize:"22px",
        fontWeight:"700",
        marginLeft:"10px",
        [theme.breakpoints.down('sm')]:{
            fontSize:"16px",
        },
        [theme.breakpoints.down('xs')]:{
            fontSize:"18px",
            margin:"10px 0"
        }
    }
}))

export default function Rating() {

    const classes = useStyles()
    return (

        <div className={classes.rating}>
            <Typography component="div" className={classes.title}>
                <span>Customer rate Upwork </span>
                <span 
                    style={{
                        display:"flex",
                        alignItems:"center"
                    }}
                >
                <span className={classes.score}>4.6/5</span>
                <img 
                    src="https://www.upwork.com/static/assets/Brontes/498ef42/img/stars.ecae04c.svg"
                    alt="rate"
                    className={classes.image1}
                     />
                </span>
                <span  className={classes.reviewBox}>based on 
                <span className={classes.review}>629,454 reviews</span>
                </span>
                <img 
                    src="https://www.upwork.com/static/assets/Brontes/498ef42/img/logo.fd38857.svg" 
                    alt="site"
                    className={classes.image2}
                />
            </Typography>    
        </div>
    )
}
