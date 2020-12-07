import React,{forwardRef,useImperativeHandle} from 'react'
import { Grid, makeStyles, Typography,useTheme,useMediaQuery } from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme=>({
    single:{
        margin:"20px 0",
        [theme.breakpoints.down('xs')]:{
            margin:"0"
        }
    }
}))


 const  SingleSkill = forwardRef((props,ref) =>{

    const design = useStyles()

    const [show,setShow] = React.useState(false)

    const {classes,data,title}= props

    const theme = useTheme()
    const xsMatch = useMediaQuery(theme.breakpoints.down('xs'))

    const showMore = () => {
        setShow(!show)
    }
    
    useImperativeHandle(
        ref,
        () => ({
            showAlert() {
                setShow(!show)
                alert("Child Function Called")
            }
        }),
    )

    return (
        <>
          <Typography className={classes.title}>
                {title}
            </Typography>
        <Grid container>
        {
            data.map(item=>(
                <Grid key={Math.random()} item md={3} sm={6} xs={12} className={design.single}>
                    
                {item.title.map((work,index)=>(
                    <div key={work} style={{
                        marginBottom:"10px",
                        // display: show ? (xsMatch ? ((index % 2 === 0) ? "none" : "block") : "block") : "block"

                        display: show ? "block" : (xsMatch ? (index % 2 === 0 ? "none" : "block") : "block")

}}>
                    <Link className={classes.tabLink} to="/">{work}</Link>
                    </div>
                ))}
    
                </Grid>
            ))}

            <p
                style={{
                // position:"absolute",
                margin: "10px 0",
                // left:"48px",
                // bottom:"5px",
                fontSize: "13px",
                fontWeight: "700",
                color: "#6DAF66",
                cursor: "pointer",
                }}
                onClick={showMore}
            >
                {xsMatch ? !show ? "Show more" : "" :""}
            </p>
            </Grid>  
        </>
    )
})
export default SingleSkill