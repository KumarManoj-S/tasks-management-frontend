import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Login, { LoginCallback } from './components/login'

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
      <ThemeProvider theme={theme}>
        <Router>
          <Route exact path="/">
            <div className="App">
              <div className="App-header">
                <h2>Tasks Management</h2>
                <Button variant="contained" color="primary">
                  Add tasks
                    </Button>
              </div>
            </div>
            <Link to="/login">Login</Link>
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/login/callback" component={LoginCallback}>
          </Route>
        </Router>
      </ThemeProvider >
    );
  }
}

export default App;
