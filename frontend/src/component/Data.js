/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {addCart} from '../redux/cart/actions'
import {addLead} from '../redux/lead/actions'

import {Card,Typography,CardContent ,Grid, Button} from '@material-ui/core'
import slug from 'slugify'
import {leadSearch} from '../redux/lead/actions'


function Data({data,addLead,addCart,leadSearch}) {    
    document.title = "Dashboard of the system"
    const [leads,setData] = React.useState(data.leads)

    React.useEffect(()=>{
        leadSearch("")
    },[])

     React.useEffect(() => {
         if(data.search.length > 0){
            let a = data.leads.filter(item =>{
                return item.title.indexOf(data.search) !== -1;
            })
          setData(a)
        }
        else{
            setData(data.leads)
        }
     }, [data.search,data.leads])

    return (
        <>
        <Grid container style={{marginTop:"4rem",padding:"10px",height:"100%"}}>
            <Button onClick={()=>addLead()}>Add item</Button>
            {
            leads.map(item=>(
                <Grid key={item.id} item md={4} sm={6} xs={12} style={{padding:"10px"}}>
                    <Card onClick={()=>addCart(item)}>
                        <CardContent>
                            <Typography variant="h6">
                                <Link to={'/news/'+item.id+'/'+slug(item.title)}>{item.title}</Link>
                                </Typography>
                            <Typography variant="body2">{item.body}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))
            }
        </Grid>    
        </>
    )
}


const mapStateToProps = state =>({
    data : state.leads
})

const mapDispatchToProps = dispatch =>{
    return{
        addCart: (item) => dispatch(addCart(item)),
        leadSearch: (item) => dispatch(leadSearch(item)),
        addLead: () => dispatch(addLead)
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Data)