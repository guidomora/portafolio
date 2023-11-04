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
    <Grid className="animate__animated animate__fadeIn" sx={{marginTop: (ancho > 800 && ancho < 960) ? 30 : 8 }}>
      <Grid>
        <Typography
          variant="h1"
          sx={{
            fontFamily: "Varela Round",
            textAlign: "center",
            fontSize: { xs: 35, sm: 40, md: 50, lg: 60 },
            marginBottom:{ xs: -10, sm: 0},
            paddingTop:3
          }}
        >
         {(esp == true) ?
              "Hola soy Guido!, Front-end developer" : "Hi I'm Guido! Front-end developer"}
        </Typography>
      </Grid>
       <Animation/>
       <Grid height={100}>

       </Grid>
    </Grid>
  );
};

export default Body1;
