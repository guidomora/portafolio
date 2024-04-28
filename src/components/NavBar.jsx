import { AppBar, Button, Grid, Link, Typography } from "@mui/material";
import React from "react";
import { DiCodeBadge } from "react-icons/di";
import useLangStore from "../hooks/useLangStore";
import { useSelector } from "react-redux";
import "../css/Buttons.css"

const NavBar = () => {
  const { esp } = useSelector(state => state.lang)
  const { setLang } = useLangStore()

  const scrollToContact = () => {
    const contactoSection = document.getElementById('contacto');
    if (contactoSection) {
      contactoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const contactoSection = document.getElementById('projects');
    if (contactoSection) {
      contactoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Grid>
      <AppBar
        position="fixed"
        sx={{
          // boxShadow: "0px 0px 55px 0px rgba(94, 52, 161, 0.5)",
          boxShadow: "0px 0px 55px 0px rgba(137, 82, 253, 0.75)", 
          display: "flex",
          flexDirection: "row",
          justifyContent: {xs:'space-evenly',sm:"space-between"},
          height: 70,
          width: "100%",
          backgroundColor: "black",
        }}
      >
        <Grid display={"flex"} alignItems={"center"} marginLeft={2}>
          <button onClick={setLang} className="buttonsNav">
            {(esp == true) ? "English" : "Español"}
          </button>
        </Grid>
        <Grid display={"flex"} alignItems={"center"} marginLeft={2}>
          <button onClick={scrollToProjects} className="buttonsNav">
          {(esp == true) ? "Proyectos" : "Projects"}
          </button>
        </Grid>
        <Grid
          sx={{
            marginRight:2,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <button className="buttonsNav2">
          <Link onClick={scrollToContact} sx={{marginLeft:1, textDecoration: "none"}}>
              <Typography variant="p" sx={{ color: "white", marginRight: 1, fontWeight:400, fontFamily:'Montserrat', textTransform:'none'}}>
              {(esp == true) ? "Contacto" : "Contact me"}
              </Typography>
            </Link>
          </button>
        </Grid>
      </AppBar>
    </Grid>
  );
};

export default NavBar;
