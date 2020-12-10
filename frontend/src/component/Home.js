import React,{useEffect} from 'react'
import {getLeads} from '../redux/lead/actions'
import {connect} from 'react-redux'
import { Card, CardContent, Grid, makeStyles } from '@material-ui/core';


const useStyles = makeStyles(theme=>({
    mainGrid:{
    }
}))

function Home(props) {
    document.title = "A Dream of lose";

    const {fetchLead,data} = props

    useEffect(() => {
        if(data.leads.length <= 0){
            // fetchLead()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data.auth])   

    const classes = useStyles()
    return (
        <div style={{minHeight:"100vh",padding:"20px"}}>
            <Grid container className={classes.mainGrid}>

            <Grid item xs={12} sm={4} style={{position:"relative",marginTop:"70px"}}>
                <p style={{
                    position:"absolute",
                    backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)",
                    left:"50%", 
                    top:"-25%",
                    width:"140px",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    height:"90px",
                    transform:`translate(${"-50%"})`
                }}>Logo</p>
                <Card style={{height:"200px"}}>
                    <CardContent>
                        A
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={4} style={{position:"relative",marginTop:"70px",padding:"0px 20px"}}>
                <p style={{
                    position:"absolute",
                    backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)",
                    left:"50%", 
                    top:"-25%",
                    width:"140px",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    height:"90px",
                    transform:`translate(${"-50%"})`
                }}>TEMPARETURE</p>
                <Card style={{height:"200px"}}>
                    <CardContent>
                        A
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={4} style={{position:"relative",marginTop:"70px"}}>
                <p style={{
                    position:"absolute",
                    backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)",
                    left:"50%", 
                    top:"-25%",
                    width:"140px",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    height:"90px",
                    transform:`translate(${"-50%"})`
                }}>Logo</p>
                <Card style={{height:"200px"}}>
                    <CardContent>
                        A
                    </CardContent>
                </Card>
            </Grid>
            </Grid>
            <Grid item xs={12} sm={4} style={{position:"relative",marginTop:"70px"}}>
                <p style={{
                    position:"absolute",
                    backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)",
                    left:"50%", 
                    top:"-25%",
                    width:"140px",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    height:"90px",
                    transform:`translate(${"-50%"})`
                }}>Logo</p>
                <Card style={{
                    height:"200px", 
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    fontSize:"1.5rem",
                    backgroundImage: "linear-gradient(to right,  #cccccc, #54b348)",
                    }}>
                    <CardContent>
                        A good lock for the best way.
                    </CardContent>
                </Card>
            </Grid>
        </div>
    )
}

const mapStateToProps = state =>({
    data : state.leads,
    auth : state.auth

})

const mapDispatchToProps = dispatch =>{
    return{
        // fetchLead: () => dispatch(getLeads),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)