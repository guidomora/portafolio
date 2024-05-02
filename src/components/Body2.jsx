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
              Soy desarrollador de software Fullstack con experiencia en las ultimas tecnologías del mercado.
              En busca de nuevos desafíos y oportunidades para seguir creciendo profesionalmente
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
              I am a Fullstack software developer with experience in the latest technologies on the market.
              In search of new challenges and opportunities to continue growing professionally 
              </Typography>}
        </Grid>
      </Grid>
      <Grid mt={5} mb={6}>
        <CarouselComp />
      </Grid>
    </Grid>
  );
};

export default Body2;
