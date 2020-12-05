import {
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import SinglePlan from "./SinglePlan";

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


//   const theme = useTheme();
//   const smMatch = useMediaQuery(theme.breakpoints.down("sm"));
//   const xsMatch = useMediaQuery(theme.breakpoints.down("xs"));

  const handleOpenPlan1 = () => {
     setOpen1(!open1)
  };

  const handleOpenPlan2 = () => {
    setOpen2(!open2)
 };
 const handleOpenPlan3 = () => {
    setOpen3(!open3)
 };

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
            <SinglePlan item={plan[0]} handleOpenPlan={handleOpenPlan1} classes={classes} open={open1}/>
            <SinglePlan item={plan[1]} handleOpenPlan={handleOpenPlan2} classes={classes} open={open2}/>
            <SinglePlan item={plan[2]} handleOpenPlan={handleOpenPlan3} classes={classes} open={open3}/>
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
