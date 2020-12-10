import { Typography } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import { getLeads } from '../redux/lead/actions'

const Dashboard = (props)=> {

    const leads = props.data

    document.title = "Dashboard - Upwork"

    React.useEffect(() => {
            setInterval(() => {
                props.getLeads()
            },120000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <div
            style={{
                padding:"20px 50px",
                minHeight:"80vh"
            }}
        >
            {
                leads.map(item=>(
                    <Typography
                        style={{
                            fontFamily:"Railway",
                            fontWeight:"100",
                            fontSize:"16px"
                        }}
                    key={Math.random()*6437573}>{item.title}</Typography>
                ))
            }
        </div>
    )
}

const mapStateToProps = state =>({
    data : state.leads.leads
})

const mapDispatchToProps = dispatch =>{
    return{
        getLeads: () => dispatch(getLeads),
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)

