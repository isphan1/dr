import React from 'react'
import {Button, Container, Grid, Hidden, IconButton, InputBase, makeStyles, Menu, MenuItem, Toolbar, useMediaQuery, useTheme } from '@material-ui/core'
import {KeyboardArrowDown, Search,Menu as MenuIcon, } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme=>({
    root:{
        display:"flex",
        fontFamily:"Raleway",
        fontWeight:"500",
    },
    toolbar:theme.mixins.toolbar,
    searchInput: {
        padding: "0px 8px",
        fontFamily:"Raleway",
        fontWeight:"300",
        height:"36px",
        marginLeft: "8px",
        border:".5px solid #e0e0e0",
        borderRadius:"2px",
        width:"60%",
        fontSize:"13px",
        [theme.breakpoints.down("sm")]: {
          display: "none",
        },
        "&:hover": {
            boxShadow:"inset 0 0 5px rgba(57,73,76,.4)",
            outline:".5px solid #37a000",
        },
        "& .MuiSvgIcon-root": {
          marginRight: "1px",
        },
      },
      appBar:{
            boxShadow:"0 0 1px #000",
            // "& .MuiContainer-root":{
            //     paddingLeft:"0px",
            //     paddingRight:"0px",

            // }
      },
      menuLink:{
          color:"#656565",
          textDecoration:"none",
          fontSize:"13px",
          fontWeight:"700",
          [theme.breakpoints.down('md')]:{
            fontSize:"12px",
          },
          textTransform:"uppercase",
          "&:hover":{
              color:"#37a000"
          },
      },
      badge:{
          marginRight:"5px",
          fontSize:"9px",
          backgroundColor:"#0073D2",
          borderRadius:"15px",
          padding:"1.5px 9px",
          color:"#fff"
      },
      drawerButton:{
        padding:"0px",
        marginRight:"15px",
        [theme.breakpoints.down('xs')]:{
            marginRight:"5px"
        }
      },
      logo:{
          height:"28px",
          [theme.breakpoints.down('xs')]:{
              height:"22px"
          }
      },
      mediaLink:{
        color:"#37a000",
        padding:"10px 0",
        fontFamily:"Raleway",
        fontWeight:"500",
        fontSize:"16px",
        marginLeft:"15px",
        textDecoration:"none",
        [theme.breakpoints.down('xs')]:{
          fontSize:"14px",
          marginLeft:"10px",

        },
        textTransform:"capitalize",
        "&:hover":{
            color:"#328209",
        }
      },
      service:{
          backgroundColor:"#f5f2f2",
          marginTop:"-10px",
          padding:"0 60px",
          [theme.breakpoints.down('xs')]:{
            padding:"0 30px",

          }
      },
      serviceTitle:{
          textAlign:"center",
          fontSize:"16px",
          [theme.breakpoints.down('sm')]:{
            fontSize:"14px",
          },
          [theme.breakpoints.down('xs')]:{
            textAlign:"inherit",
            marginLeft:"10px",
            fontWeight:"500",
            marginRight:"auto",
            fontSize:"13px"
          }
      },
      menuDesign: {
        "& .MuiMenu-paper": {
          width: "22.2%",
        },
        "& .MuiPaper-root": {
          // right:"0",
          left:"19.9% !important",
          top: "3.2rem !important",
          [theme.breakpoints.down("xs")]: {
            top: "3.7rem !important",
          },
        },
      },
    }))

export default function UpworkHeader({props}) {
    
    const classes = useStyles()
    const theme = useTheme();
    const mdMatch = useMediaQuery(theme.breakpoints.down("sm"));
    const xsMatch = useMediaQuery(theme.breakpoints.down("xs"));
    const [search,setSearch] = React.useState("Professionals & Agencies")

    const [anchorEl,setAnchorEl] = React.useState(null)

    const handleClose = (data)=>{
        setAnchorEl(null)
        if(data ==="Professionals & Agencies" || data ==="Jobs"){
        setSearch(data)
        }
    }

    const singUp = () =>{
        props.history.push('/using')
    }

    const handleOpen = (e) =>{
        setAnchorEl(e.currentTarget)
    }

    return (
        <>
        <Toolbar disableGutters>
            <Container>
                <Grid container alignItems="center" justify="flex-start">
                    <Grid item xs={6} sm={mdMatch ? 4 : 1} container alignItems="center">
                    <Hidden mdUp implementation="css">
                        <IconButton
                        className={classes.drawerButton}
                        color="inherit"
                        >
                            <MenuIcon fontSize={xsMatch ? "default":"large"} style={{color:"#656565"}}/>
                        </IconButton>
                    </Hidden>
                        <img src="https://fulltimehomebusiness.com/wp-content/uploads/2019/07/Upwork-logo.png"
                            className={classes.logo}
                            alt="log"/>
                        </Grid>
                <Hidden mdUp>
                    <Grid item xs={6} sm={8} container alignItems="center" justify="flex-end">
                        <Link className={classes.mediaLink} to="/ulogin">Login</Link>
                        <Link className={classes.mediaLink} to="/using">Sing Up</Link>
                    </Grid>
                </Hidden>
                <Hidden smDown>
                    <Grid item container justify="center" sm={5} style={{}}>
                        <InputBase
                        className={classes.searchInput}
                        placeholder={`Find ${search}`}
                        startAdornment={
                        <>
                        <Search 
                            fontSize="small" 
                            style={{color:"#37a000",cursor:"pointer"}}
                            onClick={()=>console.log("search.......")}
                            />
                        <KeyboardArrowDown 
                            fontSize="small" 
                            style={{color:"#37a000",cursor:"pointer"}}
                            onClick={(e)=>handleOpen(e)}
                        />
                        </>
                        }
                    />                            
                    </Grid>
                    <Grid 
                        item 
                        container
                        justify="space-between"
                        alignItems="center" 
                        sm={6}  
                        style={{right:"0"}}
                    >
                        <Link className={classes.menuLink} to="/">
                            <Grid container alignItems="center">
                                <span className={classes.badge}>new</span>
                                Projects
                            </Grid>
                        </Link>
                        <Link className={classes.menuLink} to="/">How it works</Link>
                        <Link className={classes.menuLink} to="/">Enterprise</Link>
                        <Link className={classes.menuLink} to="/ulogin">Log in</Link>
                        <Button
                            onClick={()=>singUp()}
                            variant="contained"
                            color="primary"
                            size="small"
                            style={{
                                fontFamily:"Raleway",
                                fontWeight:"700",
                                color:"#fff",
                                height:"28px",
                                borderRadius:"1px",
                                padding:"0 20px",
                            }}
                        >
                            SING UP
                        </Button>
                    </Grid>
                    </Hidden>
                </Grid>
            </Container>
        </Toolbar>
        <Menu
            className={classes.menuDesign}
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
            <MenuItem
            style={{
                fontSize:"13px",
                color:search ==="Professionals & Agencies" ? "#37a000" : "#1D4354"
            }}
            onClick={()=>handleClose("Professionals & Agencies")}>Professionals & Agencies</MenuItem>
            <MenuItem
            style={{
                fontSize:"13px",
                color:search ==="Jobs" ? "#37a000" : "#1D4354"
            }}
            
            onClick={()=>handleClose("Jobs")}>Jobs</MenuItem>
        </Menu> 
        </>
    )
}
