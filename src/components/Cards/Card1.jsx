import React from "react";
import { Divider, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { DiReact, DiJsBadge, DiHtml5, DiCss3, DiBootstrap, DiGit, DiCode } from "react-icons/di";
import { SiRedux, SiMaterialui } from "react-icons/si";
import imgVite from "../../assets/vite.png"


const Card1 = () => {
  return (
    <Grid sx={{ marginLeft: 1 }}>
      <Paper
        elevation={3}
        sx={{
          width: {xs:300, sm: 400},
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            margin: 0.5,
          }}
        >
        <DiCode fontSize={45}/>
         <Typography
          variant="h3"
          sx={{ fontSize: 18, fontFamily: "typography.fontFamily", marginBottom:2, marginTop:2 }}
        >
          Tecnologias:
        </Typography>   
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            margin: 0.5,
          }}
        >
          <DiReact fontSize={45} color="#23afec" className="rotating"/>
          <Typography sx={{marginLeft: 1}}>React js</Typography>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            margin: 0.5,
          }}
        >
          <img src={imgVite} alt="vite" className="vite"/>
          <Typography sx={{marginLeft: 1}}>Vite js</Typography>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            margin: 0.5,
          }}
        >
          <SiRedux fontSize={40} color="#ab51ff"/>
          <Typography sx={{marginLeft: 1}}>Redux</Typography>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            margin: 0.5,
          }}
        >
          <DiJsBadge fontSize={45} color="#ffeb3b"/>
          <Typography sx={{marginLeft: 1}}>Javascript</Typography>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            margin: 0.5,
          }}
        >
          <DiHtml5 fontSize={45} color="#ff4d00"/>
          <Typography sx={{marginLeft: 1}}>HTML</Typography>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            margin: 0.5,
          }}
        >
          <DiCss3 fontSize={45} color="#196fff"/>
          <Typography sx={{marginLeft: 1}}>CSS</Typography>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            margin: 0.5,
          }}
        >
          <DiBootstrap fontSize={45} color="#8400ff"/>
          <Typography sx={{marginLeft: 1}}>Bootstrap</Typography>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            margin: 0.5,
          }}
        >
          <DiGit fontSize={45} color="#ff2000"/>
          <Typography sx={{marginLeft: 1}}>Git</Typography>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            margin: 0.5,
          }}
        >
          <SiMaterialui fontSize={45} color="#0084ff"/>
          <Typography sx={{marginLeft: 1}}>Material UI</Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Card1;
