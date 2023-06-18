import React from 'react'
import { Carousel } from '@trendyol-js/react-carousel';
import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { DiReact, DiJsBadge, DiHtml5, DiCss3, DiBootstrap, DiGit } from "react-icons/di";
import { SiRedux, SiMaterialui, SiNodedotjs, SiMongodb, SiTypescript, SiPostman } from "react-icons/si";
import {TbBrandNextjs} from "react-icons/tb"
import imgVite from "../../assets/vite.png"
import "./carousel.css"
import FlechaIzquierda from './FlechaIzquierda';
import FlechaDerecha from './FlechaDerecha';
import CarouselIcons from '../../hooks/CarouselIcons';


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
                <CarouselIcons icon={<DiReact fontSize={55} color="#23afec" className="rotating" />} nameTec="React Js" />
                <CarouselIcons icon={<TbBrandNextjs fontSize={55} color="black" />} nameTec="Next Js" />
                <CarouselIcons icon={<SiRedux fontSize={55} color="#ab51ff" />} nameTec="Redux" />
                <CarouselIcons icon={<SiTypescript fontSize={55} color="#0080FF" />} nameTec="Typescript" />
                <CarouselIcons icon={<SiMaterialui fontSize={55} color="#0084ff" />} nameTec="Material UI" />
                <CarouselIcons icon={<SiNodedotjs fontSize={55} color="#43853d" />} nameTec="Node js" />
                <CarouselIcons icon={<SiMongodb fontSize={55} color="#116149" />} nameTec="Mongo db" />
                <CarouselIcons icon={<SiPostman fontSize={55} color="rgb(255, 108, 55)" />} nameTec="Postman" />
                <CarouselIcons icon={<DiJsBadge fontSize={55} color="#ffeb3b" />} nameTec="Javascript" />
                <CarouselIcons icon={<DiGit fontSize={55} color="#ff2000" />} nameTec="Git" />
                <CarouselIcons icon={<DiHtml5 fontSize={55} color="#ff4d00" />} nameTec="HTML" />
                <CarouselIcons icon={<DiCss3 fontSize={55} color="#196fff" />} nameTec="CSS" />
                <CarouselIcons icon={<DiBootstrap fontSize={55} color="#8400ff" />} nameTec="Bootstrap" />
            </Carousel>
        </Grid>
    )
}

export default CarouselComp