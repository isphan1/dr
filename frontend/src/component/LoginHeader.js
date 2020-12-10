import { AppBar, CssBaseline,makeStyles,Menu,MenuItem,Toolbar, Typography,useTheme,useMediaQuery, IconButton } from '@material-ui/core'
import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { Settings } from '@material-ui/icons'
import { tokenFresh, uLogout } from '../redux/auth/action'
import { addLead } from '../redux/lead/actions'

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
    },
    menuDesign: {
        "& .MuiMenu-paper": {
          width: "220px",
        },
        "& .MuiPaper-root": {
          // right:"0",
          // left:"auto !important",
          top: "4.2rem !important",
          [theme.breakpoints.down("xs")]: {
            top: "3.7rem !important",
          },
        },
      },
      menuLink: {
        textDecoration: "none",
        color: "#000",
      },
    
      menuItem: {
        minHeight: "48px",
        textAlign: "center",
        [theme.breakpoints.down("xs")]: {
          minHeight: "24px",
        },
      },
}))

    const  LoginHeader = (props)=> {

    const val = props.children.props.location.pathname

    const classes = useStyles()

    const theme = useTheme()
    const smMatch = useMediaQuery(theme.breakpoints.down('sm'))

    const [anchorEl,setAnchorEl] = React.useState(null)

    const singOUT = ()=>{
        props.logout()
        props.children.props.history.push('/ulogin')
    }

    const handleClose = () => {
        setAnchorEl(null);
      };
    
      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };

    return (
        <div className={classes.root}>
            <CssBaseline/>
          <AppBar color="secondary" position="fixed" elevation={1}>
              <Toolbar disableGutters className={classes.bar}>
                <img src="https://fulltimehomebusiness.com/wp-content/uploads/2019/07/Upwork-logo.png"
                    height="33px"
                    alt="log"
                    style={{
                        marginRight:"auto"
                    }}
                />
                { val === "/using"?
                <Typography
                    style={{
                        fontSize:"14px",
                        display:smMatch ? "none": "block"
                    }}
                >
                    Already have an account? <Link className={classes.loginLink} to="/ulogin" >Log In</Link>
                </Typography>
                :""}
                {
                    val ==="/dashboard" ?
                    <IconButton
                        onClick={handleClick}
                    >
                        <Settings fontSize="small"></Settings>
                    </IconButton>
                    :""
                }
              </Toolbar>
            </AppBar>  
            <main style={{width:"100%"}}>
            <div className={classes.toolbar}/>

                {
                    props.children
                }
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        className={classes.menuDesign}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="/" className={classes.menuLink}>
          <MenuItem dense className={classes.menuItem} onClick={handleClose}>
            Profile
          </MenuItem>
        </Link>
        {/* <Link to="/login" className={classes.menuLink}> */}
          <MenuItem dense className={classes.menuItem} onClick={()=>props.addLead()}>
            My account
          </MenuItem>
        {/* </Link> */}
          <MenuItem dense className={classes.menuItem} onClick={singOUT}>
            Logout
          </MenuItem>
      </Menu>
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
        </main>
        </div>
    )
}

const mapStateToProps = state =>({
    data : state.auth
})

const mapDispatchToProps = dispatch =>{
    return{
        logout: (username) => dispatch(uLogout),
        addLead: () => dispatch(addLead),
        tokenFresh: () => dispatch(tokenFresh),

   }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginHeader)