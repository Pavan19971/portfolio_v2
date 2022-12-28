import React from 'react'
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRouter'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
const theme = createMuiTheme({
    palette: {

        // secondary: red[300]
    },
    transitions: {},
    mixins: {},
    typography: {

    }
});
const jsx = (
    <MuiThemeProvider theme={theme}>
        <AppRouter />
    </MuiThemeProvider>
)
ReactDOM.render(jsx, document.getElementById('app')) 