/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {addCart} from '../redux/cart/actions'
import {addLead} from '../redux/lead/actions'

import {Card,Typography,CardContent ,Grid, Button} from '@material-ui/core'
import slug from 'slugify'
import {leadSearch} from '../redux/lead/actions'
import CustomPagination from './CustomPagination'


function Data({data,addLead,addCart,leadSearch}) {    
    document.title = "Dashboard of the system"
    const [leads,setData] = useState(data.leads)
    const [currentPage,setCurrentPage] = useState(1)
    const [postPerPage] = useState(50)

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
        setCurrentPage(1)
     }, [data.search,data.leads])

     const paginate = (pageNumber) =>(
         setCurrentPage(pageNumber)
     )


     const indexOfLastPost = currentPage * postPerPage
     const indexOfFristPost = indexOfLastPost - postPerPage
     const currentLeads = leads.slice(indexOfFristPost,indexOfLastPost)

    return (
        <>
            <div style={{                
                display:"flex",
                position:"relative",
                justifyContent:"center",
                alignItems:"center",
                background:"#eee",
                padding:"20px"
                }}>
            <Button color="primary" variant="contained" onClick={()=>addLead()}>Add news</Button>
            </div>

            <div
            style={{                
                display:"flex",
                position:"relative",
                justifyContent:"center",
                alignItems:"center",
                marginTop:"2rem",
                }}
            >
        <CustomPagination totalLeads={leads.length} postPerPage={postPerPage} paginate={paginate}/>
        </div>

        <Grid container style={{marginTop:"1rem",padding:"10px",height:"100%"}}>
            {/* <Grid item sm={4} md={4} style={{                
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                background:"#eee",
                }}>
            <Button color="primary" variant="contained" onClick={()=>addLead()}>Add item</Button>
            </Grid> */}
            { currentLeads.length <= 0 ? "Nothing Found":
            currentLeads.map(item=>(
                <Grid key={item.id} item md={4} sm={4} xs={12} style={{padding:"10px"}}>
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