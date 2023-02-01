import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import heroes from "../../assets/proyectos/heroes2.jpg";

const HeroesApp = () => {
  return (
    <Card sx={{ maxWidth: 345, margin:3 }}>
      <CardActionArea>
        <Link
          to="https://heroes-app-lake-psi.vercel.app/"
          className="subrayado"
          target="_blank"
        >
          <CardMedia
            component="img"
            height="140"
            image={heroes}
            alt="heroes"
            className="heroes"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{fontFamily: "Varela Round",}}>
              Heroes App
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{fontFamily: "Varela Round",}}>
              WebApp en la que se pueden buscar diferentes super heroes de
              marvel y dc comics. Se puede ver segun la editorial o su nombre en
              el buscador. Hecho con React js, react router rutas publicas y
              privadas
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
};

export default HeroesApp;
