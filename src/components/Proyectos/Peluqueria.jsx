import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import peluqueria from "../../assets/proyectos/peluqueria.jpg";

const Peluqueria = () => {
  return (
    <Card sx={{ maxWidth: 345, margin: 3 }}>
      <CardActionArea>
        <Link
          to="https://muestra-peluqueria-web-app.vercel.app/"
          className="subrayado"
          target="_blank"
        >
          <CardMedia
            component="img"
            height="140"
            image={peluqueria}
            alt="floreria"
            className="heroes"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{fontFamily: "Varela Round",}}>
              Stella Coifeur
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{fontFamily: "Varela Round",}}>
              WebApp para salon de belleza. lista de productos modificable,
              calendario de turnos para cada empleado y calculador de ganancias
              para cada empleado. Hecho con React js, react router, react big
              calendar y google firebase.
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
};

export default Peluqueria;
