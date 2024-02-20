import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import border from "../assets/border.png"



const CarouselIcons = ({ icon, nameTec }) => {
  return (
    <Paper sx={{
      background: "linear-gradient(90.01deg,rgba(229,156,255,.24) .01%,rgba(186,156,255,.24) 50.01%,rgba(156,178,255,.24) 100%)", border:"solid 1px rgba(137, 82, 253, 0.3)",
      margin: 2, height: 120, width: 190, display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap",}}
    elevation={ 3} >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            margin: 0.5,
          }}
        >
          {icon}
          <Typography sx={{ marginLeft: 1, fontSize: 20, color:"white", fontFamily:"Montserrat", fontWeight:300 }}>{nameTec}</Typography>
        </Box>
    </Paper >

  )
}

export default CarouselIcons