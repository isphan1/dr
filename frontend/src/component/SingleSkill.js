import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'


export default function SingleSkill(props) {

    const {classes,data,title} = props

    return (
        <>
          <Typography className={classes.title}>
                {title}
            </Typography>
        <Grid container>
        {
            data.map(item=>(
                <Grid key={Math.random()} item md={3} sm={6} xs={12} style={{
                    margin:"20px 0"
                }}>
                    
                {item.title.map(work=>(
                    <div key={work} style={{
                        marginBottom:"10px"
                    }}>
                    <Link className={classes.tabLink} to="/">{work}</Link>
                    </div>
                ))}
    
                </Grid>
            ))}
            </Grid>  
        </>
    )
}
