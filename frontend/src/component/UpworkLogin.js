import { AppBar, Button, Card, CssBaseline, Grid, IconButton, InputBase, Link, makeStyles, Toolbar, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import { Person,Error, Apple, Close } from '@material-ui/icons'
import React from 'react'
import { useForm } from 'react-hook-form'
import ErrorMessage from './ErrorMessage'

const useStyles = makeStyles(theme=>({
    root:{
        display:"flex",
        fontFamily:"Railway",
    },
    toolbar:theme.mixins.toolbar,
    appBar:{
        zIndex:theme.zIndex.appBar + 2
    },
    bar:{
        padding:"0 150px",
        [theme.breakpoints.down('sm')]:{
            padding:"0 80px"
        },
        [theme.breakpoints.down('xs')]:{
            padding:"0 30px"
        }
    },
    card:{
        margin:"30px 0 0 0",
        padding:"30px 50px",
        width:"500px",
        display:"flex",
        borderRadius:"0",
        flexDirection:"column",
        alignItems:"center",
        "& > *":{
            margin:"12px 0"
        },
        [theme.breakpoints.down('xs')]:{
            margin:"0",
            padding:"10px",
            width: "100%"
        },
    },
    form:{
        width:"100%",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        "& > *":{
            margin:"7px 0 !important"
        } 
    },
    title:{
        fontSize:"24px",
        fontWeight:"300",
        margin:"0"
    },
    searchInput: {
        padding: "0px 8px",
        fontFamily:"Raleway",
        fontWeight:"300",
        height:"36px",
        border:".5px solid #e0e0e0",
        borderRadius:"2px",
        width:"80%",
        fontSize:"13px",
        "&:hover": {
            boxShadow:"inset 0 0 5px rgba(57,73,76,.4)",
            outline:".5px solid #37a000",
        },
        "& .MuiSvgIcon-root": {
          marginRight: "1px",
        },
        [theme.breakpoints.down('xs')]:{
            width:"90%",
        },
      },
      button:{
          width:"80%",
          textTransform:"none",
          [theme.breakpoints.down('xs')]:{
            width:"90%",
        },
      },
      error:{
        width:"80%",
        display:"flex",
        alignItems:"center",
        color:"red",
        fontSize:"13.5px",
        fontWeight:"700",
        margin:"5px 0",
        [theme.breakpoints.down('xs')]:{
            width:"90%",
        },
      },
      errorBox:{
          display:"flex",
          alignItems:"center"
      },
      footerTitle:{
        fontSize:"15px",
        marginBottom:"10px",
        color:"#ffffff",
        textAlign:"center"
      },
      link:{
          color:"#ffffff",
          fontSize:"14px",
          cursor:"pointer",
      }
}))

export default function UpworkLogin() {

    const classes = useStyles()

    document.title="Log In - Upwork"

    const theme = useTheme()

    const xsMatch = useMediaQuery(theme.breakpoints.down('xs'))

    const [open,setOpen] = React.useState(false)

    let {handleSubmit,errors,register} = useForm()

    const singIN = (data,e) =>{
        e.preventDefault()
    }

    React.useEffect(()=>{
        if(errors.username){
        setOpen(!open)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[errors])

    return (
        <div className={classes.root}>
            <CssBaseline/>
          <AppBar color="secondary" position="fixed" elevation={1}>
              <Toolbar disableGutters className={classes.bar}>
              <img src="https://fulltimehomebusiness.com/wp-content/uploads/2019/07/Upwork-logo.png"
                    height="33px"
                    alt="log"/>
              </Toolbar>
            </AppBar>  
            <main style={{width:"100%"}}>
            <div className={classes.toolbar}/>
            <div style={{
                display:"flex",
                flexDirection:"column",
                alignItems:"center"
            }}>
                { errors.username
                ?
            <Card
                style={{
                    width: xsMatch ? "100%":"500px",
                    margin:xsMatch ? "10px 0" :" 30px 0 0 0",
                    padding:"7px 10px",
                    display: open ? "flex" : "none",
                    alignItems:"center"
                    
                }}
            >
            <Error fontSize="small" style={{marginRight:"10px"}}/>
            <span style={{marginRight:"auto"}}>Please fix the errors below.</span>
            <IconButton size="small" onClick={()=>setOpen(!open)}>
                <Close fontSize="small"/>
            </IconButton>
            </Card>
            :""
}
            <Card className={classes.card}>
                <Typography className={classes.title}>
                        Log in and get to work
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit(singIN)} autoComplete="off">
                <InputBase
                        className={classes.searchInput}
                        placeholder="Username or Email"
                        disabled={open}
                        name='username'
                        inputRef={register({required: true})}
                        startAdornment={
                        <>
                        <Person
                            fontSize="small" 
                            style={{color:"#37a000",cursor:"pointer",marginRight:"10px"}}
                            />
                        </>
                        }
                    /> 
                    <div
                        className={classes.error}
                    >
                        {errors.username  ? <Error style={{
                            marginRight:"10px",
                        }} fontSize="small"/> : "" }
                       
                        {
                         errors.username && <ErrorMessage errors={errors.username.type}/>
                     } 
                    </div>
                    <Button
                        type="submit"
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        disabled={open}
                    >
                        Continue
                    </Button>
                    </form>
                     <Grid container alignItems="center" justify="center"
                        style={{
                            width: xsMatch ? "90%":"80%"
                        }}
                     >
                        <Grid item md={5} sm={5} xs={5}>
                        <div style={{
                            height:"1px",
                            width:"100%",
                            backgroundColor:"#e0e0e0"

                        }}/>
                        </Grid>
                        <Grid item md={2} sm={2} xs={2} container justify="center">
                            or
                        </Grid>
                        <Grid item md={5} sm={5} xs={5}>
                        <div style={{
                            height:"1px",
                            width:"100%",
                            backgroundColor:"#e0e0e0"

                        }}/>
                        </Grid>
                     </Grid>
                    <Button
                    className={classes.button}
                        variant="contained"
                        style={{
                            backgroundColor:"#4285F4",
                            color:"#fff"
                        }}
                        
                    >
                        Sing in with Google
                    </Button>
                    <Button
                        className={classes.button}
                        variant="contained"
                        style={{
                            backgroundColor:"#fff"
                        }}
                    >
                        <Apple style={{marginRight:"5px",fontSize:"14px"}}/> Sing in with Apple
                    </Button>
            </Card>
            <div 
                style={{

                    backgroundColor:"#f2f2f2",
                    width:xsMatch ? "100%":"500px",
                    padding:xsMatch ? "20px 10px":"30px 0",
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"center",
                    boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12"                
                    }}
            >
                <Grid container alignItems="center" justify="center"
                        style={{
                            width:xsMatch? "90%":"65%",
                            marginBottom:xsMatch ? "10px":"20px"
                        }}
                     >
                        <Grid item md={3} sm={3} xs={3}>
                        <div style={{
                            height:"1px",
                            width:"100%",
                            backgroundColor:"#e0e0e0"

                        }}/>
                        </Grid>
                        <Grid item md={6} sm={6} xs={6} container justify="center">
                            New to Upwork?                       
                         </Grid>
                        <Grid item md={3} sm={3} xs={3}>
                        <div style={{
                            height:"1px",
                            width:"100%",
                            backgroundColor:"#e0e0e0"

                        }}/>
                        </Grid>
                     </Grid>
                <Button
                        className={classes.button}
                        style={{
                            width:"40%",
                            color:"#37a000",
                            backgroundColor:"#fff",
                            
                        }}
                        variant="contained"
                    >
                        Sing Up
                    </Button>
                </div>
                <div 
                    style={{
                        backgroundColor:"#222222",
                        width:"100%",
                        padding:"20px 0",
                        display:"flex",
                        flexDirection:"column",
                        alignItems:"center"
                    }}
                >
                    <Typography className={classes.footerTitle}>
                        © 2015 - 2020 Upwork® Global Inc.
                    </Typography>
                    <Link className={classes.link} to="/">Terms of Service</Link>
                    <Link className={classes.link} to="/">Privacy Policy</Link>
                    <Link className={classes.link} to="/">Accessibility</Link>

                </div>
            </div>
        </main>
        </div>
    )
}
