import React from 'react'; 
import './App.css';
import Home from './Home'
import FrontPage from './FrontPage'
import NavDirectory from './NavDirectory'

function App() {
  return (
    <div className="App">
      <NavDirectory />
      <FrontPage />
      <Home />
    </div>
  );
}

export default App;
