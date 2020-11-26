import React,{useEffect} from 'react'
import {getLeads} from '../redux/lead/actions'
import {connect} from 'react-redux'
function Home(props) {
    document.title = "A Dream of lose";

    const {fetchLead,data} = props

    useEffect(() => {
        if(data.leads.length <= 0){
            fetchLead()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data.auth])   
    return (
        <div>
            To the up and down ...............
        </div>
    )
}

const mapStateToProps = state =>({
    data : state.leads
})

const mapDispatchToProps = dispatch =>{
    return{
        fetchLead: () => dispatch(getLeads),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)