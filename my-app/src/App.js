import React from 'react';
import logo from './logo.svg';
import './App.css';
import Serverlist from './Components/Serverlist'

import axios from 'axios';

function App() {

  
  return (
    <div className="App">
    <h1> Final Fantasy 14 Server List</h1>
    <Serverlist/>
    </div>
  );
}

export default App;
