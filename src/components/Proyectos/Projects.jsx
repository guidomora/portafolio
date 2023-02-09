import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { data } from "./proyectos";

const Projects = () => {
  return (
    <Grid sx={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      flexWrap: "wrap",
      margin: 0,
    }}>
      {data.map((dato) => (
        <Card className="animacion" sx={{ maxWidth: 345, margin: 3, boxShadow: "1px 1px 33px 2px rgba(0,0,0,0.38)"}}>
          <CardActionArea>
            <Link to={dato.link} className="subrayado" target="_blank">
              <CardMedia
                component="img"
                height="140"
                image={`../src/assets/proyectos/${dato.nombreImg}.jpg`}
                alt="floreria"
                className="heroes"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontFamily: "Varela Round" }}
                >
                  {dato.titulo}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontFamily: "Varela Round" }}
                >
                  {dato.descripcion}
                </Typography>
              </CardContent>
            </Link>
          </CardActionArea>
        </Card>
      ))}
    </Grid>
  );
};

export default Projects;
