import React from 'react';
import './App.css';
import Home from './Home'
import FrontPage from './FrontPage'
import NavDirectory from './NavDirectory'
import { BrowserRouter as Router, Route, withRouter  } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavDirectory />
      <FrontPage />
    </div>
  );
}

export default App;
