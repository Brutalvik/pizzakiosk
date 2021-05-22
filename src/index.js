import React from 'react';
import ReactDOM from 'react-dom';
import './Styles.css'
import App from './App'
import {createMuiTheme, ThemeProvider} from '@material-ui/core';

//Sidenav Font Size
const theme = createMuiTheme({
  typography: {
      fontSize: 15
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
