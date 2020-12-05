import { makeStyles,Grid,Typography,Card,CardContent,CardMedia,IconButton,Hidden } from '@material-ui/core'
import {KeyboardArrowRight } from '@material-ui/icons'

import React from 'react'


const useStyles = makeStyles(theme=>({
    service:{
        backgroundColor:"#f5f2f2",
        marginTop:"-10px",
        padding:"0 60px",
        [theme.breakpoints.down('md')]:{
            padding:"0 20px",
        },
        [theme.breakpoints.down('sm')]:{
            padding:"0 60px",
        },
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
}))

export default function Service() {

    const classes = useStyles()

    return (
        <>
             <div className={classes.service}>
                    <Typography 
                        style={{
                            fontSize:"16px",
                            fontWeight:"500",
                            padding:"25px 5px 10px 5px"
                        }}
                    >
                        Find quality talent or agencies
                    </Typography>

                    <Grid container>
                    {
                    [
                        {title:"Web, Mobile & Software Dev",
                        image:"https://www.upwork.com/static/assets/Brontes/d3b19b5/img/development-desktop.29e32ce.svg"},
                        {title:"Design & Creative",
                        image:"https://www.upwork.com/static/assets/Brontes/d3b19b5/img/design-creative-desktop.109353b.svg"},
                        {title:"Writing",
                        image:"https://www.upwork.com/static/assets/Brontes/d3b19b5/img/writing-desktop.1b7ea27.svg"},
                        {title:"Sales & Marketing",
                        image:"https://www.upwork.com/static/assets/Brontes/d3b19b5/img/marketing-sales-desktop.ebb7dd9.svg"},
                        {title:"Admin Support",
                        image:"https://www.upwork.com/static/assets/Brontes/d3b19b5/img/admin-support-desktop.ff2e0d4.svg"},
                        {title:"Customer Service",
                        image:"https://www.upwork.com/static/assets/Brontes/d3b19b5/img/customer-service-desktop.22b35df.svg"},
                        {title:"Data Science & Analytics",
                        image:"https://www.upwork.com/static/assets/Brontes/d3b19b5/img/data-science-desktop.b430512.svg"},
                        {title:"Engineering & Architecture",
                        image:"https://www.upwork.com/static/assets/Brontes/d3b19b5/img/engineering-architecture-desktop.85b023c.svg"}
                    ].map(item=>(
                        <Grid key={item.title} xs={12} sm={6} md={3} item>
                            <Hidden xsDown>
                            <Card style={{margin:"5px"}}>
                                <CardMedia>
                                <img 
                                    src={item.image}
                                    alt="hero"
                                    width="100%"
                                />
                                </CardMedia>
                                <CardContent>
                                    <Typography className={classes.serviceTitle}>
                                        {item.title}
                                    </Typography>
                                </CardContent>
                            </Card>
                            </Hidden>
                            <Hidden smUp>
                                <Card style={{
                                    marginBottom:"10px",
                                    display:"flex",
                                    alignItems:"center",
                                 }}>
                                <img 
                                    src={item.image}
                                    alt="hero"
                                    height="50px"
                                />
                                <Typography className={classes.serviceTitle}>
                                    {item.title}
                                </Typography>
                                <IconButton>
                                    <KeyboardArrowRight/>
                                </IconButton>
                                </Card>
                            </Hidden>
                        </Grid>
                                ))
                            }
                        </Grid>
                        <Typography 
                        style={{
                            padding:"40px 0",
                            fontWeight:"700",
                            textAlign:"center"
                        }}>
                        Don’t see what you’re looking for? <span style={{color:"#37a000"}}>See all categories</span>
                        </Typography>
                        </div>
        </>
    )
}
