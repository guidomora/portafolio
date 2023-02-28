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
              fontSize: {xs:17, sm: 20, md: 25},
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
              fontSize: {xs:14, sm: 17, md: 20},
              textAlign: "center",
              marginTop:{xs:1, md: 2},
              marginLeft:{xs:5, sm: 8, md: 10},
              marginRight:{xs:5, sm: 8, md: 10}
            }}
          >
            Soy web developer en camino a dominar el MERN stack. Estudiante de
            desarrollo de software en UADE y siempre aprendiendo cosas nuevas, a
            través de cursos online o como autodidacta. Me apasiona el mundo de
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
