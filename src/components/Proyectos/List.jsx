import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import list from "../../assets/proyectos/list.jpg";

const List = () => {
  return (
    <Card sx={{ maxWidth: 345, margin: 3 }}>
      <CardActionArea>
        <Link
          to="https://to-do-list-plum-two.vercel.app/"
          className="subrayado"
          target="_blank"
        >
          <CardMedia
            component="img"
            height="140"
            image={list}
            alt="list"
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
              To do list
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontFamily: "Varela Round" }}
            >
              To do list. Hecha con React js y sweet alert 2
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
};

export default List;