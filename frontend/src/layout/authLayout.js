import React from 'react'
import Header from "../component/Header";
import SideNav from "../component/SideNav";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    mainBody: {
      marginLeft: "220px",
      backgroundColor: "#ccc",
      // position:"fixed",
      // overflow:"scroll",
      // width:"84%",
      height: "100%",
      [theme.breakpoints.down("sm")]: {
        marginLeft: "0",
      },
    },
  }));
  
function authLayout(props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const classes = useStyles()
    return (
        <>
            <SideNav />
                <div className={classes.mainBody}>
                    <Header {...props}/>
                    <div style={{marginTop:"70px"}}>{props.children}</div>
                </div>
        </>
    )
}

export default authLayout