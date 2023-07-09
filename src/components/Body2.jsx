import { Grid, Typography } from "@mui/material";
import React from "react";
import CarouselComp from "./Carousel/CarouselComp";
import { useSelector } from "react-redux";

const Body2 = () => {
  const { esp } = useSelector(state => state.lang)

  return (
    <Grid sx={{ marginTop: "50px" }} id="grid" className="animate__animated animate__fadeIn">
      <Grid
        sx={{
          backgroundColor: "primary.main",
          height: {xs: 250, sm:250 }
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
              fontSize: { xs: 21, sm: 27, md: 38 },
            }}
          >
          </Typography>
          {(esp == true) ?
            (<Typography
              variant="h3"
              sx={{
                fontFamily: "Varela Round",
                color: "secondary.main",
                display: "flex",
                justifyContent: "center",
                fontSize: { xs: 16, sm: 19, md: 24 },
                textAlign: "center",
                marginTop: { xs: 1, md: 2 },
                marginLeft: { xs: 5, sm: 8, md: 10 },
                marginRight: { xs: 5, sm: 8, md: 10 }
              }}
            >
              Soy Front-end developer, en camino a dominar el MERN stack. Estudiante de
              desarrollo de software en UADE y siempre adquiriendo nuevos conocimientos, a
              través de cursos online o como autodidacta. Me encanta el mundo de
              la programacion y de poder crear soluciones a problemas.
            </Typography>) : <Typography
              variant="h3"
              sx={{
                fontFamily: "Varela Round",
                color: "secondary.main",
                display: "flex",
                justifyContent: "center",
                fontSize: { xs: 16, sm: 19, md: 24 },
                textAlign: "center",
                marginTop: { xs: 1, md: 2 },
                marginLeft: { xs: 5, sm: 8, md: 10 },
                marginRight: { xs: 5, sm: 8, md: 10 }
              }}>
              I'm a Front-End Developer, on my way to mastering the MERN stack. Software development student at UADE University and always acquiring new knowledge,
              through online courses or as a self-taught. I love the world of programming and being able to create solutions to problems.</Typography>}
        </Grid>
      </Grid>
      <Grid mt={5} mb={6}>
        <CarouselComp />
      </Grid>
    </Grid>
  );
};

export default Body2;
