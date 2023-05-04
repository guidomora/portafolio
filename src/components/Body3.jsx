import { Grid, Typography } from "@mui/material";
import React from "react";
import Projects from "./Proyectos/Projects";
import { useSelector } from "react-redux";

const Body3 = () => {
  const { esp } = useSelector(state => state.lang)

  return (
    <Grid marginTop={4} marginBottom={6}>
      <Grid marginBottom={4}>
        <Typography
        marginTop={4}
          variant="h4"
          sx={{
            fontFamily: "Varela Round",
            color: "black",
            display: "flex",
            justifyContent: "center",
            fontSize: {xs:20, sm: 25, md: 30},
          }}
        >
          {(esp == true) ?
          "Mis proyectos" : "My projects"}
        </Typography>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: 0,
        }}
      >
        <Projects />
      </Grid>
    </Grid>
  );
};

export default Body3;
