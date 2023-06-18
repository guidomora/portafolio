import { Box, Paper, Typography } from '@mui/material'
import React from 'react'



const CarouselIcons = ({ icon, nameTec }) => {
  return (
    <Paper sx={{ margin: 2, height: 120, width: 190, display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap" }}
    elevation={3}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          margin: 0.5,
        }}
      >
        {icon}
        <Typography sx={{ marginLeft: 1, fontSize: 23 }}>{nameTec}</Typography>
      </Box>
    </Paper>

  )
}

export default CarouselIcons