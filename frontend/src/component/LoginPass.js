import { AppBar, Button, Card,Checkbox, CssBaseline, Grid, IconButton, InputBase, makeStyles, Toolbar, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import { Error, Close, Lock, } from '@material-ui/icons'
import React from 'react'
import { useForm } from 'react-hook-form'
import ErrorMessage from './ErrorMessage'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { uSingIn, uSingUp,uError, uClear } from '../redux/auth/action'
import Recaptcha from 'react-recaptcha'
import { getLeads } from '../redux/lead/actions'

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
        margin:"52px 0",
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
        fontSize:"15px",
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
          width:"50%",
          textTransform:"none",
          [theme.breakpoints.down('xs')]:{
            width:"50%",
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
      },
      linkTab:{
        color:"#37a000",
        fontSize:"16px",
        cursor:"pointer",
        textDecoration:"none",
        [theme.breakpoints.down('xs')]:{
            fontSize:"13px",
        },
        "&:hover":{
          textDecoration:"underline",
          color:"#37a000",
        }
    }
}))

    const  LoginPass = (props)=> {

    const classes = useStyles()

    document.title="Log In - Upwork"

    const theme = useTheme()

    const xsMatch = useMediaQuery(theme.breakpoints.down('xs'))

    const [open,setOpen] = React.useState(false)
    const [recaptch,setRecaptch] = React.useState(false)


    let {handleSubmit,errors,register} = useForm()

    const notYou = () =>{
        props.uClear()
        props.history.goBack(-1)
    }
    
    const singIN = (data,e) =>{
        e.preventDefault()
        props.uSingIn({username:props.data.username,...data})

    }

    const singUP = (data,e) =>{
        e.preventDefault()
        props.uSingUp({username:props.data.username,...data})

    }

    React.useEffect(()=>{
        if(errors.password){
        setOpen(!open)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[errors])
    
    React.useEffect(()=>{
        if(props.data.user.token !== ""){
            props.fetchLead()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.data.user.token])

    React.useEffect(()=>{
        if(props.data.username === ""){
            props.history.push('/ulogin')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.data.username])

    React.useEffect(()=>{
        if(props.data.isLogin){
            props.history.push('/dashboard')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.data])

    // const clickSingUp = ()=>{
    //     props.history.push('/using')
    // }

    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };

    var callback = function () {
        // console.log('Done!!!!');
      };

    const verifyCallback = (response) => {
        if(response){
            setRecaptch(!recaptch)
        }
      };

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
                 { errors.password
                ?
            <Card 
                style={{
                    width: xsMatch ? "95%":"500px",
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
                        Welcome
                </Typography>
                <Typography>
                    {props.data.username}
                </Typography>
                <form className={classes.form} onSubmit={props.data.option === 'singin' ? handleSubmit(singIN) : handleSubmit(singUP)} 
                autoComplete="off">
                <InputBase
                        className={classes.searchInput}
                        placeholder="Password"
                        disabled={open}
                        type="password"
                        name='password'
                        onFocus={()=>props.uError()}
                        inputRef={register({required: true,minLength:3})}
                        startAdornment={
                        <>
                        <Lock
                            fontSize="small" 
                            style={{color:"#37a000",cursor:"pointer",marginRight:"10px"}}
                            />
                        </>
                        }
                    /> 
                    <div
                        className={classes.error}
                        style={{
                            display: errors.password ? "flex" : "none"
                        }}
                    >
                        {
                         errors.password && 
                     <div
                         style={{
                            display:"flex",
                            alignItems:"center"
                        }}
                         >
                            <Error style={{ marginRight:"10px"}} fontSize="small"/>
                            <ErrorMessage errors={errors.password.type}/>
                    </div>
                        }
                    </div>
                    <div
                       className={classes.error}
                       style={{
                           display: props.data.errors.login ? "flex" : "none"
                       }}
                    >
                    {props.data.errors.login  ? 
                        <div
                            style={{
                                display:"flex",
                                alignItems:"center"
                            }}
                        >
                            <Error style={{ marginRight:"10px"}} fontSize="small"/> 
                            {props.data.errors.login}
                        </div>
                        :""
                        }
                    </div>
                    <Grid container 
                        alignItems="center"
                        style={{
                            width:xsMatch ? "90%": "80%"
                        }}
                    >
                        <Grid item md={6} sm={6} xs={6} container alignItems="center">
                        <Checkbox
                            style={{
                                padding:"0",
                                marginRight:xsMatch ? "3px":"7px"
                            }}
                            size="small"
                            checked={checked}
                            onChange={handleChange}
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}                        />
                            <span
                                style={{
                                    fontSize:xsMatch ? "13px" : "15px"
                                }}
                            >Keep me logged in</span>
                        </Grid>
                        <Grid item md={6} sm={6} xs={6} container justify="flex-end">
                        <Link className={classes.linkTab} to="/reset">Forgot password?</Link>
                        </Grid>
                    </Grid>
                        {/* <Recaptcha
                            sitekey="6LdBtQEaAAAAAP8gvFtlOT9O_Y6A_B2Sz9DryL4G"
                            // sitekey="6LedQwIaAAAAAFsDsDAEUZGZxMSFlpHtflOe9Dy1"
                            render="explicit"
                            verifyCallback={verifyCallback}
                            onloadCallback={callback}
                        />                     */}
                    <Button
                        type="submit"
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        // disabled={!recaptch}
                    >
                        Log in
                    </Button>
                    </form>

                <p
                    className={classes.linkTab} 
                    style={{fontSize:"16px",fontWeight:"700"}} 
                    onClick={()=>notYou()}
                    >
                    Not you?
                </p>  
            </Card>
            
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
                    <Link className={classes.link} to="/upwork">Terms of Service</Link>
                    <Link className={classes.link} to="/upwork">Privacy Policy</Link>
                    <Link className={classes.link} to="/upwork">Accessibility</Link>

                </div>
            </div>
        </main>
        </div>
    )
}

const mapStateToProps = state =>({
    data : state.auth
})

const mapDispatchToProps = dispatch =>{
    return{
        uSingIn: (user) => dispatch(uSingIn(user)),
        uSingUp: (user) => dispatch(uSingUp(user)),
        uError: () => dispatch(uError),
        uClear: () => dispatch(uClear),
        fetchLead: () => dispatch(getLeads),

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginPass)