import { Box, Grid, Typography } from "@mui/material";
import Projects from "./Proyectos/Projects";
import { useSelector } from "react-redux";
import LatestProyect from "./Proyectos/LatestProyect";

const Body3 = () => {
  const { esp } = useSelector(state => state.lang)

  const OPTIONS = { dragFree: true, loop: true }
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <Grid>
      <Box width={"100%"} display={"flex"} alignItems={'center'} flexDirection={"column"}>
        <Typography
          marginBottom={5}
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
            "Último trabajo" : "Latest work"}
        </Typography>
        <Box width={"80%"}>
          <LatestProyect slides={SLIDES} options={OPTIONS} />
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
