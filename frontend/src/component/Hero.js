import React from 'react'
import {Button,Typography,makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme=>({
    heroImage:{
        padding:"0",
        height:"450px",
        [theme.breakpoints.down('sm')]:{
          height:"300px",
        },
        [theme.breakpoints.down('xs')]:{
          height:"200px",
        },
    },

    heroText:{
        display:"flex",
        width:"60%",
        flexDirection:"column",
        position:"absolute",
        fontFamily:"Raleway",
        marginLeft:"100px",
        marginTop:"30px",
        [theme.breakpoints.down('sm')]:{
          marginTop:"7px",
          marginLeft:"70px",
          width:"70%",
        },
        [theme.breakpoints.down('xs')]:{
          width:"80%",
          marginLeft:"30px",
        }
    },
    heroText1:{
      color:"#6FDA66",
      fontSize:"3rem",
      fontWeight:"700",
      [theme.breakpoints.down('sm')]:{
          fontSize:"2.5rem",
      },
      [theme.breakpoints.down('xs')]:{
          fontSize:"1.25rem",
      }
    },
    heroText2:{
      color:"#fff",
      fontSize:"3rem",
      fontWeight:"700",
      marginBottom:"10px",
      [theme.breakpoints.down('sm')]:{
          fontSize:"2.5rem",
          marginBottom:"5px",
      },
      [theme.breakpoints.down('xs')]:{
          fontSize:"1.25rem",
          marginBottom:"2.5px",

      }
    },
    heroText3:{
      color:"#fff",
      fontSize:"1.5rem",
      fontWeight:"500",
      marginBottom:"20px",
      [theme.breakpoints.down('sm')]:{
          fontSize:"1rem",          
          marginBottom:"10px",
      },
      [theme.breakpoints.down('xs')]:{
          marginBottom:"5px",
          fontSize:".875rem",

      }
    },
    heroButton1:{
      textTransform:"capitalize",
      backgroundColor:"#37a000",
      color:"#fff",
      marginRight:"15px",
      padding:"5px 25px",
      fontWeight:"500",
      [theme.breakpoints.down('xs')]:{
          padding:"2.5px 15px",
          marginRight:"10px",

      }
    },
    heroButton2:{
      textTransform:"capitalize",
      backgroundColor:"#fff",
      color:"#37a000",
      padding:"5px 25px",
      fontWeight:"500",
      [theme.breakpoints.down('xs')]:{
          padding:"2.5px 15px",
      }
    },
}))


export default function Hero() {

    const classes = useStyles()

    return (
        <>
        <div>
            <div className={classes.heroText}>
                <Typography className={classes.heroText1}>
                    In-demand talent <br/> on demand.<sup style={{fontSize:"10px"}}>TM</sup>
                </Typography>
                <Typography className={classes.heroText2}>
                    Upwork is how.<sup style={{fontSize:"10px"}}>TM</sup>
                </Typography>
                <Typography className={classes.heroText3}>
                    Hire proven pros with confidence using the world’s largest, remote talent platform.
                </Typography>
                <div>
                    <Button className={classes.heroButton1} variant="contained">Hire Talent</Button>
                    <Button className={classes.heroButton2} variant="contained">Find Jobs</Button>
                </div>
            </div>
            <img 
                src="https://www.upwork.com/static/assets/Brontes/d3b19b5/img/md@2x.fb7cc02.jpg"
                alt="hero"
                width="100%"
                className={classes.heroImage}
                />
        </div>  
        </>
    )
}
