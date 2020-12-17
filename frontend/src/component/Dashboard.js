import {
  Card,
  Grid,
  InputBase,
  makeStyles,
  Typography,
  IconButton,
  Divider,
  Button,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import Cookies from 'js-cookie'
import slug from 'slugify'
import {
  Create,
  Language,
  Schedule,
  Search,
  Timer,
  Visibility,
  MoreHoriz,
  ThumbDownAltOutlined,
  FavoriteBorder,
  CheckCircle,
  Room,
} from "@material-ui/icons";
import React from "react";
import Rating from "@material-ui/lab/Rating";
import Skeleton from '@material-ui/lab/Skeleton';

import './dash.scss'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getLeads } from "../redux/lead/actions";
import { tokenFresh, uLogout } from "../redux/auth/action";
const useStyles = makeStyles((theme) => ({
  searchInput: {
    padding: "0px 0px 0px 8px",
    fontFamily: "Raleway",
    fontWeight: "300",
    height: "36px",
    backgroundColor: "#fff",
    border: ".5px solid #e0e0e0",
    borderRadius: "5px",
    width: "100%",
    fontSize: "15px",
    // [theme.breakpoints.down("md")]: {
    //     width:"70%",
    // },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    "&:hover": {
      borderRadius: "5px",
      // boxShadow:"inset 0 0 5px rgba(57,73,76,.4)",
      outline: ".5px solid #37a000",
      outlineStyle: "auto",
    },
    "& .MuiSvgIcon-root": {
      marginRight: "1px",
    },
  },
  advanced: {
    padding: "10px 0",
    color: "#37a000",
    textDecoration: "none",
    cursor: "pointer",
    "&:hover": {
      color: "#000",
      textDecoration: "underline",
    },
  },
  root: {
    padding: "30px 100px",
    backgroundColor: "#f9f3f3",
    [theme.breakpoints.down("md")]: {
      padding: "30px 50px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "30px 10px",
    },
  },
  profile: {
    paddingLeft: "35px",
    "& > *": {
      marginBottom: "15px",
    },
    [theme.breakpoints.down('sm')]:{
      display:"none"
    }
  },
  visibility: {
    display: "flex",
    // alignItems:"center",
    "& > *": {
      marginRight: "10px",
    },
  },
  item: {
    "&:hover": {
      backgroundColor: "#f9f9f9",
      cursor: "pointer",
    },
  },
  type: {
    "& > *": {
      marginRight: "7px",
    },
  },
  typeText: {
    padding: "2.5px 7.5px",
    borderRadius: "20px",
    backgroundColor: "#f9f3f3",
  },
}));

const Dashboard = (props) => {

  const classes = useStyles();

  const [currentPage,setCurrentPage] = React.useState(1)

  const [val,setVal] = React.useState("")
  
  const theme = useTheme()
  const smMatch = useMediaQuery(theme.breakpoints.down('sm'))

  const [search,setSearch] = React.useState("")
  const [data,setData] = React.useState(props.data)
  const postPerPage = 3

  const [loading,setLoading] = React.useState(true)


  const lastIndex = currentPage * postPerPage
  const fristIndex = 0
  const leads = data.slice(fristIndex,lastIndex)

  const loadItem = () =>{
    setCurrentPage(prev => {
      return prev +1
    })  
  }
  const addSearch = (e) =>{
    setVal(e.target.value)
  }

  const filterItem = () =>{
    setLoading(true)
    setSearch(val)
  }

  React.useEffect(()=>{
    setLoading(true)

    if(search.length > 0){
      let a = props.data.filter(item =>{
          return item.title.indexOf(search) !== -1;
      })
    setData(a)
  }
  else{
      setData(props.data)
  }
  setCurrentPage(1)
  },[search,props.data])


  React.useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
      }, 500);
  },[loading])

React.useEffect(()=>{

  if(props.history !== undefined){
    if(props.history.location !== undefined){
      if(props.history.location.modalProps !== undefined){
        var page = props.history.location.modalProps.page
        setCurrentPage(page)
        if(page< currentPage){
          setCurrentPage(currentPage)
        }
      }
    }
  }
},[props.history,currentPage])

  document.title = "My Job Feed";

  React.useEffect(() => {
      props.getLeads(Cookies.get('token'))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  React.useEffect(()=>{
          setInterval(() => {
            if ((new Date(Cookies.get('expires')).getTime() -1000) < new Date().getTime()) {
              props.fresh(Cookies.get('token'))
            }
          }, 1000);
  },[props])

  React.useEffect(()=>{
      if (new Date(Cookies.get('expires')).getTime() < new Date().getTime()) {
        props.logout()
        window.location.reload()
      }
},[props])

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item md={3} container justify="center">
          <div 
            style={{
              display:smMatch ? "none":"flex",
              flexDirection:"column"

            }}
          >
          <Typography variant="h5"
            style={{
              fontWeight:"700"
            }}
          >
            Find Work
            </Typography>
          <div className="feed" variant="subtitle2">
            
            <span style={{marginLeft:"7px"}}>My Feed</span>
          </div>
          <div className="box">
          <Typography variant="subtitle1" style={{color:"#000",marginBottom:"30px"}}>Recommended</Typography>
          <Typography variant="subtitle1" style={{color:"#000",fontSize:"18px", fontWeight:"700"}}>My Categories</Typography>
          <Typography variant="subtitle1">Customer Service</Typography>
          <Typography variant="subtitle1">Web Developmnet</Typography>
          <Typography variant="subtitle1">Mobile Development</Typography>
          <Typography variant="subtitle1">Data Entry</Typography>
          <Typography variant="subtitle1">Data Vizualization</Typography>
          <Typography variant="subtitle1">Machine Learning</Typography>
          </div>

          </div>
        </Grid>
        <Grid item md={6} container>
          <InputBase
            autoComplete="off"
            className={classes.searchInput}
            placeholder="Search for jobs"
            name='search'
            onChange={(e)=>addSearch(e)}
            startAdornment={
              <>
                <Search
                  fontSize="small"
                  style={{
                    position: "absolute",
                    backgroundColor: "#37a000",
                    cursor: "pointer",
                    color: "#fff",
                    padding: "7px",
                    height: "36px",
                    width: "35px",
                    fontSize: "16px",
                    borderRadius: "2.5px",
                    right: "-3",
                  }}
                  onClick={() => filterItem()}
                />
              </>
            }
          />
          <Typography variant="subtitle2" className={classes.advanced}>
            Advanced Search
          </Typography>
          <Card
            style={{
              width: "100%",
            }}
          >
            <div
              style={{
                padding: "10px 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6">My Feed</Typography>
              <IconButton>
                <MoreHoriz />
              </IconButton>
            </div>
            <Divider />
            <Grid container>
              {
                loading  ? 
                [1,2,3,4,5,6,7,89,10].map(item=>(
                  <div key={item} style={{width:"100%"}}>
                  <Grid
                  className={classes.item}
                  item
                  style={{
                    padding: "10px 20px 20px 20px",
                    color: "#000",
                  }}
                  container
                  md={12}
                  sm={12}
                  xs={12}
                  justify="space-between"
                  alignItems="center"
                >
                  <div key={item} style={{
                    padding:"30px 20px"
                  }}>
                    <Skeleton width="120px"/>
                    <Skeleton width="220px" animation="wave"/>
                    <Skeleton width="320px" animation="wave"/>
  
                  </div>
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
                <Divider />
              </Grid>
              </div>
                ))
                :
                leads.length <= 0 ?
                <Grid className={classes.item}
                style={{
                  padding:"20px 20px 200px 20px"
                }}
                item>
                  <p>Nothing found</p>
                </Grid>
                :
                leads.map((pop,index)=>(
                    <div                 
                    key={index}
                    >        
            <Grid
                className={classes.item}
                item
                style={{
                  padding: "10px 20px 20px 20px",
                  color: "#000",
                }}
                container
                md={12}
                sm={12}
                xs={12}
                justify="space-between"
                alignItems="center"
              >
                <Typography
                  style={{
                    color: "#1D4354",
                    fontSize: "16px",
                    fontFamily: "Roboto",
                  }}
                >
                <Link to={{
                  pathname:'/dashboard/detail/~'+pop.id+'/'+slug(pop.title),
                  propsModal:{
                    page:currentPage
                  }                
                }}
                    style={{
                      textDecoration:"none",
                      color:"#000"
                    }}
                  >
                  <b>{pop.title}</b>
                  </Link>
                </Typography>
                <div>
                  <IconButton style={{background:"#f9f1f1",marginRight:"10px"}}>
                    <ThumbDownAltOutlined size="small"/>
                  </IconButton>
                  <IconButton  style={{background:"#f9f1f1"}}>
                    <FavoriteBorder size="small"/>
                  </IconButton>
                </div>
                <Link to={'/news/'+pop.id+'/'+slug(pop.title)}
                    style={{
                      textDecoration:"none",
                      color:"#000"
                    }}
                  >
                <Grid item md={12} sm={12} xs={12}>
                  <b>Fiexd price</b> - intermediate - Est. Budget: <b>200$</b> - Posted 7 days
                  ago
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                  <p>
                    {pop.body}
                    {/* We are looking for a MySQL expert to help us with resolving
                    a performance issue we are having. */}
                  </p>
                  {/* <p>
                    We have a large MySQL database that has 100 million unique
                    records in it, across multiple tables, all indexed. When we
                    try to add more records into it, it is slow, therefore we
                    were suggested to drop the index, add then re-add the index.
                    However, the process of re-indexing is slow and stops the
                    database from been usable for some time until it has been
                    reindexed.
                  </p>
                  <p>
                    When using a small database this issue does not exist - we
                    assume as adding the index is quick.
                  </p>
                  <p>
                    We are looking for an expert than can help us resolve the
                    issue so we can easily continue adding more records without
                    the issues mentioned above.
                  </p>
                  <p>
                    We will provide access to a remote machine with the 100m
                    database on and a file to import.
                  </p>
                  <p>
                    We need a developer asap on Monday, any questions please
                    ask! Thanks
                  </p>
                  <p>
                    We would also be interested in working together to continue
                    to add performance and optimisation enhancements as further
                    work.
                  </p> */}
                </Grid>
                <Grid item md={12} sm={12} xs={12} className={classes.type}>
                  <span className={classes.typeText}>Database Design</span>
                  <span className={classes.typeText}>
                    Database Optimization
                  </span>
                  <span className={classes.typeText}>SQL</span>
                  <span className={classes.typeText}>React</span>
                </Grid>
                <Grid
                  item
                  md={12}
                  sm={12}
                  style={{
                    margin: "10px 0",
                  }}
                >
                  <span style={{
                    marginLeft:"5px"
                  }}>
                    Proposals: <b>5 to 10</b>
                  </span>
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                  <div
                    variant="subtitle2"
                    className={classes.type}
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                    <CheckCircle
                      style={{
                        color: "#c5c5d6",
                        height:"18px"
                      }}
                    />
                    <span>
                      <b>Payment verified</b>
                    </span>
                    </div>
                    <Rating
                      size="small"
                      color="#37a000"
                      name="half-rating-read"
                      value={4.5}
                      precision={0.5}
                      readOnly
                    />
                    <span>
                    <b>$1k+</b> spent
                    </span>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                    <Room 
                             style={{
                              height:"20px"
                            }}
                    />
                    <span><b>Pakistan</b></span>
                    </div>
                  </div>
                </Grid>
                </Link>
              </Grid>
                <Grid item md={12} sm={12} xs={12}>
                <Divider />
              </Grid>
              </div>
                ))}
            </Grid>
            {
              loading ? "" :
              leads.length <= 0 ? "" :
            <div
            style={{
              display:"flex",
              justifyContent:"flex-end"
            }}
            >
            <Button 
            style={{
              backgroundColor:"#37a000",
              margin:"10px",
              color:"#fff",
              width:"40%",
            }}
            onClick={loadItem}>
        Load More
      </Button>
      </div>
      }
          </Card>
        </Grid>
        <Grid
          item
          md={3}
          container
          direction="column"
          className={classes.profile}
        >
          <div
            style={{
              marginBottom: "75px",
            }}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="./avatar.png"
              height="40px"
              alt="person"
              style={{
                borderRadius: "40px",
                padding: "5px",
                backgroundColor: "#fff",
                marginRight: "7px",
              }}
            />
            <Typography variant="h6">My Profile</Typography>
          </div>
          <Typography variant="subtitle2">Visibility</Typography>
          <div className={classes.visibility}>
            <Language fontSize="small" />
            <span>Public</span>
            <Create
              style={{
                color: "#37a000",
              }}
              fontSize="small"
            />
          </div>
          <Typography variant="subtitle2">Availability</Typography>
          <div className={classes.visibility}>
            <Schedule fontSize="small" />
            <span
              style={{
                width: "50%",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              More than 30 hrs/week
              <Create
                style={{
                  marginLeft: "15px",
                  color: "#37a000",
                }}
                fontSize="small"
              />
            </span>
          </div>
          <div
            className={classes.visibility}
            style={{
              color: "#37a000",
            }}
          >
            <Visibility fontSize="small" />
            <span style={{ fontWeight: "700" }}>View Profile</span>
          </div>
          <Typography variant="subtitle2">Proposals</Typography>
          <Typography
            variant="subtitle2"
            style={{
              fontWeight: "700",
              color: "#37a000",
            }}
          >
            60 available connects
          </Typography>
          <div
            className={classes.visibility}
            style={{
              color: "#37a000",
            }}
          >
            <Timer fontSize="small" />
            <Typography
              variant="subtitle2"
              style={{
                width: "50%",
                fontWeight: "700",
              }}
            >
              Track time with the desktop app
            </Typography>
          </div>
        </Grid>
      </Grid>
      {/* <JobDetail modalOpen={true} handleClose={closeModal} item={item}/> */}
      </div>
  );
};

const mapStateToProps = (state) => ({
  auth:state.auth.user,
  data: state.leads.leads,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getLeads: (token) => dispatch(getLeads(token)),
    logout:() => dispatch(uLogout),
    fresh:(token) => dispatch(tokenFresh(token)),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
