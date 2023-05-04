import { AppBar, Button, Grid, Link, Typography } from "@mui/material";
import React from "react";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import { DiCodeBadge } from "react-icons/di";
import useLangStore from "../hooks/useLangStore";
import TranslateIcon from '@mui/icons-material/Translate';
import { useSelector } from "react-redux";

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
          <Button onClick={setLang} variant="outlined" color={"secondary"} endIcon={<TranslateIcon />}>English</Button>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            variant="outlined"
            color="secondary"
            sx={{ marginRight: { xs: 2, sm: 4, md: 8 }, fontFamily: "Segoe UI" }}
          ><Link href="#contacto">
              <Typography variant="p" sx={{ color: "white", marginRight: 1, fontFamily: "Segoe UI" }}>
              {(esp == true) ? "Contacto" : "Contact"}
              </Typography>
            </Link>
            <ConnectWithoutContactIcon sx={{ fontSize: 35 }} />
          </Button>
        </Grid>
      </AppBar>
    </Grid>
  );
};

export default NavBar;
