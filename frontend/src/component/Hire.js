import { Grid, Typography, useTheme, useMediaQuery } from "@material-ui/core";
import React from "react";

export default function Hire() {
  const theme = useTheme();
  const mdMatch = useMediaQuery(theme.breakpoints.down("md"));
  const xsMatch = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <>
      <div
        style={{
          padding:xsMatch ? "20px 0":"30px 30px",
          backgroundColor: theme.palette.secondary,
        }}
      >
        <Grid container alignItems="center">
          <Grid
            item
            md={3}
            sm={12}
            xs={12}
            style={{
              textAlign: "center",
            }}
          >
            <Typography
              variant="subtitle2"
              style={{
                paddingBottom: mdMatch ? "20px" : "0",
                fontSize:"18px",
                fontWeight: "500",
              }}
            >
              Hire for any scope
            </Typography>
          </Grid>
          <Grid
            item
            container
            md={9}
            sm={12}
            justify="space-around"
            style={{
              backgroundColor: "#fff",
              padding: xsMatch ? "40px 20px" : "80px 20px",
            }}
          >
            <Grid item md={4} sm={4} xs={12}>
              <div style={{ margin: "0 10px" }}>
                <div
                  style={{
                    height: "7px",
                    width: "31px",
                    backgroundColor: "#6FDA44",
                  }}
                ></div>
                <Typography
                  variant="subtitle2"
                  style={{ margin: xsMatch ? "2.5px 0" : "10px 0", fontWeight:"700"}}
                >
                  Hire for any scope
                </Typography>
                <Typography variant="body2">
                  Find specialized experts and agencies for large projects.
                </Typography>
              </div>
            </Grid>
            <Grid
              item
              md={4}
              sm={4}
              xs={12}
              style={{
                borderLeft: xsMatch ? "none" : "1px solid #e0e0e0",
                borderRight: xsMatch ? "none" : "1px solid #e0e0e0",
                margin: xsMatch ? "10px 0" : "0",
              }}
            >
              <div style={{ 
                  margin: xsMatch ? "20px 10px" : "0 10px", 
                  borderTop: xsMatch ? "1px solid #e0e0e0" : "none",
                  borderBottom: xsMatch ? "1px solid #e0e0e0" : "none",
                  
                  }}>
                <div
                  style={{
                    height: "7px",
                    width: "31px",
                    backgroundColor: "#6FDA44",
                    margin: xsMatch ? "20px 0 0 0" : "0", 
                  }}
                ></div>
                <Typography
                  variant="subtitle2"
                  style={{ margin: xsMatch ? "2.5px 0" : "10px 0", fontWeight:"700" }}
                >
                  Longer-term contract
                </Typography>
                <Typography variant="body2"
                style={{
                    margin: xsMatch ? "0 0 20px 0" : "0", 

                }}
                >
                  Expand your team with a skilled resource.
                </Typography>
              </div>
            </Grid>
            <Grid item md={4} sm={4} xs={12}>
              <div style={{ margin: "0 10px" }}>
                <div
                  style={{
                    height: "7px",
                    width: "31px",
                    backgroundColor: "#6FDA44",
                  }}
                ></div>
                <Typography
                  variant="subtitle2"
                  style={{ margin: xsMatch ? "2.5px 0" : "10px 0", fontWeight:"700" }}
                >
                  Short term
                </Typography>
                <Typography variant="body2">
                  Build a pool of diverse experts for one-off tasks.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
