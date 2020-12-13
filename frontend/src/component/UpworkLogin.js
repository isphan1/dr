import {Button, Card, Grid, IconButton,makeStyles, InputBase, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import { Person,Error, Apple, Close } from '@material-ui/icons'
import React from 'react'
import { useForm } from 'react-hook-form'
import ErrorMessage from './ErrorMessage'
import { connect } from 'react-redux'
import { uInvalid,uClear } from '../redux/auth/action'

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
            margin:"10px 0"
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
            margin:"10px 0 !important"
        } 
    },
    title:{
        fontSize:"24px",
        fontWeight:"700",
        margin:"0",
        [theme.breakpoints.down('xs')]:{
            fontSize:"23px",
        }
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
          fontWeight:"700",
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
          textDecoration:"none",
          "&:hover":{
            textDecoration:"underline",
            color:"#37a000",
          }
      }
}))
    const  UpworkLogin = (props)=> {

    document.title="Log In - Upwork"

    const {data,uClear,uInvalid,history} = props

    const classes = useStyles()

    const theme = useTheme()

    const xsMatch = useMediaQuery(theme.breakpoints.down('xs'))

    const [open,setOpen] = React.useState(false)

    let {handleSubmit,errors,register} = useForm()
    
    const singIN = (data,e) =>{
        e.preventDefault()
        uInvalid(data)
    }

    React.useEffect(()=>{
        if(data.isLogin === true){
            history.push('/dashboard')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[data])

    React.useEffect(()=>{
        if(data.username !== ""){
            history.push('/login/password')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[data])

    React.useEffect(()=>{
        if(errors.username){
        setOpen(!open)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[errors])

    const clickSingUp = ()=>{
        history.push('/using')
    }

    return (
        <>
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
                        onFocus={()=>uClear()}
                        inputRef={register({required: true,minLength:3})}
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
                        style={{
                            display: errors.username ? "flex" : "none"
                        }}
                    >
                       
                        {
                         errors.username && 
                         <div
                         style={{
                            display:"flex",
                            alignItems:"center"
                        }}
                         >
                            <Error style={{ marginRight:"10px"}} fontSize="small"/>
                            <ErrorMessage errors={errors.username.type}/>
                         </div>
                        }
                    </div>
                    <div
                      className={classes.error}
                      style={{
                          display: data.errors.username ? "flex" : "none"
                      }}
                    >
                    {data.errors.username  ? 
                        <div
                            style={{
                                display:"flex",
                                alignItems:"center"
                            }}
                        >
                            <Error style={{ marginRight:"10px"}} fontSize="small"/> 
                            {data.errors.username}
                        </div>
                        :""
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
                            color:"#fff",

                        }}
                        
                    >
                        <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
                                alt="logo"
                                height="33px"
                                style={{
                                    backgroundColor:"#fff",
                                    position:"absolute",
                                    padding:"5px",
                                    left:"2px",
                                    borderRadius:"3px"
                                }}
                        />
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
            <div style={{
                            height:"1px",
                            width:xsMatch ? "100%":"500px",
                            backgroundColor:"#e0e0e0"

                        }}/>
            <div 
                style={{

                    backgroundColor:"#fff",
                    width:xsMatch ? "100%":"500px",
                    padding:xsMatch ? "30px 10px":"30px 0",
                    display:"flex",
                    marginBottom: xsMatch ? "0":"30px", 
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
                            width:"50%",
                            color:"#37a000",
                            backgroundColor:"#fff",
                            
                        }}
                        variant="contained"
                        onClick={clickSingUp}
                    >
                        Sing Up
                    </Button>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state =>({
    data : state.auth
})

const mapDispatchToProps = dispatch =>{
    return{
        uInvalid: (username) => dispatch(uInvalid(username)),
        uClear: () => dispatch(uClear),

        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UpworkLogin)