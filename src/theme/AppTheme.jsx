import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import React from 'react'
import { myTheme } from './myTheme'


const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={myTheme}>
        <CssBaseline />
        {children}
    </ThemeProvider>
  )
}

export default AppTheme