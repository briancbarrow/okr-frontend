import React, { Component } from 'react';
import DeptOkr from './components/DeptOkr';
import logo from './logo.svg';
import 'react-table/react-table.css';
import jsonData from './sampleData';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {jsonData.map((dept, index) => {
          return <DeptOkr key={dept.department} dept={dept}/>
        })}
        

      </div>
    );
  }
}

export default App;
