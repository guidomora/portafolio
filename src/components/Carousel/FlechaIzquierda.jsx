import { Grid } from '@mui/material';
import React from 'react'
import { MdKeyboardArrowLeft } from "react-icons/md";

const FlechaIzquierda = () => {
  return (
    <Grid sx={{marginRight: {xs: 4, lg:3}, cursor: "pointer"}}>
        <MdKeyboardArrowLeft fontSize={50} style={{color:'white'}}/>
    </Grid>
  )
}

export default FlechaIzquierda