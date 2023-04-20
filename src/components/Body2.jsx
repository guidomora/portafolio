import { Grid, Typography } from "@mui/material";
import React from "react";
import CarouselComp from "./Carousel/CarouselComp";

const Body2 = () => {
  return (
    <Grid sx={{ marginTop: "50px" }} id="grid">
      <Grid
        sx={{
          backgroundColor: "primary.main",
          height: "300px",
        }}
      >
        <Grid paddingTop={6}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Varela Round",
              color: "secondary.main",
              display: "flex",
              justifyContent: "center",
              fontSize: {xs:21, sm: 27, md: 38},
            }}
          >
            Hola mi nombre es Guido!
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Varela Round",
              color: "secondary.main",
              display: "flex",
              justifyContent: "center",
              fontSize: {xs:16, sm: 19, md: 24},
              textAlign: "center",
              marginTop:{xs:1, md: 2},
              marginLeft:{xs:5, sm: 8, md: 10},
              marginRight:{xs:5, sm: 8, md: 10}
            }}
          >
            Soy front-end developer, en camino a dominar el MERN stack actualmente. Estudiante de
            desarrollo de software en UADE y siempre adquiriendo nuevos conocimientos, a
            través de cursos online o como autodidacta. Me encanta el mundo de
            la programacion y de poder crear soluciones a problemas.
          </Typography>
        </Grid>
      </Grid>
      <Grid mt={5} mb={6}>
        <CarouselComp />
      </Grid>
    </Grid>
  );
};

export default Body2;
