import { AppBar,Grid,InputBase, CssBaseline,makeStyles,Menu,MenuItem,Toolbar, Typography,useTheme,useMediaQuery, IconButton, Tab, Tabs } from '@material-ui/core'
import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {Search,Settings,KeyboardArrowDown, Notifications,Help,NearMe,AssignmentTurnedIn,Receipt,Menu as MenuIcon} from '@material-ui/icons'
import { tokenFresh, uLogout } from '../redux/auth/action'
import { addLead } from '../redux/lead/actions'
import Footer from './Dfooter'


const tabList=[
  {'title':'Find Work','val':0},
  {'title':'My Jobs','val':1},
  {'title':'Reports','val':2},
  {'title':'Message','val':3},
]

const findTabs=[
  {'title':"Find Work",'link':"/dashboard"},
  {'title':"Saved Jobs",'link':"/dashboard"},
  {'title':"Proposals",'link':"/dashboard"},
  {'title':"Profile",'link':"/dashboard"},
  {'title':"My stats",'link':"/dashboard"},
  {'title':"Upwork Readiness test",'link':"/dashboard"},
  {'title':"My Project Dashboard",'link':"/dashboard"},

]

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
        [theme.breakpoints.down('md')]:{
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
        fontSize:"16px",
        "&:hover":{
          color: "#37a000",
        }
      },
    
      menuItem: {
        // minHeight: "48px",
        textAlign: "center",
        [theme.breakpoints.down("xs")]: {
          minHeight: "24px",
        },
        // "&:hover":{
        //   backgroundColor:"#fff",
        //   color:"#37a000"
        // }
      },

      searchInput: {
        padding: "0px 0px 0px 8px",
        fontFamily:"Raleway",
        fontWeight:"300",
        height:"36px",
        backgroundColor:"#fff",
        border:".5px solid #e0e0e0",
        borderRadius:"15px",
        width:"100%",
        fontSize:"14px",
        // [theme.breakpoints.down("md")]: {
        //     width:"70%",
        // },
        [theme.breakpoints.down("sm")]: {
          display: "none",
        },
        "&:hover": {
            borderRadius:"5px",
            // boxShadow:"inset 0 0 5px rgba(57,73,76,.4)",
            outline:".5px solid #37a000",
            outlineStyle:"auto"
        },
        "& .MuiSvgIcon-root": {
          marginRight: "1px",
        },
      },
}))

const searchItem = (search) =>{
  console.log(search)
}

const searchList = [
  {'icon':
      <Search
      fontSize="small" 
      style={{color:"#37a000",
      cursor:"pointer"}}
      onClick={()=>searchItem('search')}
      />
  ,'title':"Browse talent"},
  {'icon':
  <AssignmentTurnedIn 
        fontSize="small" 
        style={{color:"#37a000",
        cursor:"pointer"}}
        onClick={()=>searchItem('projects')}  
  />,
  'title':"Shop by project"},
  {'icon':
  <Receipt 
      fontSize="small" 
      style={{color:"#37a000",
      cursor:"pointer"}}
      onClick={()=>searchItem('jobs')}  
  />,
  'title':"Explore jobs"},
]

    const  LoginHeader = (props)=> {

    const val = props.children.props.location.pathname

    const classes = useStyles()

    const [search,setSearch] = React.useState(undefined)
    const [anchorEl,setAnchorEl] = React.useState(null)
    const [anchorEl2,setAnchorEl2] = React.useState(null)

    const [selectedIndex,setSelectedIndex] = React.useState(-1)
    const [value,setValue] = React.useState(0)

    const handleClose = (data)=>{
      setAnchorEl(null)
      setSearch(searchList[data])
  }
    const handleOpen = (e) =>{
      setAnchorEl(e.currentTarget)
    }
    
    const theme = useTheme()
    const smMatch = useMediaQuery(theme.breakpoints.down('sm'))

    const [anchorEl1,setAnchorEl1] = React.useState(null)

    const singOUT = ()=>{
        props.logout()
        props.children.props.history.push('/ulogin')
    }

    const handleClose1 = () => {
        setAnchorEl1(null);
      };

    const handleClose2 = () => {
        setAnchorEl2(null);
      };

      const handleClick = (event) => {
        setAnchorEl1(event.currentTarget);
      };

      const handleClick1 = (event) => {
        setAnchorEl2(event.currentTarget);
      };

      React.useEffect(()=>{
        if(value !== 0 ){
          setSelectedIndex(undefined)
        }
      },[value])
      
    return (
        <div className={classes.root}>
            <CssBaseline/>
          <AppBar style={{
            backgroundColor:smMatch ? "#1D4354" : "#fff"
            }}
           position="fixed" elevation={0}>
              <Toolbar disableGutters className={classes.bar}>
                <Grid container alignItems="center">
                <Grid 
                sm={4}
                xs={2}
                item
                style={{
                  display:smMatch ? 'flex':"none"
                }}
                >
                  <IconButton size="small">
                    <MenuIcon 
                      style={{color:"#fff",fontSize:"30px"}}
                    />
                  </IconButton>
                </Grid>
                  <Grid item md={2} sm={4}
                    style={{
                      textAlign: smMatch ? "center" : ""
                    }}
                  >
                <Link to="/"
                >
                <img src=
                
                {
                  smMatch ? "./logo.png" :
                "https://fulltimehomebusiness.com/wp-content/uploads/2019/07/Upwork-logo.png"

                   }
                  height="33px"
                    alt="log"
                />
                </Link>
                </Grid>
                
                { val === "/using"?
                <Grid item md={10} container justify="flex-end">
                <Typography
                    style={{
                        fontSize:"14px",
                        display:smMatch ? "none": "block",
                        color:"#000"
                    }}
                >
                    Already have an account? <Link className={classes.loginLink} to="/ulogin" >Log In</Link>
                </Typography>
                </Grid>
                :""
                }
                {
                  val ==="/dashboard" ?
                  
                  <Grid container item md={10} alignItems="center" justify="space-between">
                    <Grid item md={4}>
                        <InputBase
                        className={classes.searchInput}
                        placeholder={search === undefined ? "search": search.title}
                        startAdornment={
                        <>
                        {
                          search === undefined ?
                          searchList[0].icon : search.icon
                        }
                        <KeyboardArrowDown 
                            fontSize="small" 
                            style={{color:"#37a000",cursor:"pointer"}}
                            onClick={(e)=>handleOpen(e)}
                        />
                        </>
                        }
                    /> 
                    </Grid>
                    <Grid item md={8} container justify="space-around" alignItems="center"
                      style={{
                        display: smMatch ? "none" : "flex"
                      }}
                    >
                      <Grid item md={8} container justify="space-around" alignItems="center">
                        <Tabs value={value}
                        >
                        {
                          tabList.map((tab,index)=>(
                              <Tab 
                                key={index}
                                // component={Link}
                                // to="/"
                                style={{
                                  backgroundColor:"#fff",
                                  cursor:"pointer",
                                  color:"#000",
                                  minWidth:"7px",
                                  padding:"6px 5px",
                                  fontSize:"12px"
                                }}
                              onMouseOver={tab.val ===0 ? handleClick1 : undefined}
                              onClick={()=>setValue(index)}
                              label={tab.title}
                              />
                          ))
                        }
                        </Tabs>
                        </Grid>
                        <Grid item md={4} container justify="space-evenly" alignItems="center">
                          <IconButton size="small">
                            <Help
                            />
                          </IconButton>
                          <IconButton size="small">
                            <Notifications
                            />
                          </IconButton>
                          <IconButton size="small">
                            <NearMe
                            />
                          </IconButton>
                          <IconButton
                            size="small"
                            onClick={handleClick}

                          >
                            <Settings 
                            />
                          </IconButton>
                          </Grid>
                    </Grid>
                  </Grid>
                  :""
                }
                </Grid>
                <Grid 
                item
                style={{
                  display:smMatch ? 'flex':"none"
                }}
                >
                  <IconButton size="small">
                    <Search                       
                    style={{color:"#fff",fontSize:"30px"}}/>
                  </IconButton>
                </Grid>
              </Toolbar>
            </AppBar>  
            <main style={{width:"100%"}}>
            <div className={classes.toolbar}/>

                {
                    props.children
                }
      <Menu
        id="simple-menu"
        elevation={0}
        anchorEl={anchorEl1}
        keepMounted
        className={classes.menuDesign}
        open={Boolean(anchorEl1)}
        onClose={handleClose1}
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
        </Menu>{
          val === "/dashboard" ? 
          
          <Footer />
          :
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
    }
        </main>
        <Menu
            className={classes.menuDesign}
            elevation={0}
            id="simple-search"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
              {searchList.map((item,index)=>(
                <MenuItem
                key={index}
                style={{
                    fontSize:"13px",
                    color:search ==="" ? "#37a000" : "#1D4354"
                }}
                onClick={()=>handleClose(index)}>
                  {item.icon}
                  <span style={{marginLeft:"7px"}}>{item.title}</span>
                </MenuItem> 
            ))}
        </Menu> 

        <Menu
        id="simple-tab"
        elevation={1}
        anchorEl={anchorEl2}
        keepMounted
        className={classes.menuDesign}
        open={Boolean(anchorEl2)}
        MenuListProps={{onMouseLeave:handleClose2}}
      >
        {
          findTabs.map((item,i)=>(
            <MenuItem key={item.title}
              component={Link}
              to={item.link}
              selected={i === selectedIndex}
              classes={{root:classes.menuItem}}
              onClick={()=>{handleClose2();setSelectedIndex(i);setValue(0)}}
            >
              {item.title}
            </MenuItem>
          ))
        }
      </Menu>
        </div>
    )
}

const mapStateToProps = state =>({
    data : state.auth
})

const mapDispatchToProps = dispatch =>{
    return{
        logout: () => dispatch(uLogout),
        addLead: () => dispatch(addLead),
        tokenFresh: () => dispatch(tokenFresh),

   }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginHeader)