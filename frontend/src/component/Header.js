import React from 'react'
import {AppBar,Toolbar,IconButton,MenuItem,Menu, makeStyles,Grid, Badge, InputBase} from '@material-ui/core'
import {Menu as MenuIcon,Settings,Message,Notifications, Search} from '@material-ui/icons'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme=>({
    appbar:{
        color:"#000",
        backgroundColor:"#fff",
        zIndex:theme.zIndex.appBar + 1,
    },
    searchInput:{
        padding:"0px 8px",
        marginLeft:"8px",
        [theme.breakpoints.down('sm')]:{
            display:"none"
        },
        "&:hover":{
            backgroundColor:"#ccc"
        },
        "& .MuiSvgIcon-root":{
            marginRight:"8px"
        }
    },
    menuIcon:{
        display:"none",
        [theme.breakpoints.down('sm')]:{
            display:"block"
        }, 
    }, 
    menuDesign:{
        "& .MuiMenu-paper":{
            width:"220px",
        },
        "& .MuiPaper-root":{
            right:"0",
            left:"auto !important",
            top:"4.2rem !important",
            [theme.breakpoints.down('xs')]:{
                top:"3.2rem !important"            
            }
        }
    },
    menuLink:{
        textDecoration:"none",
        color:"#000",
    },

    menuItem:{
        minHeight:"48px",
        textAlign:"center",
        [theme.breakpoints.down('xs')]:{
            minHeight:"24px",
            },
        }
}))


export default function Header() {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <>
            <AppBar position="static" className={classes.appbar}>
                <Toolbar disableGutters >
                    <Grid container alignItems="center">
                        <Grid item>
                            <InputBase 
                                className={classes.searchInput}
                                placeholder="search" 
                                startAdornment={<Search fontSize="small"/>}/>

                            <IconButton className={classes.menuIcon}>
                                <MenuIcon/>
                            </IconButton>
                        </Grid>
                        <Grid item xs></Grid>
                        <Grid>
                            <IconButton >
                                <Badge badgeContent={4} color="secondary" >
                                    <Notifications fontSize="small"/>
                                </Badge>
                            </IconButton>                    
                            <IconButton>
                                <Badge badgeContent={7} color="secondary">
                                    <Message fontSize="small"/>
                                </Badge>
                            </IconButton>
                            <IconButton onClick={handleClick}>
                                <Settings fontSize="small"/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar> 
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                className={classes.menuDesign}                
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem dense	 className={classes.menuItem} onClick={handleClose}><Link to="/" className={classes.menuLink}>Profile</Link></MenuItem>
                <MenuItem dense	 className={classes.menuItem} onClick={handleClose}><Link to="/a" className={classes.menuLink}>My account</Link></MenuItem>
                <MenuItem dense	 className={classes.menuItem} onClick={handleClose}><Link to="/data" className={classes.menuLink}>Logout</Link></MenuItem>
            </Menu> 
        </>
    )
}
