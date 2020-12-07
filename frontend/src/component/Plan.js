import {
  Button,
  Collapse,
  Grid,
  Hidden,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { Check, KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";
import React from "react";
// import SinglePlan from "./SinglePlan";

const plan = [
  {
    type: "Basic",
    button: "Select Basic",
    price: "Free*",
    info: "",
    plans: [
      "Verified work history and reviews",
      "Unlimited proposals",
      "Built-in collaboration tools and easy payments",
    ],
    more: "",
  },
  {
    type: "Plus",
    button: "Select Plus",
    price: "$49.99/month*",
    info: "Everything in Basic, and:",
    plans: [
      "Dedicated account managers to help you find and hire quality talent fast",
      "Project tracking and collaboration tools for teams",
      "Tailored search results featuring Top Rated and Rising Talent",
    ],
    more: "Learn more",
  },
  {
    type: "Enterprise",
    button: "Contact Us",
    price: "Price varies - contact us for a demo",
    info: "Everything in Plus, and:",
    full: true,
    plans: [
      "Custom configurable contracting and onboarding process",
      "Worker classification compliance services",
      "Project-based or managed solutions, and dedicated account executive",
    ],
    more: "Learn more",
  },
];

const useStyles = makeStyles((theme) => ({
  plans: {
    display: "flex",
    flexDirection: "column",
    padding: "40px 250px",
    [theme.breakpoints.down("md")]: {
      padding: "40px 100px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "40px 50px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "40px 0",
    },
    backgroundColor: "#f7f0f0",
  },
  paper: {
    padding: "8px 0 28px 0",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    // alignItems:"center",
    minHeight: "440px",
    [theme.breakpoints.down("xs")]: {
      minHeight: "50px",
      padding: "0",
    },
  },
  planText: {
    fontWeight: "100",
    fontSize: "14px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "13px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
    },
  },
  planHeader: {
    fontSize: "36px",
    textAlign: "center",
    fontWeight: "700",
    [theme.breakpoints.down("sm")]: {
      fontSize: "26px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "24px",
    },
  },
  planSubHeader: {
    fontSize: "15px",
    padding: "15px 0 25px 0",
    textAlign: "center",
    fontWeight: "100",
    [theme.breakpoints.down("sm")]: {
      fontSize: "13px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
    },
  },
  divider: {
    height: "1px",
    width: "100%",
    background: "#e0e0e0",
    margin: "0 0 20px 0",
    [theme.breakpoints.down("xs")]: {
      margin: "0",
    },
  },
}));

export default function Plan() {
  const classes = useStyles();

  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(true);
  const [open3, setOpen3] = React.useState(false);

  const val =[open1,open2,open3]
  const fn = [setOpen1,setOpen2,setOpen3]

//   const theme = useTheme();
//   const smMatch = useMediaQuery(theme.breakpoints.down("sm"));
//   const xsMatch = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <div className={classes.plans}>
      <Typography className={classes.planHeader}>
        Choose the offering that works best for you
      </Typography>
      <Typography className={classes.planSubHeader}>
        All options include access to Upwork’s talent pool of quality talent and
        agencies.
      </Typography>
        <Grid container>


        {
          plan.map((item,index)=>(
            <Grid
            style={{
              padding: "8px",
            }}
            key={item + " " + Math.random()}
            item
            md={4}
            sm={item.full ? 12 : 6}
            xs={12}
            // container
            // direction="column"
            // alignItems="center"
          >
            <Paper className={classes.paper}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  style={{
                    margin: "20px 0 0 0",
                  }}
                >
                  {item.type}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    margin: "20px 0",
                    textTransform: "capitalize",
                  }}
                >
                  {item.button}
                </Button>
                <Typography
                  style={{
                    margin: "0 0 20px 0",
                    fontSize: "12px",
                  }}
                >
                  {item.price}
                </Typography>
                <div className={classes.divider} />
              </div>
              <Hidden xsDown>
              <Typography className={classes.planText}
                    style={{
                        textAlign:"center",
                        marginBottom: "10px",
                        fontWeight:"500"
                    }}
                >
                    {item.info}
                    </Typography>
                {item.plans.map((plan) => (
                  <div
                    key={plan + " " + Math.random()}
                    style={{
                      display: "flex",
                      // alignItems:"center",
                      padding: "0 20px",
                    }}
                  >
                    <Check
                      fontSize="small"
                      color="primary"
                      style={{ marginRight: "10px" }}
                    />
                    <Typography className={classes.planText}>{plan}</Typography>
                  </div>
                ))}
                <p
                  style={{
                    // position:"absolute",
                    margin: "10px 0 0 48px",
                    // left:"48px",
                    // bottom:"5px",
                    fontSize: "13px",
                    fontWeight: "700",
                    color: "#6DAF66",
                    cursor: "pointer",
                  }}
                >
                  {item.more}
                </p>
              </Hidden>
              <Hidden smUp>
                <Collapse
                  in={val[index]}
                  timeout="auto"
                  unmountOnExit
                  style={{
                    backgroundColor: "#f7f0f0",
                    padding: "15px 0 10px 0",
                  }}
                >
                <Typography className={classes.planText}
                    style={{
                        textAlign:"center",
                        marginBottom: "10px",
                        fontWeight:"500"
                    }}
                >
                    {item.info}
                    </Typography>
                  {item.plans.map((plan, index) => (
                    <div
                      key={plan + " " + Math.random()}
                      style={{
                        display: "flex",
                        // alignItems:"center",
                        padding: "0 20px",
                        marginBottom: "10px",
                      }}
                    >
                      <Check
                        fontSize="small"
                        color="primary"
                        style={{ marginRight: "10px" }}
                      />
                      <Typography className={classes.planText}>
                        {plan}
                      </Typography>
                    </div>
                  ))}
                  <p
                    style={{
                      // position:"absolute",
                      margin: "10px 0 0 48px",
                      // left:"48px",
                      // bottom:"5px",
                      fontSize: "13px",
                      fontWeight: "700",
                      color: "#6DAF66",
                      cursor: "pointer",
                    }}
                  >
                    {item.more}
                  </p>
                </Collapse>
              </Hidden>
              <Hidden smUp>
                <Button
                  onClick={()=>fn[index](!val[index])}
                  variant="contained"
                  disableRipple
                  style={{
                    backgroundColor: "#fff",
                    color: "#6DAF44",
                    textTransform: "capitalize",
                    padding: "5px, 0",
                  }}
                >
                  {val[index] ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                  {val[index] ? "Hide features" : "See features"}
                </Button>
              </Hidden>
            </Paper>
          </Grid>  
          ))
        }
        </Grid>
      <Typography
            style={{
            fontWeight: "100",
            fontSize: "13px",
            marginTop: "20px",
            padding: "0 15px",
            }}
      >
        *3% payment processing and administration fee on all payments to
        freelancers and agencies.
      </Typography>
    </div>
  );
}
