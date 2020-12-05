import React from 'react'
import {
    Button,
    Collapse,
    Grid,
    Hidden,
    Paper,
    Typography,
  } from "@material-ui/core";
  import { Check, KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";
export default function SinglePlan(props) {

    const {item,handleOpenPlan,open,classes} = props
    return (
        <>
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
              <Hidden smUp implementation="js">
                <Collapse
                  in={open}
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
                  onClick={handleOpenPlan}
                  variant="contained"
                  disableRipple
                  style={{
                    backgroundColor: "#fff",
                    color: "#6DAF44",
                    textTransform: "capitalize",
                    padding: "5px, 0",
                  }}
                >
                  {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                  {open ? "Hide features" : "See features"}
                </Button>
              </Hidden>
            </Paper>
          </Grid>  
        </>
    )
}
