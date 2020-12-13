import { Button, Card, Grid, IconButton,makeStyles, InputBase,Typography, useMediaQuery, useTheme } from '@material-ui/core'
import { Person,Error, Close } from '@material-ui/icons'
import React from 'react'
import { useForm } from 'react-hook-form'
import ErrorMessage from './ErrorMessage'
import {Link} from 'react-router-dom'
import { uClear, vUsername } from '../redux/auth/action'
import { connect } from 'react-redux'

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
        margin:"30px 0",
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
      },
      loginLink:{
        fontSize:"14px",
        color:"#37a000",
        cursor:"pointer",
        textDecoration:"none",
        "&:hover":{
          textDecoration:"underline",
        }
    }
}))
const UpworkSingUp = (props) =>{

    const {data,vUsername,uClear} = props

    const classes = useStyles()

    document.title="Create an Account - Upwork"

    const theme = useTheme()

    const xsMatch = useMediaQuery(theme.breakpoints.down('xs'))
    const smMatch = useMediaQuery(theme.breakpoints.down('sm'))

    const [open,setOpen] = React.useState(false)

    let {handleSubmit,errors,register} = useForm()

    const singUp = (data,e) =>{
        e.preventDefault()
        vUsername(data)
    }

    React.useEffect(()=>{
        if(data.isLogin === true){
            props.history.push('/dashboard')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[data])


    React.useEffect(()=>{
        if(data.username !== ""){
            props.history.push('/login/password')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[data])

    React.useEffect(()=>{
        if(errors.username){
        setOpen(!open)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[errors])

    return (
        <>
            <div style={{
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                backgroundColor:"#222222"
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
                        Get your free account
                </Typography>
                <Button
                    className={classes.button}
                        variant="contained"
                        style={{
                            backgroundColor:"#4285F4",
                            color:"#fff"
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
                <form className={classes.form} onSubmit={handleSubmit(singUp)} autoComplete="off">
                <InputBase
                        className={classes.searchInput}
                        placeholder="Work email address"
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
                    <Typography
                    style={{
                        fontSize:"14px",
                        display:smMatch ? "block": "none"
                    }}
                >
                    Already have an account? <Link className={classes.loginLink} to="/ulogin">Log In</Link>
                </Typography>
            </Card>
                </div>
                <div
                style={{
                    padding:xsMatch ? "10px 5px" :"20px 80px"
                }}
                >
                    <Typography
                        style={{
                            textAlign:"center",
                            fontSize:xsMatch ? "16px":"20px",
                            fontWeight:"500"
                        }}
                    >
                        More than 60k jobs are posted on Upwork every week
                    </Typography>

                <Grid container

                >
                {
                    [
                        {
                            image:"https://www.upwork.com/static/assets/Brontes/498ef42/img/find.9449b48.svg",
                            title:"Find what you need",
                            body:"Choose from specialized freelancers and agencies with 5,000+ skills",
                            border:true
                        },
                        {
                            image:"https://www.upwork.com/static/assets/Brontes/498ef42/img/work.e0cdb7b.svg",
                            title:"Post today, hire tomorrow",
                            body:"Get custom quotes right away on terms you negotiate directly.",
                            border:true
                        },
                        {
                            image:"https://www.upwork.com/static/assets/Brontes/498ef42/img/pay.8951f52.svg",
                            title:"Engage with confidence",
                            body:"Only pay for work you authorize, with secure billing and invoices.",
                            border:false
                        },
                    ].map(item=>(
                    <Grid key={item.title} 
                        container direction="row" 
                        alignItems="center"
                        // justify="center"
                        item md={4} sm={12} xs={12}
                        style={{
                            padding:smMatch ? (item.border ? "10px 0" : "10px 0 0 0"):"10px",
                            borderBottom: smMatch ? (item.border ? "1px solid #e0e0e0" : "" ):""
                        }}
                    >
                     <Grid item container sm ={2} xs={2} justify="center">
                        <img 
                            src={item.image} 
                            alt="works" 
                            height={xsMatch ? "60px":"80x"}
                            width={xsMatch ? "60px":"80x"}
                        />
                        </Grid>
                        <Grid container item sm ={10} xs={10}
                        style={{
                            textAlign:"left",
                            padding:smMatch?"10px":"20px" 
                        }}>
                        <Typography
                            style={{
                                fontWeight:"500",
                                fontSize: xsMatch? "13px": "16px",
                                marginBottom: smMatch ? "":"5px",
                                width:"100%"
                            }}
                        >
                            {item.title}
                        </Typography>
                        <Typography variant="subtitle2" style={{
                            borderBottom: item.border ? "1px soild #000":"",
                            fontWeight:"300",
                            fontSize: xsMatch? "12px": "15px",
                            width:"100%"
                        }}
                            >
                                {item.body}
                            </Typography>
                        </Grid>
                    </Grid>
                    ))
                }
            </Grid>   
            </div>             
        </>
    )
}

const mapStateToProps = state =>({
    data : state.auth
})

const mapDispatchToProps = dispatch =>{
    return{
        vUsername: (username) => dispatch(vUsername(username)),
        uClear: () => dispatch(uClear),
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UpworkSingUp)