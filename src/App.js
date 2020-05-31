import React, { Component } from 'react';
import './App.css';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Login, { LoginCallback } from './components/Login'
import HomeWrapper from './components/HomeWrapper'
import { CookiesProvider } from 'react-cookie';

let theme = createMuiTheme({
  palette: {
    primary: {
      light: '#5995de',
      main: '#1568ac',
      dark: '#003e7c',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffffff',
      main: '#f5f5f5',
      dark: '#c2c2c2',
      contrastText: '#000',
    },
  },
  status: {
    danger: 'red',
  },
});
theme = responsiveFontSizes(theme);

class App extends Component {
  render() {
    return (
      <CookiesProvider>
        <ThemeProvider theme={theme}>
          <Router>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/" render={(props) => <HomeWrapper {...props} />} />
            <Route exact path="/login/callback" component={LoginCallback}>
            </Route>
          </Router>
        </ThemeProvider >
      </CookiesProvider >
    );
  }
}

export default App;
