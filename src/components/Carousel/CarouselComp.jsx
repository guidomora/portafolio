import React from 'react'
import { Carousel } from '@trendyol-js/react-carousel';
import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { DiReact, DiJsBadge, DiHtml5, DiCss3, DiBootstrap, DiGit, DiCode } from "react-icons/di";
import { SiRedux, SiMaterialui, SiNodedotjs, SiMongodb } from "react-icons/si";
import imgVite from "../../assets/vite.png"
import "./carousel.css"
import FlechaIzquierda from './FlechaIzquierda';
import FlechaDerecha from './FlechaDerecha';


const CarouselComp = () => {
    const win = window.innerWidth
    let cards = 6

    if (win < 500) { cards = 1 } else if (win < 900 && win > 501) { cards = 3 } else if (win < 1100 && win > 901) { cards = 4 } else if (win < 1300 && win > 1101) { cards = 5 }
    return (
        <Grid >
            <Carousel show={cards} slide={1} transition={0.5} swiping={true} className="carousel" leftArrow={<FlechaIzquierda />} rightArrow={<FlechaDerecha />}>
                <Paper
                    sx={{ margin: 2, height: 120, width: 190, display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap" }}
                    elevation={5}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: 0.5,
                        }}
                    >
                        <img src={imgVite} alt="vite" className="vite" />
                        <Typography sx={{ marginLeft: 1, fontSize: 23 }}>Vite js</Typography>
                    </Box>
                </Paper>


                <Paper
                    sx={{ margin: 2, height: 120, width: 190, display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap" }}
                    elevation={3}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: 0.5,
                        }}
                    >
                        <DiReact fontSize={55} color="#23afec" className="rotating" />
                        <Typography sx={{ marginLeft: 1, fontSize: 23 }}>React js</Typography>
                    </Box>
                </Paper>
                <Paper
                    sx={{ margin: 2, height: 120, width: 190, display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap" }}
                    elevation={3}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: 0.5,
                        }}
                    >
                        <SiRedux fontSize={55} color="#ab51ff" />
                        <Typography sx={{ marginLeft: 1, fontSize: 23 }}>Redux</Typography>
                    </Box>
                </Paper>
                <Paper
                    sx={{ margin: 2, height: 120, width: 190, display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap" }}
                    elevation={3}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: 0.5,
                        }}
                    >
                        <DiJsBadge fontSize={55} color="#ffeb3b" />
                        <Typography sx={{ marginLeft: 1, fontSize: 23 }}>Javascript</Typography>
                    </Box>
                </Paper>
                <Paper
                    sx={{ margin: 2, height: 120, width: 190, display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap" }}
                    elevation={3}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: 0.5,
                        }}
                    >
                        <DiHtml5 fontSize={55} color="#ff4d00" />
                        <Typography sx={{ marginLeft: 1, fontSize: 23 }}>HTML</Typography>
                    </Box>
                </Paper>
                <Paper
                    sx={{ margin: 2, height: 120, width: 190, display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap" }}
                    elevation={3}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: 0.5,
                        }}
                    >
                        <DiCss3 fontSize={55} color="#196fff" />
                        <Typography sx={{ marginLeft: 1, fontSize: 23 }}>CSS</Typography>
                    </Box>
                </Paper>
                <Paper
                    sx={{ margin: 2, height: 120, width: 190, display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap" }}
                    elevation={3}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: 0.5,
                        }}
                    >
                        <DiBootstrap fontSize={55} color="#8400ff" />
                        <Typography sx={{ marginLeft: 1, fontSize: 23 }}>Bootstrap</Typography>
                    </Box>
                </Paper>
                <Paper
                    sx={{ margin: 2, height: 120, width: 190, display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap" }}
                    elevation={3}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: 0.5,
                        }}
                    >
                        <DiGit fontSize={55} color="#ff2000" />
                        <Typography sx={{ marginLeft: 1, fontSize: 23 }}>Git</Typography>
                    </Box>
                </Paper>
                <Paper
                    sx={{ margin: 2, height: 120, width: 190, display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap" }}
                    elevation={3}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: 0.5,
                        }}
                    >
                        <SiMaterialui fontSize={55} color="#0084ff" />
                        <Typography sx={{ marginLeft: 1, fontSize: 23 }}>Material UI</Typography>
                    </Box>
                </Paper>
                <Paper
                    sx={{ margin: 2, height: 120, width: 190, display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap" }}
                    elevation={3}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: 0.5,
                        }}
                    >
                        <SiNodedotjs fontSize={55} color="#43853d" />
                        <Typography sx={{ marginLeft: 1, fontSize: 23 }}>Node js</Typography>
                    </Box>
                </Paper>
                <Paper
                    sx={{ margin: 2, height: 120, width: 190, display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap" }}
                    elevation={3}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: 0.5,
                        }}
                    >
                        <SiMongodb fontSize={55} color="#116149" />
                        <Typography sx={{ marginLeft: 1, fontSize: 23 }}>Mongo db</Typography>
                    </Box>
                </Paper>
            </Carousel>
        </Grid>
    )
}

export default CarouselComp