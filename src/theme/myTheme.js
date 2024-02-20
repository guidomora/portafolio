import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const myTheme =  createTheme({
    palette: {
        primary: {
            main:"#040116",
            third:'#efedfdb3' // violeta muy clarito clarito
        },
        secondary: {
            main:"#ffffff"
        },
        third: {
            main:"#3d6aff"
        },
        error: {
            main: red.A400
        },
    },
    typography:{
        fontFamily: [
            'Instrument Sans',
        ]
    }
})

// #480CA8 violeta