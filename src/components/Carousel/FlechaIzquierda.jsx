import { Grid } from '@mui/material';
import React from 'react'
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

const FlechaIzquierda = () => {
  return (
    <Grid sx={{marginRight: {xs: 0, lg:3}, cursor: "pointer"}}>
        <BsFillArrowLeftSquareFill fontSize={50} />
    </Grid>
  )
}

export default FlechaIzquierda