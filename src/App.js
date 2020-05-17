import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Tasks Management</h2>
          <Button variant="contained" color="primary">
            Add tasks
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
