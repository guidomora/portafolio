import { AppBar, Button, Grid, Link, Typography } from "@mui/material";
import React from "react";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import { DiCodeBadge } from "react-icons/di";
import useLangStore from "../hooks/useLangStore";
import TranslateIcon from '@mui/icons-material/Translate';
import { useSelector } from "react-redux";
import "../css/Buttons.css"

const NavBar = () => {
  const { esp } = useSelector(state => state.lang)
  const { setLang } = useLangStore()

  return (
    <Grid marginBottom="130px">
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          height: 70,
          width: "100%"
        }}
      >
        <Grid display={"flex"} alignItems={"center"}>
          <DiCodeBadge className="code" />
          <button onClick={setLang} className="buttonsNav">
            English
          </button>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <button className="buttonsNav2">
          <Link href="#contacto">
              <Typography variant="p" sx={{ color: "white", marginRight: 1, fontFamily: "Segoe UI" }}>
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
