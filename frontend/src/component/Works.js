import { Grid, makeStyles, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme=>({
    works:{
        background:"#fff",
        padding:"80px 100px",
        [theme.breakpoints.down('md')]:{
            padding:"60px 60px"
        },
        [theme.breakpoints.down('xs')]:{
            padding:"20px 30px"
        }
    },
    worksTitle:{
        textAlign:"center",
        fontSize:"36px",
        [theme.breakpoints.down('md')]:{
            fontSize:"30px",
        },
        [theme.breakpoints.down('sm')]:{
            fontSize:"24px",
        },
        [theme.breakpoints.down('xs')]:{
            marginBottom:"0",
            fontSize:"18px",
        },
        marginBottom:"30px",
        fontWeight:"700"
    }
}))

export default function Works() {
    const classes = useStyles()
    const theme = useTheme()
    const xsMatch = useMediaQuery(theme.breakpoints.down('xs'))

    return (
        <div className={classes.works}>
            <Typography
                className={classes.worksTitle}
            >
                How it works
            </Typography>
            <Grid container>
                {
                    [
                        {
                            image:"https://www.upwork.com/static/assets/Brontes/498ef42/img/find.9449b48.svg",
                            title:"Post a job (it’s free)",
                            body:"Tell us about your project. Upwork connects you with top talent and agencies around the world, or near you.",
                            border:true
                        },
                        {
                            image:"https://www.upwork.com/static/assets/Brontes/498ef42/img/work.e0cdb7b.svg",
                            title:"Bids come to you",
                            body:"Get qualified proposals within 24 hours. Compare bids, reviews, and prior work. Interview favorites and hire the best fit",
                            border:true
                        },
                        {
                            image:"https://www.upwork.com/static/assets/Brontes/498ef42/img/pay.8951f52.svg",
                            title:"Collaborate easily",
                            body:"Use Upwork to chat or video call, share files, and track project milestones from your desktop or mobile.",
                            border:true
                        },
                        {
                            image:"https://www.upwork.com/static/assets/Brontes/498ef42/img/find.9449b48.svg",
                            title:"Payment simplified",
                            body:"Pay hourly or fixed-price and receive invoices through Upwork. Pay for work you authorize.",
                            border:false
                        },
                    ].map((item,index)=>(
                    <Grid key={item.title} 
                        container direction="column" 
                        alignItems={xsMatch ? "flex-start":"center"}
                        // justify="center"
                        item md={3} sm={6} xs={12}
                        style={{
                            padding:xsMatch ? (item.border ? "10px 0" : "10px 0 0 0"):"10px",
                            borderBottom: xsMatch ? (item.border ? "1px solid #e0e0e0" : "" ):""
                        }}
                    >
                        <img 
                            src={item.image} 
                            alt="works" 
                            height="120px"
                            width="120px"
                            style={{display:xsMatch ? "none":"block"}}
                        />
                        <Typography
                            style={{
                                fontWeight:"500",
                                fontSize:xsMatch ? "14px":"16px",
                                margin:xsMatch ? "":"5px 0"
                            }}
                        >
                            {xsMatch ? (index+1)+". " : ""}{item.title}
                        </Typography>
                        <Typography variant="subtitle2" style={{
                            textAlign:xsMatch? "inherit":"center",
                            margin:xsMatch ? "5px 0 2.5px 18px":"",
                            fontWeight:"100",
                            borderBottom: xsMatch ? "1px soild #000" : "none"
                            }}
                            >
                                {item.body}</Typography>
                    </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}
