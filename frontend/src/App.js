import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Header from './component/Header'
import SideNav from './component/SideNav'
import { makeStyles } from '@material-ui/core'
import Data from './component/Data'

const useStyles = makeStyles(theme=>({
  mainBody:{
    marginLeft:"220px",
    [theme.breakpoints.down('sm')]:{
         marginLeft:"0",
    }
 }
}))


function App() {
  
  const [data,setData] = useState([])

  document.title = "A Dream of lose"
  
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/')
    .then(res=>
      setData(res.data)
      )
    .catch(err=>
      console.log(err)
      )
  }, [])
  const classes = useStyles()

  return (
    <>
    <Router>
      <SideNav/>
      <div className={classes.mainBody}>
      <Header/>
        <Switch>
          <Route exact path="/" render={()=>(<p>Dhaka is One</p>)}/>
          <Route exact path="/a" render={()=>(<p>A is a letter</p>)}/>
          <Route exact path="/data" render={()=>(<Data data={data}/>)}/>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
