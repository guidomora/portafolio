import { Grid } from '@mui/material'
import React from 'react'
import "../css/loader.css"
import light from "../assets/light2.png"

const Animation = () => {
    return (
        <Grid sx={{
            display: "flex",
            justifyContent: "center",
            zIndex:0,
            position: "relative",
            backgroundColor:"#090232",
            marginTop:{xs:5,sm:0},
            marginBottom:{xs:-25,sm:-30 ,lg:-30}
        }}>
            {/* <div className="loader"></div>
            <div className="loader"></div>
            <div className="loader"></div> */}
            <img className='violetTexture' src={light} alt="texture" />
        </Grid>
    )
}

export default Animation