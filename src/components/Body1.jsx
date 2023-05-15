import { Grid, Typography } from "@mui/material";
import React from "react";
import "../App.css"
import "../css/loader.css"
import Animation from "./Animation";
import { useSelector } from "react-redux";


const Body1 = () => {
  const { esp } = useSelector(state => state.lang)
  return (
    <Grid className="animate__animated animate__fadeIn" sx={{marginTop:10}}>
      <Grid>
        <Typography
          variant="h1"
          sx={{
            fontFamily: "Varela Round",
            textAlign: "center",
            fontSize: { xs: 35, sm: 40, md: 50, lg: 60 },
            marginBottom:{ xs: -10, sm: 0}
          }}
        >
         {(esp == true) ?
              "Hola! soy Guido" : "Hi! I'm Guido"}
        </Typography>
      </Grid>
       <Animation/>
    </Grid>
  );
};

export default Body1;
