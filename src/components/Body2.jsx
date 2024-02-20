import { Grid, Typography } from "@mui/material";
import React from "react";
import CarouselComp from "./Carousel/CarouselComp";
import { useSelector } from "react-redux";

const Body2 = () => {
  const { esp } = useSelector(state => state.lang)

  return (
    <Grid id="grid" className="animate__animated animate__fadeIn" sx={{backgroundColor:"primary.main"}}>
      <Grid
        sx={{
          backgroundColor: "primary.main",
          height: { xs: 250, sm: 250 }
        }}
      >
        <Grid paddingTop={6}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Varela Round",
              color: "primary.third",
              display: "flex",
              justifyContent: "center",
              fontSize: { xs: 21, sm: 27, md: 38 },
            }}
          >
          </Typography>
          {(esp == true) ?
            (<Typography
              variant="h3"
              sx={{
                fontFamily: "Varela Round",
                color: "primary.third",
                display: "flex",
                justifyContent: "center",
                fontSize: { xs: 16, sm: 19, md: 24 },
                textAlign: "center",
                marginTop: { xs: 1, md: 2 },
                marginLeft: { xs: 5, sm: 8, md: 10 },
                marginRight: { xs: 5, sm: 8, md: 10 }
              }}
            >
              Soy estudiante de desarrollo de software en UADE.
              Siempre estoy sumando conocimientos, ya sea con cursos online o de forma autodidacta.
              Me encanta el mundo de la programación y disfruto crear soluciones ingeniosas para resolver problemas.
            </Typography>) : <Typography
              variant="h3"
              sx={{
                fontFamily: "Varela Round",
                color: "primary.third",
                display: "flex",
                justifyContent: "center",
                fontSize: { xs: 16, sm: 19, md: 24 },
                textAlign: "center",
                marginTop: { xs: 1, md: 2 },
                marginLeft: { xs: 5, sm: 8, md: 10 },
                marginRight: { xs: 5, sm: 8, md: 10 }
              }}>

              I am a software development student at UADE.
              Always adding knowledge, whether with online courses or self-taught.
              In love with the programming world and enjoy creating ingenious solutions to solve problems.</Typography>}
        </Grid>
      </Grid>
      <Grid mt={5} mb={6}>
        <CarouselComp />
      </Grid>
    </Grid>
  );
};

export default Body2;
