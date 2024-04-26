import { Box, Grid, Typography } from "@mui/material";
import Projects from "./Proyectos/Projects";
import { useSelector } from "react-redux";
import LatestProyect from "./Proyectos/LatestProyect";
import { useEffect, useState } from "react";
import LatestMobile from "./Proyectos/LatestMobile";

const Body3 = () => {
  const { esp } = useSelector(state => state.lang)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Remueve el listener de resize al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const OPTIONS = { dragFree: true, loop: true }

  return (
    <Grid>
      <Box width={"100%"} display={"flex"} alignItems={'center'} flexDirection={"column"}>
        <Typography
          variant="h4"
          sx={{
            background: "linear-gradient(180deg,#fff 0%,rgba(255,255,255,.7) 100%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 600,
            display: "flex",
            justifyContent: "center",
            fontSize: { xs: 25, sm: 30, md: 50 },
            mt:{xs:0, md:5},
            mb:{xs:0, md:5}
          }}
        >
          {(esp == true) ?
            "Último trabajo" : "Latest work"}
        </Typography>
        <Box sx={{width:{xs:'90%', lg:'80%'}}}>
          {windowWidth <= 1024 ? <LatestMobile options={OPTIONS} /> :
            <LatestProyect options={OPTIONS} />}
        </Box>
      </Box>
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
              fontSize: { xs: 25, sm: 30, md: 50 },
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
    </Grid>
  );
};

export default Body3;
