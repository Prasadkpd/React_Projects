import { createTheme } from '@material-ui/core';

const theme = createTheme({
    palette: {
        primary: {
            light: '#ffffff',
            main: '#e0e0e0',
            dark: '#aeaeae',
            contrastText: '#78909c',
        },
        secondary: {
            light: '#e5ffff',
            main: '#b2ebf2',
            dark: '#81b9bf',
            contrastText: '#000',
        },
    },
});

export default theme;