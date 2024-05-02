import { Grid, Typography } from "@mui/material";
import React from "react";
import "../App.css"
import "../css/loader.css"
import Animation from "./Animation";
import { useSelector } from "react-redux";


const Body1 = () => {
  const { esp } = useSelector(state => state.lang)

  const ancho = window.innerWidth

  return (
    <Grid className="animate__animated animate__fadeIn" sx={{overflow:'hidden', backgroundColor:"#040116", marginTop: (ancho > 800 && ancho < 960) ? 30 : 8 }}>
      <Grid>
        <Typography
          variant="h1"
          sx={{
            background: "linear-gradient(180deg,#fff 0%,rgba(255,255,255,.7) 100%)",
            fontFamily: "Montserrat",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontWeight: 600,
            textAlign: "center",
            fontSize: { xs: 35, sm: 40, md: 50, lg: 60 },
            marginBottom:{ xs: -10, sm: -10},
            paddingTop:10,
            zIndex: 1,
            position: "relative",
          }}
        >
         {(esp == true) ?
              "Hola soy Guido!" : "Hi I'm Guido!"}
        </Typography>
      </Grid>
       <Animation/>
       <Grid height={100}>

       </Grid>
    </Grid>
  );
};

export default Body1;
