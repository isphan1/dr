import React from 'react'
import { connect } from 'react-redux'
import {Card,Typography,CardContent, Grid} from '@material-ui/core'

function Detail(props){
    
    const item = props.lead
    document.title = item.title
    
    return (
        <Grid container justify="center" style={{height:"90vh"}} alignContent="center">
            <Grid item md={8} sm={8} xs={12}>
                <Card>
                    <CardContent>
                        <Typography variant="h6">{item.title}</Typography>
                        <Typography variant="body2">{item.body}</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

const mapStateToProps = (state,ownProps) =>{

    // console.log(ownProps.history.goBack())

    let id = ownProps.match.params.post_id;
    
    return {
        lead : state.leads.leads.find(item => item.id === parseInt(id))
    }
}

export default connect(mapStateToProps)(Detail)