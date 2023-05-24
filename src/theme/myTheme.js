import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const myTheme =  createTheme({
    palette: {
        primary: {
            main:"#141c3a"
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
        typography:{
            fontFamily: [
                'Varela Round',
            ]
        }
    }
})

// #480CA8 violeta