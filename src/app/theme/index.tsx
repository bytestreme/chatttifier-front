import red from '@material-ui/core/colors/red';
import {createMuiTheme} from '@material-ui/core/styles';


const theme = createMuiTheme({
    props: {
        MuiButtonBase: {
            disableRipple: true,
        },
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '::-webkit-scrollbar': {
                    'width': '7px',
                    'border-radius': '50px'
                },
                '::-webkit-scrollbar-track': {
                    'background-color': 'rgba(0, 0, 0, 0.05)',
                    'border-radius': '50px'
                },
                '::-webkit-scrollbar-thumb': {
                    'background-color': 'rgba(0, 0, 0, 0.1)',
                    'border-radius': '50px',
                }
            }
        }
    },
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },
});

export default theme;
