import React from 'react'
import {Card,Typography,CardContent, Grid} from '@material-ui/core'

export default function Data(props) {
    const {data} = props
    return (
        <>
        <Grid container style={{marginTop:"2rem",padding:"10px"}}>
            {data.map(item=>(
                <Grid key={item.title} item md={4} sm={6} xs={12} style={{padding:"10px"}}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">{item.title}</Typography>
                            <Typography variant="body2">{item.body}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>    
        </>
    )
}
