import React from 'react'
import "./App.css";
import "./links.scss";
import Navbar from './components/Navbar';
import Music from './components/Music';
import Player from './components/Player';
const App = () => {
  return (
    <div>
      <div style={{display: "flex"}}>
        <Navbar />
        <Music />
      </div>
      <Player />
    </div>

  )
}

export default App