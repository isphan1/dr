import React from "react";
import {
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { Home, Inbox } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  sideNav: {
    display: "flex",
    position: "fixed",
    flexDirection: "column",
    width: "220px",
    height: "100%",
    marginTop:"0",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menuLink: {
    textDecoration: "none",
    color: "#000",
  },
}));

export default function SideNav() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.sideNav}>
        <List component="nav" aria-label="main mailbox folders">
          <Link to="/" className={classes.menuLink}>
            <ListItem button>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <Link to="/data" className={classes.menuLink}>
          <ListItem button>
            <ListItemIcon>
              <Inbox />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem>
          </Link>
        </List>
      </div>
    </>
  );
}
