import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CircularProgress, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../Firebase/Firebase";

const Projects = () => {
const [proyectos, setProyectos] = useState([])
const [loading, setLoading] = useState(false)

  


  useEffect(() => {
    const obtener = async () => {
      const q = query(collection(db, "proyectos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data() });
      });
      setProyectos(docs);
    });

    }
    setTimeout(() => {
      setLoading(true)
    }, 2000);
    obtener()
  }, [])
   
  console.log(loading);
  console.log(proyectos.length);

  return (
    <Grid sx={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      flexWrap: "wrap",
      margin: 0,
    }}>
      {loading ? proyectos.map((proyecto) => (
        <Card className="animate__animated animate__fadeIn animacion" sx={{ maxWidth: 345, margin: 3, boxShadow: "1px 1px 33px 2px rgba(0,0,0,0.38)" }} key={proyecto.titulo}>
          <CardActionArea>
            <Link to={proyecto.link} className="subrayado" target="_blank">
              <CardMedia
                component="img"
                height="140"
                image={proyecto.imagen}
                alt={proyecto.titulo}
                className="heroes"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontFamily: "Varela Round" }}
                >
                  {proyecto.titulo}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontFamily: "Varela Round" }}
                >
                  {proyecto.descripcion}
                </Typography>
              </CardContent>
            </Link>
          </CardActionArea>
        </Card>
      )) : <CircularProgress /> }
      
    </Grid>
  );
};

export default Projects;
