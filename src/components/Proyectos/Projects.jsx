import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CircularProgress, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../Firebase/Firebase";
import { useSelector } from "react-redux";

const Projects = () => {
  const [proyectos, setProyectos] = useState([])
  const [loading, setLoading] = useState(false)
  const { esp } = useSelector(state => state.lang)



  useEffect(() => {
    const obtener = async () => {
      const q = query(collection(db, "proyectos"), orderBy("id", "desc"));
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
    }, 1000);
    obtener()
  }, [])


  return (
    <Grid sx={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      flexWrap: "wrap",
      margin: 0,
    }}>
      {loading ? proyectos.map((proyecto) => (
        <div data-aos="fade-up" key={proyecto.titulo}
          data-aos-anchor-placement="center-bottom">
          <Card sx={{ maxWidth: 345, margin: 3, boxShadow: "0px 0px 55px 0px rgba(137, 82, 253, 0.4)", 
          backgroundColor:"primary.main", border:"solid 1px rgba(137, 82, 253, 0.3)" }} key={proyecto.titulo}>
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
                    sx={{ fontFamily: "Montserrat, sans-serif", textTransform:"capitalize",background: "linear-gradient(90.01deg,#e59cff .01%,#ba9cff 50.01%,#9cb2ff 100%),linear-gradient(180deg,rgba(255,255,255,.4) 0%,rgba(255,255,255,.28) 100%)",
                    WebkitBackgroundClip: "text",
                    color: "transparent", }}
                  >
                    {esp ? proyecto.titulo : proyecto.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="primary.third"
                    fontWeight={300}
                    sx={{ fontFamily: "Montserrat, sans-serif", textTransform:"none"  }}
                  >
                    {esp ? proyecto.descripcion : proyecto.description}

                  </Typography>
                </CardContent>
              </Link>
            </CardActionArea>
          </Card>
        </div>

      )) : <CircularProgress />}

    </Grid>
  );
};

export default Projects;
