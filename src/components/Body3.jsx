import { Grid, Typography } from "@mui/material";
import React from "react";
import Buscador from "./Proyectos/Buscador";
import Floreria from "./Proyectos/Floreria";
import HeroesApp from "./Proyectos/HeroesApp";
import List from "./Proyectos/List";
import Peluqueria from "./Proyectos/Peluqueria";

const Body3 = () => {
  return (
    <Grid marginTop={4} marginBottom={6}>
      <Grid marginBottom={4}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Varela Round",
            color: "black",
            display: "flex",
            justifyContent: "center",
            fontSize: {xs:20, sm: 25, md: 30},
          }}
        >
          Mis proyectos
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
        <HeroesApp />
        <Floreria />
        <Peluqueria />
        <Buscador />
        <List />
      </Grid>
    </Grid>
  );
};

export default Body3;
