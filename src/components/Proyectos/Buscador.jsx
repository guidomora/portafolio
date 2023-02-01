import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import buscador from "../../assets/proyectos/buscador.jpg";

const Buscador = () => {
  return (
    <Card sx={{ maxWidth: 345, margin: 3 }}>
      <CardActionArea>
        <Link
          to="https://buscador-de-imagenes-three.vercel.app/"
          className="subrayado"
          target="_blank"
        >
          <CardMedia
            component="img"
            height="140"
            image={buscador}
            alt="buscador"
            className="heroes"
            sx={{ fontFamily: "Varela Round" }}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontFamily: "Varela Round" }}
            >
              Buscador de imágenes
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontFamily: "Varela Round" }}
            >
              Web App. Se escribe en la barra de navegación lo que se quiere
              buscar y trae 20 imágenes. Hecho con React js y conectado a la API
              de Unsplash
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
};

export default Buscador;
