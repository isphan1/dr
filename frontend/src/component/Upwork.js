import { AppBar, CssBaseline, Hidden, makeStyles } from "@material-ui/core";
import React from "react";
import Company from "./Company";
import Hire from "./Hire";
import Hero from "./Hero";

import Service from "./Service";
import SubHeader from "./SubHeader";
import UpworkHeader from "./UpworkHeader";
import Works from "./Works";
import Plan from "./Plan";
import Rating from "./Rating";
import Review from "./Review";
import Skills from "./Skills";
import Demo from "./Demo";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexGrow:"1",
        fontFamily: "Raleway",
        fontWeight: "500",
    },
    toolbar: theme.mixins.toolbar,
    appBar: {
        boxShadow: "0 0 1px #000",
    },
}));

export default function Upwork() {
    const classes = useStyles();
    document.title = "In-demand talent on demand";

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" color="inherit" className={classes.appBar}>
                <UpworkHeader />
            </AppBar>
            <main style={{width:"100%"}}>
                <div className={classes.toolbar} />
                <SubHeader />
                <Hero />
                <Hidden smUp>
                    <Company />
                </Hidden>
                <Service />
                <Hidden xsDown>
                    <Company />
                </Hidden>
                <Hire />
                <Works />
                <Plan />
                <Rating />
                <Review />
                <Skills/>
                <Demo/>
                <Footer/>
            </main>
        </div>
    );
}
