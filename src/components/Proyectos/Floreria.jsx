import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import floreria from "../../assets/proyectos/floreria.jpg";

const Floreria = () => {
  return (
    <Card sx={{ maxWidth: 345, margin: 3 }}>
      <CardActionArea>
        <Link
          to="https://floreriamorabito.com.ar/"
          className="subrayado"
          target="_blank"
        >
          <CardMedia
            component="img"
            height="140"
            image={floreria}
            alt="floreria"
            className="heroes"
            sx={{fontFamily: "Varela Round",}}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{fontFamily: "Varela Round",}}>
              Floreria Morabito
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{fontFamily: "Varela Round",}}>
              Página web de ecommerce (no se puede comprar), permite seleccionar
              productos, sumarlos al carrito y que arroje la suma final. Hecho
              con React js, react router y Google Firebase
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
};

export default Floreria;
