import React from 'react'
import { connect } from 'react-redux'
import { login } from '../redux/lead/actions'
import { Button, Card, CardContent, Grid, TextField,Typography } from '@material-ui/core'
import {useForm,Controller} from 'react-hook-form'
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from "yup";
import ErrorMessage from './ErrorMessage'

// const schema = yup.object().shape({
//   username: yup.string().email('invalid').required(),
//   password: yup.number().positive().integer().required(),
// });

// const useStyles = makeStyles(theme=>({
//     inputDesign:{
//         width:"90%",
//         [theme.breakpoints.down('sm')]:{
//             width:"100%"
//         }
//     }
// }))

function Login(props) {

    const {errors,handleSubmit,control,register} = useForm(
        // {resolver: yupResolver(schema)}
        )

    document.title="Login to the system"

    const singIN = (data,e) =>{
        e.preventDefault()
        props.login()
        props.history.push('/')
    }
    return (
        <>
            <Grid container justify="center" style={{height:"90vh"}}>
                <Card style={{width:"320px",background:"#ccc",height:"400px",textAlign:"center",marginTop:"100px"}}>
                    <CardContent>
                        <Typography style={{marginBottom:"15px"}} variant="h4">SING IN</Typography>

                        <form onSubmit={handleSubmit(singIN)} autoComplete="off">
                            {/* <Controller
                                as={<TextField style={{margin:"5px"}} variant="outlined" label="username"/>}
                                control={control}
                                defaultValue=""
                                name="username"
                            /> */}
                            <TextField style={{margin:"5px"}} inputRef={register({required: true,minLength:3})} name="username" variant="outlined" label="username"/>
                            <p>{errors.username && <ErrorMessage errors={errors.username.type}/>} </p>

                            <Controller
                                as={<TextField style={{margin:"5px"}} variant="outlined" label="password"/>}
                                control={control}
                                name="password"
                                defaultValue=""
                            />
                            <Button color="primary" style={{marginTop:"20px",width:"60%"}} variant="contained" type="submit">Login</Button>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </>
    )
}
const mapStateToProps = state =>({
    auth : state.leads.auth
})

const mapDispatchToProps = dispatch =>{
    return{
        login: () => dispatch(login),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)