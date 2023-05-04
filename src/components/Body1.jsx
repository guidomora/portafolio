import { Grid, Typography } from "@mui/material";
import React from "react";
import desarrollo2 from "../assets/desarrollo2.png"
import "../App.css"



const Body1 = () => {
  return (
    <Grid className="animate__animated animate__fadeIn">
      <Grid>
        <Typography
          variant="h1"
          sx={{
            fontFamily: "Varela Round",
            textAlign: "center",
            fontSize:{xs:35, sm: 40, md: 50, lg: 70},
          }}
        >
          Front end
        </Typography>
      </Grid>
      <Grid  sx={{
        display: "flex",
        justifyContent:"center",
        marginTop:6,
      }}>
        <img src= {desarrollo2} alt={"imagen ilustrativa"} className="imagenBody1"/>
      </Grid>
    </Grid>
  );
};

export default Body1;
