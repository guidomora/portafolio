import { Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const { esp } = useSelector(state => state.lang)

  return (
    <Grid sx={{ backgroundColor: "primary.main", height: 100, borderTop:"solid 1px rgba(137, 82, 253, 0.3)",
    boxShadow: "0px 0px 55px 0px rgba(137, 82, 253, 0.75)" }}>
      <Typography
        paddingTop={7}
        textAlign={"center"}
        color={"primary.third"}
        sx={{ fontWeight: 500, fontFamily: "Varela Round" }}
      >
        {(esp == true) ?
          "Desarrollado desde 0 by Guido" : "Developed from scratch by me"}
      </Typography>
    </Grid>
  );
};

export default Footer;
