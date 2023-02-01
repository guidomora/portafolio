import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const myTheme =  createTheme({
    palette: {
        primary: {
            main:"#480CA8"
        },
        secondary: {
            main:"#ffffff"
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