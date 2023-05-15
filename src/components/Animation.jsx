import { Grid } from '@mui/material'
import React from 'react'
import "../css/loader.css"

const Animation = () => {
    return (
        <Grid sx={{
            height: 500,
            display: "flex",
            justifyContent: "center",
        }}>
            <div class="loader"></div>
            <div class="loader"></div>
            <div class="loader"></div>
        </Grid>
    )
}

export default Animation