import { Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Grid sx={{ backgroundColor: "#141c3a", height: 100 }}>
      <Typography
        paddingTop={7}
        textAlign={"center"}
        color={"secondary.main"}
        sx={{ fontWeight: 500, fontFamily: "Varela Round" }}
      >
        Desarrollado desde 0 por mi
      </Typography>
    </Grid>
  );
};

export default Footer;
