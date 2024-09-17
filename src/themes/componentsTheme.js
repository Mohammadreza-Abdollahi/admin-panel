import { createTheme } from "@mui/material";

export const componentsTheme = createTheme({
    palette: {
        secondary:{
            main: '#3fc1c9',
            dark: '#fc5185',
            contrastText: 'white',
        }
    },
    typography: {
        fontFamily: 'font',
        fontSize: 17
    },
});