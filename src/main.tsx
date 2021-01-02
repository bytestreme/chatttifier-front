import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createBrowserHistory} from 'history';
import {App} from 'app';
import CssBaseline from '@material-ui/core/CssBaseline';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './app/theme';

const history = createBrowserHistory();

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <App history={history}/>
    </ThemeProvider>,
    document.getElementById('root'));
