import { Grid, Typography } from "@mui/material";
import React from "react";
import Projects from "./Proyectos/Projects";
import { useSelector } from "react-redux";

const Body3 = () => {
  const { esp } = useSelector(state => state.lang)

  return (
    <Grid marginTop={4} marginBottom={6} id={'projects'}>
      <Grid marginBottom={4}>
        <Typography
        marginTop={4}
          variant="h4"
          sx={{
            background: "linear-gradient(180deg,#fff 0%,rgba(255,255,255,.7) 100%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 600,
            display: "flex",
            justifyContent: "center",
            fontSize: {xs:25, sm: 30, md: 50},
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
