import React from "react";
import {leadSearch, logout} from '../redux/lead/actions'
import {clearCart, removeCart} from '../redux/cart/actions'

import {
  AppBar,
  Toolbar,
  IconButton,
  MenuItem,
  Menu,
  makeStyles,
  Grid,
  Badge,
  InputBase,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import {
  Menu as MenuIcon,
  Settings,
  Message,
  Notifications,
  Home,
  Inbox,
  Search,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CustomeMenu from "./CustomeMenu";
import { uLogout } from "../redux/auth/action";

const useStyles = makeStyles((theme) => ({
  appbar: {
    color: "#000",
    backgroundColor: "#fff",
    // zIndex: theme.zIndex.appBar + 1,
  },
  searchInput: {
    padding: "0px 8px",
    marginLeft: "8px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    "&:hover": {
      backgroundColor: "#ccc",
    },
    "& .MuiSvgIcon-root": {
      marginRight: "8px",
    },
  },
  menuIcon: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
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
  drawer:{
      width:"220px"
  }
}));


function Header({leads,clearCart,cart,removeCart,logout,history,leadSearch}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [badge,setBadge] = React.useState("0");

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const singOU = () =>{
    logout()
    clearCart()
    history.push('/ulogin')
    setAnchorEl(null);
  }

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  React.useEffect(() => {
    setBadge(String(cart.length === 0 ? 0 : parseInt(cart.length)))
  }, [cart])

  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const searchItem = e =>{
    leadSearch(e.target.value)
  }

  return (
    <>
      <AppBar position="fixed" elevation={0} className={classes.appbar}>
        <Toolbar disableGutters>
          <Grid container alignItems="center">
            <Grid item>
              <InputBase
                className={classes.searchInput}
                placeholder="search"
                onChange={e=>searchItem(e)}
                startAdornment={<Search fontSize="small" />}
              />

              <IconButton
                className={classes.menuIcon}
                onClick={handleDrawerOpen}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs></Grid>
            <Grid>
              <IconButton>
                <Badge badgeContent={4} color="secondary">
                  <Notifications fontSize="small" />
                </Badge>
              </IconButton>
              <IconButton onClick={handleClick1}>
                <Badge badgeContent={badge} color="secondary">
                  <Message fontSize="small" />
                </Badge>
              </IconButton>
              <IconButton onClick={handleClick}>
                <Settings fontSize="small" />
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
        <Link to="/" className={classes.menuLink}>
          <MenuItem dense className={classes.menuItem} onClick={handleClose}>
            Profile
          </MenuItem>
        </Link>
        <Link to="/login" className={classes.menuLink}>
          <MenuItem dense className={classes.menuItem} onClick={handleClose}>
            My account
          </MenuItem>
        </Link>
          <MenuItem dense className={classes.menuItem} onClick={singOU}>
            Logout
          </MenuItem>
      </Menu>
      
      <CustomeMenu 
        anchorEl={anchorEl1} 
        handleClose={handleClose1} 
        menuDesign={classes.menuDesign} 
        cart={cart}
        removeCart={removeCart}
      />

      <SwipeableDrawer
        swipeAreaWidth={0}
        anchor="left"
        open={open}
        onOpen={() => handleDrawerOpen()}
        onClose={() => handleDrawerClose()}
      >
          <div className={classes.drawer}>
          <List component="nav" aria-label="main mailbox folders">
          <Link to="/" className={classes.menuLink}>
            <ListItem button onClick={()=>handleDrawerClose()}>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <Link to="/data" className={classes.menuLink}>
          <ListItem button onClick={()=>handleDrawerClose()}>
            <ListItemIcon>
              <Inbox />
            </ListItemIcon>
            <ListItemText primary="News" />
          </ListItem>
          </Link>
        </List>
          </div>
      </SwipeableDrawer>
    </>
  );
}

const mapStateToProps = state =>({
  leads : state.leads.leads,
  cart : state.cart.cart,
  auth:state.leads.auth

})

const mapDispatchToProps = dispatch =>{
  return{
      logout: () => dispatch(logout),
      removeCart: (item) => dispatch(removeCart(item)),
      clearCart: (item) => dispatch(clearCart),
      leadSearch: (item) => dispatch(leadSearch(item)),

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)