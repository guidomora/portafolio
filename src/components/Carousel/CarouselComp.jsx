import React from 'react'
import { Carousel } from '@trendyol-js/react-carousel';
import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { DiReact, DiJsBadge, DiHtml5, DiCss3, DiBootstrap, DiGit } from "react-icons/di";
import { SiRedux, SiMaterialui, SiNodedotjs, SiMongodb, SiTypescript, SiPostman, SiMicrosoftsqlserver, SiVite } from "react-icons/si";
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
        <Grid sx={{backgroundColor:'primary.main'}} >
            <Carousel show={cards} slide={1} transition={0.5} swiping={true} className="carousel" leftArrow={<FlechaIzquierda />} rightArrow={<FlechaDerecha />}>
                <CarouselIcons icon={<SiVite fontSize={55} color="#9382ff" />} nameTec="Vite js" />
                <CarouselIcons icon={<DiReact fontSize={55} color="#9382ff" className="rotating" />} nameTec="React Js" />
                <CarouselIcons icon={<TbBrandNextjs fontSize={55} color="#9382ff" />} nameTec="Next Js" />
                <CarouselIcons icon={<SiRedux fontSize={55} color="#9382ff" />} nameTec="Redux" />
                <CarouselIcons icon={<SiTypescript fontSize={55} color="#9382ff" />} nameTec="Typescript" />
                <CarouselIcons icon={<SiMaterialui fontSize={55} color="#9382ff" />} nameTec="Material UI" />
                <CarouselIcons icon={<SiNodedotjs fontSize={55} color="#9382ff" />} nameTec="Node js" />
                <CarouselIcons icon={<SiMongodb fontSize={55} color="#9382ff" />} nameTec="Mongo db" />
                <CarouselIcons icon={<SiPostman fontSize={55} color="#9382ff" />} nameTec="Postman" />
                <CarouselIcons icon={<DiJsBadge fontSize={55} color="#9382ff" />} nameTec="Javascript" />
                <CarouselIcons icon={<DiGit fontSize={55} color="#9382ff" />} nameTec="Git" />
                <CarouselIcons icon={<DiHtml5 fontSize={55} color="#9382ff" />} nameTec="HTML" />
                <CarouselIcons icon={<DiCss3 fontSize={55} color="#9382ff" />} nameTec="CSS" />
                <CarouselIcons icon={<DiBootstrap fontSize={55} color="#9382ff" />} nameTec="Bootstrap" />
                <CarouselIcons icon={<SiMicrosoftsqlserver fontSize={48} color="#9382ff" />} nameTec="SQL Server" />

            </Carousel>
        </Grid>
    )
}

export default CarouselComp