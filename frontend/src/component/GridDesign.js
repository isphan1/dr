import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  CardContent,
  Card,
  Grid,
  Menu,
  useMediaQuery,
} from "@material-ui/core";
import Collapse from "@material-ui/core/Collapse";
import faker from "faker";
import {Link} from 'react-router-dom'

// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
// import SendIcon from '@material-ui/icons/Send';
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
// import StarBorder from '@material-ui/icons/StarBorder';
import { Settings } from "@material-ui/icons";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      // width: `calc(100% - ${drawerWidth}px)`,
      width: "100%",
      marginLeft: drawerWidth,
      zIndex: "1102",
      [theme.breakpoints.down("sm")]: {
        zIndex: "1100",
      },
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  drawerLink: {
    fontSize: "20px",
    color: "#000",
    cursor: "pointer",
    textDecoration: "none",
    display: "flex",
    position: "fixed",
    zIndex: "1302",
    width: "240px",
    height: "64px",
    [theme.breakpoints.down("xs")]: {
      height: "48px",
    },
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ccc",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  menuDesign: {
    height: "100vh",
    "& .MuiMenu-list": {
      outline: "none",
      padding: "0",
    },

    "& .MuiPaper-rounded": {
      borderRadius: "0px !important",
    },
    "& .MuiMenu-paper": {
      width: `calc(100% - ${drawerWidth}px)`,

      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    "& .MuiPaper-root": {
      [theme.breakpoints.up("sm")]: {
        right: "0 !important",
        left: "auto !important",
      },
      [theme.breakpoints.down("sm")]: {
        right: "15px !important",
        left: "auto !important",
      },
      top: "4rem !important",
      [theme.breakpoints.down("xs")]: {
        top: "3.5rem !important",
      },
    },
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const theme = useTheme();
  const xsMatch = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleAnchorEl = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseAnchorEl = () => {
    setAnchorEl(null);
  };

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} style={{ display: "flex" }}>
        <Link to="/" className={classes.drawerLink}>YOUTUBE</Link>
      </div>
      {/* <Divider /> */}
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      {xsMatch ? (
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
      ) : (
        <ListItem button onMouseEnter={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
      )}
      <Collapse in={open} timeout="auto" unmountOnExit>
        {/* <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
        </List> */}
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem className={classes.nested} button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Collapse>
      <Divider/>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        color="inherit"
        position="fixed"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap style={{ marginRight: "auto" }}>
            YOUTUBE
          </Typography>
          {xsMatch ? (
            <IconButton onClick={handleAnchorEl}>
              <Settings />
            </IconButton>
          ) : (
            <IconButton onMouseEnter={handleAnchorEl}>
              <Settings />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>

        <Menu
          id="custom-m"
          anchorEl={anchorEl}
          keepMounted
          className={classes.menuDesign}
          open={Boolean(anchorEl)}
          onClose={handleCloseAnchorEl}
          MenuListProps={
            xsMatch
              ? 
              { onClick: handleCloseAnchorEl }
              : 
              { onMouseLeave: handleCloseAnchorEl }
          }
        >
          <Grid container style={{ outline: "none" }}>
            <Grid item sm={4}>
              {[1, 2, 3, 4, 5].map((item) => (
                // <h3 key={item}>The top gun academy</h3>
                <Card
                  key={item}
                  style={{
                    margin: (xsMatch ? "10px" : "10px 0 10px 10px"),
                    backgroundImage: "linear-gradient(to right, #d4b57b, #30858e5e)",
                  }}
                >
                  <CardContent>
                    <Typography>{faker.lorem.sentence()}</Typography>
                  </CardContent>
                </Card>
              ))}
            </Grid>
            <Grid item sm={4}>
              {[1, 2, 3, 4, 5].map((item) => (
                // <h3 key={item}>The top gun academy</h3>
                <Card key={item} style={{ margin: "10px" }}>
                  <CardContent>
                    <Link to="/">{faker.lorem.sentence()}</Link>
                  </CardContent>
                </Card>
              ))}
            </Grid>
            <Grid item sm={4}>
              {[1, 2, 3, 4, 5].map((item) => (
                // <h3 key={item}>The top gun academy</h3>
                <Card key={item} style={{ margin: "10px 10px 10px 0" }}>
                  <CardContent>
                    <Typography>{faker.lorem.sentence()}</Typography>
                  </CardContent>
                </Card>
              ))}
            </Grid>
          </Grid>
        </Menu>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
