import React from 'react'
import { Grid,Typography,useTheme,useMediaQuery,makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme=>({
    company:{
        padding:"10px 0"
    },
    companyImage:{
        height:"50px",
        [theme.breakpoints.down('xs')]:{
          height:"30px",
        },
    }
}))

export default function Company() {
    const classes = useStyles()
    const theme = useTheme();
    const xsMatch = useMediaQuery(theme.breakpoints.down("xs"));
    return (
        <>
          <div style={{
                            backgroundColor:"#fff",
                            padding:xsMatch ? "20px 5px" : "50px 20px",

                        }}>
                        <Typography 
                            style={{
                                padding:xsMatch ? "0 0 10px 0":"0 0 40px 0",
                                fontWeight:"700",
                                textAlign:"center"
                            }}>
                        Trusted by 5M+ businesses
                        </Typography>
                        <Grid container>
                            {
                                [
                                    "https://www.upwork.com/static/assets/Brontes/d3b19b5/img/microsoft.a4ac95d.svg",
                                    "https://www.upwork.com/static/assets/Brontes/d3b19b5/img/ge.e4f1cde.svg",
                                    "https://www.upwork.com/static/assets/Brontes/d3b19b5/img/airbnb.b562d93.svg",
                                    "https://www.upwork.com/static/assets/Brontes/d3b19b5/img/bissell.5f96ccb.svg",
                                    "https://www.upwork.com/static/assets/Brontes/d3b19b5/img/automatic.6156771.svg",
                                    "https://www.upwork.com/static/assets/Brontes/d3b19b5/img/coty.355301a.svg"
                                ].map(item=>(
                                    <Grid 
                                        container 
                                        justify="center"
                                        className={classes.company}
                                        key={item} 
                                        item xs={4} sm={4} md={2}
                                    >
                                        <img 
                                            src={item} 
                                            alt="company" 
                                            className={classes.companyImage}
                                        />
                                    </Grid>
                                ))
                            }
                        </Grid>
                        </div>  
        </>
    )
}
