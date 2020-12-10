/* eslint-disable jsx-a11y/anchor-is-valid */
import { Collapse, Grid, Hidden, IconButton, makeStyles, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import { Android, Apple, Facebook, Instagram, KeyboardArrowDown, KeyboardArrowUp, LinkedIn, Twitter, YouTube } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme=>({
    footer:{
        background:"#1D4354",
        padding:"20px 100px",
        [theme.breakpoints.down('sm')]:{
            padding:"20px 50px",
        },
        [theme.breakpoints.down('xs')]:{
            padding:"20px 40px",
        }
    },
    tabLink:{
        color:"#e0e0e0",
        display:"block",
        width:"100%",
        fontSize:"13px",
        textDecoration:"none",
        textTransform:"capitalize",
        marginBottom:"10px",
        "&:hover":{
            cursor:"pointer",
            textDecoration:"underline",

        }
      },
      title:{
        marginBottom:"15px",
        color:"#e0e0e0",
        display:"flex",
        alignItems:"center",
        [theme.breakpoints.down('xs')]:{
            border:"1px soild #fff",
            fontSize:"13px",
            justifyContent:"space-between"
        }
      },
      social1:{
        alignItems:"center",
        justifyContent:"flex-start",
        [theme.breakpoints.down('xs')]:{
            justifyContent:"center",
            fontSize:"13px",
        }
      },
      social2:{
        alignItems:"center",
        justifyContent:"flex-end",
        [theme.breakpoints.down('xs')]:{
            justifyContent:"center",
            fontSize:"13px",
        }
      }
}))


const footer =[
    {
        title:"COMPANY",
        tabs:[
            "About Us",
            "Investor Relations",
            "Careers",
            "Upwork Foundation",
            "Press",
            "Trust, Safety & Security",
            "Terms of Service",
            "Privacy Policy",
            "Accessibility",
        ]
    },
    {
        title:"RESOURCES",
        tabs:[
            "Resources",
            "Customer Support",
            "Customer Stories",
            "Business Resources",
            "Payroll Services",
            "Upwork Reviews",
        ]
    },
    {
        title:"BROWSE",
        tabs:[
            "Freelancers by Skill",
            "Freelancers in USA",
            "Freelancers in UK",
            "Freelancers in Canada",
            "Freelancers in Australia",
            "Jobs in USA",
            "Find Jobs",
        ]
    }
]


export default function Footer() {

    const classes = useStyles()
    const [open0,setOpen0] = React.useState(false)
    const [open1,setOpen1] = React.useState(false)
    const [open2,setOpen2] = React.useState(false)

    const fn = [setOpen0,setOpen1,setOpen2]
    const val = [open0,open1,open2]
    const theme = useTheme()
    const xsMatch = useMediaQuery(theme.breakpoints.down('xs'))

    return (
        <div className={classes.footer}>
            <Typography
            style={{
                textAlign:"center",
                color:"#E0E0E0",
                fontSize:xsMatch ? "13px":"14px",
                marginTop:"20px"
            }}
            >
            Looking to hire for long-term or full-time assignments? See how <a
            
            style={{
                color:"#E0E0E0",
            }}
            href="#">Upwork Payroll</a> simplifies admin.
            </Typography>

            <div 
                style={{
                    margin:"20px 0",
                    height:"1px",
                    background:"#8e6969ad"
                }}
            />
            <Grid container>
                {
                    footer.map((item,index)=>(
                        <Grid key={item.title} item md={4} sm={4} container 
                        justify= {xsMatch ? "flex-start":"space-evenly"}
                            
                        style={{
                            borderBottom: xsMatch ? "1px solid #8e6969ad" :"none",
                            marginBottom: xsMatch ? "20px" :"none",
                        }}
                        >
                        <Hidden smUp>
                        <div onClick={()=>fn[index](!val[index])}
                            style={{
                                width:"100%"
                            }}
                        >
                            <Typography className={classes.title}>{item.title} 
                            {xsMatch ? val[index] ? <KeyboardArrowUp /> : <KeyboardArrowDown /> : undefined}
                            </Typography>
                        <Collapse
                            in={val[index]}
                            timeout="auto"
                            unmountOnExit
                            >
                        {
                            item.tabs.map(link=>(
                                    <Link key={link} className={classes.tabLink} to="/">{link}</Link>
                                ))
                        }
                            </Collapse>
                            </div>
                        </Hidden>

                        <Hidden xsDown>
                        <div >
                            <Typography className={classes.title}>{item.title} </Typography>
                            {
                                item.tabs.map(link=>(
                                    <Link key={link} className={classes.tabLink} to="/">{link}</Link>
                                ))
                            }
                            </div>
                        </Hidden>
                        </Grid>
                    ))
                }
            </Grid>
            <div style={{
                borderTop: xsMatch ? "none":"1px solid #8e6969ad",
                borderBottom:"1px solid #8e6969ad",
                padding:xsMatch ? "0 0 10px 0":"10px 0",
                color:"#e0e0e0",
            }}>
                <Grid container >
                    <Grid item md={6} sm={7} xs={12} 
                    container className={classes.social1}>
                        Follow us
                        <IconButton size="small" color="inherit">
                        <Facebook/>
                        </IconButton>
                        <IconButton size="small" color="inherit">
                        <LinkedIn/>
                        </IconButton>
                        <IconButton size="small" color="inherit">
                        <Twitter/>
                        </IconButton>
                        <IconButton size="small" color="inherit">
                        <YouTube/>
                        </IconButton>
                        <IconButton size="small" color="inherit">
                        <Instagram/>
                        </IconButton>
                        </Grid>
                        <Hidden smUp>
                    <div style={{
                        height:"1px",
                        width:"100%",
                        backgroundColor:"#8e6969ad",
                        margin:"20px 0"
                    }}/>
                    </Hidden>
                    <Grid item md={6} sm={5} xs={12} 
                    container className={classes.social2}>
                        Mobile app
                    <IconButton size="small" color="inherit">
                        <Apple/>
                        </IconButton>
                        <IconButton size="small" color="inherit">
                        <Android/>
                        </IconButton>
                    </Grid>
                </Grid>
            </div>
            <p
            style={{
                color:"#e0e0e0",
                textAlign:"center",
                paddingTop:"10px"
            }}>© 2015 - 2020 Upwork® Global Inc.</p>
        </div>
    )
}
