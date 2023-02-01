import { AppBar, Button, Grid, Link, Typography } from "@mui/material";
import React from "react";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import { DiCodeBadge } from "react-icons/di";

const NavBar = () => {
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
        <DiCodeBadge className="code" />
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
            sx={{ marginRight: {xs:2, sm: 4, md:8}, fontFamily: "Segoe UI" }}
          ><Link href="#contacto">
            <Typography variant="p" sx={{ color: "white", marginRight: 1 }}>
              
              {" "}
              Contacto
             
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
