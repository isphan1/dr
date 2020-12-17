import React from "react";
import {
  Divider,
  Grid,
  IconButton,
  Typography,
  Button,
  makeStyles,
  Dialog,
  TextField,
  Snackbar
} from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';
import slug from 'slugify'
import {
  CheckCircle,
  LocalOffer,
  VolumeUp,
  FavoriteBorderOutlined,
  Flag,
  Help,
  KeyboardArrowLeft,
  LaunchOutlined,
  PinDrop,
  AttachMoney,
} from "@material-ui/icons";
import Backdrop from "@material-ui/core/Backdrop";
import Rating from "@material-ui/lab/Rating";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  side: {
    "& > *": {
      marginBottom: "20px",
    },
  },
  sideItem: {
    "& > *": {
      marginBottom: "7.5px",
    },
  },
  textInput: {
    "& .MuiInputBase-input": {
      color: "#000",
    },
  },
  typeText: {
    padding: "2.5px 7.5px",
    borderRadius: "20px",
    backgroundColor: "#f9f3f3",
    fontWeight: "500",
    fontSize: "13px",
  },
  tab: {
    "& > *": {
      margin: "0 10px 10px 0 ",
    },
  },
}));

const CustomModal = (props) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(true);

  const {page} = props.history.location.propsModal !== undefined ? props.history.location.propsModal : 1

  const handleClick = () => {
    setOpen(true);
  };

  const snackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const item = props.lead

  const handleClose = () => {
    setModalOpen(false)
    props.history.push({
      pathname:"/dashboard",
      modalProps:{
        page: page
      }
    });
  };

  return (
    <div>
      <Dialog
        fullScreen
        style={{
          marginLeft: "15%",
        }}
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        transitionDuration={5}
      >
    <Snackbar open={open} autoHideDuration={6000} onClose={snackbarClose}
        anchorOrigin={{"vertical":"top","horizontal":"center"}}
    >
        <MuiAlert onClose={snackbarClose} severity="success" elevation={6} variant="filled">
          Job link copied to clipboard
        </MuiAlert>
      </Snackbar>
        <div
          style={{
            background: "#f1f2f4",
            border: "none",
            borderRadius: "none",
            outline: "none",
          }}
        >
          {item !== undefined ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  color: "#37a000",
                  alignItems: "center",
                  padding: "10px 150px 10px 20px",
                  background: "#fff",
                  borderBottom: "1px solid #e0e0e0",
                }}
              >
                <IconButton onClick={handleClose} size="small">
                  <KeyboardArrowLeft
                    style={{
                      fontSize: "50px",
                      color: "#37a000",
                      padding: "0",
                    }}
                  />
                </IconButton>
                <Link
                  style={{
                    marginLeft: "auto",
                    textDecoration:"none"
                  }}
                    to={{
                      pathname:'/job/detail/~'+item.id+'/'+slug(item.title),
                      modalProps:{
                        item:item,
                      }
                    }}
                    >
                <Typography
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontWeight: "700",
                        marginLeft: "auto",
                        color:"#37a000"
                      }}
                >
                  <LaunchOutlined
                    style={{
                      marginRight: "10px",
                    }}
                  />
                  open job in a new window
                </Typography>
                </Link>
              </div>
              <div
                style={{
                  display: "flex",
                  margin: "10px 150px 20px 20px",
                  background: "#fff",
                }}
              >
                <Grid container>
                  <Grid
                    item
                    md={8}
                    container
                    direction="column"
                    style={{
                      border: "1px solid #e0e0e0",
                    }}
                  >
                    <Typography
                      style={{
                        padding: "20px",
                        fontWeight: "700",
                        fontSize: "24px",
                        color: "#000",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Divider />
                    <div
                      style={{
                        padding: "20px",
                      }}
                    >
                      <Typography
                        style={{
                          fontWeight: "700",
                          fontSize: "14px",
                          color: "#37a000",
                        }}
                      >
                        Database Administration
                      </Typography>
                      <Typography
                        style={{
                          fontWeight: "300",
                          fontSize: "14px",
                        }}
                      >
                        Posted 14 days ago
                      </Typography>

                      <div
                        style={{
                          margin: "10px 0",
                          display: "flex",
                        }}
                      >
                        <VolumeUp
                          size="small"
                          style={{ marginRight: "10px" }}
                        />
                        <Typography style={{ fontSize: "14px" }}>
                          Specialized profiles can help you better highlight
                          your expertise when submitting proposals to jobs like
                          these.
                          <span style={{ color: "#37a000" }}>
                            Create a specialized profile.
                          </span>
                        </Typography>
                      </div>
                      <div
                        style={{
                          marginBottom: "20px",
                          display: "flex",
                        }}
                      >
                        <PinDrop
                          size="small"
                          style={{
                            marginRight: "10px",
                            fontSize: "18px",
                            color: "#ab91c3",
                          }}
                        />
                        <Typography
                          style={{ fontSize: "14px", color: "#1D4354" }}
                        >
                          Worldwide
                        </Typography>
                      </div>
                      <Divider />
                      <Typography
                        style={{
                          padding: "20px 0",
                          fontSize: "14px",
                        }}
                      >
                        {item.body}
                      </Typography>
                      <Divider />

                      <div
                        style={{
                          padding: "20px 0",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              marginRight: "auto",
                            }}
                          >
                            <LocalOffer
                              size="small"
                              style={{ marginRight: "10px", fontSize: "13px" }}
                            />
                            <div
                              style={{
                                fontSize: "14px",
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <span
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  fontSize: "13.5px",
                                }}
                              >
                                <AttachMoney
                                  size="small"
                                  style={{ fontSize: "15px" }}
                                />
                                <b style={{ marginLeft: "-3px" }}>80</b>
                              </span>
                              <span>Fixed-price</span>
                            </div>
                          </div>
                          <div
                            style={{
                              display: "flex",
                            }}
                          >
                            <div style={{ marginRight: "10px" }}>
                              <AttachMoney
                                size="small"
                                style={{ fontSize: "14px" }}
                              />
                              <AttachMoney
                                size="small"
                                style={{ fontSize: "14px", marginLeft: "-7px" }}
                              />
                            </div>
                            <Typography
                              style={{
                                fontSize: "14px",
                                display: "flex",
                                flexDirection: "column",
                                width: "50%",
                              }}
                            >
                              <span>
                                <b>Intermediate level</b>
                              </span>
                              <span>
                                I am looking for a mix of experience and value
                              </span>
                            </Typography>
                          </div>
                        </div>
                      </div>
                      <Divider />
                      <Typography
                        style={{
                          padding: "20px 0",
                          fontSize: "14px",
                        }}
                      >
                        <b>Project Type:</b> One-time project
                      </Typography>
                      <Divider />
                      <div
                        style={{
                          padding: "20px 0",
                        }}
                      >
                        <Typography
                          style={{ fontWeight: "700", fontSize: "17px" }}
                        >
                          Skills and expertise
                        </Typography>
                      </div>
                      <Grid container>
                        <Grid item md={6} sm={6} container direction="column">
                          <Grid
                            item
                            style={{ paddingBottom: "20px" }}
                            className={classes.sideItem}
                          >
                            <Typography
                              style={{ fontWeight: "700", fontSize: "14px" }}
                            >
                              Database Administration Deliverables
                            </Typography>

                            <span className={classes.typeText}>
                              Database Design
                            </span>
                          </Grid>
                          <Grid
                            item
                            container
                            direction="column"
                            className={classes.sideItem}
                          >
                            <Typography
                              style={{ fontWeight: "700", fontSize: "14px" }}
                            >
                              Business Size Experience
                            </Typography>
                            <Grid container className={classes.tab}>
                              <Grid className={classes.typeText}>
                                Very Small (1-9 employees)
                              </Grid>
                              <Grid className={classes.typeText}>
                                Small (10-99 employees)
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item md={6} sm={6} container direction="column">
                          <Grid
                            item
                            style={{ paddingBottom: "20px" }}
                            className={classes.sideItem}
                          >
                            <Typography
                              style={{ fontWeight: "700", fontSize: "14px" }}
                            >
                              Database Administration Skills
                            </Typography>
                            <Grid container className={classes.tab}>
                              <Grid className={classes.typeText}>SQL</Grid>
                              <Grid className={classes.typeText}>
                                SQL Server Integration Services (SSIS)
                              </Grid>
                            </Grid>{" "}
                          </Grid>
                          <Grid
                            item
                            container
                            direction="column"
                            className={classes.sideItem}
                          >
                            <Typography
                              style={{ fontWeight: "700", fontSize: "12px" }}
                            >
                              Other
                            </Typography>
                            <Grid container className={classes.tab}>
                              <Grid className={classes.typeText}>
                                MsSQL Programming
                              </Grid>
                              <Grid className={classes.typeText}>SQL</Grid>
                              <Grid className={classes.typeText}>
                                Database Programming
                              </Grid>
                              <Grid className={classes.typeText}>
                                Data Modeling
                              </Grid>

                              <Grid className={classes.typeText}>
                                Microsoft SQL Server Programming
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                  <Grid
                    item
                    md={4}
                    container
                    direction="column"
                    style={{
                      backgroundColor: "#c2fbfb",
                    }}
                  >
                    <div
                      className={classes.side}
                      style={{
                        border: "1px solid #e0e0e0",
                        borderLeft: "none",
                        padding: "20px 50px 10px 50px",
                      }}
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        style={{
                          textTransform: "none",
                          fontWeight: "700",
                          width: "100%",
                        }}
                      >
                        Submit a Proposal
                      </Button>
                      <Button
                        variant="outlined"
                        style={{
                          textTransform: "none",
                          fontWeight: "700",
                          color: "#37a000",
                          width: "100%",
                          backgroundColor: "#fff",
                        }}
                      >
                        <FavoriteBorderOutlined
                          style={{
                            marginRight: "10px",
                            fontSize: "20px",
                          }}
                        />
                        Save Job
                      </Button>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          color: "#37a000",
                        }}
                      >
                        <Flag size="small" style={{ marginRight: "10px" }} />
                        Flag as inappropriate
                      </div>

                      <div
                        style={{
                          fontSize: "15px",
                        }}
                      >
                        Required Connects to submit a proposal: 6
                        <Help
                          size="small"
                          style={{
                            color: "#37a000",
                            marginLeft: "10px",
                            fontSize: "15px",
                          }}
                        />
                      </div>
                      <p style={{ margin: "-10px 0 5px 0" }}>
                        Available Connects: 60
                      </p>
                    </div>
                    <div
                      className={classes.side}
                      style={{
                        border: "1px solid #e0e0e0",
                        borderLeft: "none",
                        borderTop: "none",
                        padding: "10px 50px",
                      }}
                    >
                      <Typography
                        style={{ fontSize: "14px", fontWeight: "500" }}
                      >
                        About the client
                      </Typography>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          fontWeight: "500",
                        }}
                      >
                        <CheckCircle
                          size="small"
                          style={{
                            fontSize: "18px",
                            marginRight: "10px",
                            color: "#37a000",
                          }}
                        />
                        Payment method verified
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Rating
                          size="small"
                          color="#37a000"
                          name="half-rating-read"
                          value={4.5}
                          precision={0.5}
                          readOnly
                          style={{ marginRight: "10px" }}
                        />
                        4.71 of 15 reviews
                      </div>
                      <div
                        style={{
                          fontFamily: "Railway",
                        }}
                      >
                        <Typography
                          style={{ fontSize: "14px", fontWeight: "700" }}
                        >
                          United States
                        </Typography>
                        <Typography style={{ fontSize: "14px" }}>
                          Davenport 07:45 pm
                        </Typography>
                      </div>
                      <div
                        style={{
                          fontFamily: "Railway",
                        }}
                      >
                        <Typography
                          style={{ fontSize: "14px", fontWeight: "700" }}
                        >
                          77 jobs posted
                        </Typography>
                        <Typography style={{ fontSize: "14px" }}>
                          46% hire rate, 3 open jobs
                        </Typography>
                      </div>
                      <div
                        style={{
                          fontFamily: "Railway",
                        }}
                      >
                        <Typography
                          style={{ fontSize: "14px", fontWeight: "700" }}
                        >
                          $10k+ total spent
                        </Typography>
                        <Typography style={{ fontSize: "14px" }}>
                          40 hires, 10 active
                        </Typography>
                      </div>
                      <div
                        style={{
                          fontFamily: "Railway",
                        }}
                      >
                        <Typography
                          style={{ fontSize: "14px", fontWeight: "700" }}
                        >
                          $15.04/hr avg hourly rate paid
                        </Typography>
                        <Typography style={{ fontSize: "14px" }}>
                          824 hours
                        </Typography>
                      </div>
                      <Typography style={{ fontSize: "14px" }}>
                        Member since Oct 8, 2014
                      </Typography>
                    </div>
                    <div
                      className={classes.side}
                      style={{
                        border: "1px solid #e0e0e0",
                        borderLeft: "none",
                        borderTop: "none",
                        padding: "10px 50px",
                      }}
                    >
                      <Typography
                        style={{ fontSize: "14px", fontWeight: "700" }}
                      >
                        Job Link
                      </Typography>
                      <TextField
                        size="small"
                        className={classes.textInput}
                        placeholder="https://upwork.com"
                        variant="outlined"
                        disabled
                      />

                      <Typography
                        onClick={handleClick}
                        style={{ fontSize: "14px", color: "#37a000",cursor:"pointer" }}
                      >
                        Copy Link
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          ) : (
            <div
              style={{
                backgroundColor: "#fff",
                position: "absolute",
                top: "30%",
                left: "30%",
              }}
            >
              <h1>Something went wrong</h1>
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <Button
                  onClick={() => handleClose()}
                  style={{
                    textTransform: "none",
                  }}
                  color="primary"
                  variant="contained"
                >
                  Go Back
                </Button>
              </div>
            </div>
          )}
        </div>
      </Dialog>
    </div>
  );
}

const mapStateToProps = (state,ownProps) =>{

  // console.log(ownProps.history.goBack())

  let id = ownProps.match.params.post_id;
  
  return {
      lead : state.leads.leads.find(item => item.id === parseInt(id))
  }
}

export default connect(mapStateToProps)(CustomModal)